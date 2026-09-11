import { writable } from "svelte/store";

export const matrixActive = writable(false);

const IDLE_MS = 60_000;
let idleTimeoutId: ReturnType<typeof setTimeout>;

function armIdleTimer() {
	clearTimeout(idleTimeoutId);
	idleTimeoutId = setTimeout(() => matrixActive.set(true), IDLE_MS);
}

function handleActivity() {
	matrixActive.set(false);
	armIdleTimer();
}

["click", "keydown", "scroll", "touchstart"].forEach((eventName) =>
	window.addEventListener(eventName, handleActivity),
);
armIdleTimer();
