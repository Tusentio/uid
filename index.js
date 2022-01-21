const crypto = require("crypto");

module.exports = {
    /**
     * Generates a timestamped Buffer of random bytes.
     *
     * @param {number} [length = 16]
     * @returns {Buffer}
     */
    bytes(length = 16) {
        const len = Math.ceil(length);
        const timeHash = crypto.createHash("md5").update(new Date().toISOString()).digest();
        const halfLen = Math.max(Math.ceil(len / 2), len - timeHash.length);
        return Buffer.concat([crypto.randomBytes(halfLen), timeHash], halfLen + timeHash.length).subarray(0, len);
    },

    /**
     * Generates a timestamped random BigInt.
     *
     * @param {number} [length = 16]
     * @returns {BigInt}
     */
    bigInt(length = 16) {
        return module.exports.bufferToBigInt(module.exports.bytes(length));
    },

    /**
     * Generates the string representation of a timestamped Buffer of random bytes.
     *
     * @param {BufferEncoding | "decimal"} [encoding = "base64url"]
     * @param {number} [length = 16]
     * @returns {string}
     */
    string(encoding = "base64url", length = 16) {
        switch (encoding) {
            case "decimal":
                return module.exports.bigInt(length).toString();
            default:
                return module.exports.bytes(length).toString(encoding);
        }
    },

    /**
     * Converts a Buffer into its unsigned BigInt representation.
     *
     * @param {Buffer} buffer
     * @returns {BigInt}
     */
    bufferToBigInt(buffer) {
        let big = 0n;
        for (const n of buffer) {
            big <<= 8n;
            big |= BigInt(n);
        }

        return big;
    },
};
