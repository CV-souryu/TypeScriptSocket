/*
 * @Date: 2022-02-06 09:15:00
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-02-11 16:28:08
 * @FilePath: \SocketV2\src\Class\People.ts
 */
import { Socket } from "net";
import { send } from "../Common/send";
import { User, ClientMSG, ServerMSG, msgType } from "./Msg";
type PeopleInfo = User.UserInfo & User.UserPosition
const defaultPeopleInfo: PeopleInfo = { strUserID: "", direction: 0, nickname: "unknow", x: 0, y: 0, personAppearance: 1 }

class MSGNode {

    private next: MSGNode | undefined
    constructor(private msg: string, private prev?: MSGNode) {

    }
    getMsg(): string {
        if (this.prev) {
            this.prev.next = this.next
            return this.msg
        } else {
            if (this.next) {
                return this.next.getMsg()
            } else {
                return ""
            }

        }
    }
    push(msg: string) {
        if (this.next) {
            this.next.push(msg)
        } else {
            this.next = new MSGNode(msg, this)
        }
    }
}

export class People {
    private msg: MSGNode = new MSGNode("")
    private live: boolean = false
    private RTCMap?: Map<symbol, People>
    constructor(public Key: symbol, public ID: string, public socket: Socket, public roomID: symbol = Symbol.for('1684'), public info: PeopleInfo = { ...defaultPeopleInfo }) {
    }
    startMSG() {
        const text = this.msg.getMsg()
        if (text) {
            send(this.socket, text)
            this.startMSG()
        } else {
            this.live = false
        }
    }
    send(data: string) {
        // send(this.socket,data)
        this.msg.push(data)
        if (!this.live && (this.live = true)) {
            this.startMSG()
        }
    }
    move(MSG: User.UserPosition) {
        const { info } = this
        const {direction,x,y} = MSG
        info.direction = direction
        info.y = y
        info.x = x
        const move:ServerMSG.MoveMSG ={
            msgType:msgType.UserMove,
            ID:this.ID,
            direction,x,y
        } 
        return move
    }
    RTCMapInit(Room:Map<symbol, People>){
        this.RTCMap = Room;
        Room.set(this.Key,this)
    }
    link(people: People) {
        const [OtherRTC,ThisRTC] = [people.RTCMap,this.RTCMap]
        if (ThisRTC|| OtherRTC) {
            if (!OtherRTC && ThisRTC) {
                ThisRTC.set(people.Key, people)
                people.RTCMap = ThisRTC
                const linkMSG: ServerMSG.LinkRTCMSG = {
                    msgType: msgType.UserLink,
                    members: []
                }
                ThisRTC.forEach((p) => {
                    linkMSG.members.push(p.ID)
                })
                const text = JSON.stringify(linkMSG)
                ThisRTC.forEach((p) => {
                    p.send(text)
                })
            } else if (!ThisRTC&& OtherRTC) {
                people.link(this)
            } else if(ThisRTC&& OtherRTC) {
                OtherRTC.forEach((p)=>{
                    ThisRTC.set(p.Key,p)
                })
                OtherRTC.clear()
                const joinThis: ServerMSG.LinkRTCMSG = {
                    msgType: msgType.UserLink,
                    members: []
                }
                ThisRTC.forEach((p)=>{
                    joinThis.members.push(p.ID)
                })
                people.RTCMap = ThisRTC
                const text = JSON.stringify(joinThis)
                ThisRTC.forEach((p) => {
                    p.send(text)
                })
            }
        } else {
            const map = new Map().set(this.Key, this)
            this.RTCMap = map
            this.link(people)

        }
    }
    unLink(){
        try {
            if(this.RTCMap){
                const RTCMap= this.RTCMap
                RTCMap.delete(this.Key)
                this.RTCMap = undefined
                const UnLinkRTCMSG:ServerMSG.UnLinkRTCMSG={
                    msgType:msgType.UserUnLink,
                    ID:this.ID
                }
                const text = JSON.stringify(UnLinkRTCMSG)      
                this.send(text)
                RTCMap.forEach(p=>{
                    p.send(text)
                })
            }
        } catch (error) {
            console.log("我超，有问题");
            
        }
        
    }
}
