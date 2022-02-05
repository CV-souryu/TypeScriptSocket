import { People, PeopleInfo } from "./People";
import {Schema } from "../Schema"

type ClientMap = Map<symbol,People>
class Room{
    private clientMap:ClientMap  = new Map()
    constructor(){

    }
    move(){}
    join(people:People,data:string){
        const MSG:Schema.ServerMSG.JoinInit.Type = {
            msgType:"JoinInit",
            members:[]
        }
        this.clientMap.forEach((p)=>{
            MSG.members.push(p.info)
        })
        people.send(data)
        
        this.clientMap.set(people.ID,people)
        this.send(data)
        return
    }
    private send(msg:string){
        this.clientMap.forEach((p)=>{
            p.send(msg)
        })
    }
}


export class RoomControl{
    static Control:RoomControl = new RoomControl();
    private roomMap = new Map<symbol,Room>();
    constructor(){

    }
    
    join(roomID:string,people:People,data:string){
        const key = Symbol.for(roomID)
        const roomMap = this.roomMap
        const room = roomMap.get(key)
        if(room){
            room.join(people,data)
        }else{
            const room = new Room()
            roomMap.set(key,room)
            room.join(people,data)
        }
    }
    create(){

    }
}