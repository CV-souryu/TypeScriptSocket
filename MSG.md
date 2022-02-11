<!--
 * @Date: 2022-02-09 11:49:32
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-02-10 10:15:11
 * @FilePath: \SocketV2\MSG.md
-->
```JavaScript
//**********************************
// * *******************************
// * *******************************
// *             例子
// * *******************************
// * *******************************
//**********************************

//USER 客户端发出

/**加入房间 */
const UserJoinMSG: ClientMSG.JoinMSG = {
    nickname: "YAQ",
    direction: 0,
    msgType: 0x1000,
    x: 0,
    y: 0,
    personAppearance: 0,
    strUserID: "10000935000"
}
/**角色移动 */
const UserMoveMSG: ClientMSG.MoveMSG = {
    direction: 0,
    msgType: 0x1001,
    x: 0,
    y: -1,
}
/**离开房间 */
const UserLeaveMSG: ClientMSG.LeaveMSG = {
    msgType: 0x1002
}
/**开始连麦 */
const UserLinkMSG: ClientMSG.LinkRTCMSG = {
    msgType: 0x1003,
    ID: "K5E6WQ1EQ5W6E6QE51354A68G48H",
}
/**结束连麦 */
const UserUnLinkMSG: ClientMSG.UnLinkRTCMSG = {
    msgType: 0x1004,
}

//SERVER 服务器发出

/**连接成功 */
const ServerConnectInit: ServerMSG.ConnectInit = {
    msgType: 0x0000,
    ID: "K5E6WQ1EQ5W6E6QE51354A68G48H"
}

/**有人进房 */
const ServerJoinMSG: ServerMSG.JoinMSG = {
    ID: "K5E6WQ1EQ5W6E6QE51354A68G48H",
    //以下与UserJoinMsg相同
    nickname: "YAQ",
    direction: 0,
    msgType: 0x1000,
    x: 0,
    y: 0,
    personAppearance: 0,
    strUserID: "10000935000"

}
/**有人离开 */
const ServerLeaveMSG: ServerMSG.LeaveMSG = {
    msgType:0x1002,
    ID: "K5E6WQ1EQ5W6E6QE51354A68G48H"
}

/**有人移动 */
const ServerMoveMSG: ServerMSG.MoveMSG = {
    ID: "K5E6WQ1EQ5W6E6QE51354A68G48H",
    //以下与UserMoveMsg相同
    direction: 0,
    msgType: 0x1001,
    x: 0,
    y: -1,

}

/**房间初始化 */
const ServerRoomInitMSG: ServerMSG.RoomInitMSG = {
    msgType: 0x0003,
    members: [
        ServerJoinMSG,
        ServerJoinMSG,
        ServerJoinMSG,
        ServerJoinMSG
    ]
}
/**连麦消息 */
const ServerLinkUserMSG: ServerMSG.LinkRTCMSG = {
    msgType: 0x1003,
    members: [
        "K5E6WQ1EQ5W6E6QE51354A68G48H",
        "K5E6WQ1EQ5W6E6QE51354A68G48H",
        "K5E6WQ1EQ5W6E6QE51354A68G48H"
    ]
}
const ServerUnLinkUserMSG: ServerMSG.UnLinkRTCMSG = {
    msgType: 0x1004,
    ID: "K5E6WQ1EQ5W6E6QE51354A68G48H"
}




```
{"nickname":"YAQ","direction":0,"msgType":4096,"x":0,"y":0,"personAppearance":0,"strUserID":"10000935000"}
{"msgType": 4099,"ID": "e4c2fdacec5b80411d8bad3cb0a874bf"}
