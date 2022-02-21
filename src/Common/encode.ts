/*
 * @Date: 2022-02-17 16:21:46
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-02-21 10:44:52
 * @FilePath: \SocketV2\src\Common\encode.ts
 */
import { SocketEnum, SocketServerMsg } from "../Proto"
const MsgFac = SocketServerMsg.Msg.create()
export function encodeMSG(flag:SocketEnum.msgType, data:Uint8Array): Uint8Array {
    MsgFac.type = flag
    MsgFac.data = data
    const real = SocketServerMsg.Msg.encode(MsgFac)
    const Data = new Uint8Array( real.len+ 1)
    Data[0] = real.len
    Data.set(real.finish(), 1)
    return Data
}
