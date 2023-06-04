const rfc4648_base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const rfc4648_base64url = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

export function bytes(length) {
    if (length < 2) throw new Error("Length must be at least 2 bytes.");
    length |= 0;

    const bytes = crypto.getRandomValues(new Uint8Array(length));
    bigIntToArrayLE(BigInt(Date.now()), bytes, 0, Math.min(6, length >> 1)); // 6 bytes = 8000 years

    return bytes;
}

export function bigInt(length) {
    return arrayToBigIntLE(bytes(length));
}

export function string(encoding, length) {
    switch (encoding) {
        case "decimal":
            return bigInt(length).toString();

        case "hex":
            return bigInt(length).toString(16);

        case "base64": {
            let base8 = bigInt(length).toString(8);
            if (base8.length % 2) base8 = "0" + base8;
            return base8.replace(/../g, (dd) => rfc4648_base64[parseInt(dd, 8)]);
        }

        case "base64url": {
            let base8 = bigInt(length).toString(8);
            if (base8.length % 2) base8 = "0" + base8;
            return base8.replace(/../g, (dd) => rfc4648_base64url[parseInt(dd, 8)]);
        }

        default:
            throw new Error(`Unknown encoding: ${encoding}`);
    }
}

export default {
    bytes,
    bigInt,
    string,
};

function arrayToBigIntLE(array, offset = 0, length = array.length) {
    const BITS_PER_ELEMENT = BigInt(8 * array.BYTES_PER_ELEMENT);
    const BYTE_MASK = (1n << BITS_PER_ELEMENT) - 1n;

    let big = 0n;
    for (let i = offset + length - 1; i >= offset; i--) {
        big <<= BITS_PER_ELEMENT;
        if (i >= 0 && i < array.length) big |= BigInt(array[i]) & BYTE_MASK;
    }

    return big;
}

function bigIntToArrayLE(big, array, offset = 0, length = array.length) {
    const BITS_PER_ELEMENT = BigInt(8 * array.BYTES_PER_ELEMENT);
    const BYTE_MASK = (1n << BITS_PER_ELEMENT) - 1n;

    for (let i = offset; i < length; i++) {
        if (i >= 0 && i < array.length) array[i] = Number(big & BYTE_MASK);
        big >>= BITS_PER_ELEMENT;
    }

    return big;
}
