/*
 * @Date: 2022-02-06 09:15:00
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-02-07 15:17:02
 * @FilePath: \TypeScriptSocket\src\Common\send.ts
 */
import { Socket } from "node:net"
export function send(client: Socket, msg: string, count: number = 3) {
     client.write(msg, (e) => {
        if (!!count && e) {
            // console.warn("失败三次", e.message, msg, client.address())
        }
        else if (!!e) {
            send(client, msg, count - 1)
        } else {

        }
    }) 
}
