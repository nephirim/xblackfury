/**
 * BitSong Exponent
 * 1 fury = 10^6 ufury
 */
export const Exponent = 6;

/**
 * BitSong Coin denomination
 */
export const Denom = 'fury';

/**
 * Micro BitSong Coin denomination
 */
export const MicroDenom = 'ufury';

/**
 * BitSong Bech32 prefix of an account's address
 */
export const Bech32PrefixAccAddr = 'incubus';

/**
 * BitSong Bech32 prefix of an account's public key
 */
export const Bech32PrefixAccPub = Bech32PrefixAccAddr + 'pub';

/**
 * BitSong Bech32 prefix of a validator's operator address
 */
export const Bech32PrefixValAddr = Bech32PrefixAccAddr + 'valoper';

/**
 * BitSong Bech32 prefix of a validator's operator public key
 */
export const Bech32PrefixValPub = Bech32PrefixValAddr + 'pub';

/**
 * BitSong Bech32 prefix of a consensus node address
 */
export const Bech32PrefixConsAddr = Bech32PrefixAccAddr + 'valcons';

/**
 * BitSong Bech32 prefix of a consensus node public key
 */
export const Bech32PrefixConsPub = Bech32PrefixConsAddr + 'pub';

/**
 * BitSong HDPath
 *
 * @see https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki
 * @see https://github.com/satoshilabs/slips/blob/master/slip-0044.md
 */
export const HDPath = "m/44'/639'/0'/";

/**
 * Get a BitSong HDPath for a specified account index
 *
 * @param accountIndex appended at the end of the default incubus derivation path
 */
export const getHdPath = (accountIndex = 0, walletIndex = 0): string => {
    return HDPath + accountIndex.toString() + '/' + walletIndex.toString();
};

/**
 * Private Key length
 */
export const PrivateKeyLength = 32;