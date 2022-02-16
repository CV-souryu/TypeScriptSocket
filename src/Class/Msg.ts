/*
 * @Date: 2022-02-09 10:59:53
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-02-13 09:33:08
 * @FilePath: \SocketV2\src\Class\MSG.ts
 */
import { Static, Type } from '@sinclair/typebox'
export enum msgType {
    UserJoin = 0x1000,
    UserMove = 0x1001,
    UserLeave = 0x1002,
    UserLink = 0x1003,
    UserUnLink = 0x1004,
    UserLinkPrivate = 0x1005,
    UserUnLinkPrivate = 0x1006,
    ClientInit = 0x0000,
    ClientRoomInit = 0x0003,
}

export namespace User {
    export const UserID = Type.Object({
        ID: Type.Number()
    })
    export type UserID = Static<typeof UserID>

    enum UserDirection{
        up,
        right,
        down,
        left
        
    }
    export const UserPosition = Type.Object({
        x:Type.Number(),
        y:Type.Number(),
        direction:Type.Enum(UserDirection)
    })
    /**用户坐标与朝向 */
    export type UserPosition= Static<typeof UserPosition>
    
    export const UserInfo = Type.Object({
        nickname:Type.String(),
        personAppearance:Type.Number(),
        strUserID:Type.String()
    })
    /**用户信息 */
    export type UserInfo = Static<typeof UserInfo> 
}

/**客户端消息 */
export namespace ClientMSG {
    //Intersect
    /**加入消息 */
    export const JoinMSG = Type.Intersect([
        Type.Object({
            msgType:Type.Literal(msgType.UserJoin)
        }),
        User.UserInfo,
        User.UserPosition
    ])

    export type JoinMSG = Static<typeof JoinMSG>
    /**移动消息 */
    export const MoveMSG = Type.Intersect([
        Type.Object({
            msgType:Type.Literal(msgType.UserMove)
        }),
        User.UserPosition
    ])
    export type MoveMSG = Static<typeof MoveMSG>

    /**离开消息 */
    export const LeaveMSG = Type.Intersect([
        Type.Object({
            msgType:Type.Literal(msgType.UserLeave)
        })
    ])
    export type LeaveMSG = Static<typeof LeaveMSG>
    /**连麦指令 */
    export const LinkRTCMSG = Type.Intersect([
        Type.Object({
            msgType:Type.Literal(msgType.UserLink)
        }),
        User.UserID 
    ])
    export type LinkRTCMSG = Static<typeof LinkRTCMSG>
    /**离开连麦指令 */
    export const UnLinkRTCMSG = Type.Intersect([
        Type.Object({
            msgType:Type.Literal(msgType.UserUnLink)
        })
    ])
    export type UnLinkRTCMSG = Static<typeof UnLinkRTCMSG>
    
    /**离开私密空间 */
    export const LinkRTCPrivate = Type.Intersect([
        Type.Object({
            msgType:Type.Literal(msgType.UserLinkPrivate),
            key:Type.String()
        }),
        
    ])
    export type LinkRTCPrivate = Static<typeof LinkRTCPrivate>
    export const UnLinkRTCPrivate = Type.Intersect([
        Type.Object({
            msgType:Type.Literal(msgType.UserUnLinkPrivate),
            key:Type.String()
        }),        
    ])
    export type UnLinkRTCPrivate = Static<typeof UnLinkRTCPrivate>

    export const validate = Type.Union([
        JoinMSG,MoveMSG,LeaveMSG,LinkRTCMSG,UnLinkRTCMSG,LinkRTCPrivate,UnLinkRTCPrivate
    ])
    export type validate = Static<typeof validate>
}

/**服务器消息 */
export namespace ServerMSG {
   
    /**链接成功 */
    export const ConnectInit = Type.Intersect([
        Type.Object({
            msgType:Type.Literal(msgType.ClientInit)
        }),
        User.UserID
    ])
    export type ConnectInit = Static<typeof ConnectInit>
    /**加入房间消息 */
    export const JoinMSG = Type.Intersect([
        ClientMSG.JoinMSG, User.UserID 
    ])
    export type JoinMSG = Static<typeof JoinMSG>
    /**移动 */
    export const MoveMSG = Type.Intersect([
        ClientMSG.MoveMSG, User.UserPosition, User.UserID
    ])
    export type MoveMSG = Static<typeof MoveMSG>
    /**离开房间 */

    export const LeaveMSG = Type.Intersect([
        User.UserID,ClientMSG.LeaveMSG
    ])
    export type LeaveMSG = Static<typeof LeaveMSG>
    /**房间初始化 */
    export const RoomInitMSG = Type.Intersect([
        Type.Object({
            msgType:Type.Literal(msgType.ClientRoomInit),
            members:Type.Array(Type.Intersect([User.UserID ,User.UserPosition , User.UserInfo]))
        }),       
    ])
    export type RoomInitMSG = Static<typeof RoomInitMSG>
    
    /**RTC连线 */
    export const LinkRTCMSG = Type.Intersect([
        Type.Object({
            msgType:Type.Literal(msgType.UserLink),
            members:Type.Array(Type.Number())
        }),       
    ])
    export type LinkRTCMSG = Static<typeof LinkRTCMSG>
    /**RTC离开 */
    export const UnLinkRTCMSG = Type.Intersect([
        Type.Object({
            msgType:Type.Literal(msgType.UserUnLink),
            ID:Type.Number()
        })
    ])
    export type UnLinkRTCMSG = Static<typeof UnLinkRTCMSG>
    export const validate = Type.Union([
        ConnectInit,JoinMSG,MoveMSG,LeaveMSG,LinkRTCMSG,UnLinkRTCMSG,RoomInitMSG
    ])
    export type validate = Static<typeof validate>
}
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
    ID: 65530,
}
/**结束连麦 */
const UserUnLinkMSG: ClientMSG.UnLinkRTCMSG = {
    msgType: 0x1004,
}
/**私密空间 */
const UserLinkPrivateMSG: ClientMSG.LinkRTCPrivate = {
    msgType: 0x1005,
    key:"私密空间名字"
}

//SERVER 服务器发出

/**连接成功 */
const ServerConnectInit: ServerMSG.ConnectInit = {
    msgType: 0x0000,
    ID: 65530
}

/**有人进房 */
const ServerJoinMSG: ServerMSG.JoinMSG = {
    ID: 65530,
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
    ID: 65530
}

/**有人移动 */
const ServerMoveMSG: ServerMSG.MoveMSG = {
    ID: 65530,
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
        65530,65532
    ]
}
const ServerUnLinkUserMSG: ServerMSG.UnLinkRTCMSG = {
    msgType: 0x1004,
    ID: 65530
}



