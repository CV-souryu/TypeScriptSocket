import  { JTDSchemaType } from "ajv/dist/jtd"
import { PeopleInfo } from "../../Class/People"
import {ajv} from "../../Init"
const PeopleInfoSchema: JTDSchemaType<PeopleInfo> = {
    properties: {
        nickName: { type: "string" },
        x: { type: "int16" },
        y: { type: "int16" },
        direction: { type: "string" },
        personAppearance: { type: "int8" }
    }
}
export type UserJoinInit = {
    msgType: "JoinInit",
    members: PeopleInfo[]
}
export type UserJoin = {
    msgType:"join",

}&PeopleInfo
const JoinInitSchema: JTDSchemaType<UserJoinInit> = {
    properties: {
        members: {
            elements: PeopleInfoSchema
        },
        msgType: { enum: ["JoinInit"] }
    }
}
const UserJoinSchema:JTDSchemaType<UserJoin> ={
    properties:{
        msgType:{enum:["join"]},
        ...PeopleInfoSchema.properties
    }
}

ajv.compileParser(UserJoinSchema)
ajv.compileSerializer(JoinInitSchema)