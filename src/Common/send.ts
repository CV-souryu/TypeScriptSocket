import { Socket } from "node:net"
export function send(client:Socket,msg:string,count:number=3){
    client.write(msg,(e)=>{
        console.log(e?.message,msg,client.address());
        if(count){
            send(client,msg,count--)
        }else{
            console.warn("失败三次",e?.message,msg,client.address())
        }
    })
}
