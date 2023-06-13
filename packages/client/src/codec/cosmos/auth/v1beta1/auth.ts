/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import { Any } from '../../../google/protobuf/any';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'cosmos.auth.v1beta1';

/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */
export interface BaseAccount {
  $type: 'cosmos.auth.v1beta1.BaseAccount';
  address: string;
  pubKey?: Any;
  accountNumber: Long;
  sequence: Long;
}

/** ModuleAccount defines an account for modules that holds coins on a pool. */
export interface ModuleAccount {
  $type: 'cosmos.auth.v1beta1.ModuleAccount';
  baseAccount?: BaseAccount;
  name: string;
  permissions: string[];
}

/** Params defines the parameters for the auth module. */
export interface Params {
  $type: 'cosmos.auth.v1beta1.Params';
  maxMemoCharacters: Long;
  txSigLimit: Long;
  txSizeCostPerByte: Long;
  sigVerifyCostEd25519: Long;
  sigVerifyCostSecp256k1: Long;
}

function createBaseBaseAccount(): BaseAccount {
  return {
    $type: 'cosmos.auth.v1beta1.BaseAccount',
    address: '',
    pubKey: undefined,
    accountNumber: Long.UZERO,
    sequence: Long.UZERO,
  };
}

export const BaseAccount = {
  $type: 'cosmos.auth.v1beta1.BaseAccount' as const,

  encode(
    message: BaseAccount,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    if (message.pubKey !== undefined) {
      Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (!message.accountNumber.isZero()) {
      writer.uint32(24).uint64(message.accountNumber);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(32).uint64(message.sequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BaseAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pubKey = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.accountNumber = reader.uint64() as Long;
          break;
        case 4:
          message.sequence = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BaseAccount {
    return {
      $type: BaseAccount.$type,
      address: isSet(object.address) ? String(object.address) : '',
      pubKey: isSet(object.pubKey) ? Any.fromJSON(object.pubKey) : undefined,
      accountNumber: isSet(object.accountNumber)
        ? Long.fromValue(object.accountNumber)
        : Long.UZERO,
      sequence: isSet(object.sequence)
        ? Long.fromValue(object.sequence)
        : Long.UZERO,
    };
  },

  toJSON(message: BaseAccount): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pubKey !== undefined &&
      (obj.pubKey = message.pubKey ? Any.toJSON(message.pubKey) : undefined);
    message.accountNumber !== undefined &&
      (obj.accountNumber = (message.accountNumber || Long.UZERO).toString());
    message.sequence !== undefined &&
      (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BaseAccount>, I>>(
    object: I,
  ): BaseAccount {
    const message = createBaseBaseAccount();
    message.address = object.address ?? '';
    message.pubKey =
      object.pubKey !== undefined && object.pubKey !== null
        ? Any.fromPartial(object.pubKey)
        : undefined;
    message.accountNumber =
      object.accountNumber !== undefined && object.accountNumber !== null
        ? Long.fromValue(object.accountNumber)
        : Long.UZERO;
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromValue(object.sequence)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(BaseAccount.$type, BaseAccount);

function createBaseModuleAccount(): ModuleAccount {
  return {
    $type: 'cosmos.auth.v1beta1.ModuleAccount',
    baseAccount: undefined,
    name: '',
    permissions: [],
  };
}

export const ModuleAccount = {
  $type: 'cosmos.auth.v1beta1.ModuleAccount' as const,

  encode(
    message: ModuleAccount,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.baseAccount !== undefined) {
      BaseAccount.encode(
        message.baseAccount,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.permissions) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAccount = BaseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.permissions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModuleAccount {
    return {
      $type: ModuleAccount.$type,
      baseAccount: isSet(object.baseAccount)
        ? BaseAccount.fromJSON(object.baseAccount)
        : undefined,
      name: isSet(object.name) ? String(object.name) : '',
      permissions: Array.isArray(object?.permissions)
        ? object.permissions.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: ModuleAccount): unknown {
    const obj: any = {};
    message.baseAccount !== undefined &&
      (obj.baseAccount = message.baseAccount
        ? BaseAccount.toJSON(message.baseAccount)
        : undefined);
    message.name !== undefined && (obj.name = message.name);
    if (message.permissions) {
      obj.permissions = message.permissions.map(e => e);
    } else {
      obj.permissions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ModuleAccount>, I>>(
    object: I,
  ): ModuleAccount {
    const message = createBaseModuleAccount();
    message.baseAccount =
      object.baseAccount !== undefined && object.baseAccount !== null
        ? BaseAccount.fromPartial(object.baseAccount)
        : undefined;
    message.name = object.name ?? '';
    message.permissions = object.permissions?.map(e => e) || [];
    return message;
  },
};

messageTypeRegistry.set(ModuleAccount.$type, ModuleAccount);

function createBaseParams(): Params {
  return {
    $type: 'cosmos.auth.v1beta1.Params',
    maxMemoCharacters: Long.UZERO,
    txSigLimit: Long.UZERO,
    txSizeCostPerByte: Long.UZERO,
    sigVerifyCostEd25519: Long.UZERO,
    sigVerifyCostSecp256k1: Long.UZERO,
  };
}

export const Params = {
  $type: 'cosmos.auth.v1beta1.Params' as const,

  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.maxMemoCharacters.isZero()) {
      writer.uint32(8).uint64(message.maxMemoCharacters);
    }
    if (!message.txSigLimit.isZero()) {
      writer.uint32(16).uint64(message.txSigLimit);
    }
    if (!message.txSizeCostPerByte.isZero()) {
      writer.uint32(24).uint64(message.txSizeCostPerByte);
    }
    if (!message.sigVerifyCostEd25519.isZero()) {
      writer.uint32(32).uint64(message.sigVerifyCostEd25519);
    }
    if (!message.sigVerifyCostSecp256k1.isZero()) {
      writer.uint32(40).uint64(message.sigVerifyCostSecp256k1);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxMemoCharacters = reader.uint64() as Long;
          break;
        case 2:
          message.txSigLimit = reader.uint64() as Long;
          break;
        case 3:
          message.txSizeCostPerByte = reader.uint64() as Long;
          break;
        case 4:
          message.sigVerifyCostEd25519 = reader.uint64() as Long;
          break;
        case 5:
          message.sigVerifyCostSecp256k1 = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      $type: Params.$type,
      maxMemoCharacters: isSet(object.maxMemoCharacters)
        ? Long.fromValue(object.maxMemoCharacters)
        : Long.UZERO,
      txSigLimit: isSet(object.txSigLimit)
        ? Long.fromValue(object.txSigLimit)
        : Long.UZERO,
      txSizeCostPerByte: isSet(object.txSizeCostPerByte)
        ? Long.fromValue(object.txSizeCostPerByte)
        : Long.UZERO,
      sigVerifyCostEd25519: isSet(object.sigVerifyCostEd25519)
        ? Long.fromValue(object.sigVerifyCostEd25519)
        : Long.UZERO,
      sigVerifyCostSecp256k1: isSet(object.sigVerifyCostSecp256k1)
        ? Long.fromValue(object.sigVerifyCostSecp256k1)
        : Long.UZERO,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxMemoCharacters !== undefined &&
      (obj.maxMemoCharacters = (
        message.maxMemoCharacters || Long.UZERO
      ).toString());
    message.txSigLimit !== undefined &&
      (obj.txSigLimit = (message.txSigLimit || Long.UZERO).toString());
    message.txSizeCostPerByte !== undefined &&
      (obj.txSizeCostPerByte = (
        message.txSizeCostPerByte || Long.UZERO
      ).toString());
    message.sigVerifyCostEd25519 !== undefined &&
      (obj.sigVerifyCostEd25519 = (
        message.sigVerifyCostEd25519 || Long.UZERO
      ).toString());
    message.sigVerifyCostSecp256k1 !== undefined &&
      (obj.sigVerifyCostSecp256k1 = (
        message.sigVerifyCostSecp256k1 || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.maxMemoCharacters =
      object.maxMemoCharacters !== undefined &&
      object.maxMemoCharacters !== null
        ? Long.fromValue(object.maxMemoCharacters)
        : Long.UZERO;
    message.txSigLimit =
      object.txSigLimit !== undefined && object.txSigLimit !== null
        ? Long.fromValue(object.txSigLimit)
        : Long.UZERO;
    message.txSizeCostPerByte =
      object.txSizeCostPerByte !== undefined &&
      object.txSizeCostPerByte !== null
        ? Long.fromValue(object.txSizeCostPerByte)
        : Long.UZERO;
    message.sigVerifyCostEd25519 =
      object.sigVerifyCostEd25519 !== undefined &&
      object.sigVerifyCostEd25519 !== null
        ? Long.fromValue(object.sigVerifyCostEd25519)
        : Long.UZERO;
    message.sigVerifyCostSecp256k1 =
      object.sigVerifyCostSecp256k1 !== undefined &&
      object.sigVerifyCostSecp256k1 !== null
        ? Long.fromValue(object.sigVerifyCostSecp256k1)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(Params.$type, Params);

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P> | '$type'>]: never;
    };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
