/*
 * @Date: 2022-01-16 09:18:52
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-02-11 14:39:14
 * @FilePath: \SocketV2\src\index.ts
 */
import * as Net from "net"
import "./Init"
import { send } from "./Common/send"
import { RoomControl } from "./Class/Room"
import { People } from "./Class/People"
import * as md5 from "md5"
import { ajv } from "./Init"
import { ClientMSG, msgType, ServerMSG, User } from "./Class/Msg"
const roomControl = RoomControl.Control
const serve = Net.createServer();
const valiMSG = ajv.compile(ClientMSG.validate)

serve.on("connection", (client) => {
    const ID = md5((client.remoteAddress || "") + (client.remotePort || ""))
    const ServerConnectInit: ServerMSG.ConnectInit = {
        msgType: msgType.ClientInit,
        ID
    }
    const key = Symbol.for(ID)
    const people = new People(key,ID, client)
    people.send(JSON.stringify(ServerConnectInit))
    console.log("connection", ID);
    client.on("data", (msg) => {
        const Text = msg.toString()
        //console.log(Text);
        try {
            
            const m =JSON.parse(Text)
            if(valiMSG(m)) {
                roomControl.emit(<ClientMSG.validate>m,people)
            }else{

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
        console.log("close", ID);
        roomControl.leave( people)
    })
    client.on("error", (err) => {
        console.log("err", ID);
        roomControl.leave( people)

    })
})
serve.listen(8888)
