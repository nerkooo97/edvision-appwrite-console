import { t as cn } from "./utils-DoqqkI3X.js";
import { c as getProjectApiEndpoint, d as sdk, g as getConsoleAccountFromSingleton, h as fetchConsoleAccount, l as getProjectRegion, o as getApiEndpoint, s as getBaseEndpoint } from "./sdk-DjIJ_hjn.js";
import { h as getUserOsLabel } from "./i18n-Db4baE06.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { Pt as useOrganizationScopes } from "./organizations-BKtnlNrj.js";
import { $a as formatCliTerminalPrompt, Ai as serializeCliShellSessionsState, B as useCliShellHeight, Er as clampCliShellHeightPx, Ft as MAX_CLI_SHELL_SESSION_NAME_LENGTH, G as useConnectProjectTab, Ga as CLI_PROJECT_CWD, H as useCliShellOpen, Ja as CLI_SHELL_TRY_COMMANDS, Pt as MAX_CLI_SHELL_SESSIONS, Qa as createTerminalOutputLinkifier, U as useCliShellSessionsPrefs, Ua as BROWSER_PROXY_SESSION_COOKIE, V as useCliShellHistory, Wa as CLI_BOOTSTRAP_READY_MESSAGE, Xa as CLI_TERMINAL_MUTED, Xr as parseCliShellSessions, Ya as createCliShellWelcomeLines, Za as CLI_TERMINAL_RESET, eo as resolveCliTerminalProjectLabel, io as writeCliTerminalRaw, no as writeCliShellLine, qa as CLI_SHELL_COLLAPSE_MS, ro as writeCliShellSuggestions, so as getBlockedCliCommandMessage, to as resolveCliTerminalUsername } from "./auth-BPuxYQAc.js";
import { A as useCreateApiKey, R as useProject } from "./projects-BaTJenfQ.js";
import { o as getAnalyticsArea } from "./plausible-proxy-Dv8rZ-v1.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { n as TabsContent, t as Tabs } from "./tabs-XaWkg9jR.js";
import { a as SelectLabel, c as SelectValue, i as SelectItem, n as SelectContent, r as SelectGroup, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { n as analyticsAttrs, t as ANALYTICS_ACTIONS } from "./analytics-actions-FGYQVzYg.js";
import { t as CodeBlock } from "./CodeBlock-BGAzMP_K.js";
import { r as useAuth } from "./RequireAuth-DahioVQe.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, t as Dialog } from "./dialog-CFWmsJbI.js";
import { t as PUBLIC_ICON_MUTED_CLASSES } from "./public-icon-classes-CaQtbn94.js";
import { t as useKeyboardShortcut } from "./use-keyboard-shortcuts-C2m0wYFf.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { t as PlatformIcon } from "./Icon-BtIL187e.js";
import { t as FrameworkIcon } from "./FrameworkIcon-DTkSe6r3.js";
import { t as MCPSection } from "./MCPSection-k-iSVVVO.js";
import { t as ConnectCodeExample } from "./ConnectCodeExample-Ujo3XkoF.js";
import { t as ApiKeyDrawer } from "./ApiKeyDrawer-C9r-i_O0.js";
import { t as useUserOs } from "./use-user-os-Cwg5asTC.js";
import { B as canShowProjectTerminal, u as canCreateKey } from "./console-access-checks-BTMEOKcL.js";
import { t as PostgresCopyableField } from "./PostgresCopyableField-eNLUNLhf.js";
import { t as TerraformIcon } from "./TerraformIcon-DDZR7KCM.js";
import { s as getVcsProvider } from "./providers-8aVvAoJZ.js";
import { a as APPWRITE_AGENT_SKILLS_REPO, i as APPWRITE_AGENT_SKILLS_INSTALL } from "./agent-discovery-SMCX1bvP.js";
import { a as getAnalyticsRouteUrl, c as trackEvent, i as getAnalyticsRoutePath } from "./analytics-C_KnVoso.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useLocation, useMatches, useNavigate } from "@tanstack/react-router";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Check, Copy, ExternalLink, Key, Package, Plus, Terminal } from "lucide-react";
var CONSOLE_SESSION_KEY = "a_session_console";
function formatCliCookieValue(sessionSecret) {
	const trimmed = sessionSecret.trim();
	if (!trimmed) return trimmed;
	if (trimmed.startsWith(`${CONSOLE_SESSION_KEY}=`)) return trimmed.split(";")[0]?.trim() ?? trimmed;
	return `${CONSOLE_SESSION_KEY}=${trimmed}`;
}
function readCookieFallbackSecret() {
	if (typeof window === "undefined") return null;
	try {
		const cookieFallback = window.localStorage.getItem("cookieFallback");
		if (!cookieFallback) return null;
		const session = JSON.parse(cookieFallback)[CONSOLE_SESSION_KEY];
		if (typeof session === "string" && session.trim()) return session.trim();
	} catch {}
	return null;
}
function getSdkConsoleSessionMaterial() {
	try {
		const config = sdk.forConsole.client.config;
		if (typeof config.cookie === "string" && config.cookie.trim()) return config.cookie.trim();
		if (typeof config.session === "string" && config.session.trim()) return config.session.trim();
	} catch {}
	return null;
}
function getConsoleSessionCookie() {
	const fallback = readCookieFallbackSecret();
	if (fallback) return fallback;
	if (typeof window === "undefined") return null;
	const match = document.cookie.match(/* @__PURE__ */ new RegExp(`${CONSOLE_SESSION_KEY}=([^;]+)`));
	if (match?.[1]) try {
		return decodeURIComponent(match[1]).trim();
	} catch {
		return match[1].trim();
	}
	const sdkMaterial = getSdkConsoleSessionMaterial();
	if (sdkMaterial) {
		if (sdkMaterial.startsWith(`${CONSOLE_SESSION_KEY}=`)) {
			const [, secret = ""] = sdkMaterial.split("=", 2);
			return secret.split(";")[0]?.trim() || null;
		}
		return sdkMaterial;
	}
	return null;
}
function getConsoleCliCookie() {
	const session = getConsoleSessionCookie();
	if (!session) return null;
	return formatCliCookieValue(session);
}
async function resolveConsoleCliAuth() {
	const syncCookie = getConsoleCliCookie();
	if (syncCookie) return {
		sessionCookie: syncCookie,
		mode: "cookie"
	};
	return {
		sessionCookie: BROWSER_PROXY_SESSION_COOKIE,
		mode: "browser-proxy"
	};
}
function buildCliPrefsJson(options) {
	const sessionId = options.sessionId ?? `console-web-${Date.now()}`;
	return JSON.stringify({
		current: sessionId,
		[sessionId]: {
			endpoint: options.consoleEndpoint || getBaseEndpoint(),
			email: options.email,
			cookie: formatCliCookieValue(options.sessionCookie)
		}
	}, null, 2);
}
function buildAppwriteConfigJson(options) {
	const organizationId = options.organizationId?.trim();
	return JSON.stringify({
		projectId: options.projectId,
		...organizationId ? { organizationId } : {},
		endpoint: options.endpoint,
		functions: [],
		sites: [],
		tablesDB: [],
		tables: [],
		buckets: [],
		teams: [],
		topics: []
	}, null, 2);
}
var VfsError = class extends Error {
	constructor(code, message) {
		super(message);
		this.code = code;
		this.name = "VfsError";
	}
};
var encoder = new TextEncoder();
var decoder$1 = new TextDecoder();
function normalizePath$1(input) {
	const absolute = input.startsWith("/") ? input : `/${input}`;
	const segments = [];
	for (const segment of absolute.split("/")) {
		if (!segment || segment === ".") continue;
		if (segment === "..") {
			segments.pop();
			continue;
		}
		segments.push(segment);
	}
	return `/${segments.join("/")}`;
}
function dirname(path) {
	const normalized = normalizePath$1(path);
	const index = normalized.lastIndexOf("/");
	return index <= 0 ? "/" : normalized.slice(0, index);
}
function toBase64(bytes) {
	let binary = "";
	for (let index = 0; index < bytes.length; index++) binary += String.fromCharCode(bytes[index]);
	return btoa(binary);
}
function fromBase64(value) {
	const binary = atob(value);
	const bytes = new Uint8Array(binary.length);
	for (let index = 0; index < binary.length; index++) bytes[index] = binary.charCodeAt(index);
	return bytes;
}
var Vfs = class {
	nodes = /* @__PURE__ */ new Map();
	constructor() {
		this.nodes.set("/", {
			type: "directory",
			mtimeMs: Date.now()
		});
	}
	node(path) {
		return this.nodes.get(normalizePath$1(path));
	}
	requireNode(path) {
		const found = this.node(path);
		if (!found) throw new VfsError("ENOENT", `no such file or directory: ${path}`);
		return found;
	}
	existsSync(path) {
		return this.nodes.has(normalizePath$1(path));
	}
	statSync(path) {
		const node = this.requireNode(path);
		const isDirectory = node.type === "directory";
		return {
			isFile: () => !isDirectory,
			isDirectory: () => isDirectory,
			size: isDirectory ? 0 : node.data.length,
			mtimeMs: node.mtimeMs,
			mode: isDirectory ? 16877 : 33188
		};
	}
	mkdirSync(path, options) {
		const normalized = normalizePath$1(path);
		if (normalized === "/") return;
		const existing = this.nodes.get(normalized);
		if (existing) {
			if (existing.type === "directory") {
				if (options?.recursive) return;
				throw new VfsError("EEXIST", `file already exists: ${path}`);
			}
			throw new VfsError("ENOTDIR", `not a directory: ${path}`);
		}
		const parent = dirname(normalized);
		if (!this.nodes.has(parent)) {
			if (!options?.recursive) throw new VfsError("ENOENT", `no such file or directory: ${parent}`);
			this.mkdirSync(parent, options);
		}
		this.nodes.set(normalized, {
			type: "directory",
			mtimeMs: Date.now()
		});
	}
	readFileSync(path, encoding) {
		const node = this.requireNode(path);
		if (node.type === "directory") throw new VfsError("EISDIR", `is a directory: ${path}`);
		return encoding === "utf8" ? decoder$1.decode(node.data) : node.data;
	}
	writeFileSync(path, data) {
		const normalized = normalizePath$1(path);
		const parent = dirname(normalized);
		if (!this.nodes.has(parent)) throw new VfsError("ENOENT", `no such file or directory: ${parent}`);
		if (this.nodes.get(normalized)?.type === "directory") throw new VfsError("EISDIR", `is a directory: ${path}`);
		this.nodes.set(normalized, {
			type: "file",
			data: typeof data === "string" ? encoder.encode(data) : data,
			mtimeMs: Date.now()
		});
	}
	readdirSync(path) {
		if (this.requireNode(path).type !== "directory") throw new VfsError("ENOTDIR", `not a directory: ${path}`);
		const normalized = normalizePath$1(path);
		const prefix = normalized === "/" ? "/" : `${normalized}/`;
		const names = [];
		for (const candidate of this.nodes.keys()) {
			if (candidate === normalized || !candidate.startsWith(prefix)) continue;
			const remainder = candidate.slice(prefix.length);
			if (remainder.includes("/")) continue;
			names.push(remainder);
		}
		return names.sort();
	}
	unlinkSync(path) {
		if (this.requireNode(path).type === "directory") throw new VfsError("EISDIR", `is a directory: ${path}`);
		this.nodes.delete(normalizePath$1(path));
	}
	rmdirSync(path) {
		if (this.requireNode(path).type !== "directory") throw new VfsError("ENOTDIR", `not a directory: ${path}`);
		if (this.readdirSync(path).length > 0) throw new VfsError("ENOTEMPTY", `directory not empty: ${path}`);
		this.nodes.delete(normalizePath$1(path));
	}
	renameSync(from, to) {
		const source = normalizePath$1(from);
		const target = normalizePath$1(to);
		const node = this.requireNode(source);
		if (node.type === "directory") throw new VfsError("EISDIR", `cannot rename a directory: ${from}`);
		if (!this.nodes.has(dirname(target))) throw new VfsError("ENOENT", `no such file or directory: ${dirname(target)}`);
		this.nodes.delete(source);
		this.nodes.set(target, node);
	}
	truncateSync(path, length) {
		const node = this.requireNode(path);
		if (node.type === "directory") throw new VfsError("EISDIR", `is a directory: ${path}`);
		const resized = new Uint8Array(length);
		resized.set(node.data.subarray(0, Math.min(length, node.data.length)));
		node.data = resized;
		node.mtimeMs = Date.now();
	}
	setFileData(path, data) {
		const node = this.requireNode(path);
		if (node.type === "directory") throw new VfsError("EISDIR", `is a directory: ${path}`);
		node.data = data;
		node.mtimeMs = Date.now();
	}
	toSnapshot() {
		const files = [];
		for (const [path, node] of this.nodes) {
			if (node.type === "directory") {
				files.push({
					path,
					type: "directory"
				});
				continue;
			}
			files.push({
				path,
				type: "file",
				contents: toBase64(node.data)
			});
		}
		return { files };
	}
	toSnapshotOf(prefix) {
		const normalized = normalizePath$1(prefix);
		const scope = normalized === "/" ? "/" : `${normalized}/`;
		return { files: this.toSnapshot().files.filter((entry) => entry.path === normalized || entry.path.startsWith(scope)) };
	}
	applySnapshot(snapshot) {
		const ordered = [...snapshot.files].sort((left, right) => left.path.split("/").length - right.path.split("/").length);
		for (const entry of ordered) {
			if (entry.path === "/") continue;
			if (entry.type === "directory") {
				this.mkdirSync(entry.path, { recursive: true });
				continue;
			}
			this.mkdirSync(dirname(entry.path), { recursive: true });
			this.writeFileSync(entry.path, fromBase64(entry.contents));
		}
	}
};
var O_WRONLY = 1;
var O_RDWR = 2;
var O_CREAT = 64;
var O_EXCL = 128;
var O_TRUNC = 512;
var O_APPEND = 1024;
var O_DIRECTORY = 65536;
var decoder = new TextDecoder();
function fsError(code, message) {
	const error = new Error(message);
	error.code = code;
	return error;
}
function toFsError(error) {
	if (error instanceof VfsError) return fsError(error.code, error.message);
	return fsError("EIO", error instanceof Error ? error.message : String(error));
}
function statObject(vfs, path) {
	const stats = vfs.statSync(path);
	return {
		dev: 0,
		ino: 0,
		mode: stats.mode,
		nlink: 1,
		uid: 0,
		gid: 0,
		rdev: 0,
		size: stats.size,
		blksize: 4096,
		blocks: Math.ceil(stats.size / 512),
		atimeMs: stats.mtimeMs,
		mtimeMs: stats.mtimeMs,
		ctimeMs: stats.mtimeMs,
		birthtimeMs: stats.mtimeMs,
		isDirectory: () => stats.isDirectory(),
		isFile: () => stats.isFile(),
		isSymbolicLink: () => false
	};
}
function createFsBridge(options) {
	const { vfs } = options;
	let cwd = normalizePath$1(options.cwd);
	const open = /* @__PURE__ */ new Map();
	let nextDescriptor = 3;
	const writeStdio = (fd, buffer) => {
		const text = decoder.decode(buffer);
		if (fd === 2) options.onStderr(text);
		else options.onStdout(text);
		return buffer.length;
	};
	const writeSync = (fd, buffer) => {
		if (fd === 1 || fd === 2) return writeStdio(fd, buffer);
		const handle = open.get(fd);
		if (!handle) throw fsError("EBADF", `bad file descriptor: ${fd}`);
		const existing = vfs.readFileSync(handle.path);
		const at = handle.append ? existing.length : handle.cursor;
		const end = Math.max(existing.length, at + buffer.length);
		const merged = new Uint8Array(end);
		merged.set(existing);
		merged.set(buffer, at);
		vfs.setFileData(handle.path, merged);
		handle.cursor = at + buffer.length;
		return buffer.length;
	};
	const fs = {
		constants: {
			O_WRONLY,
			O_RDWR,
			O_CREAT,
			O_TRUNC,
			O_APPEND,
			O_EXCL,
			O_DIRECTORY
		},
		writeSync,
		write(fd, buffer, offset, length, position, callback) {
			try {
				const slice = buffer.subarray(offset, offset + length);
				if (position !== null && fd > 2) {
					const handle = open.get(fd);
					if (!handle) throw fsError("EBADF", `bad file descriptor: ${fd}`);
					handle.cursor = position;
				}
				callback(null, writeSync(fd, slice));
			} catch (error) {
				callback(toFsError(error));
			}
		},
		open(path, flags, _mode, callback) {
			try {
				const resolved = resolve(path);
				if (!vfs.existsSync(resolved)) {
					if (!(flags & O_CREAT)) throw fsError("ENOENT", `no such file or directory: ${path}`);
					if (!vfs.existsSync(dirname(resolved))) throw fsError("ENOENT", `no such file or directory: ${dirname(resolved)}`);
					vfs.writeFileSync(resolved, new Uint8Array(0));
				} else if (flags & O_EXCL && flags & O_CREAT) throw fsError("EEXIST", `file already exists: ${path}`);
				if (!vfs.statSync(resolved).isDirectory() && flags & O_TRUNC) vfs.setFileData(resolved, new Uint8Array(0));
				const descriptor = nextDescriptor++;
				open.set(descriptor, {
					path: resolved,
					cursor: 0,
					append: Boolean(flags & O_APPEND)
				});
				callback(null, descriptor);
			} catch (error) {
				callback(toFsError(error));
			}
		},
		close(fd, callback) {
			open.delete(fd);
			callback(null);
		},
		read(fd, buffer, offset, length, position, callback) {
			try {
				const handle = open.get(fd);
				if (!handle) throw fsError("EBADF", `bad file descriptor: ${fd}`);
				const data = vfs.readFileSync(handle.path);
				const at = position ?? handle.cursor;
				const slice = data.subarray(at, Math.min(at + length, data.length));
				buffer.set(slice, offset);
				if (position === null) handle.cursor = at + slice.length;
				callback(null, slice.length);
			} catch (error) {
				callback(toFsError(error));
			}
		},
		fstat(fd, callback) {
			try {
				const handle = open.get(fd);
				if (!handle) throw fsError("EBADF", `bad file descriptor: ${fd}`);
				callback(null, statObject(vfs, handle.path));
			} catch (error) {
				callback(toFsError(error));
			}
		},
		stat(path, callback) {
			try {
				callback(null, statObject(vfs, resolve(path)));
			} catch (error) {
				callback(toFsError(error));
			}
		},
		lstat(path, callback) {
			fs.stat(path, callback);
		},
		mkdir(path, _perm, callback) {
			try {
				vfs.mkdirSync(resolve(path));
				callback(null);
			} catch (error) {
				callback(toFsError(error));
			}
		},
		readdir(path, callback) {
			try {
				callback(null, vfs.readdirSync(resolve(path)));
			} catch (error) {
				callback(toFsError(error));
			}
		},
		unlink(path, callback) {
			try {
				vfs.unlinkSync(resolve(path));
				callback(null);
			} catch (error) {
				callback(toFsError(error));
			}
		},
		rmdir(path, callback) {
			try {
				vfs.rmdirSync(resolve(path));
				callback(null);
			} catch (error) {
				callback(toFsError(error));
			}
		},
		rename(from, to, callback) {
			try {
				vfs.renameSync(resolve(from), resolve(to));
				callback(null);
			} catch (error) {
				callback(toFsError(error));
			}
		},
		truncate(path, length, callback) {
			try {
				vfs.truncateSync(resolve(path), length);
				callback(null);
			} catch (error) {
				callback(toFsError(error));
			}
		},
		ftruncate(fd, length, callback) {
			try {
				const handle = open.get(fd);
				if (!handle) throw fsError("EBADF", `bad file descriptor: ${fd}`);
				vfs.truncateSync(handle.path, length);
				callback(null);
			} catch (error) {
				callback(toFsError(error));
			}
		},
		fsync(_fd, callback) {
			callback(null);
		},
		chmod(_path, _mode, callback) {
			callback(null);
		},
		fchmod(_fd, _mode, callback) {
			callback(null);
		},
		chown(_path, _uid, _gid, callback) {
			callback(null);
		},
		fchown(_fd, _uid, _gid, callback) {
			callback(null);
		},
		lchown(_path, _uid, _gid, callback) {
			callback(null);
		},
		utimes(_path, _atime, _mtime, callback) {
			callback(null);
		},
		link(_path, _link, callback) {
			callback(fsError("ENOSYS", "links are not supported"));
		},
		symlink(_path, _link, callback) {
			callback(fsError("ENOSYS", "symlinks are not supported"));
		},
		readlink(_path, callback) {
			callback(fsError("EINVAL", "not a symlink"));
		}
	};
	function resolve(path) {
		return path.startsWith("/") ? normalizePath$1(path) : normalizePath$1(`${cwd}/${path}`);
	}
	return {
		fs,
		process: {
			argv0: "browser",
			pid: 1,
			ppid: 0,
			getuid: () => -1,
			getgid: () => -1,
			geteuid: () => -1,
			getegid: () => -1,
			getgroups: () => [],
			umask: () => 18,
			cwd: () => cwd,
			chdir: (path) => {
				const target = resolve(path);
				if (!vfs.existsSync(target) || !vfs.statSync(target).isDirectory()) throw fsError("ENOENT", `no such directory: ${path}`);
				cwd = target;
			}
		},
		path: { resolve: (...segments) => {
			let result = cwd;
			for (const segment of segments) result = segment.startsWith("/") ? segment : `${result}/${segment}`;
			return normalizePath$1(result);
		} }
	};
}
var DB_NAME = "console-cli-wasm";
var STORE_NAME = "module";
var DB_VERSION = 1;
function openDatabase() {
	return new Promise((resolve, reject) => {
		if (typeof indexedDB === "undefined") {
			reject(/* @__PURE__ */ new Error("IndexedDB is unavailable"));
			return;
		}
		const request = indexedDB.open(DB_NAME, DB_VERSION);
		request.onupgradeneeded = () => {
			const database = request.result;
			if (!database.objectStoreNames.contains(STORE_NAME)) database.createObjectStore(STORE_NAME);
		};
		request.onsuccess = () => resolve(request.result);
		request.onerror = () => reject(request.error ?? /* @__PURE__ */ new Error("IndexedDB open failed"));
	});
}
function cacheKey(url) {
	return `wasm:${url}`;
}
async function readCachedModuleBytes(url) {
	try {
		const database = await openDatabase();
		return await new Promise((resolve) => {
			const request = database.transaction(STORE_NAME, "readonly").objectStore(STORE_NAME).get(cacheKey(url));
			request.onsuccess = () => {
				const value = request.result;
				resolve(value instanceof Uint8Array ? value : null);
			};
			request.onerror = () => resolve(null);
			request.transaction?.addEventListener("complete", () => database.close());
		});
	} catch {
		return null;
	}
}
async function writeCachedModuleBytes(url, bytes) {
	const database = await openDatabase();
	try {
		await new Promise((resolve, reject) => {
			const transaction = database.transaction(STORE_NAME, "readwrite");
			const store = transaction.objectStore(STORE_NAME);
			const keys = store.getAllKeys();
			keys.onsuccess = () => {
				for (const key of keys.result) if (key !== cacheKey(url)) store.delete(key);
				store.put(bytes, cacheKey(url));
			};
			transaction.oncomplete = () => resolve();
			transaction.onerror = () => reject(transaction.error ?? /* @__PURE__ */ new Error("IndexedDB write failed"));
			transaction.onabort = () => reject(transaction.error ?? /* @__PURE__ */ new Error("IndexedDB write aborted"));
		});
	} finally {
		database.close();
	}
}
async function clearCachedModules() {
	try {
		const database = await openDatabase();
		await new Promise((resolve) => {
			const transaction = database.transaction(STORE_NAME, "readwrite");
			transaction.objectStore(STORE_NAME).clear();
			transaction.oncomplete = () => resolve();
			transaction.onerror = () => resolve();
			transaction.onabort = () => resolve();
		});
		database.close();
	} catch {}
}
function splitCommand(input) {
	const argv = [];
	let current = "";
	let quote = null;
	let started = false;
	for (let index = 0; index < input.length; index++) {
		const character = input[index];
		if (character === "\\" && quote !== "'" && index + 1 < input.length) {
			current += input[++index];
			started = true;
			continue;
		}
		if (quote) {
			if (character === quote) {
				quote = null;
				continue;
			}
			current += character;
			continue;
		}
		if (character === "\"" || character === "'") {
			quote = character;
			started = true;
			continue;
		}
		if (/\s/.test(character)) {
			if (started) {
				argv.push(current);
				current = "";
				started = false;
			}
			continue;
		}
		current += character;
		started = true;
	}
	if (started) argv.push(current);
	return argv;
}
const CLI_WASM_VERSION = "27.1.0";
const CLI_WASM_HOME = "/home/appwrite";
const CLI_WASM_PREFS_DIR = `${CLI_WASM_HOME}/.appwrite`;
function clearPendingTimers(go) {
	for (const timer of go._scheduledTimeouts.values()) clearTimeout(timer);
	go._scheduledTimeouts.clear();
}
var modulePromise = null;
var gluePromise = null;
async function loadModule(url, onProgress) {
	if (modulePromise) return modulePromise;
	modulePromise = (async () => {
		const cached = await readCachedModuleBytes(url);
		if (cached) {
			onProgress?.(`Loaded cached Appwrite CLI ${CLI_WASM_VERSION}.`);
			return WebAssembly.compile(cached);
		}
		onProgress?.(`Downloading Appwrite CLI ${CLI_WASM_VERSION} (first run only)...`);
		const response = await fetch(url);
		if (!response.ok) throw new Error(`Failed to download the Appwrite CLI (${response.status}). Check your network connection and try again.`);
		const bytes = new Uint8Array(await response.arrayBuffer());
		const compiled = await WebAssembly.compile(bytes);
		writeCachedModuleBytes(url, bytes).catch(() => {});
		return compiled;
	})().catch((error) => {
		modulePromise = null;
		throw error;
	});
	return modulePromise;
}
async function loadGlue(url) {
	if (gluePromise) return gluePromise;
	gluePromise = (async () => {
		if (typeof document !== "undefined") {
			await new Promise((resolve, reject) => {
				const script = document.createElement("script");
				script.src = url;
				script.onload = () => resolve();
				script.onerror = () => reject(/* @__PURE__ */ new Error(`Failed to load the Appwrite CLI runtime: ${url}`));
				document.head.append(script);
			});
			return;
		}
		const response = await fetch(url);
		if (!response.ok) throw new Error(`Failed to load the Appwrite CLI runtime (${response.status}): ${url}`);
		new Function(await response.text())();
	})().catch((error) => {
		gluePromise = null;
		throw error;
	});
	return gluePromise;
}
function installGlobals(values) {
	const scope = globalThis;
	const previous = /* @__PURE__ */ new Map();
	for (const [key, value] of Object.entries(values)) {
		previous.set(key, {
			present: key in scope,
			value: scope[key]
		});
		scope[key] = value;
	}
	return { restore() {
		for (const [key, before] of previous) {
			if (before.present) {
				scope[key] = before.value;
				continue;
			}
			delete scope[key];
		}
	} };
}
async function createWasmCliContainer(options) {
	const vfs = new Vfs();
	const compiled = await loadModule(options.wasmUrl, options.onProgress);
	vfs.mkdirSync(options.cwd, { recursive: true });
	vfs.mkdirSync(`${CLI_WASM_HOME}/.appwrite`, { recursive: true });
	let queue = Promise.resolve();
	async function execute(command, runOptions = {}) {
		const argv = splitCommand(command);
		if (argv.length === 0) return {
			stdout: "",
			stderr: "",
			exitCode: 0
		};
		let stdout = "";
		let stderr = "";
		const bridge = createFsBridge({
			vfs,
			cwd: runOptions.cwd ?? options.cwd,
			onStdout: (chunk) => {
				stdout += chunk;
				runOptions.onStdout?.(chunk);
			},
			onStderr: (chunk) => {
				stderr += chunk;
				runOptions.onStderr?.(chunk);
			}
		});
		const globals = installGlobals({
			fs: bridge.fs,
			process: bridge.process,
			path: bridge.path
		});
		try {
			await loadGlue(options.wasmExecUrl);
			const Go = globalThis.Go;
			if (!Go) throw new Error("The Appwrite CLI runtime failed to load.");
			const go = new Go();
			go.argv = ["appwrite", ...argv];
			go.env = {
				HOME: CLI_WASM_HOME,
				TERM: "xterm-256color",
				...options.env
			};
			let exitCode = 0;
			go.exit = (code) => {
				exitCode = code;
			};
			const instance = await WebAssembly.instantiate(compiled, go.importObject);
			try {
				await go.run(instance);
			} finally {
				clearPendingTimers(go);
			}
			return {
				stdout,
				stderr,
				exitCode
			};
		} finally {
			globals.restore();
		}
	}
	return {
		vfs,
		run(command, runOptions) {
			const result = queue.then(() => execute(command, runOptions));
			queue = result.catch(() => void 0);
			return result;
		}
	};
}
var appwrite_default$34 = "/assets/appwrite-Db1o7hBk.wasm";
var wasm_exec_default = "/assets/wasm_exec-Bt7MFzxt.js";
const CLI_WASM_URL = appwrite_default$34;
const CLI_WASM_EXEC_URL = wasm_exec_default;
function writeProjectFiles(vfs, config) {
	vfs.mkdirSync(CLI_PROJECT_CWD, { recursive: true });
	vfs.mkdirSync(CLI_WASM_PREFS_DIR, { recursive: true });
	syncCliProjectConfig(vfs, config);
}
function syncCliProjectConfig(vfs, config) {
	vfs.mkdirSync(CLI_PROJECT_CWD, { recursive: true });
	vfs.writeFileSync(`${CLI_PROJECT_CWD}/appwrite.config.json`, buildAppwriteConfigJson({
		projectId: config.projectId,
		endpoint: config.projectEndpoint,
		organizationId: config.organizationId
	}));
}
function syncCliAuthFiles(vfs, config) {
	vfs.mkdirSync(CLI_WASM_PREFS_DIR, { recursive: true });
	vfs.writeFileSync(`${CLI_WASM_PREFS_DIR}/prefs.json`, buildCliPrefsJson({
		consoleEndpoint: config.consoleEndpoint,
		email: config.email,
		sessionCookie: config.auth.sessionCookie,
		sessionId: `console-${config.projectId}`
	}));
}
async function bootstrapCliRuntime(config, onProgress) {
	onProgress?.("Preparing Appwrite CLI...");
	const container = await createWasmCliContainer({
		cwd: CLI_PROJECT_CWD,
		wasmUrl: CLI_WASM_URL,
		wasmExecUrl: CLI_WASM_EXEC_URL,
		onProgress
	});
	writeProjectFiles(container.vfs, config);
	return container;
}
var originalFetch = null;
var activeEndpointPrefixes = [];
function resolveRequestUrl(input) {
	if (typeof input === "string") return input;
	if (input instanceof URL) return input.href;
	return input.url;
}
function isAppwriteApiRequest(url, endpointPrefixes) {
	try {
		const parsed = new URL(url);
		if (parsed.pathname.startsWith("/v1/")) return true;
		return endpointPrefixes.some((prefix) => {
			try {
				const endpointUrl = new URL(prefix);
				return parsed.origin === endpointUrl.origin;
			} catch {
				return url.startsWith(prefix);
			}
		});
	} catch {
		return endpointPrefixes.some((prefix) => url.startsWith(prefix));
	}
}
function isConsoleAccountGetRequest(url, method) {
	if ((method ?? "GET").toUpperCase() !== "GET") return false;
	try {
		const parsed = new URL(url);
		return parsed.pathname === "/v1/account" || parsed.pathname.endsWith("/v1/account");
	} catch {
		return /\/v1\/account\/?(?:\?|$)/.test(url);
	}
}
async function resolveBridgedConsoleAccountResponse() {
	const account = getConsoleAccountFromSingleton() ?? await fetchConsoleAccount();
	return new Response(JSON.stringify(account), {
		status: 200,
		headers: { "Content-Type": "application/json" }
	});
}
function buildBridgedHeaders(init) {
	const headers = new Headers(init?.headers);
	if ((headers.get("cookie") ?? headers.get("Cookie"))?.includes("__browser_session__")) {
		headers.delete("cookie");
		headers.delete("Cookie");
	}
	if (typeof window !== "undefined") try {
		const cookieFallback = window.localStorage.getItem("cookieFallback");
		if (cookieFallback && !headers.has("X-Fallback-Cookies")) headers.set("X-Fallback-Cookies", cookieFallback);
	} catch {}
	return headers;
}
function installCliFetchBridge(endpointPrefixes) {
	if (typeof window === "undefined") return;
	const normalized = endpointPrefixes.map((value) => value.trim()).filter(Boolean);
	if (normalized.length === 0) return;
	activeEndpointPrefixes = normalized;
	if (!originalFetch) {
		originalFetch = globalThis.fetch.bind(globalThis);
		globalThis.fetch = (async (input, init) => {
			const url = resolveRequestUrl(input);
			if (!isAppwriteApiRequest(url, activeEndpointPrefixes)) return originalFetch(input, init);
			if (isConsoleAccountGetRequest(url, init?.method)) try {
				return await resolveBridgedConsoleAccountResponse();
			} catch {}
			const headers = buildBridgedHeaders(init);
			return originalFetch(input, {
				...init,
				headers,
				credentials: "include"
			});
		});
	}
}
function removeCliFetchBridge() {
	if (typeof window === "undefined" || !originalFetch) return;
	globalThis.fetch = originalFetch;
	originalFetch = null;
	activeEndpointPrefixes = [];
}
function isAppwriteCliCommand(rawCommand) {
	const trimmed = rawCommand.trim();
	return trimmed === "appwrite" || trimmed.startsWith("appwrite ");
}
function prepareCliCommand(rawCommand) {
	const trimmed = rawCommand.trim();
	if (!trimmed) return { type: "empty" };
	if (trimmed === "appwrite") return {
		type: "run",
		args: ""
	};
	if (trimmed.startsWith("appwrite ")) return {
		type: "run",
		args: trimmed.slice(8).trim()
	};
	return {
		type: "unsupported",
		message: [`${trimmed.split(/\s+/)[0] ?? trimmed}: not available in this terminal.`, "This is the Appwrite CLI, not a shell. Every command starts with `appwrite` — try `appwrite help`."].join("\n")
	};
}
function shouldWriteCliStderr(stdout, stderr) {
	if (!stderr) return false;
	if (!stdout) return true;
	return stderr !== stdout;
}
var projectBootstrapState = /* @__PURE__ */ new Map();
function getProjectBootstrapState(projectId) {
	const existing = projectBootstrapState.get(projectId);
	if (existing) return existing;
	const created = {
		promise: null,
		container: null
	};
	projectBootstrapState.set(projectId, created);
	return created;
}
function resetAllCliShellBootstraps() {
	for (const state of projectBootstrapState.values()) {
		state.container = null;
		state.promise = null;
	}
}
function deleteProjectBootstrapState(projectId) {
	projectBootstrapState.delete(projectId);
}
const CLI_TERMINAL_CACHE_CLEARED = "cli-terminal-cache-cleared";
function getCliTerminalCacheSummary() {
	return {
		version: CLI_WASM_VERSION,
		packageName: "appwrite-cli-wasm",
		indexedDb: "console-cli-wasm"
	};
}
async function loadCliTerminalCacheSummary() {
	return getCliTerminalCacheSummary();
}
async function clearCliTerminalCache() {
	await clearCachedModules();
	resetAllCliShellBootstraps();
	if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent(CLI_TERMINAL_CACHE_CLEARED));
}
const APPWRITE_CLI_TOPICS = [
	"account",
	"activities",
	"apps",
	"backups",
	"client",
	"completion",
	"databases",
	"embeddings",
	"functions",
	"generate",
	"graphql",
	"init",
	"list-organizations",
	"list-projects",
	"locale",
	"login",
	"logout",
	"messaging",
	"oauth2",
	"organization",
	"presences",
	"project",
	"proxy",
	"pull",
	"push",
	"run",
	"sessions",
	"sites",
	"storage",
	"tablesdb",
	"teams",
	"tokens",
	"types",
	"update",
	"users",
	"webhooks",
	"whoami",
	"help"
];
const APPWRITE_CLI_SUBCOMMANDS = {
	account: [
		"create",
		"create-anonymous-session",
		"create-email-password-session",
		"create-email-token",
		"create-email-verification",
		"create-magic-url-token",
		"create-mfa-authenticator",
		"create-mfa-challenge",
		"create-mfa-recovery-codes",
		"create-o-auth-2-token",
		"create-phone-token",
		"create-phone-verification",
		"create-recovery",
		"create-session",
		"create-verification",
		"delete-consent",
		"delete-consent-token",
		"delete-identity",
		"delete-mfa-authenticator",
		"delete-session",
		"delete-sessions",
		"get",
		"get-consent",
		"get-consent-token",
		"get-mfa-recovery-codes",
		"get-prefs",
		"get-session",
		"list-consent-tokens",
		"list-consents",
		"list-identities",
		"list-logs",
		"list-mfa-factors",
		"list-sessions",
		"update-email",
		"update-email-verification",
		"update-magic-url-session",
		"update-mfa",
		"update-mfa-authenticator",
		"update-mfa-challenge",
		"update-mfa-recovery-codes",
		"update-name",
		"update-password",
		"update-phone",
		"update-phone-session",
		"update-phone-verification",
		"update-prefs",
		"update-recovery",
		"update-session",
		"update-status",
		"update-verification"
	],
	activities: ["get-event", "list-events"],
	apps: [
		"create",
		"create-installation-token",
		"create-key",
		"create-secret",
		"delete",
		"delete-installation",
		"delete-key",
		"delete-secret",
		"delete-tokens",
		"get",
		"get-installation",
		"get-key",
		"get-secret",
		"list",
		"list-installation-scopes",
		"list-installations",
		"list-keys",
		"list-o-auth-2-scopes",
		"list-secrets",
		"update",
		"update-labels",
		"update-team"
	],
	backups: [
		"create-archive",
		"create-policy",
		"create-restoration",
		"delete-archive",
		"delete-policy",
		"get-archive",
		"get-policy",
		"get-restoration",
		"list-archives",
		"list-policies",
		"list-restorations",
		"update-policy"
	],
	client: [],
	completion: [
		"bash",
		"fish",
		"install",
		"powershell",
		"zsh"
	],
	databases: [
		"create",
		"create-big-int-attribute",
		"create-boolean-attribute",
		"create-collection",
		"create-datetime-attribute",
		"create-document",
		"create-documents",
		"create-email-attribute",
		"create-enum-attribute",
		"create-float-attribute",
		"create-index",
		"create-integer-attribute",
		"create-ip-attribute",
		"create-line-attribute",
		"create-longtext-attribute",
		"create-mediumtext-attribute",
		"create-operations",
		"create-point-attribute",
		"create-polygon-attribute",
		"create-relationship-attribute",
		"create-string-attribute",
		"create-text-attribute",
		"create-transaction",
		"create-url-attribute",
		"create-varchar-attribute",
		"decrement-document-attribute",
		"delete",
		"delete-attribute",
		"delete-collection",
		"delete-document",
		"delete-documents",
		"delete-index",
		"delete-transaction",
		"get",
		"get-attribute",
		"get-collection",
		"get-document",
		"get-index",
		"get-transaction",
		"increment-document-attribute",
		"list",
		"list-attributes",
		"list-collections",
		"list-documents",
		"list-indexes",
		"list-transactions",
		"update",
		"update-big-int-attribute",
		"update-boolean-attribute",
		"update-collection",
		"update-datetime-attribute",
		"update-document",
		"update-documents",
		"update-email-attribute",
		"update-enum-attribute",
		"update-float-attribute",
		"update-integer-attribute",
		"update-ip-attribute",
		"update-line-attribute",
		"update-longtext-attribute",
		"update-mediumtext-attribute",
		"update-point-attribute",
		"update-polygon-attribute",
		"update-relationship-attribute",
		"update-string-attribute",
		"update-text-attribute",
		"update-transaction",
		"update-url-attribute",
		"update-varchar-attribute",
		"upsert-document",
		"upsert-documents"
	],
	embeddings: ["create-text-embeddings"],
	functions: [
		"create",
		"create-deployment",
		"create-duplicate-deployment",
		"create-execution",
		"create-template-deployment",
		"create-variable",
		"create-vcs-deployment",
		"delete",
		"delete-deployment",
		"delete-execution",
		"delete-variable",
		"get",
		"get-deployment",
		"get-deployment-download",
		"get-execution",
		"get-variable",
		"list",
		"list-deployments",
		"list-executions",
		"list-runtimes",
		"list-specifications",
		"list-variables",
		"update",
		"update-deployment-status",
		"update-function-deployment",
		"update-variable"
	],
	generate: [],
	graphql: ["mutation", "query"],
	init: [
		"bucket",
		"collection",
		"function",
		"project",
		"site",
		"skill",
		"table",
		"team",
		"topic"
	],
	"list-organizations": [],
	"list-projects": [],
	locale: [
		"get",
		"list-codes",
		"list-continents",
		"list-countries",
		"list-countries-eu",
		"list-countries-phones",
		"list-currencies",
		"list-languages"
	],
	login: [],
	logout: [],
	messaging: [
		"create-apns-provider",
		"create-email",
		"create-fcm-provider",
		"create-mailgun-provider",
		"create-msg-91-provider",
		"create-push",
		"create-resend-provider",
		"create-sendgrid-provider",
		"create-ses-provider",
		"create-sms",
		"create-smtp-provider",
		"create-subscriber",
		"create-telesign-provider",
		"create-textmagic-provider",
		"create-topic",
		"create-twilio-provider",
		"create-vonage-provider",
		"delete",
		"delete-provider",
		"delete-subscriber",
		"delete-topic",
		"get-message",
		"get-provider",
		"get-subscriber",
		"get-topic",
		"list-messages",
		"list-providers",
		"list-subscribers",
		"list-targets",
		"list-topics",
		"update-apns-provider",
		"update-email",
		"update-fcm-provider",
		"update-mailgun-provider",
		"update-msg-91-provider",
		"update-push",
		"update-resend-provider",
		"update-sendgrid-provider",
		"update-ses-provider",
		"update-sms",
		"update-smtp-provider",
		"update-telesign-provider",
		"update-textmagic-provider",
		"update-topic",
		"update-twilio-provider",
		"update-vonage-provider"
	],
	oauth2: [
		"authorize",
		"authorize-post",
		"create-device-authorization",
		"create-grant",
		"create-par",
		"create-token",
		"get-grant",
		"reject",
		"revoke"
	],
	organization: [
		"create-installation",
		"create-key",
		"create-membership",
		"create-project",
		"delete",
		"delete-installation",
		"delete-key",
		"delete-membership",
		"delete-project",
		"get",
		"get-installation",
		"get-key",
		"get-membership",
		"get-project",
		"list-installations",
		"list-keys",
		"list-memberships",
		"list-projects",
		"update",
		"update-installation",
		"update-key",
		"update-membership",
		"update-project"
	],
	presences: [
		"delete",
		"get",
		"list"
	],
	project: [
		"create-android-platform",
		"create-apple-platform",
		"create-ephemeral-key",
		"create-linux-platform",
		"create-mock-phone",
		"create-smtp-test",
		"create-variable",
		"create-web-platform",
		"create-windows-platform",
		"delete",
		"delete-key",
		"delete-mock-phone",
		"delete-platform",
		"delete-variable",
		"get",
		"get-email-template",
		"get-key",
		"get-mock-phone",
		"get-o-auth-2-provider",
		"get-platform",
		"get-policy",
		"get-variable",
		"list-email-templates",
		"list-keys",
		"list-mock-phones",
		"list-o-auth-2-providers",
		"list-platforms",
		"list-policies",
		"list-variables",
		"update-android-platform",
		"update-apple-platform",
		"update-auth-method",
		"update-deny-aliased-email-policy",
		"update-deny-corporate-email-policy",
		"update-deny-disposable-email-policy",
		"update-deny-free-email-policy",
		"update-email-template",
		"update-key",
		"update-labels",
		"update-linux-platform",
		"update-membership-privacy-policy",
		"update-mfa-factors-policy",
		"update-mock-phone",
		"update-o-auth-2-amazon",
		"update-o-auth-2-apple",
		"update-o-auth-2-appwrite",
		"update-o-auth-2-auth-0",
		"update-o-auth-2-authentik",
		"update-o-auth-2-autodesk",
		"update-o-auth-2-bitbucket",
		"update-o-auth-2-bitly",
		"update-o-auth-2-box",
		"update-o-auth-2-dailymotion",
		"update-o-auth-2-discord",
		"update-o-auth-2-disqus",
		"update-o-auth-2-dropbox",
		"update-o-auth-2-etsy",
		"update-o-auth-2-facebook",
		"update-o-auth-2-figma",
		"update-o-auth-2-fusion-auth",
		"update-o-auth-2-git-hub",
		"update-o-auth-2-gitlab",
		"update-o-auth-2-google",
		"update-o-auth-2-keycloak",
		"update-o-auth-2-kick",
		"update-o-auth-2-linkedin",
		"update-o-auth-2-microsoft",
		"update-o-auth-2-notion",
		"update-o-auth-2-oidc",
		"update-o-auth-2-okta",
		"update-o-auth-2-paypal",
		"update-o-auth-2-paypal-sandbox",
		"update-o-auth-2-podio",
		"update-o-auth-2-salesforce",
		"update-o-auth-2-server",
		"update-o-auth-2-slack",
		"update-o-auth-2-spotify",
		"update-o-auth-2-stripe",
		"update-o-auth-2-tradeshift",
		"update-o-auth-2-tradeshift-sandbox",
		"update-o-auth-2-twitch",
		"update-o-auth-2-word-press",
		"update-o-auth-2-yahoo",
		"update-o-auth-2-yandex",
		"update-o-auth-2-zoho",
		"update-o-auth-2-zoom",
		"update-o-auth-2x",
		"update-password-dictionary-policy",
		"update-password-history-policy",
		"update-password-personal-data-policy",
		"update-password-strength-policy",
		"update-protocol",
		"update-service",
		"update-session-alert-policy",
		"update-session-duration-policy",
		"update-session-invalidation-policy",
		"update-session-limit-policy",
		"update-smtp",
		"update-user-limit-policy",
		"update-variable",
		"update-web-platform",
		"update-windows-platform"
	],
	proxy: [
		"create-api-rule",
		"create-function-rule",
		"create-invalidation",
		"create-redirect-rule",
		"create-site-rule",
		"delete-rule",
		"get-rule",
		"list-rules",
		"update-rule-status"
	],
	pull: [
		"all",
		"bucket",
		"collection",
		"function",
		"settings",
		"site",
		"table",
		"team",
		"topic",
		"webhook"
	],
	push: [
		"all",
		"bucket",
		"collection",
		"function",
		"settings",
		"site",
		"table",
		"team",
		"topic",
		"webhook"
	],
	run: ["function"],
	sessions: [],
	sites: [
		"create",
		"create-deployment",
		"create-duplicate-deployment",
		"create-template-deployment",
		"create-variable",
		"create-vcs-deployment",
		"delete",
		"delete-deployment",
		"delete-log",
		"delete-variable",
		"get",
		"get-deployment",
		"get-deployment-download",
		"get-log",
		"get-variable",
		"list",
		"list-deployments",
		"list-frameworks",
		"list-logs",
		"list-specifications",
		"list-variables",
		"update",
		"update-deployment-status",
		"update-site-deployment",
		"update-variable"
	],
	storage: [
		"create-bucket",
		"create-file",
		"delete-bucket",
		"delete-file",
		"get-bucket",
		"get-file",
		"get-file-download",
		"get-file-preview",
		"get-file-view",
		"list-buckets",
		"list-files",
		"update-bucket",
		"update-file"
	],
	tablesdb: [
		"create",
		"create-big-int-column",
		"create-boolean-column",
		"create-datetime-column",
		"create-email-column",
		"create-enum-column",
		"create-failover",
		"create-float-column",
		"create-index",
		"create-integer-column",
		"create-ip-column",
		"create-line-column",
		"create-longtext-column",
		"create-mediumtext-column",
		"create-migration",
		"create-operations",
		"create-point-column",
		"create-polygon-column",
		"create-relationship-column",
		"create-row",
		"create-rows",
		"create-string-column",
		"create-table",
		"create-text-column",
		"create-transaction",
		"create-url-column",
		"create-varchar-column",
		"cutover-migration",
		"decrement-row-column",
		"delete",
		"delete-column",
		"delete-index",
		"delete-migration",
		"delete-row",
		"delete-rows",
		"delete-table",
		"delete-transaction",
		"get",
		"get-column",
		"get-index",
		"get-migration",
		"get-replicas",
		"get-row",
		"get-status",
		"get-table",
		"get-transaction",
		"increment-row-column",
		"list",
		"list-columns",
		"list-indexes",
		"list-migrations",
		"list-operations",
		"list-rows",
		"list-specifications",
		"list-tables",
		"list-transactions",
		"update",
		"update-big-int-column",
		"update-boolean-column",
		"update-datetime-column",
		"update-email-column",
		"update-enum-column",
		"update-float-column",
		"update-integer-column",
		"update-ip-column",
		"update-line-column",
		"update-longtext-column",
		"update-mediumtext-column",
		"update-point-column",
		"update-polygon-column",
		"update-relationship-column",
		"update-row",
		"update-rows",
		"update-string-column",
		"update-table",
		"update-text-column",
		"update-transaction",
		"update-url-column",
		"update-varchar-column",
		"upsert-row",
		"upsert-rows"
	],
	teams: [
		"create",
		"create-installation",
		"create-membership",
		"delete",
		"delete-installation",
		"delete-membership",
		"get",
		"get-installation",
		"get-membership",
		"get-prefs",
		"list",
		"list-installations",
		"list-memberships",
		"update-installation",
		"update-membership",
		"update-membership-status",
		"update-name",
		"update-prefs"
	],
	tokens: [
		"create-file-token",
		"delete",
		"get",
		"list",
		"update"
	],
	types: [],
	update: [],
	users: [
		"create",
		"create-argon-2-user",
		"create-bcrypt-user",
		"create-jwt",
		"create-md-5-user",
		"create-mfa-recovery-codes",
		"create-ph-pass-user",
		"create-scrypt-modified-user",
		"create-scrypt-user",
		"create-session",
		"create-sha-user",
		"create-target",
		"create-token",
		"delete",
		"delete-identity",
		"delete-mfa-authenticator",
		"delete-session",
		"delete-sessions",
		"delete-target",
		"get",
		"get-mfa-challenge",
		"get-mfa-recovery-codes",
		"get-prefs",
		"get-target",
		"list",
		"list-identities",
		"list-logs",
		"list-memberships",
		"list-mfa-factors",
		"list-sessions",
		"list-targets",
		"update-email",
		"update-email-verification",
		"update-impersonator",
		"update-labels",
		"update-mfa",
		"update-mfa-recovery-codes",
		"update-name",
		"update-password",
		"update-phone",
		"update-phone-verification",
		"update-prefs",
		"update-status",
		"update-target"
	],
	webhooks: [
		"create",
		"delete",
		"get",
		"list",
		"update",
		"update-secret"
	],
	whoami: [],
	help: APPWRITE_CLI_TOPICS.filter((topic) => topic !== "help")
};
var DEFAULT_HOME = "/home/user";
var DEFAULT_PATH_DIRS = [
	"/usr/local/bin",
	"/usr/bin",
	"/bin",
	"/node_modules/.bin"
];
var SHELL_BUILTINS = [
	"alias",
	"cd",
	"echo",
	"env",
	"export",
	"false",
	"pwd",
	"set",
	"source",
	"test",
	"true",
	"unset",
	"which",
	"cat",
	"clear",
	"cls",
	"cp",
	"grep",
	"head",
	"ls",
	"mkdir",
	"mv",
	"node",
	"npm",
	"npx",
	"rm",
	"tail",
	"touch"
];
var FILE_ARG_COMMANDS = new Set([
	"cat",
	"cd",
	"cp",
	"head",
	"ls",
	"mkdir",
	"mv",
	"node",
	"npm",
	"npx",
	"rm",
	"tail",
	"touch"
]);
function getWordBounds(input, cursor) {
	const safeCursor = Math.max(0, Math.min(cursor, input.length));
	let start = safeCursor;
	while (start > 0 && !/\s/.test(input[start - 1] ?? "")) start--;
	let end = safeCursor;
	while (end < input.length && !/\s/.test(input[end] ?? "")) end--;
	return {
		start,
		end,
		word: input.slice(start, end)
	};
}
function getTokenIndex(input, cursor) {
	const before = input.slice(0, cursor);
	let count = 0;
	let inWord = false;
	for (const char of before) if (/\s/.test(char)) inWord = false;
	else if (!inWord) {
		count++;
		inWord = true;
	}
	if (cursor > 0 && /\s/.test(input[cursor - 1] ?? "") && !inWord) return count;
	return Math.max(0, count - 1);
}
function getFirstToken(input) {
	return input.trim().match(/^(\S+)/)?.[1] ?? "";
}
function normalizePath(value) {
	if (!value) return ".";
	const isAbsolute = value.startsWith("/");
	const parts = value.split("/").filter(Boolean);
	const resolved = [];
	for (const part of parts) if (part === "..") {
		if (resolved.length > 0 && resolved[resolved.length - 1] !== "..") resolved.pop();
		else if (!isAbsolute) resolved.push("..");
	} else if (part !== ".") resolved.push(part);
	const joined = resolved.join("/");
	if (isAbsolute) return `/${joined}` || "/";
	return joined || ".";
}
function joinPath(...segments) {
	return normalizePath(segments.filter(Boolean).join("/"));
}
function longestCommonPrefix(values) {
	if (values.length === 0) return "";
	let prefix = values[0] ?? "";
	for (const value of values.slice(1)) {
		let index = 0;
		while (index < prefix.length && index < value.length && prefix[index] === value[index]) index++;
		prefix = prefix.slice(0, index);
		if (!prefix) break;
	}
	return prefix;
}
function listPathCompletions(vfs, cwd, homeDir, partial) {
	const tildeExpanded = partial.startsWith("~") ? `${homeDir}${partial.slice(1)}` : partial;
	let dirPath;
	let prefix;
	let displayPrefix;
	if (partial.includes("/")) {
		const slashIndex = tildeExpanded.lastIndexOf("/");
		const dirPart = slashIndex === 0 ? "/" : tildeExpanded.slice(0, slashIndex);
		prefix = tildeExpanded.slice(slashIndex + 1);
		displayPrefix = partial.slice(0, partial.lastIndexOf("/") + 1);
		if (partial.startsWith("/") || partial.startsWith("~")) dirPath = normalizePath(dirPart || "/");
		else dirPath = joinPath(cwd, dirPart);
	} else {
		dirPath = cwd;
		prefix = partial;
		displayPrefix = "";
	}
	if (!vfs.existsSync(dirPath)) return [];
	try {
		if (!vfs.statSync(dirPath).isDirectory()) return [];
	} catch {
		return [];
	}
	return vfs.readdirSync(dirPath).filter((name) => name.startsWith(prefix)).sort().map((name) => {
		const fullPath = joinPath(dirPath, name);
		let isDir = false;
		try {
			isDir = vfs.statSync(fullPath).isDirectory();
		} catch {
			isDir = false;
		}
		return {
			replacement: `${displayPrefix}${name}`,
			isDir
		};
	});
}
function listPathExecutables(vfs, pathDirs) {
	if (!vfs) return [];
	const names = /* @__PURE__ */ new Set();
	for (const dir of pathDirs) {
		if (!vfs.existsSync(dir)) continue;
		try {
			if (!vfs.statSync(dir).isDirectory()) continue;
		} catch {
			continue;
		}
		for (const entry of vfs.readdirSync(dir)) {
			if (entry.startsWith(".")) continue;
			names.add(entry);
		}
	}
	return [...names].sort();
}
function shouldCompletePaths(command, tokenIndex, word) {
	if (word.startsWith("-")) return false;
	if (/^(~|\.\.?\/|\/)/.test(word) || word.includes("/")) return true;
	if (tokenIndex === 0) return false;
	if (command === "appwrite") return false;
	return FILE_ARG_COMMANDS.has(command);
}
function completeFromCandidates(word, candidates, listOnly) {
	const matches = candidates.filter((candidate) => candidate.startsWith(word));
	if (matches.length === 0) return { kind: "none" };
	if (matches.length === 1) return {
		kind: "apply",
		replacement: matches[0] ?? "",
		suffix: " "
	};
	const prefix = longestCommonPrefix(matches);
	if (prefix.length > word.length) return {
		kind: "apply",
		replacement: prefix,
		suffix: ""
	};
	if (listOnly) return {
		kind: "list",
		matches
	};
	return { kind: "none" };
}
function tabComplete(input, cursor, context, listOnly = false) {
	const { start, end, word } = getWordBounds(input, cursor);
	if (start !== end && word.startsWith("-")) return { kind: "none" };
	const tokenIndex = getTokenIndex(input, cursor);
	const command = getFirstToken(input);
	const cwd = context.cwd ?? "/project";
	const homeDir = context.homeDir ?? DEFAULT_HOME;
	const pathDirs = context.pathDirs ?? DEFAULT_PATH_DIRS;
	const vfs = context.vfs;
	if (command === "appwrite") {
		if (tokenIndex === 1) return completeFromCandidates(word, [...APPWRITE_CLI_TOPICS], listOnly);
		if (tokenIndex === 2) {
			const subcommands = APPWRITE_CLI_SUBCOMMANDS[input.trim().split(/\s+/)[1] ?? ""] ?? [];
			if (subcommands.length > 0) return completeFromCandidates(word, [...subcommands], listOnly);
		}
		if (tokenIndex === 0) {
			if (listOnly && word === "appwrite") return {
				kind: "list",
				matches: [...APPWRITE_CLI_TOPICS]
			};
			return completeFromCandidates(word, ["appwrite"], listOnly);
		}
		return { kind: "none" };
	}
	if (tokenIndex === 0) {
		const commands = [
			"appwrite",
			...SHELL_BUILTINS,
			...listPathExecutables(vfs, pathDirs)
		];
		return completeFromCandidates(word, [...new Set(commands)].sort(), listOnly);
	}
	if (shouldCompletePaths(command, tokenIndex, word) && vfs) {
		const pathMatches = listPathCompletions(vfs, cwd, homeDir, word);
		if (pathMatches.length === 0) return { kind: "none" };
		if (pathMatches.length === 1) {
			const match = pathMatches[0];
			if (!match) return { kind: "none" };
			return {
				kind: "apply",
				replacement: match.replacement,
				suffix: match.isDir ? "/" : " "
			};
		}
		const replacements = pathMatches.map((match) => match.replacement);
		const prefix = longestCommonPrefix(replacements);
		if (prefix.length > word.length) return {
			kind: "apply",
			replacement: prefix,
			suffix: ""
		};
		if (listOnly) return {
			kind: "list",
			matches: replacements
		};
		return { kind: "none" };
	}
	return { kind: "none" };
}
function applyTabCompletion(input, cursor, result) {
	const { start, end } = getWordBounds(input, cursor);
	const suffixChar = result.suffix ?? "";
	return {
		input: input.slice(0, start) + result.replacement + suffixChar + input.slice(end),
		cursor: start + result.replacement.length + suffixChar.length
	};
}
const CLI_SHELL_TOGGLE_SHORTCUT_RAW = "mod+;";
const CLI_SHELL_TOGGLE_SHORTCUT_COMBOS = ["meta+;", "control+;"];
const CLI_SHELL_FULLSCREEN_SHORTCUT_RAW = "mod+enter";
const CLI_SHELL_FULLSCREEN_SHORTCUT_COMBOS = ["meta+enter", "control+enter"];
const CLI_SHELL_SEARCH_SHORTCUT_RAW = "mod+f";
const CLI_SHELL_SEARCH_SHORTCUT_COMBOS = ["meta+f", "control+f"];
const CLI_SHELL_NEW_TERMINAL_SHORTCUT_RAW = "mod+shift+;";
const CLI_SHELL_NEW_TERMINAL_SHORTCUT_COMBOS = ["meta+shift+;", "control+shift+;"];
const CLI_SHELL_CONSOLE_SHORTCUTS = [
	{
		id: "terminal.toggle",
		description: "Toggle terminal",
		raw: CLI_SHELL_TOGGLE_SHORTCUT_RAW
	},
	{
		id: "terminal.fullscreen",
		description: "Enter full screen",
		raw: CLI_SHELL_FULLSCREEN_SHORTCUT_RAW
	},
	{
		id: "terminal.search",
		description: "Search output...",
		raw: CLI_SHELL_SEARCH_SHORTCUT_RAW
	},
	{
		id: "terminal.new",
		description: "New terminal",
		raw: CLI_SHELL_NEW_TERMINAL_SHORTCUT_RAW
	}
];
const CLI_TERMINAL_INPUT_SHORTCUTS = [
	{
		id: "terminal.home",
		description: "Move to start of line",
		raw: "home"
	},
	{
		id: "terminal.ctrl-a",
		description: "Move to start of line",
		raw: "ctrl+a"
	},
	{
		id: "terminal.end",
		description: "Move to end of line",
		raw: "end"
	},
	{
		id: "terminal.ctrl-e",
		description: "Move to end of line",
		raw: "ctrl+e"
	},
	{
		id: "terminal.word-left",
		description: "Move to previous word",
		raw: "alt+left"
	},
	{
		id: "terminal.word-right",
		description: "Move to next word",
		raw: "alt+right"
	},
	{
		id: "terminal.history-up",
		description: "Previous command",
		raw: "up"
	},
	{
		id: "terminal.history-down",
		description: "Next command",
		raw: "down"
	},
	{
		id: "terminal.delete-word",
		description: "Delete word before cursor",
		raw: "ctrl+w"
	},
	{
		id: "terminal.delete-word-alt",
		description: "Delete word before cursor",
		raw: "alt+backspace"
	},
	{
		id: "terminal.kill-before",
		description: "Clear from cursor to start of line",
		raw: "ctrl+u"
	},
	{
		id: "terminal.kill-after",
		description: "Clear from cursor to end of line",
		raw: "ctrl+k"
	},
	{
		id: "terminal.clear-line",
		description: "Clear input line or cancel command",
		raw: "ctrl+c"
	},
	{
		id: "terminal.delete-forward",
		description: "Delete character at cursor",
		raw: "delete"
	},
	{
		id: "terminal.tab",
		description: "Tab completion",
		raw: "tab"
	}
];
function stripAnsi(text) {
	return text.replace(/\x1b\[[0-9;]*[a-zA-Z]/g, "").replace(/\x1b\].*?(?:\x07|\x1b\\)/g, "");
}
function normalizeTerminalLineText(text) {
	return stripAnsi(text).replace(/\u00a0/g, " ").replace(/\s+$/g, "");
}
function readLineText(line) {
	let text = "";
	for (let x = 0; x < line.length; x++) text += line.getCell(x)?.getChars() ?? "";
	if (!text) text = line.translateToString(false);
	return normalizeTerminalLineText(text);
}
function readBufferLines(terminal) {
	const buffer = terminal.buffer.active;
	const lines = [];
	const lineCount = Math.max(buffer.length, buffer.baseY + terminal.rows);
	for (let y = 0; y < lineCount; y++) {
		const line = buffer.getLine(y);
		lines.push(line ? readLineText(line) : "");
	}
	return lines.join("\n").replace(/\s+$/g, "");
}
function readTerminalDomText(terminal) {
	const element = terminal.element;
	if (!element) return "";
	const rowElements = element.querySelectorAll(".xterm-row");
	if (rowElements.length > 0) {
		const lines = [];
		rowElements.forEach((row) => {
			lines.push(normalizeTerminalLineText(row.textContent ?? ""));
		});
		return lines.join("\n").replace(/\s+$/g, "");
	}
	const rows = element.querySelector(".xterm-rows");
	if (!rows) return "";
	return normalizeTerminalLineText(rows.textContent ?? "");
}
function getTerminalBufferText(terminal) {
	const fromBuffer = readBufferLines(terminal);
	if (fromBuffer.trim()) return fromBuffer;
	return readTerminalDomText(terminal);
}
function downloadTextFile(filename, content) {
	const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
	const url = URL.createObjectURL(blob);
	const anchor = document.createElement("a");
	anchor.href = url;
	anchor.download = filename;
	anchor.click();
	URL.revokeObjectURL(url);
}
const CLI_SHELL_ROOT_SELECTOR = "[data-cli-shell]";
function isFocusWithinCliShell(focusTarget = document.activeElement) {
	if (focusTarget == null || !(focusTarget instanceof Element)) return false;
	return focusTarget.closest(CLI_SHELL_ROOT_SELECTOR) !== null;
}
function createCliShellSessionId() {
	return crypto.randomUUID();
}
function formatCliShellSessionName(index) {
	return `Terminal ${index}`;
}
function createDefaultCliShellSession(index = 1) {
	return {
		id: createCliShellSessionId(),
		name: formatCliShellSessionName(index)
	};
}
function nextCliShellSessionName(sessions) {
	const used = new Set(sessions.map((session) => session.name));
	let index = sessions.length + 1;
	while (used.has(formatCliShellSessionName(index))) index += 1;
	return formatCliShellSessionName(index);
}
function createInitialCliShellSessionState() {
	const session = createDefaultCliShellSession();
	return {
		sessions: [session],
		activeSessionId: session.id
	};
}
function reorderCliShellRootSessions(sessions, fromRootIndex, toRootIndex) {
	const rootSessions = sessions.filter((session) => !session.parentSessionId);
	if (fromRootIndex === toRootIndex || fromRootIndex < 0 || toRootIndex < 0 || fromRootIndex >= rootSessions.length || toRootIndex >= rootSessions.length) return sessions;
	const reorderedRoots = [...rootSessions];
	const [moved] = reorderedRoots.splice(fromRootIndex, 1);
	reorderedRoots.splice(toRootIndex, 0, moved);
	const next = [];
	for (const root of reorderedRoots) {
		next.push(root);
		next.push(...sessions.filter((session) => session.parentSessionId === root.id));
	}
	return next;
}
function getCliShellSessionRootId(sessionId, sessions) {
	const session = sessions.find((item) => item.id === sessionId);
	if (!session?.parentSessionId) return sessionId;
	return session.parentSessionId;
}
function getCliShellSplitChildren(rootId, sessions) {
	return sessions.filter((session) => session.parentSessionId === rootId);
}
function getCliShellSplitGroupSessionIds(rootId, sessions) {
	return sessions.filter((session) => session.id === rootId || session.parentSessionId === rootId).map((session) => session.id);
}
function collectCliShellSessionsToRemove(sessionId, sessions) {
	const session = sessions.find((item) => item.id === sessionId);
	if (!session) return [sessionId];
	if (session.parentSessionId) return [sessionId];
	return [sessionId, ...getCliShellSplitChildren(sessionId, sessions).map((child) => child.id)];
}
function normalizeCliShellSplitPaneIds(paneIds, sessions) {
	const valid = paneIds.filter((id) => sessions.some((session) => session.id === id));
	if (valid.length <= 1) return [];
	return valid;
}
function getCliShellVisiblePaneSessionIds(activeRootId, sessions, splitPaneSessionIds) {
	const groupIds = getCliShellSplitGroupSessionIds(activeRootId, sessions);
	if (groupIds.length <= 1) return [];
	if (splitPaneSessionIds.length > 1) {
		const ordered = splitPaneSessionIds.filter((id) => groupIds.includes(id));
		if (ordered.length > 1) return ordered;
	}
	return groupIds;
}
function aggregateCliTerminalSearchResults(paneIds, resultsBySession, activeSessionId) {
	let totalCount = 0;
	let globalIndex = -1;
	let resolvedActiveId = activeSessionId;
	for (const id of paneIds) {
		const results = resultsBySession.get(id);
		const count = results?.resultCount ?? 0;
		if (resolvedActiveId && id === resolvedActiveId && results && results.resultIndex >= 0) globalIndex = totalCount + results.resultIndex;
		totalCount += count;
	}
	if (globalIndex < 0 && totalCount > 0) {
		let prefix = 0;
		for (const id of paneIds) {
			const results = resultsBySession.get(id);
			const count = results?.resultCount ?? 0;
			if (count > 0) {
				globalIndex = prefix + (results.resultIndex >= 0 ? results.resultIndex : 0);
				resolvedActiveId = id;
				break;
			}
			prefix += count;
		}
	}
	return {
		resultIndex: globalIndex,
		resultCount: totalCount,
		activeSessionId: resolvedActiveId
	};
}
function resolveGlobalMatchPosition(globalIndex, paneIds, resultsBySession) {
	let prefix = 0;
	for (const id of paneIds) {
		const count = resultsBySession.get(id)?.resultCount ?? 0;
		if (globalIndex >= prefix && globalIndex < prefix + count) return {
			sessionId: id,
			localIndex: globalIndex - prefix
		};
		prefix += count;
	}
	return null;
}
function formatCliTerminalSearchLabel(query, results) {
	if (!query.trim()) return "";
	if (!results || results.resultCount === 0) return "No results";
	if (results.resultIndex < 0) return `${results.resultCount} matches`;
	return `${results.resultIndex + 1} of ${results.resultCount}`;
}
var CliShellContext = createContext(null);
function useCliShell() {
	const ctx = useContext(CliShellContext);
	if (!ctx) throw new Error("useCliShell must be used within CliShellProvider");
	return ctx;
}
function useCliShellOptional() {
	return useContext(CliShellContext);
}
function isEditablePageFocusTarget(element) {
	if (!element || element === document.body) return false;
	if (element.closest(".monaco-editor, [data-postgres-sql-editor], [contenteditable=\"true\"]")) return true;
	return element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement || element instanceof HTMLSelectElement;
}
function CliShellProvider({ projectId, children }) {
	const t = useT();
	const { account, isLoading: isAccountLoading } = useAuth();
	const { project } = useProject(projectId);
	const organizationId = project?.teamId;
	const consoleAccount = account;
	const { isOpen: open, setIsOpen: setOpen } = useCliShellOpen(consoleAccount);
	const { heightPx, setHeightPx } = useCliShellHeight(consoleAccount);
	const { history: commandHistory, persistHistory: persistCommandHistory } = useCliShellHistory(consoleAccount, projectId);
	const { persistSessions, flushPersistSessions } = useCliShellSessionsPrefs(consoleAccount, projectId);
	const height = clampCliShellHeightPx(heightPx);
	const [panelEverOpened, setPanelEverOpened] = useState(true);
	const [status, setStatus] = useState("idle");
	const [runningSessionId, setRunningSessionId] = useState(null);
	const [bootstrapError, setBootstrapError] = useState(null);
	const [terminalSearchOpen, setTerminalSearchOpenState] = useState(false);
	const terminalSearchOpenRef = useRef(terminalSearchOpen);
	terminalSearchOpenRef.current = terminalSearchOpen;
	const [terminalSearchResults, setTerminalSearchResults] = useState(null);
	const [terminalSearchQuery, setTerminalSearchQuery] = useState("");
	const [searchSessionIds, setSearchSessionIds] = useState([]);
	const searchSessionIdsRef = useRef(searchSessionIds);
	searchSessionIdsRef.current = searchSessionIds;
	const searchResultsBySessionRef = useRef(/* @__PURE__ */ new Map());
	const [searchCaseSensitive, setSearchCaseSensitive] = useState(false);
	const [sessionBootstrap] = useState(createInitialCliShellSessionState);
	const [sessions, setSessions] = useState(sessionBootstrap.sessions);
	const [activeSessionId, setActiveSessionIdState] = useState(sessionBootstrap.activeSessionId);
	const [splitPaneSessionIds, setSplitPaneSessionIds] = useState([]);
	const [focusedSessionId, setFocusedSessionId] = useState(sessionBootstrap.activeSessionId);
	const isRunning = runningSessionId !== null;
	const runningSessionIdRef = useRef(null);
	runningSessionIdRef.current = runningSessionId;
	const commandHistoryRef = useRef(commandHistory);
	commandHistoryRef.current = commandHistory;
	const suggestionCommandsRef = useRef(CLI_SHELL_TRY_COMMANDS);
	const runDismissedRef = useRef(false);
	const lastSearchQueryRef = useRef("");
	const lastSearchSessionIdRef = useRef(null);
	const lastGlobalSearchIndexRef = useRef(-1);
	const suppressSearchFocusRerunRef = useRef(false);
	const suppressSearchReportRef = useRef(false);
	const sessionsHydratedForProjectRef = useRef(null);
	const sessionsDirtyRef = useRef(false);
	const suppressSessionsPersistRef = useRef(false);
	const previousProjectIdRef = useRef(null);
	const lastPersistedSessionsRef = useRef("");
	const persistSessionsRef = useRef(persistSessions);
	persistSessionsRef.current = persistSessions;
	const flushPersistSessionsRef = useRef(flushPersistSessions);
	flushPersistSessionsRef.current = flushPersistSessions;
	const containerRef = useRef(null);
	const terminalApisRef = useRef(/* @__PURE__ */ new Map());
	const terminalContentReadyRef = useRef(/* @__PURE__ */ new Set());
	const welcomeInitInProgressRef = useRef(/* @__PURE__ */ new Set());
	const activeSessionIdRef = useRef(activeSessionId);
	activeSessionIdRef.current = activeSessionId;
	const sessionsRef = useRef(sessions);
	sessionsRef.current = sessions;
	const splitPaneSessionIdsRef = useRef(splitPaneSessionIds);
	splitPaneSessionIdsRef.current = splitPaneSessionIds;
	const focusedSessionIdRef = useRef(focusedSessionId);
	focusedSessionIdRef.current = focusedSessionId;
	const pendingBootstrapMessagesRef = useRef([]);
	const bootstrapPromiseRef = useRef(null);
	const bootstrapPendingRef = useRef(null);
	const bootstrapTimerRef = useRef(null);
	const bootstrapLastUpdateRef = useRef(0);
	const bootstrapSilentRef = useRef(false);
	const bootstrapReadyAnnouncedRef = useRef(false);
	const bootstrapLastWrittenRef = useRef(null);
	const bootstrapEpochRef = useRef(0);
	const bootstrapRunIdRef = useRef(0);
	const authInitializedRef = useRef(false);
	const authInitInFlightRef = useRef(null);
	const heightBeforeFullscreenRef = useRef(null);
	const [fullscreen, setFullscreen] = useState(false);
	const openRef = useRef(open);
	openRef.current = open;
	const statusRef = useRef(status);
	statusRef.current = status;
	const syncCliShellPromptOnOpenRef = useRef(() => {});
	const BOOTSTRAP_LINE_MIN_INTERVAL_MS = 250;
	const getTerminalApi = useCallback((sessionId) => {
		const id = sessionId ?? focusedSessionIdRef.current;
		return terminalApisRef.current.get(id) ?? null;
	}, []);
	const showInputPromptIfIdle = useCallback((sessionId, force = false) => {
		const id = sessionId ?? focusedSessionIdRef.current;
		if (runningSessionIdRef.current === id) return;
		const api = getTerminalApi(sessionId);
		if (!api) return;
		if (api.prepareInputLine) {
			api.prepareInputLine(force);
			return;
		}
		api.showInputPrompt?.();
	}, [getTerminalApi]);
	const writeWelcome = useCallback(async (api) => {
		for (const line of createCliShellWelcomeLines()) if (line.type === "suggestions") await writeCliShellSuggestions(api, line.commands);
		else writeCliShellLine(api, line);
	}, []);
	const flushPendingBootstrapMessages = useCallback((sessionId) => {
		if (sessionId !== activeSessionIdRef.current) return false;
		const api = terminalApisRef.current.get(sessionId);
		if (!api) return false;
		let shouldShowPrompt = bootstrapReadyAnnouncedRef.current;
		for (const message of pendingBootstrapMessagesRef.current) {
			if (message !== "Appwrite CLI is ready." && bootstrapReadyAnnouncedRef.current) continue;
			if (message === "Appwrite CLI is ready." && bootstrapReadyAnnouncedRef.current) continue;
			if (message === "Appwrite CLI is ready.") {
				bootstrapReadyAnnouncedRef.current = true;
				shouldShowPrompt = true;
			}
			api.writeln(`${CLI_TERMINAL_MUTED}${message}${CLI_TERMINAL_RESET}`);
			bootstrapLastWrittenRef.current = message;
		}
		pendingBootstrapMessagesRef.current = [];
		return shouldShowPrompt;
	}, []);
	const registerTerminal = useCallback((sessionId, api) => {
		terminalApisRef.current.set(sessionId, api);
		requestAnimationFrame(() => {
			syncCliShellPromptOnOpenRef.current();
		});
	}, []);
	const writeSessionWelcome = useCallback(async (sessionId) => {
		const api = terminalApisRef.current.get(sessionId);
		if (!api) return false;
		if (terminalContentReadyRef.current.has(sessionId)) return true;
		if (welcomeInitInProgressRef.current.has(sessionId)) return false;
		welcomeInitInProgressRef.current.add(sessionId);
		try {
			api.resetForWelcome?.();
			await writeWelcome(api);
			let shouldShowPrompt = false;
			if (sessionId === activeSessionIdRef.current) {
				shouldShowPrompt = flushPendingBootstrapMessages(sessionId);
				if (!shouldShowPrompt && statusRef.current === "ready" && containerRef.current) {
					if (!bootstrapReadyAnnouncedRef.current) bootstrapReadyAnnouncedRef.current = true;
					shouldShowPrompt = true;
				}
			}
			api.markWelcomeComplete?.();
			const isActiveRoot = sessionId === activeSessionIdRef.current;
			if (isActiveRoot && openRef.current) {
				if (shouldShowPrompt || statusRef.current === "bootstrapping") showInputPromptIfIdle(sessionId, true);
			} else if (!isActiveRoot) showInputPromptIfIdle(sessionId);
			terminalContentReadyRef.current.add(sessionId);
			return true;
		} finally {
			welcomeInitInProgressRef.current.delete(sessionId);
		}
	}, [
		flushPendingBootstrapMessages,
		showInputPromptIfIdle,
		writeWelcome
	]);
	const unregisterTerminal = useCallback((sessionId) => {
		terminalApisRef.current.delete(sessionId);
		terminalContentReadyRef.current.delete(sessionId);
		welcomeInitInProgressRef.current.delete(sessionId);
	}, []);
	const writeBootstrapMessage = useCallback((text) => {
		if (text === "Appwrite CLI is ready." && bootstrapReadyAnnouncedRef.current) return;
		if (text !== "Appwrite CLI is ready." && bootstrapReadyAnnouncedRef.current) return;
		if (bootstrapLastWrittenRef.current === text) return;
		const activeId = activeSessionIdRef.current;
		const api = getTerminalApi();
		if (api && terminalContentReadyRef.current.has(activeId)) {
			if (text === "Appwrite CLI is ready.") bootstrapReadyAnnouncedRef.current = true;
			api.writeln(`${CLI_TERMINAL_MUTED}${text}${CLI_TERMINAL_RESET}`);
			bootstrapLastWrittenRef.current = text;
			if (text === "Appwrite CLI is ready." && openRef.current) showInputPromptIfIdle(activeId, true);
			return;
		}
		if (text === "Appwrite CLI is ready." && pendingBootstrapMessagesRef.current.includes("Appwrite CLI is ready.")) return;
		if (pendingBootstrapMessagesRef.current.includes(text)) return;
		pendingBootstrapMessagesRef.current.push(text);
	}, [getTerminalApi, showInputPromptIfIdle]);
	const scheduleBootstrapLine = useCallback((text) => {
		if (text !== "Appwrite CLI is ready." && bootstrapReadyAnnouncedRef.current) return;
		const scheduleEpoch = bootstrapEpochRef.current;
		bootstrapPendingRef.current = text;
		const flush = () => {
			if (scheduleEpoch !== bootstrapEpochRef.current) return;
			bootstrapTimerRef.current = null;
			const pending = bootstrapPendingRef.current;
			if (pending !== null) {
				writeBootstrapMessage(pending);
				bootstrapPendingRef.current = null;
				bootstrapLastUpdateRef.current = Date.now();
			}
		};
		if (bootstrapTimerRef.current !== null) return;
		const elapsed = Date.now() - bootstrapLastUpdateRef.current;
		if (elapsed >= BOOTSTRAP_LINE_MIN_INTERVAL_MS) {
			flush();
			return;
		}
		bootstrapTimerRef.current = setTimeout(flush, BOOTSTRAP_LINE_MIN_INTERVAL_MS - elapsed);
	}, [writeBootstrapMessage]);
	const finalizeBootstrapLine = useCallback((text) => {
		bootstrapEpochRef.current += 1;
		if (bootstrapTimerRef.current !== null) {
			clearTimeout(bootstrapTimerRef.current);
			bootstrapTimerRef.current = null;
		}
		bootstrapPendingRef.current = null;
		writeBootstrapMessage(text);
	}, [writeBootstrapMessage]);
	const resetBootstrapLine = useCallback(() => {
		bootstrapEpochRef.current += 1;
		if (bootstrapTimerRef.current !== null) {
			clearTimeout(bootstrapTimerRef.current);
			bootstrapTimerRef.current = null;
		}
		bootstrapPendingRef.current = null;
	}, []);
	const writeStderrLine = useCallback((text, options) => {
		writeCliShellLine(getTerminalApi(options?.sessionId), {
			type: "stderr",
			text
		}, options);
	}, [getTerminalApi]);
	const writeSystemLine = useCallback((text, sessionId) => {
		writeCliShellLine(getTerminalApi(sessionId), {
			type: "system",
			text
		}, { showPromptAfter: runningSessionIdRef.current === null });
	}, [getTerminalApi]);
	const setHeight = useCallback((next) => {
		setHeightPx(clampCliShellHeightPx(next));
	}, [setHeightPx]);
	const exitFullscreen = useCallback(() => {
		setFullscreen(false);
		if (heightBeforeFullscreenRef.current !== null) {
			setHeight(heightBeforeFullscreenRef.current);
			heightBeforeFullscreenRef.current = null;
		}
	}, [setHeight]);
	const enterFullscreen = useCallback(() => {
		setOpen(true);
		heightBeforeFullscreenRef.current = height;
		setFullscreen(true);
	}, [height, setOpen]);
	const toggleFullscreen = useCallback(() => {
		if (fullscreen) {
			exitFullscreen();
			return;
		}
		enterFullscreen();
	}, [
		enterFullscreen,
		exitFullscreen,
		fullscreen
	]);
	useEffect(() => {
		if (open) setPanelEverOpened(true);
	}, [open]);
	const syncCliShellPromptOnOpen = useCallback(() => {
		if (!openRef.current || runningSessionIdRef.current !== null) return;
		if (statusRef.current === "ready" && containerRef.current && !bootstrapReadyAnnouncedRef.current) finalizeBootstrapLine(CLI_BOOTSTRAP_READY_MESSAGE);
		const activeId = activeSessionIdRef.current;
		if (!terminalContentReadyRef.current.has(activeId)) return;
		if (!bootstrapReadyAnnouncedRef.current) return;
		showInputPromptIfIdle(activeId, true);
	}, [finalizeBootstrapLine, showInputPromptIfIdle]);
	syncCliShellPromptOnOpenRef.current = syncCliShellPromptOnOpen;
	useEffect(() => {
		if (!open) return;
		syncCliShellPromptOnOpen();
		const timer = window.setTimeout(syncCliShellPromptOnOpen, 200);
		return () => clearTimeout(timer);
	}, [
		open,
		status,
		syncCliShellPromptOnOpen
	]);
	useEffect(() => {
		if (!open && fullscreen) {
			heightBeforeFullscreenRef.current = null;
			setFullscreen(false);
		}
	}, [fullscreen, open]);
	useEffect(() => {
		if (open) return;
		flushPersistSessionsRef.current();
	}, [open]);
	const initializeCliAuth = useCallback(async (container) => {
		if (authInitializedRef.current || isAccountLoading) return;
		if (authInitInFlightRef.current) {
			await authInitInFlightRef.current;
			return;
		}
		const email = account?.email?.trim();
		if (!email) return;
		const initPromise = (async () => {
			const auth = await resolveConsoleCliAuth();
			if (!auth) throw new Error("No active console session. Sign in again to use the Appwrite CLI.");
			const projectEndpoint = getProjectApiEndpoint(projectId);
			const consoleEndpoint = getBaseEndpoint();
			if (auth.mode === "browser-proxy") installCliFetchBridge([consoleEndpoint, projectEndpoint]);
			else removeCliFetchBridge();
			syncCliAuthFiles(container.vfs, {
				projectId,
				projectEndpoint,
				consoleEndpoint,
				email,
				auth
			});
			syncCliProjectConfig(container.vfs, {
				projectId,
				projectEndpoint,
				organizationId
			});
			authInitializedRef.current = true;
		})();
		authInitInFlightRef.current = initPromise;
		try {
			await initPromise;
		} finally {
			if (authInitInFlightRef.current === initPromise) authInitInFlightRef.current = null;
		}
	}, [
		account,
		isAccountLoading,
		organizationId,
		projectId
	]);
	const ensureRuntime = useCallback(async (options) => {
		const projectBootstrap = getProjectBootstrapState(projectId);
		if (containerRef.current) return containerRef.current;
		if (projectBootstrap.container) {
			containerRef.current = projectBootstrap.container;
			setStatus("ready");
			setBootstrapError(null);
			return projectBootstrap.container;
		}
		const requestedSilent = options?.silent ?? false;
		if (bootstrapPromiseRef.current ?? projectBootstrap.promise) {
			const activePromise = bootstrapPromiseRef.current ?? projectBootstrap.promise;
			if (!requestedSilent && bootstrapSilentRef.current) {
				bootstrapSilentRef.current = false;
				setBootstrapError(null);
				setStatus("bootstrapping");
				scheduleBootstrapLine("Setting up browser shell runtime...");
			}
			return activePromise;
		}
		const silent = requestedSilent;
		bootstrapSilentRef.current = silent;
		const projectEndpoint = getProjectApiEndpoint(projectId);
		const consoleEndpoint = getBaseEndpoint();
		setBootstrapError(null);
		if (!silent) {
			setStatus("bootstrapping");
			scheduleBootstrapLine("Setting up browser shell runtime...");
		} else setStatus("bootstrapping");
		const runId = ++bootstrapRunIdRef.current;
		const promise = bootstrapCliRuntime({
			projectId,
			projectEndpoint,
			consoleEndpoint,
			organizationId
		}, (message) => {
			if (bootstrapSilentRef.current) return;
			scheduleBootstrapLine(message);
		}).then(async (container) => {
			if (runId !== bootstrapRunIdRef.current) return container;
			containerRef.current = container;
			projectBootstrap.container = container;
			projectBootstrap.promise = null;
			if (!bootstrapSilentRef.current) try {
				await initializeCliAuth(container);
				setBootstrapError(null);
			} catch (error) {
				const message = error instanceof Error ? error.message : "Failed to configure Appwrite CLI session.";
				setBootstrapError(message);
				resetBootstrapLine();
				writeStderrLine(message);
			}
			setStatus("ready");
			if (!bootstrapSilentRef.current) finalizeBootstrapLine(CLI_BOOTSTRAP_READY_MESSAGE);
			return container;
		}).catch((error) => {
			if (runId !== bootstrapRunIdRef.current) throw error;
			projectBootstrap.container = null;
			projectBootstrap.promise = null;
			const message = error instanceof Error ? error.message : "Failed to start CLI shell.";
			setStatus("error");
			setBootstrapError(message);
			if (!bootstrapSilentRef.current) resetBootstrapLine();
			throw error;
		}).finally(() => {
			if (runId !== bootstrapRunIdRef.current) return;
			bootstrapPromiseRef.current = null;
			bootstrapSilentRef.current = false;
		});
		bootstrapPromiseRef.current = promise;
		projectBootstrap.promise = promise;
		return promise;
	}, [
		finalizeBootstrapLine,
		initializeCliAuth,
		organizationId,
		projectId,
		resetBootstrapLine,
		scheduleBootstrapLine,
		writeStderrLine
	]);
	useEffect(() => {
		const container = containerRef.current;
		if (!container || !organizationId) return;
		syncCliProjectConfig(container.vfs, {
			projectId,
			projectEndpoint: getProjectApiEndpoint(projectId),
			organizationId
		});
	}, [organizationId, projectId]);
	useEffect(() => {
		if (!open) return;
		const container = containerRef.current;
		if (!container || isAccountLoading || authInitializedRef.current) return;
		initializeCliAuth(container).then(() => setBootstrapError(null)).catch((error) => {
			setBootstrapError(error instanceof Error ? error.message : "Failed to configure Appwrite CLI session.");
		});
	}, [
		open,
		account,
		initializeCliAuth,
		isAccountLoading
	]);
	const retryBootstrap = useCallback(() => {
		bootstrapRunIdRef.current += 1;
		containerRef.current = null;
		bootstrapPromiseRef.current = null;
		bootstrapReadyAnnouncedRef.current = false;
		authInitializedRef.current = false;
		authInitInFlightRef.current = null;
		const projectBootstrap = getProjectBootstrapState(projectId);
		projectBootstrap.container = null;
		projectBootstrap.promise = null;
		setBootstrapError(null);
		resetBootstrapLine();
		setStatus("idle");
		removeCliFetchBridge();
		if (open) ensureRuntime({ silent: false }).catch(() => {});
	}, [
		ensureRuntime,
		open,
		projectId,
		resetBootstrapLine
	]);
	useEffect(() => {
		const handleTerminalCacheCleared = () => {
			retryBootstrap();
		};
		window.addEventListener(CLI_TERMINAL_CACHE_CLEARED, handleTerminalCacheCleared);
		return () => {
			window.removeEventListener(CLI_TERMINAL_CACHE_CLEARED, handleTerminalCacheCleared);
		};
	}, [retryBootstrap]);
	useEffect(() => {
		if (!open) return;
		ensureRuntime({ silent: false }).catch(() => {});
	}, [ensureRuntime, open]);
	useEffect(() => {
		if (typeof window === "undefined") return;
		if (!organizationId || isAccountLoading) return;
		let cancelled = false;
		let idleId;
		let timeoutId;
		const preloadRuntime = () => {
			if (cancelled) return;
			ensureRuntime({ silent: true }).catch(() => {});
		};
		if (typeof window.requestIdleCallback === "function") idleId = window.requestIdleCallback(preloadRuntime, { timeout: 4e3 });
		else timeoutId = globalThis.setTimeout(preloadRuntime, 2e3);
		return () => {
			cancelled = true;
			if (idleId !== void 0) window.cancelIdleCallback(idleId);
			if (timeoutId !== void 0) globalThis.clearTimeout(timeoutId);
		};
	}, [
		ensureRuntime,
		isAccountLoading,
		organizationId
	]);
	useEffect(() => {
		const previousProjectId = previousProjectIdRef.current;
		previousProjectIdRef.current = projectId;
		if (previousProjectId === null || previousProjectId === projectId) return;
		containerRef.current = null;
		bootstrapPromiseRef.current = null;
		bootstrapReadyAnnouncedRef.current = false;
		bootstrapLastWrittenRef.current = null;
		authInitializedRef.current = false;
		authInitInFlightRef.current = null;
		deleteProjectBootstrapState(projectId);
		setStatus("idle");
		setBootstrapError(null);
		resetBootstrapLine();
		runDismissedRef.current = false;
		runningSessionIdRef.current = null;
		setRunningSessionId(null);
		terminalContentReadyRef.current.clear();
		welcomeInitInProgressRef.current.clear();
		terminalApisRef.current.clear();
		pendingBootstrapMessagesRef.current = [];
		suggestionCommandsRef.current = CLI_SHELL_TRY_COMMANDS;
		sessionsHydratedForProjectRef.current = null;
		sessionsDirtyRef.current = false;
		suppressSessionsPersistRef.current = false;
		lastPersistedSessionsRef.current = "";
		const nextState = createInitialCliShellSessionState();
		setSessions(nextState.sessions);
		setActiveSessionIdState(nextState.activeSessionId);
		setFocusedSessionId(nextState.activeSessionId);
		setSplitPaneSessionIds([]);
		removeCliFetchBridge();
	}, [projectId, resetBootstrapLine]);
	useEffect(() => {
		if (!consoleAccount) return;
		if (sessionsHydratedForProjectRef.current === projectId) return;
		if (sessionsDirtyRef.current) {
			const persistedSplitPaneIds = splitPaneSessionIdsRef.current.length > 1 ? splitPaneSessionIdsRef.current : void 0;
			lastPersistedSessionsRef.current = serializeCliShellSessionsState({
				sessions: sessionsRef.current,
				activeSessionId: activeSessionIdRef.current,
				splitPaneSessionIds: persistedSplitPaneIds
			});
			sessionsHydratedForProjectRef.current = projectId;
			suppressSessionsPersistRef.current = false;
			return;
		}
		const saved = parseCliShellSessions(consoleAccount.prefs, projectId);
		if (saved) {
			setSessions(saved.sessions);
			setActiveSessionIdState(saved.activeSessionId);
			setFocusedSessionId(saved.activeSessionId);
			setSplitPaneSessionIds(saved.splitPaneSessionIds ?? []);
			lastPersistedSessionsRef.current = serializeCliShellSessionsState(saved);
		} else {
			const persistedSplitPaneIds = splitPaneSessionIdsRef.current.length > 1 ? splitPaneSessionIdsRef.current : void 0;
			lastPersistedSessionsRef.current = serializeCliShellSessionsState({
				sessions: sessionsRef.current,
				activeSessionId: activeSessionIdRef.current,
				splitPaneSessionIds: persistedSplitPaneIds
			});
		}
		suppressSessionsPersistRef.current = true;
		sessionsHydratedForProjectRef.current = projectId;
	}, [consoleAccount, projectId]);
	useEffect(() => {
		if (sessionsHydratedForProjectRef.current !== projectId) return;
		const persistedSplitPaneIds = splitPaneSessionIds.length > 1 ? splitPaneSessionIds : void 0;
		const payload = serializeCliShellSessionsState({
			sessions,
			activeSessionId,
			splitPaneSessionIds: persistedSplitPaneIds
		});
		if (lastPersistedSessionsRef.current === payload) {
			suppressSessionsPersistRef.current = false;
			return;
		}
		if (suppressSessionsPersistRef.current) {
			try {
				const baseline = JSON.parse(lastPersistedSessionsRef.current || "null");
				const baselineIds = new Set((baseline?.sessions ?? []).map((session) => session.id));
				const stateIds = sessions.map((session) => session.id);
				if (!(baselineIds.size > 0 && stateIds.length === baselineIds.size && stateIds.every((id) => baselineIds.has(id)))) return;
			} catch {
				return;
			}
			suppressSessionsPersistRef.current = false;
			if (lastPersistedSessionsRef.current === payload) return;
		}
		lastPersistedSessionsRef.current = payload;
		persistSessionsRef.current({
			sessions,
			activeSessionId,
			splitPaneSessionIds: persistedSplitPaneIds
		});
	}, [
		activeSessionId,
		projectId,
		sessions,
		splitPaneSessionIds
	]);
	useEffect(() => {
		return () => {
			removeCliFetchBridge();
		};
	}, []);
	const clearOutput = useCallback((sessionId) => {
		const api = getTerminalApi(sessionId);
		if (api?.clearScreen) {
			api.clearScreen();
			return;
		}
		api?.clear();
		showInputPromptIfIdle(sessionId);
	}, [getTerminalApi, showInputPromptIfIdle]);
	const completeTab = useCallback((input, cursor, listOnly = false, sessionId) => {
		const outcome = tabComplete(input, cursor, { vfs: containerRef.current?.vfs ?? null }, listOnly);
		if (outcome.kind === "none") return null;
		if (outcome.kind === "list") {
			const api = getTerminalApi(sessionId);
			if (api) api.writeln("");
			writeSystemLine(outcome.matches.join("  "), sessionId);
			return {
				input,
				cursor
			};
		}
		return applyTabCompletion(input, cursor, outcome);
	}, [getTerminalApi, writeSystemLine]);
	const focusSession = useCallback((sessionId, options) => {
		const api = terminalApisRef.current.get(sessionId);
		if (!api) return false;
		if (terminalSearchOpen) return true;
		requestAnimationFrame(() => {
			if (!options?.force && isEditablePageFocusTarget(document.activeElement)) return;
			if (api.focusInputLine) {
				api.focusInputLine();
				return;
			}
			api.focus();
		});
		return true;
	}, [terminalSearchOpen]);
	const prevCliOpenRef = useRef(null);
	useEffect(() => {
		const prevOpen = prevCliOpenRef.current;
		prevCliOpenRef.current = open;
		if (prevOpen === null) return;
		if (!open || prevOpen || terminalSearchOpen) return;
		const sessionId = focusedSessionIdRef.current;
		const timer = window.setTimeout(() => {
			focusSession(sessionId, { force: true });
			if (typeof window !== "undefined") window.dispatchEvent(new Event("resize"));
		}, 200);
		return () => window.clearTimeout(timer);
	}, [
		focusSession,
		open,
		terminalSearchOpen
	]);
	const setActiveSessionId = useCallback((sessionId) => {
		setActiveSessionIdState(sessionId);
		setFocusedSessionId(sessionId);
	}, []);
	const selectSession = useCallback((sessionId) => {
		setActiveSessionIdState(getCliShellSessionRootId(sessionId, sessionsRef.current));
		setFocusedSessionId(sessionId);
		focusSession(sessionId, { force: true });
	}, [focusSession]);
	const focusSessionPane = useCallback((sessionId) => {
		setFocusedSessionId(sessionId);
		focusSession(sessionId, { force: true });
	}, [focusSession]);
	const splitSession = useCallback((sessionId) => {
		sessionsDirtyRef.current = true;
		const rootId = getCliShellSessionRootId(sessionId, sessionsRef.current);
		const nextSessionId = createCliShellSessionId();
		let added = false;
		setSessions((prev) => {
			if (prev.length >= 10) {
				toast.error(`${t("Maximum")} 10 ${t("terminal sessions.")}`);
				return prev;
			}
			added = true;
			const nextSession = {
				id: nextSessionId,
				name: nextCliShellSessionName(prev),
				parentSessionId: rootId
			};
			return [...prev, nextSession];
		});
		if (!added) return;
		setSplitPaneSessionIds((prev) => {
			const panes = prev.length > 1 ? [...prev] : sessionsRef.current.some((session) => session.id === sessionId) ? [sessionId] : [rootId];
			if (!panes.includes(sessionId)) {
				if (!panes.includes(rootId)) panes.unshift(rootId);
				if (sessionId !== rootId) {
					const rootIndex = panes.indexOf(rootId);
					panes.splice(rootIndex + 1, 0, sessionId);
				}
			}
			const index = panes.indexOf(sessionId);
			const next = [...panes];
			next.splice(index >= 0 ? index + 1 : next.length, 0, nextSessionId);
			return next;
		});
		setActiveSessionIdState(rootId);
		setFocusedSessionId(nextSessionId);
		const focusNewSession = (attempt = 0) => {
			if (focusSession(nextSessionId, { force: true }) || attempt >= 30) return;
			requestAnimationFrame(() => focusNewSession(attempt + 1));
		};
		requestAnimationFrame(() => focusNewSession());
	}, [focusSession, t]);
	const renameSession = useCallback((sessionId, name) => {
		const trimmed = name.trim().slice(0, 48);
		if (!trimmed) return;
		sessionsDirtyRef.current = true;
		setSessions((prev) => prev.map((session) => session.id === sessionId ? {
			...session,
			name: trimmed
		} : session));
	}, []);
	const reorderRootSessions = useCallback((fromIndex, toIndex) => {
		sessionsDirtyRef.current = true;
		setSessions((prev) => reorderCliShellRootSessions(prev, fromIndex, toIndex));
	}, []);
	const createSession = useCallback(() => {
		sessionsDirtyRef.current = true;
		const nextSessionId = createCliShellSessionId();
		setSessions((prev) => {
			if (prev.length >= 10) {
				toast.error(`${t("Maximum")} 10 ${t("terminal sessions.")}`);
				return prev;
			}
			const nextSession = {
				id: nextSessionId,
				name: nextCliShellSessionName(prev)
			};
			return [...prev, nextSession];
		});
		setActiveSessionIdState(nextSessionId);
		setFocusedSessionId(nextSessionId);
		const focusNewSession = (attempt = 0) => {
			if (focusSession(nextSessionId, { force: true }) || attempt >= 30) return;
			requestAnimationFrame(() => focusNewSession(attempt + 1));
		};
		requestAnimationFrame(() => focusNewSession());
	}, [focusSession, t]);
	const removeSession = useCallback((sessionId) => {
		sessionsDirtyRef.current = true;
		const toRemove = collectCliShellSessionsToRemove(sessionId, sessionsRef.current);
		if (sessionsRef.current.length - toRemove.length < 1) return;
		const remaining = sessionsRef.current.filter((session) => !toRemove.includes(session.id));
		const nextActive = remaining.find((session) => !session.parentSessionId)?.id ?? remaining[0]?.id ?? "";
		const nextFocused = toRemove.includes(focusedSessionIdRef.current) ? remaining.find((session) => session.parentSessionId === nextActive)?.id ?? nextActive : focusedSessionIdRef.current;
		setSessions((prev) => {
			if (prev.length - toRemove.length < 1) return prev;
			for (const id of toRemove) {
				terminalContentReadyRef.current.delete(id);
				welcomeInitInProgressRef.current.delete(id);
				terminalApisRef.current.delete(id);
			}
			return prev.filter((session) => !toRemove.includes(session.id));
		});
		setActiveSessionIdState(nextActive);
		setFocusedSessionId(nextFocused);
		setSplitPaneSessionIds((prev) => normalizeCliShellSplitPaneIds(prev.filter((id) => !toRemove.includes(id)), remaining));
	}, []);
	const runCommand = useCallback(async (rawCommand, sessionId) => {
		const targetSessionId = sessionId ?? activeSessionIdRef.current;
		const trimmed = rawCommand.trim();
		if (!trimmed) return;
		if (/^exit(?:\s+\d+)?$/i.test(trimmed)) {
			const toRemove = collectCliShellSessionsToRemove(targetSessionId, sessionsRef.current);
			if (sessionsRef.current.length - toRemove.length < 1) {
				heightBeforeFullscreenRef.current = null;
				setFullscreen(false);
				setOpen(false);
				return;
			}
			removeSession(targetSessionId);
			return;
		}
		const blockedMessage = getBlockedCliCommandMessage(rawCommand);
		if (blockedMessage) {
			const lines = blockedMessage.split("\n");
			lines.forEach((line, index) => {
				writeStderrLine(line, {
					showPromptAfter: index === lines.length - 1,
					sessionId: targetSessionId
				});
			});
			return;
		}
		const prepared = prepareCliCommand(rawCommand);
		if (prepared.type === "empty") return;
		if (prepared.type === "unsupported") {
			prepared.message.split("\n").forEach((line, index, lines) => {
				writeStderrLine(line, {
					showPromptAfter: index === lines.length - 1,
					sessionId: targetSessionId
				});
			});
			return;
		}
		const command = prepared.args;
		let container;
		try {
			container = await ensureRuntime();
		} catch (error) {
			const message = error instanceof Error ? error.message : "CLI shell is not ready.";
			if (!bootstrapError) writeStderrLine(message, {
				showPromptAfter: true,
				sessionId: targetSessionId
			});
			return;
		}
		if (isAppwriteCliCommand(rawCommand) && !authInitializedRef.current) try {
			await initializeCliAuth(container);
		} catch (error) {
			setBootstrapError(error instanceof Error ? error.message : "Failed to configure Appwrite CLI session.");
		}
		if (isAppwriteCliCommand(rawCommand) && !authInitializedRef.current) {
			writeStderrLine(bootstrapError ?? "Appwrite CLI session is not ready. Retry setup or refresh the page.", {
				showPromptAfter: true,
				sessionId: targetSessionId
			});
			return;
		}
		runDismissedRef.current = false;
		runningSessionIdRef.current = targetSessionId;
		setRunningSessionId(targetSessionId);
		setStatus("running");
		let streamedStdout = false;
		let streamedStderr = false;
		let stdoutAccum = "";
		let stderrAccum = "";
		const stdoutLinkifier = createTerminalOutputLinkifier();
		const getOutputApi = () => terminalApisRef.current.get(targetSessionId) ?? null;
		const runOptions = {
			cwd: CLI_PROJECT_CWD,
			onStdout: (chunk) => {
				if (!chunk) return;
				streamedStdout = true;
				stdoutAccum += chunk;
				stdoutLinkifier.write(getOutputApi(), chunk);
			},
			onStderr: (chunk) => {
				if (!chunk) return;
				streamedStderr = true;
				stderrAccum += chunk;
			}
		};
		try {
			const result = await container.run(command, runOptions);
			if (result.stdout && !streamedStdout) {
				stdoutAccum = result.stdout;
				writeCliTerminalRaw(getOutputApi(), result.stdout);
			}
			if (result.stderr && !streamedStderr && shouldWriteCliStderr(result.stdout, result.stderr)) {
				stderrAccum = result.stderr;
				writeCliTerminalRaw(getOutputApi(), result.stderr);
			}
			if (result.exitCode !== 0 && !result.stdout && !result.stderr) writeStderrLine(`Command failed with exit code ${result.exitCode}.`, { sessionId: targetSessionId });
		} catch (error) {
			const message = error instanceof Error ? error.message : "Command failed.";
			if (!message.startsWith("Process exited with code")) writeStderrLine(message, { sessionId: targetSessionId });
		} finally {
			stdoutLinkifier.flush(getOutputApi());
			if (shouldWriteCliStderr(stdoutAccum, stderrAccum)) writeCliTerminalRaw(getOutputApi(), stderrAccum);
			const dismissed = runDismissedRef.current;
			if (dismissed) runDismissedRef.current = false;
			runningSessionIdRef.current = null;
			setRunningSessionId(null);
			setStatus(containerRef.current ? "ready" : "error");
			if (!dismissed) showInputPromptIfIdle(targetSessionId);
		}
	}, [
		bootstrapError,
		ensureRuntime,
		initializeCliAuth,
		removeSession,
		setOpen,
		showInputPromptIfIdle,
		writeStderrLine
	]);
	const cancelRunning = useCallback((sessionId) => {
		const targetSessionId = sessionId ?? activeSessionIdRef.current;
		if (runningSessionIdRef.current !== targetSessionId) return;
		runDismissedRef.current = true;
		runningSessionIdRef.current = null;
		setRunningSessionId(null);
		setStatus(containerRef.current ? "ready" : "error");
		writeSystemLine("^C", targetSessionId);
		writeSystemLine("Command cancelled.", targetSessionId);
		showInputPromptIfIdle(targetSessionId);
	}, [showInputPromptIfIdle, writeSystemLine]);
	const isSessionRunning = useCallback((sessionId) => {
		return runningSessionIdRef.current === sessionId;
	}, []);
	const getCommandHistory = useCallback(() => commandHistoryRef.current, []);
	const getSuggestionCommands = useCallback(() => suggestionCommandsRef.current, []);
	const resolveTerminalApiSessionId = useCallback((preferredSessionId) => {
		const candidates = [
			preferredSessionId,
			focusedSessionIdRef.current,
			activeSessionIdRef.current,
			...getCliShellVisiblePaneSessionIds(activeSessionIdRef.current, sessionsRef.current, splitPaneSessionIdsRef.current),
			lastSearchSessionIdRef.current
		].filter((id) => Boolean(id));
		for (const id of candidates) if (terminalApisRef.current.has(id)) return id;
		return terminalApisRef.current.keys().next().value ?? null;
	}, []);
	const getVisibleSearchPaneIds = useCallback(() => {
		return getCliShellVisiblePaneSessionIds(activeSessionIdRef.current, sessionsRef.current, splitPaneSessionIdsRef.current);
	}, []);
	const getSearchTargetSessionIds = useCallback((preferredSessionId) => {
		const paneIds = getVisibleSearchPaneIds().filter((id) => terminalApisRef.current.has(id));
		if (paneIds.length > 1) return paneIds;
		const singleId = resolveTerminalApiSessionId(preferredSessionId);
		return singleId ? [singleId] : [];
	}, [getVisibleSearchPaneIds, resolveTerminalApiSessionId]);
	const clearAllTerminalSearch = useCallback((exceptSessionId) => {
		for (const [sessionId, api] of terminalApisRef.current) {
			if (exceptSessionId && sessionId === exceptSessionId) continue;
			api.clearTerminalSearch?.();
		}
	}, []);
	const clearTerminalSearchState = useCallback(() => {
		lastSearchQueryRef.current = "";
		lastSearchSessionIdRef.current = null;
		lastGlobalSearchIndexRef.current = -1;
		searchResultsBySessionRef.current.clear();
		setTerminalSearchQuery("");
		setSearchSessionIds([]);
		setTerminalSearchResults(null);
		clearAllTerminalSearch();
	}, [clearAllTerminalSearch]);
	const setTerminalSearchOpen = useCallback((open$1) => {
		setTerminalSearchOpenState(open$1);
		if (!open$1) clearTerminalSearchState();
	}, [clearTerminalSearchState]);
	const reportSearchResults = useCallback((sessionId, results) => {
		if (!terminalSearchOpenRef.current) return;
		if (suppressSearchReportRef.current) return;
		const targetIds = searchSessionIdsRef.current;
		if (targetIds.length <= 1) {
			setTerminalSearchResults(results);
			if (results.resultCount > 0) lastSearchSessionIdRef.current = sessionId;
			return;
		}
		if (!targetIds.includes(sessionId)) return;
		searchResultsBySessionRef.current.set(sessionId, results);
		const aggregated = aggregateCliTerminalSearchResults(targetIds, searchResultsBySessionRef.current, lastSearchSessionIdRef.current);
		if (aggregated.activeSessionId) lastSearchSessionIdRef.current = aggregated.activeSessionId;
		if (aggregated.resultIndex >= 0) lastGlobalSearchIndexRef.current = aggregated.resultIndex;
		setTerminalSearchResults({
			resultIndex: aggregated.resultIndex,
			resultCount: aggregated.resultCount
		});
	}, []);
	const goToSplitSearchMatch = useCallback((sessionId, localIndex, query, globalIndex, totalCount) => {
		const api = terminalApisRef.current.get(sessionId);
		if (!api?.findFirstMatch?.(query)) return;
		const sessionCount = searchResultsBySessionRef.current.get(sessionId)?.resultCount ?? 0;
		if (sessionCount <= 0) return;
		suppressSearchReportRef.current = true;
		try {
			for (let step = 0; step < localIndex; step++) if (!api.findNextMatch?.(query)) break;
		} finally {
			suppressSearchReportRef.current = false;
		}
		searchResultsBySessionRef.current.set(sessionId, {
			resultIndex: localIndex,
			resultCount: sessionCount
		});
		suppressSearchFocusRerunRef.current = true;
		focusSessionPane(sessionId);
		suppressSearchFocusRerunRef.current = false;
		lastSearchSessionIdRef.current = sessionId;
		lastGlobalSearchIndexRef.current = globalIndex;
		setTerminalSearchResults({
			resultIndex: globalIndex,
			resultCount: totalCount
		});
	}, [focusSessionPane]);
	const goToSplitSearchMatchReverse = useCallback((sessionId, localIndex, query, globalIndex, totalCount) => {
		const api = terminalApisRef.current.get(sessionId);
		if (!api?.findLastMatch?.(query)) return;
		const sessionCount = searchResultsBySessionRef.current.get(sessionId)?.resultCount ?? 0;
		if (sessionCount <= 0) return;
		const stepsBack = sessionCount - 1 - localIndex;
		suppressSearchReportRef.current = true;
		try {
			for (let step = 0; step < stepsBack; step++) if (!api.findPreviousMatch?.(query)) break;
		} finally {
			suppressSearchReportRef.current = false;
		}
		searchResultsBySessionRef.current.set(sessionId, {
			resultIndex: localIndex,
			resultCount: sessionCount
		});
		suppressSearchFocusRerunRef.current = true;
		focusSessionPane(sessionId);
		suppressSearchFocusRerunRef.current = false;
		lastSearchSessionIdRef.current = sessionId;
		lastGlobalSearchIndexRef.current = globalIndex;
		setTerminalSearchResults({
			resultIndex: globalIndex,
			resultCount: totalCount
		});
	}, [focusSessionPane]);
	useEffect(() => {
		if (!terminalSearchOpen || suppressSearchFocusRerunRef.current) return;
		if (!terminalSearchQuery.trim()) {
			setTerminalSearchResults(null);
			clearAllTerminalSearch();
			return;
		}
		const targetIds = getSearchTargetSessionIds();
		const currentIds = searchSessionIdsRef.current;
		if (targetIds.length !== currentIds.length || targetIds.some((id, index) => id !== currentIds[index])) {
			searchResultsBySessionRef.current.clear();
			setSearchSessionIds(targetIds);
		}
	}, [
		clearAllTerminalSearch,
		focusedSessionId,
		getSearchTargetSessionIds,
		terminalSearchOpen,
		terminalSearchQuery
	]);
	const toggleTerminalSearch = useCallback(() => {
		const nextOpen = !terminalSearchOpen;
		if (nextOpen) {
			setOpen(true);
			const targetIds = getSearchTargetSessionIds();
			const focusTarget = targetIds.find((id) => id === focusedSessionIdRef.current) ?? targetIds[0];
			if (focusTarget && focusedSessionIdRef.current !== focusTarget) setFocusedSessionId(focusTarget);
			if (targetIds.length > 0) setSearchSessionIds(targetIds);
		}
		setTerminalSearchOpen(nextOpen);
	}, [
		getSearchTargetSessionIds,
		setOpen,
		setTerminalSearchOpen,
		terminalSearchOpen
	]);
	const searchTerminalOutput = useCallback((query, options, sessionId) => {
		lastSearchQueryRef.current = query;
		if (!query.trim()) {
			clearTerminalSearchState();
			return;
		}
		const targetIds = getSearchTargetSessionIds(sessionId);
		if (targetIds.length === 0) {
			setTerminalSearchResults({
				resultIndex: -1,
				resultCount: 0
			});
			return;
		}
		lastSearchSessionIdRef.current = sessionId && targetIds.includes(sessionId) ? sessionId : targetIds.find((id) => id === focusedSessionIdRef.current) ?? targetIds[0];
		searchResultsBySessionRef.current.clear();
		clearAllTerminalSearch();
		setSearchCaseSensitive(options.caseSensitive);
		setSearchSessionIds(targetIds);
		setTerminalSearchQuery(query);
	}, [
		clearAllTerminalSearch,
		clearTerminalSearchState,
		getSearchTargetSessionIds
	]);
	const findNextTerminalMatch = useCallback(() => {
		const query = lastSearchQueryRef.current.trim();
		if (!query) return;
		const splitPaneIds = searchSessionIdsRef.current.length > 1 ? searchSessionIdsRef.current : null;
		if (!splitPaneIds) {
			const sessionId = lastSearchSessionIdRef.current ?? resolveTerminalApiSessionId();
			if (!sessionId) return;
			lastSearchSessionIdRef.current = sessionId;
			terminalApisRef.current.get(sessionId)?.findNextMatch?.(query);
			return;
		}
		const paneIds = splitPaneIds;
		const aggregated = aggregateCliTerminalSearchResults(paneIds, searchResultsBySessionRef.current, lastSearchSessionIdRef.current);
		const totalCount = aggregated.resultCount;
		if (totalCount === 0) return;
		const current = lastGlobalSearchIndexRef.current >= 0 ? lastGlobalSearchIndexRef.current : aggregated.resultIndex >= 0 ? aggregated.resultIndex : 0;
		const nextGlobal = current + 1 >= totalCount ? 0 : current + 1;
		const target = resolveGlobalMatchPosition(nextGlobal, paneIds, searchResultsBySessionRef.current);
		if (!target) return;
		goToSplitSearchMatch(target.sessionId, target.localIndex, query, nextGlobal, totalCount);
	}, [goToSplitSearchMatch, resolveTerminalApiSessionId]);
	const findPreviousTerminalMatch = useCallback(() => {
		const query = lastSearchQueryRef.current.trim();
		if (!query) return;
		const splitPaneIds = searchSessionIdsRef.current.length > 1 ? searchSessionIdsRef.current : null;
		if (!splitPaneIds) {
			const sessionId = lastSearchSessionIdRef.current ?? resolveTerminalApiSessionId();
			if (!sessionId) return;
			lastSearchSessionIdRef.current = sessionId;
			terminalApisRef.current.get(sessionId)?.findPreviousMatch?.(query);
			return;
		}
		const paneIds = splitPaneIds;
		const aggregated = aggregateCliTerminalSearchResults(paneIds, searchResultsBySessionRef.current, lastSearchSessionIdRef.current);
		const totalCount = aggregated.resultCount;
		if (totalCount === 0) return;
		const current = lastGlobalSearchIndexRef.current >= 0 ? lastGlobalSearchIndexRef.current : aggregated.resultIndex >= 0 ? aggregated.resultIndex : 0;
		const prevGlobal = current - 1 < 0 ? totalCount - 1 : current - 1;
		const target = resolveGlobalMatchPosition(prevGlobal, paneIds, searchResultsBySessionRef.current);
		if (!target) return;
		goToSplitSearchMatchReverse(target.sessionId, target.localIndex, query, prevGlobal, totalCount);
	}, [goToSplitSearchMatchReverse, resolveTerminalApiSessionId]);
	const copyTextToClipboard = useCallback(async (text, label) => {
		if (!text) {
			toast.error(`${t("Nothing to copy for")} ${t(label)}.`);
			return;
		}
		try {
			await navigator.clipboard.writeText(text);
			toast.success(`${t("Copied")} ${t(label)}`);
		} catch {
			toast.error(`${t("Failed to copy")} ${t(label)}`);
		}
	}, [t]);
	const copyTerminalSelection = useCallback(() => {
		copyTextToClipboard(getTerminalApi()?.getSelection?.() ?? "", "selection");
	}, [copyTextToClipboard, getTerminalApi]);
	const copyLastCommand = useCallback(() => {
		copyTextToClipboard(getTerminalApi()?.getLastCommand?.() ?? "", "last command");
	}, [copyTextToClipboard, getTerminalApi]);
	const copyTerminalOutput = useCallback(() => {
		copyTextToClipboard(getTerminalApi()?.getBufferText?.() ?? "", "terminal output");
	}, [copyTextToClipboard, getTerminalApi]);
	const exportTerminalOutput = useCallback(() => {
		const content = getTerminalApi()?.getBufferText?.() ?? "";
		if (!content.trim()) {
			toast.error(t("Nothing to export."));
			return;
		}
		downloadTextFile(`terminal-${projectId}-${(/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-")}.txt`, content);
		toast.success(t("Terminal output downloaded"));
	}, [
		getTerminalApi,
		projectId,
		t
	]);
	const toggle = useCallback(() => {
		setOpen((prev) => {
			const next = !prev;
			if (!next) {
				heightBeforeFullscreenRef.current = null;
				setFullscreen(false);
			}
			return next;
		});
	}, [setOpen]);
	useKeyboardShortcut("escape", () => {
		if (terminalSearchOpen) {
			setTerminalSearchOpen(false);
			return;
		}
		exitFullscreen();
	}, {
		enabled: open && (terminalSearchOpen || fullscreen),
		ignoreInputs: false,
		capture: true,
		stopPropagation: true
	});
	const getTerminalPrompt = useCallback(() => {
		return formatCliTerminalPrompt({
			username: resolveCliTerminalUsername(account && typeof account === "object" ? {
				name: "name" in account ? String(account.name ?? "") : void 0,
				email: "email" in account ? String(account.email ?? "") : void 0
			} : null),
			projectName: resolveCliTerminalProjectLabel(project ? { name: project.name } : null, projectId)
		});
	}, [
		account,
		project,
		projectId
	]);
	const onToggleTerminalShortcut = useCallback(() => {
		toggle();
	}, [toggle]);
	useKeyboardShortcut(CLI_SHELL_TOGGLE_SHORTCUT_COMBOS[0], onToggleTerminalShortcut, {
		enabled: true,
		ignoreInputs: false,
		capture: true
	});
	useKeyboardShortcut(CLI_SHELL_TOGGLE_SHORTCUT_COMBOS[1], onToggleTerminalShortcut, {
		enabled: true,
		ignoreInputs: false,
		capture: true
	});
	const onEnterFullscreenShortcut = useCallback((e) => {
		if (!isFocusWithinCliShell()) return;
		e.preventDefault();
		e.stopPropagation();
		enterFullscreen();
	}, [enterFullscreen]);
	useKeyboardShortcut(CLI_SHELL_FULLSCREEN_SHORTCUT_COMBOS[0], onEnterFullscreenShortcut, {
		enabled: open && !fullscreen,
		ignoreInputs: false,
		capture: true,
		preventDefault: false,
		stopPropagation: false
	});
	useKeyboardShortcut(CLI_SHELL_FULLSCREEN_SHORTCUT_COMBOS[1], onEnterFullscreenShortcut, {
		enabled: open && !fullscreen,
		ignoreInputs: false,
		capture: true,
		preventDefault: false,
		stopPropagation: false
	});
	const onToggleTerminalSearchShortcut = useCallback(() => {
		toggleTerminalSearch();
	}, [toggleTerminalSearch]);
	useKeyboardShortcut(CLI_SHELL_SEARCH_SHORTCUT_COMBOS[0], onToggleTerminalSearchShortcut, {
		enabled: open,
		ignoreInputs: false,
		capture: true
	});
	useKeyboardShortcut(CLI_SHELL_SEARCH_SHORTCUT_COMBOS[1], onToggleTerminalSearchShortcut, {
		enabled: open,
		ignoreInputs: false,
		capture: true
	});
	const onCreateTerminalShortcut = useCallback(() => {
		setOpen(true);
		createSession();
	}, [setOpen, createSession]);
	useKeyboardShortcut(CLI_SHELL_NEW_TERMINAL_SHORTCUT_COMBOS[0], onCreateTerminalShortcut, {
		enabled: true,
		ignoreInputs: false,
		capture: true
	});
	useKeyboardShortcut(CLI_SHELL_NEW_TERMINAL_SHORTCUT_COMBOS[1], onCreateTerminalShortcut, {
		enabled: true,
		ignoreInputs: false,
		capture: true
	});
	const visiblePaneSessionIds = useMemo(() => getCliShellVisiblePaneSessionIds(activeSessionId, sessions, splitPaneSessionIds), [
		activeSessionId,
		sessions,
		splitPaneSessionIds
	]);
	const value = useMemo(() => ({
		open,
		setOpen,
		panelEverOpened,
		toggle,
		status,
		sessions,
		activeSessionId,
		setActiveSessionId,
		selectSession,
		focusedSessionId,
		focusSessionPane,
		splitPaneSessionIds,
		visiblePaneSessionIds,
		splitSession,
		createSession,
		removeSession,
		renameSession,
		reorderRootSessions,
		registerTerminal,
		unregisterTerminal,
		writeSessionWelcome,
		runCommand,
		clearOutput,
		completeTab,
		cancelRunning,
		isRunning,
		runningSessionId,
		isSessionRunning,
		height,
		setHeight,
		fullscreen,
		toggleFullscreen,
		exitFullscreen,
		retryBootstrap,
		bootstrapError,
		getTerminalPrompt,
		getCommandHistory,
		persistCommandHistory,
		getSuggestionCommands,
		terminalSearchOpen,
		setTerminalSearchOpen,
		terminalSearchQuery,
		searchSessionIds,
		searchCaseSensitive,
		terminalSearchResults,
		reportSearchResults,
		toggleTerminalSearch,
		searchTerminalOutput,
		findNextTerminalMatch,
		findPreviousTerminalMatch,
		copyTerminalSelection,
		copyLastCommand,
		copyTerminalOutput,
		exportTerminalOutput
	}), [
		open,
		setOpen,
		panelEverOpened,
		toggle,
		status,
		sessions,
		activeSessionId,
		setActiveSessionId,
		selectSession,
		focusedSessionId,
		focusSessionPane,
		splitPaneSessionIds,
		visiblePaneSessionIds,
		splitSession,
		createSession,
		removeSession,
		renameSession,
		reorderRootSessions,
		registerTerminal,
		unregisterTerminal,
		writeSessionWelcome,
		runCommand,
		clearOutput,
		completeTab,
		cancelRunning,
		isRunning,
		runningSessionId,
		isSessionRunning,
		height,
		setHeight,
		fullscreen,
		toggleFullscreen,
		exitFullscreen,
		retryBootstrap,
		bootstrapError,
		getTerminalPrompt,
		getCommandHistory,
		persistCommandHistory,
		getSuggestionCommands,
		terminalSearchOpen,
		setTerminalSearchOpen,
		terminalSearchQuery,
		searchSessionIds,
		searchCaseSensitive,
		terminalSearchResults,
		reportSearchResults,
		toggleTerminalSearch,
		searchTerminalOutput,
		findNextTerminalMatch,
		findPreviousTerminalMatch,
		copyTerminalSelection,
		copyLastCommand,
		copyTerminalOutput,
		exportTerminalOutput
	]);
	return /* @__PURE__ */ jsx(CliShellContext.Provider, {
		value,
		children
	});
}
var PACKAGE_MANAGER_ICON_MAP = {
	npm: "npm.svg",
	bun: "bun.svg",
	pnpm: "pnpm.svg",
	yarn: "yarn.svg",
	jsr: "jsr.svg"
};
var sizeClasses = {
	sm: "h-4 w-4",
	md: "h-5 w-5",
	lg: "h-6 w-6"
};
function PackageManagerIcon({ packageManager, className, size = "md" }) {
	if (!packageManager || typeof packageManager !== "string") return /* @__PURE__ */ jsx(Package, { className: cn(sizeClasses[size], className) });
	const iconFile = PACKAGE_MANAGER_ICON_MAP[packageManager.toLowerCase()];
	const sizeClass = sizeClasses[size];
	if (iconFile) return /* @__PURE__ */ jsx("img", {
		src: `/icons/${iconFile}`,
		alt: packageManager,
		className: cn(sizeClass, PUBLIC_ICON_MUTED_CLASSES, className)
	});
	return /* @__PURE__ */ jsx(Package, { className: cn(sizeClass, className) });
}
var CLI_CICD_API_KEY_DEFAULT_NAME = "CI/CD";
var CLI_INSTALL_URL = "/docs/tooling/command-line/installation";
var CLI_COMMANDS_URL = "/docs/tooling/command-line/commands";
var CLI_NON_INTERACTIVE_URL = "/docs/tooling/command-line/non-interactive";
var CLI_DEVICE_AUTH_BLOG = "/blog/post/announcing-cli-device-authorization";
function installCommands(os) {
	if (os === "macos") return [
		{
			id: "npm",
			label: "npm",
			code: "npm install -g appwrite-cli"
		},
		{
			id: "brew",
			label: "Homebrew",
			code: "brew install appwrite"
		},
		{
			id: "script",
			label: "Install script",
			code: "curl -sL https://appwrite.io/cli/install.sh | bash"
		}
	];
	if (os === "windows") return [
		{
			id: "npm",
			label: "npm",
			code: "npm install -g appwrite-cli"
		},
		{
			id: "powershell",
			label: "PowerShell",
			code: "iwr -useb https://appwrite.io/cli/install.ps1 | iex"
		},
		{
			id: "scoop",
			label: "Scoop",
			code: "scoop install https://raw.githubusercontent.com/appwrite/sdk-for-cli/master/scoop/appwrite.config.json"
		}
	];
	return [{
		id: "npm",
		label: "npm",
		code: "npm install -g appwrite-cli"
	}, {
		id: "script",
		label: "Install script",
		code: "curl -sL https://appwrite.io/cli/install.sh | bash"
	}];
}
function CLISection({ endpoint, projectId, onViewApiKeys, onClose }) {
	const t = useT();
	const cliShell = useCliShellOptional();
	const { project } = useProject(projectId);
	const { features, isSelfHosted } = useConsoleProfile();
	const { access } = useOrganizationScopes(project?.teamId);
	const { os: resolvedOs, orderOptions } = useUserOs();
	const showTerminal = Boolean(cliShell) && canShowProjectTerminal(access, features);
	const noCreatePermission = !canCreateKey(access, features);
	const createMutation = useCreateApiKey(projectId);
	const [mode, setMode] = useState("interactive");
	const [cliInstallOs, setCliInstallOs] = useState(resolvedOs);
	const [installMethodId, setInstallMethodId] = useState(() => {
		return installCommands(resolvedOs)[0]?.id ?? "npm";
	});
	const [createDrawerOpen, setCreateDrawerOpen] = useState(false);
	const [createdKeySecret, setCreatedKeySecret] = useState(null);
	const [copiedField, setCopiedField] = useState(null);
	const osOptions = orderOptions();
	useEffect(() => {
		setCliInstallOs(resolvedOs);
		setInstallMethodId(installCommands(resolvedOs)[0]?.id ?? "npm");
	}, [resolvedOs]);
	const installOptions = useMemo(() => installCommands(cliInstallOs), [cliInstallOs]);
	const selectedInstall = installOptions.find((option) => option.id === installMethodId) ?? installOptions[0];
	const loginCommand = isSelfHosted ? `appwrite login --endpoint="${endpoint}"` : "appwrite login";
	const clientCommand = `appwrite client --endpoint="${endpoint}" --project-id="${projectId}" --key="YOUR_API_KEY"`;
	const handleOsChange = (os) => {
		setCliInstallOs(os);
		setInstallMethodId(installCommands(os)[0]?.id ?? "npm");
	};
	const handleOpenTerminal = () => {
		onClose?.();
		cliShell?.setOpen(true);
	};
	const handleCopyKey = (text, field) => {
		navigator.clipboard.writeText(text);
		setCopiedField(field);
		setTimeout(() => setCopiedField(null), 2e3);
	};
	const handleCreateApiKey = (data) => {
		createMutation.mutate(data, {
			onSuccess: (createdKey) => {
				toast.success(t("API key created successfully"));
				if (createdKey?.secret) setCreatedKeySecret(createdKey.secret);
				else setCreateDrawerOpen(false);
			},
			onError: (error) => {
				toast.error(getErrorMessage(error) || t("Failed to create API key"));
			}
		});
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
		className: "flex flex-col gap-4 pt-4 min-h-0 h-full overflow-hidden",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "shrink-0 flex flex-wrap items-center justify-between gap-x-4 gap-y-2",
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex flex-wrap gap-1 rounded-lg border border-border bg-muted/30 p-1",
				children: [{
					id: "interactive",
					label: t("Interactive")
				}, {
					id: "cicd",
					label: t("CI/CD")
				}].map((option) => /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: () => setMode(option.id),
					className: cn("cursor-pointer rounded-md px-3 py-1.5 text-[12px] font-medium transition-colors", mode === option.id ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"),
					children: option.label
				}, option.id))
			}), showTerminal ? /* @__PURE__ */ jsxs(Button, {
				type: "button",
				variant: "outline",
				size: "sm",
				className: "h-9 gap-1.5 text-[13px]",
				onClick: handleOpenTerminal,
				children: [/* @__PURE__ */ jsx(Terminal, { className: "h-3.5 w-3.5" }), t("Open Appwrite Terminal")]
			}) : null]
		}), /* @__PURE__ */ jsxs("div", {
			className: "rounded-xl border border-border bg-card/50 overflow-hidden flex flex-col min-h-0 flex-1",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "px-4 py-3 border-b border-border space-y-2 shrink-0",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ jsx("h4", {
								className: "text-[13px] font-semibold text-foreground",
								children: t("1. Install")
							}), /* @__PURE__ */ jsx("div", {
								className: "flex flex-wrap gap-1 rounded-md border border-border bg-muted/30 p-0.5",
								children: osOptions.map((os) => /* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: () => handleOsChange(os),
									className: cn("cursor-pointer rounded px-2 py-0.5 text-[11px] font-medium transition-colors", cliInstallOs === os ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"),
									children: getUserOsLabel(os)
								}, os))
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex flex-wrap gap-1 rounded-lg border border-border bg-muted/30 p-1 w-fit",
							children: installOptions.map((option) => /* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => setInstallMethodId(option.id),
								className: cn("cursor-pointer rounded-md px-2.5 py-1 text-[12px] font-medium transition-colors", selectedInstall.id === option.id ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"),
								children: option.label === "Install script" ? t("Install script") : option.label
							}, option.id))
						}),
						/* @__PURE__ */ jsx(CodeBlock, {
							code: selectedInstall.code,
							language: "bash",
							label: t("Terminal"),
							showCopy: true
						})
					]
				}),
				mode === "interactive" ? /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-2 divide-x divide-border flex-1 min-h-0",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "px-4 py-3 space-y-2 min-w-0",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
							className: "text-[13px] font-semibold text-foreground",
							children: t("2. Log in")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground mt-0.5",
							children: t("Opens your browser for OAuth. No password in the terminal.")
						})] }), /* @__PURE__ */ jsx(CodeBlock, {
							code: loginCommand,
							language: "bash",
							label: t("Terminal"),
							showCopy: true,
							wrapLines: true
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "px-4 py-3 space-y-2 min-w-0",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
							className: "text-[13px] font-semibold text-foreground",
							children: t("3. Connect to this project")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground mt-0.5",
							children: t("Interactive init. Writes appwrite.config.json.")
						})] }), /* @__PURE__ */ jsx(CodeBlock, {
							code: "appwrite init project",
							language: "bash",
							label: t("Terminal"),
							showCopy: true
						})]
					})]
				}) : /* @__PURE__ */ jsxs("div", {
					className: "px-4 py-3 space-y-2 flex-1 min-h-0",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
							className: "text-[13px] font-semibold text-foreground",
							children: t("2. Authenticate with an API key")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground mt-0.5",
							children: t("Headless CI/CD auth: endpoint, project, and key.")
						})] }),
						/* @__PURE__ */ jsx(CodeBlock, {
							code: clientCommand,
							language: "bash",
							label: t("Terminal"),
							showCopy: true,
							wrapLines: true
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap gap-2",
							children: [/* @__PURE__ */ jsxs(Button, {
								type: "button",
								variant: "secondary",
								size: "sm",
								className: "h-8 gap-1.5 text-[12px]",
								onClick: () => setCreateDrawerOpen(true),
								disabled: noCreatePermission,
								title: noCreatePermission ? t("You don't have permission to create API keys.") : void 0,
								...analyticsAttrs("create-api-key"),
								children: [/* @__PURE__ */ jsx(Plus, { className: "h-3.5 w-3.5" }), t("Create API key")]
							}), /* @__PURE__ */ jsxs(Button, {
								type: "button",
								variant: "secondary",
								size: "sm",
								className: "h-8 gap-1.5 text-[12px]",
								onClick: onViewApiKeys,
								children: [/* @__PURE__ */ jsx(Key, { className: "h-3.5 w-3.5" }), t("View API keys")]
							})]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-4 py-2.5 border-t border-border bg-muted/30 flex flex-wrap items-center gap-x-4 gap-y-1 shrink-0",
					children: [
						/* @__PURE__ */ jsxs(DocsRouteLink, {
							href: CLI_INSTALL_URL,
							className: "inline-flex items-center gap-1 link-neutral text-[12px]",
							children: [t("Install guide"), /* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3" })]
						}),
						mode === "interactive" ? /* @__PURE__ */ jsxs(DocsRouteLink, {
							href: CLI_DEVICE_AUTH_BLOG,
							className: "inline-flex items-center gap-1 link-neutral text-[12px]",
							children: [t("Device auth"), /* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3" })]
						}) : /* @__PURE__ */ jsxs(DocsRouteLink, {
							href: CLI_NON_INTERACTIVE_URL,
							className: "inline-flex items-center gap-1 link-neutral text-[12px]",
							children: [t("CI docs"), /* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3" })]
						}),
						/* @__PURE__ */ jsxs(DocsRouteLink, {
							href: CLI_COMMANDS_URL,
							className: "inline-flex items-center gap-1 link-neutral text-[12px]",
							children: [t("Example commands"), /* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3" })]
						})
					]
				})
			]
		})]
	}), /* @__PURE__ */ jsx(ApiKeyDrawer, {
		open: createDrawerOpen,
		onOpenChange: (open) => {
			setCreateDrawerOpen(open);
			if (!open) setCreatedKeySecret(null);
		},
		onSubmit: handleCreateApiKey,
		isLoading: createMutation.isPending,
		createdKeySecret,
		onCopy: handleCopyKey,
		copiedField,
		initialName: t(CLI_CICD_API_KEY_DEFAULT_NAME)
	})] });
}
const S3_STORAGE_API_KEY_SCOPES = [
	"buckets.read",
	"buckets.write",
	"files.read",
	"files.write"
];
const S3_STORAGE_API_KEY_DEFAULT_NAME = "S3 Storage access";
function normalizeProjectS3Region(projectRegion) {
	if (typeof projectRegion !== "string" || !projectRegion.trim() || projectRegion.trim().toLowerCase() === "unknown") return;
	return projectRegion.trim().toLowerCase().replace(/\s+/g, "");
}
function getProjectS3StorageRegion(projectId, projectRegion) {
	return normalizeProjectS3Region(projectRegion) ?? normalizeProjectS3Region(getProjectRegion(projectId));
}
function getProjectS3StorageEndpoint(projectId) {
	return `${getProjectApiEndpoint(projectId).replace(/\/$/, "")}/s3`;
}
function buildS3ExampleFiles(s3Endpoint, projectId, region) {
	const endpoint = s3Endpoint || "https://cloud.appwrite.io/v1/s3";
	const pid = projectId || "YOUR_PROJECT_ID";
	const regionValue = region || "your-region";
	const boto3 = `import boto3

s3 = boto3.client(
    "s3",
    endpoint_url="${endpoint}",
    aws_access_key_id="${pid}",
    aws_secret_access_key="your-api-key",
    region_name="${regionValue}",
)
s3.list_buckets()`;
	const awsCli = `export AWS_ACCESS_KEY_ID="${pid}"
export AWS_SECRET_ACCESS_KEY="your-api-key"
export AWS_DEFAULT_REGION="${regionValue}"
export AWS_ENDPOINT_URL="${endpoint}"

aws s3 ls # List buckets
aws s3 mb "s3://my-new-bucket" # Create new bucket
aws s3 cp ./file.txt s3://my-new-bucket/file.txt # Upload file to a bucket
aws s3 ls s3://my-new-bucket --human-readable # List files inside a bucket
aws s3 cp s3://my-new-bucket/file.txt ./export.txt # Download file from bucket
aws s3 rm s3://my-new-bucket/file.txt # Delete a file from bucket
aws s3 rb "s3://my-new-bucket" --force # Remove bucket and its contents`;
	const rclone = `# Save config to ~/.config/rclone/rclone.conf
mkdir -p ~/.config/rclone
cat > ~/.config/rclone/rclone.conf <<'EOF'
[appwrite]
type = s3
provider = Other
access_key_id = ${pid}
secret_access_key = your-api-key
endpoint = ${endpoint}
region = ${regionValue}
EOF

# List buckets
rclone lsd appwrite:

# Create a bucket
rclone mkdir appwrite:my-new-bucket

# List files in a bucket
rclone ls appwrite:my-new-bucket

# Sync local -> remote (preview with --dry-run first)
rclone sync ./local-folder appwrite:my-new-bucket --dry-run
rclone sync ./local-folder appwrite:my-new-bucket

# Sync remote -> local (preview with --dry-run first)
rclone sync appwrite:my-new-bucket ./local-folder --dry-run
rclone sync appwrite:my-new-bucket ./local-folder`;
	return [
		{
			label: "AWS CLI",
			code: awsCli,
			language: "bash"
		},
		{
			label: "boto3",
			code: boto3,
			language: "python"
		},
		{
			label: "rclone",
			code: rclone,
			language: "bash"
		}
	];
}
function S3StorageScopeList() {
	return /* @__PURE__ */ jsx("span", {
		className: "inline-flex flex-wrap items-center gap-x-1 gap-y-1",
		children: S3_STORAGE_API_KEY_SCOPES.map((scope, index) => /* @__PURE__ */ jsxs("span", {
			className: "inline-flex items-center",
			children: [index > 0 ? /* @__PURE__ */ jsx("span", {
				className: "text-muted-foreground",
				children: ", "
			}) : null, /* @__PURE__ */ jsx("code", {
				className: "rounded bg-muted px-1 py-0.5 text-[12px]",
				children: scope
			})]
		}, scope))
	});
}
function S3ConnectSection({ projectId, onViewApiKeys }) {
	const t = useT();
	const { project, isLoading: projectLoading } = useProject(projectId);
	const { features } = useConsoleProfile();
	const { access } = useOrganizationScopes(project?.teamId);
	const noCreatePermission = !canCreateKey(access, features);
	const createMutation = useCreateApiKey(projectId);
	const [selectedFileIndex, setSelectedFileIndex] = useState(0);
	const [createDrawerOpen, setCreateDrawerOpen] = useState(false);
	const [createdKeySecret, setCreatedKeySecret] = useState(null);
	const [copiedField, setCopiedField] = useState(null);
	const s3Endpoint = useMemo(() => projectId ? getProjectS3StorageEndpoint(projectId) : "", [projectId]);
	const s3Region = useMemo(() => projectId ? getProjectS3StorageRegion(projectId, project?.region) : void 0, [projectId, project?.region]);
	const codeFiles = useMemo(() => buildS3ExampleFiles(s3Endpoint, projectId, s3Region ?? ""), [
		s3Endpoint,
		projectId,
		s3Region
	]);
	const codeFileTabs = useMemo(() => codeFiles.map((file, index) => ({
		id: String(index),
		label: file.label
	})), [codeFiles]);
	const initialApiKeyName = t(S3_STORAGE_API_KEY_DEFAULT_NAME);
	useEffect(() => {
		setSelectedFileIndex(0);
	}, [
		s3Endpoint,
		projectId,
		s3Region
	]);
	const selectedFile = codeFiles[selectedFileIndex] ?? codeFiles[0];
	const handleCopyKey = (text, field) => {
		navigator.clipboard.writeText(text);
		setCopiedField(field);
		setTimeout(() => setCopiedField(null), 2e3);
	};
	const handleCreateApiKey = (data) => {
		createMutation.mutate(data, {
			onSuccess: (createdKey) => {
				toast.success(t("API key created successfully"));
				if (createdKey?.secret) setCreatedKeySecret(createdKey.secret);
				else setCreateDrawerOpen(false);
			},
			onError: (error) => {
				toast.error(getErrorMessage(error) || t("Failed to create API key"));
			}
		});
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
		className: "grid grid-cols-[0.9fr_1.4fr] gap-5 pt-3 min-h-0 flex-1",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "space-y-3 min-w-0 min-h-0",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ jsx("h4", {
						className: "text-[13px] font-semibold text-foreground",
						children: t("S3-compatible access")
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground leading-relaxed",
						children: t("Connect Appwrite Storage to rclone, AWS CLI, and custom pipelines with a project-scoped HTTPS endpoint and SigV4 signing.")
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "text-[13px] text-muted-foreground leading-relaxed",
						children: [
							t("Use your project ID as the access key and an API key with these Storage scopes as the secret:"),
							" ",
							/* @__PURE__ */ jsx(S3StorageScopeList, {}),
							". ",
							t("API keys are only shown once at creation.")
						]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "space-y-3 rounded-xl border border-border bg-muted/30 px-4 py-3",
				children: [
					/* @__PURE__ */ jsx(PostgresCopyableField, {
						label: t("Endpoint"),
						value: s3Endpoint
					}),
					/* @__PURE__ */ jsx(PostgresCopyableField, {
						label: t("Access key"),
						value: projectId
					}),
					/* @__PURE__ */ jsx(PostgresCopyableField, {
						label: t("Region"),
						value: s3Region ?? "",
						isLoading: projectLoading && !s3Region
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap gap-2 border-t border-border pt-3",
						children: [/* @__PURE__ */ jsxs(Button, {
							variant: "secondary",
							size: "sm",
							className: "h-8 gap-1.5 text-[12px]",
							onClick: () => setCreateDrawerOpen(true),
							disabled: noCreatePermission,
							title: noCreatePermission ? t("You don't have permission to create API keys.") : void 0,
							children: [/* @__PURE__ */ jsx(Plus, { className: "h-3.5 w-3.5" }), t("Create S3 API key")]
						}), /* @__PURE__ */ jsxs(Button, {
							variant: "secondary",
							size: "sm",
							className: "h-8 gap-1.5 text-[12px]",
							onClick: onViewApiKeys,
							children: [/* @__PURE__ */ jsx(Key, { className: "h-3.5 w-3.5" }), t("View API keys")]
						})]
					})
				]
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "min-w-0 min-h-0 flex flex-col flex-1",
			children: selectedFile ? /* @__PURE__ */ jsx(ConnectCodeExample, {
				code: selectedFile.code,
				language: selectedFile.language ?? "plaintext",
				tabs: codeFileTabs,
				activeTabId: String(selectedFileIndex),
				onTabChange: (id) => setSelectedFileIndex(Number(id)),
				selectorAriaLabel: t("Select file"),
				fixedHeight: "100%",
				className: "flex-1 min-h-0"
			}) : null
		})]
	}), /* @__PURE__ */ jsx(ApiKeyDrawer, {
		open: createDrawerOpen,
		onOpenChange: (open) => {
			setCreateDrawerOpen(open);
			if (!open) setCreatedKeySecret(null);
		},
		onSubmit: handleCreateApiKey,
		isLoading: createMutation.isPending,
		createdKeySecret,
		onCopy: handleCopyKey,
		copiedField,
		initialName: initialApiKeyName,
		initialScopes: [...S3_STORAGE_API_KEY_SCOPES]
	})] });
}
var TERRAFORM_PROVIDER_REPO = "https://github.com/appwrite/terraform-provider-appwrite";
var TERRAFORM_REGISTRY_PROVIDER_DOCS = "https://registry.terraform.io/providers/appwrite/appwrite/latest/docs";
var TERRAFORM_API_KEY_DEFAULT_NAME = "Terraform";
function GitHubIcon$1({ className }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		className,
		xmlns: "http://www.w3.org/2000/svg",
		children: /* @__PURE__ */ jsx("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })
	});
}
function buildTerraformExampleFiles(endpoint, projectId) {
	const ep = endpoint || "https://cloud.appwrite.io/v1";
	const pid = projectId || "YOUR_PROJECT_ID";
	const mainTf = `terraform {
  required_providers {
    appwrite = {
      source  = "appwrite/appwrite"
      version = "~> 0.0.4"
    }
  }
}

variable "appwrite_api_key" {
  type        = string
  sensitive   = true
}

provider "appwrite" {
  endpoint   = "${ep}"
  project_id = "${pid}"
  api_key    = var.appwrite_api_key
}`;
	const providersTf = `variable "appwrite_api_key" {
  type      = string
  sensitive = true
}

provider "appwrite" {
  endpoint    = "https://appwrite-instance.com/v1"
  project_id  = "${pid}"
  api_key     = var.appwrite_api_key
  self_signed = true
}`;
	const exportsSh = `export APPWRITE_ENDPOINT="${ep}"
export APPWRITE_PROJECT_ID="${pid}"
export APPWRITE_API_KEY="your-api-key"`;
	return [
		{
			label: "main.tf",
			language: "hcl",
			code: mainTf
		},
		{
			label: "providers.tf",
			language: "hcl",
			code: providersTf,
			footerHint: "Common filename for provider {} blocks. Example: custom endpoint and self_signed when Appwrite is not at cloud.appwrite.io. Secrets stay in tfvars, env, or CI - not in .tf files. One required_providers block per root module (see main.tf)."
		},
		{
			label: "terraform.tfvars",
			language: "hcl",
			code: `# terraform.tfvars (gitignore this file)
# Keys match variable names in main.tf (no TF_VAR_ prefix here).
appwrite_api_key = "your-api-key"`,
			footerHint: "Place next to your .tf files. Terraform loads terraform.tfvars automatically. Add *.tfvars to .gitignore so the API key is never committed."
		},
		{
			label: "exports.sh",
			language: "bash",
			code: exportsSh,
			footerHint: "Shell exports matching APPWRITE_* provider options. When set, you can skip duplicate fields in provider {}. Use secrets in CI, not committed files."
		},
		{
			label: "tablesdb.tf",
			language: "hcl",
			code: `resource "appwrite_tablesdb" "main" {
  id   = "main"
  name = "main"
}

resource "appwrite_tablesdb_table" "users" {
  database_id = appwrite_tablesdb.main.id
  id          = "users"
  name        = "users"
}

resource "appwrite_tablesdb_column" "email" {
  database_id = appwrite_tablesdb.main.id
  table_id    = appwrite_tablesdb_table.users.id
  key         = "email"
  type        = "email"
  required    = true
}

resource "appwrite_tablesdb_index" "email_unique" {
  database_id = appwrite_tablesdb.main.id
  table_id    = appwrite_tablesdb_table.users.id
  key         = "email_unique"
  type        = "unique"
  columns     = [appwrite_tablesdb_column.email.key]
}`,
			footerHint: "TablesDB example: database, table, column, and index. Add alongside your provider configuration."
		},
		{
			label: "functions.tf",
			language: "hcl",
			code: `resource "appwrite_function" "hello_world" {
  name       = "hello-world"
  runtime    = "node-22"
  entrypoint = "index.js"
  commands   = "npm install"
}

resource "appwrite_function" "on_user_create" {
  name       = "on-user-create"
  runtime    = "node-22"
  events     = ["users.*.create"]
  entrypoint = "index.js"
  execute    = ["any"]
}

resource "appwrite_function_variable" "api_url" {
  function_id = appwrite_function.hello_world.id
  key         = "API_URL"
  value       = "https://api.example.com"
}`,
			footerHint: "Functions example: a basic function, an event-driven function, and an environment variable."
		}
	];
}
function TerraformConnectSection({ endpoint, projectId, onViewApiKeys }) {
	const t = useT();
	const { project } = useProject(projectId);
	const { features } = useConsoleProfile();
	const { access } = useOrganizationScopes(project?.teamId);
	const noCreatePermission = !canCreateKey(access, features);
	const createMutation = useCreateApiKey(projectId);
	const [selectedFileIndex, setSelectedFileIndex] = useState(0);
	const [apiKeyMethod, setApiKeyMethod] = useState("env");
	const [createDrawerOpen, setCreateDrawerOpen] = useState(false);
	const [createdKeySecret, setCreatedKeySecret] = useState(null);
	const [copiedField, setCopiedField] = useState(null);
	const codeFiles = useMemo(() => buildTerraformExampleFiles(endpoint, projectId), [endpoint, projectId]);
	const codeFileTabs = useMemo(() => codeFiles.map((file, index) => ({
		id: String(index),
		label: file.label
	})), [codeFiles]);
	useEffect(() => {
		setSelectedFileIndex(0);
	}, [endpoint, projectId]);
	const selectedFile = codeFiles[selectedFileIndex] ?? codeFiles[0];
	const handleCopyKey = (text, field) => {
		navigator.clipboard.writeText(text);
		setCopiedField(field);
		setTimeout(() => setCopiedField(null), 2e3);
	};
	const handleCreateApiKey = (data) => {
		createMutation.mutate(data, {
			onSuccess: (createdKey) => {
				toast.success(t("API key created successfully"));
				if (createdKey?.secret) setCreatedKeySecret(createdKey.secret);
				else setCreateDrawerOpen(false);
			},
			onError: (error) => {
				toast.error(getErrorMessage(error) || t("Failed to create API key"));
			}
		});
	};
	const selectTfvarsExample = () => {
		const index = codeFiles.findIndex((file) => file.label === "terraform.tfvars");
		if (index >= 0) setSelectedFileIndex(index);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-0 flex-1 flex-col",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-[0.9fr_1.4fr] gap-6 pt-4 min-h-0 flex-1",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "space-y-5 min-w-0 min-h-0 overflow-y-auto",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx("h4", {
							className: "text-[13px] font-semibold text-foreground",
							children: t("Infrastructure as code")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-muted-foreground leading-relaxed",
							children: t("Manage Appwrite resources as code. Copy an example on the right, then run terraform init and apply.")
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ jsx("h4", {
									className: "text-[13px] font-semibold text-foreground",
									children: t("API key")
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[13px] text-muted-foreground leading-relaxed",
									children: t("Required for apply. Never commit secrets to Git.")
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap gap-1 rounded-lg border border-border bg-muted/30 p-1 w-fit",
								children: [/* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: () => setApiKeyMethod("env"),
									className: cn("cursor-pointer rounded-md px-2.5 py-1 text-[12px] font-medium transition-colors", apiKeyMethod === "env" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"),
									children: t("Environment variable")
								}), /* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: () => {
										setApiKeyMethod("tfvars");
										selectTfvarsExample();
									},
									className: cn("cursor-pointer rounded-md px-2.5 py-1 text-[12px] font-medium transition-colors", apiKeyMethod === "tfvars" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"),
									children: "terraform.tfvars"
								})]
							}),
							apiKeyMethod === "env" ? /* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(CodeBlock, {
									code: "export TF_VAR_appwrite_api_key=\"your-api-key\"",
									language: "bash",
									label: t("Terminal"),
									showCopy: true
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-muted-foreground leading-relaxed",
									children: t("Name after TF_VAR_ must match the variable (usually lowercase). .env files are not loaded.")
								})]
							}) : /* @__PURE__ */ jsx("p", {
								className: "text-[12px] text-muted-foreground leading-relaxed",
								children: t("Terraform loads terraform.tfvars next to your .tf files automatically. Gitignore *.tfvars.")
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap gap-2",
								children: [/* @__PURE__ */ jsxs(Button, {
									type: "button",
									variant: "secondary",
									size: "sm",
									className: "h-8 gap-1.5 text-[12px]",
									onClick: () => setCreateDrawerOpen(true),
									disabled: noCreatePermission,
									title: noCreatePermission ? t("You don't have permission to create API keys.") : void 0,
									...analyticsAttrs("create-api-key"),
									children: [/* @__PURE__ */ jsx(Plus, { className: "h-3.5 w-3.5" }), t("Create API key")]
								}), /* @__PURE__ */ jsxs(Button, {
									type: "button",
									variant: "secondary",
									size: "sm",
									className: "h-8 gap-1.5 text-[12px]",
									onClick: onViewApiKeys,
									children: [/* @__PURE__ */ jsx(Key, { className: "h-3.5 w-3.5" }), t("View API keys")]
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-2",
						children: [/* @__PURE__ */ jsxs("a", {
							href: TERRAFORM_REGISTRY_PROVIDER_DOCS,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-1.5 link-neutral text-[13px]",
							children: [
								/* @__PURE__ */ jsx(TerraformIcon, {}),
								t("Provider docs on Terraform Registry"),
								/* @__PURE__ */ jsx(ExternalLink, {
									className: "h-3.5 w-3.5 shrink-0",
									"aria-hidden": true
								})
							]
						}), /* @__PURE__ */ jsxs("a", {
							href: TERRAFORM_PROVIDER_REPO,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-1.5 link-neutral text-[13px]",
							children: [
								/* @__PURE__ */ jsx(GitHubIcon$1, { className: "h-4 w-4" }),
								"appwrite/terraform-provider-appwrite",
								/* @__PURE__ */ jsx(ExternalLink, {
									className: "h-3.5 w-3.5 shrink-0",
									"aria-hidden": true
								})
							]
						})]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "min-w-0 min-h-0 flex flex-col gap-2 flex-1",
				children: [selectedFile && /* @__PURE__ */ jsx(ConnectCodeExample, {
					code: selectedFile.code,
					language: selectedFile.language,
					tabs: codeFileTabs,
					activeTabId: String(selectedFileIndex),
					onTabChange: (id) => setSelectedFileIndex(Number(id)),
					selectorAriaLabel: t("Select file"),
					fixedHeight: "100%",
					className: "flex-1 min-h-0"
				}), selectedFile && /* @__PURE__ */ jsx("p", {
					className: "shrink-0 text-[12px] text-muted-foreground pt-2",
					children: selectedFile.label === "main.tf" ? /* @__PURE__ */ jsxs(Fragment, { children: [
						t("Provider uses this project's endpoint and project ID. Run"),
						" ",
						/* @__PURE__ */ jsx("code", {
							className: "rounded bg-muted px-1 py-0.5 text-[11px]",
							children: "terraform init"
						}),
						" ",
						t("then"),
						" ",
						/* @__PURE__ */ jsx("code", {
							className: "rounded bg-muted px-1 py-0.5 text-[11px]",
							children: "terraform apply"
						}),
						"."
					] }) : selectedFile.footerHint ? t(selectedFile.footerHint) : null
				})]
			})]
		}), /* @__PURE__ */ jsx(ApiKeyDrawer, {
			open: createDrawerOpen,
			onOpenChange: (open) => {
				setCreateDrawerOpen(open);
				if (!open) setCreatedKeySecret(null);
			},
			onSubmit: handleCreateApiKey,
			isLoading: createMutation.isPending,
			createdKeySecret,
			onCopy: handleCopyKey,
			copiedField,
			initialName: t(TERRAFORM_API_KEY_DEFAULT_NAME)
		})]
	});
}
var AppwriteClient_default = "import android.content.Context;\n\nimport io.appwrite.Client;\n\npublic final class AppwriteClient {\n  private static volatile Client instance;\n\n  private AppwriteClient() {}\n\n  public static Client get(Context context) {\n    if (instance == null) {\n      synchronized (AppwriteClient.class) {\n        if (instance == null) {\n          String endpoint = BuildConfig.APPWRITE_ENDPOINT;\n          instance = new Client(\n                  context.getApplicationContext(),\n                  endpoint,\n                  endpoint.replaceFirst(\"http\", \"ws\"))\n              .setProject(BuildConfig.APPWRITE_PROJECT_ID);\n        }\n      }\n    }\n    return instance;\n  }\n}\n";
var MainActivity_default = "import android.app.Activity;\nimport android.os.Bundle;\nimport android.view.View;\nimport android.widget.Button;\nimport android.widget.LinearLayout;\nimport android.widget.TextView;\n\nimport io.appwrite.coroutines.CoroutineCallback;\nimport io.appwrite.services.Account;\n\npublic class MainActivity extends Activity {\n  @Override\n  protected void onCreate(Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n    showHome();\n  }\n\n  void showHome() {\n    setContentView(createHome());\n  }\n\n  void showSignIn() {\n    setContentView(SignIn.create(this, this::showHome, this::showSignUp));\n  }\n\n  void showSignUp() {\n    setContentView(SignUp.create(this, this::showHome, this::showSignIn));\n  }\n\n  private View createHome() {\n    LinearLayout layout = new LinearLayout(this);\n    layout.setOrientation(LinearLayout.VERTICAL);\n    int pad = (int) (24 * getResources().getDisplayMetrics().density);\n    layout.setPadding(pad, pad, pad, pad);\n\n    TextView status = new TextView(this);\n    status.setText(\"Loading...\");\n    layout.addView(status);\n\n    Account account = new Account(AppwriteClient.get(this));\n    try {\n      account.get(new CoroutineCallback<>((user, error) ->\n          layout.post(() -> {\n            layout.removeAllViews();\n            if (user == null) {\n              addSignedOutHome(layout);\n            } else {\n              addSignedInHome(layout, user.getName());\n            }\n          })));\n    } catch (Exception ignored) {}\n    return layout;\n  }\n\n  private void addSignedOutHome(LinearLayout layout) {\n    TextView cta = new TextView(this);\n    cta.setText(\"Sign in to get started.\");\n    layout.addView(cta);\n\n    Button signIn = new Button(this);\n    signIn.setText(\"Sign in\");\n    signIn.setAllCaps(false);\n    signIn.setOnClickListener(v -> showSignIn());\n    layout.addView(signIn);\n\n    Button signUp = new Button(this);\n    signUp.setText(\"Sign up\");\n    signUp.setAllCaps(false);\n    signUp.setOnClickListener(v -> showSignUp());\n    layout.addView(signUp);\n  }\n\n  private void addSignedInHome(LinearLayout layout, String name) {\n    TextView greeting = new TextView(this);\n    greeting.setText(\"Hello, \" + name);\n    layout.addView(greeting);\n\n    Button signOut = new Button(this);\n    signOut.setText(\"Sign out\");\n    signOut.setAllCaps(false);\n    signOut.setOnClickListener(v -> {\n      Account account = new Account(AppwriteClient.get(this));\n      try {\n        account.deleteSession(\"current\",\n            new CoroutineCallback<>((result, error) ->\n                layout.post(() -> {\n                  if (error == null) showHome();\n                })));\n      } catch (Exception ignored) {}\n    });\n    layout.addView(signOut);\n  }\n}\n";
var SignIn_default = "import android.content.Context;\nimport android.text.InputType;\nimport android.view.View;\nimport android.widget.Button;\nimport android.widget.EditText;\nimport android.widget.LinearLayout;\nimport android.widget.TextView;\n\nimport io.appwrite.coroutines.CoroutineCallback;\nimport io.appwrite.services.Account;\n\npublic final class SignIn {\n  private SignIn() {}\n\n  public static View create(\n      Context context, Runnable onSignedIn, Runnable onGoToSignUp) {\n    LinearLayout layout = new LinearLayout(context);\n    layout.setOrientation(LinearLayout.VERTICAL);\n    int pad = (int) (24 * context.getResources().getDisplayMetrics().density);\n    layout.setPadding(pad, pad, pad, pad);\n\n    TextView heading = new TextView(context);\n    heading.setText(\"Sign in\");\n\n    TextView error = new TextView(context);\n    error.setVisibility(View.GONE);\n\n    EditText email = new EditText(context);\n    email.setHint(\"Email\");\n    email.setInputType(InputType.TYPE_CLASS_TEXT\n        | InputType.TYPE_TEXT_VARIATION_EMAIL_ADDRESS);\n\n    EditText password = new EditText(context);\n    password.setHint(\"Password\");\n    password.setInputType(InputType.TYPE_CLASS_TEXT\n        | InputType.TYPE_TEXT_VARIATION_PASSWORD);\n\n    Button submit = new Button(context);\n    submit.setText(\"Sign in\");\n    submit.setAllCaps(false);\n    submit.setOnClickListener(v -> {\n      String emailValue = email.getText().toString();\n      String passwordValue = password.getText().toString();\n      if (emailValue.isEmpty() || passwordValue.isEmpty()) return;\n      error.setVisibility(View.GONE);\n\n      Account account = new Account(AppwriteClient.get(context));\n      try {\n        account.createEmailPasswordSession(emailValue, passwordValue,\n            new CoroutineCallback<>((session, e) -> layout.post(() -> {\n              if (e == null) {\n                onSignedIn.run();\n              } else {\n                showError(error, e, \"Sign in failed\");\n              }\n            })));\n      } catch (Exception ignored) {}\n    });\n\n    TextView hint = new TextView(context);\n    hint.setText(\"No account?\");\n\n    Button goToSignUp = new Button(context);\n    goToSignUp.setText(\"Sign up\");\n    goToSignUp.setAllCaps(false);\n    goToSignUp.setOnClickListener(v -> onGoToSignUp.run());\n\n    layout.addView(heading);\n    layout.addView(error);\n    layout.addView(email);\n    layout.addView(password);\n    layout.addView(submit);\n    layout.addView(hint);\n    layout.addView(goToSignUp);\n    return layout;\n  }\n\n  private static void showError(TextView error, Throwable e, String fallback) {\n    error.setText(e.getMessage() != null ? e.getMessage() : fallback);\n    error.setVisibility(View.VISIBLE);\n  }\n}\n";
var SignUp_default = "import android.content.Context;\nimport android.text.InputType;\nimport android.view.View;\nimport android.widget.Button;\nimport android.widget.EditText;\nimport android.widget.LinearLayout;\nimport android.widget.TextView;\n\nimport io.appwrite.ID;\nimport io.appwrite.coroutines.CoroutineCallback;\nimport io.appwrite.services.Account;\n\npublic final class SignUp {\n  private SignUp() {}\n\n  public static View create(\n      Context context, Runnable onSignedUp, Runnable onGoToSignIn) {\n    LinearLayout layout = new LinearLayout(context);\n    layout.setOrientation(LinearLayout.VERTICAL);\n    int pad = (int) (24 * context.getResources().getDisplayMetrics().density);\n    layout.setPadding(pad, pad, pad, pad);\n\n    TextView heading = new TextView(context);\n    heading.setText(\"Sign up\");\n\n    TextView error = new TextView(context);\n    error.setVisibility(View.GONE);\n\n    EditText name = new EditText(context);\n    name.setHint(\"Name\");\n    name.setInputType(InputType.TYPE_CLASS_TEXT);\n\n    EditText email = new EditText(context);\n    email.setHint(\"Email\");\n    email.setInputType(InputType.TYPE_CLASS_TEXT\n        | InputType.TYPE_TEXT_VARIATION_EMAIL_ADDRESS);\n\n    EditText password = new EditText(context);\n    password.setHint(\"Password\");\n    password.setInputType(InputType.TYPE_CLASS_TEXT\n        | InputType.TYPE_TEXT_VARIATION_PASSWORD);\n\n    Button submit = new Button(context);\n    submit.setText(\"Sign up\");\n    submit.setAllCaps(false);\n    submit.setOnClickListener(v -> {\n      String emailValue = email.getText().toString();\n      String passwordValue = password.getText().toString();\n      if (emailValue.isEmpty() || passwordValue.isEmpty()) return;\n      String nameValue = name.getText().toString().trim();\n      error.setVisibility(View.GONE);\n\n      Account account = new Account(AppwriteClient.get(context));\n      try {\n        account.create(\n            ID.Companion.unique(7),\n            emailValue,\n            passwordValue,\n            nameValue.isEmpty() ? null : nameValue,\n            new CoroutineCallback<>((user, e) -> {\n              if (e != null) {\n                layout.post(() -> showError(error, e, \"Sign up failed\"));\n                return;\n              }\n              try {\n                account.createEmailPasswordSession(emailValue, passwordValue,\n                    new CoroutineCallback<>((session, e2) -> layout.post(() -> {\n                      if (e2 == null) {\n                        onSignedUp.run();\n                      } else {\n                        showError(error, e2, \"Sign up failed\");\n                      }\n                    })));\n              } catch (Exception ignored) {}\n            }));\n      } catch (Exception ignored) {}\n    });\n\n    TextView hint = new TextView(context);\n    hint.setText(\"Already have an account?\");\n\n    Button goToSignIn = new Button(context);\n    goToSignIn.setText(\"Sign in\");\n    goToSignIn.setAllCaps(false);\n    goToSignIn.setOnClickListener(v -> onGoToSignIn.run());\n\n    layout.addView(heading);\n    layout.addView(error);\n    layout.addView(name);\n    layout.addView(email);\n    layout.addView(password);\n    layout.addView(submit);\n    layout.addView(hint);\n    layout.addView(goToSignIn);\n    return layout;\n  }\n\n  private static void showError(TextView error, Throwable e, String fallback) {\n    error.setText(e.getMessage() != null ? e.getMessage() : fallback);\n    error.setVisibility(View.VISIBLE);\n  }\n}\n";
var build_gradle_default = "android {\n  buildFeatures {\n    buildConfig = true\n  }\n\n  defaultConfig {\n    buildConfigField(\n      \"String\",\n      \"APPWRITE_ENDPOINT\",\n      \"\\\"${project.property(\"APPWRITE_ENDPOINT\")}\\\"\",\n    )\n    buildConfigField(\n      \"String\",\n      \"APPWRITE_PROJECT_ID\",\n      \"\\\"${project.property(\"APPWRITE_PROJECT_ID\")}\\\"\",\n    )\n  }\n}\n\ndependencies {\n  implementation(\"io.appwrite:sdk-for-android:26.0.0\")\n}\n";
var AppwriteClient_default$1 = "import android.content.Context\nimport io.appwrite.Client\n\nobject AppwriteClient {\n  @Volatile private var instance: Client? = null\n\n  fun get(context: Context): Client =\n    instance ?: synchronized(this) {\n      instance ?: Client(context.applicationContext)\n        .setEndpoint(BuildConfig.APPWRITE_ENDPOINT)\n        .setProject(BuildConfig.APPWRITE_PROJECT_ID)\n        .also { instance = it }\n    }\n}\n";
var MainActivity_default$1 = "import android.os.Bundle\nimport androidx.activity.ComponentActivity\nimport androidx.activity.compose.setContent\nimport androidx.compose.foundation.layout.Column\nimport androidx.compose.foundation.layout.padding\nimport androidx.compose.material3.Text\nimport androidx.compose.material3.TextButton\nimport androidx.compose.runtime.Composable\nimport androidx.compose.runtime.LaunchedEffect\nimport androidx.compose.runtime.getValue\nimport androidx.compose.runtime.mutableStateOf\nimport androidx.compose.runtime.remember\nimport androidx.compose.runtime.rememberCoroutineScope\nimport androidx.compose.runtime.setValue\nimport androidx.compose.ui.Modifier\nimport androidx.compose.ui.platform.LocalContext\nimport androidx.compose.ui.unit.dp\nimport io.appwrite.services.Account\nimport kotlinx.coroutines.launch\n\nclass MainActivity : ComponentActivity() {\n  override fun onCreate(savedInstanceState: Bundle?) {\n    super.onCreate(savedInstanceState)\n    setContent { App() }\n  }\n}\n\n@Composable\nfun App() {\n  var route by remember { mutableStateOf(\"home\") }\n\n  Column(modifier = Modifier.padding(24.dp)) {\n    when (route) {\n      \"sign-in\" -> SignIn(\n        onSignedIn = { route = \"home\" },\n        onGoToSignUp = { route = \"sign-up\" },\n      )\n      \"sign-up\" -> SignUp(\n        onSignedUp = { route = \"home\" },\n        onGoToSignIn = { route = \"sign-in\" },\n      )\n      else -> Home(\n        onGoToSignIn = { route = \"sign-in\" },\n        onGoToSignUp = { route = \"sign-up\" },\n      )\n    }\n  }\n}\n\n@Composable\nfun Home(onGoToSignIn: () -> Unit, onGoToSignUp: () -> Unit) {\n  val context = LocalContext.current\n  val scope = rememberCoroutineScope()\n  var name by remember { mutableStateOf<String?>(null) }\n  var loading by remember { mutableStateOf(true) }\n\n  LaunchedEffect(Unit) {\n    name = try {\n      Account(AppwriteClient.get(context)).get().name\n    } catch (e: Exception) {\n      null\n    }\n    loading = false\n  }\n\n  if (loading) {\n    Text(\"Loading...\")\n    return\n  }\n\n  if (name == null) {\n    Text(\"Sign in to get started.\")\n    TextButton(onClick = onGoToSignIn) { Text(\"Sign in\") }\n    TextButton(onClick = onGoToSignUp) { Text(\"Sign up\") }\n    return\n  }\n\n  Text(\"Hello, $name\")\n  TextButton(\n    onClick = {\n      scope.launch {\n        Account(AppwriteClient.get(context)).deleteSession(\"current\")\n        name = null\n      }\n    },\n  ) { Text(\"Sign out\") }\n}\n";
var SignIn_default$1 = "import androidx.compose.material3.Text\nimport androidx.compose.material3.TextButton\nimport androidx.compose.material3.TextField\nimport androidx.compose.runtime.Composable\nimport androidx.compose.runtime.getValue\nimport androidx.compose.runtime.mutableStateOf\nimport androidx.compose.runtime.remember\nimport androidx.compose.runtime.rememberCoroutineScope\nimport androidx.compose.runtime.setValue\nimport androidx.compose.ui.platform.LocalContext\nimport androidx.compose.ui.text.input.KeyboardType\nimport androidx.compose.ui.text.input.PasswordVisualTransformation\nimport androidx.compose.foundation.text.KeyboardOptions\nimport io.appwrite.services.Account\nimport kotlinx.coroutines.launch\n\n@Composable\nfun SignIn(onSignedIn: () -> Unit, onGoToSignUp: () -> Unit) {\n  val context = LocalContext.current\n  val scope = rememberCoroutineScope()\n  var email by remember { mutableStateOf(\"\") }\n  var password by remember { mutableStateOf(\"\") }\n  var error by remember { mutableStateOf(\"\") }\n\n  Text(\"Sign in\")\n  if (error.isNotEmpty()) Text(error)\n\n  TextField(\n    value = email,\n    onValueChange = { email = it },\n    placeholder = { Text(\"Email\") },\n    keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Email),\n  )\n  TextField(\n    value = password,\n    onValueChange = { password = it },\n    placeholder = { Text(\"Password\") },\n    visualTransformation = PasswordVisualTransformation(),\n  )\n\n  TextButton(\n    onClick = {\n      if (email.isEmpty() || password.isEmpty()) return@TextButton\n      error = \"\"\n      scope.launch {\n        try {\n          Account(AppwriteClient.get(context))\n            .createEmailPasswordSession(email, password)\n          onSignedIn()\n        } catch (e: Exception) {\n          error = e.message ?: \"Sign in failed\"\n        }\n      }\n    },\n  ) { Text(\"Sign in\") }\n\n  Text(\"No account?\")\n  TextButton(onClick = onGoToSignUp) { Text(\"Sign up\") }\n}\n";
var SignUp_default$1 = "import androidx.compose.foundation.text.KeyboardOptions\nimport androidx.compose.material3.Text\nimport androidx.compose.material3.TextButton\nimport androidx.compose.material3.TextField\nimport androidx.compose.runtime.Composable\nimport androidx.compose.runtime.getValue\nimport androidx.compose.runtime.mutableStateOf\nimport androidx.compose.runtime.remember\nimport androidx.compose.runtime.rememberCoroutineScope\nimport androidx.compose.runtime.setValue\nimport androidx.compose.ui.platform.LocalContext\nimport androidx.compose.ui.text.input.KeyboardType\nimport androidx.compose.ui.text.input.PasswordVisualTransformation\nimport io.appwrite.ID\nimport io.appwrite.services.Account\nimport kotlinx.coroutines.launch\n\n@Composable\nfun SignUp(onSignedUp: () -> Unit, onGoToSignIn: () -> Unit) {\n  val context = LocalContext.current\n  val scope = rememberCoroutineScope()\n  var name by remember { mutableStateOf(\"\") }\n  var email by remember { mutableStateOf(\"\") }\n  var password by remember { mutableStateOf(\"\") }\n  var error by remember { mutableStateOf(\"\") }\n\n  Text(\"Sign up\")\n  if (error.isNotEmpty()) Text(error)\n\n  TextField(\n    value = name,\n    onValueChange = { name = it },\n    placeholder = { Text(\"Name\") },\n  )\n  TextField(\n    value = email,\n    onValueChange = { email = it },\n    placeholder = { Text(\"Email\") },\n    keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Email),\n  )\n  TextField(\n    value = password,\n    onValueChange = { password = it },\n    placeholder = { Text(\"Password\") },\n    visualTransformation = PasswordVisualTransformation(),\n  )\n\n  TextButton(\n    onClick = {\n      if (email.isEmpty() || password.isEmpty()) return@TextButton\n      error = \"\"\n      scope.launch {\n        try {\n          val account = Account(AppwriteClient.get(context))\n          account.create(\n            userId = ID.unique(),\n            email = email,\n            password = password,\n            name = name.trim().ifEmpty { null },\n          )\n          account.createEmailPasswordSession(email, password)\n          onSignedUp()\n        } catch (e: Exception) {\n          error = e.message ?: \"Sign up failed\"\n        }\n      }\n    },\n  ) { Text(\"Sign up\") }\n\n  Text(\"Already have an account?\")\n  TextButton(onClick = onGoToSignIn) { Text(\"Sign in\") }\n}\n";
var build_gradle_default$1 = "android {\n  buildFeatures {\n    buildConfig = true\n  }\n\n  defaultConfig {\n    buildConfigField(\n      \"String\",\n      \"APPWRITE_ENDPOINT\",\n      \"\\\"${project.property(\"APPWRITE_ENDPOINT\")}\\\"\",\n    )\n    buildConfigField(\n      \"String\",\n      \"APPWRITE_PROJECT_ID\",\n      \"\\\"${project.property(\"APPWRITE_PROJECT_ID\")}\\\"\",\n    )\n  }\n}\n\ndependencies {\n  implementation(\"io.appwrite:sdk-for-android:26.0.0\")\n}\n";
var AppwriteClient_default$2 = "import Appwrite\nimport Foundation\n\nprivate func config(_ key: String) -> String {\n  guard let value = Bundle.main.object(forInfoDictionaryKey: key) as? String\n  else {\n    fatalError(\"Missing \\(key) in Info.plist\")\n  }\n  return value\n}\n\nlet client = Client()\n  .setEndpoint(config(\"APPWRITE_ENDPOINT\"))\n  .setProject(config(\"APPWRITE_PROJECT_ID\"))\n";
var ContentView_default = "import Appwrite\nimport SwiftUI\n\nstruct ContentView: View {\n  @State private var route = \"home\"\n\n  var body: some View {\n    VStack(spacing: 8) {\n      switch route {\n      case \"sign-in\":\n        SignInView(\n          onSignedIn: { route = \"home\" },\n          onGoToSignUp: { route = \"sign-up\" }\n        )\n      case \"sign-up\":\n        SignUpView(\n          onSignedUp: { route = \"home\" },\n          onGoToSignIn: { route = \"sign-in\" }\n        )\n      default:\n        HomeView(\n          onGoToSignIn: { route = \"sign-in\" },\n          onGoToSignUp: { route = \"sign-up\" }\n        )\n      }\n    }\n    .padding(24)\n  }\n}\n\nstruct HomeView: View {\n  let onGoToSignIn: () -> Void\n  let onGoToSignUp: () -> Void\n\n  @State private var name: String?\n  @State private var loading = true\n\n  var body: some View {\n    Group {\n      if loading {\n        Text(\"Loading...\")\n      } else if let name {\n        Text(\"Hello, \\(name)\")\n        Button(\"Sign out\", action: signOut)\n      } else {\n        Text(\"Sign in to get started.\")\n        Button(\"Sign in\", action: onGoToSignIn)\n        Button(\"Sign up\", action: onGoToSignUp)\n      }\n    }\n    .task {\n      name = try? await Account(client).get().name\n      loading = false\n    }\n  }\n\n  private func signOut() {\n    Task {\n      try? await Account(client).deleteSession(sessionId: \"current\")\n      name = nil\n    }\n  }\n}\n";
var SignInView_default = "import Appwrite\nimport SwiftUI\n\nstruct SignInView: View {\n  let onSignedIn: () -> Void\n  let onGoToSignUp: () -> Void\n\n  @State private var email = \"\"\n  @State private var password = \"\"\n  @State private var error = \"\"\n\n  var body: some View {\n    Text(\"Sign in\")\n    if !error.isEmpty {\n      Text(error)\n    }\n\n    TextField(\"Email\", text: $email)\n      .keyboardType(.emailAddress)\n      .textInputAutocapitalization(.never)\n    SecureField(\"Password\", text: $password)\n\n    Button(\"Sign in\", action: submit)\n\n    HStack {\n      Text(\"No account?\")\n      Button(\"Sign up\", action: onGoToSignUp)\n    }\n  }\n\n  private func submit() {\n    guard !email.isEmpty, !password.isEmpty else { return }\n    error = \"\"\n    Task {\n      do {\n        _ = try await Account(client).createEmailPasswordSession(\n          email: email,\n          password: password\n        )\n        onSignedIn()\n      } catch let error as AppwriteError {\n        self.error = error.message\n      } catch {\n        self.error = \"Sign in failed\"\n      }\n    }\n  }\n}\n";
var SignUpView_default = "import Appwrite\nimport SwiftUI\n\nstruct SignUpView: View {\n  let onSignedUp: () -> Void\n  let onGoToSignIn: () -> Void\n\n  @State private var name = \"\"\n  @State private var email = \"\"\n  @State private var password = \"\"\n  @State private var error = \"\"\n\n  var body: some View {\n    Text(\"Sign up\")\n    if !error.isEmpty {\n      Text(error)\n    }\n\n    TextField(\"Name\", text: $name)\n    TextField(\"Email\", text: $email)\n      .keyboardType(.emailAddress)\n      .textInputAutocapitalization(.never)\n    SecureField(\"Password\", text: $password)\n\n    Button(\"Sign up\", action: submit)\n\n    HStack {\n      Text(\"Already have an account?\")\n      Button(\"Sign in\", action: onGoToSignIn)\n    }\n  }\n\n  private func submit() {\n    guard !email.isEmpty, !password.isEmpty else { return }\n    error = \"\"\n    Task {\n      do {\n        let account = Account(client)\n        let trimmed = name.trimmingCharacters(in: .whitespaces)\n        _ = try await account.create(\n          userId: ID.unique(),\n          email: email,\n          password: password,\n          name: trimmed.isEmpty ? nil : trimmed\n        )\n        _ = try await account.createEmailPasswordSession(\n          email: email,\n          password: password\n        )\n        onSignedUp()\n      } catch let error as AppwriteError {\n        self.error = error.message\n      } catch {\n        self.error = \"Sign up failed\"\n      }\n    }\n  }\n}\n";
var src_default = "import { Elysia } from 'elysia'\nimport { client } from './lib/appwrite'\nimport { Project } from 'node-appwrite'\n\nconst project = new Project(client)\n\nconst app = new Elysia()\n  .patch('/v1/policies', () =>\n    project.updatePasswordStrengthPolicy({\n      min: 8,\n      uppercase: true,\n      number: true,\n      symbols: true\n    })\n  )\n  .get('/v1/policies', () => project.listPolicies())\n  .listen(3000)\n\nconsole.log(`Listening on http://localhost:${app.server?.port}`)\n";
var appwrite_default = "import { Client } from 'node-appwrite'\n\nconst client = new Client()\n  .setEndpoint(process.env.APPWRITE_ENDPOINT)\n  .setProject(process.env.APPWRITE_PROJECT_ID)\n  .setKey(process.env.APPWRITE_API_KEY)\n\nexport { client }\n";
var src_default$1 = "import { Hono } from 'hono'\nimport { client } from './lib/appwrite'\nimport { Project } from 'node-appwrite'\n\nconst app = new Hono()\nconst project = new Project(client)\n\napp.patch('/v1/policies', async (c) => {\n  const policy = await project.updatePasswordStrengthPolicy({\n    min: 8,\n    uppercase: true,\n    number: true,\n    symbols: true\n  })\n  return c.json(policy)\n})\n\napp.get('/v1/policies', async (c) => {\n  return c.json(await project.listPolicies())\n})\n\nexport default app\n";
var appwrite_default$1 = "import { Client } from 'node-appwrite'\n\nconst client = new Client()\n  .setEndpoint(process.env.APPWRITE_ENDPOINT)\n  .setProject(process.env.APPWRITE_PROJECT_ID)\n  .setKey(process.env.APPWRITE_API_KEY)\n\nexport { client }\n";
var src_default$2 = "import { Client, Project } from 'node-appwrite'\n\nconst client = new Client()\n  .setEndpoint(process.env.APPWRITE_ENDPOINT)\n  .setProject(process.env.APPWRITE_PROJECT_ID)\n  .setKey(process.env.APPWRITE_API_KEY)\n\nconst project = new Project(client)\n\nconst policy = await project.updatePasswordStrengthPolicy({\n  min: 8,\n  uppercase: true,\n  number: true,\n  symbols: true\n})\n\nconsole.log(JSON.stringify(policy, null, 2))\n\nconst policies = await project.listPolicies()\n\nconsole.log(JSON.stringify(policies, null, 2))\n";
var _middleware_default = "import 'dart:io' show Platform;\n\nimport 'package:dart_appwrite/dart_appwrite.dart' hide Response;\nimport 'package:dart_frog/dart_frog.dart';\n\nfinal _client = Client()\n    .setEndpoint(Platform.environment['APPWRITE_ENDPOINT']!)\n    .setProject(Platform.environment['APPWRITE_PROJECT_ID']!)\n    .setKey(Platform.environment['APPWRITE_API_KEY']!);\n\nHandler middleware(Handler handler) {\n  return handler.use(provider<Project>((_) => Project(_client)));\n}\n";
var policies_default = "import 'package:dart_appwrite/dart_appwrite.dart' hide Response;\nimport 'package:dart_frog/dart_frog.dart';\n\nFuture<Response> onRequest(RequestContext context) async {\n  final project = context.read<Project>();\n\n  if (context.request.method == HttpMethod.patch) {\n    final policy = await project.updatePasswordStrengthPolicy(\n      min: 8,\n      uppercase: true,\n      number: true,\n      symbols: true,\n    );\n\n    return Response.json(body: policy.toMap());\n  }\n\n  final policies = await project.listPolicies();\n\n  return Response.json(body: policies.toMap());\n}\n";
var server_default = "import 'package:serverpod/serverpod.dart';\n\nimport 'src/generated/endpoints.dart';\nimport 'src/generated/protocol.dart';\nimport 'src/routes/policies_route.dart';\n\nvoid run(List<String> args) async {\n  final pod = Serverpod(args, Protocol(), Endpoints());\n\n  pod.webServer.addRoute(PoliciesRoute(), '/v1/policies');\n\n  await pod.start();\n}\n";
var appwrite_default$2 = "import 'dart:io' show Platform;\n\nimport 'package:dart_appwrite/dart_appwrite.dart';\n\nfinal appwriteClient = Client()\n    .setEndpoint(Platform.environment['APPWRITE_ENDPOINT']!)\n    .setProject(Platform.environment['APPWRITE_PROJECT_ID']!)\n    .setKey(Platform.environment['APPWRITE_API_KEY']!);\n\nfinal appwriteProject = Project(appwriteClient);\n";
var policies_route_default = "import 'dart:convert';\n\nimport 'package:relic/relic.dart';\nimport 'package:serverpod/serverpod.dart';\n\nimport '../appwrite.dart';\n\nclass PoliciesRoute extends Route {\n  PoliciesRoute() : super(methods: {Method.get, Method.patch});\n\n  @override\n  Future<Result> handleCall(Session session, Request request) async {\n    if (request.method == Method.patch) {\n      final policy = await appwriteProject.updatePasswordStrengthPolicy(\n        min: 8,\n        uppercase: true,\n        number: true,\n        symbols: true,\n      );\n\n      return _json(policy.toMap());\n    }\n\n    final policies = await appwriteProject.listPolicies();\n\n    return _json(policies.toMap());\n  }\n\n  Response _json(Map<String, dynamic> body) => Response.ok(\n        body: Body.fromString(jsonEncode(body), mimeType: MimeType.json),\n      );\n}\n";
var main_default = "import 'dart:convert' show jsonEncode;\nimport 'dart:io' show Platform;\nimport 'package:dart_appwrite/dart_appwrite.dart';\n\nfinal client = Client()\n  ..setEndpoint(Platform.environment['APPWRITE_ENDPOINT']!)\n  ..setProject(Platform.environment['APPWRITE_PROJECT_ID']!)\n  ..setKey(Platform.environment['APPWRITE_API_KEY']!);\n\nvoid main() async {\n  final project = Project(client);\n\n  final policy = await project.updatePasswordStrengthPolicy(\n    min: 8,\n    uppercase: true,\n    number: true,\n    symbols: true,\n  );\n\n  print(jsonEncode(policy.toMap()));\n\n  final policies = await project.listPolicies();\n\n  print(jsonEncode(policies.toMap()));\n}\n";
var appwrite_default$3 = "import { Client } from \"{{DENO_SDK_SPECIFIER}}\"\n\nconst client = new Client()\n  .setEndpoint(Deno.env.get(\"APPWRITE_ENDPOINT\")!)\n  .setProject(Deno.env.get(\"APPWRITE_PROJECT_ID\")!)\n  .setKey(Deno.env.get(\"APPWRITE_API_KEY\")!)\n\nexport { client }\n";
var policies_default$1 = "import { Handlers } from \"$fresh/server.ts\"\nimport { Project } from \"{{DENO_SDK_SPECIFIER}}\"\nimport { client } from \"../../lib/appwrite.ts\"\n\nconst project = new Project(client)\n\nexport const handler: Handlers = {\n  async PATCH() {\n    const policy = await project.updatePasswordStrengthPolicy({\n      min: 8,\n      uppercase: true,\n      number: true,\n      symbols: true\n    })\n    return Response.json(policy)\n  },\n  async GET() {\n    return Response.json(await project.listPolicies())\n  },\n}\n";
var appwrite_default$4 = "import { Client } from \"{{DENO_SDK_SPECIFIER}}\"\n\nconst client = new Client()\n  .setEndpoint(Deno.env.get(\"APPWRITE_ENDPOINT\")!)\n  .setProject(Deno.env.get(\"APPWRITE_PROJECT_ID\")!)\n  .setKey(Deno.env.get(\"APPWRITE_API_KEY\")!)\n\nexport { client }\n";
var main_default$1 = "import { Hono } from \"jsr:@hono/hono\"\nimport { Project } from \"{{DENO_SDK_SPECIFIER}}\"\nimport { client } from \"./lib/appwrite.ts\"\n\nconst app = new Hono()\nconst project = new Project(client)\n\napp.patch(\"/v1/policies\", async (c) => {\n  const policy = await project.updatePasswordStrengthPolicy({\n    min: 8,\n    uppercase: true,\n    number: true,\n    symbols: true\n  })\n  return c.json(policy)\n})\n\napp.get(\"/v1/policies\", async (c) => {\n  return c.json(await project.listPolicies())\n})\n\nDeno.serve(app.fetch)\n";
var main_default$2 = "import { Client, Project } from \"{{DENO_SDK_SPECIFIER}}\"\n\nconst client = new Client()\n  .setEndpoint(Deno.env.get(\"APPWRITE_ENDPOINT\")!)\n  .setProject(Deno.env.get(\"APPWRITE_PROJECT_ID\")!)\n  .setKey(Deno.env.get(\"APPWRITE_API_KEY\")!)\n\nconst project = new Project(client)\n\nconst policy = await project.updatePasswordStrengthPolicy({\n  min: 8,\n  uppercase: true,\n  number: true,\n  symbols: true\n})\n\nconsole.log(JSON.stringify(policy, null, 2))\n\nconst policies = await project.listPolicies()\n\nconsole.log(JSON.stringify(policies, null, 2))\n";
var PoliciesController_default = "using Appwrite.Services;\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace ConnectQa.Controllers;\n\n[ApiController]\n[Route(\"v1/policies\")]\npublic class PoliciesController(Project project) : ControllerBase\n{\n  [HttpPatch]\n  public async Task<IActionResult> UpdatePolicy()\n  {\n    var policy = await project.UpdatePasswordStrengthPolicy(\n      min: 8,\n      uppercase: true,\n      number: true,\n      symbols: true\n    );\n\n    return Ok(policy.ToMap());\n  }\n\n  [HttpGet]\n  public async Task<IActionResult> ListPolicies()\n  {\n    var policies = await project.ListPolicies();\n\n    return Ok(policies.ToMap());\n  }\n}\n";
var Program_default = "using Appwrite;\nusing Appwrite.Services;\n\nvar builder = WebApplication.CreateBuilder(args);\n\nbuilder.Services.AddControllers();\nbuilder.Services.AddSingleton(new Client()\n  .SetEndpoint(Environment.GetEnvironmentVariable(\"APPWRITE_ENDPOINT\")!)\n  .SetProject(Environment.GetEnvironmentVariable(\"APPWRITE_PROJECT_ID\")!)\n  .SetKey(Environment.GetEnvironmentVariable(\"APPWRITE_API_KEY\")!));\nbuilder.Services.AddSingleton<Project>();\n\nvar app = builder.Build();\n\napp.MapControllers();\n\napp.Run(\"http://localhost:5000\");\n";
var Program_default$1 = "using Appwrite;\nusing Appwrite.Services;\n\nvar builder = WebApplication.CreateBuilder(args);\n\nbuilder.Services.AddSingleton(new Project(new Client()\n  .SetEndpoint(Environment.GetEnvironmentVariable(\"APPWRITE_ENDPOINT\")!)\n  .SetProject(Environment.GetEnvironmentVariable(\"APPWRITE_PROJECT_ID\")!)\n  .SetKey(Environment.GetEnvironmentVariable(\"APPWRITE_API_KEY\")!)));\n\nvar app = builder.Build();\n\napp.MapPatch(\"/v1/policies\", async (Project project) =>\n{\n  var policy = await project.UpdatePasswordStrengthPolicy(\n    min: 8,\n    uppercase: true,\n    number: true,\n    symbols: true\n  );\n\n  return Results.Ok(policy.ToMap());\n});\n\napp.MapGet(\"/v1/policies\", async (Project project) =>\n{\n  var policies = await project.ListPolicies();\n\n  return Results.Ok(policies.ToMap());\n});\n\napp.Run(\"http://localhost:5000\");\n";
var Program_default$2 = "using System.Text.Json;\nusing Appwrite;\nusing Appwrite.Services;\n\nvar json = new JsonSerializerOptions { WriteIndented = true };\n\nvar client = new Client()\n  .SetEndpoint(Environment.GetEnvironmentVariable(\"APPWRITE_ENDPOINT\")!)\n  .SetProject(Environment.GetEnvironmentVariable(\"APPWRITE_PROJECT_ID\")!)\n  .SetKey(Environment.GetEnvironmentVariable(\"APPWRITE_API_KEY\")!);\n\nvar project = new Project(client);\n\nvar policy = await project.UpdatePasswordStrengthPolicy(\n  min: 8,\n  uppercase: true,\n  number: true,\n  symbols: true\n);\n\nConsole.WriteLine(JsonSerializer.Serialize(policy.ToMap(), json));\n\nvar policies = await project.ListPolicies();\n\nConsole.WriteLine(JsonSerializer.Serialize(policies.ToMap(), json));\n";
var appwrite_client_default = "import 'package:appwrite/appwrite.dart';\n\nconst _endpoint = String.fromEnvironment('APPWRITE_ENDPOINT');\nconst _projectId = String.fromEnvironment('APPWRITE_PROJECT_ID');\n\nfinal client = Client()\n  ..setEndpoint(_endpoint)\n  ..setProject(_projectId);\n";
var main_default$3 = "import 'package:flutter/material.dart';\nimport 'package:appwrite/appwrite.dart';\nimport 'appwrite_client.dart';\nimport 'sign_in.dart';\nimport 'sign_up.dart';\n\nvoid main() => runApp(const MyApp());\n\nclass MyApp extends StatelessWidget {\n  const MyApp({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return const MaterialApp(home: Scaffold(body: SafeArea(child: Router())));\n  }\n}\n\nclass Router extends StatefulWidget {\n  const Router({super.key});\n\n  @override\n  State<Router> createState() => _RouterState();\n}\n\nclass _RouterState extends State<Router> {\n  String route = 'home';\n\n  void go(String next) => setState(() => route = next);\n\n  @override\n  Widget build(BuildContext context) {\n    if (route == 'sign-in') {\n      return SignIn(\n        onSignedIn: () => go('home'),\n        onGoToSignUp: () => go('sign-up'),\n      );\n    }\n    if (route == 'sign-up') {\n      return SignUp(\n        onSignedUp: () => go('home'),\n        onGoToSignIn: () => go('sign-in'),\n      );\n    }\n    return Home(\n      onGoToSignIn: () => go('sign-in'),\n      onGoToSignUp: () => go('sign-up'),\n    );\n  }\n}\n\nclass Home extends StatefulWidget {\n  const Home({\n    super.key,\n    required this.onGoToSignIn,\n    required this.onGoToSignUp,\n  });\n\n  final VoidCallback onGoToSignIn;\n  final VoidCallback onGoToSignUp;\n\n  @override\n  State<Home> createState() => _HomeState();\n}\n\nclass _HomeState extends State<Home> {\n  String? name;\n  bool loading = true;\n\n  @override\n  void initState() {\n    super.initState();\n    _load();\n  }\n\n  Future<void> _load() async {\n    try {\n      final user = await Account(client).get();\n      if (mounted) setState(() => name = user.name);\n    } catch (_) {\n      if (mounted) setState(() => name = null);\n    } finally {\n      if (mounted) setState(() => loading = false);\n    }\n  }\n\n  Future<void> _signOut() async {\n    await Account(client).deleteSession(sessionId: 'current');\n    if (mounted) setState(() => name = null);\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    if (loading) {\n      return const Center(child: Text('Loading...'));\n    }\n\n    if (name == null) {\n      return Column(\n        mainAxisAlignment: MainAxisAlignment.center,\n        children: [\n          const Text('Sign in to get started.'),\n          TextButton(\n            onPressed: widget.onGoToSignIn,\n            child: const Text('Sign in'),\n          ),\n          TextButton(\n            onPressed: widget.onGoToSignUp,\n            child: const Text('Sign up'),\n          ),\n        ],\n      );\n    }\n\n    return Column(\n      mainAxisAlignment: MainAxisAlignment.center,\n      children: [\n        Text('Hello, $name'),\n        TextButton(onPressed: _signOut, child: const Text('Sign out')),\n      ],\n    );\n  }\n}\n";
var sign_in_default = "import 'package:flutter/material.dart';\nimport 'package:appwrite/appwrite.dart';\nimport 'appwrite_client.dart';\n\nclass SignIn extends StatefulWidget {\n  const SignIn({\n    super.key,\n    required this.onSignedIn,\n    required this.onGoToSignUp,\n  });\n\n  final VoidCallback onSignedIn;\n  final VoidCallback onGoToSignUp;\n\n  @override\n  State<SignIn> createState() => _SignInState();\n}\n\nclass _SignInState extends State<SignIn> {\n  final email = TextEditingController();\n  final password = TextEditingController();\n  String error = '';\n\n  @override\n  void dispose() {\n    email.dispose();\n    password.dispose();\n    super.dispose();\n  }\n\n  Future<void> _submit() async {\n    if (email.text.isEmpty || password.text.isEmpty) return;\n    setState(() => error = '');\n    try {\n      await Account(client).createEmailPasswordSession(\n        email: email.text,\n        password: password.text,\n      );\n      widget.onSignedIn();\n    } on AppwriteException catch (e) {\n      setState(() => error = e.message ?? 'Sign in failed');\n    } catch (_) {\n      setState(() => error = 'Sign in failed');\n    }\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return ListView(\n      padding: const EdgeInsets.all(24),\n      children: [\n        const Text('Sign in'),\n        if (error.isNotEmpty) Text(error),\n        TextField(\n          controller: email,\n          keyboardType: TextInputType.emailAddress,\n          autocorrect: false,\n          decoration: const InputDecoration(hintText: 'Email'),\n        ),\n        TextField(\n          controller: password,\n          obscureText: true,\n          decoration: const InputDecoration(hintText: 'Password'),\n        ),\n        TextButton(onPressed: _submit, child: const Text('Sign in')),\n        Row(\n          children: [\n            const Text('No account? '),\n            TextButton(\n              onPressed: widget.onGoToSignUp,\n              child: const Text('Sign up'),\n            ),\n          ],\n        ),\n      ],\n    );\n  }\n}\n";
var sign_up_default = "import 'package:flutter/material.dart';\nimport 'package:appwrite/appwrite.dart';\nimport 'appwrite_client.dart';\n\nclass SignUp extends StatefulWidget {\n  const SignUp({\n    super.key,\n    required this.onSignedUp,\n    required this.onGoToSignIn,\n  });\n\n  final VoidCallback onSignedUp;\n  final VoidCallback onGoToSignIn;\n\n  @override\n  State<SignUp> createState() => _SignUpState();\n}\n\nclass _SignUpState extends State<SignUp> {\n  final name = TextEditingController();\n  final email = TextEditingController();\n  final password = TextEditingController();\n  String error = '';\n\n  @override\n  void dispose() {\n    name.dispose();\n    email.dispose();\n    password.dispose();\n    super.dispose();\n  }\n\n  Future<void> _submit() async {\n    if (email.text.isEmpty || password.text.isEmpty) return;\n    setState(() => error = '');\n    try {\n      final account = Account(client);\n      await account.create(\n        userId: ID.unique(),\n        email: email.text,\n        password: password.text,\n        name: name.text.trim().isEmpty ? null : name.text.trim(),\n      );\n      await account.createEmailPasswordSession(\n        email: email.text,\n        password: password.text,\n      );\n      widget.onSignedUp();\n    } on AppwriteException catch (e) {\n      setState(() => error = e.message ?? 'Sign up failed');\n    } catch (_) {\n      setState(() => error = 'Sign up failed');\n    }\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return ListView(\n      padding: const EdgeInsets.all(24),\n      children: [\n        const Text('Sign up'),\n        if (error.isNotEmpty) Text(error),\n        TextField(\n          controller: name,\n          decoration: const InputDecoration(hintText: 'Name'),\n        ),\n        TextField(\n          controller: email,\n          keyboardType: TextInputType.emailAddress,\n          autocorrect: false,\n          decoration: const InputDecoration(hintText: 'Email'),\n        ),\n        TextField(\n          controller: password,\n          obscureText: true,\n          decoration: const InputDecoration(hintText: 'Password'),\n        ),\n        TextButton(onPressed: _submit, child: const Text('Sign up')),\n        Row(\n          children: [\n            const Text('Already have an account? '),\n            TextButton(\n              onPressed: widget.onGoToSignIn,\n              child: const Text('Sign in'),\n            ),\n          ],\n        ),\n      ],\n    );\n  }\n}\n";
var appwrite_default$5 = "package main\n\nimport (\n  \"os\"\n\n  \"github.com/appwrite/sdk-for-go/v6/appwrite\"\n  \"github.com/appwrite/sdk-for-go/v6/client\"\n)\n\nfunc newClient() client.Client {\n  return appwrite.NewClient(\n    appwrite.WithEndpoint(os.Getenv(\"APPWRITE_ENDPOINT\")),\n    appwrite.WithProject(os.Getenv(\"APPWRITE_PROJECT_ID\")),\n    appwrite.WithKey(os.Getenv(\"APPWRITE_API_KEY\")),\n  )\n}\n";
var main_default$4 = "package main\n\nimport (\n  \"net/http\"\n\n  \"github.com/appwrite/sdk-for-go/v6/appwrite\"\n  \"github.com/labstack/echo/v4\"\n)\n\nfunc main() {\n  project := appwrite.NewProject(newClient())\n  e := echo.New()\n\n  e.PATCH(\"/v1/policies\", func(c echo.Context) error {\n    policy, err := project.UpdatePasswordStrengthPolicy(\n      project.WithUpdatePasswordStrengthPolicyMin(8),\n      project.WithUpdatePasswordStrengthPolicyUppercase(true),\n      project.WithUpdatePasswordStrengthPolicyNumber(true),\n      project.WithUpdatePasswordStrengthPolicySymbols(true),\n    )\n    if err != nil {\n      return err\n    }\n    return c.JSON(http.StatusOK, policy)\n  })\n\n  e.GET(\"/v1/policies\", func(c echo.Context) error {\n    policies, err := project.ListPolicies()\n    if err != nil {\n      return err\n    }\n    return c.JSON(http.StatusOK, policies)\n  })\n\n  e.Logger.Fatal(e.Start(\":3000\"))\n}\n";
var appwrite_default$6 = "package main\n\nimport (\n  \"os\"\n\n  \"github.com/appwrite/sdk-for-go/v6/appwrite\"\n  \"github.com/appwrite/sdk-for-go/v6/client\"\n)\n\nfunc newClient() client.Client {\n  return appwrite.NewClient(\n    appwrite.WithEndpoint(os.Getenv(\"APPWRITE_ENDPOINT\")),\n    appwrite.WithProject(os.Getenv(\"APPWRITE_PROJECT_ID\")),\n    appwrite.WithKey(os.Getenv(\"APPWRITE_API_KEY\")),\n  )\n}\n";
var main_default$5 = "package main\n\nimport (\n  \"log\"\n\n  \"github.com/appwrite/sdk-for-go/v6/appwrite\"\n  \"github.com/gofiber/fiber/v3\"\n)\n\nfunc main() {\n  project := appwrite.NewProject(newClient())\n  app := fiber.New()\n\n  app.Patch(\"/v1/policies\", func(c fiber.Ctx) error {\n    policy, err := project.UpdatePasswordStrengthPolicy(\n      project.WithUpdatePasswordStrengthPolicyMin(8),\n      project.WithUpdatePasswordStrengthPolicyUppercase(true),\n      project.WithUpdatePasswordStrengthPolicyNumber(true),\n      project.WithUpdatePasswordStrengthPolicySymbols(true),\n    )\n    if err != nil {\n      return err\n    }\n    return c.JSON(policy)\n  })\n\n  app.Get(\"/v1/policies\", func(c fiber.Ctx) error {\n    policies, err := project.ListPolicies()\n    if err != nil {\n      return err\n    }\n    return c.JSON(policies)\n  })\n\n  log.Fatal(app.Listen(\":3000\"))\n}\n";
var appwrite_default$7 = "package main\n\nimport (\n  \"os\"\n\n  \"github.com/appwrite/sdk-for-go/v6/appwrite\"\n  \"github.com/appwrite/sdk-for-go/v6/client\"\n)\n\nfunc newClient() client.Client {\n  return appwrite.NewClient(\n    appwrite.WithEndpoint(os.Getenv(\"APPWRITE_ENDPOINT\")),\n    appwrite.WithProject(os.Getenv(\"APPWRITE_PROJECT_ID\")),\n    appwrite.WithKey(os.Getenv(\"APPWRITE_API_KEY\")),\n  )\n}\n";
var main_default$6 = "package main\n\nimport (\n  \"net/http\"\n\n  \"github.com/appwrite/sdk-for-go/v6/appwrite\"\n  \"github.com/gin-gonic/gin\"\n)\n\nfunc main() {\n  project := appwrite.NewProject(newClient())\n  router := gin.Default()\n\n  router.PATCH(\"/v1/policies\", func(c *gin.Context) {\n    policy, err := project.UpdatePasswordStrengthPolicy(\n      project.WithUpdatePasswordStrengthPolicyMin(8),\n      project.WithUpdatePasswordStrengthPolicyUppercase(true),\n      project.WithUpdatePasswordStrengthPolicyNumber(true),\n      project.WithUpdatePasswordStrengthPolicySymbols(true),\n    )\n    if err != nil {\n      c.JSON(http.StatusBadGateway, gin.H{\"error\": err.Error()})\n      return\n    }\n    c.JSON(http.StatusOK, policy)\n  })\n\n  router.GET(\"/v1/policies\", func(c *gin.Context) {\n    policies, err := project.ListPolicies()\n    if err != nil {\n      c.JSON(http.StatusBadGateway, gin.H{\"error\": err.Error()})\n      return\n    }\n    c.JSON(http.StatusOK, policies)\n  })\n\n  router.Run(\":3000\")\n}\n";
var main_default$7 = "package main\n\nimport (\n  \"encoding/json\"\n  \"fmt\"\n  \"os\"\n\n  \"github.com/appwrite/sdk-for-go/v6/appwrite\"\n)\n\nfunc main() {\n  client := appwrite.NewClient(\n    appwrite.WithEndpoint(os.Getenv(\"APPWRITE_ENDPOINT\")),\n    appwrite.WithProject(os.Getenv(\"APPWRITE_PROJECT_ID\")),\n    appwrite.WithKey(os.Getenv(\"APPWRITE_API_KEY\")),\n  )\n\n  project := appwrite.NewProject(client)\n\n  policy, err := project.UpdatePasswordStrengthPolicy(\n    project.WithUpdatePasswordStrengthPolicyMin(8),\n    project.WithUpdatePasswordStrengthPolicyUppercase(true),\n    project.WithUpdatePasswordStrengthPolicyNumber(true),\n    project.WithUpdatePasswordStrengthPolicySymbols(true),\n  )\n  if err != nil {\n    panic(err)\n  }\n\n  out, _ := json.MarshalIndent(policy, \"\", \"  \")\n  fmt.Println(string(out))\n\n  policies, err := project.ListPolicies()\n  if err != nil {\n    panic(err)\n  }\n\n  out, _ = json.MarshalIndent(policies, \"\", \"  \")\n  fmt.Println(string(out))\n}\n";
var AppwriteProducer_default = "package com.example;\n\nimport io.appwrite.Client;\nimport io.appwrite.services.Project;\nimport jakarta.enterprise.inject.Produces;\nimport jakarta.inject.Singleton;\n\npublic class AppwriteProducer {\n  @Produces\n  @Singleton\n  public Project project() {\n    Client client = new Client()\n      .setEndpoint(System.getenv(\"APPWRITE_ENDPOINT\"))\n      .setProject(System.getenv(\"APPWRITE_PROJECT_ID\"))\n      .setKey(System.getenv(\"APPWRITE_API_KEY\"));\n\n    return new Project(client);\n  }\n}\n";
var PolicyResource_default = "package com.example;\n\nimport io.appwrite.coroutines.CoroutineCallback;\nimport io.appwrite.exceptions.AppwriteException;\nimport io.appwrite.services.Project;\nimport jakarta.inject.Inject;\nimport jakarta.ws.rs.GET;\nimport jakarta.ws.rs.PATCH;\nimport jakarta.ws.rs.Path;\nimport jakarta.ws.rs.Produces;\nimport jakarta.ws.rs.core.MediaType;\nimport java.util.Map;\nimport java.util.concurrent.CompletableFuture;\nimport java.util.concurrent.CompletionStage;\n\n@Path(\"/v1/policies\")\n@Produces(MediaType.APPLICATION_JSON)\npublic class PolicyResource {\n  @Inject\n  Project project;\n\n  @PATCH\n  public CompletionStage<Map<String, Object>> updatePolicy()\n    throws AppwriteException {\n    CompletableFuture<Map<String, Object>> done = new CompletableFuture<>();\n\n    project.updatePasswordStrengthPolicy(\n      8L,   // min\n      true, // uppercase\n      null, // lowercase\n      true, // number\n      true, // symbols\n      new CoroutineCallback<>((policy, error) -> {\n        if (error != null) {\n          done.completeExceptionally(error);\n        } else {\n          done.complete(policy.toMap());\n        }\n      })\n    );\n\n    return done;\n  }\n\n  @GET\n  public CompletionStage<Map<String, Object>> listPolicies()\n    throws AppwriteException {\n    CompletableFuture<Map<String, Object>> done = new CompletableFuture<>();\n\n    project.listPolicies(\n      null, // queries\n      null, // total\n      new CoroutineCallback<>((policies, error) -> {\n        if (error != null) {\n          done.completeExceptionally(error);\n        } else {\n          done.complete(policies.toMap());\n        }\n      })\n    );\n\n    return done;\n  }\n}\n";
var Application_default = "package com.example;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n@SpringBootApplication\npublic class Application {\n  public static void main(String[] args) {\n    SpringApplication.run(Application.class, args);\n  }\n}\n";
var AppwriteConfig_default = "package com.example;\n\nimport io.appwrite.Client;\nimport io.appwrite.services.Project;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\n@Configuration\npublic class AppwriteConfig {\n  @Bean\n  public Project project() {\n    Client client = new Client()\n      .setEndpoint(System.getenv(\"APPWRITE_ENDPOINT\"))\n      .setProject(System.getenv(\"APPWRITE_PROJECT_ID\"))\n      .setKey(System.getenv(\"APPWRITE_API_KEY\"));\n\n    return new Project(client);\n  }\n}\n";
var PolicyController_default = "package com.example;\n\nimport io.appwrite.coroutines.CoroutineCallback;\nimport io.appwrite.exceptions.AppwriteException;\nimport io.appwrite.services.Project;\nimport java.util.Map;\nimport java.util.concurrent.CompletableFuture;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.PatchMapping;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\n@RequestMapping(\"/v1/policies\")\npublic class PolicyController {\n  private final Project project;\n\n  public PolicyController(Project project) {\n    this.project = project;\n  }\n\n  @PatchMapping\n  public CompletableFuture<Map<String, Object>> updatePolicy()\n    throws AppwriteException {\n    CompletableFuture<Map<String, Object>> done = new CompletableFuture<>();\n\n    project.updatePasswordStrengthPolicy(\n      8L,   // min\n      true, // uppercase\n      null, // lowercase\n      true, // number\n      true, // symbols\n      new CoroutineCallback<>((policy, error) -> {\n        if (error != null) {\n          done.completeExceptionally(error);\n        } else {\n          done.complete(policy.toMap());\n        }\n      })\n    );\n\n    return done;\n  }\n\n  @GetMapping\n  public CompletableFuture<Map<String, Object>> listPolicies()\n    throws AppwriteException {\n    CompletableFuture<Map<String, Object>> done = new CompletableFuture<>();\n\n    project.listPolicies(\n      null, // queries\n      null, // total\n      new CoroutineCallback<>((policies, error) -> {\n        if (error != null) {\n          done.completeExceptionally(error);\n        } else {\n          done.complete(policies.toMap());\n        }\n      })\n    );\n\n    return done;\n  }\n}\n";
var Main_default = "import com.google.gson.Gson;\nimport io.appwrite.Client;\nimport io.appwrite.coroutines.CoroutineCallback;\nimport io.appwrite.exceptions.AppwriteException;\nimport io.appwrite.services.Project;\nimport java.util.concurrent.CountDownLatch;\n\npublic class Main {\n  public static void main(String[] args)\n    throws AppwriteException, InterruptedException {\n    Gson gson = new Gson();\n\n    Client client = new Client()\n      .setEndpoint(System.getenv(\"APPWRITE_ENDPOINT\"))\n      .setProject(System.getenv(\"APPWRITE_PROJECT_ID\"))\n      .setKey(System.getenv(\"APPWRITE_API_KEY\"));\n\n    Project project = new Project(client);\n\n    // The SDK runs requests asynchronously; wait for both callbacks\n    // before the process exits.\n    CountDownLatch done = new CountDownLatch(2);\n\n    project.updatePasswordStrengthPolicy(\n      8L,   // min\n      true, // uppercase\n      null, // lowercase\n      true, // number\n      true, // symbols\n      new CoroutineCallback<>((policy, error) -> {\n        if (error != null) {\n          System.out.println(error);\n        } else {\n          System.out.println(gson.toJson(policy.toMap()));\n        }\n        done.countDown();\n      })\n    );\n\n    project.listPolicies(\n      null, // queries\n      null, // total\n      new CoroutineCallback<>((policies, error) -> {\n        if (error != null) {\n          System.out.println(error);\n        } else {\n          System.out.println(gson.toJson(policies.toMap()));\n        }\n        done.countDown();\n      })\n    );\n\n    done.await();\n  }\n}\n";
var Application_default$1 = "import io.ktor.serialization.gson.gson\nimport io.ktor.server.application.install\nimport io.ktor.server.engine.embeddedServer\nimport io.ktor.server.netty.Netty\nimport io.ktor.server.plugins.contentnegotiation.ContentNegotiation\nimport io.ktor.server.response.respond\nimport io.ktor.server.routing.get\nimport io.ktor.server.routing.patch\nimport io.ktor.server.routing.routing\n\nfun main() {\n  embeddedServer(Netty, port = 8080) {\n    install(ContentNegotiation) { gson() }\n\n    routing {\n      patch(\"/v1/policies\") {\n        val policy = appwrite.updatePasswordStrengthPolicy(\n          min = 8,\n          uppercase = true,\n          number = true,\n          symbols = true\n        )\n        call.respond(policy.toMap())\n      }\n\n      get(\"/v1/policies\") {\n        call.respond(appwrite.listPolicies().toMap())\n      }\n    }\n  }.start(wait = true)\n}\n";
var Appwrite_default = "import io.appwrite.Client\nimport io.appwrite.services.Project\n\nval appwrite = Project(\n  Client()\n    .setEndpoint(System.getenv(\"APPWRITE_ENDPOINT\"))\n    .setProject(System.getenv(\"APPWRITE_PROJECT_ID\"))\n    .setKey(System.getenv(\"APPWRITE_API_KEY\"))\n)\n";
var Application_default$2 = "package com.example\n\nimport org.springframework.boot.autoconfigure.SpringBootApplication\nimport org.springframework.boot.runApplication\n\n@SpringBootApplication\nclass Application\n\nfun main(args: Array<String>) {\n  runApplication<Application>(*args)\n}\n";
var AppwriteConfig_default$1 = "package com.example\n\nimport io.appwrite.Client\nimport io.appwrite.services.Project\nimport org.springframework.context.annotation.Bean\nimport org.springframework.context.annotation.Configuration\n\n@Configuration\nclass AppwriteConfig {\n  @Bean\n  fun project(): Project {\n    val client = Client()\n      .setEndpoint(System.getenv(\"APPWRITE_ENDPOINT\"))\n      .setProject(System.getenv(\"APPWRITE_PROJECT_ID\"))\n      .setKey(System.getenv(\"APPWRITE_API_KEY\"))\n\n    return Project(client)\n  }\n}\n";
var PolicyController_default$1 = "package com.example\n\nimport io.appwrite.services.Project\nimport kotlinx.coroutines.runBlocking\nimport org.springframework.web.bind.annotation.GetMapping\nimport org.springframework.web.bind.annotation.PatchMapping\nimport org.springframework.web.bind.annotation.RequestMapping\nimport org.springframework.web.bind.annotation.RestController\n\n@RestController\n@RequestMapping(\"/v1/policies\")\nclass PolicyController(private val project: Project) {\n  @PatchMapping\n  fun updatePolicy(): Map<String, Any?> = runBlocking {\n    project.updatePasswordStrengthPolicy(\n      min = 8,\n      uppercase = true,\n      number = true,\n      symbols = true\n    ).toMap()\n  }\n\n  @GetMapping\n  fun listPolicies(): Map<String, Any?> = runBlocking {\n    project.listPolicies().toMap()\n  }\n}\n";
var Main_default$1 = "import com.google.gson.Gson\nimport io.appwrite.Client\nimport io.appwrite.services.Project\n\nsuspend fun main() {\n  val gson = Gson()\n\n  val client = Client()\n    .setEndpoint(System.getenv(\"APPWRITE_ENDPOINT\"))\n    .setProject(System.getenv(\"APPWRITE_PROJECT_ID\"))\n    .setKey(System.getenv(\"APPWRITE_API_KEY\"))\n\n  val project = Project(client)\n\n  val policy = project.updatePasswordStrengthPolicy(\n    min = 8,\n    uppercase = true,\n    number = true,\n    symbols = true\n  )\n\n  println(gson.toJson(policy.toMap()))\n\n  val policies = project.listPolicies()\n\n  println(gson.toJson(policies.toMap()))\n}\n";
var appwrite_default$8 = "import { Client } from 'node-appwrite'\n\nconst client = new Client()\n  .setEndpoint(process.env.APPWRITE_ENDPOINT)\n  .setProject(process.env.APPWRITE_PROJECT_ID)\n  .setKey(process.env.APPWRITE_API_KEY)\n\nexport { client }\n";
var src_default$3 = "import express from 'express'\nimport { client } from '../lib/appwrite'\nimport { Project } from 'node-appwrite'\n\nconst app = express()\nconst project = new Project(client)\n\napp.patch('/v1/policies', async (req, res) => {\n  const policy = await project.updatePasswordStrengthPolicy({\n    min: 8,\n    uppercase: true,\n    number: true,\n    symbols: true\n  })\n  res.json(policy)\n})\n\napp.get('/v1/policies', async (req, res) => {\n  res.json(await project.listPolicies())\n})\n\napp.listen(3000, () => console.log('Listening on http://localhost:3000'))\n";
var appwrite_default$9 = "import { Client } from 'node-appwrite'\n\nconst client = new Client()\n  .setEndpoint(process.env.APPWRITE_ENDPOINT)\n  .setProject(process.env.APPWRITE_PROJECT_ID)\n  .setKey(process.env.APPWRITE_API_KEY)\n\nexport { client }\n";
var src_default$4 = "import Fastify from 'fastify'\nimport { client } from '../lib/appwrite'\nimport { Project } from 'node-appwrite'\n\nconst app = Fastify()\nconst project = new Project(client)\n\napp.patch('/v1/policies', async () => {\n  return await project.updatePasswordStrengthPolicy({\n    min: 8,\n    uppercase: true,\n    number: true,\n    symbols: true\n  })\n})\n\napp.get('/v1/policies', async () => {\n  return await project.listPolicies()\n})\n\nawait app.listen({ port: 3000 })\nconsole.log('Listening on http://localhost:3000')\n";
var appwrite_default$10 = "import { Client } from 'node-appwrite'\n\nconst client = new Client()\n  .setEndpoint(process.env.APPWRITE_ENDPOINT)\n  .setProject(process.env.APPWRITE_PROJECT_ID)\n  .setKey(process.env.APPWRITE_API_KEY)\n\nexport { client }\n";
var src_default$5 = "import { serve } from '@hono/node-server'\nimport { Hono } from 'hono'\nimport { client } from '../lib/appwrite'\nimport { Project } from 'node-appwrite'\n\nconst app = new Hono()\nconst project = new Project(client)\n\napp.patch('/v1/policies', async (c) => {\n  const policy = await project.updatePasswordStrengthPolicy({\n    min: 8,\n    uppercase: true,\n    number: true,\n    symbols: true\n  })\n  return c.json(policy)\n})\n\napp.get('/v1/policies', async (c) => {\n  return c.json(await project.listPolicies())\n})\n\nserve({ fetch: app.fetch, port: 3000 }, (info) =>\n  console.log(`Listening on http://localhost:${info.port}`)\n)\n";
var appwrite_default$11 = "import { Client } from 'node-appwrite'\n\nconst client = new Client()\n  .setEndpoint(process.env.APPWRITE_ENDPOINT)\n  .setProject(process.env.APPWRITE_PROJECT_ID)\n  .setKey(process.env.APPWRITE_API_KEY)\n\nexport { client }\n";
var src_default$6 = "import Koa from 'koa'\nimport Router from '@koa/router'\nimport { client } from '../lib/appwrite'\nimport { Project } from 'node-appwrite'\n\nconst app = new Koa()\nconst router = new Router()\nconst project = new Project(client)\n\nrouter.patch('/v1/policies', async (ctx) => {\n  ctx.body = await project.updatePasswordStrengthPolicy({\n    min: 8,\n    uppercase: true,\n    number: true,\n    symbols: true\n  })\n})\n\nrouter.get('/v1/policies', async (ctx) => {\n  ctx.body = await project.listPolicies()\n})\n\napp.use(router.routes())\napp.listen(3000, () => console.log('Listening on http://localhost:3000'))\n";
var app_controller_default = "import { Controller, Get, Patch } from '@nestjs/common'\nimport { Project } from 'node-appwrite'\n\n@Controller('v1/policies')\nexport class AppController {\n  constructor(private readonly project: Project) {}\n\n  @Patch()\n  updatePolicy() {\n    return this.project.updatePasswordStrengthPolicy({\n      min: 8,\n      uppercase: true,\n      number: true,\n      symbols: true\n    })\n  }\n\n  @Get()\n  listPolicies() {\n    return this.project.listPolicies()\n  }\n}\n";
var app_module_default = "import { Module } from '@nestjs/common'\nimport { Project } from 'node-appwrite'\nimport { AppController } from './app.controller'\nimport { client } from './lib/appwrite'\n\n@Module({\n  controllers: [AppController],\n  providers: [{ provide: Project, useFactory: () => new Project(client) }],\n})\nexport class AppModule {}\n";
var appwrite_default$12 = "import { Client } from 'node-appwrite'\n\nconst client = new Client()\n  .setEndpoint(process.env.APPWRITE_ENDPOINT!)\n  .setProject(process.env.APPWRITE_PROJECT_ID!)\n  .setKey(process.env.APPWRITE_API_KEY!)\n\nexport { client }\n";
var main_default$8 = "import { NestFactory } from '@nestjs/core'\nimport { AppModule } from './app.module'\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule)\n  await app.listen(3000)\n  console.log('Listening on http://localhost:3000')\n}\n\nbootstrap()\n";
var src_default$7 = "import { Client, Project } from 'node-appwrite'\n\nconst client = new Client()\n  .setEndpoint(process.env.APPWRITE_ENDPOINT)\n  .setProject(process.env.APPWRITE_PROJECT_ID)\n  .setKey(process.env.APPWRITE_API_KEY)\n\nconst project = new Project(client)\n\nconst policy = await project.updatePasswordStrengthPolicy({\n  min: 8,\n  uppercase: true,\n  number: true,\n  symbols: true\n})\n\nconsole.log(JSON.stringify(policy, null, 2))\n\nconst policies = await project.listPolicies()\n\nconsole.log(JSON.stringify(policies, null, 2))\n";
var PolicyController_default$2 = "<?php\n\nnamespace App\\Http\\Controllers;\n\nuse Appwrite\\Services\\Project;\nuse Illuminate\\Http\\JsonResponse;\n\nclass PolicyController extends Controller\n{\n  public function __construct(private Project $project)\n  {\n  }\n\n  public function update(): JsonResponse\n  {\n    $policy = $this->project->updatePasswordStrengthPolicy(\n      min: 8,\n      uppercase: true,\n      number: true,\n      symbols: true\n    );\n\n    return response()->json($policy->toArray());\n  }\n\n  public function index(): JsonResponse\n  {\n    return response()->json($this->project->listPolicies()->toArray());\n  }\n}\n";
var AppwriteServiceProvider_default = "<?php\n\nnamespace App\\Providers;\n\nuse Appwrite\\Client;\nuse Appwrite\\Services\\Project;\nuse Illuminate\\Support\\ServiceProvider;\n\nclass AppwriteServiceProvider extends ServiceProvider\n{\n  public function register(): void\n  {\n    $this->app->singleton(Client::class, fn () => (new Client())\n      ->setEndpoint(env('APPWRITE_ENDPOINT'))\n      ->setProject(env('APPWRITE_PROJECT_ID'))\n      ->setKey(env('APPWRITE_API_KEY')));\n\n    $this->app->singleton(\n      Project::class,\n      fn ($app) => new Project($app->make(Client::class))\n    );\n  }\n}\n";
var app_default = "<?php\n\nuse Illuminate\\Foundation\\Application;\nuse Illuminate\\Foundation\\Configuration\\Exceptions;\nuse Illuminate\\Foundation\\Configuration\\Middleware;\n\nreturn Application::configure(basePath: dirname(__DIR__))\n  ->withRouting(\n    web: __DIR__ . '/../routes/web.php',\n    commands: __DIR__ . '/../routes/console.php',\n    health: '/up',\n  )\n  ->withMiddleware(function (Middleware $middleware): void {\n    $middleware->preventRequestForgery(except: ['v1/*']);\n  })\n  ->withExceptions(function (Exceptions $exceptions): void {\n  })->create();\n";
var providers_default = "<?php\n\nreturn [\n  App\\Providers\\AppServiceProvider::class,\n  App\\Providers\\AppwriteServiceProvider::class,\n];\n";
var web_default = "<?php\n\nuse App\\Http\\Controllers\\PolicyController;\nuse Illuminate\\Support\\Facades\\Route;\n\nRoute::patch('/v1/policies', [PolicyController::class, 'update']);\nRoute::get('/v1/policies', [PolicyController::class, 'index']);\n";
var routes_default = "controllers:\n  resource:\n    path: ../src/Controller/\n    namespace: App\\Controller\n  type: attribute\n";
var services_default = "services:\n  _defaults:\n    autowire: true\n    autoconfigure: true\n\n  App\\:\n    resource: '../src/'\n\n  Appwrite\\Client:\n    calls:\n      - setEndpoint: ['%env(APPWRITE_ENDPOINT)%']\n      - setProject: ['%env(APPWRITE_PROJECT_ID)%']\n      - setKey: ['%env(APPWRITE_API_KEY)%']\n\n  Appwrite\\Services\\Project:\n    arguments: ['@Appwrite\\Client']\n";
var PolicyController_default$3 = "<?php\n\nnamespace App\\Controller;\n\nuse Appwrite\\Services\\Project;\nuse Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;\nuse Symfony\\Component\\HttpFoundation\\JsonResponse;\nuse Symfony\\Component\\Routing\\Attribute\\Route;\n\nclass PolicyController extends AbstractController\n{\n  public function __construct(private Project $project)\n  {\n  }\n\n  #[Route('/v1/policies', methods: ['PATCH'])]\n  public function update(): JsonResponse\n  {\n    $policy = $this->project->updatePasswordStrengthPolicy(\n      min: 8,\n      uppercase: true,\n      number: true,\n      symbols: true\n    );\n\n    return $this->json($policy->toArray());\n  }\n\n  #[Route('/v1/policies', methods: ['GET'])]\n  public function index(): JsonResponse\n  {\n    return $this->json($this->project->listPolicies()->toArray());\n  }\n}\n";
var vanilla_default = "<?php\nrequire_once(__DIR__ . '/vendor/autoload.php');\n\n$client = (new \\Appwrite\\Client())\n  ->setEndpoint(getenv('APPWRITE_ENDPOINT'))\n  ->setProject(getenv('APPWRITE_PROJECT_ID'))\n  ->setKey(getenv('APPWRITE_API_KEY'));\n\n$project = new \\Appwrite\\Services\\Project($client);\n\n$policy = $project->updatePasswordStrengthPolicy(\n  min: 8,\n  uppercase: true,\n  number: true,\n  symbols: true\n);\n\necho json_encode($policy, JSON_PRETTY_PRINT) . \"\\n\";\n\n$policies = $project->listPolicies();\n\necho json_encode($policies, JSON_PRETTY_PRINT) . \"\\n\";\n";
var appwrite_default$13 = "import os\nfrom appwrite.client import Client\n\nclient = Client()\nclient.set_endpoint(os.environ.get(\"APPWRITE_ENDPOINT\"))\nclient.set_project(os.environ.get(\"APPWRITE_PROJECT_ID\"))\nclient.set_key(os.environ.get(\"APPWRITE_API_KEY\"))\n";
var urls_default = "from django.urls import path\n\nfrom . import views\n\nurlpatterns = [\n    path(\"v1/policies\", views.policies),\n]\n";
var views_default = "from appwrite.services.project import Project\nfrom django.http import JsonResponse\nfrom django.views.decorators.csrf import csrf_exempt\n\nfrom .appwrite import client\n\nproject = Project(client)\n\n\n@csrf_exempt\ndef policies(request):\n    if request.method == \"PATCH\":\n        policy = project.update_password_strength_policy(\n            min=8,\n            uppercase=True,\n            number=True,\n            symbols=True\n        )\n        return JsonResponse(policy.model_dump(by_alias=True))\n\n    policies = project.list_policies()\n    return JsonResponse(policies.model_dump(by_alias=True))\n";
var appwrite_client_default$1 = "import os\nfrom appwrite.client import Client\n\nclient = Client()\nclient.set_endpoint(os.environ.get(\"APPWRITE_ENDPOINT\"))\nclient.set_project(os.environ.get(\"APPWRITE_PROJECT_ID\"))\nclient.set_key(os.environ.get(\"APPWRITE_API_KEY\"))\n";
var main_default$9 = "from appwrite.services.project import Project\nfrom appwrite_client import client\nfrom fastapi import FastAPI\n\napp = FastAPI()\nproject = Project(client)\n\n\n@app.patch(\"/v1/policies\")\ndef update_policies():\n    return project.update_password_strength_policy(\n        min=8,\n        uppercase=True,\n        number=True,\n        symbols=True\n    )\n\n\n@app.get(\"/v1/policies\")\ndef list_policies():\n    return project.list_policies()\n";
var app_default$1 = "from appwrite.services.project import Project\nfrom appwrite_client import client\nfrom flask import Flask, jsonify\n\napp = Flask(__name__)\nproject = Project(client)\n\n\n@app.patch(\"/v1/policies\")\ndef update_policies():\n    policy = project.update_password_strength_policy(\n        min=8,\n        uppercase=True,\n        number=True,\n        symbols=True\n    )\n    return jsonify(policy.model_dump(by_alias=True))\n\n\n@app.get(\"/v1/policies\")\ndef list_policies():\n    policies = project.list_policies()\n    return jsonify(policies.model_dump(by_alias=True))\n\n\nif __name__ == \"__main__\":\n    app.run(port=5000)\n";
var appwrite_client_default$2 = "import os\nfrom appwrite.client import Client\n\nclient = Client()\nclient.set_endpoint(os.environ.get(\"APPWRITE_ENDPOINT\"))\nclient.set_project(os.environ.get(\"APPWRITE_PROJECT_ID\"))\nclient.set_key(os.environ.get(\"APPWRITE_API_KEY\"))\n";
var main_default$10 = "import json\nimport os\nfrom appwrite.client import Client\nfrom appwrite.services.project import Project\n\nclient = Client()\nclient.set_endpoint(os.environ.get(\"APPWRITE_ENDPOINT\"))\nclient.set_project(os.environ.get(\"APPWRITE_PROJECT_ID\"))\nclient.set_key(os.environ.get(\"APPWRITE_API_KEY\"))\n\nproject = Project(client)\n\npolicy = project.update_password_strength_policy(\n    min=8,\n    uppercase=True,\n    number=True,\n    symbols=True\n)\n\nprint(json.dumps(policy.model_dump(by_alias=True), indent=2))\n\npolicies = project.list_policies()\n\nprint(json.dumps(policies.model_dump(by_alias=True), indent=2))\n";
var App_default = "import { useEffect, useState } from 'react'\nimport { Pressable, Text, View } from 'react-native'\nimport { Account } from 'react-native-appwrite'\nimport { client } from './lib/appwrite'\nimport { SignIn } from './pages/SignIn'\nimport { SignUp } from './pages/SignUp'\n\nfunction Home({\n  onGoToSignIn,\n  onGoToSignUp,\n}: {\n  onGoToSignIn: () => void\n  onGoToSignUp: () => void\n}) {\n  const [user, setUser] = useState<{ name: string } | null>(null)\n  const [loading, setLoading] = useState(true)\n\n  useEffect(() => {\n    const account = new Account(client)\n    account\n      .get()\n      .then((u) => setUser({ name: u.name }))\n      .catch(() => setUser(null))\n      .finally(() => setLoading(false))\n  }, [])\n\n  if (loading) {\n    return <Text>Loading...</Text>\n  }\n\n  if (!user) {\n    return (\n      <View>\n        <Text>Sign in to get started.</Text>\n        <Text onPress={onGoToSignIn}>Sign in</Text>\n        <Text onPress={onGoToSignUp}>Sign up</Text>\n      </View>\n    )\n  }\n\n  async function handleSignOut() {\n    const account = new Account(client)\n    await account.deleteSession({ sessionId: 'current' })\n    setUser(null)\n  }\n\n  return (\n    <View>\n      <Text>Hello, {user.name}</Text>\n      <Pressable onPress={handleSignOut}>\n        <Text>Sign out</Text>\n      </Pressable>\n    </View>\n  )\n}\n\nexport default function App() {\n  const [route, setRoute] = useState('home')\n\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', padding: 24, gap: 8 }}>\n      {route === 'sign-in' ? (\n        <SignIn\n          onSignedIn={() => setRoute('home')}\n          onGoToSignUp={() => setRoute('sign-up')}\n        />\n      ) : route === 'sign-up' ? (\n        <SignUp\n          onSignedUp={() => setRoute('home')}\n          onGoToSignIn={() => setRoute('sign-in')}\n        />\n      ) : (\n        <Home\n          onGoToSignIn={() => setRoute('sign-in')}\n          onGoToSignUp={() => setRoute('sign-up')}\n        />\n      )}\n    </View>\n  )\n}\n";
var appwrite_default$14 = "import { Client } from 'react-native-appwrite'\n\nconst client = new Client()\n  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)\n  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)\n\nexport { client }\n";
var SignIn_default$2 = "import { useState } from 'react'\nimport { Pressable, Text, TextInput, View } from 'react-native'\nimport { Account } from 'react-native-appwrite'\nimport { client } from '../lib/appwrite'\n\nexport function SignIn({\n  onSignedIn,\n  onGoToSignUp,\n}: {\n  onSignedIn: () => void\n  onGoToSignUp: () => void\n}) {\n  const [email, setEmail] = useState('')\n  const [password, setPassword] = useState('')\n  const [error, setError] = useState('')\n\n  async function handleSubmit() {\n    if (!email || !password) return\n    setError('')\n    try {\n      const account = new Account(client)\n      await account.createEmailPasswordSession({ email, password })\n      onSignedIn()\n    } catch (err) {\n      setError(err instanceof Error ? err.message : 'Sign in failed')\n    }\n  }\n\n  return (\n    <View>\n      <Text>Sign in</Text>\n      {error ? <Text>{error}</Text> : null}\n      <TextInput\n        placeholder=\"Email\"\n        value={email}\n        onChangeText={setEmail}\n        keyboardType=\"email-address\"\n        autoCapitalize=\"none\"\n      />\n      <TextInput\n        placeholder=\"Password\"\n        value={password}\n        onChangeText={setPassword}\n        secureTextEntry\n      />\n      <Pressable onPress={handleSubmit}>\n        <Text>Sign in</Text>\n      </Pressable>\n      <View style={{ flexDirection: 'row' }}>\n        <Text>No account? </Text>\n        <Text onPress={onGoToSignUp}>Sign up</Text>\n      </View>\n    </View>\n  )\n}\n";
var SignUp_default$2 = "import { useState } from 'react'\nimport { Pressable, Text, TextInput, View } from 'react-native'\nimport { Account, ID } from 'react-native-appwrite'\nimport { client } from '../lib/appwrite'\n\nexport function SignUp({\n  onSignedUp,\n  onGoToSignIn,\n}: {\n  onSignedUp: () => void\n  onGoToSignIn: () => void\n}) {\n  const [name, setName] = useState('')\n  const [email, setEmail] = useState('')\n  const [password, setPassword] = useState('')\n  const [error, setError] = useState('')\n\n  async function handleSubmit() {\n    if (!email || !password) return\n    setError('')\n    try {\n      const account = new Account(client)\n      await account.create({\n        userId: ID.unique(),\n        email,\n        password,\n        name: name.trim() || undefined,\n      })\n      await account.createEmailPasswordSession({ email, password })\n      onSignedUp()\n    } catch (err) {\n      setError(err instanceof Error ? err.message : 'Sign up failed')\n    }\n  }\n\n  return (\n    <View>\n      <Text>Sign up</Text>\n      {error ? <Text>{error}</Text> : null}\n      <TextInput placeholder=\"Name\" value={name} onChangeText={setName} />\n      <TextInput\n        placeholder=\"Email\"\n        value={email}\n        onChangeText={setEmail}\n        keyboardType=\"email-address\"\n        autoCapitalize=\"none\"\n      />\n      <TextInput\n        placeholder=\"Password\"\n        value={password}\n        onChangeText={setPassword}\n        secureTextEntry\n      />\n      <Pressable onPress={handleSubmit}>\n        <Text>Sign up</Text>\n      </Pressable>\n      <View style={{ flexDirection: 'row' }}>\n        <Text>Already have an account? </Text>\n        <Text onPress={onGoToSignIn}>Sign in</Text>\n      </View>\n    </View>\n  )\n}\n";
var policies_controller_default = "class PoliciesController < ApplicationController\n  def update\n    policy = project.update_password_strength_policy(\n      min: 8,\n      uppercase: true,\n      number: true,\n      symbols: true\n    )\n\n    render json: policy.to_map\n  end\n\n  def index\n    render json: project.list_policies.to_map\n  end\n\n  private\n\n  def project\n    @project ||= Appwrite::Project.new(APPWRITE_CLIENT)\n  end\nend\n";
var appwrite_default$15 = "APPWRITE_CLIENT = Appwrite::Client.new\n  .set_endpoint(ENV['APPWRITE_ENDPOINT'])\n  .set_project(ENV['APPWRITE_PROJECT_ID'])\n  .set_key(ENV['APPWRITE_API_KEY'])\n";
var routes_default$1 = "Rails.application.routes.draw do\n  patch '/v1/policies', to: 'policies#update'\n  get '/v1/policies', to: 'policies#index'\nend\n";
var main_default$11 = "require 'appwrite'\nrequire 'json'\n\nclient = Appwrite::Client.new\n  .set_endpoint(ENV['APPWRITE_ENDPOINT'])\n  .set_project(ENV['APPWRITE_PROJECT_ID'])\n  .set_key(ENV['APPWRITE_API_KEY'])\n\nproject = Appwrite::Project.new(client)\n\npolicy = project.update_password_strength_policy(\n  min: 8,\n  uppercase: true,\n  number: true,\n  symbols: true\n)\n\nputs JSON.pretty_generate(policy.to_map)\n\npolicies = project.list_policies\n\nputs JSON.pretty_generate(policies.to_map)\n";
var appwrite_client_default$3 = "use appwrite::client::Client;\n\npub fn client() -> Client {\n    Client::new()\n        .set_endpoint(std::env::var(\"APPWRITE_ENDPOINT\").unwrap())\n        .set_project(std::env::var(\"APPWRITE_PROJECT_ID\").unwrap())\n        .set_key(std::env::var(\"APPWRITE_API_KEY\").unwrap())\n}\n";
var main_default$12 = "mod appwrite_client;\n\nuse actix_web::{web, App, HttpResponse, HttpServer, Responder};\nuse appwrite::services::Project;\n\n#[actix_web::main]\nasync fn main() -> std::io::Result<()> {\n    let project = web::Data::new(Project::new(&appwrite_client::client()));\n\n    println!(\"Listening on http://localhost:3000\");\n\n    HttpServer::new(move || {\n        App::new()\n            .app_data(project.clone())\n            .route(\"/v1/policies\", web::patch().to(update_policy))\n            .route(\"/v1/policies\", web::get().to(list_policies))\n    })\n    .bind((\"0.0.0.0\", 3000))?\n    .run()\n    .await\n}\n\nasync fn update_policy(project: web::Data<Project>) -> impl Responder {\n    let policy = project\n        // min, uppercase, lowercase, number, symbols\n        .update_password_strength_policy(\n            Some(8),\n            Some(true),\n            None,\n            Some(true),\n            Some(true),\n        )\n        .await;\n\n    match policy {\n        Ok(policy) => HttpResponse::Ok().json(policy),\n        Err(_) => HttpResponse::BadGateway().finish(),\n    }\n}\n\nasync fn list_policies(project: web::Data<Project>) -> impl Responder {\n    match project.list_policies(None, None).await {\n        Ok(policies) => HttpResponse::Ok().json(policies),\n        Err(_) => HttpResponse::BadGateway().finish(),\n    }\n}\n";
var appwrite_client_default$4 = "use appwrite::client::Client;\n\npub fn client() -> Client {\n    Client::new()\n        .set_endpoint(std::env::var(\"APPWRITE_ENDPOINT\").unwrap())\n        .set_project(std::env::var(\"APPWRITE_PROJECT_ID\").unwrap())\n        .set_key(std::env::var(\"APPWRITE_API_KEY\").unwrap())\n}\n";
var main_default$13 = "mod appwrite_client;\n\nuse appwrite::models::{PolicyList, PolicyPasswordStrength};\nuse appwrite::services::Project;\nuse axum::extract::State;\nuse axum::http::StatusCode;\nuse axum::routing::patch;\nuse axum::{Json, Router};\n\n#[tokio::main]\nasync fn main() {\n    let project = Project::new(&appwrite_client::client());\n\n    let app = Router::new()\n        .route(\"/v1/policies\", patch(update_policy).get(list_policies))\n        .with_state(project);\n\n    let listener = tokio::net::TcpListener::bind(\"0.0.0.0:3000\")\n        .await\n        .unwrap();\n\n    println!(\"Listening on http://localhost:3000\");\n\n    axum::serve(listener, app).await.unwrap();\n}\n\nasync fn update_policy(\n    State(project): State<Project>,\n) -> Result<Json<PolicyPasswordStrength>, StatusCode> {\n    project\n        // min, uppercase, lowercase, number, symbols\n        .update_password_strength_policy(\n            Some(8),\n            Some(true),\n            None,\n            Some(true),\n            Some(true),\n        )\n        .await\n        .map(Json)\n        .map_err(|_| StatusCode::BAD_GATEWAY)\n}\n\nasync fn list_policies(\n    State(project): State<Project>,\n) -> Result<Json<PolicyList>, StatusCode> {\n    project\n        .list_policies(None, None)\n        .await\n        .map(Json)\n        .map_err(|_| StatusCode::BAD_GATEWAY)\n}\n";
var main_default$14 = "use appwrite::client::Client;\nuse appwrite::services::project::Project;\n\n#[tokio::main]\nasync fn main() {\n    let client = Client::new()\n        .set_endpoint(std::env::var(\"APPWRITE_ENDPOINT\").unwrap())\n        .set_project(std::env::var(\"APPWRITE_PROJECT_ID\").unwrap())\n        .set_key(std::env::var(\"APPWRITE_API_KEY\").unwrap());\n\n    let project = Project::new(&client);\n\n    let policy = project\n        // min, uppercase, lowercase, number, symbols\n        .update_password_strength_policy(\n            Some(8),\n            Some(true),\n            None,\n            Some(true),\n            Some(true),\n        )\n        .await\n        .unwrap();\n\n    println!(\"{}\", serde_json::to_string_pretty(&policy).unwrap());\n\n    let policies = project.list_policies(None, None).await.unwrap();\n\n    println!(\"{}\", serde_json::to_string_pretty(&policies).unwrap());\n}\n";
var main_default$15 = "import Appwrite\nimport Foundation\n\nlet encoder = JSONEncoder()\nencoder.outputFormatting = .prettyPrinted\n\nlet client = Client()\n  .setEndpoint(ProcessInfo.processInfo.environment[\"APPWRITE_ENDPOINT\"]!)\n  .setProject(ProcessInfo.processInfo.environment[\"APPWRITE_PROJECT_ID\"]!)\n  .setKey(ProcessInfo.processInfo.environment[\"APPWRITE_API_KEY\"]!)\n\nlet project = Project(client)\n\nlet policy = try await project.updatePasswordStrengthPolicy(\n  min: 8,\n  uppercase: true,\n  number: true,\n  symbols: true\n)\n\nprint(String(decoding: try encoder.encode(policy), as: UTF8.self))\n\nlet policies = try await project.listPolicies()\n\nprint(String(decoding: try encoder.encode(policies), as: UTF8.self))\n";
var appwrite_default$16 = "import Appwrite\nimport Foundation\n\nlet env = ProcessInfo.processInfo.environment\n\nlet project = Project(\n  Client()\n    .setEndpoint(env[\"APPWRITE_ENDPOINT\"]!)\n    .setProject(env[\"APPWRITE_PROJECT_ID\"]!)\n    .setKey(env[\"APPWRITE_API_KEY\"]!)\n)\n";
var main_default$16 = "import Foundation\nimport Vapor\n\nlet app = try await Application.make(.detect())\napp.http.server.configuration.port = 8080\n\nfunc json(_ value: some Encodable) throws -> Response {\n  var headers = HTTPHeaders()\n  headers.contentType = .json\n  return Response(\n    status: .ok,\n    headers: headers,\n    body: .init(data: try JSONEncoder().encode(value))\n  )\n}\n\napp.patch(\"v1\", \"policies\") { _ async throws -> Response in\n  try json(\n    try await project.updatePasswordStrengthPolicy(\n      min: 8,\n      uppercase: true,\n      number: true,\n      symbols: true\n    )\n  )\n}\n\napp.get(\"v1\", \"policies\") { _ async throws -> Response in\n  try json(try await project.listPolicies())\n}\n\ntry await app.execute()\ntry await app.asyncShutdown()\n";
var index_page_default = "import { afterNextRender, Component, signal } from '@angular/core'\nimport { RouterLink } from '@angular/router'\nimport { Account } from 'appwrite'\nimport { client } from '../../lib/appwrite'\n\n@Component({\n  standalone: true,\n  imports: [RouterLink],\n  template: `\n    @if (loading()) {\n      <p>Loading...</p>\n    } @else {\n      @if (user(); as u) {\n        <p>Hello, {{ u.name }}</p>\n        <button type=\"button\" (click)=\"handleSignOut()\">Sign out</button>\n      } @else {\n        <p>Sign in to get started.</p>\n        <p>\n          <a routerLink=\"/sign-in\">Sign in</a>\n          ·\n          <a routerLink=\"/sign-up\">Sign up</a>\n        </p>\n      }\n    }\n  `,\n})\nexport default class HomePageComponent {\n  user = signal<{ name: string } | null>(null)\n  loading = signal(true)\n\n  constructor() {\n    afterNextRender(() => {\n      const account = new Account(client)\n      account\n        .get()\n        .then((u) => this.user.set({ name: u.name }))\n        .catch(() => this.user.set(null))\n        .finally(() => this.loading.set(false))\n    })\n  }\n\n  async handleSignOut() {\n    const account = new Account(client)\n    await account.deleteSession({ sessionId: 'current' })\n    this.user.set(null)\n  }\n}\n";
var sign_in_page_default = "import { Component, inject, signal } from '@angular/core'\nimport { FormsModule } from '@angular/forms'\nimport { Router, RouterLink } from '@angular/router'\nimport { Account } from 'appwrite'\nimport { client } from '../../lib/appwrite'\n\n@Component({\n  standalone: true,\n  imports: [FormsModule, RouterLink],\n  template: `\n    <form id=\"sign-in-form\" (ngSubmit)=\"handleSubmit()\">\n      <h1>Sign in</h1>\n      @if (error()) {\n        <p>{{ error() }}</p>\n      }\n      <input\n        type=\"email\"\n        name=\"email\"\n        placeholder=\"Email\"\n        [(ngModel)]=\"email\"\n        required\n      />\n      <input\n        type=\"password\"\n        name=\"password\"\n        placeholder=\"Password\"\n        [(ngModel)]=\"password\"\n        required\n      />\n      <button type=\"submit\">Sign in</button>\n      <p>\n        No account? <a routerLink=\"/sign-up\">Sign up</a>\n      </p>\n    </form>\n  `,\n})\nexport default class SignInPageComponent {\n  private router = inject(Router)\n\n  email = signal('')\n  password = signal('')\n  error = signal('')\n\n  async handleSubmit() {\n    this.error.set('')\n    try {\n      const account = new Account(client)\n      await account.createEmailPasswordSession({\n        email: this.email(),\n        password: this.password(),\n      })\n      await this.router.navigateByUrl('/')\n    } catch (err) {\n      this.error.set(err instanceof Error ? err.message : 'Sign in failed')\n    }\n  }\n}\n";
var sign_up_page_default = "import { Component, inject, signal } from '@angular/core'\nimport { FormsModule } from '@angular/forms'\nimport { Router, RouterLink } from '@angular/router'\nimport { Account, ID } from 'appwrite'\nimport { client } from '../../lib/appwrite'\n\n@Component({\n  standalone: true,\n  imports: [FormsModule, RouterLink],\n  template: `\n    <form id=\"sign-up-form\" (ngSubmit)=\"handleSubmit()\">\n      <h1>Sign up</h1>\n      @if (error()) {\n        <p>{{ error() }}</p>\n      }\n      <input\n        type=\"text\"\n        name=\"name\"\n        placeholder=\"Name\"\n        [(ngModel)]=\"name\"\n      />\n      <input\n        type=\"email\"\n        name=\"email\"\n        placeholder=\"Email\"\n        [(ngModel)]=\"email\"\n        required\n      />\n      <input\n        type=\"password\"\n        name=\"password\"\n        placeholder=\"Password\"\n        [(ngModel)]=\"password\"\n        required\n      />\n      <button type=\"submit\">Sign up</button>\n      <p>\n        Already have an account? <a routerLink=\"/sign-in\">Sign in</a>\n      </p>\n    </form>\n  `,\n})\nexport default class SignUpPageComponent {\n  private router = inject(Router)\n\n  name = signal('')\n  email = signal('')\n  password = signal('')\n  error = signal('')\n\n  async handleSubmit() {\n    this.error.set('')\n    try {\n      const account = new Account(client)\n      await account.create({\n        userId: ID.unique(),\n        email: this.email(),\n        password: this.password(),\n        name: this.name().trim() || undefined,\n      })\n      await account.createEmailPasswordSession({\n        email: this.email(),\n        password: this.password(),\n      })\n      await this.router.navigateByUrl('/')\n    } catch (err) {\n      this.error.set(err instanceof Error ? err.message : 'Sign up failed')\n    }\n  }\n}\n";
var appwrite_default$17 = "import { Client } from 'appwrite'\n\nconst client = new Client()\n  .setEndpoint(import.meta.env['VITE_APPWRITE_ENDPOINT'])\n  .setProject(import.meta.env['VITE_APPWRITE_PROJECT_ID'])\n\nexport { client }\n";
var app_component_default = "import { Component } from '@angular/core'\nimport { RouterOutlet } from '@angular/router'\n\n@Component({\n  selector: 'app-root',\n  imports: [RouterOutlet],\n  template: `<router-outlet />`,\n})\nexport class AppComponent {}\n";
var app_routes_default = "import { Routes } from '@angular/router'\nimport { HomeComponent } from './home.component'\nimport { SignInComponent } from './sign-in.component'\nimport { SignUpComponent } from './sign-up.component'\n\nexport const routes: Routes = [\n  { path: '', component: HomeComponent },\n  { path: 'sign-in', component: SignInComponent },\n  { path: 'sign-up', component: SignUpComponent },\n]\n";
var appwrite_service_default = "import { Injectable } from '@angular/core'\nimport { Account, ID } from 'appwrite'\nimport { client } from '../lib/appwrite'\n\n@Injectable({ providedIn: 'root' })\nexport class AppwriteService {\n  private account = new Account(client)\n\n  getUser() {\n    return this.account.get()\n  }\n\n  signUp(name: string, email: string, password: string) {\n    return this.account.create({\n      userId: ID.unique(),\n      email,\n      password,\n      name: name.trim() || undefined,\n    })\n  }\n\n  signIn(email: string, password: string) {\n    return this.account.createEmailPasswordSession({ email, password })\n  }\n\n  signOut() {\n    return this.account.deleteSession({ sessionId: 'current' })\n  }\n}\n";
var home_component_default = "import { Component, inject, signal } from '@angular/core'\nimport { RouterLink } from '@angular/router'\nimport { AppwriteService } from './appwrite.service'\n\n@Component({\n  selector: 'app-home',\n  imports: [RouterLink],\n  template: `\n    @if (loading()) {\n      <p>Loading...</p>\n    } @else {\n      @if (user(); as u) {\n        <p>Hello, {{ u.name }}</p>\n        <button type=\"button\" (click)=\"handleSignOut()\">Sign out</button>\n      } @else {\n        <p>Sign in to get started.</p>\n        <p>\n          <a routerLink=\"/sign-in\">Sign in</a>\n          ·\n          <a routerLink=\"/sign-up\">Sign up</a>\n        </p>\n      }\n    }\n  `,\n})\nexport class HomeComponent {\n  private appwrite = inject(AppwriteService)\n\n  user = signal<{ name: string } | null>(null)\n  loading = signal(true)\n\n  constructor() {\n    this.appwrite\n      .getUser()\n      .then((u) => this.user.set({ name: u.name }))\n      .catch(() => this.user.set(null))\n      .finally(() => this.loading.set(false))\n  }\n\n  async handleSignOut() {\n    await this.appwrite.signOut()\n    this.user.set(null)\n  }\n}\n";
var sign_in_component_default = "import { Component, inject, signal } from '@angular/core'\nimport { FormsModule } from '@angular/forms'\nimport { Router, RouterLink } from '@angular/router'\nimport { AppwriteService } from './appwrite.service'\n\n@Component({\n  selector: 'app-sign-in',\n  imports: [FormsModule, RouterLink],\n  template: `\n    <form id=\"sign-in-form\" (ngSubmit)=\"handleSubmit()\">\n      <h1>Sign in</h1>\n      @if (error()) {\n        <p>{{ error() }}</p>\n      }\n      <input\n        type=\"email\"\n        name=\"email\"\n        placeholder=\"Email\"\n        [(ngModel)]=\"email\"\n        required\n      />\n      <input\n        type=\"password\"\n        name=\"password\"\n        placeholder=\"Password\"\n        [(ngModel)]=\"password\"\n        required\n      />\n      <button type=\"submit\">Sign in</button>\n      <p>\n        No account? <a routerLink=\"/sign-up\">Sign up</a>\n      </p>\n    </form>\n  `,\n})\nexport class SignInComponent {\n  private appwrite = inject(AppwriteService)\n  private router = inject(Router)\n\n  email = signal('')\n  password = signal('')\n  error = signal('')\n\n  async handleSubmit() {\n    this.error.set('')\n    try {\n      await this.appwrite.signIn(this.email(), this.password())\n      await this.router.navigateByUrl('/')\n    } catch (err) {\n      this.error.set(err instanceof Error ? err.message : 'Sign in failed')\n    }\n  }\n}\n";
var sign_up_component_default = "import { Component, inject, signal } from '@angular/core'\nimport { FormsModule } from '@angular/forms'\nimport { Router, RouterLink } from '@angular/router'\nimport { AppwriteService } from './appwrite.service'\n\n@Component({\n  selector: 'app-sign-up',\n  imports: [FormsModule, RouterLink],\n  template: `\n    <form id=\"sign-up-form\" (ngSubmit)=\"handleSubmit()\">\n      <h1>Sign up</h1>\n      @if (error()) {\n        <p>{{ error() }}</p>\n      }\n      <input\n        type=\"text\"\n        name=\"name\"\n        placeholder=\"Name\"\n        [(ngModel)]=\"name\"\n      />\n      <input\n        type=\"email\"\n        name=\"email\"\n        placeholder=\"Email\"\n        [(ngModel)]=\"email\"\n        required\n      />\n      <input\n        type=\"password\"\n        name=\"password\"\n        placeholder=\"Password\"\n        [(ngModel)]=\"password\"\n        required\n      />\n      <button type=\"submit\">Sign up</button>\n      <p>\n        Already have an account? <a routerLink=\"/sign-in\">Sign in</a>\n      </p>\n    </form>\n  `,\n})\nexport class SignUpComponent {\n  private appwrite = inject(AppwriteService)\n  private router = inject(Router)\n\n  name = signal('')\n  email = signal('')\n  password = signal('')\n  error = signal('')\n\n  async handleSubmit() {\n    this.error.set('')\n    try {\n      await this.appwrite.signUp(this.name(), this.email(), this.password())\n      await this.appwrite.signIn(this.email(), this.password())\n      await this.router.navigateByUrl('/')\n    } catch (err) {\n      this.error.set(err instanceof Error ? err.message : 'Sign up failed')\n    }\n  }\n}\n";
var appwrite_default$18 = "import { Client } from 'appwrite'\nimport { environment } from '../environments/environment'\n\nconst client = new Client()\n  .setEndpoint(environment.appwriteEndpoint)\n  .setProject(environment.appwriteProjectId)\n\nexport { client }\n";
var appwrite_default$19 = "import { Client } from 'appwrite'\n\nconst client = new Client()\n  .setEndpoint(import.meta.env.PUBLIC_APPWRITE_ENDPOINT)\n  .setProject(import.meta.env.PUBLIC_APPWRITE_PROJECT_ID)\n\nexport { client }\n";
var pages_default = "---\n// Astro renders this page on the server; the auth state is client-side.\n---\n\n<html lang=\"en\">\n  <head><title>Home</title></head>\n  <body>\n    <div id=\"app\"><p>Loading...</p></div>\n\n    <script>\n      import { Account } from 'appwrite'\n      import { client } from '../lib/appwrite'\n\n      const account = new Account(client)\n      const app = document.querySelector('#app')\n\n      function render(user) {\n        if (!user) {\n          app.innerHTML = `\n            <p>Sign in to get started.</p>\n            <p>\n              <a href=\"/sign-in\">Sign in</a> ·\n              <a href=\"/sign-up\">Sign up</a>\n            </p>\n          `\n          return\n        }\n        app.innerHTML = `\n          <p>Hello, ${user.name}</p>\n          <button type=\"button\" id=\"sign-out\">Sign out</button>\n        `\n        document\n          .querySelector('#sign-out')\n          .addEventListener('click', async () => {\n            await account.deleteSession({ sessionId: 'current' })\n            render(null)\n          })\n      }\n\n      account\n        .get()\n        .then((user) => render(user))\n        .catch(() => render(null))\n    <\/script>\n  </body>\n</html>\n";
var sign_in_default$1 = "---\n---\n\n<html lang=\"en\">\n  <head><title>Sign in</title></head>\n  <body>\n    <form id=\"sign-in-form\">\n      <h1>Sign in</h1>\n      <p id=\"error\"></p>\n      <input type=\"email\" name=\"email\" placeholder=\"Email\" required />\n      <input\n        type=\"password\"\n        name=\"password\"\n        placeholder=\"Password\"\n        required\n      />\n      <button type=\"submit\">Sign in</button>\n      <p>No account? <a href=\"/sign-up\">Sign up</a></p>\n    </form>\n\n    <script>\n      import { Account } from 'appwrite'\n      import { client } from '../lib/appwrite'\n\n      const account = new Account(client)\n\n      document\n        .querySelector('#sign-in-form')\n        .addEventListener('submit', async (e) => {\n          e.preventDefault()\n          const form = new FormData(e.target)\n          try {\n            await account.createEmailPasswordSession({\n              email: form.get('email'),\n              password: form.get('password'),\n            })\n            window.location.href = '/'\n          } catch (err) {\n            document.querySelector('#error').textContent =\n              err instanceof Error ? err.message : 'Sign in failed'\n          }\n        })\n    <\/script>\n  </body>\n</html>\n";
var sign_up_default$1 = "---\n---\n\n<html lang=\"en\">\n  <head><title>Sign up</title></head>\n  <body>\n    <form id=\"sign-up-form\">\n      <h1>Sign up</h1>\n      <p id=\"error\"></p>\n      <input type=\"text\" name=\"name\" placeholder=\"Name\" />\n      <input type=\"email\" name=\"email\" placeholder=\"Email\" required />\n      <input\n        type=\"password\"\n        name=\"password\"\n        placeholder=\"Password\"\n        required\n      />\n      <button type=\"submit\">Sign up</button>\n      <p>Already have an account? <a href=\"/sign-in\">Sign in</a></p>\n    </form>\n\n    <script>\n      import { Account, ID } from 'appwrite'\n      import { client } from '../lib/appwrite'\n\n      const account = new Account(client)\n\n      document\n        .querySelector('#sign-up-form')\n        .addEventListener('submit', async (e) => {\n          e.preventDefault()\n          const form = new FormData(e.target)\n          const email = form.get('email')\n          const password = form.get('password')\n          try {\n            await account.create({\n              userId: ID.unique(),\n              email,\n              password,\n              name: form.get('name').trim() || undefined,\n            })\n            await account.createEmailPasswordSession({ email, password })\n            window.location.href = '/'\n          } catch (err) {\n            document.querySelector('#error').textContent =\n              err instanceof Error ? err.message : 'Sign up failed'\n          }\n        })\n    <\/script>\n  </body>\n</html>\n";
var capacitor_config_default = "import type { CapacitorConfig } from '@capacitor/cli'\n\nconst config: CapacitorConfig = {\n  appId: 'io.appwrite.connectqa',\n  appName: 'Connect QA',\n  webDir: 'dist',\n  server: {\n    // Appwrite rejects WebView origins with custom schemes (the default is\n    // capacitor://localhost) unless the scheme has this exact form.\n    iosScheme: 'appwrite-callback-{{PROJECT_ID}}',\n  },\n}\n\nexport default config\n";
var appwrite_default$20 = "import { Client } from 'appwrite'\n\nconst client = new Client()\n  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)\n  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)\n\nexport { client }\n";
var main_default$17 = "import { Account, ID } from 'appwrite'\nimport { client } from './lib/appwrite'\n\nconst account = new Account(client)\nconst app = document.querySelector<HTMLDivElement>('#app')!\n\ntype Route = 'home' | 'sign-in' | 'sign-up'\n\nfunction navigate(route: Route) {\n  if (route === 'sign-in') return renderSignIn()\n  if (route === 'sign-up') return renderSignUp()\n  return loadHome()\n}\n\nfunction onClick(id: string, handler: () => void) {\n  document.querySelector(`#${id}`)?.addEventListener('click', handler)\n}\n\nfunction showError(message: string) {\n  const el = document.querySelector('#error')\n  if (el) el.textContent = message\n}\n\nfunction renderHome(user: { name: string } | null) {\n  if (!user) {\n    app.innerHTML = `\n      <p>Sign in to get started.</p>\n      <p>\n        <button type=\"button\" id=\"to-sign-in\">Sign in</button>\n        <button type=\"button\" id=\"to-sign-up\">Sign up</button>\n      </p>\n    `\n    onClick('to-sign-in', () => navigate('sign-in'))\n    onClick('to-sign-up', () => navigate('sign-up'))\n    return\n  }\n  app.innerHTML = `\n    <p>Hello, ${user.name}</p>\n    <button type=\"button\" id=\"sign-out\">Sign out</button>\n  `\n  onClick('sign-out', async () => {\n    await account.deleteSession({ sessionId: 'current' })\n    renderHome(null)\n  })\n}\n\nfunction loadHome() {\n  app.innerHTML = '<p>Loading...</p>'\n  account\n    .get()\n    .then((user) => renderHome(user))\n    .catch(() => renderHome(null))\n}\n\nfunction renderSignIn() {\n  app.innerHTML = `\n    <form id=\"form\">\n      <h1>Sign in</h1>\n      <p id=\"error\"></p>\n      <input type=\"email\" name=\"email\" placeholder=\"Email\" required />\n      <input type=\"password\" name=\"password\" placeholder=\"Password\" required />\n      <button type=\"submit\">Sign in</button>\n      <p>No account? <button type=\"button\" id=\"to-sign-up\">Sign up</button></p>\n    </form>\n  `\n  onClick('to-sign-up', () => navigate('sign-up'))\n  document.querySelector('#form')!.addEventListener('submit', async (e) => {\n    e.preventDefault()\n    showError('')\n    const form = new FormData(e.target as HTMLFormElement)\n    try {\n      await account.createEmailPasswordSession({\n        email: String(form.get('email')),\n        password: String(form.get('password')),\n      })\n      navigate('home')\n    } catch (err) {\n      showError(err instanceof Error ? err.message : 'Sign in failed')\n    }\n  })\n}\n\nfunction renderSignUp() {\n  app.innerHTML = `\n    <form id=\"form\">\n      <h1>Sign up</h1>\n      <p id=\"error\"></p>\n      <input type=\"text\" name=\"name\" placeholder=\"Name\" />\n      <input type=\"email\" name=\"email\" placeholder=\"Email\" required />\n      <input type=\"password\" name=\"password\" placeholder=\"Password\" required />\n      <button type=\"submit\">Sign up</button>\n      <p>\n        Already have an account?\n        <button type=\"button\" id=\"to-sign-in\">Sign in</button>\n      </p>\n    </form>\n  `\n  onClick('to-sign-in', () => navigate('sign-in'))\n  document.querySelector('#form')!.addEventListener('submit', async (e) => {\n    e.preventDefault()\n    showError('')\n    const form = new FormData(e.target as HTMLFormElement)\n    const email = String(form.get('email'))\n    const password = String(form.get('password'))\n    try {\n      await account.create({\n        userId: ID.unique(),\n        email,\n        password,\n        name: String(form.get('name') ?? '').trim() || undefined,\n      })\n      await account.createEmailPasswordSession({ email, password })\n      navigate('home')\n    } catch (err) {\n      showError(err instanceof Error ? err.message : 'Sign up failed')\n    }\n  })\n}\n\nnavigate('home')\n";
var App_default$1 = "import { useEffect, useState } from 'react'\nimport { IonApp, IonButton, IonContent, IonPage, IonText } from '@ionic/react'\nimport { Account } from 'appwrite'\nimport { client } from './lib/appwrite'\nimport { SignIn } from './pages/SignIn'\nimport { SignUp } from './pages/SignUp'\n\nfunction Home({\n  onGoToSignIn,\n  onGoToSignUp,\n}: {\n  onGoToSignIn: () => void\n  onGoToSignUp: () => void\n}) {\n  const [user, setUser] = useState<{ name: string } | null>(null)\n  const [loading, setLoading] = useState(true)\n\n  useEffect(() => {\n    const account = new Account(client)\n    account\n      .get()\n      .then((u) => setUser({ name: u.name }))\n      .catch(() => setUser(null))\n      .finally(() => setLoading(false))\n  }, [])\n\n  if (loading) {\n    return <IonText>Loading...</IonText>\n  }\n\n  if (!user) {\n    return (\n      <>\n        <IonText>Sign in to get started.</IonText>\n        <IonButton onClick={onGoToSignIn}>Sign in</IonButton>\n        <IonButton onClick={onGoToSignUp}>Sign up</IonButton>\n      </>\n    )\n  }\n\n  async function handleSignOut() {\n    const account = new Account(client)\n    await account.deleteSession({ sessionId: 'current' })\n    setUser(null)\n  }\n\n  return (\n    <>\n      <IonText>{`Hello, ${user.name}`}</IonText>\n      <IonButton onClick={handleSignOut}>Sign out</IonButton>\n    </>\n  )\n}\n\nexport default function App() {\n  const [route, setRoute] = useState('home')\n\n  return (\n    <IonApp>\n      <IonPage>\n        <IonContent className=\"ion-padding\">\n          {route === 'sign-in' ? (\n            <SignIn\n              onSignedIn={() => setRoute('home')}\n              onGoToSignUp={() => setRoute('sign-up')}\n            />\n          ) : route === 'sign-up' ? (\n            <SignUp\n              onSignedUp={() => setRoute('home')}\n              onGoToSignIn={() => setRoute('sign-in')}\n            />\n          ) : (\n            <Home\n              onGoToSignIn={() => setRoute('sign-in')}\n              onGoToSignUp={() => setRoute('sign-up')}\n            />\n          )}\n        </IonContent>\n      </IonPage>\n    </IonApp>\n  )\n}\n";
var appwrite_default$21 = "import { Client } from 'appwrite'\n\nconst client = new Client()\n  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)\n  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)\n\nexport { client }\n";
var SignIn_default$3 = "import { useState } from 'react'\nimport { IonButton, IonInput, IonText } from '@ionic/react'\nimport { Account } from 'appwrite'\nimport { client } from '../lib/appwrite'\n\nexport function SignIn({\n  onSignedIn,\n  onGoToSignUp,\n}: {\n  onSignedIn: () => void\n  onGoToSignUp: () => void\n}) {\n  const [email, setEmail] = useState('')\n  const [password, setPassword] = useState('')\n  const [error, setError] = useState('')\n\n  async function handleSubmit() {\n    if (!email || !password) return\n    setError('')\n    try {\n      const account = new Account(client)\n      await account.createEmailPasswordSession({ email, password })\n      onSignedIn()\n    } catch (err) {\n      setError(err instanceof Error ? err.message : 'Sign in failed')\n    }\n  }\n\n  return (\n    <>\n      <h1>Sign in</h1>\n      {error ? <IonText>{error}</IonText> : null}\n      <IonInput\n        type=\"email\"\n        placeholder=\"Email\"\n        value={email}\n        onIonInput={(e) => setEmail(e.detail.value ?? '')}\n      />\n      <IonInput\n        type=\"password\"\n        placeholder=\"Password\"\n        value={password}\n        onIonInput={(e) => setPassword(e.detail.value ?? '')}\n      />\n      <IonButton onClick={handleSubmit}>Sign in</IonButton>\n      <IonText>\n        No account?{' '}\n        <button type=\"button\" onClick={onGoToSignUp}>\n          Sign up\n        </button>\n      </IonText>\n    </>\n  )\n}\n";
var SignUp_default$3 = "import { useState } from 'react'\nimport { IonButton, IonInput, IonText } from '@ionic/react'\nimport { Account, ID } from 'appwrite'\nimport { client } from '../lib/appwrite'\n\nexport function SignUp({\n  onSignedUp,\n  onGoToSignIn,\n}: {\n  onSignedUp: () => void\n  onGoToSignIn: () => void\n}) {\n  const [name, setName] = useState('')\n  const [email, setEmail] = useState('')\n  const [password, setPassword] = useState('')\n  const [error, setError] = useState('')\n\n  async function handleSubmit() {\n    if (!email || !password) return\n    setError('')\n    try {\n      const account = new Account(client)\n      await account.create({\n        userId: ID.unique(),\n        email,\n        password,\n        name: name.trim() || undefined,\n      })\n      await account.createEmailPasswordSession({ email, password })\n      onSignedUp()\n    } catch (err) {\n      setError(err instanceof Error ? err.message : 'Sign up failed')\n    }\n  }\n\n  return (\n    <>\n      <h1>Sign up</h1>\n      {error ? <IonText>{error}</IonText> : null}\n      <IonInput\n        placeholder=\"Name\"\n        value={name}\n        onIonInput={(e) => setName(e.detail.value ?? '')}\n      />\n      <IonInput\n        type=\"email\"\n        placeholder=\"Email\"\n        value={email}\n        onIonInput={(e) => setEmail(e.detail.value ?? '')}\n      />\n      <IonInput\n        type=\"password\"\n        placeholder=\"Password\"\n        value={password}\n        onIonInput={(e) => setPassword(e.detail.value ?? '')}\n      />\n      <IonButton onClick={handleSubmit}>Sign up</IonButton>\n      <IonText>\n        Already have an account?{' '}\n        <button type=\"button\" onClick={onGoToSignIn}>\n          Sign in\n        </button>\n      </IonText>\n    </>\n  )\n}\n";
var page_default = "'use client'\n\nimport { useEffect, useState } from 'react'\nimport Link from 'next/link'\nimport { client } from '@/lib/appwrite'\nimport { Account } from 'appwrite'\n\nexport default function HomePage() {\n  const [user, setUser] = useState<{ name: string } | null>(null)\n  const [loading, setLoading] = useState(true)\n\n  useEffect(() => {\n    const account = new Account(client)\n    account\n      .get()\n      .then(setUser)\n      .catch(() => setUser(null))\n      .finally(() => setLoading(false))\n  }, [])\n\n  if (loading) {\n    return <p>Loading...</p>\n  }\n\n  if (!user) {\n    return (\n      <div>\n        <p>Sign in to get started.</p>\n        <p>\n          <Link href=\"/sign-in\">Sign in</Link>\n          {' · '}\n          <Link href=\"/sign-up\">Sign up</Link>\n        </p>\n      </div>\n    )\n  }\n\n  async function handleSignOut() {\n    const account = new Account(client)\n    await account.deleteSession({ sessionId: 'current' })\n    setUser(null)\n  }\n\n  return (\n    <div>\n      <p>Hello, {user.name}</p>\n      <button type=\"button\" onClick={handleSignOut}>\n        Sign out\n      </button>\n    </div>\n  )\n}\n";
var page_default$1 = "'use client'\n\nimport { useState, type SubmitEvent } from 'react'\nimport Link from 'next/link'\nimport { useRouter } from 'next/navigation'\nimport { Account } from 'appwrite'\nimport { client } from '@/lib/appwrite'\n\nexport default function SignInPage() {\n  const router = useRouter()\n  const [email, setEmail] = useState('')\n  const [password, setPassword] = useState('')\n  const [error, setError] = useState('')\n\n  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {\n    e.preventDefault()\n    setError('')\n    try {\n      const account = new Account(client)\n      await account.createEmailPasswordSession({ email, password })\n      router.push('/')\n      router.refresh()\n    } catch (err) {\n      setError(err instanceof Error ? err.message : 'Sign in failed')\n    }\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <h1>Sign in</h1>\n      {error ? <p>{error}</p> : null}\n      <input\n        type=\"email\"\n        placeholder=\"Email\"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n        required\n      />\n      <input\n        type=\"password\"\n        placeholder=\"Password\"\n        value={password}\n        onChange={(e) => setPassword(e.target.value)}\n        required\n      />\n      <button type=\"submit\">Sign in</button>\n      <p>\n        No account? <Link href=\"/sign-up\">Sign up</Link>\n      </p>\n    </form>\n  )\n}\n";
var page_default$2 = "'use client'\n\nimport { useState, type SubmitEvent } from 'react'\nimport Link from 'next/link'\nimport { useRouter } from 'next/navigation'\nimport { Account, ID } from 'appwrite'\nimport { client } from '@/lib/appwrite'\n\nexport default function SignUpPage() {\n  const router = useRouter()\n  const [name, setName] = useState('')\n  const [email, setEmail] = useState('')\n  const [password, setPassword] = useState('')\n  const [error, setError] = useState('')\n\n  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {\n    e.preventDefault()\n    setError('')\n    try {\n      const account = new Account(client)\n      await account.create({\n        userId: ID.unique(),\n        email,\n        password,\n        name: name.trim() || undefined,\n      })\n      await account.createEmailPasswordSession({ email, password })\n      router.push('/')\n      router.refresh()\n    } catch (err) {\n      setError(err instanceof Error ? err.message : 'Sign up failed')\n    }\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <h1>Sign up</h1>\n      {error ? <p>{error}</p> : null}\n      <input\n        type=\"text\"\n        placeholder=\"Name\"\n        value={name}\n        onChange={(e) => setName(e.target.value)}\n      />\n      <input\n        type=\"email\"\n        placeholder=\"Email\"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n        required\n      />\n      <input\n        type=\"password\"\n        placeholder=\"Password\"\n        value={password}\n        onChange={(e) => setPassword(e.target.value)}\n        required\n      />\n      <button type=\"submit\">Sign up</button>\n      <p>\n        Already have an account? <Link href=\"/sign-in\">Sign in</Link>\n      </p>\n    </form>\n  )\n}\n";
var appwrite_default$22 = "import { Client } from 'appwrite'\n\nconst client = new Client()\n  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)\n  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)\n\nexport { client }\n";
var appwrite_default$23 = "import { Client } from 'appwrite'\n\nconst client = new Client()\n  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)\n  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)\n\nexport { client }\n";
var pages_default$1 = "import { useEffect, useState } from 'react'\nimport Link from 'next/link'\nimport { client } from '@/lib/appwrite'\nimport { Account } from 'appwrite'\n\nexport default function Home() {\n  const [user, setUser] = useState<{ name: string } | null>(null)\n  const [loading, setLoading] = useState(true)\n\n  useEffect(() => {\n    const account = new Account(client)\n    account\n      .get()\n      .then(setUser)\n      .catch(() => setUser(null))\n      .finally(() => setLoading(false))\n  }, [])\n\n  if (loading) {\n    return <p>Loading...</p>\n  }\n\n  if (!user) {\n    return (\n      <div>\n        <p>Sign in to get started.</p>\n        <p>\n          <Link href=\"/sign-in\">Sign in</Link>\n          {' · '}\n          <Link href=\"/sign-up\">Sign up</Link>\n        </p>\n      </div>\n    )\n  }\n\n  async function handleSignOut() {\n    const account = new Account(client)\n    await account.deleteSession({ sessionId: 'current' })\n    setUser(null)\n  }\n\n  return (\n    <div>\n      <p>Hello, {user.name}</p>\n      <button type=\"button\" onClick={handleSignOut}>\n        Sign out\n      </button>\n    </div>\n  )\n}\n";
var sign_in_default$2 = "import { useState, type SubmitEvent } from 'react'\nimport Link from 'next/link'\nimport { useRouter } from 'next/router'\nimport { Account } from 'appwrite'\nimport { client } from '@/lib/appwrite'\n\nexport default function SignInPage() {\n  const router = useRouter()\n  const [email, setEmail] = useState('')\n  const [password, setPassword] = useState('')\n  const [error, setError] = useState('')\n\n  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {\n    e.preventDefault()\n    setError('')\n    try {\n      const account = new Account(client)\n      await account.createEmailPasswordSession({ email, password })\n      router.push('/')\n    } catch (err) {\n      setError(err instanceof Error ? err.message : 'Sign in failed')\n    }\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <h1>Sign in</h1>\n      {error ? <p>{error}</p> : null}\n      <input\n        type=\"email\"\n        placeholder=\"Email\"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n        required\n      />\n      <input\n        type=\"password\"\n        placeholder=\"Password\"\n        value={password}\n        onChange={(e) => setPassword(e.target.value)}\n        required\n      />\n      <button type=\"submit\">Sign in</button>\n      <p>\n        No account? <Link href=\"/sign-up\">Sign up</Link>\n      </p>\n    </form>\n  )\n}\n";
var sign_up_default$2 = "import { useState, type SubmitEvent } from 'react'\nimport Link from 'next/link'\nimport { useRouter } from 'next/router'\nimport { Account, ID } from 'appwrite'\nimport { client } from '@/lib/appwrite'\n\nexport default function SignUpPage() {\n  const router = useRouter()\n  const [name, setName] = useState('')\n  const [email, setEmail] = useState('')\n  const [password, setPassword] = useState('')\n  const [error, setError] = useState('')\n\n  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {\n    e.preventDefault()\n    setError('')\n    try {\n      const account = new Account(client)\n      await account.create({\n        userId: ID.unique(),\n        email,\n        password,\n        name: name.trim() || undefined,\n      })\n      await account.createEmailPasswordSession({ email, password })\n      router.push('/')\n    } catch (err) {\n      setError(err instanceof Error ? err.message : 'Sign up failed')\n    }\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <h1>Sign up</h1>\n      {error ? <p>{error}</p> : null}\n      <input\n        type=\"text\"\n        placeholder=\"Name\"\n        value={name}\n        onChange={(e) => setName(e.target.value)}\n      />\n      <input\n        type=\"email\"\n        placeholder=\"Email\"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n        required\n      />\n      <input\n        type=\"password\"\n        placeholder=\"Password\"\n        value={password}\n        onChange={(e) => setPassword(e.target.value)}\n        required\n      />\n      <button type=\"submit\">Sign up</button>\n      <p>\n        Already have an account? <Link href=\"/sign-in\">Sign in</Link>\n      </p>\n    </form>\n  )\n}\n";
var pages_default$2 = "<script setup lang=\"ts\">\nimport { Account } from 'appwrite'\nimport { client } from '~/utils/appwrite'\n\nconst { data: user, status, refresh } = useAsyncData(\n  'user',\n  async () => {\n    try {\n      const account = new Account(client)\n      return await account.get()\n    } catch {\n      return null\n    }\n  },\n  { server: false },\n)\n\nasync function handleSignOut() {\n  const account = new Account(client)\n  await account.deleteSession({ sessionId: 'current' })\n  await refresh()\n}\n<\/script>\n\n<template>\n  <div>\n    <p v-if=\"status === 'pending'\">Loading...</p>\n    <template v-else-if=\"!user\">\n      <p>Sign in to get started.</p>\n      <p>\n        <NuxtLink to=\"/sign-in\">Sign in</NuxtLink>\n        &middot;\n        <NuxtLink to=\"/sign-up\">Sign up</NuxtLink>\n      </p>\n    </template>\n    <template v-else>\n      <p>Hello, {{ user.name }}</p>\n      <button type=\"button\" @click=\"handleSignOut\">Sign out</button>\n    </template>\n  </div>\n</template>\n";
var sign_in_default$3 = "<script setup lang=\"ts\">\nimport { Account } from 'appwrite'\nimport { client } from '~/utils/appwrite'\n\nconst email = ref('')\nconst password = ref('')\nconst error = ref('')\n\nasync function handleSubmit(event: Event) {\n  event.preventDefault()\n  error.value = ''\n  try {\n    const account = new Account(client)\n    await account.createEmailPasswordSession({\n      email: email.value,\n      password: password.value,\n    })\n    await navigateTo('/')\n  } catch (err) {\n    error.value = err instanceof Error ? err.message : 'Sign in failed'\n  }\n}\n<\/script>\n\n<template>\n  <form @submit=\"handleSubmit\">\n    <h1>Sign in</h1>\n    <p v-if=\"error\">{{ error }}</p>\n    <input\n      v-model=\"email\"\n      type=\"email\"\n      placeholder=\"Email\"\n      required\n    />\n    <input\n      v-model=\"password\"\n      type=\"password\"\n      placeholder=\"Password\"\n      required\n    />\n    <button type=\"submit\">Sign in</button>\n    <p>\n      No account? <NuxtLink to=\"/sign-up\">Sign up</NuxtLink>\n    </p>\n  </form>\n</template>\n";
var sign_up_default$3 = "<script setup lang=\"ts\">\nimport { Account, ID } from 'appwrite'\nimport { client } from '~/utils/appwrite'\n\nconst name = ref('')\nconst email = ref('')\nconst password = ref('')\nconst error = ref('')\n\nasync function handleSubmit(event: Event) {\n  event.preventDefault()\n  error.value = ''\n  try {\n    const account = new Account(client)\n    await account.create({\n      userId: ID.unique(),\n      email: email.value,\n      password: password.value,\n      name: name.value.trim() || undefined,\n    })\n    await account.createEmailPasswordSession({\n      email: email.value,\n      password: password.value,\n    })\n    await navigateTo('/')\n  } catch (err) {\n    error.value = err instanceof Error ? err.message : 'Sign up failed'\n  }\n}\n<\/script>\n\n<template>\n  <form @submit=\"handleSubmit\">\n    <h1>Sign up</h1>\n    <p v-if=\"error\">{{ error }}</p>\n    <input\n      v-model=\"name\"\n      type=\"text\"\n      placeholder=\"Name\"\n    />\n    <input\n      v-model=\"email\"\n      type=\"email\"\n      placeholder=\"Email\"\n      required\n    />\n    <input\n      v-model=\"password\"\n      type=\"password\"\n      placeholder=\"Password\"\n      required\n    />\n    <button type=\"submit\">Sign up</button>\n    <p>\n      Already have an account? <NuxtLink to=\"/sign-in\">Sign in</NuxtLink>\n    </p>\n  </form>\n</template>\n";
var appwrite_default$24 = "import { Client } from 'appwrite'\n\nconst client = new Client()\n  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)\n  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)\n\nexport { client }\n";
var App_default$2 = "import { useEffect, useState } from 'react'\nimport './App.css'\nimport { client } from './lib/appwrite'\nimport { Account } from 'appwrite'\nimport { SignIn } from './pages/SignIn'\nimport { SignUp } from './pages/SignUp'\n\nfunction Home() {\n  const [user, setUser] = useState(null)\n  const [loading, setLoading] = useState(true)\n\n  useEffect(() => {\n    const account = new Account(client)\n    account\n      .get()\n      .then((u) => setUser({ name: u.name }))\n      .catch(() => setUser(null))\n      .finally(() => setLoading(false))\n  }, [])\n\n  async function handleSignOut() {\n    const account = new Account(client)\n    await account.deleteSession({ sessionId: 'current' })\n    setUser(null)\n  }\n\n  if (loading) {\n    return <p>Loading...</p>\n  }\n\n  return (\n    <div>\n      {user ? (\n        <div>\n          <p>Hello, {user.name}</p>\n          <button type=\"button\" onClick={handleSignOut}>\n            Sign out\n          </button>\n        </div>\n      ) : (\n        <div>\n          <p>Sign in to get started.</p>\n          <p>\n            <a href=\"/sign-in\">Sign in</a>\n            {' · '}\n            <a href=\"/sign-up\">Sign up</a>\n          </p>\n        </div>\n      )}\n    </div>\n  )\n}\n\nfunction App() {\n  const path = window.location.pathname\n  if (path === '/sign-in') return <SignIn />\n  if (path === '/sign-up') return <SignUp />\n  return <Home />\n}\n\nexport default App\n";
var appwrite_default$25 = "import { Client } from 'appwrite'\n\nconst client = new Client()\n  .setEndpoint(process.env.REACT_APP_APPWRITE_ENDPOINT)\n  .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID)\n\nexport { client }\n";
var SignIn_default$4 = "import { useState } from 'react'\nimport { Account } from 'appwrite'\nimport { client } from '../lib/appwrite'\n\nexport function SignIn() {\n  const [email, setEmail] = useState('')\n  const [password, setPassword] = useState('')\n  const [error, setError] = useState('')\n\n  async function handleSubmit(e) {\n    e.preventDefault()\n    setError('')\n    try {\n      const account = new Account(client)\n      await account.createEmailPasswordSession({ email, password })\n      window.location.href = '/'\n    } catch (err) {\n      setError(err?.message || 'Sign in failed')\n    }\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <h1>Sign in</h1>\n      {error ? <p>{error}</p> : null}\n      <input\n        type=\"email\"\n        placeholder=\"Email\"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n        required\n      />\n      <input\n        type=\"password\"\n        placeholder=\"Password\"\n        value={password}\n        onChange={(e) => setPassword(e.target.value)}\n        required\n      />\n      <button type=\"submit\">Sign in</button>\n      <p>\n        No account? <a href=\"/sign-up\">Sign up</a>\n      </p>\n    </form>\n  )\n}\n";
var SignUp_default$4 = "import { useState } from 'react'\nimport { Account, ID } from 'appwrite'\nimport { client } from '../lib/appwrite'\n\nexport function SignUp() {\n  const [name, setName] = useState('')\n  const [email, setEmail] = useState('')\n  const [password, setPassword] = useState('')\n  const [error, setError] = useState('')\n\n  async function handleSubmit(e) {\n    e.preventDefault()\n    setError('')\n    try {\n      const account = new Account(client)\n      await account.create({\n        userId: ID.unique(),\n        email,\n        password,\n        name: name.trim() || undefined,\n      })\n      await account.createEmailPasswordSession({ email, password })\n      window.location.href = '/'\n    } catch (err) {\n      setError(err?.message || 'Sign up failed')\n    }\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <h1>Sign up</h1>\n      {error ? <p>{error}</p> : null}\n      <input\n        type=\"text\"\n        placeholder=\"Name\"\n        value={name}\n        onChange={(e) => setName(e.target.value)}\n      />\n      <input\n        type=\"email\"\n        placeholder=\"Email\"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n        required\n      />\n      <input\n        type=\"password\"\n        placeholder=\"Password\"\n        value={password}\n        onChange={(e) => setPassword(e.target.value)}\n        required\n      />\n      <button type=\"submit\">Sign up</button>\n      <p>\n        Already have an account? <a href=\"/sign-in\">Sign in</a>\n      </p>\n    </form>\n  )\n}\n";
var App_default$3 = "import { useEffect, useState } from 'react'\nimport { client } from './lib/appwrite'\nimport { Account } from 'appwrite'\nimport { SignIn } from './pages/SignIn'\nimport { SignUp } from './pages/SignUp'\n\nfunction Home() {\n  const [user, setUser] = useState<{ name: string } | null>(null)\n  const [loading, setLoading] = useState(true)\n\n  useEffect(() => {\n    const account = new Account(client)\n    account\n      .get()\n      .then((u) => setUser({ name: u.name }))\n      .catch(() => setUser(null))\n      .finally(() => setLoading(false))\n  }, [])\n\n  if (loading) {\n    return <p>Loading...</p>\n  }\n\n  if (!user) {\n    return (\n      <div>\n        <p>Sign in to get started.</p>\n        <p>\n          <a href=\"/sign-in\">Sign in</a>\n          {' · '}\n          <a href=\"/sign-up\">Sign up</a>\n        </p>\n      </div>\n    )\n  }\n\n  async function handleSignOut() {\n    const account = new Account(client)\n    await account.deleteSession({ sessionId: 'current' })\n    setUser(null)\n  }\n\n  return (\n    <div>\n      <p>Hello, {user.name}</p>\n      <button type=\"button\" onClick={handleSignOut}>\n        Sign out\n      </button>\n    </div>\n  )\n}\n\nexport default function App() {\n  const path = window.location.pathname\n  if (path === '/sign-in') return <SignIn />\n  if (path === '/sign-up') return <SignUp />\n  return <Home />\n}\n";
var appwrite_default$26 = "import { Client } from 'appwrite'\n\nconst client = new Client()\n  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)\n  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)\n\nexport { client }\n";
var SignIn_default$5 = "import { useState, type SubmitEvent } from 'react'\nimport { Account } from 'appwrite'\nimport { client } from '../lib/appwrite'\n\nexport function SignIn() {\n  const [email, setEmail] = useState('')\n  const [password, setPassword] = useState('')\n  const [error, setError] = useState('')\n\n  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {\n    e.preventDefault()\n    setError('')\n    try {\n      const account = new Account(client)\n      await account.createEmailPasswordSession({ email, password })\n      window.location.href = '/'\n    } catch (err) {\n      setError(err instanceof Error ? err.message : 'Sign in failed')\n    }\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <h1>Sign in</h1>\n      {error ? <p>{error}</p> : null}\n      <input\n        type=\"email\"\n        placeholder=\"Email\"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n        required\n      />\n      <input\n        type=\"password\"\n        placeholder=\"Password\"\n        value={password}\n        onChange={(e) => setPassword(e.target.value)}\n        required\n      />\n      <button type=\"submit\">Sign in</button>\n      <p>\n        No account? <a href=\"/sign-up\">Sign up</a>\n      </p>\n    </form>\n  )\n}\n";
var SignUp_default$5 = "import { useState, type SubmitEvent } from 'react'\nimport { Account, ID } from 'appwrite'\nimport { client } from '../lib/appwrite'\n\nexport function SignUp() {\n  const [name, setName] = useState('')\n  const [email, setEmail] = useState('')\n  const [password, setPassword] = useState('')\n  const [error, setError] = useState('')\n\n  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {\n    e.preventDefault()\n    setError('')\n    try {\n      const account = new Account(client)\n      await account.create({\n        userId: ID.unique(),\n        email,\n        password,\n        name: name.trim() || undefined,\n      })\n      await account.createEmailPasswordSession({ email, password })\n      window.location.href = '/'\n    } catch (err) {\n      setError(err instanceof Error ? err.message : 'Sign up failed')\n    }\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <h1>Sign up</h1>\n      {error ? <p>{error}</p> : null}\n      <input\n        type=\"text\"\n        placeholder=\"Name\"\n        value={name}\n        onChange={(e) => setName(e.target.value)}\n      />\n      <input\n        type=\"email\"\n        placeholder=\"Email\"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n        required\n      />\n      <input\n        type=\"password\"\n        placeholder=\"Password\"\n        value={password}\n        onChange={(e) => setPassword(e.target.value)}\n        required\n      />\n      <button type=\"submit\">Sign up</button>\n      <p>\n        Already have an account? <a href=\"/sign-in\">Sign in</a>\n      </p>\n    </form>\n  )\n}\n";
var App_default$4 = "import { createResource, Show } from 'solid-js'\nimport { Account } from 'appwrite'\nimport { client } from './lib/appwrite'\nimport { SignIn } from './pages/SignIn'\nimport { SignUp } from './pages/SignUp'\n\nfunction Home() {\n  const [user, { mutate }] = createResource(async () => {\n    const account = new Account(client)\n    return account.get().catch(() => null)\n  })\n\n  async function handleSignOut() {\n    const account = new Account(client)\n    await account.deleteSession({ sessionId: 'current' })\n    mutate(null)\n  }\n\n  return (\n    <Show when={!user.loading} fallback={<p>Loading...</p>}>\n      <Show\n        when={user()}\n        fallback={\n          <div>\n            <p>Sign in to get started.</p>\n            <p>\n              <a href=\"/sign-in\">Sign in</a>\n              {' · '}\n              <a href=\"/sign-up\">Sign up</a>\n            </p>\n          </div>\n        }\n      >\n        <div>\n          <p>Hello, {user()?.name}</p>\n          <button type=\"button\" onClick={handleSignOut}>\n            Sign out\n          </button>\n        </div>\n      </Show>\n    </Show>\n  )\n}\n\nexport default function App() {\n  const path = window.location.pathname\n  if (path === '/sign-in') return <SignIn />\n  if (path === '/sign-up') return <SignUp />\n  return <Home />\n}\n";
var appwrite_default$27 = "import { Client } from 'appwrite'\n\nconst client = new Client()\n  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)\n  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)\n\nexport { client }\n";
var SignIn_default$6 = "import { createSignal, Show } from 'solid-js'\nimport { Account } from 'appwrite'\nimport { client } from '../lib/appwrite'\n\nexport function SignIn() {\n  const [email, setEmail] = createSignal('')\n  const [password, setPassword] = createSignal('')\n  const [error, setError] = createSignal('')\n\n  async function handleSubmit(e: SubmitEvent) {\n    e.preventDefault()\n    setError('')\n    try {\n      const account = new Account(client)\n      await account.createEmailPasswordSession({\n        email: email(),\n        password: password(),\n      })\n      window.location.href = '/'\n    } catch (err) {\n      setError(err instanceof Error ? err.message : 'Sign in failed')\n    }\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <h1>Sign in</h1>\n      <Show when={error()}>\n        <p>{error()}</p>\n      </Show>\n      <input\n        type=\"email\"\n        placeholder=\"Email\"\n        value={email()}\n        onInput={(e) => setEmail(e.currentTarget.value)}\n        required\n      />\n      <input\n        type=\"password\"\n        placeholder=\"Password\"\n        value={password()}\n        onInput={(e) => setPassword(e.currentTarget.value)}\n        required\n      />\n      <button type=\"submit\">Sign in</button>\n      <p>\n        No account? <a href=\"/sign-up\">Sign up</a>\n      </p>\n    </form>\n  )\n}\n";
var SignUp_default$6 = "import { createSignal, Show } from 'solid-js'\nimport { Account, ID } from 'appwrite'\nimport { client } from '../lib/appwrite'\n\nexport function SignUp() {\n  const [name, setName] = createSignal('')\n  const [email, setEmail] = createSignal('')\n  const [password, setPassword] = createSignal('')\n  const [error, setError] = createSignal('')\n\n  async function handleSubmit(e: SubmitEvent) {\n    e.preventDefault()\n    setError('')\n    try {\n      const account = new Account(client)\n      await account.create({\n        userId: ID.unique(),\n        email: email(),\n        password: password(),\n        name: name().trim() || undefined,\n      })\n      await account.createEmailPasswordSession({\n        email: email(),\n        password: password(),\n      })\n      window.location.href = '/'\n    } catch (err) {\n      setError(err instanceof Error ? err.message : 'Sign up failed')\n    }\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <h1>Sign up</h1>\n      <Show when={error()}>\n        <p>{error()}</p>\n      </Show>\n      <input\n        type=\"text\"\n        placeholder=\"Name\"\n        value={name()}\n        onInput={(e) => setName(e.currentTarget.value)}\n      />\n      <input\n        type=\"email\"\n        placeholder=\"Email\"\n        value={email()}\n        onInput={(e) => setEmail(e.currentTarget.value)}\n        required\n      />\n      <input\n        type=\"password\"\n        placeholder=\"Password\"\n        value={password()}\n        onInput={(e) => setPassword(e.currentTarget.value)}\n        required\n      />\n      <button type=\"submit\">Sign up</button>\n      <p>\n        Already have an account? <a href=\"/sign-in\">Sign in</a>\n      </p>\n    </form>\n  )\n}\n";
var appwrite_default$28 = "import { Client } from 'appwrite'\n\nconst client = new Client()\n  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)\n  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)\n\nexport { client }\n";
var routes_default$2 = "import { A, createAsync, query, revalidate } from '@solidjs/router'\nimport { Show } from 'solid-js'\nimport { Account } from 'appwrite'\nimport { client } from '../lib/appwrite'\n\nconst getUser = query(async () => {\n  const account = new Account(client)\n  return account.get().catch(() => null)\n}, 'user')\n\nexport const route = {\n  preload: () => getUser(),\n}\n\nexport default function Home() {\n  const user = createAsync(() => getUser())\n\n  async function handleSignOut() {\n    const account = new Account(client)\n    await account.deleteSession({ sessionId: 'current' })\n    await revalidate(getUser.key)\n  }\n\n  return (\n    <Show\n      when={user()}\n      fallback={\n        <div>\n          <p>Sign in to get started.</p>\n          <p>\n            <A href=\"/sign-in\">Sign in</A>\n            {' · '}\n            <A href=\"/sign-up\">Sign up</A>\n          </p>\n        </div>\n      }\n    >\n      <div>\n        <p>Hello, {user()?.name}</p>\n        <button type=\"button\" onClick={handleSignOut}>\n          Sign out\n        </button>\n      </div>\n    </Show>\n  )\n}\n";
var sign_in_default$4 = "import { A, revalidate, useNavigate } from '@solidjs/router'\nimport { createSignal, Show } from 'solid-js'\nimport { Account } from 'appwrite'\nimport { client } from '../lib/appwrite'\n\nexport default function SignInPage() {\n  const navigate = useNavigate()\n  const [email, setEmail] = createSignal('')\n  const [password, setPassword] = createSignal('')\n  const [error, setError] = createSignal('')\n\n  async function handleSubmit(e: SubmitEvent) {\n    e.preventDefault()\n    setError('')\n    try {\n      const account = new Account(client)\n      await account.createEmailPasswordSession({\n        email: email(),\n        password: password(),\n      })\n      await revalidate('user')\n      navigate('/')\n    } catch (err) {\n      setError(err instanceof Error ? err.message : 'Sign in failed')\n    }\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <h1>Sign in</h1>\n      <Show when={error()}>\n        <p>{error()}</p>\n      </Show>\n      <input\n        type=\"email\"\n        placeholder=\"Email\"\n        value={email()}\n        onInput={(e) => setEmail(e.currentTarget.value)}\n        required\n      />\n      <input\n        type=\"password\"\n        placeholder=\"Password\"\n        value={password()}\n        onInput={(e) => setPassword(e.currentTarget.value)}\n        required\n      />\n      <button type=\"submit\">Sign in</button>\n      <p>\n        No account? <A href=\"/sign-up\">Sign up</A>\n      </p>\n    </form>\n  )\n}\n";
var sign_up_default$4 = "import { A, revalidate, useNavigate } from '@solidjs/router'\nimport { createSignal, Show } from 'solid-js'\nimport { Account, ID } from 'appwrite'\nimport { client } from '../lib/appwrite'\n\nexport default function SignUpPage() {\n  const navigate = useNavigate()\n  const [name, setName] = createSignal('')\n  const [email, setEmail] = createSignal('')\n  const [password, setPassword] = createSignal('')\n  const [error, setError] = createSignal('')\n\n  async function handleSubmit(e: SubmitEvent) {\n    e.preventDefault()\n    setError('')\n    try {\n      const account = new Account(client)\n      await account.create({\n        userId: ID.unique(),\n        email: email(),\n        password: password(),\n        name: name().trim() || undefined,\n      })\n      await account.createEmailPasswordSession({\n        email: email(),\n        password: password(),\n      })\n      await revalidate('user')\n      navigate('/')\n    } catch (err) {\n      setError(err instanceof Error ? err.message : 'Sign up failed')\n    }\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <h1>Sign up</h1>\n      <Show when={error()}>\n        <p>{error()}</p>\n      </Show>\n      <input\n        type=\"text\"\n        placeholder=\"Name\"\n        value={name()}\n        onInput={(e) => setName(e.currentTarget.value)}\n      />\n      <input\n        type=\"email\"\n        placeholder=\"Email\"\n        value={email()}\n        onInput={(e) => setEmail(e.currentTarget.value)}\n        required\n      />\n      <input\n        type=\"password\"\n        placeholder=\"Password\"\n        value={password()}\n        onInput={(e) => setPassword(e.currentTarget.value)}\n        required\n      />\n      <button type=\"submit\">Sign up</button>\n      <p>\n        Already have an account? <A href=\"/sign-in\">Sign in</A>\n      </p>\n    </form>\n  )\n}\n";
var vite_config_default = "import { defineConfig } from 'vite'\nimport { nitro } from 'nitro/vite'\nimport { solidStart } from '@solidjs/start/config'\n\nexport default defineConfig({\n  plugins: [solidStart({ ssr: false }), nitro()],\n})\n";
var App_default$5 = "<script lang=\"ts\">\n  import { onMount } from 'svelte'\n  import { Account } from 'appwrite'\n  import { client } from './lib/appwrite'\n  import SignIn from './pages/SignIn.svelte'\n  import SignUp from './pages/SignUp.svelte'\n\n  const path = window.location.pathname\n\n  let user: { name: string } | null = $state(null)\n  let loading = $state(true)\n\n  onMount(async () => {\n    try {\n      const account = new Account(client)\n      const u = await account.get()\n      user = { name: u.name }\n    } catch {\n      user = null\n    } finally {\n      loading = false\n    }\n  })\n\n  async function handleSignOut() {\n    const account = new Account(client)\n    await account.deleteSession({ sessionId: 'current' })\n    user = null\n  }\n<\/script>\n\n{#if path === '/sign-in'}\n  <SignIn />\n{:else if path === '/sign-up'}\n  <SignUp />\n{:else if loading}\n  <p>Loading...</p>\n{:else if user}\n  <p>Hello, {user.name}</p>\n  <button type=\"button\" onclick={handleSignOut}>Sign out</button>\n{:else}\n  <p>Sign in to get started.</p>\n  <p>\n    <a href=\"/sign-in\">Sign in</a>\n    {' · '}\n    <a href=\"/sign-up\">Sign up</a>\n  </p>\n{/if}\n";
var appwrite_default$29 = "import { Client } from 'appwrite'\n\nconst client = new Client()\n  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)\n  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)\n\nexport { client }\n";
var SignIn_default$7 = "<script lang=\"ts\">\n  import { Account } from 'appwrite'\n  import { client } from '../lib/appwrite'\n\n  let email = $state('')\n  let password = $state('')\n  let error = $state('')\n\n  async function handleSubmit(e: SubmitEvent) {\n    e.preventDefault()\n    error = ''\n    try {\n      const account = new Account(client)\n      await account.createEmailPasswordSession({ email, password })\n      window.location.href = '/'\n    } catch (err) {\n      error = err instanceof Error ? err.message : 'Sign in failed'\n    }\n  }\n<\/script>\n\n<form onsubmit={handleSubmit}>\n  <h1>Sign in</h1>\n  {#if error}\n    <p>{error}</p>\n  {/if}\n  <input\n    type=\"email\"\n    placeholder=\"Email\"\n    bind:value={email}\n    required\n  />\n  <input\n    type=\"password\"\n    placeholder=\"Password\"\n    bind:value={password}\n    required\n  />\n  <button type=\"submit\">Sign in</button>\n  <p>\n    No account? <a href=\"/sign-up\">Sign up</a>\n  </p>\n</form>\n";
var SignUp_default$7 = "<script lang=\"ts\">\n  import { Account, ID } from 'appwrite'\n  import { client } from '../lib/appwrite'\n\n  let name = $state('')\n  let email = $state('')\n  let password = $state('')\n  let error = $state('')\n\n  async function handleSubmit(e: SubmitEvent) {\n    e.preventDefault()\n    error = ''\n    try {\n      const account = new Account(client)\n      await account.create({\n        userId: ID.unique(),\n        email,\n        password,\n        name: name.trim() || undefined,\n      })\n      await account.createEmailPasswordSession({ email, password })\n      window.location.href = '/'\n    } catch (err) {\n      error = err instanceof Error ? err.message : 'Sign up failed'\n    }\n  }\n<\/script>\n\n<form onsubmit={handleSubmit}>\n  <h1>Sign up</h1>\n  {#if error}\n    <p>{error}</p>\n  {/if}\n  <input\n    type=\"text\"\n    placeholder=\"Name\"\n    bind:value={name}\n  />\n  <input\n    type=\"email\"\n    placeholder=\"Email\"\n    bind:value={email}\n    required\n  />\n  <input\n    type=\"password\"\n    placeholder=\"Password\"\n    bind:value={password}\n    required\n  />\n  <button type=\"submit\">Sign up</button>\n  <p>\n    Already have an account? <a href=\"/sign-in\">Sign in</a>\n  </p>\n</form>\n";
var appwrite_default$30 = "import { Client } from 'appwrite'\nimport {\n  PUBLIC_APPWRITE_ENDPOINT,\n  PUBLIC_APPWRITE_PROJECT_ID,\n} from '$env/static/public'\n\nconst client = new Client()\n  .setEndpoint(PUBLIC_APPWRITE_ENDPOINT)\n  .setProject(PUBLIC_APPWRITE_PROJECT_ID)\n\nexport { client }\n";
var __page_default = "<script lang=\"ts\">\n  import { invalidateAll } from '$app/navigation'\n  import { Account } from 'appwrite'\n  import { client } from '$lib/appwrite'\n\n  let { data } = $props()\n\n  let loading = $state(false)\n\n  async function handleSignOut() {\n    loading = true\n    try {\n      const account = new Account(client)\n      await account.deleteSession({ sessionId: 'current' })\n      await invalidateAll()\n    } catch (err) {\n      console.error(err)\n    } finally {\n      loading = false\n    }\n  }\n<\/script>\n\n<div>\n  {#if loading}\n    <p>Loading...</p>\n  {:else if data.user}\n    <p>Hello, {data.user.name}</p>\n    <button type=\"button\" onclick={handleSignOut}>Sign out</button>\n  {:else}\n    <p>Sign in to get started.</p>\n    <p>\n      <a href=\"/sign-in\">Sign in</a>\n      {' · '}\n      <a href=\"/sign-up\">Sign up</a>\n    </p>\n  {/if}\n</div>\n";
var __page_default$1 = "import type { PageLoad } from './$types'\nimport { Account } from 'appwrite'\nimport { client } from '$lib/appwrite'\n\nexport const ssr = false\n\nexport const load: PageLoad = async () => {\n  try {\n    const account = new Account(client)\n    const user = await account.get()\n    return { user }\n  } catch {\n    return { user: null }\n  }\n}\n";
var __page_default$2 = "<script lang=\"ts\">\n  import { goto } from '$app/navigation'\n  import { Account } from 'appwrite'\n  import { client } from '$lib/appwrite'\n\n  let email = $state('')\n  let password = $state('')\n  let error = $state('')\n\n  async function handleSubmit(e: SubmitEvent) {\n    e.preventDefault()\n    error = ''\n    try {\n      const account = new Account(client)\n      await account.createEmailPasswordSession({ email, password })\n      await goto('/', { invalidateAll: true })\n    } catch (err) {\n      error = err instanceof Error ? err.message : 'Sign in failed'\n    }\n  }\n<\/script>\n\n<form onsubmit={handleSubmit}>\n  <h1>Sign in</h1>\n  {#if error}\n    <p>{error}</p>\n  {/if}\n  <input\n    type=\"email\"\n    placeholder=\"Email\"\n    bind:value={email}\n    required\n  />\n  <input\n    type=\"password\"\n    placeholder=\"Password\"\n    bind:value={password}\n    required\n  />\n  <button type=\"submit\">Sign in</button>\n  <p>\n    No account? <a href=\"/sign-up\">Sign up</a>\n  </p>\n</form>\n";
var __page_default$3 = "export const ssr = false\n";
var __page_default$4 = "<script lang=\"ts\">\n  import { goto } from '$app/navigation'\n  import { Account, ID } from 'appwrite'\n  import { client } from '$lib/appwrite'\n\n  let name = $state('')\n  let email = $state('')\n  let password = $state('')\n  let error = $state('')\n\n  async function handleSubmit(e: SubmitEvent) {\n    e.preventDefault()\n    error = ''\n    try {\n      const account = new Account(client)\n      await account.create({\n        userId: ID.unique(),\n        email,\n        password,\n        name: name.trim() || undefined,\n      })\n      await account.createEmailPasswordSession({ email, password })\n      await goto('/', { invalidateAll: true })\n    } catch (err) {\n      error = err instanceof Error ? err.message : 'Sign up failed'\n    }\n  }\n<\/script>\n\n<form onsubmit={handleSubmit}>\n  <h1>Sign up</h1>\n  {#if error}\n    <p>{error}</p>\n  {/if}\n  <input\n    type=\"text\"\n    placeholder=\"Name\"\n    bind:value={name}\n  />\n  <input\n    type=\"email\"\n    placeholder=\"Email\"\n    bind:value={email}\n    required\n  />\n  <input\n    type=\"password\"\n    placeholder=\"Password\"\n    bind:value={password}\n    required\n  />\n  <button type=\"submit\">Sign up</button>\n  <p>\n    Already have an account? <a href=\"/sign-in\">Sign in</a>\n  </p>\n</form>\n";
var __page_default$5 = "export const ssr = false\n";
var appwrite_default$31 = "import { Client } from 'appwrite'\n\nconst client = new Client()\n  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)\n  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)\n\nexport { client }\n";
var routes_default$3 = "import { createFileRoute, Link, useRouter } from '@tanstack/react-router'\nimport { Account } from 'appwrite'\nimport { client } from '../lib/appwrite'\n\nexport const Route = createFileRoute('/')({\n  ssr: false,\n  loader: async () => {\n    const account = new Account(client)\n    const user = await account.get().catch(() => null)\n    return { user }\n  },\n  component: Home,\n})\n\nfunction Home() {\n  const router = useRouter()\n  const { user } = Route.useLoaderData()\n\n  if (!user) {\n    return (\n      <div>\n        <p>Sign in to get started.</p>\n        <p>\n          <Link to=\"/sign-in\">Sign in</Link>\n          {' · '}\n          <Link to=\"/sign-up\">Sign up</Link>\n        </p>\n      </div>\n    )\n  }\n\n  async function handleSignOut() {\n    const account = new Account(client)\n    await account.deleteSession({ sessionId: 'current' })\n    await router.invalidate()\n  }\n\n  return (\n    <div>\n      <p>Hello, {user.name}</p>\n      <button type=\"button\" onClick={handleSignOut}>\n        Sign out\n      </button>\n    </div>\n  )\n}\n";
var sign_in_default$5 = "import { useState, type SubmitEvent } from 'react'\nimport { createFileRoute, Link, useRouter } from '@tanstack/react-router'\nimport { Account } from 'appwrite'\nimport { client } from '../lib/appwrite'\n\nexport const Route = createFileRoute('/sign-in')({\n  ssr: false,\n  component: SignInPage,\n})\n\nfunction SignInPage() {\n  const router = useRouter()\n  const [email, setEmail] = useState('')\n  const [password, setPassword] = useState('')\n  const [error, setError] = useState('')\n\n  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {\n    e.preventDefault()\n    setError('')\n    try {\n      const account = new Account(client)\n      await account.createEmailPasswordSession({ email, password })\n      await router.invalidate()\n      await router.navigate({ to: '/' })\n    } catch (err) {\n      setError(err instanceof Error ? err.message : 'Sign in failed')\n    }\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <h1>Sign in</h1>\n      {error ? <p>{error}</p> : null}\n      <input\n        type=\"email\"\n        placeholder=\"Email\"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n        required\n      />\n      <input\n        type=\"password\"\n        placeholder=\"Password\"\n        value={password}\n        onChange={(e) => setPassword(e.target.value)}\n        required\n      />\n      <button type=\"submit\">Sign in</button>\n      <p>\n        No account? <Link to=\"/sign-up\">Sign up</Link>\n      </p>\n    </form>\n  )\n}\n";
var sign_up_default$5 = "import { useState, type SubmitEvent } from 'react'\nimport { createFileRoute, Link, useRouter } from '@tanstack/react-router'\nimport { Account, ID } from 'appwrite'\nimport { client } from '../lib/appwrite'\n\nexport const Route = createFileRoute('/sign-up')({\n  ssr: false,\n  component: SignUpPage,\n})\n\nfunction SignUpPage() {\n  const router = useRouter()\n  const [name, setName] = useState('')\n  const [email, setEmail] = useState('')\n  const [password, setPassword] = useState('')\n  const [error, setError] = useState('')\n\n  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {\n    e.preventDefault()\n    setError('')\n    try {\n      const account = new Account(client)\n      await account.create({\n        userId: ID.unique(),\n        email,\n        password,\n        name: name.trim() || undefined,\n      })\n      await account.createEmailPasswordSession({ email, password })\n      await router.invalidate()\n      await router.navigate({ to: '/' })\n    } catch (err) {\n      setError(err instanceof Error ? err.message : 'Sign up failed')\n    }\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <h1>Sign up</h1>\n      {error ? <p>{error}</p> : null}\n      <input\n        type=\"text\"\n        placeholder=\"Name\"\n        value={name}\n        onChange={(e) => setName(e.target.value)}\n      />\n      <input\n        type=\"email\"\n        placeholder=\"Email\"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n        required\n      />\n      <input\n        type=\"password\"\n        placeholder=\"Password\"\n        value={password}\n        onChange={(e) => setPassword(e.target.value)}\n        required\n      />\n      <button type=\"submit\">Sign up</button>\n      <p>\n        Already have an account? <Link to=\"/sign-in\">Sign in</Link>\n      </p>\n    </form>\n  )\n}\n";
var tauri_default = "<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <link rel=\"stylesheet\" href=\"/src/styles.css\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Connect QA</title>\n    <script type=\"module\" src=\"/src/main.ts\" defer><\/script>\n  </head>\n\n  <body>\n    <div id=\"app\"></div>\n  </body>\n</html>\n";
var appwrite_default$32 = "/// <reference types=\"vite/client\" />\n\nimport { Client } from 'appwrite'\n\nconst client = new Client()\n  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)\n  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)\n\nexport { client }\n";
var main_default$18 = "import { Account, ID } from 'appwrite'\nimport { client } from './lib/appwrite'\n\nconst account = new Account(client)\nconst app = document.querySelector<HTMLDivElement>('#app')!\n\ntype Route = 'home' | 'sign-in' | 'sign-up'\n\nfunction navigate(route: Route) {\n  if (route === 'sign-in') return renderSignIn()\n  if (route === 'sign-up') return renderSignUp()\n  return loadHome()\n}\n\nfunction onClick(id: string, handler: () => void) {\n  document.querySelector(`#${id}`)?.addEventListener('click', handler)\n}\n\nfunction showError(message: string) {\n  const el = document.querySelector('#error')\n  if (el) el.textContent = message\n}\n\nfunction renderHome(user: { name: string } | null) {\n  if (!user) {\n    app.innerHTML = `\n      <p>Sign in to get started.</p>\n      <p>\n        <button type=\"button\" id=\"to-sign-in\">Sign in</button>\n        <button type=\"button\" id=\"to-sign-up\">Sign up</button>\n      </p>\n    `\n    onClick('to-sign-in', () => navigate('sign-in'))\n    onClick('to-sign-up', () => navigate('sign-up'))\n    return\n  }\n  app.innerHTML = `\n    <p>Hello, ${user.name}</p>\n    <button type=\"button\" id=\"sign-out\">Sign out</button>\n  `\n  onClick('sign-out', async () => {\n    await account.deleteSession({ sessionId: 'current' })\n    renderHome(null)\n  })\n}\n\nfunction loadHome() {\n  app.innerHTML = '<p>Loading...</p>'\n  account\n    .get()\n    .then((user) => renderHome(user))\n    .catch(() => renderHome(null))\n}\n\nfunction renderSignIn() {\n  app.innerHTML = `\n    <form id=\"form\">\n      <h1>Sign in</h1>\n      <p id=\"error\"></p>\n      <input type=\"email\" name=\"email\" placeholder=\"Email\" required />\n      <input type=\"password\" name=\"password\" placeholder=\"Password\" required />\n      <button type=\"submit\">Sign in</button>\n      <p>No account? <button type=\"button\" id=\"to-sign-up\">Sign up</button></p>\n    </form>\n  `\n  onClick('to-sign-up', () => navigate('sign-up'))\n  document.querySelector('#form')!.addEventListener('submit', async (e) => {\n    e.preventDefault()\n    showError('')\n    const form = new FormData(e.target as HTMLFormElement)\n    try {\n      await account.createEmailPasswordSession({\n        email: String(form.get('email')),\n        password: String(form.get('password')),\n      })\n      navigate('home')\n    } catch (err) {\n      showError(err instanceof Error ? err.message : 'Sign in failed')\n    }\n  })\n}\n\nfunction renderSignUp() {\n  app.innerHTML = `\n    <form id=\"form\">\n      <h1>Sign up</h1>\n      <p id=\"error\"></p>\n      <input type=\"text\" name=\"name\" placeholder=\"Name\" />\n      <input type=\"email\" name=\"email\" placeholder=\"Email\" required />\n      <input type=\"password\" name=\"password\" placeholder=\"Password\" required />\n      <button type=\"submit\">Sign up</button>\n      <p>\n        Already have an account?\n        <button type=\"button\" id=\"to-sign-in\">Sign in</button>\n      </p>\n    </form>\n  `\n  onClick('to-sign-in', () => navigate('sign-in'))\n  document.querySelector('#form')!.addEventListener('submit', async (e) => {\n    e.preventDefault()\n    showError('')\n    const form = new FormData(e.target as HTMLFormElement)\n    const email = String(form.get('email'))\n    const password = String(form.get('password'))\n    try {\n      await account.create({\n        userId: ID.unique(),\n        email,\n        password,\n        name: String(form.get('name') ?? '').trim() || undefined,\n      })\n      await account.createEmailPasswordSession({ email, password })\n      navigate('home')\n    } catch (err) {\n      showError(err instanceof Error ? err.message : 'Sign up failed')\n    }\n  })\n}\n\nnavigate('home')\n";
var tauri_conf_default = "{\n  \"productName\": \"Connect QA\",\n  \"version\": \"1.0.0\",\n  \"identifier\": \"io.appwrite.connectqa\",\n  \"build\": {\n    \"beforeDevCommand\": \"npm run dev\",\n    \"beforeBuildCommand\": \"npm run build\",\n    \"frontendDist\": \"../dist\",\n    \"devUrl\": \"http://localhost:5173\"\n  },\n  \"app\": {\n    \"windows\": [\n      {\n        \"title\": \"Connect QA\",\n        \"width\": 800,\n        \"height\": 600\n      }\n    ],\n    \"withGlobalTauri\": true,\n    \"security\": {\n      \"csp\": null\n    }\n  }\n}\n";
var main_default$19 = "import { Client, Account, ID } from 'appwrite'\n\nconst client = new Client()\n  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)\n  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)\n\nconst account = new Account(client)\nconst app = document.querySelector('#app')\n\nfunction renderHome(user) {\n  if (!user) {\n    app.innerHTML = `\n      <p>Sign in to get started.</p>\n      <p>\n        <a href=\"/sign-in\">Sign in</a> · <a href=\"/sign-up\">Sign up</a>\n      </p>\n    `\n    return\n  }\n  app.innerHTML = `\n    <p>Hello, ${user.name}</p>\n    <button type=\"button\" id=\"sign-out\">Sign out</button>\n  `\n  document.querySelector('#sign-out').addEventListener('click', async () => {\n    await account.deleteSession({ sessionId: 'current' })\n    renderHome(null)\n  })\n}\n\nfunction renderSignIn() {\n  app.innerHTML = `\n    <form id=\"sign-in-form\">\n      <h1>Sign in</h1>\n      <p id=\"error\"></p>\n      <input type=\"email\" name=\"email\" placeholder=\"Email\" required />\n      <input type=\"password\" name=\"password\" placeholder=\"Password\" required />\n      <button type=\"submit\">Sign in</button>\n      <p>No account? <a href=\"/sign-up\">Sign up</a></p>\n    </form>\n  `\n  document\n    .querySelector('#sign-in-form')\n    .addEventListener('submit', async (e) => {\n    e.preventDefault()\n    const form = new FormData(e.target)\n    try {\n      await account.createEmailPasswordSession({\n        email: form.get('email'),\n        password: form.get('password'),\n      })\n      window.location.href = '/'\n    } catch (err) {\n      document.querySelector('#error').textContent =\n        err instanceof Error ? err.message : 'Sign in failed'\n    }\n  })\n}\n\nfunction renderSignUp() {\n  app.innerHTML = `\n    <form id=\"sign-up-form\">\n      <h1>Sign up</h1>\n      <p id=\"error\"></p>\n      <input type=\"text\" name=\"name\" placeholder=\"Name\" />\n      <input type=\"email\" name=\"email\" placeholder=\"Email\" required />\n      <input type=\"password\" name=\"password\" placeholder=\"Password\" required />\n      <button type=\"submit\">Sign up</button>\n      <p>Already have an account? <a href=\"/sign-in\">Sign in</a></p>\n    </form>\n  `\n  document\n    .querySelector('#sign-up-form')\n    .addEventListener('submit', async (e) => {\n    e.preventDefault()\n    const form = new FormData(e.target)\n    try {\n      await account.create({\n        userId: ID.unique(),\n        email: form.get('email'),\n        password: form.get('password'),\n        name: form.get('name').trim() || undefined,\n      })\n      await account.createEmailPasswordSession({\n        email: form.get('email'),\n        password: form.get('password'),\n      })\n      window.location.href = '/'\n    } catch (err) {\n      document.querySelector('#error').textContent =\n        err instanceof Error ? err.message : 'Sign up failed'\n    }\n  })\n}\n\nconst path = window.location.pathname\nif (path === '/sign-in') {\n  renderSignIn()\n} else if (path === '/sign-up') {\n  renderSignUp()\n} else {\n  app.innerHTML = '<p>Loading...</p>'\n  account\n    .get()\n    .then((user) => renderHome(user))\n    .catch(() => renderHome(null))\n}\n";
var App_default$6 = "<script setup lang=\"ts\">\nimport { ref, onMounted, computed } from 'vue'\nimport { client } from './lib/appwrite'\nimport { Account } from 'appwrite'\nimport SignIn from './pages/SignIn.vue'\nimport SignUp from './pages/SignUp.vue'\n\nconst user = ref<{ name: string } | null>(null)\nconst loading = ref(true)\n\nonMounted(async () => {\n  try {\n    const account = new Account(client)\n    const u = await account.get()\n    user.value = { name: u.name }\n  } catch {\n    user.value = null\n  } finally {\n    loading.value = false\n  }\n})\n\nasync function handleSignOut() {\n  const account = new Account(client)\n  await account.deleteSession({ sessionId: 'current' })\n  user.value = null\n}\n\nconst path = computed(() => window.location.pathname)\n<\/script>\n\n<template>\n  <SignIn v-if=\"path === '/sign-in'\" />\n  <SignUp v-else-if=\"path === '/sign-up'\" />\n  <div v-else>\n    <p v-if=\"loading\">Loading...</p>\n    <template v-else-if=\"!user\">\n      <p>Sign in to get started.</p>\n      <p>\n        <a href=\"/sign-in\">Sign in</a>\n        &middot;\n        <a href=\"/sign-up\">Sign up</a>\n      </p>\n    </template>\n    <template v-else>\n      <p>Hello, {{ user.name }}</p>\n      <button type=\"button\" @click=\"handleSignOut\">Sign out</button>\n    </template>\n  </div>\n</template>\n";
var appwrite_default$33 = "import { Client } from 'appwrite'\n\nconst client = new Client()\n  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)\n  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)\n\nexport { client }\n";
var SignIn_default$8 = "<script setup lang=\"ts\">\nimport { ref } from 'vue'\nimport { Account } from 'appwrite'\nimport { client } from '../lib/appwrite'\n\nconst email = ref('')\nconst password = ref('')\nconst error = ref('')\n\nasync function handleSubmit(event: Event) {\n  event.preventDefault()\n  error.value = ''\n  try {\n    const account = new Account(client)\n    await account.createEmailPasswordSession({\n      email: email.value,\n      password: password.value,\n    })\n    window.location.href = '/'\n  } catch (err) {\n    error.value = err instanceof Error ? err.message : 'Sign in failed'\n  }\n}\n<\/script>\n\n<template>\n  <form @submit=\"handleSubmit\">\n    <h1>Sign in</h1>\n    <p v-if=\"error\">{{ error }}</p>\n    <input\n      v-model=\"email\"\n      type=\"email\"\n      placeholder=\"Email\"\n      required\n    />\n    <input\n      v-model=\"password\"\n      type=\"password\"\n      placeholder=\"Password\"\n      required\n    />\n    <button type=\"submit\">Sign in</button>\n    <p>\n      No account? <a href=\"/sign-up\">Sign up</a>\n    </p>\n  </form>\n</template>\n";
var SignUp_default$8 = "<script setup lang=\"ts\">\nimport { ref } from 'vue'\nimport { Account, ID } from 'appwrite'\nimport { client } from '../lib/appwrite'\n\nconst name = ref('')\nconst email = ref('')\nconst password = ref('')\nconst error = ref('')\n\nasync function handleSubmit(event: Event) {\n  event.preventDefault()\n  error.value = ''\n  try {\n    const account = new Account(client)\n    await account.create({\n      userId: ID.unique(),\n      email: email.value,\n      password: password.value,\n      name: name.value.trim() || undefined,\n    })\n    await account.createEmailPasswordSession({\n      email: email.value,\n      password: password.value,\n    })\n    window.location.href = '/'\n  } catch (err) {\n    error.value = err instanceof Error ? err.message : 'Sign up failed'\n  }\n}\n<\/script>\n\n<template>\n  <form @submit=\"handleSubmit\">\n    <h1>Sign up</h1>\n    <p v-if=\"error\">{{ error }}</p>\n    <input\n      v-model=\"name\"\n      type=\"text\"\n      placeholder=\"Name\"\n    />\n    <input\n      v-model=\"email\"\n      type=\"email\"\n      placeholder=\"Email\"\n      required\n    />\n    <input\n      v-model=\"password\"\n      type=\"password\"\n      placeholder=\"Password\"\n      required\n    />\n    <button type=\"submit\">Sign up</button>\n    <p>\n      Already have an account? <a href=\"/sign-in\">Sign in</a>\n    </p>\n  </form>\n</template>\n";
var SNIPPET_SOURCES = {
	"./connect-snippets/android/java/AppwriteClient.java": AppwriteClient_default,
	"./connect-snippets/android/java/MainActivity.java": MainActivity_default,
	"./connect-snippets/android/java/SignIn.java": SignIn_default,
	"./connect-snippets/android/java/SignUp.java": SignUp_default,
	"./connect-snippets/android/java/build.gradle.kts": build_gradle_default,
	"./connect-snippets/android/kotlin/AppwriteClient.kt": AppwriteClient_default$1,
	"./connect-snippets/android/kotlin/MainActivity.kt": MainActivity_default$1,
	"./connect-snippets/android/kotlin/SignIn.kt": SignIn_default$1,
	"./connect-snippets/android/kotlin/SignUp.kt": SignUp_default$1,
	"./connect-snippets/android/kotlin/build.gradle.kts": build_gradle_default$1,
	"./connect-snippets/apple/AppwriteClient.swift": AppwriteClient_default$2,
	"./connect-snippets/apple/ContentView.swift": ContentView_default,
	"./connect-snippets/apple/SignInView.swift": SignInView_default,
	"./connect-snippets/apple/SignUpView.swift": SignUpView_default,
	"./connect-snippets/bun/elysia/src/index.ts": src_default,
	"./connect-snippets/bun/elysia/src/lib/appwrite.ts": appwrite_default,
	"./connect-snippets/bun/hono/src/index.ts": src_default$1,
	"./connect-snippets/bun/hono/src/lib/appwrite.ts": appwrite_default$1,
	"./connect-snippets/bun/vanilla/src/index.ts": src_default$2,
	"./connect-snippets/dart/frog/routes/_middleware.dart": _middleware_default,
	"./connect-snippets/dart/frog/routes/v1/policies.dart": policies_default,
	"./connect-snippets/dart/serverpod/lib/server.dart": server_default,
	"./connect-snippets/dart/serverpod/lib/src/appwrite.dart": appwrite_default$2,
	"./connect-snippets/dart/serverpod/lib/src/routes/policies_route.dart": policies_route_default,
	"./connect-snippets/dart/vanilla/bin/main.dart": main_default,
	"./connect-snippets/deno/fresh/lib/appwrite.ts": appwrite_default$3,
	"./connect-snippets/deno/fresh/routes/v1/policies.ts": policies_default$1,
	"./connect-snippets/deno/hono/lib/appwrite.ts": appwrite_default$4,
	"./connect-snippets/deno/hono/main.ts": main_default$1,
	"./connect-snippets/deno/vanilla/main.ts": main_default$2,
	"./connect-snippets/dotnet/controllers/Controllers/PoliciesController.cs": PoliciesController_default,
	"./connect-snippets/dotnet/controllers/Program.cs": Program_default,
	"./connect-snippets/dotnet/minimal/Program.cs": Program_default$1,
	"./connect-snippets/dotnet/vanilla/Program.cs": Program_default$2,
	"./connect-snippets/flutter/lib/appwrite_client.dart": appwrite_client_default,
	"./connect-snippets/flutter/lib/main.dart": main_default$3,
	"./connect-snippets/flutter/lib/sign_in.dart": sign_in_default,
	"./connect-snippets/flutter/lib/sign_up.dart": sign_up_default,
	"./connect-snippets/go/echo/appwrite.go": appwrite_default$5,
	"./connect-snippets/go/echo/main.go": main_default$4,
	"./connect-snippets/go/fiber/appwrite.go": appwrite_default$6,
	"./connect-snippets/go/fiber/main.go": main_default$5,
	"./connect-snippets/go/gin/appwrite.go": appwrite_default$7,
	"./connect-snippets/go/gin/main.go": main_default$6,
	"./connect-snippets/go/vanilla/main.go": main_default$7,
	"./connect-snippets/java/quarkus/src/main/java/com/example/AppwriteProducer.java": AppwriteProducer_default,
	"./connect-snippets/java/quarkus/src/main/java/com/example/PolicyResource.java": PolicyResource_default,
	"./connect-snippets/java/spring/src/main/java/com/example/Application.java": Application_default,
	"./connect-snippets/java/spring/src/main/java/com/example/AppwriteConfig.java": AppwriteConfig_default,
	"./connect-snippets/java/spring/src/main/java/com/example/PolicyController.java": PolicyController_default,
	"./connect-snippets/java/vanilla/src/main/java/Main.java": Main_default,
	"./connect-snippets/kotlin/ktor/src/main/kotlin/Application.kt": Application_default$1,
	"./connect-snippets/kotlin/ktor/src/main/kotlin/Appwrite.kt": Appwrite_default,
	"./connect-snippets/kotlin/spring/src/main/kotlin/com/example/Application.kt": Application_default$2,
	"./connect-snippets/kotlin/spring/src/main/kotlin/com/example/AppwriteConfig.kt": AppwriteConfig_default$1,
	"./connect-snippets/kotlin/spring/src/main/kotlin/com/example/PolicyController.kt": PolicyController_default$1,
	"./connect-snippets/kotlin/vanilla/Main.kt": Main_default$1,
	"./connect-snippets/node/express/lib/appwrite.ts": appwrite_default$8,
	"./connect-snippets/node/express/src/index.ts": src_default$3,
	"./connect-snippets/node/fastify/lib/appwrite.ts": appwrite_default$9,
	"./connect-snippets/node/fastify/src/index.ts": src_default$4,
	"./connect-snippets/node/hono/lib/appwrite.ts": appwrite_default$10,
	"./connect-snippets/node/hono/src/index.ts": src_default$5,
	"./connect-snippets/node/koa/lib/appwrite.ts": appwrite_default$11,
	"./connect-snippets/node/koa/src/index.ts": src_default$6,
	"./connect-snippets/node/nestjs/src/app.controller.ts": app_controller_default,
	"./connect-snippets/node/nestjs/src/app.module.ts": app_module_default,
	"./connect-snippets/node/nestjs/src/lib/appwrite.ts": appwrite_default$12,
	"./connect-snippets/node/nestjs/src/main.ts": main_default$8,
	"./connect-snippets/node/vanilla/src/index.ts": src_default$7,
	"./connect-snippets/php/laravel/app/Http/Controllers/PolicyController.php": PolicyController_default$2,
	"./connect-snippets/php/laravel/app/Providers/AppwriteServiceProvider.php": AppwriteServiceProvider_default,
	"./connect-snippets/php/laravel/bootstrap/app.php": app_default,
	"./connect-snippets/php/laravel/bootstrap/providers.php": providers_default,
	"./connect-snippets/php/laravel/routes/web.php": web_default,
	"./connect-snippets/php/symfony/config/routes.yaml": routes_default,
	"./connect-snippets/php/symfony/config/services.yaml": services_default,
	"./connect-snippets/php/symfony/src/Controller/PolicyController.php": PolicyController_default$3,
	"./connect-snippets/php/vanilla/index.php": vanilla_default,
	"./connect-snippets/python/django/config/appwrite.py": appwrite_default$13,
	"./connect-snippets/python/django/config/urls.py": urls_default,
	"./connect-snippets/python/django/config/views.py": views_default,
	"./connect-snippets/python/fastapi/appwrite_client.py": appwrite_client_default$1,
	"./connect-snippets/python/fastapi/main.py": main_default$9,
	"./connect-snippets/python/flask/app.py": app_default$1,
	"./connect-snippets/python/flask/appwrite_client.py": appwrite_client_default$2,
	"./connect-snippets/python/vanilla/main.py": main_default$10,
	"./connect-snippets/react-native/App.tsx": App_default,
	"./connect-snippets/react-native/lib/appwrite.ts": appwrite_default$14,
	"./connect-snippets/react-native/pages/SignIn.tsx": SignIn_default$2,
	"./connect-snippets/react-native/pages/SignUp.tsx": SignUp_default$2,
	"./connect-snippets/ruby/rails/app/controllers/policies_controller.rb": policies_controller_default,
	"./connect-snippets/ruby/rails/config/initializers/appwrite.rb": appwrite_default$15,
	"./connect-snippets/ruby/rails/config/routes.rb": routes_default$1,
	"./connect-snippets/ruby/vanilla/main.rb": main_default$11,
	"./connect-snippets/rust/actix/src/appwrite_client.rs": appwrite_client_default$3,
	"./connect-snippets/rust/actix/src/main.rs": main_default$12,
	"./connect-snippets/rust/axum/src/appwrite_client.rs": appwrite_client_default$4,
	"./connect-snippets/rust/axum/src/main.rs": main_default$13,
	"./connect-snippets/rust/vanilla/src/main.rs": main_default$14,
	"./connect-snippets/swift/vanilla/main.swift": main_default$15,
	"./connect-snippets/swift/vapor/Sources/appwrite.swift": appwrite_default$16,
	"./connect-snippets/swift/vapor/Sources/main.swift": main_default$16,
	"./connect-snippets/web/analog/src/app/pages/index.page.ts": index_page_default,
	"./connect-snippets/web/analog/src/app/pages/sign-in.page.ts": sign_in_page_default,
	"./connect-snippets/web/analog/src/app/pages/sign-up.page.ts": sign_up_page_default,
	"./connect-snippets/web/analog/src/lib/appwrite.ts": appwrite_default$17,
	"./connect-snippets/web/angular/src/app/app.component.ts": app_component_default,
	"./connect-snippets/web/angular/src/app/app.routes.ts": app_routes_default,
	"./connect-snippets/web/angular/src/app/appwrite.service.ts": appwrite_service_default,
	"./connect-snippets/web/angular/src/app/home.component.ts": home_component_default,
	"./connect-snippets/web/angular/src/app/sign-in.component.ts": sign_in_component_default,
	"./connect-snippets/web/angular/src/app/sign-up.component.ts": sign_up_component_default,
	"./connect-snippets/web/angular/src/lib/appwrite.ts": appwrite_default$18,
	"./connect-snippets/web/astro/src/lib/appwrite.ts": appwrite_default$19,
	"./connect-snippets/web/astro/src/pages/index.astro": pages_default,
	"./connect-snippets/web/astro/src/pages/sign-in.astro": sign_in_default$1,
	"./connect-snippets/web/astro/src/pages/sign-up.astro": sign_up_default$1,
	"./connect-snippets/web/capacitor/capacitor.config.ts": capacitor_config_default,
	"./connect-snippets/web/capacitor/src/lib/appwrite.ts": appwrite_default$20,
	"./connect-snippets/web/capacitor/src/main.ts": main_default$17,
	"./connect-snippets/web/ionic/src/App.tsx": App_default$1,
	"./connect-snippets/web/ionic/src/lib/appwrite.ts": appwrite_default$21,
	"./connect-snippets/web/ionic/src/pages/SignIn.tsx": SignIn_default$3,
	"./connect-snippets/web/ionic/src/pages/SignUp.tsx": SignUp_default$3,
	"./connect-snippets/web/next/app/app/page.tsx": page_default,
	"./connect-snippets/web/next/app/app/sign-in/page.tsx": page_default$1,
	"./connect-snippets/web/next/app/app/sign-up/page.tsx": page_default$2,
	"./connect-snippets/web/next/app/lib/appwrite.ts": appwrite_default$22,
	"./connect-snippets/web/next/pages/lib/appwrite.ts": appwrite_default$23,
	"./connect-snippets/web/next/pages/pages/index.tsx": pages_default$1,
	"./connect-snippets/web/next/pages/pages/sign-in.tsx": sign_in_default$2,
	"./connect-snippets/web/next/pages/pages/sign-up.tsx": sign_up_default$2,
	"./connect-snippets/web/nuxt/pages/index.vue": pages_default$2,
	"./connect-snippets/web/nuxt/pages/sign-in.vue": sign_in_default$3,
	"./connect-snippets/web/nuxt/pages/sign-up.vue": sign_up_default$3,
	"./connect-snippets/web/nuxt/utils/appwrite.ts": appwrite_default$24,
	"./connect-snippets/web/react/cra/src/App.js": App_default$2,
	"./connect-snippets/web/react/cra/src/lib/appwrite.js": appwrite_default$25,
	"./connect-snippets/web/react/cra/src/pages/SignIn.js": SignIn_default$4,
	"./connect-snippets/web/react/cra/src/pages/SignUp.js": SignUp_default$4,
	"./connect-snippets/web/react/vite/src/App.tsx": App_default$3,
	"./connect-snippets/web/react/vite/src/lib/appwrite.ts": appwrite_default$26,
	"./connect-snippets/web/react/vite/src/pages/SignIn.tsx": SignIn_default$5,
	"./connect-snippets/web/react/vite/src/pages/SignUp.tsx": SignUp_default$5,
	"./connect-snippets/web/solid/src/App.tsx": App_default$4,
	"./connect-snippets/web/solid/src/lib/appwrite.ts": appwrite_default$27,
	"./connect-snippets/web/solid/src/pages/SignIn.tsx": SignIn_default$6,
	"./connect-snippets/web/solid/src/pages/SignUp.tsx": SignUp_default$6,
	"./connect-snippets/web/solidstart/src/lib/appwrite.ts": appwrite_default$28,
	"./connect-snippets/web/solidstart/src/routes/index.tsx": routes_default$2,
	"./connect-snippets/web/solidstart/src/routes/sign-in.tsx": sign_in_default$4,
	"./connect-snippets/web/solidstart/src/routes/sign-up.tsx": sign_up_default$4,
	"./connect-snippets/web/solidstart/vite.config.ts": vite_config_default,
	"./connect-snippets/web/svelte/src/App.svelte": App_default$5,
	"./connect-snippets/web/svelte/src/lib/appwrite.ts": appwrite_default$29,
	"./connect-snippets/web/svelte/src/pages/SignIn.svelte": SignIn_default$7,
	"./connect-snippets/web/svelte/src/pages/SignUp.svelte": SignUp_default$7,
	"./connect-snippets/web/sveltekit/src/lib/appwrite.ts": appwrite_default$30,
	"./connect-snippets/web/sveltekit/src/routes/+page.svelte": __page_default,
	"./connect-snippets/web/sveltekit/src/routes/+page.ts": __page_default$1,
	"./connect-snippets/web/sveltekit/src/routes/sign-in/+page.svelte": __page_default$2,
	"./connect-snippets/web/sveltekit/src/routes/sign-in/+page.ts": __page_default$3,
	"./connect-snippets/web/sveltekit/src/routes/sign-up/+page.svelte": __page_default$4,
	"./connect-snippets/web/sveltekit/src/routes/sign-up/+page.ts": __page_default$5,
	"./connect-snippets/web/tanstack/src/lib/appwrite.ts": appwrite_default$31,
	"./connect-snippets/web/tanstack/src/routes/index.tsx": routes_default$3,
	"./connect-snippets/web/tanstack/src/routes/sign-in.tsx": sign_in_default$5,
	"./connect-snippets/web/tanstack/src/routes/sign-up.tsx": sign_up_default$5,
	"./connect-snippets/web/tauri/index.html": tauri_default,
	"./connect-snippets/web/tauri/src/lib/appwrite.ts": appwrite_default$32,
	"./connect-snippets/web/tauri/src/main.ts": main_default$18,
	"./connect-snippets/web/tauri/src-tauri/tauri.conf.json": tauri_conf_default,
	"./connect-snippets/web/vanilla/src/main.js": main_default$19,
	"./connect-snippets/web/vue/src/App.vue": App_default$6,
	"./connect-snippets/web/vue/src/lib/appwrite.ts": appwrite_default$33,
	"./connect-snippets/web/vue/src/pages/SignIn.vue": SignIn_default$8,
	"./connect-snippets/web/vue/src/pages/SignUp.vue": SignUp_default$8
};
var EXTENSION_LANGUAGES = {
	ts: "typescript",
	tsx: "typescript",
	js: "javascript",
	vue: "markup",
	svelte: "markup",
	astro: "markup",
	yaml: "yaml",
	json: "json",
	dart: "dart",
	py: "python",
	php: "php",
	rb: "ruby",
	cs: "csharp",
	go: "go",
	swift: "swift",
	kt: "kotlin",
	kts: "kotlin",
	java: "java",
	rs: "rust",
	xcconfig: "plaintext"
};
function languageForFile(path) {
	return EXTENSION_LANGUAGES[path.split(".").pop() ?? ""];
}
function getSnippet(path, vars) {
	const code = SNIPPET_SOURCES[`./connect-snippets/${path}`];
	if (code === void 0) throw new Error(`Missing connect snippet file: ${path}`);
	return Object.entries(vars).reduce((acc, [name, value]) => acc.replaceAll(`{{${name}}}`, value), code);
}
var SAMPLE_OVERRIDES = {
	"web/next": { dir: "web/next/pages" },
	"web/react": { dir: "web/react/vite" },
	"web/angular": {
		envLabel: "src/environments/environment.ts",
		envLanguage: "typescript"
	},
	web: { dir: "web/vanilla" },
	node: { dir: "node/vanilla" },
	deno: { dir: "deno/vanilla" },
	bun: { dir: "bun/vanilla" },
	apple: { envLabel: "Appwrite.xcconfig" },
	android: {
		dir: "android/kotlin",
		envLabel: "gradle.properties"
	},
	"android/kotlin": { envLabel: "gradle.properties" },
	"android/java": { envLabel: "gradle.properties" },
	flutter: {
		envLabel: "env.json",
		envLanguage: "json"
	},
	"python/python": { dir: "python/vanilla" },
	python: { dir: "python/vanilla" },
	"php/php": { dir: "php/vanilla" },
	php: { dir: "php/vanilla" },
	"ruby/ruby": { dir: "ruby/vanilla" },
	ruby: { dir: "ruby/vanilla" },
	"go/go": { dir: "go/vanilla" },
	go: { dir: "go/vanilla" },
	"rust/rust": { dir: "rust/vanilla" },
	rust: { dir: "rust/vanilla" },
	"dart/dart": { dir: "dart/vanilla" },
	dart: { dir: "dart/vanilla" },
	"swift/swift": {
		dir: "swift/vanilla",
		envLabel: ".env or xcconfig"
	},
	swift: {
		dir: "swift/vanilla",
		envLabel: ".env or xcconfig"
	},
	"dotnet/dotnet": {
		dir: "dotnet/vanilla",
		envLabel: ".env or launchSettings"
	},
	dotnet: {
		dir: "dotnet/vanilla",
		envLabel: ".env or launchSettings"
	},
	"kotlin/kotlin": {
		dir: "kotlin/vanilla",
		envLabel: ".env or env vars"
	},
	kotlin: {
		dir: "kotlin/vanilla",
		envLabel: ".env or env vars"
	},
	"java/java": {
		dir: "java/vanilla",
		envLabel: ".env or env vars"
	},
	java: {
		dir: "java/vanilla",
		envLabel: ".env or env vars"
	},
	"java/spring": { envLabel: ".env or env vars" },
	"java/quarkus": { envLabel: ".env or env vars" },
	"kotlin/spring": { envLabel: ".env or env vars" },
	"kotlin/ktor": { envLabel: ".env or env vars" },
	"swift/vapor": { envLabel: ".env or env vars" },
	"dotnet/minimal": { envLabel: ".env or launchSettings" },
	"dotnet/controllers": { envLabel: ".env or launchSettings" }
};
var EXTENSION_PRIORITY = [
	"ts",
	"tsx",
	"js",
	"jsx"
];
function splitExtension(path) {
	const dot = path.lastIndexOf(".");
	return dot > path.lastIndexOf("/") + 1 ? [path.slice(0, dot), path.slice(dot + 1)] : [path, ""];
}
function snippetRank(path) {
	const [stem, extension] = splitExtension(path.split("/").pop()?.toLowerCase() ?? "");
	if (stem === "config" || stem.endsWith(".config")) return 0;
	if (extension === "kts" || extension === "gradle") return 0;
	if (stem === "appwrite") return 1;
	return stem.includes("appwrite") ? 2 : 3;
}
function extensionWeight(extension) {
	const index = EXTENSION_PRIORITY.indexOf(extension);
	return index === -1 ? EXTENSION_PRIORITY.length : index;
}
function compareSnippetFiles(a, b) {
	const rank = snippetRank(a) - snippetRank(b);
	if (rank !== 0) return rank;
	const [aStem, aExtension] = splitExtension(a);
	const [bStem, bExtension] = splitExtension(b);
	if (aStem !== bStem) return aStem < bStem ? -1 : 1;
	return extensionWeight(aExtension) - extensionWeight(bExtension) || aExtension.localeCompare(bExtension);
}
function snippetFilesIn(dir) {
	const prefix = `./connect-snippets/${dir}/`;
	return Object.keys(SNIPPET_SOURCES).filter((path) => path.startsWith(prefix)).map((path) => path.slice(prefix.length)).sort(compareSnippetFiles);
}
function getEnvExample(sdkId, runtime, frameworkId, usingId, endpoint, projectId) {
	const isServer = runtime === "server" || sdkId === "node" || sdkId === "deno";
	if (sdkId === "react-native") return `EXPO_PUBLIC_APPWRITE_ENDPOINT=${endpoint}\nEXPO_PUBLIC_APPWRITE_PROJECT_ID=${projectId}`;
	if (sdkId === "flutter") return `{\n  "APPWRITE_ENDPOINT": "${endpoint}",\n  "APPWRITE_PROJECT_ID": "${projectId}"\n}`;
	if (sdkId === "android") return `APPWRITE_ENDPOINT=${endpoint}\nAPPWRITE_PROJECT_ID=${projectId}`;
	if (sdkId === "apple") return [
		"// Add to the target config, then point both Info.plist keys at",
		"// $(APPWRITE_ENDPOINT) and $(APPWRITE_PROJECT_ID).",
		`APPWRITE_ENDPOINT = ${endpoint.replace("//", "/$()/")}`,
		`APPWRITE_PROJECT_ID = ${projectId}`
	].join("\n");
	if (sdkId === "web" && !isServer) {
		if (frameworkId === "next") return `NEXT_PUBLIC_APPWRITE_ENDPOINT=${endpoint}\nNEXT_PUBLIC_APPWRITE_PROJECT_ID=${projectId}`;
		if (frameworkId === "react" && usingId === "cra") return `REACT_APP_APPWRITE_ENDPOINT=${endpoint}\nREACT_APP_APPWRITE_PROJECT_ID=${projectId}`;
		if (frameworkId === "sveltekit" || frameworkId === "astro") return `PUBLIC_APPWRITE_ENDPOINT=${endpoint}\nPUBLIC_APPWRITE_PROJECT_ID=${projectId}`;
		if (frameworkId === "angular") return `export const environment = {\n  appwriteEndpoint: '${endpoint}',\n  appwriteProjectId: '${projectId}',\n}`;
		return `VITE_APPWRITE_ENDPOINT=${endpoint}\nVITE_APPWRITE_PROJECT_ID=${projectId}`;
	}
	return `APPWRITE_ENDPOINT=${endpoint}\nAPPWRITE_PROJECT_ID=${projectId}\nAPPWRITE_API_KEY=your-api-key`;
}
function getCodeFiles(sdkId, frameworkId, usingId, runtime, endpoint, projectId, packageManagerId) {
	const candidates = [
		`${sdkId}/${frameworkId}/${usingId}`,
		`${sdkId}/${frameworkId}`,
		sdkId
	];
	for (const key of candidates) {
		const override = SAMPLE_OVERRIDES[key];
		const dir = override?.dir ?? key;
		const files = snippetFilesIn(dir);
		if (files.length === 0) continue;
		const vars = {
			DENO_SDK_SPECIFIER: packageManagerId === "npm" ? "npm:node-appwrite" : "jsr:@appwrite/sdk",
			PROJECT_ID: projectId
		};
		return [{
			label: override?.envLabel ?? ".env",
			code: getEnvExample(sdkId, runtime, frameworkId, usingId, endpoint, projectId),
			language: override?.envLanguage ?? "env"
		}, ...files.map((file) => ({
			label: file,
			code: getSnippet(`${dir}/${file}`, vars),
			language: languageForFile(file)
		}))];
	}
	return getCodeFiles("web", "vanilla", "vite", "client", endpoint, projectId, "npm");
}
function getInstallInstructions(sdkId, packageManagerId) {
	switch (sdkId) {
		case "web": {
			const options = [
				{
					label: "npm",
					code: "npm install appwrite",
					language: "bash"
				},
				{
					label: "bun",
					code: "bun add appwrite",
					language: "bash"
				},
				{
					label: "pnpm",
					code: "pnpm add appwrite",
					language: "bash"
				},
				{
					label: "yarn",
					code: "yarn add appwrite",
					language: "bash"
				}
			];
			return {
				title: "Install the Web SDK",
				options: packageManagerId && packageManagerId !== "any" ? options.filter((o) => o.label === packageManagerId) : options
			};
		}
		case "node": {
			const options = [
				{
					label: "npm",
					code: "npm install node-appwrite",
					language: "bash"
				},
				{
					label: "bun",
					code: "bun add node-appwrite",
					language: "bash"
				},
				{
					label: "pnpm",
					code: "pnpm add node-appwrite",
					language: "bash"
				},
				{
					label: "yarn",
					code: "yarn add node-appwrite",
					language: "bash"
				}
			];
			return {
				title: "Install the Node.js SDK",
				options: packageManagerId && packageManagerId !== "any" ? options.filter((o) => o.label === packageManagerId) : options
			};
		}
		case "bun": {
			const options = [
				{
					label: "npm",
					code: "npm install node-appwrite",
					language: "bash"
				},
				{
					label: "bun",
					code: "bun add node-appwrite",
					language: "bash"
				},
				{
					label: "pnpm",
					code: "pnpm add node-appwrite",
					language: "bash"
				},
				{
					label: "yarn",
					code: "yarn add node-appwrite",
					language: "bash"
				}
			];
			return {
				title: "Install the Bun SDK",
				options: packageManagerId && packageManagerId !== "any" ? options.filter((o) => o.label === packageManagerId) : options
			};
		}
		case "deno": {
			const options = [{
				label: "jsr",
				code: "deno add jsr:@appwrite/sdk",
				language: "bash"
			}, {
				label: "npm",
				code: "deno add npm:node-appwrite",
				language: "bash"
			}];
			return {
				title: "Install the Deno SDK",
				options: packageManagerId && packageManagerId !== "any" ? options.filter((o) => o.label === packageManagerId) : options
			};
		}
		case "flutter": return {
			title: "Install the Flutter SDK",
			options: [{
				label: "1. Add to pubspec.yaml",
				code: "dependencies:\n  appwrite: ^25.4.0",
				language: "plaintext"
			}, {
				label: "2. Install packages",
				code: "flutter pub get",
				language: "bash"
			}]
		};
		case "apple": return {
			title: "Install the Apple SDK",
			options: [{
				label: "Xcode (Swift Package Manager)",
				code: "File → Add Package Dependencies\nhttps://github.com/appwrite/sdk-for-apple",
				language: "plaintext"
			}, {
				label: "Package.swift",
				code: ".package(\n  url: \"https://github.com/appwrite/sdk-for-apple\",\n  from: \"18.3.0\"\n)",
				language: "swift"
			}]
		};
		case "android": return {
			title: "Install the Android SDK",
			options: [{
				label: "1. Add to build.gradle.kts (module)",
				code: "implementation(\"io.appwrite:sdk-for-android:26.0.0\")",
				language: "kotlin"
			}, {
				label: "2. Sync project",
				code: "Sync your Gradle project in Android Studio.",
				language: "plaintext"
			}]
		};
		case "react-native": {
			const options = [
				{
					label: "npm",
					code: "npm install react-native-appwrite",
					language: "bash"
				},
				{
					label: "bun",
					code: "bun add react-native-appwrite",
					language: "bash"
				},
				{
					label: "pnpm",
					code: "pnpm add react-native-appwrite",
					language: "bash"
				},
				{
					label: "yarn",
					code: "yarn add react-native-appwrite",
					language: "bash"
				}
			];
			return {
				title: "Install the React Native SDK",
				options: packageManagerId && packageManagerId !== "any" ? options.filter((o) => o.label === packageManagerId) : options
			};
		}
		case "python": return {
			title: "Install the Python SDK",
			options: [{
				label: "pip",
				code: "pip install appwrite",
				language: "bash"
			}]
		};
		case "dart": return {
			title: "Install the Dart SDK",
			options: [{
				label: "Add to pubspec.yaml",
				code: "dependencies:\n  appwrite: ^25.4.0",
				language: "plaintext"
			}, {
				label: "Install",
				code: "dart pub get",
				language: "bash"
			}]
		};
		case "php": return {
			title: "Install the PHP SDK",
			options: [{
				label: "Composer",
				code: "composer require appwrite/appwrite",
				language: "bash"
			}]
		};
		case "ruby": return {
			title: "Install the Ruby SDK",
			options: [{
				label: "Gem",
				code: "gem install appwrite",
				language: "bash"
			}]
		};
		case "dotnet": return {
			title: "Install the .NET SDK",
			options: [{
				label: "NuGet",
				code: "dotnet add package Appwrite",
				language: "bash"
			}]
		};
		case "go": return {
			title: "Install the Go SDK",
			options: [{
				label: "go get",
				code: "go get github.com/appwrite/sdk-for-go",
				language: "bash"
			}]
		};
		case "java": return {
			title: "Install the Java SDK",
			options: [{
				label: "Gradle (build.gradle.kts)",
				code: "implementation(\"io.appwrite:sdk-for-kotlin:19.1.0\")\nimplementation(\"com.google.code.gson:gson:2.14.0\")",
				language: "kotlin"
			}, {
				label: "Maven (pom.xml)",
				code: "<dependency>\n  <groupId>io.appwrite</groupId>\n  <artifactId>sdk-for-kotlin</artifactId>\n  <version>19.1.0</version>\n</dependency>\n<dependency>\n  <groupId>com.google.code.gson</groupId>\n  <artifactId>gson</artifactId>\n  <version>2.14.0</version>\n</dependency>",
				language: "markup"
			}]
		};
		case "rust": return {
			title: "Install the Rust SDK",
			options: [{
				label: "cargo",
				code: "cargo add appwrite",
				language: "bash"
			}]
		};
		case "swift": return {
			title: "Install the Swift SDK",
			options: [{
				label: "Package.swift",
				code: ".package(\n  url: \"https://github.com/appwrite/sdk-for-swift\",\n  from: \"20.0.0\"\n)",
				language: "swift"
			}]
		};
		case "kotlin": return {
			title: "Install the Kotlin SDK",
			options: [{
				label: "Add to build.gradle.kts",
				code: "implementation(\"io.appwrite:sdk-for-kotlin:19.1.0\")\nimplementation(\"com.google.code.gson:gson:2.14.0\")",
				language: "kotlin"
			}]
		};
		default: return getInstallInstructions("web", "npm");
	}
}
function markdownFenceLanguage(language, fileLabel) {
	if (!language || language === "plaintext") {
		const ext = fileLabel.split(".").pop()?.toLowerCase();
		if (ext && ext !== fileLabel.toLowerCase()) return ext;
		return "";
	}
	if (language === "markup") {
		const ext = fileLabel.split(".").pop()?.toLowerCase();
		if (ext === "svelte" || ext === "vue" || ext === "html" || ext === "xml") return ext;
		return "html";
	}
	if (language === "node" || language === "deno" || language === "bun") return "javascript";
	if (language === "dotnet") return "csharp";
	return language;
}
function buildConnectSdkPrompt(input) {
	const lines = [
		"Connect this app to Appwrite using the SDK setup below.",
		"Apply the install step and create each file with the exact contents shown.",
		"",
		"## Project",
		"",
		`- Project ID: \`${input.projectId}\``
	];
	if (input.projectName?.trim()) lines.push(`- Project name: ${input.projectName.trim()}`);
	lines.push(`- Endpoint: \`${input.endpoint}\``, `- SDK / Platform: ${input.sdkLabel} (${input.runtime})`);
	if (input.frameworkLabel) lines.push(`- Framework: ${input.frameworkLabel}`);
	if (input.usingLabel) lines.push(`- Using: ${input.usingLabel}`);
	if (input.packageManagerLabel) lines.push(`- Package manager: ${input.packageManagerLabel}`);
	lines.push("", `## ${input.installTitle}`, "");
	for (const option of input.installOptions) {
		const fence = markdownFenceLanguage(option.language, option.label);
		if (input.installOptions.length > 1) lines.push(`### ${option.label}`, "");
		lines.push(`\`\`\`${fence}`, option.code.trimEnd(), "```", "");
	}
	if (input.codeFiles.length > 0) {
		lines.push("## Project files", "");
		for (const file of input.codeFiles) {
			const fence = markdownFenceLanguage(file.language, file.label);
			lines.push(`### \`${file.label}\``, "", `\`\`\`${fence}`, file.code.trimEnd(), "```", "");
		}
	}
	lines.push("## Notes", "");
	if (input.runtime === "server") lines.push("- Server and backend code need an Appwrite API key with the right scopes. Create one in the project console and keep it secret (do not commit it).");
	lines.push("- Prefer the latest Appwrite SDK release when installing packages.", "- Docs: https://appwrite.io/docs");
	return lines.join("\n").trimEnd() + "\n";
}
const SKILLS_TRY_IT_PROMPTS = [
	"Implement email/password sign-in with the Appwrite SDK",
	"Review my Appwrite auth implementation against best practices",
	"Add Realtime updates to my dashboard with the Appwrite SDK"
];
function useAnalytics() {
	const location = useLocation();
	const matches = useMatches();
	const leafRoute = matches[matches.length - 1];
	const routePath = useMemo(() => getAnalyticsRoutePath(leafRoute?.routeId, location.pathname), [leafRoute?.routeId, location.pathname]);
	const track = useCallback((eventName, props = {}) => {
		trackEvent(eventName, props, { routePath });
	}, [routePath]);
	return {
		area: getAnalyticsArea(routePath),
		routePath,
		routeUrl: getAnalyticsRouteUrl(routePath),
		track
	};
}
var APPWRITE_DOCS_URL = "/docs";
var APPWRITE_SKILLS_DOCS_URL = "/docs/tooling/skills";
var SDK_API_KEY_DEFAULT_NAME = "SDK";
var { Icon: GitHubIcon } = getVcsProvider("github");
var CLIENT_PLATFORM_OPTIONS = [
	{
		id: "web",
		label: "Web"
	},
	{
		id: "flutter",
		label: "Flutter"
	},
	{
		id: "react-native",
		label: "React Native"
	},
	{
		id: "ionic",
		label: "Ionic",
		sdkId: "web"
	},
	{
		id: "capacitor",
		label: "Capacitor",
		sdkId: "web"
	},
	{
		id: "tauri",
		label: "Tauri",
		sdkId: "web"
	},
	{
		id: "apple",
		label: "Apple"
	},
	{
		id: "android",
		label: "Android"
	}
];
function isKnownPlatform(id) {
	return CLIENT_PLATFORM_OPTIONS.some((o) => o.id === id) || SERVER_SDK_OPTIONS.some((o) => o.id === id);
}
var SERVER_SDK_OPTIONS = [
	{
		id: "node",
		platform: "web",
		label: "Node.js"
	},
	{
		id: "deno",
		platform: "web",
		label: "Deno"
	},
	{
		id: "bun",
		platform: "web",
		label: "Bun"
	},
	{
		id: "go",
		platform: "web",
		label: "Go"
	},
	{
		id: "python",
		platform: "web",
		label: "Python"
	},
	{
		id: "php",
		platform: "web",
		label: "PHP"
	},
	{
		id: "ruby",
		platform: "web",
		label: "Ruby"
	},
	{
		id: "dart",
		platform: "web",
		label: "Dart"
	},
	{
		id: "swift",
		platform: "apple",
		label: "Swift"
	},
	{
		id: "dotnet",
		platform: "web",
		label: ".NET"
	},
	{
		id: "kotlin",
		platform: "android",
		label: "Kotlin"
	},
	{
		id: "java",
		platform: "web",
		label: "Java"
	},
	{
		id: "rust",
		platform: "web",
		label: "Rust"
	}
];
var FRAMEWORK_OPTIONS = {
	web: [
		{
			id: "tanstack",
			label: "TanStack Start"
		},
		{
			id: "next",
			label: "Next.js"
		},
		{
			id: "react",
			label: "React"
		},
		{
			id: "sveltekit",
			label: "SvelteKit"
		},
		{
			id: "svelte",
			label: "Svelte"
		},
		{
			id: "nuxt",
			label: "Nuxt"
		},
		{
			id: "vue",
			label: "Vue.js"
		},
		{
			id: "analog",
			label: "Analog"
		},
		{
			id: "angular",
			label: "Angular"
		},
		{
			id: "solidstart",
			label: "SolidStart"
		},
		{
			id: "solid",
			label: "Solid"
		},
		{
			id: "astro",
			label: "Astro"
		},
		{
			id: "vanilla",
			label: "Vanilla"
		}
	],
	node: [
		{
			id: "hono",
			label: "Hono"
		},
		{
			id: "fastify",
			label: "Fastify"
		},
		{
			id: "nestjs",
			label: "NestJS"
		},
		{
			id: "express",
			label: "Express"
		},
		{
			id: "koa",
			label: "Koa"
		},
		{
			id: "vanilla",
			label: "Vanilla"
		}
	],
	bun: [
		{
			id: "hono",
			label: "Hono"
		},
		{
			id: "elysia",
			label: "ElysiaJS"
		},
		{
			id: "vanilla",
			label: "Vanilla"
		}
	],
	flutter: [{
		id: "flutter",
		label: "Vanilla"
	}],
	"react-native": [{
		id: "expo",
		label: "Vanilla",
		icon: "react-native"
	}],
	ionic: [{
		id: "ionic",
		label: "Vanilla"
	}],
	capacitor: [{
		id: "capacitor",
		label: "Vanilla"
	}],
	tauri: [{
		id: "tauri",
		label: "Vanilla"
	}],
	apple: [{
		id: "swift",
		label: "Swift"
	}],
	android: [{
		id: "kotlin",
		label: "Kotlin"
	}, {
		id: "java",
		label: "Java"
	}],
	python: [
		{
			id: "fastapi",
			label: "FastAPI"
		},
		{
			id: "django",
			label: "Django"
		},
		{
			id: "flask",
			label: "Flask"
		},
		{
			id: "python",
			label: "Vanilla"
		}
	],
	dart: [
		{
			id: "serverpod",
			label: "Serverpod"
		},
		{
			id: "frog",
			label: "Dart Frog"
		},
		{
			id: "dart",
			label: "Vanilla"
		}
	],
	php: [
		{
			id: "laravel",
			label: "Laravel"
		},
		{
			id: "symfony",
			label: "Symfony"
		},
		{
			id: "php",
			label: "Vanilla"
		}
	],
	ruby: [{
		id: "rails",
		label: "Rails"
	}, {
		id: "ruby",
		label: "Vanilla"
	}],
	dotnet: [
		{
			id: "minimal",
			label: "Minimal API"
		},
		{
			id: "controllers",
			label: "Controllers"
		},
		{
			id: "dotnet",
			label: "Vanilla"
		}
	],
	go: [
		{
			id: "gin",
			label: "Gin"
		},
		{
			id: "echo",
			label: "Echo"
		},
		{
			id: "fiber",
			label: "Fiber"
		},
		{
			id: "go",
			label: "Vanilla"
		}
	],
	java: [
		{
			id: "spring",
			label: "Spring Boot"
		},
		{
			id: "quarkus",
			label: "Quarkus"
		},
		{
			id: "java",
			label: "Vanilla"
		}
	],
	rust: [
		{
			id: "axum",
			label: "Axum"
		},
		{
			id: "actix",
			label: "Actix Web"
		},
		{
			id: "rust",
			label: "Vanilla"
		}
	],
	swift: [{
		id: "vapor",
		label: "Vapor"
	}, {
		id: "swift",
		label: "Vanilla"
	}],
	kotlin: [
		{
			id: "ktor",
			label: "Ktor"
		},
		{
			id: "spring",
			label: "Spring Boot"
		},
		{
			id: "kotlin",
			label: "Vanilla"
		}
	],
	deno: [
		{
			id: "hono",
			label: "Hono"
		},
		{
			id: "fresh",
			label: "Fresh"
		},
		{
			id: "vanilla",
			label: "Vanilla"
		}
	]
};
var USING_OPTIONS = {
	react: [{
		id: "vite",
		label: "Vite"
	}, {
		id: "cra",
		label: "Create React App"
	}],
	next: [{
		id: "app",
		label: "App Router"
	}, {
		id: "pages",
		label: "Pages Router"
	}],
	tanstack: [{
		id: "vite",
		label: "Vite"
	}],
	sveltekit: [{
		id: "vite",
		label: "Vite"
	}],
	svelte: [{
		id: "vite",
		label: "Vite"
	}],
	nuxt: [{
		id: "vite",
		label: "Vite"
	}],
	vue: [{
		id: "vite",
		label: "Vite"
	}],
	analog: [{
		id: "vite",
		label: "Vite"
	}],
	angular: [{
		id: "cli",
		label: "Angular CLI"
	}],
	solidstart: [{
		id: "vite",
		label: "Vite"
	}],
	solid: [{
		id: "vite",
		label: "Vite"
	}],
	astro: [{
		id: "vite",
		label: "Vite"
	}],
	ionic: [{
		id: "vite",
		label: "Ionic React"
	}],
	capacitor: [{
		id: "vite",
		label: "Vite"
	}],
	tauri: [{
		id: "vite",
		label: "Vite"
	}]
};
var PACKAGE_MANAGER_OPTIONS = {
	web: [
		{
			id: "npm",
			label: "npm"
		},
		{
			id: "bun",
			label: "bun"
		},
		{
			id: "pnpm",
			label: "pnpm"
		},
		{
			id: "yarn",
			label: "yarn"
		}
	],
	node: [
		{
			id: "npm",
			label: "npm"
		},
		{
			id: "bun",
			label: "bun"
		},
		{
			id: "pnpm",
			label: "pnpm"
		},
		{
			id: "yarn",
			label: "yarn"
		}
	],
	bun: [
		{
			id: "npm",
			label: "npm"
		},
		{
			id: "bun",
			label: "bun"
		},
		{
			id: "pnpm",
			label: "pnpm"
		},
		{
			id: "yarn",
			label: "yarn"
		}
	],
	"react-native": [
		{
			id: "npm",
			label: "npm"
		},
		{
			id: "bun",
			label: "bun"
		},
		{
			id: "pnpm",
			label: "pnpm"
		},
		{
			id: "yarn",
			label: "yarn"
		}
	],
	deno: [{
		id: "jsr",
		label: "jsr"
	}, {
		id: "npm",
		label: "npm"
	}],
	flutter: [{
		id: "pub",
		label: "pub"
	}],
	python: [{
		id: "pip",
		label: "pip"
	}],
	dart: [{
		id: "pub",
		label: "pub"
	}],
	php: [{
		id: "composer",
		label: "Composer"
	}],
	ruby: [{
		id: "gem",
		label: "gem"
	}],
	dotnet: [{
		id: "nuget",
		label: "NuGet"
	}],
	go: [{
		id: "go",
		label: "go get"
	}],
	apple: [{
		id: "spm",
		label: "Swift Package Manager"
	}],
	swift: [{
		id: "spm",
		label: "Swift Package Manager"
	}],
	android: [{
		id: "gradle",
		label: "Gradle"
	}],
	kotlin: [{
		id: "gradle",
		label: "Gradle"
	}],
	rust: [{
		id: "cargo",
		label: "cargo"
	}],
	java: null
};
var CONNECT_PROJECT_TAB_IDS = [
	"mcp",
	"app",
	"cli",
	"skills",
	"terraform",
	"s3"
];
function ConnectProject({ open, onOpenChange, projectId, initialSdk = "web", initialConnectTab = "mcp" }) {
	const t = useT();
	const navigate = useNavigate();
	const { track } = useAnalytics();
	const [platformId, setPlatformId] = useState(() => isKnownPlatform(initialSdk) ? initialSdk : "web");
	const [frameworkId, setFrameworkId] = useState("vanilla");
	const [usingId, setUsingId] = useState("vite");
	const [packageManagerId, setPackageManagerId] = useState("npm");
	const sdkId = CLIENT_PLATFORM_OPTIONS.find((o) => o.id === platformId)?.sdkId ?? platformId;
	const frameworkOptions = FRAMEWORK_OPTIONS[platformId] ?? FRAMEWORK_OPTIONS.web;
	const isLanguagePlatform = platformId === "android" || platformId === "apple";
	const usingVariants = USING_OPTIONS[frameworkId];
	const packageManagers = PACKAGE_MANAGER_OPTIONS[sdkId];
	const isServer = SERVER_SDK_OPTIONS.some((o) => o.id === sdkId);
	const runtime = isServer ? "server" : "client";
	useEffect(() => {
		if (!open) return;
		if (isKnownPlatform(initialSdk)) setPlatformId(initialSdk);
	}, [open, initialSdk]);
	useEffect(() => {
		setFrameworkId((FRAMEWORK_OPTIONS[platformId] ?? FRAMEWORK_OPTIONS.web)[0]?.id ?? "vanilla");
	}, [platformId]);
	useEffect(() => {
		setUsingId((prev) => {
			const variants = USING_OPTIONS[frameworkId];
			return variants?.some((v) => v.id === prev) ? prev : variants?.[0]?.id ?? "vite";
		});
	}, [frameworkId]);
	useEffect(() => {
		setPackageManagerId(PACKAGE_MANAGER_OPTIONS[sdkId]?.[0]?.id ?? "npm");
	}, [sdkId]);
	const { project } = useProject(projectId);
	const { features } = useConsoleProfile();
	const { access } = useOrganizationScopes(project?.teamId);
	const noCreatePermission = !canCreateKey(access, features);
	const createMutation = useCreateApiKey(projectId);
	const endpoint = useMemo(() => getApiEndpoint(project?.region), [project?.region]);
	const codeFiles = useMemo(() => getCodeFiles(sdkId, frameworkId, usingId, runtime, endpoint ?? "", projectId ?? "", packageManagerId), [
		sdkId,
		frameworkId,
		usingId,
		runtime,
		endpoint,
		projectId,
		packageManagerId
	]);
	const [connectTab, setConnectTab] = useState("mcp");
	const { account } = useAuth();
	const { setTab: persistConnectTab } = useConnectProjectTab(account);
	const selectConnectTab = useCallback((tab) => {
		setConnectTab(tab);
		persistConnectTab(tab);
	}, [persistConnectTab]);
	useEffect(() => {
		if (!open) return;
		setConnectTab(initialConnectTab);
	}, [open, initialConnectTab]);
	const [selectedFileIndex, setSelectedFileIndex] = useState(0);
	const [copiedSkillsPrompt, setCopiedSkillsPrompt] = useState(null);
	const [createDrawerOpen, setCreateDrawerOpen] = useState(false);
	const [createdKeySecret, setCreatedKeySecret] = useState(null);
	const [copiedField, setCopiedField] = useState(null);
	const [copiedPrompt, setCopiedPrompt] = useState(false);
	useEffect(() => {
		setSelectedFileIndex(0);
	}, [
		sdkId,
		frameworkId,
		usingId,
		runtime
	]);
	const selectedFile = codeFiles[selectedFileIndex] ?? codeFiles[0];
	const codeFileTabs = useMemo(() => codeFiles.map((file, index) => ({
		id: String(index),
		label: file.label
	})), [codeFiles]);
	const installInstructions = useMemo(() => getInstallInstructions(sdkId, packageManagerId), [sdkId, packageManagerId]);
	const sdkLabel = [...CLIENT_PLATFORM_OPTIONS, ...SERVER_SDK_OPTIONS].find((o) => o.id === platformId)?.label ?? platformId;
	const frameworkLabel = frameworkOptions.find((fw) => fw.id === frameworkId)?.label;
	const usingLabel = usingVariants?.find((v) => v.id === usingId)?.label;
	const packageManagerLabel = packageManagers?.find((pm) => pm.id === packageManagerId)?.label;
	const connectSdkPrompt = useMemo(() => buildConnectSdkPrompt({
		projectId,
		projectName: project?.name,
		endpoint: endpoint ?? getBaseEndpoint(),
		sdkLabel,
		runtime,
		frameworkLabel: frameworkOptions.length > 0 ? frameworkLabel : void 0,
		usingLabel: usingVariants && usingVariants.length > 0 ? usingLabel : void 0,
		packageManagerLabel: packageManagers && packageManagers.length > 0 ? packageManagerLabel : void 0,
		installTitle: installInstructions.title,
		installOptions: installInstructions.options,
		codeFiles
	}), [
		projectId,
		project?.name,
		endpoint,
		sdkLabel,
		runtime,
		frameworkOptions.length,
		frameworkLabel,
		usingVariants,
		usingLabel,
		packageManagers,
		packageManagerLabel,
		installInstructions,
		codeFiles
	]);
	const handleCopyConnectPrompt = async () => {
		try {
			await navigator.clipboard.writeText(connectSdkPrompt);
			track(ANALYTICS_ACTIONS["copy-connect-sdk-prompt"], { platform: sdkId });
			setCopiedPrompt(true);
			toast.success(t("Prompt copied to clipboard"));
			setTimeout(() => setCopiedPrompt(false), 2e3);
		} catch {
			toast.error(t("Failed to copy prompt"));
		}
	};
	const handleViewApiKeys = () => {
		onOpenChange(false);
		navigate({
			to: "/projects/$projectId/api-keys",
			params: { projectId }
		});
	};
	const handleCopyKey = (text, field) => {
		navigator.clipboard.writeText(text);
		setCopiedField(field);
		setTimeout(() => setCopiedField(null), 2e3);
	};
	const handleCreateApiKey = (data) => {
		createMutation.mutate(data, {
			onSuccess: (createdKey) => {
				toast.success(t("API key created successfully"));
				if (createdKey?.secret) setCreatedKeySecret(createdKey.secret);
				else setCreateDrawerOpen(false);
			},
			onError: (error) => {
				toast.error(getErrorMessage(error) || t("Failed to create API key"));
			}
		});
	};
	if (!project) return null;
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-6xl h-[70dvh] max-h-[70dvh] p-0 gap-0 flex flex-col overflow-hidden",
			children: [
				/* @__PURE__ */ jsx(DialogHeader, {
					className: "shrink-0 px-6 pt-6 pb-4 text-start",
					children: /* @__PURE__ */ jsx(DialogTitle, { children: t("Connect to your project") })
				}),
				/* @__PURE__ */ jsxs(Tabs, {
					value: connectTab,
					onValueChange: (v) => selectConnectTab(v),
					className: "min-h-0 flex-1 flex flex-col overflow-hidden",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "shrink-0 flex gap-0 overflow-x-auto border-b border-border px-6",
							role: "tablist",
							children: CONNECT_PROJECT_TAB_IDS.map((tabId) => {
								const isActive = connectTab === tabId;
								const label = tabId === "app" ? "SDK" : tabId === "cli" ? "CLI" : tabId === "mcp" ? "MCP" : tabId === "skills" ? "Skills" : tabId === "terraform" ? "Terraform" : "S3";
								return /* @__PURE__ */ jsxs("button", {
									type: "button",
									role: "tab",
									"aria-selected": isActive,
									onClick: () => selectConnectTab(tabId),
									className: cn("relative flex shrink-0 cursor-pointer focus:cursor-pointer focus-visible:cursor-pointer items-center gap-1.5 px-3 py-2.5 text-[13px] font-medium transition-colors rounded-sm", "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset", isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground/80"),
									children: [label, isActive && /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 start-0 end-0 h-[2px] bg-foreground" })]
								}, tabId);
							})
						}),
						/* @__PURE__ */ jsxs(TabsContent, {
							value: "app",
							className: "min-h-0 flex-1 overflow-y-auto px-6 pb-4 pt-0 data-[state=inactive]:hidden flex flex-col",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "shrink-0 flex flex-wrap items-end gap-4 pt-4 pb-4 border-b border-border",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "min-w-[160px]",
										children: [/* @__PURE__ */ jsx("label", {
											className: "text-[12px] font-medium text-muted-foreground uppercase tracking-wider block mb-2",
											children: t("SDK / Platform")
										}), /* @__PURE__ */ jsxs(Select, {
											value: platformId,
											onValueChange: setPlatformId,
											children: [/* @__PURE__ */ jsx(SelectTrigger, {
												className: "w-full h-9 text-[13px]",
												children: /* @__PURE__ */ jsx(SelectValue, {})
											}), /* @__PURE__ */ jsxs(SelectContent, { children: [/* @__PURE__ */ jsxs(SelectGroup, { children: [/* @__PURE__ */ jsx(SelectLabel, {
												className: "text-[11px] font-semibold text-muted-foreground uppercase tracking-wider",
												children: t("Client")
											}), CLIENT_PLATFORM_OPTIONS.map((opt) => /* @__PURE__ */ jsx(SelectItem, {
												value: opt.id,
												className: "text-[13px]",
												children: /* @__PURE__ */ jsxs("span", {
													className: "flex items-center gap-1.5",
													children: [opt.sdkId ? /* @__PURE__ */ jsx(FrameworkIcon, {
														framework: opt.id,
														size: "sm"
													}) : /* @__PURE__ */ jsx(PlatformIcon, {
														platform: opt.id,
														size: "sm"
													}), opt.label]
												})
											}, opt.id))] }), /* @__PURE__ */ jsxs(SelectGroup, { children: [/* @__PURE__ */ jsx(SelectLabel, {
												className: "text-[11px] font-semibold text-muted-foreground uppercase tracking-wider",
												children: t("Server")
											}), SERVER_SDK_OPTIONS.map((opt) => /* @__PURE__ */ jsx(SelectItem, {
												value: opt.id,
												className: "text-[13px]",
												children: /* @__PURE__ */ jsxs("span", {
													className: "flex items-center gap-1.5",
													children: [/* @__PURE__ */ jsx(FrameworkIcon, {
														framework: opt.id,
														size: "sm"
													}), opt.label]
												})
											}, opt.id))] })] })]
										})]
									}),
									frameworkOptions.length > 0 && /* @__PURE__ */ jsxs("div", {
										className: "min-w-[120px]",
										children: [/* @__PURE__ */ jsx("label", {
											className: "text-[12px] font-medium text-muted-foreground uppercase tracking-wider block mb-2",
											children: isLanguagePlatform ? t("Language") : t("Framework")
										}), /* @__PURE__ */ jsxs(Select, {
											value: frameworkId,
											onValueChange: setFrameworkId,
											disabled: frameworkOptions.length === 1,
											children: [/* @__PURE__ */ jsx(SelectTrigger, {
												className: "w-full h-9 text-[13px]",
												children: /* @__PURE__ */ jsx(SelectValue, {})
											}), /* @__PURE__ */ jsx(SelectContent, { children: frameworkOptions.map((fw) => /* @__PURE__ */ jsx(SelectItem, {
												value: fw.id,
												className: "text-[13px]",
												children: /* @__PURE__ */ jsxs("span", {
													className: "flex items-center gap-1.5",
													children: [/* @__PURE__ */ jsx(FrameworkIcon, {
														framework: fw.icon ?? fw.id,
														size: "sm"
													}), fw.label]
												})
											}, fw.id)) })]
										})]
									}),
									usingVariants && usingVariants.length > 0 && /* @__PURE__ */ jsxs("div", {
										className: "min-w-[140px]",
										children: [/* @__PURE__ */ jsx("label", {
											className: "text-[12px] font-medium text-muted-foreground uppercase tracking-wider block mb-2",
											children: t("Using")
										}), /* @__PURE__ */ jsxs(Select, {
											value: usingId,
											onValueChange: setUsingId,
											disabled: usingVariants.length === 1,
											children: [/* @__PURE__ */ jsx(SelectTrigger, {
												className: "w-full h-9 text-[13px]",
												children: /* @__PURE__ */ jsx(SelectValue, {})
											}), /* @__PURE__ */ jsx(SelectContent, { children: usingVariants.map((v) => /* @__PURE__ */ jsx(SelectItem, {
												value: v.id,
												className: "text-[13px]",
												children: v.label
											}, v.id)) })]
										})]
									}),
									packageManagers && packageManagers.length > 0 && /* @__PURE__ */ jsxs("div", {
										className: "min-w-[100px]",
										children: [/* @__PURE__ */ jsx("label", {
											className: "text-[12px] font-medium text-muted-foreground uppercase tracking-wider block mb-2",
											children: t("Package manager")
										}), /* @__PURE__ */ jsxs(Select, {
											value: packageManagerId,
											onValueChange: setPackageManagerId,
											disabled: packageManagers.length === 1,
											children: [/* @__PURE__ */ jsx(SelectTrigger, {
												className: "w-full h-9 text-[13px]",
												children: /* @__PURE__ */ jsx(SelectValue, {})
											}), /* @__PURE__ */ jsx(SelectContent, { children: packageManagers.map((pm) => /* @__PURE__ */ jsx(SelectItem, {
												value: pm.id,
												className: "text-[13px]",
												children: /* @__PURE__ */ jsxs("span", {
													className: "flex items-center gap-1.5",
													children: [/* @__PURE__ */ jsx(PackageManagerIcon, {
														packageManager: pm.id,
														size: "sm"
													}), pm.label]
												})
											}, pm.id)) })]
										})]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "ms-auto flex shrink-0 items-end self-end",
										children: /* @__PURE__ */ jsxs(Button, {
											type: "button",
											variant: "outline",
											size: "sm",
											className: "h-9 gap-1.5 text-[12px]",
											"data-analytics-track": "manual",
											onClick: () => void handleCopyConnectPrompt(),
											children: [copiedPrompt ? /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsx(Copy, { className: "h-3.5 w-3.5" }), t("Copy prompt")]
										})
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-[0.9fr_1.4fr] gap-6 pt-4 min-h-0 flex-1",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "space-y-4 min-w-0 min-h-0 overflow-y-auto",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "space-y-4",
											children: [/* @__PURE__ */ jsx("h4", {
												className: "text-[13px] font-semibold text-foreground",
												children: t(installInstructions.title)
											}), /* @__PURE__ */ jsx("div", {
												className: "space-y-4",
												children: installInstructions.options.map((option, i) => /* @__PURE__ */ jsx(CodeBlock, {
													code: option.code,
													language: option.language ?? "plaintext",
													label: t(option.label),
													showCopy: true
												}, i))
											})]
										}),
										isServer && /* @__PURE__ */ jsxs("div", {
											className: "rounded-xl border border-border bg-muted/30 overflow-hidden",
											children: [/* @__PURE__ */ jsx("div", {
												className: "px-4 py-3 border-b border-border",
												children: /* @__PURE__ */ jsx("h4", {
													className: "text-[13px] font-semibold text-foreground",
													children: t("API keys")
												})
											}), /* @__PURE__ */ jsxs("div", {
												className: "px-4 py-3 space-y-3",
												children: [
													/* @__PURE__ */ jsx("p", {
														className: "text-[13px] text-muted-foreground",
														children: t("Server and backend code need an API key with the right scopes. Create and manage keys in your project.")
													}),
													/* @__PURE__ */ jsxs("div", {
														className: "flex flex-wrap items-center gap-2",
														children: [/* @__PURE__ */ jsxs(Button, {
															type: "button",
															variant: "secondary",
															size: "sm",
															className: "h-8 gap-1.5 text-[12px]",
															onClick: () => setCreateDrawerOpen(true),
															disabled: noCreatePermission,
															title: noCreatePermission ? t("You don't have permission to create API keys.") : void 0,
															...analyticsAttrs("create-api-key"),
															children: [/* @__PURE__ */ jsx(Plus, { className: "h-3.5 w-3.5" }), t("Create API key")]
														}), /* @__PURE__ */ jsxs(Button, {
															type: "button",
															variant: "secondary",
															size: "sm",
															className: "h-8 gap-1.5 text-[12px]",
															onClick: handleViewApiKeys,
															children: [/* @__PURE__ */ jsx(Key, { className: "h-3.5 w-3.5" }), t("View API keys")]
														})]
													}),
													/* @__PURE__ */ jsxs(DocsRouteLink, {
														href: `${APPWRITE_DOCS_URL}/getting-started-for-server`,
														className: "inline-flex items-center gap-1.5 link-neutral text-[13px]",
														children: [t("Server setup guide"), /* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5" })]
													})
												]
											})]
										}),
										/* @__PURE__ */ jsxs(DocsRouteLink, {
											href: APPWRITE_DOCS_URL,
											className: "inline-flex items-center gap-1.5 link-neutral text-[13px]",
											children: [t("Read the docs"), /* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5" })]
										})
									]
								}), /* @__PURE__ */ jsx("div", {
									className: "min-w-0 min-h-0 flex flex-col flex-1",
									children: selectedFile && /* @__PURE__ */ jsx(ConnectCodeExample, {
										code: selectedFile.code,
										language: selectedFile.language ?? "plaintext",
										tabs: codeFileTabs,
										activeTabId: String(selectedFileIndex),
										onTabChange: (id) => setSelectedFileIndex(Number(id)),
										selectorAriaLabel: t("Select file"),
										fixedHeight: "100%",
										className: "flex-1 min-h-0"
									})
								})]
							})]
						}),
						/* @__PURE__ */ jsx(TabsContent, {
							value: "cli",
							className: "min-h-0 flex-1 overflow-hidden px-6 pb-4 pt-0 data-[state=inactive]:hidden flex flex-col",
							children: /* @__PURE__ */ jsx(CLISection, {
								endpoint: endpoint ?? getBaseEndpoint(),
								projectId: projectId ?? "",
								onViewApiKeys: handleViewApiKeys,
								onClose: () => onOpenChange(false)
							})
						}),
						/* @__PURE__ */ jsx(TabsContent, {
							value: "mcp",
							className: "min-h-0 flex-1 overflow-y-auto px-6 pb-4 pt-0 data-[state=inactive]:hidden",
							children: /* @__PURE__ */ jsx(MCPSection, {
								compact: true,
								projectId,
								projectName: project?.name ?? projectId
							})
						}),
						/* @__PURE__ */ jsx(TabsContent, {
							value: "skills",
							className: "min-h-0 flex-1 overflow-hidden px-6 pb-4 pt-0 data-[state=inactive]:hidden flex flex-col",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col gap-4 pt-4 min-h-0 flex-1",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "shrink-0 space-y-2",
									children: [
										/* @__PURE__ */ jsx("p", {
											className: "text-[13px] text-muted-foreground",
											children: t("SDK context for your AI agent: accurate methods, patterns, and best practices. For live project actions like listing users, use MCP.")
										}),
										/* @__PURE__ */ jsxs("p", {
											className: "text-[13px] text-muted-foreground",
											children: [
												t("Skills are available for"),
												" ",
												[
													"CLI",
													"TypeScript",
													"Dart",
													".NET",
													"Go",
													"Kotlin",
													"PHP",
													"Python",
													"Ruby",
													"Swift"
												].map((sdk$1, i) => /* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("span", {
													className: "rounded bg-muted/80 px-1.5 py-0.5 text-[12px] font-medium text-muted-foreground",
													children: sdk$1
												}), i < 9 ? ", " : ""] }, sdk$1)),
												" ",
												"- ",
												t("pick what you use during setup.")
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex flex-wrap items-center gap-x-4 gap-y-1",
											children: [/* @__PURE__ */ jsxs(DocsRouteLink, {
												href: APPWRITE_SKILLS_DOCS_URL,
												className: "inline-flex items-center gap-1.5 link-neutral text-[13px]",
												children: [t("Docs"), /* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5" })]
											}), /* @__PURE__ */ jsxs("a", {
												href: APPWRITE_AGENT_SKILLS_REPO,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "inline-flex items-center gap-1.5 link-neutral text-[13px]",
												children: [/* @__PURE__ */ jsx(GitHubIcon, { className: "h-3.5 w-3.5" }), "appwrite/skills"]
											})]
										})
									]
								}), /* @__PURE__ */ jsxs("div", {
									className: "grid grid-cols-2 gap-4 min-h-0 flex-1",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "min-w-0 rounded-xl border border-border bg-card/50 overflow-hidden flex flex-col",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "px-4 py-2.5 border-b border-border shrink-0",
												children: [/* @__PURE__ */ jsx("h4", {
													className: "text-[13px] font-semibold text-foreground",
													children: t("1. Install")
												}), /* @__PURE__ */ jsx("p", {
													className: "text-[12px] text-muted-foreground mt-0.5",
													children: t("Run in project root.")
												})]
											}),
											/* @__PURE__ */ jsx("div", {
												className: "px-4 py-3 shrink-0",
												children: /* @__PURE__ */ jsx(CodeBlock, {
													code: APPWRITE_AGENT_SKILLS_INSTALL,
													language: "bash",
													label: t("Terminal"),
													showCopy: true
												})
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "px-4 py-2.5 border-t border-border",
												children: [/* @__PURE__ */ jsx("p", {
													className: "text-[12px] font-medium text-foreground mb-1",
													children: t("Then the CLI will ask:")
												}), /* @__PURE__ */ jsxs("ul", {
													className: "text-[12px] text-muted-foreground space-y-0.5",
													children: [
														/* @__PURE__ */ jsxs("li", { children: [
															/* @__PURE__ */ jsx("span", {
																className: "text-foreground font-medium",
																children: t("Skills")
															}),
															" ",
															"- ",
															t("which SDKs to install (e.g. TypeScript, Go).")
														] }),
														/* @__PURE__ */ jsxs("li", { children: [
															/* @__PURE__ */ jsx("span", {
																className: "text-foreground font-medium",
																children: t("Tools")
															}),
															" ",
															"-",
															" ",
															t("which AI tools use them (Cursor, Claude, etc.).")
														] }),
														/* @__PURE__ */ jsxs("li", { children: [
															/* @__PURE__ */ jsx("span", {
																className: "text-foreground font-medium",
																children: t("Scope")
															}),
															" ",
															"- ",
															t("project (this repo) or global.")
														] }),
														/* @__PURE__ */ jsxs("li", { children: [
															/* @__PURE__ */ jsx("span", {
																className: "text-foreground font-medium",
																children: t("Method")
															}),
															" ",
															"- ",
															t("prefer symlink so skills stay up to date.")
														] })
													]
												})]
											})
										]
									}), /* @__PURE__ */ jsxs("div", {
										className: "min-w-0 flex flex-col gap-2.5 min-h-0",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "shrink-0",
											children: [/* @__PURE__ */ jsx("h4", {
												className: "text-[13px] font-semibold text-foreground",
												children: t("2. Try it")
											}), /* @__PURE__ */ jsx("p", {
												className: "text-[12px] text-muted-foreground mt-0.5",
												children: t("Ask your agent to write Appwrite code:")
											})]
										}), /* @__PURE__ */ jsx("ul", {
											className: "space-y-1.5 min-h-0",
											children: SKILLS_TRY_IT_PROMPTS.map((prompt) => /* @__PURE__ */ jsxs("li", {
												className: "flex items-center gap-2 rounded-lg border border-border bg-muted/20 px-3 py-1.5",
												children: [/* @__PURE__ */ jsx("span", {
													className: "min-w-0 flex-1 text-[12px] font-medium text-foreground leading-snug",
													children: t(prompt)
												}), /* @__PURE__ */ jsxs(Button, {
													variant: "ghost",
													size: "sm",
													className: "h-7 gap-1 text-[12px] text-muted-foreground shrink-0",
													onClick: () => {
														navigator.clipboard.writeText(prompt);
														setCopiedSkillsPrompt(prompt);
														toast.success(t("Copied to clipboard"));
														setTimeout(() => setCopiedSkillsPrompt(null), 2e3);
													},
													children: [copiedSkillsPrompt === prompt ? /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsx(Copy, { className: "h-3.5 w-3.5" }), t("Copy")]
												})]
											}, prompt))
										})]
									})]
								})]
							})
						}),
						/* @__PURE__ */ jsx(TabsContent, {
							value: "terraform",
							className: "min-h-0 flex-1 overflow-hidden px-6 pb-4 pt-0 data-[state=inactive]:hidden flex flex-col",
							children: /* @__PURE__ */ jsx(TerraformConnectSection, {
								endpoint: endpoint ?? getBaseEndpoint(),
								projectId: projectId ?? "",
								onViewApiKeys: handleViewApiKeys
							})
						}),
						/* @__PURE__ */ jsx(TabsContent, {
							value: "s3",
							className: "min-h-0 flex-1 overflow-hidden px-6 pb-4 pt-0 data-[state=inactive]:hidden flex flex-col",
							children: /* @__PURE__ */ jsx(S3ConnectSection, {
								projectId: projectId ?? "",
								onViewApiKeys: handleViewApiKeys
							})
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "shrink-0 px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						onClick: () => onOpenChange(false),
						children: t("Close")
					})
				})
			]
		})
	}), /* @__PURE__ */ jsx(ApiKeyDrawer, {
		open: createDrawerOpen,
		onOpenChange: (nextOpen) => {
			setCreateDrawerOpen(nextOpen);
			if (!nextOpen) setCreatedKeySecret(null);
		},
		onSubmit: handleCreateApiKey,
		isLoading: createMutation.isPending,
		createdKeySecret,
		onCopy: handleCopyKey,
		copiedField,
		initialName: t(SDK_API_KEY_DEFAULT_NAME)
	})] });
}
var ProjectConnectDialogContext = createContext(null);
function useProjectConnectDialog() {
	return useContext(ProjectConnectDialogContext);
}
function ProjectConnectDialogProvider({ projectId, children }) {
	const { account } = useAuth();
	const { tab: savedConnectTab, setTab: persistConnectTab } = useConnectProjectTab(account);
	const [open, setOpen] = useState(false);
	const [initialConnectTab, setInitialConnectTab] = useState("mcp");
	const openConnect = useCallback((tab) => {
		const nextTab = tab ?? savedConnectTab ?? "mcp";
		setInitialConnectTab(nextTab);
		persistConnectTab(nextTab);
		setOpen(true);
	}, [persistConnectTab, savedConnectTab]);
	const value = useMemo(() => ({ openConnect }), [openConnect]);
	return /* @__PURE__ */ jsxs(ProjectConnectDialogContext.Provider, {
		value,
		children: [children, /* @__PURE__ */ jsx(ConnectProject, {
			open,
			onOpenChange: setOpen,
			projectId,
			initialConnectTab
		})]
	});
}
export { loadCliTerminalCacheSummary as _, CliShellProvider as a, formatCliTerminalSearchLabel as c, stripAnsi as d, CLI_SHELL_CONSOLE_SHORTCUTS as f, clearCliTerminalCache as g, CLI_TERMINAL_INPUT_SHORTCUTS as h, getProjectS3StorageEndpoint as i, getCliShellSplitChildren as l, CLI_SHELL_TOGGLE_SHORTCUT_RAW as m, useProjectConnectDialog as n, useCliShell as o, CLI_SHELL_NEW_TERMINAL_SHORTCUT_RAW as p, useAnalytics as r, useCliShellOptional as s, ProjectConnectDialogProvider as t, getTerminalBufferText as u };
