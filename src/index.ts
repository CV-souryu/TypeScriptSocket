/*
 * @Date: 2022-01-16 09:18:52
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-02-27 12:10:07
 * @FilePath: \SocketV2\src\index.ts
 */
import * as net from "net"
import * as dgram from "dgram"
import "./Init"
import { UserID } from "./Common/user"
import { RoomControl } from "./Class/Room"
import { ClientControl } from "./Class/ClientControl"
// import { getLogger } from "log4js"

const {argv} = process
let port = 8888
argv.map((v)=>{
    const res = v.match(/P([0-9]+)/)
    if(res){
        port = eval(res[1])         
    }    
})
// export const logger = getLogger("Socket"+port);
// logger.level = "debug";
// logger.debug("ServerOn");
const roomControl = RoomControl.Control
const serve = net.createServer();
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
        client.read
    })
    client.on("error", (err) => {
        // logger.error("链接错误", err.message, IP, port, people.Id)
        console.log("err", err.message);
        roomControl.leave(people)
        client.end()
    })
})
serve.listen({
    port
}, () => {

    //dgram.createSocket("udp4").send("AB", 8887, "192.168.88.212")
})
dgram.createSocket("udp4").bind(port-1,"0.0.0.0",()=>{
    // logger.info("UDP ON",port-1,)

}).on("message",(e)=>{
    // logger.info("UDP",e.toString(),port-1,)
})