import { a as resolveAppwriteEndpointFallback, t as getRuntimeConfig } from "./runtime-config-DK7G0iKr.js";
import { i as getDebugEndpointBaseUrl, u as subscribeToDebugEndpointChange } from "./debug-endpoint-BvungD5q.js";
import { t as CONSOLE_SESSION_COOKIE_NAME } from "./console-session-cookie-7RV5Zfr4.js";
import { d as subscribeToDebugOverrides, i as getActiveLanguage } from "./i18n-Db4baE06.js";
import { u as isHttpUnauthorizedError } from "./error-formatting-CL2hjGy5.js";
import { Account, Activities, Affiliates, Agent, Apps, AppwriteException, Assistant, Avatars, Backups, Client, Console, DocumentsDB, Domains, Functions, Locale, Manager, Messaging, Migrations, Mongo, Mysql, Notifications, Oauth2, Organization, Organizations, Postgresql, Presences, Project, Projects, Proxy as Proxy$1, Realtime, Sites, Storage, TablesDB, Teams, Tokens, Usage, Users, Vcs, VectorsDB, Waf, Webhooks } from "@appwrite.io/console";
import * as Sentry from "@sentry/tanstackstart-react";
var consentResolved = false;
var bannerRequired = false;
var analyticsGranted = false;
var consentListeners = /* @__PURE__ */ new Set();
function notifyConsentListeners() {
	for (const listener of consentListeners) listener();
}
function subscribeCookieConsent(listener) {
	consentListeners.add(listener);
	return () => {
		consentListeners.delete(listener);
	};
}
function setCookieConsentState(args) {
	consentResolved = args.resolved;
	bannerRequired = args.bannerRequired;
	analyticsGranted = args.analyticsGranted;
	notifyConsentListeners();
}
function canTrackAnalytics() {
	if (!consentResolved) return false;
	if (!bannerRequired) return true;
	return analyticsGranted;
}
function getSentryEnvironment(hostname = typeof window !== "undefined" ? window.location.hostname : "") {
	const host = hostname.trim().toLowerCase();
	if (host === "localhost" || host === "127.0.0.1" || host === "[::1]" || host === "::1" || host.endsWith(".local")) return "development";
	if (host === "new.appwrite.io" || host === "cloud.appwrite.io" || host === "appwrite.io" || host === "www.appwrite.io") return "production";
	if (host.includes("staging") || host.includes("stage")) return "staging";
	if (host.endsWith(".vercel.app") || host.includes("preview")) return "preview";
	return "production";
}
var STALE_CHUNK_RELOAD_KEY = "console.staleChunkReloadAttempted";
const STALE_CHUNK_GUARD_CLEAR_DELAY_MS = 5e3;
var HASHED_ASSET_PATH_RE = /\/assets\/[^?\s'"]+/i;
var STALE_CHUNK_MESSAGE_HINTS = [
	"'text/html' is not a valid javascript mime type",
	"mime type of \"text/html\"",
	"failed to fetch dynamically imported module",
	"error loading dynamically imported module",
	"importing a module script failed",
	"failed to load module script",
	"unable to preload css"
];
function errorMessage(error) {
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	return "";
}
function isHashedBuildAssetUrl(url) {
	if (!url) return false;
	try {
		const path = new URL(url, "http://local.invalid").pathname;
		return HASHED_ASSET_PATH_RE.test(path);
	} catch {
		return HASHED_ASSET_PATH_RE.test(url);
	}
}
function isStaleChunkLoadError(error, context) {
	if (context?.fromVitePreload) return true;
	const target = context?.event?.target;
	if (target instanceof HTMLScriptElement && isHashedBuildAssetUrl(target.src)) return true;
	if (target instanceof HTMLLinkElement && isHashedBuildAssetUrl(target.href)) return true;
	const message = errorMessage(error);
	if (message && HASHED_ASSET_PATH_RE.test(message)) return true;
	const lower = message.toLowerCase();
	return STALE_CHUNK_MESSAGE_HINTS.some((hint) => lower.includes(hint));
}
const STALE_CHUNK_BOOT_SCRIPT = `(function(){
  var KEY=${JSON.stringify(STALE_CHUNK_RELOAD_KEY)};
  var PARAM=${JSON.stringify("_sc")};
  var ASSET_RE=${HASHED_ASSET_PATH_RE};
  var HINTS=${JSON.stringify([...STALE_CHUNK_MESSAGE_HINTS])};
  // Document already fetched with the bust param; scrub it before the router
  // parses search so route validateSearch never sees a transient key.
  try{
    var bootUrl=new URL(window.location.href);
    if(bootUrl.searchParams.has(PARAM)){
      bootUrl.searchParams.delete(PARAM);
      history.replaceState(history.state,"",bootUrl.pathname+bootUrl.search+bootUrl.hash);
    }
  }catch(e0){}
  function assetUrl(url){
    if(!url) return false;
    try{ return ASSET_RE.test(new URL(url,location.href).pathname); }
    catch(e){ return ASSET_RE.test(String(url)); }
  }
  function isStale(error, event, fromVite){
    if(fromVite) return true;
    var t=event&&event.target;
    if(t&&t.tagName==="SCRIPT"&&assetUrl(t.src)) return true;
    if(t&&t.tagName==="LINK"&&assetUrl(t.href)) return true;
    var msg=error&&error.message?error.message:(typeof error==="string"?error:"");
    if(msg&&ASSET_RE.test(msg)) return true;
    var lower=String(msg).toLowerCase();
    for(var i=0;i<HINTS.length;i++){ if(lower.indexOf(HINTS[i])!==-1) return true; }
    return false;
  }
  function tryReload(error, event, fromVite){
    if(!isStale(error, event, fromVite)) return false;
    try{
      if(sessionStorage.getItem(KEY)) return false;
      sessionStorage.setItem(KEY,String(Date.now()));
    }catch(e){}
    try{
      var url=new URL(window.location.href);
      url.searchParams.set(PARAM,String(Date.now()));
      window.location.replace(url.href);
    }catch(e2){
      window.location.reload();
    }
    return true;
  }
  window.addEventListener("unhandledrejection",function(event){
    if(tryReload(event&&event.reason, event, false)){
      if(event.preventDefault) event.preventDefault();
    }
  });
  window.addEventListener("error",function(event){
    var err=(event&&event.error)||(event&&event.message)||"";
    if(tryReload(err, event, false)){
      if(event.preventDefault) event.preventDefault();
    }
  }, true);
  // Canonical Vite signal for failed dynamic import / CSS preload in production.
  window.addEventListener("vite:preloadError",function(event){
    if(tryReload(event&&event.payload, event, true)){
      if(event.preventDefault) event.preventDefault();
    }
  });
})()`;
function clearStaleChunkReloadGuard() {
	if (typeof sessionStorage === "undefined") return;
	sessionStorage.removeItem(STALE_CHUNK_RELOAD_KEY);
}
function stripStaleChunkCacheBustParam() {
	if (typeof window === "undefined") return;
	try {
		const url = new URL(window.location.href);
		if (!url.searchParams.has("_sc")) return;
		url.searchParams.delete("_sc");
		const next = `${url.pathname}${url.search}${url.hash}`;
		window.history.replaceState(window.history.state, "", next);
	} catch {}
}
function scheduleClearStaleChunkReloadGuard(delayMs = STALE_CHUNK_GUARD_CLEAR_DELAY_MS) {
	if (typeof window === "undefined") return;
	stripStaleChunkCacheBustParam();
	window.setTimeout(() => {
		clearStaleChunkReloadGuard();
	}, delayMs);
}
function forceReloadForStaleChunk() {
	if (typeof window === "undefined") return;
	try {
		const url = new URL(window.location.href);
		url.searchParams.set("_sc", String(Date.now()));
		window.location.replace(url.href);
	} catch {
		window.location.reload();
	}
}
function tryReloadForStaleChunk(error, context) {
	if (typeof window === "undefined") return false;
	if (!isStaleChunkLoadError(error, context)) return false;
	if (typeof sessionStorage !== "undefined") {
		if (sessionStorage.getItem(STALE_CHUNK_RELOAD_KEY)) return false;
		sessionStorage.setItem(STALE_CHUNK_RELOAD_KEY, String(Date.now()));
	}
	forceReloadForStaleChunk();
	return true;
}
var DB_NAME = "appwrite-upload-queue";
var DB_VERSION = 1;
var STORE_NAME = "uploads";
var dbPromise = null;
var persistenceDisabled = false;
function isIndexedDBMutationError(error) {
	if (error instanceof DOMException) {
		if (error.name === "InvalidStateError" || error.code === 11) return true;
	}
	if (error instanceof Error) return /did not allow mutations/i.test(error.message);
	return false;
}
function isUploadPersistenceAvailable() {
	return !persistenceDisabled;
}
function disablePersistence(error) {
	if (!isIndexedDBMutationError(error)) return;
	persistenceDisabled = true;
	dbPromise = null;
}
async function runWrite(operation) {
	if (persistenceDisabled) return void 0;
	try {
		return await operation();
	} catch (error) {
		if (isIndexedDBMutationError(error)) {
			disablePersistence(error);
			return;
		}
		throw error;
	}
}
function openDatabase() {
	if (dbPromise) return dbPromise;
	dbPromise = new Promise((resolve, reject) => {
		const request = indexedDB.open(DB_NAME, DB_VERSION);
		request.onerror = () => reject(request.error);
		request.onsuccess = () => resolve(request.result);
		request.onupgradeneeded = (event) => {
			const db = event.target.result;
			if (!db.objectStoreNames.contains(STORE_NAME)) {
				const store = db.createObjectStore(STORE_NAME, { keyPath: "id" });
				store.createIndex("status", "status", { unique: false });
				store.createIndex("projectId", "projectId", { unique: false });
				store.createIndex("bucketId", "bucketId", { unique: false });
				store.createIndex("createdAt", "createdAt", { unique: false });
			}
		};
	});
	return dbPromise;
}
async function getStore(mode = "readonly") {
	return (await openDatabase()).transaction([STORE_NAME], mode).objectStore(STORE_NAME);
}
async function saveUploadItem(item) {
	await runWrite(async () => {
		const store = await getStore("readwrite");
		await new Promise((resolve, reject) => {
			const request = store.put(item);
			request.onsuccess = () => resolve();
			request.onerror = () => reject(request.error);
		});
	});
}
async function getUploadItem(id) {
	if (persistenceDisabled) return null;
	try {
		const store = await getStore();
		return await new Promise((resolve, reject) => {
			const request = store.get(id);
			request.onsuccess = () => resolve(request.result || null);
			request.onerror = () => reject(request.error);
		});
	} catch (error) {
		if (isIndexedDBMutationError(error)) {
			disablePersistence(error);
			return null;
		}
		throw error;
	}
}
async function getUploadItems(status, projectId, bucketId) {
	if (persistenceDisabled) return [];
	try {
		const store = await getStore();
		return await new Promise((resolve, reject) => {
			const items = [];
			let request;
			if (status) request = store.index("status").openCursor(IDBKeyRange.only(status));
			else if (projectId && bucketId) request = store.index("projectId").openCursor(IDBKeyRange.only(projectId));
			else request = store.openCursor();
			request.onsuccess = (event) => {
				const cursor = event.target.result;
				if (cursor) {
					const item = cursor.value;
					if (!bucketId || item.bucketId === bucketId) items.push(item);
					cursor.continue();
				} else resolve(items);
			};
			request.onerror = () => reject(request.error);
		});
	} catch (error) {
		if (isIndexedDBMutationError(error)) {
			disablePersistence(error);
			return [];
		}
		throw error;
	}
}
async function deleteUploadItem(id) {
	await runWrite(async () => {
		const store = await getStore("readwrite");
		await new Promise((resolve, reject) => {
			const request = store.delete(id);
			request.onsuccess = () => resolve();
			request.onerror = () => reject(request.error);
		});
	});
}
async function clearOldUploads(olderThanMs = 1440 * 60 * 1e3) {
	await runWrite(async () => {
		const index = (await getStore("readwrite")).index("status");
		await new Promise((resolve, reject) => {
			const cutoffTime = Date.now() - olderThanMs;
			const statuses = [
				"completed",
				"failed",
				"cancelled"
			];
			let completed = 0;
			const total = statuses.length;
			if (total === 0) {
				resolve();
				return;
			}
			statuses.forEach((status) => {
				const request = index.openCursor(IDBKeyRange.only(status));
				request.onsuccess = (event) => {
					const cursor = event.target.result;
					if (cursor) {
						const item = cursor.value;
						if (item.completedAt && item.completedAt < cutoffTime) cursor.delete();
						cursor.continue();
					} else {
						completed++;
						if (completed === total) resolve();
					}
				};
				request.onerror = () => {
					completed++;
					if (completed === total) reject(request.error);
				};
			});
		});
	});
}
function getErrorCode(error) {
	if (!error || typeof error !== "object") return void 0;
	const withCode = error;
	return withCode.code ?? withCode.status;
}
function shouldSkipSentryError(error) {
	if (getErrorCode(error) === 401) return true;
	if (isStaleChunkLoadError(error)) return true;
	if (isIndexedDBMutationError(error)) return true;
	return false;
}
var sentryInitialized = false;
function initSentryClient() {
	if (typeof window === "undefined") return false;
	if (sentryInitialized) return !!Sentry.getClient();
	const sentryDsn = getRuntimeConfig().sentryDsn;
	if (!sentryDsn) return false;
	Sentry.init({
		dsn: sentryDsn,
		environment: getSentryEnvironment(),
		sendDefaultPii: false,
		beforeSend(event, hint) {
			if (shouldSkipSentryError(hint.originalException)) return null;
			return event;
		}
	});
	sentryInitialized = true;
	return !!Sentry.getClient();
}
async function sendSentryDebugTestError() {
	if (typeof window === "undefined") return {
		ok: false,
		reason: "Not in a browser context"
	};
	if (!getRuntimeConfig().sentryDsn) return {
		ok: false,
		reason: "VITE_SENTRY_DSN is not set in runtime config"
	};
	if (!initSentryClient()) return {
		ok: false,
		reason: "Sentry client failed to initialize"
	};
	const resolvedId = Sentry.captureException(/* @__PURE__ */ new Error("Debug menu Sentry test error"), {
		tags: { error_source: "debug-menu" },
		extra: {
			timestamp: (/* @__PURE__ */ new Date()).toISOString(),
			environment: getSentryEnvironment()
		}
	}) || Sentry.lastEventId();
	if (!resolvedId) return {
		ok: false,
		reason: "captureException did not produce an event id"
	};
	if (!await Sentry.flush(5e3)) return {
		ok: false,
		eventId: resolvedId,
		reason: "Flush timed out. Check Network for ingest.us.sentry.io (ad blockers often block it)."
	};
	return {
		ok: true,
		eventId: resolvedId
	};
}
const SLOW_CALL_THRESHOLD_MS = 5e3;
function isSentryEnabled() {
	return !!getRuntimeConfig().sentryDsn && canTrackAnalytics();
}
function reportSlowSdkCall(scope, method, durationMs) {
	if (!isSentryEnabled()) return;
	if (!initSentryClient()) return;
	try {
		Sentry.captureMessage(`Slow Appwrite SDK call: ${scope}.${method}`, {
			level: "warning",
			tags: {
				sdk_scope: scope,
				sdk_method: method,
				duration_ms: String(durationMs)
			},
			extra: {
				scope,
				method,
				durationMs,
				thresholdMs: SLOW_CALL_THRESHOLD_MS
			}
		});
	} catch {}
}
function isPromiseLike(value) {
	return value !== null && typeof value === "object" && typeof value.then === "function";
}
function wrapWithTiming(fn, scope, method) {
	return ((...args) => {
		const start = Date.now();
		try {
			const result = fn(...args);
			if (isPromiseLike(result)) return result.then((resolved) => {
				const duration$1 = Date.now() - start;
				if (duration$1 >= 5e3) reportSlowSdkCall(scope, method, duration$1);
				return resolved;
			}, (err) => {
				const duration$1 = Date.now() - start;
				if (duration$1 >= 5e3) reportSlowSdkCall(scope, method, duration$1);
				throw err;
			});
			const duration = Date.now() - start;
			if (duration >= 5e3) reportSlowSdkCall(scope, method, duration);
			return result;
		} catch (err) {
			const duration = Date.now() - start;
			if (duration >= 5e3) reportSlowSdkCall(scope, method, duration);
			throw err;
		}
	});
}
var SKIP_KEYS = new Set(["client"]);
function wrapServiceObject(obj, scope, visited = /* @__PURE__ */ new WeakSet()) {
	if (obj === null || typeof obj !== "object") return obj;
	if (visited.has(obj)) return obj;
	visited.add(obj);
	return new Proxy(obj, { get(target, prop, receiver) {
		const value = Reflect.get(target, prop, receiver);
		if (SKIP_KEYS.has(prop)) return value;
		if (typeof value === "function") return wrapWithTiming(value.bind(target), scope, prop);
		if (value !== null && typeof value === "object" && !Array.isArray(value) && typeof value.then !== "function") return wrapServiceObject(value, `${scope}.${prop}`, visited);
		return value;
	} });
}
var GLOBAL_CACHE_KEY = "__vibesConsoleAccountCache";
function getGlobalCache() {
	const g = globalThis;
	if (!g[GLOBAL_CACHE_KEY]) g[GLOBAL_CACHE_KEY] = {
		resolved: /* @__PURE__ */ new Map(),
		inflight: /* @__PURE__ */ new Map(),
		unauthenticated: /* @__PURE__ */ new Map()
	};
	return g[GLOBAL_CACHE_KEY];
}
function getConsoleAccountSync(revision) {
	return getGlobalCache().resolved.get(revision);
}
function setConsoleAccountCache(account, revision) {
	getGlobalCache().resolved.set(revision, account);
}
function getConsoleAccountUnauthenticatedError(revision) {
	return getGlobalCache().unauthenticated.get(revision);
}
function setConsoleAccountUnauthenticatedError(revision, error) {
	getGlobalCache().unauthenticated.set(revision, error);
}
function clearConsoleAccountUnauthenticatedError(revision) {
	const cache$1 = getGlobalCache();
	if (revision === void 0) {
		cache$1.unauthenticated.clear();
		return;
	}
	cache$1.unauthenticated.delete(revision);
}
function clearConsoleAccountCache(revision) {
	const cache$1 = getGlobalCache();
	if (revision === void 0) {
		cache$1.resolved.clear();
		cache$1.inflight.clear();
		cache$1.unauthenticated.clear();
		return;
	}
	cache$1.resolved.delete(revision);
	cache$1.inflight.delete(revision);
	cache$1.unauthenticated.delete(revision);
}
function getConsoleAccountInflight(revision) {
	return getGlobalCache().inflight.get(revision);
}
function setConsoleAccountInflight(revision, promise) {
	getGlobalCache().inflight.set(revision, promise);
}
function clearConsoleAccountInflight(revision, promise) {
	const cache$1 = getGlobalCache();
	if (cache$1.inflight.get(revision) === promise) cache$1.inflight.delete(revision);
}
const CONSOLE_IMPERSONATION_TARGET_KEY = "console.impersonation.targetUserId";
const CONSOLE_IMPERSONATION_OPERATOR_KEY = "console.impersonation.operator";
const CONSOLE_IMPERSONATION_CHANGED_EVENT = "console-impersonation-changed";
var consoleAccountQueryRevision = 0;
function getConsoleAccountQueryRevision() {
	return consoleAccountQueryRevision;
}
const ACCOUNT_PATH_AFTER_IMPERSONATION = "/account";
function hardNavigateToAccountAfterImpersonation() {
	if (typeof window === "undefined") return;
	window.location.replace(ACCOUNT_PATH_AFTER_IMPERSONATION);
}
function readConsoleImpersonationTargetUserId() {
	if (typeof window === "undefined") return void 0;
	try {
		return sessionStorage.getItem("console.impersonation.targetUserId")?.trim() || void 0;
	} catch {
		return;
	}
}
function readConsoleImpersonationOperatorSnapshot() {
	if (typeof window === "undefined") return void 0;
	try {
		const raw = sessionStorage.getItem(CONSOLE_IMPERSONATION_OPERATOR_KEY);
		if (!raw) return void 0;
		const parsed = JSON.parse(raw);
		if (parsed && typeof parsed.$id === "string") return parsed;
		return;
	} catch {
		return;
	}
}
function persistConsoleImpersonationSession(targetUserId, operator, options) {
	if (typeof window === "undefined") return;
	try {
		sessionStorage.setItem(CONSOLE_IMPERSONATION_TARGET_KEY, targetUserId);
		sessionStorage.setItem(CONSOLE_IMPERSONATION_OPERATOR_KEY, JSON.stringify(operator));
	} catch {}
	if (!options?.skipNotify) notifyConsoleImpersonationChanged();
}
function clearConsoleImpersonationSession(options) {
	if (typeof window === "undefined") return;
	try {
		sessionStorage.removeItem(CONSOLE_IMPERSONATION_TARGET_KEY);
		sessionStorage.removeItem(CONSOLE_IMPERSONATION_OPERATOR_KEY);
	} catch {}
	if (!options?.skipNotify) notifyConsoleImpersonationChanged();
}
function notifyConsoleImpersonationChanged() {
	if (typeof window === "undefined") return;
	consoleAccountQueryRevision += 1;
	clearConsoleAccountCache();
	window.dispatchEvent(new Event(CONSOLE_IMPERSONATION_CHANGED_EVENT));
}
function isConsoleImpersonationActive(account) {
	return !!account?.impersonatorUserId || !!readConsoleImpersonationTargetUserId();
}
function hasConsoleImpersonationSessionTarget() {
	return !!readConsoleImpersonationTargetUserId();
}
var rawConsoleAccountGet = null;
function hasLikelyConsoleSession() {
	if (typeof window === "undefined") return false;
	try {
		const cookieFallback = window.localStorage.getItem("cookieFallback");
		if (cookieFallback) {
			const session = JSON.parse(cookieFallback)[CONSOLE_SESSION_COOKIE_NAME];
			if (typeof session === "string" && session.trim()) return true;
		}
	} catch {}
	return document.cookie.includes(`${CONSOLE_SESSION_COOKIE_NAME}=`);
}
function registerConsoleAccountGet(fn) {
	rawConsoleAccountGet = fn;
}
function isConsoleMfaRequiredError(error) {
	return error instanceof AppwriteException && error.type === "user_more_factors_required";
}
function shouldCacheConsoleAccountUnauthenticatedError(error) {
	if (!isHttpUnauthorizedError(error)) return false;
	return !isConsoleMfaRequiredError(error);
}
async function fetchConsoleAccount(revisionOrOptions) {
	if (!rawConsoleAccountGet) throw new Error("Console account getter is not registered");
	let revision = getConsoleAccountQueryRevision();
	let force = false;
	if (typeof revisionOrOptions === "number") revision = revisionOrOptions;
	else if (revisionOrOptions) {
		revision = revisionOrOptions.revision ?? revision;
		force = revisionOrOptions.force ?? false;
	}
	if (!force) {
		const cached = getConsoleAccountSync(revision);
		if (cached) return cached;
		const cachedUnauthenticated = getConsoleAccountUnauthenticatedError(revision);
		if (cachedUnauthenticated && !hasLikelyConsoleSession()) throw cachedUnauthenticated;
	} else clearConsoleAccountCache(revision);
	const existing = getConsoleAccountInflight(revision);
	if (existing) return existing;
	const promise = rawConsoleAccountGet().then((account) => {
		setConsoleAccountCache(account, revision);
		clearConsoleAccountUnauthenticatedError(revision);
		return account;
	}).catch((error) => {
		if (shouldCacheConsoleAccountUnauthenticatedError(error)) setConsoleAccountUnauthenticatedError(revision, error);
		throw error;
	}).finally(() => {
		clearConsoleAccountInflight(revision, promise);
	});
	setConsoleAccountInflight(revision, promise);
	return promise;
}
function getConsoleAccountFromSingleton(revision = getConsoleAccountQueryRevision()) {
	return getConsoleAccountSync(revision);
}
var SECRET = getRuntimeConfig().fingerprintKey;
var CACHE_TTL_MS = 3600 * 1e3;
var GLOBAL_SERVER_TIME_KEY = "__vibesFingerprintServerTime__";
function getFingerprintServerTimeGlobal() {
	const g = globalThis;
	if (!g[GLOBAL_SERVER_TIME_KEY]) g[GLOBAL_SERVER_TIME_KEY] = {
		cache: null,
		inflight: /* @__PURE__ */ new Map()
	};
	return g[GLOBAL_SERVER_TIME_KEY];
}
function serverTimeSyncKey(endpoint$1, projectId) {
	return `${endpoint$1.replace(/\/$/, "")}|${projectId}`;
}
function syncServerTime(serverTimeSecs) {
	const state = getFingerprintServerTimeGlobal();
	if (state.cache) return;
	state.cache = {
		serverSecs: serverTimeSecs,
		fetchedAtMs: Date.now()
	};
}
function resetFingerprintServerTimeCache() {
	const state = getFingerprintServerTimeGlobal();
	state.cache = null;
	state.inflight.clear();
}
function getServerTimestamp() {
	const serverTimeCache = getFingerprintServerTimeGlobal().cache;
	if (!serverTimeCache) return Math.floor(Date.now() / 1e3);
	const elapsedSecs = Math.floor((Date.now() - serverTimeCache.fetchedAtMs) / 1e3);
	return serverTimeCache.serverSecs + elapsedSecs;
}
function ensureFingerprintServerTimeSynced(endpoint$1, projectId) {
	const state = getFingerprintServerTimeGlobal();
	if (state.cache) return Promise.resolve();
	if (!endpoint$1?.trim() || !projectId?.trim()) return Promise.resolve();
	const key = serverTimeSyncKey(endpoint$1, projectId);
	const existing = state.inflight.get(key);
	if (existing) return existing;
	const url = `${endpoint$1.replace(/\/$/, "")}/health/version`;
	const promise = fetch(url, { headers: { "X-Appwrite-Project": projectId } }).then((response) => {
		const dateHeader = response.headers.get("Date");
		const parsed = dateHeader ? new Date(dateHeader).getTime() : NaN;
		if (Number.isFinite(parsed)) syncServerTime(Math.floor(parsed / 1e3));
	}).catch(() => {}).finally(() => {
		const globalState = getFingerprintServerTimeGlobal();
		if (globalState.inflight.get(key) === promise) globalState.inflight.delete(key);
	});
	state.inflight.set(key, promise);
	return promise;
}
async function sha256(message) {
	if (!crypto?.subtle) {
		console.warn("crypto.subtle unavailable, fingerprinting disabled");
		return "";
	}
	const msgBuffer = new TextEncoder().encode(message);
	const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
	return Array.from(new Uint8Array(hashBuffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
}
async function hmacSha256(message, secret) {
	if (!crypto?.subtle) return "";
	const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), {
		name: "HMAC",
		hash: "SHA-256"
	}, false, ["sign"]);
	const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(message));
	return Array.from(new Uint8Array(sig)).map((b) => b.toString(16).padStart(2, "0")).join("");
}
function getCanvasFingerprint() {
	try {
		const canvas = document.createElement("canvas");
		const ctx = canvas.getContext("2d");
		if (!ctx) return "";
		canvas.width = 200;
		canvas.height = 50;
		ctx.textBaseline = "top";
		ctx.font = "14px Arial";
		ctx.fillStyle = "#f60";
		ctx.fillRect(125, 1, 62, 20);
		ctx.fillStyle = "#069";
		ctx.fillText("Appwrite Console", 2, 15);
		ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
		ctx.fillText("Appwrite Console", 4, 17);
		return canvas.toDataURL();
	} catch {
		return "";
	}
}
function getWebGLFingerprint() {
	try {
		const canvas = document.createElement("canvas");
		const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
		if (!gl) return "";
		const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
		if (!debugInfo) return "webgl-no-debug";
		return `${gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) || ""}~${gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || ""}`;
	} catch {
		return "";
	}
}
async function getAudioFingerprint() {
	try {
		const OfflineCtx = window.OfflineAudioContext || window.webkitOfflineAudioContext;
		if (!OfflineCtx) return "";
		const context = new OfflineCtx(1, 4096, 44100);
		const oscillator = context.createOscillator();
		oscillator.type = "triangle";
		oscillator.frequency.value = 1e4;
		const compressor = context.createDynamicsCompressor();
		compressor.threshold.value = -50;
		compressor.knee.value = 40;
		compressor.ratio.value = 12;
		compressor.attack.value = 0;
		compressor.release.value = .25;
		oscillator.connect(compressor);
		compressor.connect(context.destination);
		oscillator.start(0);
		const samples = (await context.startRendering()).getChannelData(0);
		let sum = 0;
		for (let i = 0; i < samples.length; i++) sum += Math.abs(samples[i]);
		return sum.toString();
	} catch {
		return "";
	}
}
var cache = null;
var cachePromise = null;
async function collectStaticSignals() {
	const [canvasRaw, webgl, audio] = await Promise.all([
		Promise.resolve(getCanvasFingerprint()),
		Promise.resolve(getWebGLFingerprint()),
		getAudioFingerprint()
	]);
	const canvas = canvasRaw ? await sha256(canvasRaw) : "";
	return {
		userAgent: navigator.userAgent,
		language: navigator.language,
		languages: [...navigator.languages || []],
		platform: navigator.platform,
		hardwareConcurrency: navigator.hardwareConcurrency || 0,
		deviceMemory: navigator.deviceMemory,
		maxTouchPoints: navigator.maxTouchPoints || 0,
		screenWidth: screen.width,
		screenHeight: screen.height,
		screenColorDepth: screen.colorDepth,
		screenPixelDepth: screen.pixelDepth,
		devicePixelRatio: window.devicePixelRatio || 1,
		timezoneOffset: (/* @__PURE__ */ new Date()).getTimezoneOffset(),
		timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
		canvas,
		webgl,
		audio
	};
}
async function getCachedSignals() {
	const now = Date.now();
	if (cache && now - cache.collectedAt < CACHE_TTL_MS) return cache.signals;
	if (cachePromise) return cachePromise;
	cachePromise = collectStaticSignals();
	try {
		const signals = await cachePromise;
		cache = {
			signals,
			collectedAt: now
		};
		return signals;
	} finally {
		cachePromise = null;
	}
}
async function generateFingerprintToken() {
	const signals = {
		...await getCachedSignals(),
		timestamp: getServerTimestamp()
	};
	const payload = JSON.stringify(signals);
	const bytes = new TextEncoder().encode(payload);
	let binary = "";
	for (const byte of bytes) binary += String.fromCharCode(byte);
	const encoded = btoa(binary);
	if (!SECRET) return encoded;
	return `${encoded}.${await hmacSha256(encoded, SECRET)}`;
}
function isMultiRegionSupported(url) {
	const host = url.hostname.toLowerCase();
	return host === "cloud.appwrite.io" || host.endsWith(".cloud.appwrite.io") || host === "cloud.staging.appwrite.io" || host.endsWith(".cloud.staging.appwrite.io");
}
function getApiEndpoint(region) {
	let baseEndpoint;
	if (typeof window !== "undefined") {
		const debugBase = getDebugEndpointBaseUrl();
		if (debugBase) baseEndpoint = debugBase;
		else {
			const config = getRuntimeConfig();
			baseEndpoint = config.appwriteEndpoint || resolveAppwriteEndpointFallback(config.consoleProfile, window.location);
		}
	} else {
		const config = getRuntimeConfig();
		baseEndpoint = config.appwriteEndpoint || (typeof window !== "undefined" ? resolveAppwriteEndpointFallback(config.consoleProfile, window.location) : resolveAppwriteEndpointFallback(config.consoleProfile));
	}
	if (!baseEndpoint) throw new Error("VITE_APPWRITE_ENDPOINT is not configured");
	let url;
	try {
		url = new URL(baseEndpoint);
	} catch {
		throw new Error("VITE_APPWRITE_ENDPOINT is not a valid URL");
	}
	const protocol = url.protocol;
	const hostname = url.hostname;
	const hostWithPort = url.port ? `${hostname}:${url.port}` : hostname;
	return `${protocol}//${region && region.trim().toLowerCase() !== "unknown" && isMultiRegionSupported(url) ? `${region.trim().toLowerCase().replace(/\s+/g, "")}.` : ""}${hostWithPort}/v1`;
}
function formatApiEndpointDisplay(endpoint$1) {
	if (!endpoint$1) return "";
	try {
		const url = new URL(endpoint$1);
		const pathname = url.pathname || "/v1";
		return `${url.host}${pathname}`;
	} catch {
		const match = endpoint$1.match(/https?:\/\/([^/]+)(\/.*)?/);
		if (match) return `${match[1]}${match[2] || "/v1"}`;
		return endpoint$1.replace(/^https?:\/\//, "");
	}
}
function getBaseEndpoint() {
	return getApiEndpoint();
}
var projectRegions = /* @__PURE__ */ new Map();
function setProjectRegion(projectId, region) {
	if (region && region.trim().toLowerCase() !== "unknown") projectRegions.set(projectId, region.trim().toLowerCase().replace(/\s+/g, ""));
}
function getProjectRegion(projectId) {
	return projectRegions.get(projectId);
}
function getProjectApiEndpoint(projectId) {
	return getApiEndpoint(projectRegions.get(projectId));
}
function wrapConsoleAccountGet(sdkRaw) {
	sdkRaw.account.get = (() => fetchConsoleAccount());
	return sdkRaw;
}
function createConsoleSdkRaw(client) {
	return {
		client,
		account: new Account(client),
		affiliates: new Affiliates(client),
		apps: new Apps(client),
		oauth2: new Oauth2(client),
		avatars: new Avatars(client),
		postgresql: new Postgresql(client),
		mysql: new Mysql(client),
		mongo: new Mongo(client),
		functions: new Functions(client),
		locale: new Locale(client),
		manager: new Manager(client),
		projects: new Projects(client),
		teams: new Teams(client),
		users: new Users(client),
		migrations: new Migrations(client),
		console: new Console(client),
		agent: new Agent(client),
		assistant: new Assistant(client),
		sites: new Sites(client),
		domains: new Domains(client),
		storage: new Storage(client),
		organization(organizationId) {
			const id = String(organizationId ?? "").trim();
			if (!id) throw new Error("Organization ID is required");
			const organizationClient = new Client();
			installSetProjectWithHeader(organizationClient);
			organizationClient.setEndpoint(client.config.endpoint);
			if (client.config.project) organizationClient.setProject(client.config.project);
			if (client.config.locale) organizationClient.setLocale(client.config.locale);
			Object.assign(organizationClient.headers, client.getHeaders(), { "X-Appwrite-Organization": id });
			return new Organization(organizationClient);
		},
		organizations: new Organizations(client),
		presences: new Presences(client),
		usage: new Usage(client),
		webhooks: new Webhooks(client),
		notifications: new Notifications(client)
	};
}
var endpoint = getApiEndpoint();
var clientConsole = new Client();
var clientProject = new Client();
function installSetProjectWithHeader(client) {
	const originalSetProject = client.setProject.bind(client);
	client.setProject = ((value) => {
		const projectId = String(value ?? "");
		client.headers["X-Appwrite-Project"] = projectId;
		return originalSetProject(projectId);
	});
}
installSetProjectWithHeader(clientConsole);
installSetProjectWithHeader(clientProject);
clientConsole.setEndpoint(endpoint).setProject("console");
clientProject.setEndpoint(endpoint).setMode("admin");
clientConsole.setLocale(getActiveLanguage());
clientProject.setLocale(getActiveLanguage());
if (typeof window !== "undefined") subscribeToDebugOverrides(() => {
	const language = getActiveLanguage();
	if (clientConsole.config.locale !== language) {
		clientConsole.setLocale(language);
		clientProject.setLocale(language);
	}
});
function scheduleConsoleFingerprintServerTimeSync() {
	if (typeof window === "undefined") return Promise.resolve();
	const ep = clientConsole.config.endpoint;
	const proj = clientConsole.config.project;
	if (!ep?.trim() || !proj?.trim()) return Promise.resolve();
	return ensureFingerprintServerTimeSynced(ep, proj);
}
if (typeof window !== "undefined") {
	subscribeToDebugEndpointChange(() => {
		const base = getApiEndpoint();
		clientConsole.setEndpoint(base);
		clientProject.setEndpoint(base);
		resetFingerprintServerTimeCache();
		scheduleConsoleFingerprintServerTimeSync();
	});
	scheduleConsoleFingerprintServerTimeSync();
}
var realtimeConsole = new Realtime(clientConsole);
var realtimeProject = new Realtime(clientProject);
var IMPERSONATION_HEADER_KEYS = [
	"X-Appwrite-Impersonate-User-Id",
	"X-Appwrite-Impersonate-User-Email",
	"X-Appwrite-Impersonate-User-Phone"
];
function clearImpersonationHeaders(client) {
	for (const key of IMPERSONATION_HEADER_KEYS) delete client.headers[key];
	const cfg = client.config;
	cfg.impersonateuserid = "";
	cfg.impersonateuseremail = "";
	cfg.impersonateuserphone = "";
}
function applyImpersonateUserIdToClient(client, userId) {
	const id = userId.trim();
	if (!id) return;
	const c = client;
	if (typeof c.setImpersonateUserId === "function") {
		c.setImpersonateUserId(id);
		return;
	}
	c.headers["X-Appwrite-Impersonate-User-Id"] = id;
	const cfg = c.config;
	cfg.impersonateuserid = id;
}
function applyConsoleImpersonateUserId(targetUserId) {
	const id = String(targetUserId ?? "").trim();
	if (!id) return;
	for (const client of [clientConsole, clientProject]) {
		clearImpersonationHeaders(client);
		applyImpersonateUserIdToClient(client, id);
	}
}
function clearConsoleImpersonateUser() {
	for (const client of [clientConsole, clientProject]) clearImpersonationHeaders(client);
}
var CONSOLE_SDK_PROJECT_ID = "console";
function clearConsoleSessionLocally() {
	if (typeof window === "undefined") return;
	clearConsoleImpersonateUser();
	clearConsoleImpersonationSession();
	clearConsoleAccountCache();
	try {
		window.localStorage.removeItem("cookieFallback");
	} catch {}
	const resetAuthOnClient = (client) => {
		client.config.jwt = "";
		client.config.key = "";
		const cfg = client.config;
		cfg.session = "";
		cfg.cookie = "";
		try {
			client.setCookie("");
		} catch {}
	};
	resetAuthOnClient(clientConsole);
	resetAuthOnClient(clientProject);
	const cookieName = `a_session_${CONSOLE_SDK_PROJECT_ID}`;
	const expired = "Thu, 01 Jan 1970 00:00:00 GMT";
	const host = window.location.hostname;
	const expire = (domain) => {
		const d = domain ? `; domain=${domain}` : "";
		document.cookie = `${cookieName}=; expires=${expired}; path=/${d}`;
	};
	expire();
	if (host) {
		expire(host);
		const parts = host.split(".");
		if (parts.length > 1) expire(`.${parts.slice(-2).join(".")}`);
	}
}
function restoreConsoleImpersonationFromSession() {
	try {
		const id = sessionStorage.getItem(CONSOLE_IMPERSONATION_TARGET_KEY)?.trim();
		if (id) applyConsoleImpersonateUserId(id);
	} catch {}
}
if (typeof window !== "undefined") restoreConsoleImpersonationFromSession();
function getSiteScreenshotFilePreviewUrl(projectId, params) {
	const c = new Client();
	Object.assign(c.config, clientConsole.config);
	Object.assign(c.headers, clientConsole.headers);
	c.setEndpoint(getProjectApiEndpoint(projectId)).setProject("console");
	return new Storage(c).getFilePreview(params);
}
function createRegionalConsoleRealtime(projectId) {
	const c = new Client();
	Object.assign(c.config, clientConsole.config);
	Object.assign(c.headers, clientConsole.headers);
	c.setEndpoint(getProjectApiEndpoint(projectId)).setProject("console");
	return new Realtime(c);
}
var tablesDBForProject = new TablesDB(clientProject);
var documentsDBForProject = new DocumentsDB(clientProject);
var vectorsDBForProject = new VectorsDB(clientProject);
function installProductDatabaseUpdateSpecificationSupport(service, pathPrefix) {
	const originalUpdate = service.update.bind(service);
	service.update = ((paramsOrFirst, ...rest) => {
		const params = paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst) ? paramsOrFirst : {
			databaseId: paramsOrFirst,
			name: rest[0],
			enabled: rest[1],
			replicas: rest[2]
		};
		const specification = typeof params.specification === "string" ? params.specification.trim() : void 0;
		if (!specification) return originalUpdate(paramsOrFirst, ...rest);
		const databaseId = params.databaseId;
		if (typeof databaseId === "undefined") return originalUpdate(paramsOrFirst, ...rest);
		const payload = { specification };
		if (typeof params.name !== "undefined") payload.name = params.name;
		if (typeof params.enabled !== "undefined") payload.enabled = params.enabled;
		if (typeof params.replicas !== "undefined") payload.replicas = params.replicas;
		const uri = new URL(`${service.client.config.endpoint}/${pathPrefix}/${encodeURIComponent(String(databaseId))}`);
		return service.client.call("put", uri, {
			"X-Appwrite-Project": service.client.config.project,
			"content-type": "application/json",
			accept: "application/json"
		}, payload);
	});
}
installProductDatabaseUpdateSpecificationSupport(tablesDBForProject, "tablesdb");
installProductDatabaseUpdateSpecificationSupport(documentsDBForProject, "documentsdb");
installProductDatabaseUpdateSpecificationSupport(vectorsDBForProject, "vectorsdb");
var sdkForProject = wrapServiceObject({
	client: clientProject,
	account: new Account(clientProject),
	activities: new Activities(clientProject),
	apps: new Apps(clientProject),
	avatars: new Avatars(clientProject),
	backups: new Backups(clientProject),
	postgresql: new Postgresql(clientProject),
	mysql: new Mysql(clientProject),
	mongo: new Mongo(clientProject),
	functions: new Functions(clientProject),
	locale: new Locale(clientProject),
	messaging: new Messaging(clientProject),
	project: new Project(clientProject),
	projectApi: new Project(clientProject),
	storage: new Storage(clientProject),
	tokens: new Tokens(clientProject),
	teams: new Teams(clientProject),
	users: new Users(clientProject),
	vcs: new Vcs(clientProject),
	proxy: new Proxy$1(clientProject),
	migrations: new Migrations(clientProject),
	sites: new Sites(clientProject),
	tablesDB: tablesDBForProject,
	documentsDB: documentsDBForProject,
	vectorsDB: vectorsDBForProject,
	waf: new Waf(clientProject),
	console: new Console(clientProject),
	usage: new Usage(clientProject),
	webhooks: new Webhooks(clientProject)
}, "forProject");
var consoleSdkRawBase = createConsoleSdkRaw(clientConsole);
registerConsoleAccountGet(consoleSdkRawBase.account.get.bind(consoleSdkRawBase.account));
const sdk = {
	forConsole: wrapServiceObject(wrapConsoleAccountGet(consoleSdkRawBase), "forConsole"),
	forConsoleIn(region) {
		const regionEndpoint = getApiEndpoint(region);
		const regionClient = new Client();
		regionClient.setEndpoint(regionEndpoint).setProject("console").setLocale(getActiveLanguage());
		return wrapServiceObject(wrapConsoleAccountGet(createConsoleSdkRaw(regionClient)), "forConsoleIn");
	},
	forProject(projectId, region) {
		const projectEndpoint = getApiEndpoint(region ?? projectRegions.get(projectId));
		if (projectEndpoint !== clientProject.config.endpoint) clientProject.setEndpoint(projectEndpoint);
		if (projectId !== clientProject.config.project) clientProject.setProject(projectId);
		return sdkForProject;
	},
	getConsoleRealtime() {
		return realtimeConsole;
	},
	getProjectRealtime() {
		return realtimeProject;
	}
};
export { initSentryClient as A, STALE_CHUNK_BOOT_SCRIPT as B, isConsoleImpersonationActive as C, getConsoleAccountSync as D, clearConsoleAccountCache as E, getUploadItem as F, canTrackAnalytics as G, isStaleChunkLoadError as H, getUploadItems as I, setCookieConsentState as K, isIndexedDBMutationError as L, shouldSkipSentryError as M, clearOldUploads as N, getConsoleAccountUnauthenticatedError as O, deleteUploadItem as P, isUploadPersistenceAvailable as R, hasConsoleImpersonationSessionTarget as S, readConsoleImpersonationOperatorSnapshot as T, scheduleClearStaleChunkReloadGuard as U, forceReloadForStaleChunk as V, tryReloadForStaleChunk as W, hasLikelyConsoleSession as _, formatApiEndpointDisplay as a, getConsoleAccountQueryRevision as b, getProjectApiEndpoint as c, sdk as d, setProjectRegion as f, getConsoleAccountFromSingleton as g, fetchConsoleAccount as h, createRegionalConsoleRealtime as i, sendSentryDebugTestError as j, setConsoleAccountCache as k, getProjectRegion as l, generateFingerprintToken as m, clearConsoleImpersonateUser as n, getApiEndpoint as o, ensureFingerprintServerTimeSynced as p, subscribeCookieConsent as q, clearConsoleSessionLocally as r, getBaseEndpoint as s, applyConsoleImpersonateUserId as t, getSiteScreenshotFilePreviewUrl as u, CONSOLE_IMPERSONATION_CHANGED_EVENT as v, persistConsoleImpersonationSession as w, hardNavigateToAccountAfterImpersonation as x, clearConsoleImpersonationSession as y, saveUploadItem as z };
