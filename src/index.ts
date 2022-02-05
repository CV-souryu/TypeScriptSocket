/*
 * @Date: 2022-01-16 09:18:52
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-01-24 16:58:29
 * @FilePath: \noelle-core-v2\src\index.ts
 */
import * as Net from "net"
import "./Init"
import {send} from "./Common/send"
import {RoomControl} from "./Class/Room"
import {Schema} from "./Schema"
const roomControl = RoomControl.Control
const serve = Net.createServer();

serve.on("connection",(client)=>{
    const address = client.remoteAddress
    const ID = Symbol(address) 

    
    client.on("data",(msg)=>{
       const t= JSON.parse (msg.toString())
       console.log(t);
       send(client,t)
    //    send
    })
    client.on("close",(err)=>{
        console.log("close",ID);
        
    })
})
serve.listen(3000)
