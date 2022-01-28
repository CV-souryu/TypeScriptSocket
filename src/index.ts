/*
 * @Date: 2022-01-16 09:18:52
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-01-24 16:58:29
 * @FilePath: \noelle-core-v2\src\index.ts
 */
import * as Net from "net"
import Ajv, { Schema } from "ajv";
const serve =  Net.createServer();
const data:Schema={
    type:""
}
serve.on("connection",(client)=>{
    Symbol()
    const ID = client.address()
    console.log(ID);
    
    client.on("data",(msg)=>{
       const t= JSON.parse (msg.toString())
       console.log(t);
    })
    client.on("close",(err)=>{
        console.log("close",ID);
        
    })
})
serve.listen(3000)
