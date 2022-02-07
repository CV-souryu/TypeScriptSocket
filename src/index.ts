/*
 * @Date: 2022-01-16 09:18:52
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-02-07 16:54:32
 * @FilePath: \TypeScriptSocket\src\index.ts
 */
import * as Net from "net"
import "./Init"
import { send } from "./Common/send"
import { RoomControl } from "./Class/Room"
import { Schema } from "./Schema"
import { ajv } from "./Init"
import { People } from "./Class/People"
const roomControl = RoomControl.Control
const serve = Net.createServer({
    
});

serve.on("connection", (client) => {
    const address = client.remoteAddress
    const ID = Symbol(address)
    const people = new People(ID, client)
    let roomID = Symbol.for("1684")
    console.log("connection", ID);
    client.on("data", (msg) => {
        const Text = msg.toString()
        console.log(Text);
        const m = Schema.MSG.parse(Text)
        if (m) {
            switch (m.msgType) {
                case "join":
                    console.log("join",ID)
                    people.move(m)
                    roomControl.join(roomID, people, Text)
                    break;
                case "move":
                    console.log("move",ID)

                    people.move(m)
                    roomControl.send(roomID, Text)
                    break
                case "leave":
                    console.log("leave",ID)

                    roomControl.leave(roomID, people)
                    break;
                default:
                    console.log("unknow",ID)

                    break;
            }
        }
    })
    client.on("close", (err) => {
        console.log("close", ID);
        roomControl.leave(roomID, people)
    })
    client.on("error", (err) => {
        console.log("err", ID);
        roomControl.leave(roomID, people)

    })
})
serve.listen(7777)
