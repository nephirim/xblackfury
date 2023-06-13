import { MicroDenom } from '../../../../constants';
import { AminoMsg } from '@cosmjs/amino';
import { AminoConverter } from '@cosmjs/stargate';
import {
  MsgIssue,
  MsgMint,
  MsgBurn,
  MsgDisableMint,
  MsgSetMinter,
  MsgSetAuthority,
  MsgSetUri,
} from './tx';
import Long from 'long';

export interface AminoMsgIssue extends AminoMsg {
  type: '/incubus.fantoken.MsgIssue';
  value: {
    symbol: string;
    name: string;
    max_supply: string;
    authority: string;
    minter: string;
    uri: string;
  };
}
export interface AminoMsgMint extends AminoMsg {
  type: '/incubus.fantoken.MsgMint';
  value: {
    recipient: string;
    coin: {
      denom: string;
      amount: string;
    };
    minter: string;
  };
}
export interface AminoMsgBurn extends AminoMsg {
  type: '/incubus.fantoken.MsgBurn';
  value: {
    coin: {
      denom: string;
      amount: string;
    };
    sender: string;
  };
}
export interface AminoMsgDisableMint extends AminoMsg {
  type: '/incubus.fantoken.MsgDisableMint';
  value: {
    denom: string;
    minter: string;
  };
}
export interface AminoMsgSetMinter extends AminoMsg {
  type: '/incubus.fantoken.MsgSetMinter';
  value: {
    denom: string;
    old_minter: string;
    new_minter: string;
  };
}
export interface AminoMsgSetAuthority extends AminoMsg {
  type: '/incubus.fantoken.MsgSetAuthority';
  value: {
    denom: string;
    old_authority: string;
    new_authority: string;
  };
}
export interface AminoMsgSetUri extends AminoMsg {
  type: '/incubus.fantoken.MsgSetUri';
  value: {
    authority: string;
    denom: string;
    uri: string;
  };
}
export const aminoConverter: { [key: string]: AminoConverter } = {
  '/incubus.fantoken.MsgIssue': {
    aminoType: 'go-incubus/fantoken/MsgIssue',
    toAmino: ({
      symbol,
      name,
      maxSupply,
      authority,
      minter,
      uri,
    }: MsgIssue): AminoMsgIssue['value'] => {
      return {
        symbol,
        name,
        max_supply: maxSupply,
        authority,
        minter,
        uri,
      };
    },
    fromAmino: ({
      symbol,
      name,
      max_supply,
      authority,
      minter,
      uri,
    }: AminoMsgIssue['value']): MsgIssue => {
      return {
        $type: 'incubus.fantoken.MsgIssue',
        symbol,
        name,
        maxSupply: max_supply,
        authority,
        minter,
        uri,
      };
    },
  },
  '/incubus.fantoken.MsgMint': {
    aminoType: 'go-incubus/fantoken/MsgMint',
    toAmino: ({ recipient, coin, minter }: MsgMint): AminoMsgMint['value'] => {
      return {
        recipient,
        coin: {
          denom: coin ? coin.denom : MicroDenom,
          amount: Long.fromString(coin ? coin.amount : '0').toString(),
        },
        minter,
      };
    },
    fromAmino: ({
      recipient,
      coin,
      minter,
    }: AminoMsgMint['value']): MsgMint => {
      return {
        $type: 'incubus.fantoken.MsgMint',
        recipient,
        coin: {
          $type: 'cosmos.base.v1beta1.Coin',
          denom: coin.denom,
          amount: coin.amount,
        },
        minter,
      };
    },
  },
  '/incubus.fantoken.MsgBurn': {
    aminoType: 'go-incubus/fantoken/MsgBurn',
    toAmino: ({ coin, sender }: MsgBurn): AminoMsgBurn['value'] => {
      return {
        coin: {
          denom: coin ? coin.denom : MicroDenom,
          amount: Long.fromString(coin ? coin.amount : '0').toString(),
        },
        sender,
      };
    },
    fromAmino: ({ coin, sender }: AminoMsgBurn['value']): MsgBurn => {
      return {
        $type: 'incubus.fantoken.MsgBurn',
        coin: {
          $type: 'cosmos.base.v1beta1.Coin',
          denom: coin.denom,
          amount: coin.amount,
        },
        sender,
      };
    },
  },
  '/incubus.fantoken.MsgDisableMint': {
    aminoType: 'go-incubus/fantoken/MsgDisableMint',
    toAmino: ({
      denom,
      minter,
    }: MsgDisableMint): AminoMsgDisableMint['value'] => {
      return {
        denom,
        minter,
      };
    },
    fromAmino: ({
      denom,
      minter,
    }: AminoMsgDisableMint['value']): MsgDisableMint => {
      return {
        $type: 'incubus.fantoken.MsgDisableMint',
        denom,
        minter,
      };
    },
  },
  '/incubus.fantoken.MsgSetMinter': {
    aminoType: 'go-incubus/fantoken/MsgSetMinter',
    toAmino: ({
      denom,
      oldMinter,
      newMinter,
    }: MsgSetMinter): AminoMsgSetMinter['value'] => {
      return {
        denom,
        old_minter: oldMinter,
        new_minter: newMinter,
      };
    },
    fromAmino: ({
      denom,
      old_minter,
      new_minter,
    }: AminoMsgSetMinter['value']): MsgSetMinter => {
      return {
        $type: 'incubus.fantoken.MsgSetMinter',
        denom,
        oldMinter: old_minter,
        newMinter: new_minter,
      };
    },
  },
  '/incubus.fantoken.MsgSetAuthority': {
    aminoType: 'go-incubus/fantoken/MsgSetAuthority',
    toAmino: ({
      denom,
      oldAuthority,
      newAuthority,
    }: MsgSetAuthority): AminoMsgSetAuthority['value'] => {
      return {
        denom,
        old_authority: oldAuthority,
        new_authority: newAuthority,
      };
    },
    fromAmino: ({
      denom,
      old_authority,
      new_authority,
    }: AminoMsgSetAuthority['value']): MsgSetAuthority => {
      return {
        $type: 'incubus.fantoken.MsgSetAuthority',
        denom,
        oldAuthority: old_authority,
        newAuthority: new_authority,
      };
    },
  },
  '/incubus.fantoken.MsgSetUri': {
    aminoType: 'go-incubus/fantoken/MsgSetUri',
    toAmino: ({
      authority,
      denom,
      uri,
    }: MsgSetUri): AminoMsgSetUri['value'] => {
      return {
        authority,
        denom,
        uri,
      };
    },
    fromAmino: ({
      authority,
      denom,
      uri,
    }: AminoMsgSetUri['value']): MsgSetUri => {
      return {
        $type: 'incubus.fantoken.MsgSetUri',
        authority,
        denom,
        uri,
      };
    },
  },
};
