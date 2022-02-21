/*
 * @Date: 2022-02-06 09:15:00
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-02-21 11:04:58
 * @FilePath: \SocketV2\src\Class\Room.ts
 */
import { ClientControl } from "./ClientControl";
//import { ClientMSG, msgType, ServerMSG } from "./Msg";
import { logger } from "../Init";
import { SocketClientMsg, SocketEnum, SocketServerMsg } from "../Proto";
import { encodeMSG } from "../Common/encode";
type ClientMap = Map<symbol, ClientControl>
type PrivateRTCRoom = Map<symbol, ClientMap>;
class Room {
    private ClientMap: ClientMap = new Map()
    private PrivateRTC: PrivateRTCRoom = new Map()
    constructor() {

    }
    send(data: Uint8Array) {
        const member: number[] = []
        this.ClientMap.forEach((p) => {
            p.send(data)
            member.push(p.Id)
        })
        //logger.info("Msg", member, data)
    }
    join(people: ClientControl, data: SocketServerMsg.Join) {

        let res: Uint8Array = encodeMSG(SocketEnum.msgType.UserJoin, SocketServerMsg.Join.encode(data).finish())

        this.send(res)
        if (!this.ClientMap.has(people.Key)) {
            this.ClientMap.set(people.Key, people)
            const Roominit: SocketServerMsg.RoomInit = SocketServerMsg.RoomInit.create({
                members: []
            })

            this.ClientMap.forEach((p) => {
                Roominit.members.push({ ...p.info, Id: p.Id })
            })
            const initMSG: Uint8Array = encodeMSG(SocketEnum.msgType.ClientRoomInit, SocketServerMsg.RoomInit.encode(Roominit).finish())
            people.send(initMSG)
        }
    }
    leave(people: ClientControl) {

        const data: Uint8Array = encodeMSG(SocketEnum.msgType.UserLeave,SocketServerMsg.Leave.encode(
                SocketServerMsg.Leave.create({
                    Id: people.Id
                })
            ).finish()
        )
        //console.log(people.Id, data);

        this.send(data)
        this.ClientMap.delete(people.Key)

    }
    link(people: ClientControl, peopleKey: symbol) {
        let other = this.ClientMap.get(peopleKey);
        if (people.Key != peopleKey && other) {
            people.link(other)
        }
    }

    linkPrivate(people: ClientControl, PrivateID: string) {
        const key = Symbol.for(PrivateID)
        people.unLink()
        let PrivateRTC = this.PrivateRTC.get(key)
        if (PrivateRTC) {
            console.log("长度" + PrivateRTC.size);
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
            this.PrivateRTC.set(key, PrivateRTC)
        }


    }
    has(people: ClientControl) {
        return this.ClientMap.has(people.Key)
    }
}


export class RoomControl {
    static Control: RoomControl = new RoomControl();
    private roomMap = new Map<symbol, Room>();
    constructor() {

    }
    has(roomID: symbol, people: ClientControl) {
        const roomMap = this.roomMap
        const room = roomMap.get(roomID)
        if (room) {
            return room.has(people)
        }
        return false
    }
    join(roomID: symbol, people: ClientControl, data: SocketClientMsg.Join) {
        const { nickname, direction, x, y, personAppearance, strUserId } = data
        people.info = { nickname, direction, x, y, personAppearance, strUserId }
        people.roomID = roomID
        const roomMap = this.roomMap
        const room = roomMap.get(roomID)
        const MSG: SocketServerMsg.Join = SocketServerMsg.Join.create({
            member: {
                Id: people.Id,
                nickname,
                direction,
                personAppearance,
                x,
                y,
                strUserId,
            }

        })
        if (room) {
            room.join(people, MSG)
        } else {
            const room = new Room()
            roomMap.set(roomID, room)
            room.join(people, MSG)
        }
    }
    send(roomID: symbol, data: Uint8Array) {
        const roomMap = this.roomMap
        const room = roomMap.get(roomID)
        if (room) {
            room.send(data)
        }
    }
    leave(people: ClientControl) {
        const roomMap = this.roomMap
        if (people.roomID) {
            const room = roomMap.get(people.roomID)
            if (room) {
                people.unLink()
                room.leave(people)

            }
        }

    }
    link(people: ClientControl, peopleKey: symbol) {
        const roomMap = this.roomMap
        if (people.roomID) {
            const room = roomMap.get(people.roomID)
            if (room) {
                room.link(people, peopleKey)
            }
        }
    }
    linkPrviate(people: ClientControl, PrivateID: string) {
        const roomMap = this.roomMap
        if (people.roomID) {
            const room = roomMap.get(people.roomID)
            if (room) {
                room.linkPrivate(people, PrivateID)
            }
        }
    }
    emit(MSG: SocketClientMsg.Msg, people: ClientControl) {
        //console.log(MSG)

        switch (MSG.type) {
            case SocketEnum.msgType.UserJoin:
                // logger.info("JOIN", people.Id)
                const Join = SocketClientMsg.Join.decode(MSG.data)
                if (Join instanceof SocketClientMsg.Join) {
                    this.join(Symbol.for("1684"), people, Join)
                }
                break;
            case SocketEnum.msgType.UserLeave:
                // logger.info("LEAVE", people.Id)
                this.leave(people)
                break;
            case SocketEnum.msgType.UserMove:
                //console.log("MOVE");     
                // logger.info("MOVE", people.Id)
                const Move = SocketClientMsg.Move.decode(MSG.data)

                if (people.roomID && Move instanceof SocketClientMsg.Move) {
                    this.send(people.roomID, people.move(Move))

                }
                break;
            case SocketEnum.msgType.UserLink:
                // logger.info("LINK", people.Id)
                const Link = SocketClientMsg.LinkRTC.decode(MSG.data)

                if (people.roomID && Link instanceof SocketClientMsg.LinkRTC) {
                    this.link(people, Symbol.for("" + Link.Id))
                }
                //console.log("LINK");      

                break;
            case SocketEnum.msgType.UserUnLink:
                // logger.info("UNLINK", people.Id)

                people.unLink()
                break;
            case SocketEnum.msgType.UserLinkPrivate:
                // logger.info("LINKPRVIATE", people.Id)
                const LinkRTCPrivate = SocketClientMsg.LinkRTCPrivate.decode(MSG.data)

                if (people.roomID && LinkRTCPrivate instanceof SocketClientMsg.LinkRTCPrivate) {
                    this.linkPrviate(people, LinkRTCPrivate.key)
                }

                break;
            default:
                break;
        }
    }

}