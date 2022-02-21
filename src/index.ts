/*
 * @Date: 2022-01-16 09:18:52
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-02-21 10:56:53
 * @FilePath: \SocketV2\src\index.ts
 */
import * as Net from "net"
import "./Init"
import { UserID } from "./Common/user"
import { RoomControl } from "./Class/Room"
import { ClientControl } from "./Class/ClientControl"

const roomControl = RoomControl.Control
const serve = Net.createServer();
const UserIDM = UserID.instans
setInterval(ClientControl.StartLoopMsg, 15)
serve.on("connection", (client) => {
    client.setNoDelay(true)
    client.read()
    const Id = UserIDM.getID()
    const key = Symbol.for("" + Id)
    const people = new ClientControl(key, Id, client)

    
    client.on("close", (err) => {
        // logger.error("链接关闭", IP, port, people.Id)
        console.log("close", people.Id);
        roomControl.leave(people)
        people.destroy()
        client.end()
        client.destroy()
    })
    client.on("error", (err) => {
        // logger.error("链接错误", err.message, IP, port, people.Id)
        console.log("err", err.message);
        roomControl.leave(people)
        client.end()
    })
})
serve.listen(8888)
