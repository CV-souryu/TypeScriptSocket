// import { AddressInfo, Socket } from "net";

// export class People{
//     ID:Symbol;
//     head:People;
//     prev:People;
//     next:People;
//     address:AddressInfo
//     socket:Socket
//     constructor(){

//     }
//     send(data:string){
//         this.socket.write(data)
//         if(this.next){
//             this.next.send(data)
//         }
//     }
//     leave(address:AddressInfo){
//         if(address===this.address){
//             if(this.prev){
//                 this.prev.next = this.next
//             }else{

//             }
//         }
//     }
// }