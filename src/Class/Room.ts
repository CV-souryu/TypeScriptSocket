/*
 * @Date: 2022-02-06 09:15:00
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-02-11 16:47:02
 * @FilePath: \SocketV2\src\Class\Room.ts
 */
import { People } from "./People";
import { ClientMSG, msgType, ServerMSG } from "./Msg";
type ClientMap = Map<symbol, People>
type PrivateRTCRoom = Map<symbol, ClientMap>;
class Room {
    private ClientMap: ClientMap = new Map()
    private PrivateRTC: PrivateRTCRoom = new Map()
    constructor() {

    }
    send(data: ServerMSG.validate) {
        const text = JSON.stringify(data)
        this.ClientMap.forEach((p) => {
            p.send(text)
        })
    }
    join(people: People, data: ServerMSG.JoinMSG) {
        this.send(data)
        if (!this.ClientMap.has(people.Key)) {
            this.ClientMap.set(people.Key, people)
            const initMSG: ServerMSG.RoomInitMSG = {
                msgType: msgType.ClientRoomInit,
                members: []
            }
            this.ClientMap.forEach((p) => {
                initMSG.members.push({ ...p.info, ID: p.ID })
            })
            people.send(JSON.stringify(initMSG))
        }
    }
    leave(people: People) {
        const data: ServerMSG.LeaveMSG = {
            msgType: msgType.UserLeave,
            ID: people.ID
        }
        // console.log(data);

        this.send(data)
        this.ClientMap.delete(people.Key)

    }
    link(people: People, peopleKey: symbol) {
        let other = this.ClientMap.get(peopleKey);
        if (people.Key != peopleKey && other) {
            people.link(other)
        }
    }

    linkPrivate(people: People, PrivateID: string) {
        const key = Symbol.for(PrivateID)
        people.unLink()
        let PrivateRTC = this.PrivateRTC.get(key)
        if (PrivateRTC) {
            console.log("长度"+PrivateRTC.size);
            
            if (PrivateRTC.size) {
                for (const iterator of PrivateRTC.values()) {
                    people.link(iterator)
                    break;
                }
            } else {
                people.RTCMapInit(PrivateRTC)
            }
        } else {
            PrivateRTC = new Map()
            people.RTCMapInit(PrivateRTC)
        }


    }
    has(people: People) {
        return this.ClientMap.has(people.Key)
    }
}


export class RoomControl {
    static Control: RoomControl = new RoomControl();
    private roomMap = new Map<symbol, Room>();
    constructor() {

    }
    has(roomID: symbol, people: People) {
        const roomMap = this.roomMap
        const room = roomMap.get(roomID)
        if (room) {
            return room.has(people)
        }
        return false
    }
    join(roomID: symbol, people: People, data: ClientMSG.JoinMSG) {
        const { nickname, direction, x, y, personAppearance, strUserID } = data
        people.info = { nickname, direction, x, y, personAppearance, strUserID }
        const roomMap = this.roomMap
        const room = roomMap.get(roomID)
        const MSG: ServerMSG.JoinMSG = {
            msgType: msgType.UserJoin,
            ...people.info,
            ID: people.ID
        }
        if (room) {
            room.join(people, MSG)
        } else {
            const room = new Room()
            roomMap.set(roomID, room)
            room.join(people, MSG)
        }
    }
    send(roomID: symbol, data: ServerMSG.validate) {
        const roomMap = this.roomMap
        const room = roomMap.get(roomID)
        if (room) {
            room.send(data)
        }
    }
    leave(people: People) {
        const roomMap = this.roomMap
        const room = roomMap.get(people.roomID)
        if (room) {
            room.leave(people)
            people.unLink()
        }
    }
    link(people: People, peopleKey: symbol) {
        const roomMap = this.roomMap
        const room = roomMap.get(people.roomID)
        if (room) {
            room.link(people, peopleKey)
        }
    }
    linkPrviate(people: People, PrivateID: string) {
        const roomMap = this.roomMap
        const room = roomMap.get(people.roomID)
        if (room) {
            room.linkPrivate(people, PrivateID)
        }
    }
    emit(MSG: ClientMSG.validate, people: People) {
        switch (MSG.msgType) {
            case msgType.UserJoin:
                //console.log("JOIN");

                this.join(people.roomID, people, MSG)
                break;
            case msgType.UserLeave:
                //console.log("LEAVE");
                this.leave(people)
                break;
            case msgType.UserMove:
                //console.log("MOVE");                  
                this.send(people.roomID, people.move(MSG))
                break;
            case msgType.UserLink:
                //console.log("LINK");      
                this.link(people, Symbol.for(MSG.ID))
                break;
            case msgType.UserUnLink:
                //console.log("UNLINK");
                people.unLink()
                break;
            case msgType.UserLinkPrivate:
                console.log("LINKPRVIATE");
                this.linkPrviate(people,MSG.key)
                break;
            default:
                break;
        }
    }

}