/*
 * @Date: 2022-02-06 09:15:00
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-02-07 15:07:46
 * @FilePath: \TypeScriptSocket\src\Class\People.ts
 */
import { Socket } from "net";
import { send } from "../Common/send";
import { PeopleInfo, UserPosition } from "../Schema/module/msg";
const defaultPeopleInfo: PeopleInfo = { direction: "up", nickname: "unknow", positionX: 0, positionY: 0, personAppearance: 1 }

class MSGHead {

}
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
    constructor(public ID: symbol, public socket: Socket, public info: PeopleInfo = { ...defaultPeopleInfo }) {
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
    move(info: UserPosition) {
        this.info = Object.assign(this.info, info)
    }
}
