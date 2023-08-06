/**
 * Generates a timestamped Uint8Array of random bytes.
 */
export function bytes(length: number): Uint8Array;

/**
 * Generates a timestamped random bigint.
 */
export function bigInt(length: number): bigint;

/**
 * Generates a string representation of a timestamped Uint8Array of random bytes.
 */
export function string(encoding: "decimal" | "hex" | "base64" | "base64url", length: number): string;
