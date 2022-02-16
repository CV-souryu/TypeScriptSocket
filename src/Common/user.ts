/*
 * @Date: 2022-02-11 19:07:07
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-02-13 14:13:27
 * @FilePath: \SocketV2\src\Common\user.ts
 */
export  class UserID{
    static instans = new UserID();
    private IDMAP:Map<number,symbol> =new Map()
    getID():number{
       const m = Math.floor(Math.random()*3_000_0000) 
       if(this.IDMAP.has(m)){
            return this.getID()
       }else{
            this.IDMAP.set(m,Symbol.for(""+m))
            return m
       }
    }

}