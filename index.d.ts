export * from "./uid";

/**
 * Generate a short base64url-encoded unique ID.
 *
 * Alias for ``uid.string("base64url", 8)``
 */
export function base64Short(): string;

/**
 * Generate a medium long base64url-encoded unique ID.
 *
 * Alias for ``uid.string("base64url", 12)``
 */
export function base64Medium(): string;

/**
 * Generate a long base64url-encoded unique ID.
 *
 * Alias for ``uid.string("base64url", 16)``
 */
export function base64Long(): string;

/**
 * Generate a short decimal-encoded unique ID.
 *
 * Alias for ``uid.string("decimal", 8)``
 */
export function decimalShort(): string;

/**
 * Generate a medium long decimal-encoded unique ID.
 *
 * Alias for ``uid.string("decimal", 12)``
 */
export function decimalMedium(): string;

/**
 * Generate a long decimal-encoded unique ID.
 *
 * Alias for ``uid.string("decimal", 16)``
 */
export function decimalLong(): string;

/**
 * Generate a short hexadecimal-encoded unique ID.
 *
 * Alias for ``uid.string("hex", 8)``
 */
export function hexShort(): string;

/**
 * Generate a medium long hexadecimal-encoded unique ID.
 *
 * Alias for ``uid.string("hex", 12)``
 */
export function hexMedium(): string;

/**
 * Generate a long hexadecimal-encoded unique ID.
 *
 * Alias for ``uid.string("hex", 16)``
 */
export function hexLong(): string;
