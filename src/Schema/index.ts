import { UserJoin, UserJoinInit } from "./module/join"
export namespace Schema{
    export namespace UserMSG{
        export namespace Join{
            export type Type = UserJoin
        }
    }
    export namespace ServerMSG{
        export namespace JoinInit{
            export type Type = UserJoinInit
        }
        export namespace Join{
            export type Type = UserJoin
        }
        export namespace Move{}
    }
}
export default Schema