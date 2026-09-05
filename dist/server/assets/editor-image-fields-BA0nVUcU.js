import { L as isIndexedDBMutationError } from "./sdk-DjIJ_hjn.js";
import { h as getCoverCardsAngledIconKeys } from "./parse-params-BpMT2Ilk.js";
var DB_NAME = "console-cover-generator";
var DB_VERSION = 1;
var STORE_NAME = "images";
var dbPromise = null;
var persistenceDisabled = false;
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
			if (!db.objectStoreNames.contains(STORE_NAME)) db.createObjectStore(STORE_NAME, { keyPath: "key" });
		};
	});
	return dbPromise;
}
async function getStore(mode = "readonly") {
	return (await openDatabase()).transaction([STORE_NAME], mode).objectStore(STORE_NAME);
}
async function saveCoverImageField(key, blob) {
	await runWrite(async () => {
		const store = await getStore("readwrite");
		const record = {
			key,
			blob,
			updatedAt: Date.now()
		};
		await new Promise((resolve, reject) => {
			const request = store.put(record);
			request.onsuccess = () => resolve();
			request.onerror = () => reject(request.error);
		});
	});
}
async function getAllCoverImageFields() {
	if (persistenceDisabled) return /* @__PURE__ */ new Map();
	try {
		const store = await getStore();
		return await new Promise((resolve, reject) => {
			const result = /* @__PURE__ */ new Map();
			const request = store.openCursor();
			request.onsuccess = (event) => {
				const cursor = event.target.result;
				if (!cursor) {
					resolve(result);
					return;
				}
				const record = cursor.value;
				result.set(record.key, record.blob);
				cursor.continue();
			};
			request.onerror = () => reject(request.error);
		});
	} catch (error) {
		if (isIndexedDBMutationError(error)) {
			disablePersistence(error);
			return /* @__PURE__ */ new Map();
		}
		throw error;
	}
}
async function deleteCoverImageField(key) {
	await runWrite(async () => {
		const store = await getStore("readwrite");
		await new Promise((resolve, reject) => {
			const request = store.delete(key);
			request.onsuccess = () => resolve();
			request.onerror = () => reject(request.error);
		});
	});
}
var COVER_IMAGE_STORAGE_KEY_SEPARATOR = "::";
function getCoverImageStorageKey(templateId, fieldKey, generationId) {
	return `${generationId ? `${generationId}${COVER_IMAGE_STORAGE_KEY_SEPARATOR}${templateId}` : templateId}${COVER_IMAGE_STORAGE_KEY_SEPARATOR}${fieldKey}`;
}
function isCoverUploadedImageValue(value) {
	return value.startsWith("data:") || value.startsWith("blob:");
}
function revokeCoverImageObjectUrl(url) {
	if (url?.startsWith("blob:")) URL.revokeObjectURL(url);
}
function revokeCoverImageObjectUrls(fields) {
	for (const url of Object.values(fields)) revokeCoverImageObjectUrl(url);
}
function dataUrlToBlob(dataUrl) {
	const [header, base64] = dataUrl.split(",");
	if (!base64) throw new Error("Invalid data URL");
	const mime = header.match(/:(.*?);/)?.[1] ?? "application/octet-stream";
	const bytes = atob(base64);
	const buffer = new Uint8Array(bytes.length);
	for (let index = 0; index < bytes.length; index += 1) buffer[index] = bytes.charCodeAt(index);
	return new Blob([buffer], { type: mime });
}
async function loadCoverImageFieldUrlsForTemplate(templateId, generationId) {
	const stored = await getAllCoverImageFields();
	const fields = {};
	const prefix = generationId ? `${generationId}${COVER_IMAGE_STORAGE_KEY_SEPARATOR}${templateId}${COVER_IMAGE_STORAGE_KEY_SEPARATOR}` : `${templateId}${COVER_IMAGE_STORAGE_KEY_SEPARATOR}`;
	for (const [storageKey, blob] of stored) {
		if (!storageKey.startsWith(prefix)) continue;
		const fieldKey = storageKey.slice(prefix.length);
		if (!fieldKey) continue;
		fields[fieldKey] = URL.createObjectURL(blob);
	}
	return fields;
}
async function migrateLegacyCoverImageStorageKeys(templateId) {
	const stored = await getAllCoverImageFields();
	await Promise.all([...stored.entries()].map(async ([storageKey, blob]) => {
		if (storageKey.includes(COVER_IMAGE_STORAGE_KEY_SEPARATOR)) return;
		await saveCoverImageField(getCoverImageStorageKey(templateId, storageKey), blob);
		await deleteCoverImageField(storageKey);
	}));
}
async function persistCoverImageUpload(templateId, fieldKey, source, generationId) {
	await saveCoverImageField(getCoverImageStorageKey(templateId, fieldKey, generationId), source);
	return URL.createObjectURL(source);
}
async function persistCoverImageDataUrl(templateId, fieldKey, dataUrl, generationId) {
	return persistCoverImageUpload(templateId, fieldKey, dataUrlToBlob(dataUrl), generationId);
}
async function removeCoverImageField(templateId, fieldKey, generationId) {
	await deleteCoverImageField(getCoverImageStorageKey(templateId, fieldKey, generationId));
}
async function clearCoverImageFieldsForTemplate(templateId, generationId) {
	const stored = await getAllCoverImageFields();
	const prefix = generationId ? `${generationId}${COVER_IMAGE_STORAGE_KEY_SEPARATOR}${templateId}${COVER_IMAGE_STORAGE_KEY_SEPARATOR}` : `${templateId}${COVER_IMAGE_STORAGE_KEY_SEPARATOR}`;
	await Promise.all([...stored.keys()].filter((storageKey) => storageKey.startsWith(prefix)).map((storageKey) => deleteCoverImageField(storageKey)));
}
function getCoverGeneratorImageFieldKeys(data) {
	switch (data.template) {
		case "integration": return ["logoLeft", "logoRight"];
		case "integration-icon":
		case "showcase-icon":
		case "title-icon": return ["icon"];
		case "screenshot":
		case "screenshot-side":
		case "screenshot-angled": return ["screenshot"];
		case "cards-angled": return getCoverCardsAngledIconKeys();
		default: return [];
	}
}
async function blobUrlToDataUrl(blobUrl) {
	try {
		const blob = await (await fetch(blobUrl)).blob();
		return await new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => resolve(String(reader.result));
			reader.onerror = () => reject(reader.error);
			reader.readAsDataURL(blob);
		});
	} catch {
		return;
	}
}
async function resolveInlineCoverImageValue(value) {
	if (!value?.startsWith("blob:")) return value;
	return blobUrlToDataUrl(value);
}
async function resolveCoverRenderDataInlineAssets(data) {
	const keys = getCoverGeneratorImageFieldKeys(data);
	let next = null;
	await Promise.all(keys.map(async (key) => {
		const value = data[key];
		if (!value?.startsWith("blob:")) return;
		const resolved = await resolveInlineCoverImageValue(value);
		if (!resolved || resolved === value) return;
		if (!next) next = { ...data };
		next[key] = resolved;
	}));
	return next ?? data;
}
export { persistCoverImageDataUrl as a, resolveCoverRenderDataInlineAssets as c, migrateLegacyCoverImageStorageKeys as i, revokeCoverImageObjectUrl as l, isCoverUploadedImageValue as n, persistCoverImageUpload as o, loadCoverImageFieldUrlsForTemplate as r, removeCoverImageField as s, clearCoverImageFieldsForTemplate as t, revokeCoverImageObjectUrls as u };
