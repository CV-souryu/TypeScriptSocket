import * as $protobuf from "protobufjs";
/** Namespace SocketEnum. */
export namespace SocketEnum {

    /** msgType enum. */
    enum msgType {
        ClientInit = 0,
        UserJoin = 4096,
        UserMove = 4097,
        UserLeave = 4098,
        UserLink = 4099,
        UserUnLink = 4100,
        UserLinkPrivate = 4101,
        UserUnLinkPrivate = 4102,
        ClientRoomInit = 3
    }

    /** UserDirection enum. */
    enum UserDirection {
        up = 0,
        right = 1,
        down = 2,
        left = 3
    }

    /** Properties of a User. */
    interface IUser {

        /** User ID */
        ID?: (number|null);

        /** User x */
        x?: (number|null);

        /** User y */
        y?: (number|null);

        /** User direction */
        direction?: (SocketEnum.UserDirection|null);

        /** User nickname */
        nickname?: (string|null);

        /** User strUserID */
        strUserID?: (string|null);

        /** User personAppearance */
        personAppearance?: (number|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: SocketEnum.IUser);

        /** User ID. */
        public ID: number;

        /** User x. */
        public x: number;

        /** User y. */
        public y: number;

        /** User direction. */
        public direction: SocketEnum.UserDirection;

        /** User nickname. */
        public nickname: string;

        /** User strUserID. */
        public strUserID: string;

        /** User personAppearance. */
        public personAppearance: number;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: SocketEnum.IUser): SocketEnum.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link SocketEnum.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SocketEnum.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link SocketEnum.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SocketEnum.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SocketEnum.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SocketEnum.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): SocketEnum.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SocketEnum.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace SocketClientMsg. */
export namespace SocketClientMsg {

    /** Properties of a Join. */
    interface IJoin {

        /** Join nickname */
        nickname?: (string|null);

        /** Join strUserID */
        strUserID?: (string|null);

        /** Join personAppearance */
        personAppearance?: (number|null);

        /** Join x */
        x?: (number|null);

        /** Join y */
        y?: (number|null);

        /** Join direction */
        direction?: (SocketEnum.UserDirection|null);
    }

    /** Represents a Join. */
    class Join implements IJoin {

        /**
         * Constructs a new Join.
         * @param [properties] Properties to set
         */
        constructor(properties?: SocketClientMsg.IJoin);

        /** Join nickname. */
        public nickname: string;

        /** Join strUserID. */
        public strUserID: string;

        /** Join personAppearance. */
        public personAppearance: number;

        /** Join x. */
        public x: number;

        /** Join y. */
        public y: number;

        /** Join direction. */
        public direction: SocketEnum.UserDirection;

        /**
         * Creates a new Join instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Join instance
         */
        public static create(properties?: SocketClientMsg.IJoin): SocketClientMsg.Join;

        /**
         * Encodes the specified Join message. Does not implicitly {@link SocketClientMsg.Join.verify|verify} messages.
         * @param message Join message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SocketClientMsg.IJoin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Join message, length delimited. Does not implicitly {@link SocketClientMsg.Join.verify|verify} messages.
         * @param message Join message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SocketClientMsg.IJoin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Join message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Join
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SocketClientMsg.Join;

        /**
         * Decodes a Join message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Join
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SocketClientMsg.Join;

        /**
         * Verifies a Join message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Join message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Join
         */
        public static fromObject(object: { [k: string]: any }): SocketClientMsg.Join;

        /**
         * Creates a plain object from a Join message. Also converts values to other types if specified.
         * @param message Join
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SocketClientMsg.Join, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Join to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Move. */
    interface IMove {

        /** Move x */
        x?: (number|null);

        /** Move y */
        y?: (number|null);

        /** Move direction */
        direction?: (SocketEnum.UserDirection|null);
    }

    /** Represents a Move. */
    class Move implements IMove {

        /**
         * Constructs a new Move.
         * @param [properties] Properties to set
         */
        constructor(properties?: SocketClientMsg.IMove);

        /** Move x. */
        public x: number;

        /** Move y. */
        public y: number;

        /** Move direction. */
        public direction: SocketEnum.UserDirection;

        /**
         * Creates a new Move instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Move instance
         */
        public static create(properties?: SocketClientMsg.IMove): SocketClientMsg.Move;

        /**
         * Encodes the specified Move message. Does not implicitly {@link SocketClientMsg.Move.verify|verify} messages.
         * @param message Move message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SocketClientMsg.IMove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Move message, length delimited. Does not implicitly {@link SocketClientMsg.Move.verify|verify} messages.
         * @param message Move message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SocketClientMsg.IMove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Move message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Move
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SocketClientMsg.Move;

        /**
         * Decodes a Move message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Move
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SocketClientMsg.Move;

        /**
         * Verifies a Move message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Move message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Move
         */
        public static fromObject(object: { [k: string]: any }): SocketClientMsg.Move;

        /**
         * Creates a plain object from a Move message. Also converts values to other types if specified.
         * @param message Move
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SocketClientMsg.Move, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Move to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Leave. */
    interface ILeave {
    }

    /** Represents a Leave. */
    class Leave implements ILeave {

        /**
         * Constructs a new Leave.
         * @param [properties] Properties to set
         */
        constructor(properties?: SocketClientMsg.ILeave);

        /**
         * Creates a new Leave instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Leave instance
         */
        public static create(properties?: SocketClientMsg.ILeave): SocketClientMsg.Leave;

        /**
         * Encodes the specified Leave message. Does not implicitly {@link SocketClientMsg.Leave.verify|verify} messages.
         * @param message Leave message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SocketClientMsg.ILeave, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Leave message, length delimited. Does not implicitly {@link SocketClientMsg.Leave.verify|verify} messages.
         * @param message Leave message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SocketClientMsg.ILeave, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Leave message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Leave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SocketClientMsg.Leave;

        /**
         * Decodes a Leave message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Leave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SocketClientMsg.Leave;

        /**
         * Verifies a Leave message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Leave message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Leave
         */
        public static fromObject(object: { [k: string]: any }): SocketClientMsg.Leave;

        /**
         * Creates a plain object from a Leave message. Also converts values to other types if specified.
         * @param message Leave
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SocketClientMsg.Leave, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Leave to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LinkRTC. */
    interface ILinkRTC {

        /** LinkRTC ID */
        ID?: (number|null);
    }

    /** Represents a LinkRTC. */
    class LinkRTC implements ILinkRTC {

        /**
         * Constructs a new LinkRTC.
         * @param [properties] Properties to set
         */
        constructor(properties?: SocketClientMsg.ILinkRTC);

        /** LinkRTC ID. */
        public ID: number;

        /**
         * Creates a new LinkRTC instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LinkRTC instance
         */
        public static create(properties?: SocketClientMsg.ILinkRTC): SocketClientMsg.LinkRTC;

        /**
         * Encodes the specified LinkRTC message. Does not implicitly {@link SocketClientMsg.LinkRTC.verify|verify} messages.
         * @param message LinkRTC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SocketClientMsg.ILinkRTC, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LinkRTC message, length delimited. Does not implicitly {@link SocketClientMsg.LinkRTC.verify|verify} messages.
         * @param message LinkRTC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SocketClientMsg.ILinkRTC, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LinkRTC message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LinkRTC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SocketClientMsg.LinkRTC;

        /**
         * Decodes a LinkRTC message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LinkRTC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SocketClientMsg.LinkRTC;

        /**
         * Verifies a LinkRTC message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LinkRTC message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LinkRTC
         */
        public static fromObject(object: { [k: string]: any }): SocketClientMsg.LinkRTC;

        /**
         * Creates a plain object from a LinkRTC message. Also converts values to other types if specified.
         * @param message LinkRTC
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SocketClientMsg.LinkRTC, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LinkRTC to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UnLinkRTC. */
    interface IUnLinkRTC {
    }

    /** Represents an UnLinkRTC. */
    class UnLinkRTC implements IUnLinkRTC {

        /**
         * Constructs a new UnLinkRTC.
         * @param [properties] Properties to set
         */
        constructor(properties?: SocketClientMsg.IUnLinkRTC);

        /**
         * Creates a new UnLinkRTC instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UnLinkRTC instance
         */
        public static create(properties?: SocketClientMsg.IUnLinkRTC): SocketClientMsg.UnLinkRTC;

        /**
         * Encodes the specified UnLinkRTC message. Does not implicitly {@link SocketClientMsg.UnLinkRTC.verify|verify} messages.
         * @param message UnLinkRTC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SocketClientMsg.IUnLinkRTC, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UnLinkRTC message, length delimited. Does not implicitly {@link SocketClientMsg.UnLinkRTC.verify|verify} messages.
         * @param message UnLinkRTC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SocketClientMsg.IUnLinkRTC, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnLinkRTC message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UnLinkRTC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SocketClientMsg.UnLinkRTC;

        /**
         * Decodes an UnLinkRTC message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UnLinkRTC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SocketClientMsg.UnLinkRTC;

        /**
         * Verifies an UnLinkRTC message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UnLinkRTC message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UnLinkRTC
         */
        public static fromObject(object: { [k: string]: any }): SocketClientMsg.UnLinkRTC;

        /**
         * Creates a plain object from an UnLinkRTC message. Also converts values to other types if specified.
         * @param message UnLinkRTC
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SocketClientMsg.UnLinkRTC, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UnLinkRTC to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LinkRTCPrivate. */
    interface ILinkRTCPrivate {

        /** LinkRTCPrivate key */
        key?: (string|null);
    }

    /** Represents a LinkRTCPrivate. */
    class LinkRTCPrivate implements ILinkRTCPrivate {

        /**
         * Constructs a new LinkRTCPrivate.
         * @param [properties] Properties to set
         */
        constructor(properties?: SocketClientMsg.ILinkRTCPrivate);

        /** LinkRTCPrivate key. */
        public key: string;

        /**
         * Creates a new LinkRTCPrivate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LinkRTCPrivate instance
         */
        public static create(properties?: SocketClientMsg.ILinkRTCPrivate): SocketClientMsg.LinkRTCPrivate;

        /**
         * Encodes the specified LinkRTCPrivate message. Does not implicitly {@link SocketClientMsg.LinkRTCPrivate.verify|verify} messages.
         * @param message LinkRTCPrivate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SocketClientMsg.ILinkRTCPrivate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LinkRTCPrivate message, length delimited. Does not implicitly {@link SocketClientMsg.LinkRTCPrivate.verify|verify} messages.
         * @param message LinkRTCPrivate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SocketClientMsg.ILinkRTCPrivate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LinkRTCPrivate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LinkRTCPrivate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SocketClientMsg.LinkRTCPrivate;

        /**
         * Decodes a LinkRTCPrivate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LinkRTCPrivate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SocketClientMsg.LinkRTCPrivate;

        /**
         * Verifies a LinkRTCPrivate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LinkRTCPrivate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LinkRTCPrivate
         */
        public static fromObject(object: { [k: string]: any }): SocketClientMsg.LinkRTCPrivate;

        /**
         * Creates a plain object from a LinkRTCPrivate message. Also converts values to other types if specified.
         * @param message LinkRTCPrivate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SocketClientMsg.LinkRTCPrivate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LinkRTCPrivate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Msg. */
    interface IMsg {

        /** Msg type */
        type?: (SocketEnum.msgType|null);

        /** Msg join */
        join?: (SocketClientMsg.IJoin|null);

        /** Msg move */
        move?: (SocketClientMsg.IMove|null);

        /** Msg leage */
        leage?: (SocketClientMsg.ILeave|null);

        /** Msg linkRTC */
        linkRTC?: (SocketClientMsg.ILinkRTC|null);

        /** Msg unLinkRTC */
        unLinkRTC?: (SocketClientMsg.IUnLinkRTC|null);

        /** Msg linkRTCPrivate */
        linkRTCPrivate?: (SocketClientMsg.ILinkRTCPrivate|null);
    }

    /** Represents a Msg. */
    class Msg implements IMsg {

        /**
         * Constructs a new Msg.
         * @param [properties] Properties to set
         */
        constructor(properties?: SocketClientMsg.IMsg);

        /** Msg type. */
        public type: SocketEnum.msgType;

        /** Msg join. */
        public join?: (SocketClientMsg.IJoin|null);

        /** Msg move. */
        public move?: (SocketClientMsg.IMove|null);

        /** Msg leage. */
        public leage?: (SocketClientMsg.ILeave|null);

        /** Msg linkRTC. */
        public linkRTC?: (SocketClientMsg.ILinkRTC|null);

        /** Msg unLinkRTC. */
        public unLinkRTC?: (SocketClientMsg.IUnLinkRTC|null);

        /** Msg linkRTCPrivate. */
        public linkRTCPrivate?: (SocketClientMsg.ILinkRTCPrivate|null);

        /** Msg data. */
        public data?: ("join"|"move"|"leage"|"linkRTC"|"unLinkRTC"|"linkRTCPrivate");

        /**
         * Creates a new Msg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Msg instance
         */
        public static create(properties?: SocketClientMsg.IMsg): SocketClientMsg.Msg;

        /**
         * Encodes the specified Msg message. Does not implicitly {@link SocketClientMsg.Msg.verify|verify} messages.
         * @param message Msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SocketClientMsg.IMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Msg message, length delimited. Does not implicitly {@link SocketClientMsg.Msg.verify|verify} messages.
         * @param message Msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SocketClientMsg.IMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SocketClientMsg.Msg;

        /**
         * Decodes a Msg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SocketClientMsg.Msg;

        /**
         * Verifies a Msg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Msg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Msg
         */
        public static fromObject(object: { [k: string]: any }): SocketClientMsg.Msg;

        /**
         * Creates a plain object from a Msg message. Also converts values to other types if specified.
         * @param message Msg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SocketClientMsg.Msg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Msg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace SocketServerMsg. */
export namespace SocketServerMsg {

    /** Properties of a ConnectInit. */
    interface IConnectInit {

        /** ConnectInit ID */
        ID?: (number|null);
    }

    /** Represents a ConnectInit. */
    class ConnectInit implements IConnectInit {

        /**
         * Constructs a new ConnectInit.
         * @param [properties] Properties to set
         */
        constructor(properties?: SocketServerMsg.IConnectInit);

        /** ConnectInit ID. */
        public ID: number;

        /**
         * Creates a new ConnectInit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConnectInit instance
         */
        public static create(properties?: SocketServerMsg.IConnectInit): SocketServerMsg.ConnectInit;

        /**
         * Encodes the specified ConnectInit message. Does not implicitly {@link SocketServerMsg.ConnectInit.verify|verify} messages.
         * @param message ConnectInit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SocketServerMsg.IConnectInit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConnectInit message, length delimited. Does not implicitly {@link SocketServerMsg.ConnectInit.verify|verify} messages.
         * @param message ConnectInit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SocketServerMsg.IConnectInit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConnectInit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConnectInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SocketServerMsg.ConnectInit;

        /**
         * Decodes a ConnectInit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConnectInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SocketServerMsg.ConnectInit;

        /**
         * Verifies a ConnectInit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConnectInit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConnectInit
         */
        public static fromObject(object: { [k: string]: any }): SocketServerMsg.ConnectInit;

        /**
         * Creates a plain object from a ConnectInit message. Also converts values to other types if specified.
         * @param message ConnectInit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SocketServerMsg.ConnectInit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConnectInit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoomInit. */
    interface IRoomInit {

        /** RoomInit members */
        members?: (SocketEnum.IUser[]|null);
    }

    /** Represents a RoomInit. */
    class RoomInit implements IRoomInit {

        /**
         * Constructs a new RoomInit.
         * @param [properties] Properties to set
         */
        constructor(properties?: SocketServerMsg.IRoomInit);

        /** RoomInit members. */
        public members: SocketEnum.IUser[];

        /**
         * Creates a new RoomInit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomInit instance
         */
        public static create(properties?: SocketServerMsg.IRoomInit): SocketServerMsg.RoomInit;

        /**
         * Encodes the specified RoomInit message. Does not implicitly {@link SocketServerMsg.RoomInit.verify|verify} messages.
         * @param message RoomInit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SocketServerMsg.IRoomInit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomInit message, length delimited. Does not implicitly {@link SocketServerMsg.RoomInit.verify|verify} messages.
         * @param message RoomInit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SocketServerMsg.IRoomInit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomInit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SocketServerMsg.RoomInit;

        /**
         * Decodes a RoomInit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SocketServerMsg.RoomInit;

        /**
         * Verifies a RoomInit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomInit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomInit
         */
        public static fromObject(object: { [k: string]: any }): SocketServerMsg.RoomInit;

        /**
         * Creates a plain object from a RoomInit message. Also converts values to other types if specified.
         * @param message RoomInit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SocketServerMsg.RoomInit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomInit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Join. */
    interface IJoin {

        /** Join ID */
        ID?: (number|null);

        /** Join x */
        x?: (number|null);

        /** Join y */
        y?: (number|null);

        /** Join direction */
        direction?: (SocketEnum.UserDirection|null);

        /** Join nickname */
        nickname?: (string|null);

        /** Join strUserID */
        strUserID?: (string|null);

        /** Join personAppearance */
        personAppearance?: (number|null);
    }

    /** Represents a Join. */
    class Join implements IJoin {

        /**
         * Constructs a new Join.
         * @param [properties] Properties to set
         */
        constructor(properties?: SocketServerMsg.IJoin);

        /** Join ID. */
        public ID: number;

        /** Join x. */
        public x: number;

        /** Join y. */
        public y: number;

        /** Join direction. */
        public direction: SocketEnum.UserDirection;

        /** Join nickname. */
        public nickname: string;

        /** Join strUserID. */
        public strUserID: string;

        /** Join personAppearance. */
        public personAppearance: number;

        /**
         * Creates a new Join instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Join instance
         */
        public static create(properties?: SocketServerMsg.IJoin): SocketServerMsg.Join;

        /**
         * Encodes the specified Join message. Does not implicitly {@link SocketServerMsg.Join.verify|verify} messages.
         * @param message Join message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SocketServerMsg.IJoin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Join message, length delimited. Does not implicitly {@link SocketServerMsg.Join.verify|verify} messages.
         * @param message Join message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SocketServerMsg.IJoin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Join message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Join
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SocketServerMsg.Join;

        /**
         * Decodes a Join message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Join
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SocketServerMsg.Join;

        /**
         * Verifies a Join message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Join message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Join
         */
        public static fromObject(object: { [k: string]: any }): SocketServerMsg.Join;

        /**
         * Creates a plain object from a Join message. Also converts values to other types if specified.
         * @param message Join
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SocketServerMsg.Join, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Join to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Move. */
    interface IMove {

        /** Move ID */
        ID?: (number|null);

        /** Move x */
        x?: (number|null);

        /** Move y */
        y?: (number|null);

        /** Move direction */
        direction?: (SocketEnum.UserDirection|null);
    }

    /** Represents a Move. */
    class Move implements IMove {

        /**
         * Constructs a new Move.
         * @param [properties] Properties to set
         */
        constructor(properties?: SocketServerMsg.IMove);

        /** Move ID. */
        public ID: number;

        /** Move x. */
        public x: number;

        /** Move y. */
        public y: number;

        /** Move direction. */
        public direction: SocketEnum.UserDirection;

        /**
         * Creates a new Move instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Move instance
         */
        public static create(properties?: SocketServerMsg.IMove): SocketServerMsg.Move;

        /**
         * Encodes the specified Move message. Does not implicitly {@link SocketServerMsg.Move.verify|verify} messages.
         * @param message Move message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SocketServerMsg.IMove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Move message, length delimited. Does not implicitly {@link SocketServerMsg.Move.verify|verify} messages.
         * @param message Move message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SocketServerMsg.IMove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Move message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Move
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SocketServerMsg.Move;

        /**
         * Decodes a Move message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Move
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SocketServerMsg.Move;

        /**
         * Verifies a Move message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Move message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Move
         */
        public static fromObject(object: { [k: string]: any }): SocketServerMsg.Move;

        /**
         * Creates a plain object from a Move message. Also converts values to other types if specified.
         * @param message Move
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SocketServerMsg.Move, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Move to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Leave. */
    interface ILeave {

        /** Leave ID */
        ID?: (number|null);
    }

    /** Represents a Leave. */
    class Leave implements ILeave {

        /**
         * Constructs a new Leave.
         * @param [properties] Properties to set
         */
        constructor(properties?: SocketServerMsg.ILeave);

        /** Leave ID. */
        public ID: number;

        /**
         * Creates a new Leave instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Leave instance
         */
        public static create(properties?: SocketServerMsg.ILeave): SocketServerMsg.Leave;

        /**
         * Encodes the specified Leave message. Does not implicitly {@link SocketServerMsg.Leave.verify|verify} messages.
         * @param message Leave message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SocketServerMsg.ILeave, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Leave message, length delimited. Does not implicitly {@link SocketServerMsg.Leave.verify|verify} messages.
         * @param message Leave message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SocketServerMsg.ILeave, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Leave message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Leave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SocketServerMsg.Leave;

        /**
         * Decodes a Leave message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Leave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SocketServerMsg.Leave;

        /**
         * Verifies a Leave message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Leave message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Leave
         */
        public static fromObject(object: { [k: string]: any }): SocketServerMsg.Leave;

        /**
         * Creates a plain object from a Leave message. Also converts values to other types if specified.
         * @param message Leave
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SocketServerMsg.Leave, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Leave to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LinkRTC. */
    interface ILinkRTC {

        /** LinkRTC members */
        members?: (number|null);
    }

    /** Represents a LinkRTC. */
    class LinkRTC implements ILinkRTC {

        /**
         * Constructs a new LinkRTC.
         * @param [properties] Properties to set
         */
        constructor(properties?: SocketServerMsg.ILinkRTC);

        /** LinkRTC members. */
        public members: number;

        /**
         * Creates a new LinkRTC instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LinkRTC instance
         */
        public static create(properties?: SocketServerMsg.ILinkRTC): SocketServerMsg.LinkRTC;

        /**
         * Encodes the specified LinkRTC message. Does not implicitly {@link SocketServerMsg.LinkRTC.verify|verify} messages.
         * @param message LinkRTC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SocketServerMsg.ILinkRTC, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LinkRTC message, length delimited. Does not implicitly {@link SocketServerMsg.LinkRTC.verify|verify} messages.
         * @param message LinkRTC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SocketServerMsg.ILinkRTC, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LinkRTC message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LinkRTC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SocketServerMsg.LinkRTC;

        /**
         * Decodes a LinkRTC message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LinkRTC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SocketServerMsg.LinkRTC;

        /**
         * Verifies a LinkRTC message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LinkRTC message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LinkRTC
         */
        public static fromObject(object: { [k: string]: any }): SocketServerMsg.LinkRTC;

        /**
         * Creates a plain object from a LinkRTC message. Also converts values to other types if specified.
         * @param message LinkRTC
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SocketServerMsg.LinkRTC, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LinkRTC to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UnLinkRTC. */
    interface IUnLinkRTC {

        /** UnLinkRTC ID */
        ID?: (number|null);
    }

    /** Represents an UnLinkRTC. */
    class UnLinkRTC implements IUnLinkRTC {

        /**
         * Constructs a new UnLinkRTC.
         * @param [properties] Properties to set
         */
        constructor(properties?: SocketServerMsg.IUnLinkRTC);

        /** UnLinkRTC ID. */
        public ID: number;

        /**
         * Creates a new UnLinkRTC instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UnLinkRTC instance
         */
        public static create(properties?: SocketServerMsg.IUnLinkRTC): SocketServerMsg.UnLinkRTC;

        /**
         * Encodes the specified UnLinkRTC message. Does not implicitly {@link SocketServerMsg.UnLinkRTC.verify|verify} messages.
         * @param message UnLinkRTC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SocketServerMsg.IUnLinkRTC, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UnLinkRTC message, length delimited. Does not implicitly {@link SocketServerMsg.UnLinkRTC.verify|verify} messages.
         * @param message UnLinkRTC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SocketServerMsg.IUnLinkRTC, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnLinkRTC message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UnLinkRTC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SocketServerMsg.UnLinkRTC;

        /**
         * Decodes an UnLinkRTC message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UnLinkRTC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SocketServerMsg.UnLinkRTC;

        /**
         * Verifies an UnLinkRTC message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UnLinkRTC message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UnLinkRTC
         */
        public static fromObject(object: { [k: string]: any }): SocketServerMsg.UnLinkRTC;

        /**
         * Creates a plain object from an UnLinkRTC message. Also converts values to other types if specified.
         * @param message UnLinkRTC
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SocketServerMsg.UnLinkRTC, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UnLinkRTC to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Msg. */
    interface IMsg {

        /** Msg type */
        type?: (SocketEnum.msgType|null);

        /** Msg join */
        join?: (SocketServerMsg.IJoin|null);

        /** Msg move */
        move?: (SocketServerMsg.IMove|null);

        /** Msg leave */
        leave?: (SocketServerMsg.ILeave|null);

        /** Msg linkRTC */
        linkRTC?: (SocketServerMsg.ILinkRTC|null);

        /** Msg unLinkRTC */
        unLinkRTC?: (SocketServerMsg.IUnLinkRTC|null);

        /** Msg connectInit */
        connectInit?: (SocketServerMsg.IConnectInit|null);

        /** Msg RoomInit */
        RoomInit?: (SocketServerMsg.IRoomInit|null);
    }

    /** Represents a Msg. */
    class Msg implements IMsg {

        /**
         * Constructs a new Msg.
         * @param [properties] Properties to set
         */
        constructor(properties?: SocketServerMsg.IMsg);

        /** Msg type. */
        public type: SocketEnum.msgType;

        /** Msg join. */
        public join?: (SocketServerMsg.IJoin|null);

        /** Msg move. */
        public move?: (SocketServerMsg.IMove|null);

        /** Msg leave. */
        public leave?: (SocketServerMsg.ILeave|null);

        /** Msg linkRTC. */
        public linkRTC?: (SocketServerMsg.ILinkRTC|null);

        /** Msg unLinkRTC. */
        public unLinkRTC?: (SocketServerMsg.IUnLinkRTC|null);

        /** Msg connectInit. */
        public connectInit?: (SocketServerMsg.IConnectInit|null);

        /** Msg RoomInit. */
        public RoomInit?: (SocketServerMsg.IRoomInit|null);

        /** Msg data. */
        public data?: ("join"|"move"|"leave"|"linkRTC"|"unLinkRTC"|"connectInit"|"RoomInit");

        /**
         * Creates a new Msg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Msg instance
         */
        public static create(properties?: SocketServerMsg.IMsg): SocketServerMsg.Msg;

        /**
         * Encodes the specified Msg message. Does not implicitly {@link SocketServerMsg.Msg.verify|verify} messages.
         * @param message Msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SocketServerMsg.IMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Msg message, length delimited. Does not implicitly {@link SocketServerMsg.Msg.verify|verify} messages.
         * @param message Msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SocketServerMsg.IMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SocketServerMsg.Msg;

        /**
         * Decodes a Msg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SocketServerMsg.Msg;

        /**
         * Verifies a Msg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Msg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Msg
         */
        public static fromObject(object: { [k: string]: any }): SocketServerMsg.Msg;

        /**
         * Creates a plain object from a Msg message. Also converts values to other types if specified.
         * @param message Msg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SocketServerMsg.Msg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Msg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
