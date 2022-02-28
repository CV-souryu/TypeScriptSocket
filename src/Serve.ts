/*
 * @Date: 2022-02-25 11:54:29
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-02-27 12:12:33
 * @FilePath: \SocketV2\src\Serve.ts
 */
import * as os from "os"
import * as ChildProcess from "child_process"
import { request } from "http"
const base = 8000
let cur = 1
const port: any[] = []
os.cpus().map((v, i) => {
    ChildProcess.exec(`node dist P${base + cur*2}`,(e)=>{

        
    })
    cur++
    port.push({TCP:base + cur*2,UDP:base + cur*2-1})
})
const ifaces = os.networkInterfaces();
let host;
Object.keys(ifaces).forEach((ifname) => {
    let alias = 0;
    ifaces[ifname]?.forEach(function (iface) {
        if ("IPv4" !== iface.family || iface.internal !== false) {
            return;
        }

        if (alias >= 1) {
            host = iface.address;
        } else {
            host = iface.address;
        }
        ++alias;
    });
});
console.log(host);
const postData = JSON.stringify({
    host,
    port
})

const options = {
    hostname: '192.168.88.212',
    port: 9000,
    path: '/server/online',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
    }
};
const initRequset = request(options)
initRequset.write(postData)