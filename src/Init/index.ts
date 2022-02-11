/*
 * @Date: 2022-02-09 11:47:38
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-02-09 17:00:34
 * @FilePath: \SocketV2\src\Init\index.ts
 */
import Ajv from "ajv/dist/2019"
import addFormats from 'ajv-formats'
export const ajv = addFormats(new Ajv({}), [
    'date-time', 
    'time', 
    'date', 
    'email',  
    'hostname', 
    'ipv4', 
    'ipv6', 
    'uri', 
    'uri-reference', 
    'uuid',
    'uri-template', 
    'json-pointer', 
    'relative-json-pointer', 
    'regex'
]).addKeyword('kind')
  .addKeyword('modifier')