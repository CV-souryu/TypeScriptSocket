/*
 * @Date: 2022-02-06 09:15:00
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-02-21 11:30:53
 * @FilePath: \SocketV2\src\Class\People.ts
 */
import { Socket } from "net";
import { send } from "../Common/send";
import { logger } from "../Init";
import { SocketClientMsg, SocketEnum, SocketServerMsg } from "../Proto";
// import { User, ClientMSG, ServerMSG, msgType } from "./Msg";
import { encodeMSG } from "../Common/encode"
import mutexify = require("mutexify");
import { RoomControl } from "./Room";
import { InputBufferTeam, OutputBufferTeam } from "./BufferTeam";
// type PeopleInfo = User.UserInfo & User.UserPosition
const defaultPeopleInfo = { strUserId: "", direction: 0, nickname: "unknow", x: 0, y: 0, personAppearance: 1 }

// class MSGNode {

//     private next: MSGNode | undefined
//     constructor(private msg?: Uint8Array, private prev?: MSGNode) {

//     }
//     getMsg(): Uint8Array | undefined {
//         if (this.prev) {
//             this.prev.next = this.next
//             return this.msg
//         } else {
//             if (this.next) {
//                 return this.next.getMsg()
//             }

//         }
//     }
//     push(msg: Uint8Array) {
//         if (this.next) {
//             this.next.push(msg)
//         } else {
//             this.next = new MSGNode(msg, this)
//         }
//     }
// }
const roomControl = RoomControl.Control

export class ClientControl {
    /**全部People的Map<symbol, People>*/
    private static PeopleControl = new Map<symbol, ClientControl>()
    /**主循环锁 */
    private static TaskLock = false
    /**连麦哈希组 */
    private RTCMap?: Map<symbol, ClientControl>
    /**发送消息缓冲 */
    private netOutput: OutputBufferTeam
    /**接收消息缓冲 */
    private netInput: InputBufferTeam

    constructor(public Key: symbol, public Id: number, public socket: Socket, public roomID: symbol | undefined = undefined, public info = { ...defaultPeopleInfo }) {
        ClientControl.PeopleControl.set(Key, this)
        this.netInput = new InputBufferTeam(this)
        this.netOutput = new OutputBufferTeam(this)
        this.send(encodeMSG(SocketEnum.msgType.ClientInit, SocketServerMsg.ConnectInit.encode(SocketServerMsg.ConnectInit.create({
            Id
        })).finish()))
    }
    /**缓冲队列取回任务 */
    input(data: Uint8Array) {
        try {
            const MSG = SocketClientMsg.Msg.decode(data)
            if (MSG) {
                roomControl.emit(MSG, this)
            } else {
                throw new Error("解析失败");
            }
        } catch (e) {
            console.log(e);
            this.netInput.reset()
        }
    }
    /**最终消息发送 */
    output(data: Uint8Array) {
        send(this.socket, data)
    }
    /**主循环方法 */
    static StartLoopMsg() {
        if (ClientControl.TaskLock) return;
        ClientControl.TaskLock = true
        ClientControl.PeopleControl.forEach((p) => {
            p.sendMSG()
            p.loadMSG()
        })
        ClientControl.TaskLock = false
    }
    /**从Socket缓冲区取回到client缓冲区 */
    loadMSG() {
        this.netInput.push(this.socket.read())
    }
    /**client缓冲区写入Socket缓冲区*/
    sendMSG() {
        this.netOutput.pop()
    }
    /**将消息放入Client缓冲区 */
    send(data: Uint8Array) {
        this.netOutput.push(data)
    }
    move(MSG: SocketClientMsg.Move) {
        const { info } = this
        const { direction, x, y } = MSG
        info.direction = direction
        info.y = y
        info.x = x
        return encodeMSG(SocketEnum.msgType.UserMove, SocketServerMsg.Move.encode(SocketServerMsg.Move.create({
            Id: this.Id,
            direction,
            x,
            y
        })).finish())
    }
    RTCMapInit(Room: Map<symbol, ClientControl>) {
        this.RTCMap = Room;
        Room.set(this.Key, this)
    }
    link(people: ClientControl) {
        const [OtherRTC, ThisRTC] = [people.RTCMap, this.RTCMap]
        if (ThisRTC) {
            if (OtherRTC) {
                OtherRTC.forEach((p) => {
                    ThisRTC.set(p.Key, p)
                })
                OtherRTC.clear()
            } else {
                ThisRTC.set(people.Key, people)
                people.RTCMap = ThisRTC
            }
            const LinkList: SocketServerMsg.LinkRTC = SocketServerMsg.LinkRTC.create({
                members: []
            })

            ThisRTC.forEach((p) => {
                LinkList.members.push(p.Id)
            })
            const linkMSG: Uint8Array = encodeMSG(SocketEnum.msgType.UserLink, SocketServerMsg.LinkRTC.encode(LinkList).finish())

            people.RTCMap = ThisRTC
            //logger.info("创建组队", LinkList.members, text)
            ThisRTC.forEach((p) => {
                p.send(linkMSG)
            })

        } else if (OtherRTC) {
            people.link(this)
        } else {
            const map = new Map().set(this.Key, this)
            this.RTCMap = map
            this.link(people)
        }
    }
    unLink() {
        try {
            if (this.RTCMap) {
                const RTCMap = this.RTCMap
                RTCMap.delete(this.Key)
                this.RTCMap = undefined
                const UnLinkRTCMSG: Uint8Array = encodeMSG(SocketEnum.msgType.UserUnLink,
                    SocketServerMsg.UnLinkRTC.encode(SocketServerMsg.UnLinkRTC.create({
                        Id: this.Id
                    })).finish()
                )
                this.send(UnLinkRTCMSG)
                RTCMap.forEach(p => {
                    p.send(UnLinkRTCMSG)
                })
            }
        } catch (error) {
            console.log("我超，有问题");
        }

    }
    getMsg(data: Buffer) {
        if (data) {
            this.netInput.push(data)
        }
    }
    destroy() {
        this.netOutput.reset()
        this.netInput.reset()
        ClientControl.PeopleControl.delete(this.Key)
    }
}
