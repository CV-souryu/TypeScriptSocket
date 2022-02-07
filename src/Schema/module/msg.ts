/*
 * @Date: 2022-02-06 09:22:56
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-02-07 18:04:01
 * @FilePath: \TypeScriptSocket\src\Schema\module\msg.ts
 */
import { ajv } from "../../Init"
import { JTDSchemaType } from "ajv/dist/jtd"

export type UserInfo = {
    nickname: string,
    personAppearance: number
}
const UserInfoSchema: JTDSchemaType<UserInfo> = {
    properties: {
        nickname: { type: "string" },
        personAppearance: { type: "int8" }
    }
}

export type UserPosition = {
    positionX: number,
    positionY: number,
    direction: "up"|"down"|"right"|"left",
}

const UserPositionSchema: JTDSchemaType<UserPosition> = {
    properties: {
        positionX: { type: "int8" },
        positionY: { type: "int8" },
        direction: { enum: ["up","down","right","left"] }

    }
}

type UserJoinMSG = {
    msgType: "join",
} & UserPosition & UserInfo

const test:UserJoinMSG = {
    positionX:40,
    positionY:40,
    nickname:"x",
    direction:"up",
    personAppearance:1,
    msgType:"join"
}
const UserJoinMSGSchema: JTDSchemaType<UserJoinMSG> = {
    properties: {
        msgType: { enum: ["join"] },
        ...UserInfoSchema.properties,
        ...UserPositionSchema.properties
    },
}

type UserMoveMSG = {
    msgType: "move",
} & UserPosition & UserInfo

const UserMoveMSGSchema: JTDSchemaType<UserMoveMSG> = {
    properties: {
        msgType: { enum: ["move"] },
        ...UserInfoSchema.properties,
        ...UserPositionSchema.properties
    },
}

export type UserLeaveMSG = {
    msgType: "leave",
} & UserInfo  & UserPosition

const UserLeaveMSGSchema: JTDSchemaType<UserLeaveMSG> = {
    properties: {
        msgType: { enum: ["leave"] },
        ...UserInfoSchema.properties,
        ...UserPositionSchema.properties
    },
}
type MainMSG = UserLeaveMSG | UserMoveMSG | UserJoinMSG
const MainMSGSchema: JTDSchemaType<MainMSG> = {
    discriminator: "msgType",
    mapping: {
        join: UserJoinMSGSchema,
        leave: UserLeaveMSGSchema,
        move: UserMoveMSGSchema
    }
}



/**出口 */

export type RoomInitMSG = {
    msgType: "roomInit",
    members: (UserPosition & UserInfo)[]
}
const RoomInitSchema: JTDSchemaType<RoomInitMSG> = {
    properties: {
        msgType: { enum: ["roomInit"] },
        members: {
            elements: {
                properties: {
                    ...UserInfoSchema.properties,
                    ...UserPositionSchema.properties
                }
            }
        }
    }
}

type MainOutMSG = RoomInitMSG

const RoomInitMSGchema: JTDSchemaType<RoomInitMSG> = {
    properties: {
        msgType: { enum: ["roomInit"] },
        members: {
            elements: {
                properties: {
                    ...UserInfoSchema.properties,
                    ...UserPositionSchema.properties
                }
            }
        }
    }
}


export const MainMSG = {
    parse: ajv.compileParser<MainMSG>(MainMSGSchema),
    roomInitString:ajv.compileSerializer(RoomInitMSGchema),
    leaveMSGString:ajv.compileSerializer(UserLeaveMSGSchema) 
}
export type PeopleInfo = UserPosition & UserInfo