/*
 * @Date: 2022-02-17 14:38:28
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-02-22 15:55:47
 * @FilePath: \SocketV2\src\Class\BufferTeam.ts
 */
import { ClientControl } from "./ClientControl";
export class InputBufferTeam {
    stone: Uint8Array = new Uint8Array()
    constructor(private people: ClientControl) {
    }
    reset():void {
        this.stone = new Uint8Array()
    }
    push(buf: Buffer) {
        if (!(buf && buf.length)) return;
        const Data = new Uint8Array(this.stone.length + buf.length)
        Data.set(this.stone)
        Data.set(buf, this.stone.length)
        this.stone = Data
        this.pop()
    }
    pop() {
        let packageLength = this.stone[0]
        while (packageLength && packageLength < this.stone.length) {
            const cur = packageLength + 1
            const data = this.stone.subarray(1, cur)
            this.stone = this.stone.subarray(cur)
            this.people.input(data)
            packageLength = this.stone[0]
        }
    }
}
export class OutputBufferTeam {
    stone: Uint8Array = new Uint8Array()
    constructor(private people: ClientControl) {

    }
    reset() {
        this.stone = new Uint8Array()
    }
    push(data: Uint8Array) {
        const Data = new Uint8Array(this.stone.length + data.length)
        Data.set(this.stone, 0)
        Data.set(data, this.stone.length)
        this.stone = Data
    }
    pop() {
        if (!this.stone.length) return

        if (this.stone.length) {
            this.people.output(this.stone)
            this.stone = new Uint8Array()
        }


    }
}
const b  =new HTMLDivElement()
b.addEventListener("change",async (e)=>{
    e.target
})