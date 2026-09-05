import { d as sdk } from "./sdk-DjIJ_hjn.js";
var listeners = /* @__PURE__ */ new Map();
var opChain = Promise.resolve();
function runExclusive(fn) {
	const next = opChain.then(() => fn());
	opChain = next.catch(() => {});
	return next;
}
async function attachListener(id) {
	const listener = listeners.get(id);
	if (!listener) return;
	if (listener.subscription) {
		await listener.subscription.close();
		listener.subscription = null;
	}
	listener.subscription = await sdk.getConsoleRealtime().subscribe(listener.channels, listener.handler);
}
async function detachListener(id) {
	const listener = listeners.get(id);
	if (!listener) return;
	if (listener.subscription) {
		await listener.subscription.close();
		listener.subscription = null;
	}
	listeners.delete(id);
}
async function registerConsoleRealtimeListener(channels, handler) {
	const id = Symbol("console-realtime-listener");
	await runExclusive(async () => {
		listeners.set(id, {
			channels: [...channels],
			handler,
			subscription: null
		});
		await attachListener(id);
	});
	return async () => {
		await runExclusive(async () => {
			await detachListener(id);
		});
	};
}
export { registerConsoleRealtimeListener as t };
