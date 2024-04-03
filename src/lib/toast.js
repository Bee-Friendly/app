import { writable } from "svelte/store";

export const currentToast = writable(null);
let currentTimeoutId;

export function displayToast(message) {
    currentToast.set(message);
    clearTimeout(currentTimeoutId)
    currentTimeoutId = setTimeout(() => currentToast.set(null), 5000);
}