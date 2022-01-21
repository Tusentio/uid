const uid = require("./uid.js");

module.exports = {
    /**
     * Generate a short base64url-encoded unique ID.
     *
     * Alias for ``uid.string("base64url", 8)``
     *
     * @returns {string}
     */
    base64Short() {
        return uid.string("base64url", 8);
    },

    /**
     * Generate a medium long base64url-encoded unique ID.
     *
     * Alias for ``uid.string("base64url", 12)``
     *
     * @returns {string}
     */
    base64Medium() {
        return uid.string("base64url", 12);
    },

    /**
     * Generate a long base64url-encoded unique ID.
     *
     * Alias for ``uid.string("base64url", 16)``
     *
     * @returns {string}
     */
    base64Long() {
        return uid.string("base64url", 16);
    },

    /**
     * Generate a short decimal-encoded unique ID.
     *
     * Alias for ``uid.string("decimal", 8)``
     *
     * @returns {string}
     */
    decimalShort() {
        return uid.string("decimal", 8);
    },

    /**
     * Generate a medium long decimal-encoded unique ID.
     *
     * Alias for ``uid.string("decimal", 12)``
     *
     * @returns {string}
     */
    decimalMedium() {
        return uid.string("decimal", 12);
    },

    /**
     * Generate a long decimal-encoded unique ID.
     *
     * Alias for ``uid.string("decimal", 16)``
     *
     * @returns {string}
     */
    decimalLong() {
        return uid.string("decimal", 16);
    },

    /**
     * Generate a short decimal-encoded unique ID.
     *
     * Alias for ``uid.string("hex", 8)``
     *
     * @returns {string}
     */
    hexShort() {
        return uid.string("hex", 8);
    },

    /**
     * Generate a medium long decimal-encoded unique ID.
     *
     * Alias for ``uid.string("hex", 12)``
     *
     * @returns {string}
     */
    hexMedium() {
        return uid.string("hex", 12);
    },

    /**
     * Generate a long decimal-encoded unique ID.
     *
     * Alias for ``uid.string("hex", 16)``
     *
     * @returns {string}
     */
    hexLong() {
        return uid.string("hex", 16);
    },

    ...uid,
};
