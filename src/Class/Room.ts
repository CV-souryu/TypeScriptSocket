/*
 * @Date: 2022-02-06 09:15:00
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-02-07 15:06:37
 * @FilePath: \TypeScriptSocket\src\Class\Room.ts
 */
import { People } from "./People";
import { Schema } from "../Schema"
import { RoomInitMSG, UserLeaveMSG } from "../Schema/module/msg";
type ClientMap = Map<symbol, People>
class Room {
    private clientMap: ClientMap = new Map()
    constructor() {

    }
    send(data: string) {
        this.clientMap.forEach((p) => {
            p.send(data)
        })
    }
    join(people: People, data: string) {
        this.send(data)
        if (!this.clientMap.has(people.ID)) {
            this.clientMap.set(people.ID, people)
            const initMSG: RoomInitMSG = {
                msgType: "roomInit",
                members: []
            }
            this.clientMap.forEach((p) => {
                initMSG.members.push(p.info)
            })
            people.send(Schema.MSG.roomInitString(initMSG))
        }
    }
    leave(people: People) {
        const data: UserLeaveMSG = {
            msgType: "leave",...people.info
        }
        data.msgType = "leave"
        // console.log(data);
        
        this.send(Schema.MSG.leaveMSGString(data))
        this.clientMap.delete(people.ID)
        
    }
}


export class RoomControl {
    static Control: RoomControl = new RoomControl();
    private roomMap = new Map<symbol, Room>();
    constructor() {

    }

    join(roomID: symbol, people: People, data: string) {
        const roomMap = this.roomMap
        const room = roomMap.get(roomID)
        if (room) {
            room.join(people, data)
        } else {
            const room = new Room()
            roomMap.set(roomID, room)
            room.join(people, data)
        }
    }
    send(roomID: symbol, data: string) {
        const roomMap = this.roomMap
        const room = roomMap.get(roomID)
        if (room) {
            room.send(data)
        }
    }
    leave(roomID: symbol, people: People) {
        const roomMap = this.roomMap
        const room = roomMap.get(roomID)
        if (room) {
            room.leave(people)
        }
    }

}