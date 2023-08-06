import * as uid from "./uid.js";
export * from "./uid.js";

export function base64Short() {
    return uid.string("base64url", 8);
}

export function base64Medium() {
    return uid.string("base64url", 12);
}

export function base64Long() {
    return uid.string("base64url", 16);
}

export function decimalShort() {
    return uid.string("decimal", 8);
}

export function decimalMedium() {
    return uid.string("decimal", 12);
}

export function decimalLong() {
    return uid.string("decimal", 16);
}

export function hexShort() {
    return uid.string("hex", 8);
}

export function hexMedium() {
    return uid.string("hex", 12);
}

export function hexLong() {
    return uid.string("hex", 16);
}
