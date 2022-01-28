/*
 * @Date: 2022-01-16 09:18:52
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-01-24 16:58:29
 * @FilePath: \noelle-core-v2\src\index.ts
 */
import * as Net from "net"
import Ajv ,{JTDSchemaType} from "ajv/dist/jtd"
const ajv = new Ajv()
type UserMSG={
    msgType:"join",
    nickName:string
}|{
    msgType:"leave",
    nickName:string
}|{
    msgType:"move",
    x:number,
    y:number,
    direction:string
}
type OutMSG = {
    msgType:""
}
 const schema: JTDSchemaType<UserMSG> = {
    "mapping":{
        "join":{
            "properties":{
                nickName:{type:"string"}
            }
        },
        "leave":{
            "properties":{
                nickName:{type:"string"}
            }
        },
        "move":{
            "properties":{
                direction:{type:"string"},
                x:{type:"int8"},
                y:{type:"int8"}

            }
        }
    },
    "discriminator":"msgType"
  } 
  const serialize = ajv.compileSerializer(schema)

  // parse will return MyData or undefined
  const parse = ajv.compileParser(schema)


const serve =  Net.createServer();

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
