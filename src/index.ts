/*
 * @Date: 2022-01-16 09:18:52
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-02-16 14:41:05
 * @FilePath: \SocketV2\src\index.ts
 */
import * as Net from "net"
import "./Init"
import { send } from "./Common/send"
import { UserID } from "./Common/user"
import { RoomControl } from "./Class/Room"
import { People } from "./Class/People"
import * as md5 from "md5"
import { ajv, logger } from "./Init"
import { ClientMSG, msgType, ServerMSG, User } from "./Class/Msg"
import {SocketClientMsg, SocketEnum} from "./Proto"
// var m = SocketClientMsg.Msg.create({
//     type:SocketEnum.msgType.UserJoin,
//     join:{
//         direction:SocketEnum.UserDirection.up,
//         nickname:"YAQ",
//         personAppearance:1,
//         strUserID:"123",
//         x:-1,
//         y:20
//     }
// })

// console.log(SocketClientMsg.Msg.encode(m).finish());

// console.log(SocketClientMsg.Msg.decode(SocketClientMsg.Msg.encode(m).finish()))

const roomControl = RoomControl.Control
const serve = Net.createServer();
const valiMSG = ajv.compile(ClientMSG.validate)
const UserIDM = UserID.instans

serve.on("connection", (client) => {
    client.setNoDelay(true)
    
    const IP = client.remoteAddress|| ""
    const port =client.remotePort || ""
    const MD5ID = md5(IP+port)
    const ID =UserIDM.getID()
    const key = Symbol.for(""+ID)
    
    const people = new People(key,ID, client)
    const ServerConnectInit: ServerMSG.ConnectInit = {
        msgType: msgType.ClientInit,ID
    }
    people.send(JSON.stringify(ServerConnectInit))
    console.log("connection", MD5ID);
    client.on("data", (msg) => {
        
        const Text = msg.toString()
        //console.log(Text);
        try {
            
            const m =JSON.parse(Text)
            if(valiMSG(m)) {
                //logger.info("解析成功",IP,port,Text)

                roomControl.emit(<ClientMSG.validate>m,people)
            }else{
                logger.error("解析失败",IP,port,Text)
            }
           /*  if (ajv.validate(ClientMSG.validate, m)) {
                
                switch (m.msgType) {
                    case "join":
                        console.log("join", ID)
                        people.move(m)
                        roomControl.join(roomID, people, Text)
                        break;
                    case "move":
                        console.log("move", ID)

                        people.move(m)
                        roomControl.has(roomID, people) && roomControl.send(roomID, Text)

                        break
                    case "leave":
                        console.log("leave", ID)

                        roomControl.leave(roomID, people)
                        break;
                    default:
                        console.log("unknow", ID)

                        break;
                }
            } else {
                send(client, Text)
            } */
        } catch (error) {

        }


    })
    client.on("close", (err) => {
        logger.error("链接关闭",IP,port,people.ID)
        console.log("close", MD5ID);
        roomControl.leave( people)
        client.end()
    })
    client.on("error", (err) => {
        logger.error("链接错误",err.message,IP,port,people.ID)
        console.log("err", err.message);
        roomControl.leave( people)
        client.end()
    })
})
serve.listen(8888)
