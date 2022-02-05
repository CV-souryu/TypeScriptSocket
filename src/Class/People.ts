import { Socket } from "net";
import { send } from "../Common/send";
export type PeopleInfo = {
    nickName: string,
    x: number,
    y: number,
    direction: string,
    personAppearance: number,
}

export class People {   
    constructor(public ID: symbol, public socket: Socket,public info:PeopleInfo) {

    }
    send(data: string) {
        send(this.socket, data)
    }
    move(){
        
    }
}
