import { SigningStargateClientOptions } from '@cosmjs/stargate';
import { OfflineSigner } from '@cosmjs/proto-signing';

export interface DefaultConnectionOptions {
  type: 'tendermint';
  endpoints: string[];
  clientOptions?: SigningStargateClientOptions;
}

export interface ConnectionOptions extends DefaultConnectionOptions {
  signer?: OfflineSigner;
}

export interface SigningConnectionOptions extends DefaultConnectionOptions {
  signer: OfflineSigner;
}

/**
 * Options to pass into the IncubusClient constructor.
 */
export interface IncubusClientOptions {
  connection: ConnectionOptions;
}

export interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
}

export interface QueryRpcClient {
  new (rpc: Rpc): unknown;
}

export interface QueryRpcClientExtension {
  setHeight(height: number): this;
}
