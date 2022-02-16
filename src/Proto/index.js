/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.SocketEnum = (function() {

    /**
     * Namespace SocketEnum.
     * @exports SocketEnum
     * @namespace
     */
    var SocketEnum = {};

    /**
     * msgType enum.
     * @name SocketEnum.msgType
     * @enum {number}
     * @property {number} ClientInit=0 ClientInit value
     * @property {number} UserJoin=4096 UserJoin value
     * @property {number} UserMove=4097 UserMove value
     * @property {number} UserLeave=4098 UserLeave value
     * @property {number} UserLink=4099 UserLink value
     * @property {number} UserUnLink=4100 UserUnLink value
     * @property {number} UserLinkPrivate=4101 UserLinkPrivate value
     * @property {number} UserUnLinkPrivate=4102 UserUnLinkPrivate value
     * @property {number} ClientRoomInit=3 ClientRoomInit value
     */
    SocketEnum.msgType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ClientInit"] = 0;
        values[valuesById[4096] = "UserJoin"] = 4096;
        values[valuesById[4097] = "UserMove"] = 4097;
        values[valuesById[4098] = "UserLeave"] = 4098;
        values[valuesById[4099] = "UserLink"] = 4099;
        values[valuesById[4100] = "UserUnLink"] = 4100;
        values[valuesById[4101] = "UserLinkPrivate"] = 4101;
        values[valuesById[4102] = "UserUnLinkPrivate"] = 4102;
        values[valuesById[3] = "ClientRoomInit"] = 3;
        return values;
    })();

    /**
     * UserDirection enum.
     * @name SocketEnum.UserDirection
     * @enum {number}
     * @property {number} up=0 up value
     * @property {number} right=1 right value
     * @property {number} down=2 down value
     * @property {number} left=3 left value
     */
    SocketEnum.UserDirection = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "up"] = 0;
        values[valuesById[1] = "right"] = 1;
        values[valuesById[2] = "down"] = 2;
        values[valuesById[3] = "left"] = 3;
        return values;
    })();

    SocketEnum.User = (function() {

        /**
         * Properties of a User.
         * @memberof SocketEnum
         * @interface IUser
         * @property {number|null} [ID] User ID
         * @property {number|null} [x] User x
         * @property {number|null} [y] User y
         * @property {SocketEnum.UserDirection|null} [direction] User direction
         * @property {string|null} [nickname] User nickname
         * @property {string|null} [strUserID] User strUserID
         * @property {number|null} [personAppearance] User personAppearance
         */

        /**
         * Constructs a new User.
         * @memberof SocketEnum
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {SocketEnum.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User ID.
         * @member {number} ID
         * @memberof SocketEnum.User
         * @instance
         */
        User.prototype.ID = 0;

        /**
         * User x.
         * @member {number} x
         * @memberof SocketEnum.User
         * @instance
         */
        User.prototype.x = 0;

        /**
         * User y.
         * @member {number} y
         * @memberof SocketEnum.User
         * @instance
         */
        User.prototype.y = 0;

        /**
         * User direction.
         * @member {SocketEnum.UserDirection} direction
         * @memberof SocketEnum.User
         * @instance
         */
        User.prototype.direction = 0;

        /**
         * User nickname.
         * @member {string} nickname
         * @memberof SocketEnum.User
         * @instance
         */
        User.prototype.nickname = "";

        /**
         * User strUserID.
         * @member {string} strUserID
         * @memberof SocketEnum.User
         * @instance
         */
        User.prototype.strUserID = "";

        /**
         * User personAppearance.
         * @member {number} personAppearance
         * @memberof SocketEnum.User
         * @instance
         */
        User.prototype.personAppearance = 0;

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof SocketEnum.User
         * @static
         * @param {SocketEnum.IUser=} [properties] Properties to set
         * @returns {SocketEnum.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link SocketEnum.User.verify|verify} messages.
         * @function encode
         * @memberof SocketEnum.User
         * @static
         * @param {SocketEnum.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ID);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.y);
            if (message.direction != null && Object.hasOwnProperty.call(message, "direction"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.direction);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.nickname);
            if (message.strUserID != null && Object.hasOwnProperty.call(message, "strUserID"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.strUserID);
            if (message.personAppearance != null && Object.hasOwnProperty.call(message, "personAppearance"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.personAppearance);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link SocketEnum.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SocketEnum.User
         * @static
         * @param {SocketEnum.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof SocketEnum.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SocketEnum.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SocketEnum.User();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.uint32();
                    break;
                case 2:
                    message.x = reader.sint32();
                    break;
                case 3:
                    message.y = reader.sint32();
                    break;
                case 4:
                    message.direction = reader.int32();
                    break;
                case 5:
                    message.nickname = reader.string();
                    break;
                case 6:
                    message.strUserID = reader.string();
                    break;
                case 7:
                    message.personAppearance = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SocketEnum.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SocketEnum.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof SocketEnum.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            if (message.direction != null && message.hasOwnProperty("direction"))
                switch (message.direction) {
                default:
                    return "direction: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.strUserID != null && message.hasOwnProperty("strUserID"))
                if (!$util.isString(message.strUserID))
                    return "strUserID: string expected";
            if (message.personAppearance != null && message.hasOwnProperty("personAppearance"))
                if (!$util.isInteger(message.personAppearance))
                    return "personAppearance: integer expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SocketEnum.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SocketEnum.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.SocketEnum.User)
                return object;
            var message = new $root.SocketEnum.User();
            if (object.ID != null)
                message.ID = object.ID >>> 0;
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            switch (object.direction) {
            case "up":
            case 0:
                message.direction = 0;
                break;
            case "right":
            case 1:
                message.direction = 1;
                break;
            case "down":
            case 2:
                message.direction = 2;
                break;
            case "left":
            case 3:
                message.direction = 3;
                break;
            }
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.strUserID != null)
                message.strUserID = String(object.strUserID);
            if (object.personAppearance != null)
                message.personAppearance = object.personAppearance >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SocketEnum.User
         * @static
         * @param {SocketEnum.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = 0;
                object.x = 0;
                object.y = 0;
                object.direction = options.enums === String ? "up" : 0;
                object.nickname = "";
                object.strUserID = "";
                object.personAppearance = 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.direction != null && message.hasOwnProperty("direction"))
                object.direction = options.enums === String ? $root.SocketEnum.UserDirection[message.direction] : message.direction;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.strUserID != null && message.hasOwnProperty("strUserID"))
                object.strUserID = message.strUserID;
            if (message.personAppearance != null && message.hasOwnProperty("personAppearance"))
                object.personAppearance = message.personAppearance;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof SocketEnum.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    return SocketEnum;
})();

$root.SocketClientMsg = (function() {

    /**
     * Namespace SocketClientMsg.
     * @exports SocketClientMsg
     * @namespace
     */
    var SocketClientMsg = {};

    SocketClientMsg.Join = (function() {

        /**
         * Properties of a Join.
         * @memberof SocketClientMsg
         * @interface IJoin
         * @property {string|null} [nickname] Join nickname
         * @property {string|null} [strUserID] Join strUserID
         * @property {number|null} [personAppearance] Join personAppearance
         * @property {number|null} [x] Join x
         * @property {number|null} [y] Join y
         * @property {SocketEnum.UserDirection|null} [direction] Join direction
         */

        /**
         * Constructs a new Join.
         * @memberof SocketClientMsg
         * @classdesc Represents a Join.
         * @implements IJoin
         * @constructor
         * @param {SocketClientMsg.IJoin=} [properties] Properties to set
         */
        function Join(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Join nickname.
         * @member {string} nickname
         * @memberof SocketClientMsg.Join
         * @instance
         */
        Join.prototype.nickname = "";

        /**
         * Join strUserID.
         * @member {string} strUserID
         * @memberof SocketClientMsg.Join
         * @instance
         */
        Join.prototype.strUserID = "";

        /**
         * Join personAppearance.
         * @member {number} personAppearance
         * @memberof SocketClientMsg.Join
         * @instance
         */
        Join.prototype.personAppearance = 0;

        /**
         * Join x.
         * @member {number} x
         * @memberof SocketClientMsg.Join
         * @instance
         */
        Join.prototype.x = 0;

        /**
         * Join y.
         * @member {number} y
         * @memberof SocketClientMsg.Join
         * @instance
         */
        Join.prototype.y = 0;

        /**
         * Join direction.
         * @member {SocketEnum.UserDirection} direction
         * @memberof SocketClientMsg.Join
         * @instance
         */
        Join.prototype.direction = 0;

        /**
         * Creates a new Join instance using the specified properties.
         * @function create
         * @memberof SocketClientMsg.Join
         * @static
         * @param {SocketClientMsg.IJoin=} [properties] Properties to set
         * @returns {SocketClientMsg.Join} Join instance
         */
        Join.create = function create(properties) {
            return new Join(properties);
        };

        /**
         * Encodes the specified Join message. Does not implicitly {@link SocketClientMsg.Join.verify|verify} messages.
         * @function encode
         * @memberof SocketClientMsg.Join
         * @static
         * @param {SocketClientMsg.IJoin} message Join message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Join.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.nickname);
            if (message.strUserID != null && Object.hasOwnProperty.call(message, "strUserID"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.strUserID);
            if (message.personAppearance != null && Object.hasOwnProperty.call(message, "personAppearance"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.personAppearance);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.y);
            if (message.direction != null && Object.hasOwnProperty.call(message, "direction"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.direction);
            return writer;
        };

        /**
         * Encodes the specified Join message, length delimited. Does not implicitly {@link SocketClientMsg.Join.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SocketClientMsg.Join
         * @static
         * @param {SocketClientMsg.IJoin} message Join message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Join.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Join message from the specified reader or buffer.
         * @function decode
         * @memberof SocketClientMsg.Join
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SocketClientMsg.Join} Join
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Join.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SocketClientMsg.Join();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nickname = reader.string();
                    break;
                case 2:
                    message.strUserID = reader.string();
                    break;
                case 3:
                    message.personAppearance = reader.uint32();
                    break;
                case 4:
                    message.x = reader.sint32();
                    break;
                case 5:
                    message.y = reader.sint32();
                    break;
                case 6:
                    message.direction = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Join message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SocketClientMsg.Join
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SocketClientMsg.Join} Join
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Join.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Join message.
         * @function verify
         * @memberof SocketClientMsg.Join
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Join.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.strUserID != null && message.hasOwnProperty("strUserID"))
                if (!$util.isString(message.strUserID))
                    return "strUserID: string expected";
            if (message.personAppearance != null && message.hasOwnProperty("personAppearance"))
                if (!$util.isInteger(message.personAppearance))
                    return "personAppearance: integer expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            if (message.direction != null && message.hasOwnProperty("direction"))
                switch (message.direction) {
                default:
                    return "direction: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates a Join message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SocketClientMsg.Join
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SocketClientMsg.Join} Join
         */
        Join.fromObject = function fromObject(object) {
            if (object instanceof $root.SocketClientMsg.Join)
                return object;
            var message = new $root.SocketClientMsg.Join();
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.strUserID != null)
                message.strUserID = String(object.strUserID);
            if (object.personAppearance != null)
                message.personAppearance = object.personAppearance >>> 0;
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            switch (object.direction) {
            case "up":
            case 0:
                message.direction = 0;
                break;
            case "right":
            case 1:
                message.direction = 1;
                break;
            case "down":
            case 2:
                message.direction = 2;
                break;
            case "left":
            case 3:
                message.direction = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Join message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SocketClientMsg.Join
         * @static
         * @param {SocketClientMsg.Join} message Join
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Join.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.nickname = "";
                object.strUserID = "";
                object.personAppearance = 0;
                object.x = 0;
                object.y = 0;
                object.direction = options.enums === String ? "up" : 0;
            }
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.strUserID != null && message.hasOwnProperty("strUserID"))
                object.strUserID = message.strUserID;
            if (message.personAppearance != null && message.hasOwnProperty("personAppearance"))
                object.personAppearance = message.personAppearance;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.direction != null && message.hasOwnProperty("direction"))
                object.direction = options.enums === String ? $root.SocketEnum.UserDirection[message.direction] : message.direction;
            return object;
        };

        /**
         * Converts this Join to JSON.
         * @function toJSON
         * @memberof SocketClientMsg.Join
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Join.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Join;
    })();

    SocketClientMsg.Move = (function() {

        /**
         * Properties of a Move.
         * @memberof SocketClientMsg
         * @interface IMove
         * @property {number|null} [x] Move x
         * @property {number|null} [y] Move y
         * @property {SocketEnum.UserDirection|null} [direction] Move direction
         */

        /**
         * Constructs a new Move.
         * @memberof SocketClientMsg
         * @classdesc Represents a Move.
         * @implements IMove
         * @constructor
         * @param {SocketClientMsg.IMove=} [properties] Properties to set
         */
        function Move(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Move x.
         * @member {number} x
         * @memberof SocketClientMsg.Move
         * @instance
         */
        Move.prototype.x = 0;

        /**
         * Move y.
         * @member {number} y
         * @memberof SocketClientMsg.Move
         * @instance
         */
        Move.prototype.y = 0;

        /**
         * Move direction.
         * @member {SocketEnum.UserDirection} direction
         * @memberof SocketClientMsg.Move
         * @instance
         */
        Move.prototype.direction = 0;

        /**
         * Creates a new Move instance using the specified properties.
         * @function create
         * @memberof SocketClientMsg.Move
         * @static
         * @param {SocketClientMsg.IMove=} [properties] Properties to set
         * @returns {SocketClientMsg.Move} Move instance
         */
        Move.create = function create(properties) {
            return new Move(properties);
        };

        /**
         * Encodes the specified Move message. Does not implicitly {@link SocketClientMsg.Move.verify|verify} messages.
         * @function encode
         * @memberof SocketClientMsg.Move
         * @static
         * @param {SocketClientMsg.IMove} message Move message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Move.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.y);
            if (message.direction != null && Object.hasOwnProperty.call(message, "direction"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.direction);
            return writer;
        };

        /**
         * Encodes the specified Move message, length delimited. Does not implicitly {@link SocketClientMsg.Move.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SocketClientMsg.Move
         * @static
         * @param {SocketClientMsg.IMove} message Move message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Move.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Move message from the specified reader or buffer.
         * @function decode
         * @memberof SocketClientMsg.Move
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SocketClientMsg.Move} Move
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Move.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SocketClientMsg.Move();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.sint32();
                    break;
                case 2:
                    message.y = reader.sint32();
                    break;
                case 3:
                    message.direction = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Move message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SocketClientMsg.Move
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SocketClientMsg.Move} Move
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Move.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Move message.
         * @function verify
         * @memberof SocketClientMsg.Move
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Move.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            if (message.direction != null && message.hasOwnProperty("direction"))
                switch (message.direction) {
                default:
                    return "direction: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates a Move message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SocketClientMsg.Move
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SocketClientMsg.Move} Move
         */
        Move.fromObject = function fromObject(object) {
            if (object instanceof $root.SocketClientMsg.Move)
                return object;
            var message = new $root.SocketClientMsg.Move();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            switch (object.direction) {
            case "up":
            case 0:
                message.direction = 0;
                break;
            case "right":
            case 1:
                message.direction = 1;
                break;
            case "down":
            case 2:
                message.direction = 2;
                break;
            case "left":
            case 3:
                message.direction = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Move message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SocketClientMsg.Move
         * @static
         * @param {SocketClientMsg.Move} message Move
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Move.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.direction = options.enums === String ? "up" : 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.direction != null && message.hasOwnProperty("direction"))
                object.direction = options.enums === String ? $root.SocketEnum.UserDirection[message.direction] : message.direction;
            return object;
        };

        /**
         * Converts this Move to JSON.
         * @function toJSON
         * @memberof SocketClientMsg.Move
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Move.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Move;
    })();

    SocketClientMsg.Leave = (function() {

        /**
         * Properties of a Leave.
         * @memberof SocketClientMsg
         * @interface ILeave
         */

        /**
         * Constructs a new Leave.
         * @memberof SocketClientMsg
         * @classdesc Represents a Leave.
         * @implements ILeave
         * @constructor
         * @param {SocketClientMsg.ILeave=} [properties] Properties to set
         */
        function Leave(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Leave instance using the specified properties.
         * @function create
         * @memberof SocketClientMsg.Leave
         * @static
         * @param {SocketClientMsg.ILeave=} [properties] Properties to set
         * @returns {SocketClientMsg.Leave} Leave instance
         */
        Leave.create = function create(properties) {
            return new Leave(properties);
        };

        /**
         * Encodes the specified Leave message. Does not implicitly {@link SocketClientMsg.Leave.verify|verify} messages.
         * @function encode
         * @memberof SocketClientMsg.Leave
         * @static
         * @param {SocketClientMsg.ILeave} message Leave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Leave.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Leave message, length delimited. Does not implicitly {@link SocketClientMsg.Leave.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SocketClientMsg.Leave
         * @static
         * @param {SocketClientMsg.ILeave} message Leave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Leave.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Leave message from the specified reader or buffer.
         * @function decode
         * @memberof SocketClientMsg.Leave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SocketClientMsg.Leave} Leave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Leave.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SocketClientMsg.Leave();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Leave message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SocketClientMsg.Leave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SocketClientMsg.Leave} Leave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Leave.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Leave message.
         * @function verify
         * @memberof SocketClientMsg.Leave
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Leave.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a Leave message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SocketClientMsg.Leave
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SocketClientMsg.Leave} Leave
         */
        Leave.fromObject = function fromObject(object) {
            if (object instanceof $root.SocketClientMsg.Leave)
                return object;
            return new $root.SocketClientMsg.Leave();
        };

        /**
         * Creates a plain object from a Leave message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SocketClientMsg.Leave
         * @static
         * @param {SocketClientMsg.Leave} message Leave
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Leave.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Leave to JSON.
         * @function toJSON
         * @memberof SocketClientMsg.Leave
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Leave.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Leave;
    })();

    SocketClientMsg.LinkRTC = (function() {

        /**
         * Properties of a LinkRTC.
         * @memberof SocketClientMsg
         * @interface ILinkRTC
         * @property {number|null} [ID] LinkRTC ID
         */

        /**
         * Constructs a new LinkRTC.
         * @memberof SocketClientMsg
         * @classdesc Represents a LinkRTC.
         * @implements ILinkRTC
         * @constructor
         * @param {SocketClientMsg.ILinkRTC=} [properties] Properties to set
         */
        function LinkRTC(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LinkRTC ID.
         * @member {number} ID
         * @memberof SocketClientMsg.LinkRTC
         * @instance
         */
        LinkRTC.prototype.ID = 0;

        /**
         * Creates a new LinkRTC instance using the specified properties.
         * @function create
         * @memberof SocketClientMsg.LinkRTC
         * @static
         * @param {SocketClientMsg.ILinkRTC=} [properties] Properties to set
         * @returns {SocketClientMsg.LinkRTC} LinkRTC instance
         */
        LinkRTC.create = function create(properties) {
            return new LinkRTC(properties);
        };

        /**
         * Encodes the specified LinkRTC message. Does not implicitly {@link SocketClientMsg.LinkRTC.verify|verify} messages.
         * @function encode
         * @memberof SocketClientMsg.LinkRTC
         * @static
         * @param {SocketClientMsg.ILinkRTC} message LinkRTC message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LinkRTC.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ID);
            return writer;
        };

        /**
         * Encodes the specified LinkRTC message, length delimited. Does not implicitly {@link SocketClientMsg.LinkRTC.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SocketClientMsg.LinkRTC
         * @static
         * @param {SocketClientMsg.ILinkRTC} message LinkRTC message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LinkRTC.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LinkRTC message from the specified reader or buffer.
         * @function decode
         * @memberof SocketClientMsg.LinkRTC
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SocketClientMsg.LinkRTC} LinkRTC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LinkRTC.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SocketClientMsg.LinkRTC();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LinkRTC message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SocketClientMsg.LinkRTC
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SocketClientMsg.LinkRTC} LinkRTC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LinkRTC.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LinkRTC message.
         * @function verify
         * @memberof SocketClientMsg.LinkRTC
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LinkRTC.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            return null;
        };

        /**
         * Creates a LinkRTC message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SocketClientMsg.LinkRTC
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SocketClientMsg.LinkRTC} LinkRTC
         */
        LinkRTC.fromObject = function fromObject(object) {
            if (object instanceof $root.SocketClientMsg.LinkRTC)
                return object;
            var message = new $root.SocketClientMsg.LinkRTC();
            if (object.ID != null)
                message.ID = object.ID >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a LinkRTC message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SocketClientMsg.LinkRTC
         * @static
         * @param {SocketClientMsg.LinkRTC} message LinkRTC
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LinkRTC.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ID = 0;
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            return object;
        };

        /**
         * Converts this LinkRTC to JSON.
         * @function toJSON
         * @memberof SocketClientMsg.LinkRTC
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LinkRTC.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LinkRTC;
    })();

    SocketClientMsg.UnLinkRTC = (function() {

        /**
         * Properties of an UnLinkRTC.
         * @memberof SocketClientMsg
         * @interface IUnLinkRTC
         */

        /**
         * Constructs a new UnLinkRTC.
         * @memberof SocketClientMsg
         * @classdesc Represents an UnLinkRTC.
         * @implements IUnLinkRTC
         * @constructor
         * @param {SocketClientMsg.IUnLinkRTC=} [properties] Properties to set
         */
        function UnLinkRTC(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new UnLinkRTC instance using the specified properties.
         * @function create
         * @memberof SocketClientMsg.UnLinkRTC
         * @static
         * @param {SocketClientMsg.IUnLinkRTC=} [properties] Properties to set
         * @returns {SocketClientMsg.UnLinkRTC} UnLinkRTC instance
         */
        UnLinkRTC.create = function create(properties) {
            return new UnLinkRTC(properties);
        };

        /**
         * Encodes the specified UnLinkRTC message. Does not implicitly {@link SocketClientMsg.UnLinkRTC.verify|verify} messages.
         * @function encode
         * @memberof SocketClientMsg.UnLinkRTC
         * @static
         * @param {SocketClientMsg.IUnLinkRTC} message UnLinkRTC message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnLinkRTC.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UnLinkRTC message, length delimited. Does not implicitly {@link SocketClientMsg.UnLinkRTC.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SocketClientMsg.UnLinkRTC
         * @static
         * @param {SocketClientMsg.IUnLinkRTC} message UnLinkRTC message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnLinkRTC.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UnLinkRTC message from the specified reader or buffer.
         * @function decode
         * @memberof SocketClientMsg.UnLinkRTC
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SocketClientMsg.UnLinkRTC} UnLinkRTC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnLinkRTC.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SocketClientMsg.UnLinkRTC();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UnLinkRTC message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SocketClientMsg.UnLinkRTC
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SocketClientMsg.UnLinkRTC} UnLinkRTC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnLinkRTC.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UnLinkRTC message.
         * @function verify
         * @memberof SocketClientMsg.UnLinkRTC
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UnLinkRTC.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an UnLinkRTC message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SocketClientMsg.UnLinkRTC
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SocketClientMsg.UnLinkRTC} UnLinkRTC
         */
        UnLinkRTC.fromObject = function fromObject(object) {
            if (object instanceof $root.SocketClientMsg.UnLinkRTC)
                return object;
            return new $root.SocketClientMsg.UnLinkRTC();
        };

        /**
         * Creates a plain object from an UnLinkRTC message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SocketClientMsg.UnLinkRTC
         * @static
         * @param {SocketClientMsg.UnLinkRTC} message UnLinkRTC
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UnLinkRTC.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this UnLinkRTC to JSON.
         * @function toJSON
         * @memberof SocketClientMsg.UnLinkRTC
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UnLinkRTC.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UnLinkRTC;
    })();

    SocketClientMsg.LinkRTCPrivate = (function() {

        /**
         * Properties of a LinkRTCPrivate.
         * @memberof SocketClientMsg
         * @interface ILinkRTCPrivate
         * @property {string|null} [key] LinkRTCPrivate key
         */

        /**
         * Constructs a new LinkRTCPrivate.
         * @memberof SocketClientMsg
         * @classdesc Represents a LinkRTCPrivate.
         * @implements ILinkRTCPrivate
         * @constructor
         * @param {SocketClientMsg.ILinkRTCPrivate=} [properties] Properties to set
         */
        function LinkRTCPrivate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LinkRTCPrivate key.
         * @member {string} key
         * @memberof SocketClientMsg.LinkRTCPrivate
         * @instance
         */
        LinkRTCPrivate.prototype.key = "";

        /**
         * Creates a new LinkRTCPrivate instance using the specified properties.
         * @function create
         * @memberof SocketClientMsg.LinkRTCPrivate
         * @static
         * @param {SocketClientMsg.ILinkRTCPrivate=} [properties] Properties to set
         * @returns {SocketClientMsg.LinkRTCPrivate} LinkRTCPrivate instance
         */
        LinkRTCPrivate.create = function create(properties) {
            return new LinkRTCPrivate(properties);
        };

        /**
         * Encodes the specified LinkRTCPrivate message. Does not implicitly {@link SocketClientMsg.LinkRTCPrivate.verify|verify} messages.
         * @function encode
         * @memberof SocketClientMsg.LinkRTCPrivate
         * @static
         * @param {SocketClientMsg.ILinkRTCPrivate} message LinkRTCPrivate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LinkRTCPrivate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            return writer;
        };

        /**
         * Encodes the specified LinkRTCPrivate message, length delimited. Does not implicitly {@link SocketClientMsg.LinkRTCPrivate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SocketClientMsg.LinkRTCPrivate
         * @static
         * @param {SocketClientMsg.ILinkRTCPrivate} message LinkRTCPrivate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LinkRTCPrivate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LinkRTCPrivate message from the specified reader or buffer.
         * @function decode
         * @memberof SocketClientMsg.LinkRTCPrivate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SocketClientMsg.LinkRTCPrivate} LinkRTCPrivate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LinkRTCPrivate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SocketClientMsg.LinkRTCPrivate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LinkRTCPrivate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SocketClientMsg.LinkRTCPrivate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SocketClientMsg.LinkRTCPrivate} LinkRTCPrivate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LinkRTCPrivate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LinkRTCPrivate message.
         * @function verify
         * @memberof SocketClientMsg.LinkRTCPrivate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LinkRTCPrivate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            return null;
        };

        /**
         * Creates a LinkRTCPrivate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SocketClientMsg.LinkRTCPrivate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SocketClientMsg.LinkRTCPrivate} LinkRTCPrivate
         */
        LinkRTCPrivate.fromObject = function fromObject(object) {
            if (object instanceof $root.SocketClientMsg.LinkRTCPrivate)
                return object;
            var message = new $root.SocketClientMsg.LinkRTCPrivate();
            if (object.key != null)
                message.key = String(object.key);
            return message;
        };

        /**
         * Creates a plain object from a LinkRTCPrivate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SocketClientMsg.LinkRTCPrivate
         * @static
         * @param {SocketClientMsg.LinkRTCPrivate} message LinkRTCPrivate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LinkRTCPrivate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.key = "";
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            return object;
        };

        /**
         * Converts this LinkRTCPrivate to JSON.
         * @function toJSON
         * @memberof SocketClientMsg.LinkRTCPrivate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LinkRTCPrivate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LinkRTCPrivate;
    })();

    SocketClientMsg.Msg = (function() {

        /**
         * Properties of a Msg.
         * @memberof SocketClientMsg
         * @interface IMsg
         * @property {SocketEnum.msgType|null} [type] Msg type
         * @property {SocketClientMsg.IJoin|null} [join] Msg join
         * @property {SocketClientMsg.IMove|null} [move] Msg move
         * @property {SocketClientMsg.ILeave|null} [leage] Msg leage
         * @property {SocketClientMsg.ILinkRTC|null} [linkRTC] Msg linkRTC
         * @property {SocketClientMsg.IUnLinkRTC|null} [unLinkRTC] Msg unLinkRTC
         * @property {SocketClientMsg.ILinkRTCPrivate|null} [linkRTCPrivate] Msg linkRTCPrivate
         */

        /**
         * Constructs a new Msg.
         * @memberof SocketClientMsg
         * @classdesc Represents a Msg.
         * @implements IMsg
         * @constructor
         * @param {SocketClientMsg.IMsg=} [properties] Properties to set
         */
        function Msg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Msg type.
         * @member {SocketEnum.msgType} type
         * @memberof SocketClientMsg.Msg
         * @instance
         */
        Msg.prototype.type = 0;

        /**
         * Msg join.
         * @member {SocketClientMsg.IJoin|null|undefined} join
         * @memberof SocketClientMsg.Msg
         * @instance
         */
        Msg.prototype.join = null;

        /**
         * Msg move.
         * @member {SocketClientMsg.IMove|null|undefined} move
         * @memberof SocketClientMsg.Msg
         * @instance
         */
        Msg.prototype.move = null;

        /**
         * Msg leage.
         * @member {SocketClientMsg.ILeave|null|undefined} leage
         * @memberof SocketClientMsg.Msg
         * @instance
         */
        Msg.prototype.leage = null;

        /**
         * Msg linkRTC.
         * @member {SocketClientMsg.ILinkRTC|null|undefined} linkRTC
         * @memberof SocketClientMsg.Msg
         * @instance
         */
        Msg.prototype.linkRTC = null;

        /**
         * Msg unLinkRTC.
         * @member {SocketClientMsg.IUnLinkRTC|null|undefined} unLinkRTC
         * @memberof SocketClientMsg.Msg
         * @instance
         */
        Msg.prototype.unLinkRTC = null;

        /**
         * Msg linkRTCPrivate.
         * @member {SocketClientMsg.ILinkRTCPrivate|null|undefined} linkRTCPrivate
         * @memberof SocketClientMsg.Msg
         * @instance
         */
        Msg.prototype.linkRTCPrivate = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Msg data.
         * @member {"join"|"move"|"leage"|"linkRTC"|"unLinkRTC"|"linkRTCPrivate"|undefined} data
         * @memberof SocketClientMsg.Msg
         * @instance
         */
        Object.defineProperty(Msg.prototype, "data", {
            get: $util.oneOfGetter($oneOfFields = ["join", "move", "leage", "linkRTC", "unLinkRTC", "linkRTCPrivate"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Msg instance using the specified properties.
         * @function create
         * @memberof SocketClientMsg.Msg
         * @static
         * @param {SocketClientMsg.IMsg=} [properties] Properties to set
         * @returns {SocketClientMsg.Msg} Msg instance
         */
        Msg.create = function create(properties) {
            return new Msg(properties);
        };

        /**
         * Encodes the specified Msg message. Does not implicitly {@link SocketClientMsg.Msg.verify|verify} messages.
         * @function encode
         * @memberof SocketClientMsg.Msg
         * @static
         * @param {SocketClientMsg.IMsg} message Msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.join != null && Object.hasOwnProperty.call(message, "join"))
                $root.SocketClientMsg.Join.encode(message.join, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.move != null && Object.hasOwnProperty.call(message, "move"))
                $root.SocketClientMsg.Move.encode(message.move, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.leage != null && Object.hasOwnProperty.call(message, "leage"))
                $root.SocketClientMsg.Leave.encode(message.leage, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.linkRTC != null && Object.hasOwnProperty.call(message, "linkRTC"))
                $root.SocketClientMsg.LinkRTC.encode(message.linkRTC, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.unLinkRTC != null && Object.hasOwnProperty.call(message, "unLinkRTC"))
                $root.SocketClientMsg.UnLinkRTC.encode(message.unLinkRTC, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.linkRTCPrivate != null && Object.hasOwnProperty.call(message, "linkRTCPrivate"))
                $root.SocketClientMsg.LinkRTCPrivate.encode(message.linkRTCPrivate, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Msg message, length delimited. Does not implicitly {@link SocketClientMsg.Msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SocketClientMsg.Msg
         * @static
         * @param {SocketClientMsg.IMsg} message Msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Msg message from the specified reader or buffer.
         * @function decode
         * @memberof SocketClientMsg.Msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SocketClientMsg.Msg} Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SocketClientMsg.Msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.join = $root.SocketClientMsg.Join.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.move = $root.SocketClientMsg.Move.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.leage = $root.SocketClientMsg.Leave.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.linkRTC = $root.SocketClientMsg.LinkRTC.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.unLinkRTC = $root.SocketClientMsg.UnLinkRTC.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.linkRTCPrivate = $root.SocketClientMsg.LinkRTCPrivate.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SocketClientMsg.Msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SocketClientMsg.Msg} Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Msg message.
         * @function verify
         * @memberof SocketClientMsg.Msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 4096:
                case 4097:
                case 4098:
                case 4099:
                case 4100:
                case 4101:
                case 4102:
                case 3:
                    break;
                }
            if (message.join != null && message.hasOwnProperty("join")) {
                properties.data = 1;
                {
                    var error = $root.SocketClientMsg.Join.verify(message.join);
                    if (error)
                        return "join." + error;
                }
            }
            if (message.move != null && message.hasOwnProperty("move")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    var error = $root.SocketClientMsg.Move.verify(message.move);
                    if (error)
                        return "move." + error;
                }
            }
            if (message.leage != null && message.hasOwnProperty("leage")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    var error = $root.SocketClientMsg.Leave.verify(message.leage);
                    if (error)
                        return "leage." + error;
                }
            }
            if (message.linkRTC != null && message.hasOwnProperty("linkRTC")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    var error = $root.SocketClientMsg.LinkRTC.verify(message.linkRTC);
                    if (error)
                        return "linkRTC." + error;
                }
            }
            if (message.unLinkRTC != null && message.hasOwnProperty("unLinkRTC")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    var error = $root.SocketClientMsg.UnLinkRTC.verify(message.unLinkRTC);
                    if (error)
                        return "unLinkRTC." + error;
                }
            }
            if (message.linkRTCPrivate != null && message.hasOwnProperty("linkRTCPrivate")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    var error = $root.SocketClientMsg.LinkRTCPrivate.verify(message.linkRTCPrivate);
                    if (error)
                        return "linkRTCPrivate." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SocketClientMsg.Msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SocketClientMsg.Msg} Msg
         */
        Msg.fromObject = function fromObject(object) {
            if (object instanceof $root.SocketClientMsg.Msg)
                return object;
            var message = new $root.SocketClientMsg.Msg();
            switch (object.type) {
            case "ClientInit":
            case 0:
                message.type = 0;
                break;
            case "UserJoin":
            case 4096:
                message.type = 4096;
                break;
            case "UserMove":
            case 4097:
                message.type = 4097;
                break;
            case "UserLeave":
            case 4098:
                message.type = 4098;
                break;
            case "UserLink":
            case 4099:
                message.type = 4099;
                break;
            case "UserUnLink":
            case 4100:
                message.type = 4100;
                break;
            case "UserLinkPrivate":
            case 4101:
                message.type = 4101;
                break;
            case "UserUnLinkPrivate":
            case 4102:
                message.type = 4102;
                break;
            case "ClientRoomInit":
            case 3:
                message.type = 3;
                break;
            }
            if (object.join != null) {
                if (typeof object.join !== "object")
                    throw TypeError(".SocketClientMsg.Msg.join: object expected");
                message.join = $root.SocketClientMsg.Join.fromObject(object.join);
            }
            if (object.move != null) {
                if (typeof object.move !== "object")
                    throw TypeError(".SocketClientMsg.Msg.move: object expected");
                message.move = $root.SocketClientMsg.Move.fromObject(object.move);
            }
            if (object.leage != null) {
                if (typeof object.leage !== "object")
                    throw TypeError(".SocketClientMsg.Msg.leage: object expected");
                message.leage = $root.SocketClientMsg.Leave.fromObject(object.leage);
            }
            if (object.linkRTC != null) {
                if (typeof object.linkRTC !== "object")
                    throw TypeError(".SocketClientMsg.Msg.linkRTC: object expected");
                message.linkRTC = $root.SocketClientMsg.LinkRTC.fromObject(object.linkRTC);
            }
            if (object.unLinkRTC != null) {
                if (typeof object.unLinkRTC !== "object")
                    throw TypeError(".SocketClientMsg.Msg.unLinkRTC: object expected");
                message.unLinkRTC = $root.SocketClientMsg.UnLinkRTC.fromObject(object.unLinkRTC);
            }
            if (object.linkRTCPrivate != null) {
                if (typeof object.linkRTCPrivate !== "object")
                    throw TypeError(".SocketClientMsg.Msg.linkRTCPrivate: object expected");
                message.linkRTCPrivate = $root.SocketClientMsg.LinkRTCPrivate.fromObject(object.linkRTCPrivate);
            }
            return message;
        };

        /**
         * Creates a plain object from a Msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SocketClientMsg.Msg
         * @static
         * @param {SocketClientMsg.Msg} message Msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.type = options.enums === String ? "ClientInit" : 0;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.SocketEnum.msgType[message.type] : message.type;
            if (message.join != null && message.hasOwnProperty("join")) {
                object.join = $root.SocketClientMsg.Join.toObject(message.join, options);
                if (options.oneofs)
                    object.data = "join";
            }
            if (message.move != null && message.hasOwnProperty("move")) {
                object.move = $root.SocketClientMsg.Move.toObject(message.move, options);
                if (options.oneofs)
                    object.data = "move";
            }
            if (message.leage != null && message.hasOwnProperty("leage")) {
                object.leage = $root.SocketClientMsg.Leave.toObject(message.leage, options);
                if (options.oneofs)
                    object.data = "leage";
            }
            if (message.linkRTC != null && message.hasOwnProperty("linkRTC")) {
                object.linkRTC = $root.SocketClientMsg.LinkRTC.toObject(message.linkRTC, options);
                if (options.oneofs)
                    object.data = "linkRTC";
            }
            if (message.unLinkRTC != null && message.hasOwnProperty("unLinkRTC")) {
                object.unLinkRTC = $root.SocketClientMsg.UnLinkRTC.toObject(message.unLinkRTC, options);
                if (options.oneofs)
                    object.data = "unLinkRTC";
            }
            if (message.linkRTCPrivate != null && message.hasOwnProperty("linkRTCPrivate")) {
                object.linkRTCPrivate = $root.SocketClientMsg.LinkRTCPrivate.toObject(message.linkRTCPrivate, options);
                if (options.oneofs)
                    object.data = "linkRTCPrivate";
            }
            return object;
        };

        /**
         * Converts this Msg to JSON.
         * @function toJSON
         * @memberof SocketClientMsg.Msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Msg;
    })();

    return SocketClientMsg;
})();

$root.SocketServerMsg = (function() {

    /**
     * Namespace SocketServerMsg.
     * @exports SocketServerMsg
     * @namespace
     */
    var SocketServerMsg = {};

    SocketServerMsg.ConnectInit = (function() {

        /**
         * Properties of a ConnectInit.
         * @memberof SocketServerMsg
         * @interface IConnectInit
         * @property {number|null} [ID] ConnectInit ID
         */

        /**
         * Constructs a new ConnectInit.
         * @memberof SocketServerMsg
         * @classdesc Represents a ConnectInit.
         * @implements IConnectInit
         * @constructor
         * @param {SocketServerMsg.IConnectInit=} [properties] Properties to set
         */
        function ConnectInit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConnectInit ID.
         * @member {number} ID
         * @memberof SocketServerMsg.ConnectInit
         * @instance
         */
        ConnectInit.prototype.ID = 0;

        /**
         * Creates a new ConnectInit instance using the specified properties.
         * @function create
         * @memberof SocketServerMsg.ConnectInit
         * @static
         * @param {SocketServerMsg.IConnectInit=} [properties] Properties to set
         * @returns {SocketServerMsg.ConnectInit} ConnectInit instance
         */
        ConnectInit.create = function create(properties) {
            return new ConnectInit(properties);
        };

        /**
         * Encodes the specified ConnectInit message. Does not implicitly {@link SocketServerMsg.ConnectInit.verify|verify} messages.
         * @function encode
         * @memberof SocketServerMsg.ConnectInit
         * @static
         * @param {SocketServerMsg.IConnectInit} message ConnectInit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectInit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ID);
            return writer;
        };

        /**
         * Encodes the specified ConnectInit message, length delimited. Does not implicitly {@link SocketServerMsg.ConnectInit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SocketServerMsg.ConnectInit
         * @static
         * @param {SocketServerMsg.IConnectInit} message ConnectInit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectInit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConnectInit message from the specified reader or buffer.
         * @function decode
         * @memberof SocketServerMsg.ConnectInit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SocketServerMsg.ConnectInit} ConnectInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectInit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SocketServerMsg.ConnectInit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ConnectInit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SocketServerMsg.ConnectInit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SocketServerMsg.ConnectInit} ConnectInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectInit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConnectInit message.
         * @function verify
         * @memberof SocketServerMsg.ConnectInit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConnectInit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            return null;
        };

        /**
         * Creates a ConnectInit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SocketServerMsg.ConnectInit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SocketServerMsg.ConnectInit} ConnectInit
         */
        ConnectInit.fromObject = function fromObject(object) {
            if (object instanceof $root.SocketServerMsg.ConnectInit)
                return object;
            var message = new $root.SocketServerMsg.ConnectInit();
            if (object.ID != null)
                message.ID = object.ID >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a ConnectInit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SocketServerMsg.ConnectInit
         * @static
         * @param {SocketServerMsg.ConnectInit} message ConnectInit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConnectInit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ID = 0;
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            return object;
        };

        /**
         * Converts this ConnectInit to JSON.
         * @function toJSON
         * @memberof SocketServerMsg.ConnectInit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConnectInit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ConnectInit;
    })();

    SocketServerMsg.RoomInit = (function() {

        /**
         * Properties of a RoomInit.
         * @memberof SocketServerMsg
         * @interface IRoomInit
         * @property {Array.<SocketEnum.IUser>|null} [members] RoomInit members
         */

        /**
         * Constructs a new RoomInit.
         * @memberof SocketServerMsg
         * @classdesc Represents a RoomInit.
         * @implements IRoomInit
         * @constructor
         * @param {SocketServerMsg.IRoomInit=} [properties] Properties to set
         */
        function RoomInit(properties) {
            this.members = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomInit members.
         * @member {Array.<SocketEnum.IUser>} members
         * @memberof SocketServerMsg.RoomInit
         * @instance
         */
        RoomInit.prototype.members = $util.emptyArray;

        /**
         * Creates a new RoomInit instance using the specified properties.
         * @function create
         * @memberof SocketServerMsg.RoomInit
         * @static
         * @param {SocketServerMsg.IRoomInit=} [properties] Properties to set
         * @returns {SocketServerMsg.RoomInit} RoomInit instance
         */
        RoomInit.create = function create(properties) {
            return new RoomInit(properties);
        };

        /**
         * Encodes the specified RoomInit message. Does not implicitly {@link SocketServerMsg.RoomInit.verify|verify} messages.
         * @function encode
         * @memberof SocketServerMsg.RoomInit
         * @static
         * @param {SocketServerMsg.IRoomInit} message RoomInit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.members != null && message.members.length)
                for (var i = 0; i < message.members.length; ++i)
                    $root.SocketEnum.User.encode(message.members[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RoomInit message, length delimited. Does not implicitly {@link SocketServerMsg.RoomInit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SocketServerMsg.RoomInit
         * @static
         * @param {SocketServerMsg.IRoomInit} message RoomInit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomInit message from the specified reader or buffer.
         * @function decode
         * @memberof SocketServerMsg.RoomInit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SocketServerMsg.RoomInit} RoomInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SocketServerMsg.RoomInit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.members && message.members.length))
                        message.members = [];
                    message.members.push($root.SocketEnum.User.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomInit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SocketServerMsg.RoomInit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SocketServerMsg.RoomInit} RoomInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomInit message.
         * @function verify
         * @memberof SocketServerMsg.RoomInit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomInit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.members != null && message.hasOwnProperty("members")) {
                if (!Array.isArray(message.members))
                    return "members: array expected";
                for (var i = 0; i < message.members.length; ++i) {
                    var error = $root.SocketEnum.User.verify(message.members[i]);
                    if (error)
                        return "members." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RoomInit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SocketServerMsg.RoomInit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SocketServerMsg.RoomInit} RoomInit
         */
        RoomInit.fromObject = function fromObject(object) {
            if (object instanceof $root.SocketServerMsg.RoomInit)
                return object;
            var message = new $root.SocketServerMsg.RoomInit();
            if (object.members) {
                if (!Array.isArray(object.members))
                    throw TypeError(".SocketServerMsg.RoomInit.members: array expected");
                message.members = [];
                for (var i = 0; i < object.members.length; ++i) {
                    if (typeof object.members[i] !== "object")
                        throw TypeError(".SocketServerMsg.RoomInit.members: object expected");
                    message.members[i] = $root.SocketEnum.User.fromObject(object.members[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RoomInit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SocketServerMsg.RoomInit
         * @static
         * @param {SocketServerMsg.RoomInit} message RoomInit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomInit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.members = [];
            if (message.members && message.members.length) {
                object.members = [];
                for (var j = 0; j < message.members.length; ++j)
                    object.members[j] = $root.SocketEnum.User.toObject(message.members[j], options);
            }
            return object;
        };

        /**
         * Converts this RoomInit to JSON.
         * @function toJSON
         * @memberof SocketServerMsg.RoomInit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomInit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomInit;
    })();

    SocketServerMsg.Join = (function() {

        /**
         * Properties of a Join.
         * @memberof SocketServerMsg
         * @interface IJoin
         * @property {number|null} [ID] Join ID
         * @property {number|null} [x] Join x
         * @property {number|null} [y] Join y
         * @property {SocketEnum.UserDirection|null} [direction] Join direction
         * @property {string|null} [nickname] Join nickname
         * @property {string|null} [strUserID] Join strUserID
         * @property {number|null} [personAppearance] Join personAppearance
         */

        /**
         * Constructs a new Join.
         * @memberof SocketServerMsg
         * @classdesc Represents a Join.
         * @implements IJoin
         * @constructor
         * @param {SocketServerMsg.IJoin=} [properties] Properties to set
         */
        function Join(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Join ID.
         * @member {number} ID
         * @memberof SocketServerMsg.Join
         * @instance
         */
        Join.prototype.ID = 0;

        /**
         * Join x.
         * @member {number} x
         * @memberof SocketServerMsg.Join
         * @instance
         */
        Join.prototype.x = 0;

        /**
         * Join y.
         * @member {number} y
         * @memberof SocketServerMsg.Join
         * @instance
         */
        Join.prototype.y = 0;

        /**
         * Join direction.
         * @member {SocketEnum.UserDirection} direction
         * @memberof SocketServerMsg.Join
         * @instance
         */
        Join.prototype.direction = 0;

        /**
         * Join nickname.
         * @member {string} nickname
         * @memberof SocketServerMsg.Join
         * @instance
         */
        Join.prototype.nickname = "";

        /**
         * Join strUserID.
         * @member {string} strUserID
         * @memberof SocketServerMsg.Join
         * @instance
         */
        Join.prototype.strUserID = "";

        /**
         * Join personAppearance.
         * @member {number} personAppearance
         * @memberof SocketServerMsg.Join
         * @instance
         */
        Join.prototype.personAppearance = 0;

        /**
         * Creates a new Join instance using the specified properties.
         * @function create
         * @memberof SocketServerMsg.Join
         * @static
         * @param {SocketServerMsg.IJoin=} [properties] Properties to set
         * @returns {SocketServerMsg.Join} Join instance
         */
        Join.create = function create(properties) {
            return new Join(properties);
        };

        /**
         * Encodes the specified Join message. Does not implicitly {@link SocketServerMsg.Join.verify|verify} messages.
         * @function encode
         * @memberof SocketServerMsg.Join
         * @static
         * @param {SocketServerMsg.IJoin} message Join message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Join.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ID);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.y);
            if (message.direction != null && Object.hasOwnProperty.call(message, "direction"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.direction);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.nickname);
            if (message.strUserID != null && Object.hasOwnProperty.call(message, "strUserID"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.strUserID);
            if (message.personAppearance != null && Object.hasOwnProperty.call(message, "personAppearance"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.personAppearance);
            return writer;
        };

        /**
         * Encodes the specified Join message, length delimited. Does not implicitly {@link SocketServerMsg.Join.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SocketServerMsg.Join
         * @static
         * @param {SocketServerMsg.IJoin} message Join message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Join.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Join message from the specified reader or buffer.
         * @function decode
         * @memberof SocketServerMsg.Join
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SocketServerMsg.Join} Join
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Join.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SocketServerMsg.Join();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.uint32();
                    break;
                case 2:
                    message.x = reader.sint32();
                    break;
                case 3:
                    message.y = reader.sint32();
                    break;
                case 4:
                    message.direction = reader.int32();
                    break;
                case 5:
                    message.nickname = reader.string();
                    break;
                case 6:
                    message.strUserID = reader.string();
                    break;
                case 7:
                    message.personAppearance = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Join message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SocketServerMsg.Join
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SocketServerMsg.Join} Join
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Join.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Join message.
         * @function verify
         * @memberof SocketServerMsg.Join
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Join.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            if (message.direction != null && message.hasOwnProperty("direction"))
                switch (message.direction) {
                default:
                    return "direction: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.strUserID != null && message.hasOwnProperty("strUserID"))
                if (!$util.isString(message.strUserID))
                    return "strUserID: string expected";
            if (message.personAppearance != null && message.hasOwnProperty("personAppearance"))
                if (!$util.isInteger(message.personAppearance))
                    return "personAppearance: integer expected";
            return null;
        };

        /**
         * Creates a Join message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SocketServerMsg.Join
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SocketServerMsg.Join} Join
         */
        Join.fromObject = function fromObject(object) {
            if (object instanceof $root.SocketServerMsg.Join)
                return object;
            var message = new $root.SocketServerMsg.Join();
            if (object.ID != null)
                message.ID = object.ID >>> 0;
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            switch (object.direction) {
            case "up":
            case 0:
                message.direction = 0;
                break;
            case "right":
            case 1:
                message.direction = 1;
                break;
            case "down":
            case 2:
                message.direction = 2;
                break;
            case "left":
            case 3:
                message.direction = 3;
                break;
            }
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.strUserID != null)
                message.strUserID = String(object.strUserID);
            if (object.personAppearance != null)
                message.personAppearance = object.personAppearance >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Join message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SocketServerMsg.Join
         * @static
         * @param {SocketServerMsg.Join} message Join
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Join.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = 0;
                object.x = 0;
                object.y = 0;
                object.direction = options.enums === String ? "up" : 0;
                object.nickname = "";
                object.strUserID = "";
                object.personAppearance = 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.direction != null && message.hasOwnProperty("direction"))
                object.direction = options.enums === String ? $root.SocketEnum.UserDirection[message.direction] : message.direction;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.strUserID != null && message.hasOwnProperty("strUserID"))
                object.strUserID = message.strUserID;
            if (message.personAppearance != null && message.hasOwnProperty("personAppearance"))
                object.personAppearance = message.personAppearance;
            return object;
        };

        /**
         * Converts this Join to JSON.
         * @function toJSON
         * @memberof SocketServerMsg.Join
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Join.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Join;
    })();

    SocketServerMsg.Move = (function() {

        /**
         * Properties of a Move.
         * @memberof SocketServerMsg
         * @interface IMove
         * @property {number|null} [ID] Move ID
         * @property {number|null} [x] Move x
         * @property {number|null} [y] Move y
         * @property {SocketEnum.UserDirection|null} [direction] Move direction
         */

        /**
         * Constructs a new Move.
         * @memberof SocketServerMsg
         * @classdesc Represents a Move.
         * @implements IMove
         * @constructor
         * @param {SocketServerMsg.IMove=} [properties] Properties to set
         */
        function Move(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Move ID.
         * @member {number} ID
         * @memberof SocketServerMsg.Move
         * @instance
         */
        Move.prototype.ID = 0;

        /**
         * Move x.
         * @member {number} x
         * @memberof SocketServerMsg.Move
         * @instance
         */
        Move.prototype.x = 0;

        /**
         * Move y.
         * @member {number} y
         * @memberof SocketServerMsg.Move
         * @instance
         */
        Move.prototype.y = 0;

        /**
         * Move direction.
         * @member {SocketEnum.UserDirection} direction
         * @memberof SocketServerMsg.Move
         * @instance
         */
        Move.prototype.direction = 0;

        /**
         * Creates a new Move instance using the specified properties.
         * @function create
         * @memberof SocketServerMsg.Move
         * @static
         * @param {SocketServerMsg.IMove=} [properties] Properties to set
         * @returns {SocketServerMsg.Move} Move instance
         */
        Move.create = function create(properties) {
            return new Move(properties);
        };

        /**
         * Encodes the specified Move message. Does not implicitly {@link SocketServerMsg.Move.verify|verify} messages.
         * @function encode
         * @memberof SocketServerMsg.Move
         * @static
         * @param {SocketServerMsg.IMove} message Move message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Move.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ID);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.y);
            if (message.direction != null && Object.hasOwnProperty.call(message, "direction"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.direction);
            return writer;
        };

        /**
         * Encodes the specified Move message, length delimited. Does not implicitly {@link SocketServerMsg.Move.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SocketServerMsg.Move
         * @static
         * @param {SocketServerMsg.IMove} message Move message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Move.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Move message from the specified reader or buffer.
         * @function decode
         * @memberof SocketServerMsg.Move
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SocketServerMsg.Move} Move
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Move.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SocketServerMsg.Move();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.uint32();
                    break;
                case 2:
                    message.x = reader.sint32();
                    break;
                case 3:
                    message.y = reader.sint32();
                    break;
                case 4:
                    message.direction = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Move message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SocketServerMsg.Move
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SocketServerMsg.Move} Move
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Move.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Move message.
         * @function verify
         * @memberof SocketServerMsg.Move
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Move.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            if (message.direction != null && message.hasOwnProperty("direction"))
                switch (message.direction) {
                default:
                    return "direction: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates a Move message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SocketServerMsg.Move
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SocketServerMsg.Move} Move
         */
        Move.fromObject = function fromObject(object) {
            if (object instanceof $root.SocketServerMsg.Move)
                return object;
            var message = new $root.SocketServerMsg.Move();
            if (object.ID != null)
                message.ID = object.ID >>> 0;
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            switch (object.direction) {
            case "up":
            case 0:
                message.direction = 0;
                break;
            case "right":
            case 1:
                message.direction = 1;
                break;
            case "down":
            case 2:
                message.direction = 2;
                break;
            case "left":
            case 3:
                message.direction = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Move message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SocketServerMsg.Move
         * @static
         * @param {SocketServerMsg.Move} message Move
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Move.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = 0;
                object.x = 0;
                object.y = 0;
                object.direction = options.enums === String ? "up" : 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.direction != null && message.hasOwnProperty("direction"))
                object.direction = options.enums === String ? $root.SocketEnum.UserDirection[message.direction] : message.direction;
            return object;
        };

        /**
         * Converts this Move to JSON.
         * @function toJSON
         * @memberof SocketServerMsg.Move
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Move.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Move;
    })();

    SocketServerMsg.Leave = (function() {

        /**
         * Properties of a Leave.
         * @memberof SocketServerMsg
         * @interface ILeave
         * @property {number|null} [ID] Leave ID
         */

        /**
         * Constructs a new Leave.
         * @memberof SocketServerMsg
         * @classdesc Represents a Leave.
         * @implements ILeave
         * @constructor
         * @param {SocketServerMsg.ILeave=} [properties] Properties to set
         */
        function Leave(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Leave ID.
         * @member {number} ID
         * @memberof SocketServerMsg.Leave
         * @instance
         */
        Leave.prototype.ID = 0;

        /**
         * Creates a new Leave instance using the specified properties.
         * @function create
         * @memberof SocketServerMsg.Leave
         * @static
         * @param {SocketServerMsg.ILeave=} [properties] Properties to set
         * @returns {SocketServerMsg.Leave} Leave instance
         */
        Leave.create = function create(properties) {
            return new Leave(properties);
        };

        /**
         * Encodes the specified Leave message. Does not implicitly {@link SocketServerMsg.Leave.verify|verify} messages.
         * @function encode
         * @memberof SocketServerMsg.Leave
         * @static
         * @param {SocketServerMsg.ILeave} message Leave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Leave.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ID);
            return writer;
        };

        /**
         * Encodes the specified Leave message, length delimited. Does not implicitly {@link SocketServerMsg.Leave.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SocketServerMsg.Leave
         * @static
         * @param {SocketServerMsg.ILeave} message Leave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Leave.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Leave message from the specified reader or buffer.
         * @function decode
         * @memberof SocketServerMsg.Leave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SocketServerMsg.Leave} Leave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Leave.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SocketServerMsg.Leave();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Leave message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SocketServerMsg.Leave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SocketServerMsg.Leave} Leave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Leave.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Leave message.
         * @function verify
         * @memberof SocketServerMsg.Leave
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Leave.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            return null;
        };

        /**
         * Creates a Leave message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SocketServerMsg.Leave
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SocketServerMsg.Leave} Leave
         */
        Leave.fromObject = function fromObject(object) {
            if (object instanceof $root.SocketServerMsg.Leave)
                return object;
            var message = new $root.SocketServerMsg.Leave();
            if (object.ID != null)
                message.ID = object.ID >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Leave message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SocketServerMsg.Leave
         * @static
         * @param {SocketServerMsg.Leave} message Leave
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Leave.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ID = 0;
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            return object;
        };

        /**
         * Converts this Leave to JSON.
         * @function toJSON
         * @memberof SocketServerMsg.Leave
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Leave.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Leave;
    })();

    SocketServerMsg.LinkRTC = (function() {

        /**
         * Properties of a LinkRTC.
         * @memberof SocketServerMsg
         * @interface ILinkRTC
         * @property {number|null} [members] LinkRTC members
         */

        /**
         * Constructs a new LinkRTC.
         * @memberof SocketServerMsg
         * @classdesc Represents a LinkRTC.
         * @implements ILinkRTC
         * @constructor
         * @param {SocketServerMsg.ILinkRTC=} [properties] Properties to set
         */
        function LinkRTC(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LinkRTC members.
         * @member {number} members
         * @memberof SocketServerMsg.LinkRTC
         * @instance
         */
        LinkRTC.prototype.members = 0;

        /**
         * Creates a new LinkRTC instance using the specified properties.
         * @function create
         * @memberof SocketServerMsg.LinkRTC
         * @static
         * @param {SocketServerMsg.ILinkRTC=} [properties] Properties to set
         * @returns {SocketServerMsg.LinkRTC} LinkRTC instance
         */
        LinkRTC.create = function create(properties) {
            return new LinkRTC(properties);
        };

        /**
         * Encodes the specified LinkRTC message. Does not implicitly {@link SocketServerMsg.LinkRTC.verify|verify} messages.
         * @function encode
         * @memberof SocketServerMsg.LinkRTC
         * @static
         * @param {SocketServerMsg.ILinkRTC} message LinkRTC message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LinkRTC.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.members != null && Object.hasOwnProperty.call(message, "members"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.members);
            return writer;
        };

        /**
         * Encodes the specified LinkRTC message, length delimited. Does not implicitly {@link SocketServerMsg.LinkRTC.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SocketServerMsg.LinkRTC
         * @static
         * @param {SocketServerMsg.ILinkRTC} message LinkRTC message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LinkRTC.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LinkRTC message from the specified reader or buffer.
         * @function decode
         * @memberof SocketServerMsg.LinkRTC
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SocketServerMsg.LinkRTC} LinkRTC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LinkRTC.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SocketServerMsg.LinkRTC();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.members = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LinkRTC message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SocketServerMsg.LinkRTC
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SocketServerMsg.LinkRTC} LinkRTC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LinkRTC.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LinkRTC message.
         * @function verify
         * @memberof SocketServerMsg.LinkRTC
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LinkRTC.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.members != null && message.hasOwnProperty("members"))
                if (!$util.isInteger(message.members))
                    return "members: integer expected";
            return null;
        };

        /**
         * Creates a LinkRTC message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SocketServerMsg.LinkRTC
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SocketServerMsg.LinkRTC} LinkRTC
         */
        LinkRTC.fromObject = function fromObject(object) {
            if (object instanceof $root.SocketServerMsg.LinkRTC)
                return object;
            var message = new $root.SocketServerMsg.LinkRTC();
            if (object.members != null)
                message.members = object.members >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a LinkRTC message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SocketServerMsg.LinkRTC
         * @static
         * @param {SocketServerMsg.LinkRTC} message LinkRTC
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LinkRTC.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.members = 0;
            if (message.members != null && message.hasOwnProperty("members"))
                object.members = message.members;
            return object;
        };

        /**
         * Converts this LinkRTC to JSON.
         * @function toJSON
         * @memberof SocketServerMsg.LinkRTC
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LinkRTC.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LinkRTC;
    })();

    SocketServerMsg.UnLinkRTC = (function() {

        /**
         * Properties of an UnLinkRTC.
         * @memberof SocketServerMsg
         * @interface IUnLinkRTC
         * @property {number|null} [ID] UnLinkRTC ID
         */

        /**
         * Constructs a new UnLinkRTC.
         * @memberof SocketServerMsg
         * @classdesc Represents an UnLinkRTC.
         * @implements IUnLinkRTC
         * @constructor
         * @param {SocketServerMsg.IUnLinkRTC=} [properties] Properties to set
         */
        function UnLinkRTC(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UnLinkRTC ID.
         * @member {number} ID
         * @memberof SocketServerMsg.UnLinkRTC
         * @instance
         */
        UnLinkRTC.prototype.ID = 0;

        /**
         * Creates a new UnLinkRTC instance using the specified properties.
         * @function create
         * @memberof SocketServerMsg.UnLinkRTC
         * @static
         * @param {SocketServerMsg.IUnLinkRTC=} [properties] Properties to set
         * @returns {SocketServerMsg.UnLinkRTC} UnLinkRTC instance
         */
        UnLinkRTC.create = function create(properties) {
            return new UnLinkRTC(properties);
        };

        /**
         * Encodes the specified UnLinkRTC message. Does not implicitly {@link SocketServerMsg.UnLinkRTC.verify|verify} messages.
         * @function encode
         * @memberof SocketServerMsg.UnLinkRTC
         * @static
         * @param {SocketServerMsg.IUnLinkRTC} message UnLinkRTC message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnLinkRTC.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ID);
            return writer;
        };

        /**
         * Encodes the specified UnLinkRTC message, length delimited. Does not implicitly {@link SocketServerMsg.UnLinkRTC.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SocketServerMsg.UnLinkRTC
         * @static
         * @param {SocketServerMsg.IUnLinkRTC} message UnLinkRTC message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnLinkRTC.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UnLinkRTC message from the specified reader or buffer.
         * @function decode
         * @memberof SocketServerMsg.UnLinkRTC
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SocketServerMsg.UnLinkRTC} UnLinkRTC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnLinkRTC.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SocketServerMsg.UnLinkRTC();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UnLinkRTC message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SocketServerMsg.UnLinkRTC
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SocketServerMsg.UnLinkRTC} UnLinkRTC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnLinkRTC.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UnLinkRTC message.
         * @function verify
         * @memberof SocketServerMsg.UnLinkRTC
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UnLinkRTC.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            return null;
        };

        /**
         * Creates an UnLinkRTC message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SocketServerMsg.UnLinkRTC
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SocketServerMsg.UnLinkRTC} UnLinkRTC
         */
        UnLinkRTC.fromObject = function fromObject(object) {
            if (object instanceof $root.SocketServerMsg.UnLinkRTC)
                return object;
            var message = new $root.SocketServerMsg.UnLinkRTC();
            if (object.ID != null)
                message.ID = object.ID >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an UnLinkRTC message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SocketServerMsg.UnLinkRTC
         * @static
         * @param {SocketServerMsg.UnLinkRTC} message UnLinkRTC
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UnLinkRTC.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ID = 0;
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            return object;
        };

        /**
         * Converts this UnLinkRTC to JSON.
         * @function toJSON
         * @memberof SocketServerMsg.UnLinkRTC
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UnLinkRTC.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UnLinkRTC;
    })();

    SocketServerMsg.Msg = (function() {

        /**
         * Properties of a Msg.
         * @memberof SocketServerMsg
         * @interface IMsg
         * @property {SocketEnum.msgType|null} [type] Msg type
         * @property {SocketServerMsg.IJoin|null} [join] Msg join
         * @property {SocketServerMsg.IMove|null} [move] Msg move
         * @property {SocketServerMsg.ILeave|null} [leave] Msg leave
         * @property {SocketServerMsg.ILinkRTC|null} [linkRTC] Msg linkRTC
         * @property {SocketServerMsg.IUnLinkRTC|null} [unLinkRTC] Msg unLinkRTC
         * @property {SocketServerMsg.IConnectInit|null} [connectInit] Msg connectInit
         * @property {SocketServerMsg.IRoomInit|null} [RoomInit] Msg RoomInit
         */

        /**
         * Constructs a new Msg.
         * @memberof SocketServerMsg
         * @classdesc Represents a Msg.
         * @implements IMsg
         * @constructor
         * @param {SocketServerMsg.IMsg=} [properties] Properties to set
         */
        function Msg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Msg type.
         * @member {SocketEnum.msgType} type
         * @memberof SocketServerMsg.Msg
         * @instance
         */
        Msg.prototype.type = 0;

        /**
         * Msg join.
         * @member {SocketServerMsg.IJoin|null|undefined} join
         * @memberof SocketServerMsg.Msg
         * @instance
         */
        Msg.prototype.join = null;

        /**
         * Msg move.
         * @member {SocketServerMsg.IMove|null|undefined} move
         * @memberof SocketServerMsg.Msg
         * @instance
         */
        Msg.prototype.move = null;

        /**
         * Msg leave.
         * @member {SocketServerMsg.ILeave|null|undefined} leave
         * @memberof SocketServerMsg.Msg
         * @instance
         */
        Msg.prototype.leave = null;

        /**
         * Msg linkRTC.
         * @member {SocketServerMsg.ILinkRTC|null|undefined} linkRTC
         * @memberof SocketServerMsg.Msg
         * @instance
         */
        Msg.prototype.linkRTC = null;

        /**
         * Msg unLinkRTC.
         * @member {SocketServerMsg.IUnLinkRTC|null|undefined} unLinkRTC
         * @memberof SocketServerMsg.Msg
         * @instance
         */
        Msg.prototype.unLinkRTC = null;

        /**
         * Msg connectInit.
         * @member {SocketServerMsg.IConnectInit|null|undefined} connectInit
         * @memberof SocketServerMsg.Msg
         * @instance
         */
        Msg.prototype.connectInit = null;

        /**
         * Msg RoomInit.
         * @member {SocketServerMsg.IRoomInit|null|undefined} RoomInit
         * @memberof SocketServerMsg.Msg
         * @instance
         */
        Msg.prototype.RoomInit = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Msg data.
         * @member {"join"|"move"|"leave"|"linkRTC"|"unLinkRTC"|"connectInit"|"RoomInit"|undefined} data
         * @memberof SocketServerMsg.Msg
         * @instance
         */
        Object.defineProperty(Msg.prototype, "data", {
            get: $util.oneOfGetter($oneOfFields = ["join", "move", "leave", "linkRTC", "unLinkRTC", "connectInit", "RoomInit"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Msg instance using the specified properties.
         * @function create
         * @memberof SocketServerMsg.Msg
         * @static
         * @param {SocketServerMsg.IMsg=} [properties] Properties to set
         * @returns {SocketServerMsg.Msg} Msg instance
         */
        Msg.create = function create(properties) {
            return new Msg(properties);
        };

        /**
         * Encodes the specified Msg message. Does not implicitly {@link SocketServerMsg.Msg.verify|verify} messages.
         * @function encode
         * @memberof SocketServerMsg.Msg
         * @static
         * @param {SocketServerMsg.IMsg} message Msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.join != null && Object.hasOwnProperty.call(message, "join"))
                $root.SocketServerMsg.Join.encode(message.join, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.move != null && Object.hasOwnProperty.call(message, "move"))
                $root.SocketServerMsg.Move.encode(message.move, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.leave != null && Object.hasOwnProperty.call(message, "leave"))
                $root.SocketServerMsg.Leave.encode(message.leave, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.linkRTC != null && Object.hasOwnProperty.call(message, "linkRTC"))
                $root.SocketServerMsg.LinkRTC.encode(message.linkRTC, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.unLinkRTC != null && Object.hasOwnProperty.call(message, "unLinkRTC"))
                $root.SocketServerMsg.UnLinkRTC.encode(message.unLinkRTC, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.connectInit != null && Object.hasOwnProperty.call(message, "connectInit"))
                $root.SocketServerMsg.ConnectInit.encode(message.connectInit, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.RoomInit != null && Object.hasOwnProperty.call(message, "RoomInit"))
                $root.SocketServerMsg.RoomInit.encode(message.RoomInit, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Msg message, length delimited. Does not implicitly {@link SocketServerMsg.Msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SocketServerMsg.Msg
         * @static
         * @param {SocketServerMsg.IMsg} message Msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Msg message from the specified reader or buffer.
         * @function decode
         * @memberof SocketServerMsg.Msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SocketServerMsg.Msg} Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SocketServerMsg.Msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.join = $root.SocketServerMsg.Join.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.move = $root.SocketServerMsg.Move.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.leave = $root.SocketServerMsg.Leave.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.linkRTC = $root.SocketServerMsg.LinkRTC.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.unLinkRTC = $root.SocketServerMsg.UnLinkRTC.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.connectInit = $root.SocketServerMsg.ConnectInit.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.RoomInit = $root.SocketServerMsg.RoomInit.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SocketServerMsg.Msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SocketServerMsg.Msg} Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Msg message.
         * @function verify
         * @memberof SocketServerMsg.Msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 4096:
                case 4097:
                case 4098:
                case 4099:
                case 4100:
                case 4101:
                case 4102:
                case 3:
                    break;
                }
            if (message.join != null && message.hasOwnProperty("join")) {
                properties.data = 1;
                {
                    var error = $root.SocketServerMsg.Join.verify(message.join);
                    if (error)
                        return "join." + error;
                }
            }
            if (message.move != null && message.hasOwnProperty("move")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    var error = $root.SocketServerMsg.Move.verify(message.move);
                    if (error)
                        return "move." + error;
                }
            }
            if (message.leave != null && message.hasOwnProperty("leave")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    var error = $root.SocketServerMsg.Leave.verify(message.leave);
                    if (error)
                        return "leave." + error;
                }
            }
            if (message.linkRTC != null && message.hasOwnProperty("linkRTC")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    var error = $root.SocketServerMsg.LinkRTC.verify(message.linkRTC);
                    if (error)
                        return "linkRTC." + error;
                }
            }
            if (message.unLinkRTC != null && message.hasOwnProperty("unLinkRTC")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    var error = $root.SocketServerMsg.UnLinkRTC.verify(message.unLinkRTC);
                    if (error)
                        return "unLinkRTC." + error;
                }
            }
            if (message.connectInit != null && message.hasOwnProperty("connectInit")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    var error = $root.SocketServerMsg.ConnectInit.verify(message.connectInit);
                    if (error)
                        return "connectInit." + error;
                }
            }
            if (message.RoomInit != null && message.hasOwnProperty("RoomInit")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    var error = $root.SocketServerMsg.RoomInit.verify(message.RoomInit);
                    if (error)
                        return "RoomInit." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SocketServerMsg.Msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SocketServerMsg.Msg} Msg
         */
        Msg.fromObject = function fromObject(object) {
            if (object instanceof $root.SocketServerMsg.Msg)
                return object;
            var message = new $root.SocketServerMsg.Msg();
            switch (object.type) {
            case "ClientInit":
            case 0:
                message.type = 0;
                break;
            case "UserJoin":
            case 4096:
                message.type = 4096;
                break;
            case "UserMove":
            case 4097:
                message.type = 4097;
                break;
            case "UserLeave":
            case 4098:
                message.type = 4098;
                break;
            case "UserLink":
            case 4099:
                message.type = 4099;
                break;
            case "UserUnLink":
            case 4100:
                message.type = 4100;
                break;
            case "UserLinkPrivate":
            case 4101:
                message.type = 4101;
                break;
            case "UserUnLinkPrivate":
            case 4102:
                message.type = 4102;
                break;
            case "ClientRoomInit":
            case 3:
                message.type = 3;
                break;
            }
            if (object.join != null) {
                if (typeof object.join !== "object")
                    throw TypeError(".SocketServerMsg.Msg.join: object expected");
                message.join = $root.SocketServerMsg.Join.fromObject(object.join);
            }
            if (object.move != null) {
                if (typeof object.move !== "object")
                    throw TypeError(".SocketServerMsg.Msg.move: object expected");
                message.move = $root.SocketServerMsg.Move.fromObject(object.move);
            }
            if (object.leave != null) {
                if (typeof object.leave !== "object")
                    throw TypeError(".SocketServerMsg.Msg.leave: object expected");
                message.leave = $root.SocketServerMsg.Leave.fromObject(object.leave);
            }
            if (object.linkRTC != null) {
                if (typeof object.linkRTC !== "object")
                    throw TypeError(".SocketServerMsg.Msg.linkRTC: object expected");
                message.linkRTC = $root.SocketServerMsg.LinkRTC.fromObject(object.linkRTC);
            }
            if (object.unLinkRTC != null) {
                if (typeof object.unLinkRTC !== "object")
                    throw TypeError(".SocketServerMsg.Msg.unLinkRTC: object expected");
                message.unLinkRTC = $root.SocketServerMsg.UnLinkRTC.fromObject(object.unLinkRTC);
            }
            if (object.connectInit != null) {
                if (typeof object.connectInit !== "object")
                    throw TypeError(".SocketServerMsg.Msg.connectInit: object expected");
                message.connectInit = $root.SocketServerMsg.ConnectInit.fromObject(object.connectInit);
            }
            if (object.RoomInit != null) {
                if (typeof object.RoomInit !== "object")
                    throw TypeError(".SocketServerMsg.Msg.RoomInit: object expected");
                message.RoomInit = $root.SocketServerMsg.RoomInit.fromObject(object.RoomInit);
            }
            return message;
        };

        /**
         * Creates a plain object from a Msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SocketServerMsg.Msg
         * @static
         * @param {SocketServerMsg.Msg} message Msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.type = options.enums === String ? "ClientInit" : 0;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.SocketEnum.msgType[message.type] : message.type;
            if (message.join != null && message.hasOwnProperty("join")) {
                object.join = $root.SocketServerMsg.Join.toObject(message.join, options);
                if (options.oneofs)
                    object.data = "join";
            }
            if (message.move != null && message.hasOwnProperty("move")) {
                object.move = $root.SocketServerMsg.Move.toObject(message.move, options);
                if (options.oneofs)
                    object.data = "move";
            }
            if (message.leave != null && message.hasOwnProperty("leave")) {
                object.leave = $root.SocketServerMsg.Leave.toObject(message.leave, options);
                if (options.oneofs)
                    object.data = "leave";
            }
            if (message.linkRTC != null && message.hasOwnProperty("linkRTC")) {
                object.linkRTC = $root.SocketServerMsg.LinkRTC.toObject(message.linkRTC, options);
                if (options.oneofs)
                    object.data = "linkRTC";
            }
            if (message.unLinkRTC != null && message.hasOwnProperty("unLinkRTC")) {
                object.unLinkRTC = $root.SocketServerMsg.UnLinkRTC.toObject(message.unLinkRTC, options);
                if (options.oneofs)
                    object.data = "unLinkRTC";
            }
            if (message.connectInit != null && message.hasOwnProperty("connectInit")) {
                object.connectInit = $root.SocketServerMsg.ConnectInit.toObject(message.connectInit, options);
                if (options.oneofs)
                    object.data = "connectInit";
            }
            if (message.RoomInit != null && message.hasOwnProperty("RoomInit")) {
                object.RoomInit = $root.SocketServerMsg.RoomInit.toObject(message.RoomInit, options);
                if (options.oneofs)
                    object.data = "RoomInit";
            }
            return object;
        };

        /**
         * Converts this Msg to JSON.
         * @function toJSON
         * @memberof SocketServerMsg.Msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Msg;
    })();

    return SocketServerMsg;
})();

module.exports = $root;
