import { F as getUploadItem, I as getUploadItems, L as isIndexedDBMutationError, N as clearOldUploads, P as deleteUploadItem, R as isUploadPersistenceAvailable, d as sdk, z as saveUploadItem } from "./sdk-DjIJ_hjn.js";
import { AppwriteException, ID } from "@appwrite.io/console";
var UploadManager = class {
	uploads = /* @__PURE__ */ new Map();
	progressCallbacks = /* @__PURE__ */ new Map();
	processingQueue = false;
	maxConcurrentUploads = 3;
	ephemeralItems = /* @__PURE__ */ new Map();
	onProgress(id, callback) {
		if (!this.progressCallbacks.has(id)) this.progressCallbacks.set(id, /* @__PURE__ */ new Set());
		this.progressCallbacks.get(id).add(callback);
		return () => {
			const callbacks = this.progressCallbacks.get(id);
			if (callbacks) {
				callbacks.delete(callback);
				if (callbacks.size === 0) this.progressCallbacks.delete(id);
			}
		};
	}
	emitProgress(progress) {
		const callbacks = this.progressCallbacks.get(progress.id);
		if (callbacks) callbacks.forEach((callback) => {
			try {
				callback(progress);
			} catch (error) {
				console.error("Error in upload progress callback:", error);
			}
		});
	}
	getEphemeralItems(status, projectId, bucketId) {
		return [...this.ephemeralItems.values()].filter((item) => {
			if (status && item.status !== status) return false;
			if (projectId && item.projectId !== projectId) return false;
			if (bucketId && item.bucketId !== bucketId) return false;
			return true;
		});
	}
	async updateUploadState(item, updates) {
		const updated = {
			...item,
			...updates,
			updatedAt: Date.now()
		};
		if (this.ephemeralItems.has(item.id)) this.ephemeralItems.set(item.id, updated);
		await saveUploadItem(updated);
	}
	arrayBufferToFile(buffer, fileName, mimeType) {
		return new File([buffer], fileName, { type: mimeType });
	}
	async queueUpload(projectId, bucketId, file, fileId, permissions) {
		const uploadId = ID.unique();
		const uploadItem = {
			id: uploadId,
			projectId,
			bucketId,
			fileId: fileId || ID.unique(),
			fileName: file.name,
			fileSize: file.size,
			fileType: file.type,
			fileData: file,
			permissions,
			status: "pending",
			progress: 0,
			createdAt: Date.now(),
			updatedAt: Date.now()
		};
		await saveUploadItem(uploadItem);
		if (!isUploadPersistenceAvailable()) this.ephemeralItems.set(uploadId, uploadItem);
		this.processQueue();
		return uploadId;
	}
	async processQueue() {
		if (this.processingQueue) return;
		this.processingQueue = true;
		try {
			const pendingUploads = [...await getUploadItems("pending"), ...this.getEphemeralItems("pending")];
			if (pendingUploads.length === 0) return;
			let currentIndex = 0;
			const runNext = async () => {
				while (currentIndex < pendingUploads.length) {
					const item = pendingUploads[currentIndex];
					currentIndex += 1;
					if (this.uploads.has(item.id)) continue;
					await this.processUpload(item);
				}
			};
			const workerCount = Math.min(this.maxConcurrentUploads, pendingUploads.length);
			await Promise.all(Array.from({ length: workerCount }, () => runNext()));
		} finally {
			this.processingQueue = false;
			if ([...await getUploadItems("pending"), ...this.getEphemeralItems("pending")].length > 0) setTimeout(() => {
				this.processQueue();
			}, 0);
		}
	}
	async processUpload(item) {
		const abortController = new AbortController();
		this.uploads.set(item.id, abortController);
		const maxRetries = item.maxRetries ?? 3;
		const retryCount = item.retryCount ?? 0;
		try {
			await this.updateUploadState(item, {
				status: "uploading",
				startedAt: Date.now(),
				progress: 0,
				retryCount
			});
			this.emitProgress({
				id: item.id,
				status: "uploading",
				progress: 0
			});
			let file;
			if (item.fileData instanceof File) file = item.fileData;
			else if (item.fileData instanceof Blob) file = new File([item.fileData], item.fileName, { type: item.fileType });
			else if (item.fileData instanceof ArrayBuffer) file = this.arrayBufferToFile(item.fileData, item.fileName, item.fileType);
			else throw new Error("Invalid fileData type in upload item");
			const projectSdk = sdk.forProject(item.projectId);
			let wasAborted = false;
			abortController.signal.addEventListener("abort", () => {
				wasAborted = true;
			});
			const uploadPromise = projectSdk.storage.createFile({
				bucketId: item.bucketId,
				fileId: item.fileId,
				file,
				permissions: item.permissions,
				onProgress: (progress) => {
					if (wasAborted || abortController.signal.aborted) return;
					const uploadProgress = progress.chunksTotal > 0 ? Math.round(progress.chunksUploaded / progress.chunksTotal * 100) : 0;
					this.updateUploadState(item, { progress: uploadProgress }).catch(() => {});
					this.emitProgress({
						id: item.id,
						status: "uploading",
						progress: uploadProgress
					});
				}
			});
			await Promise.race([uploadPromise, new Promise((_, reject) => {
				abortController.signal.addEventListener("abort", () => {
					reject(new DOMException("Upload aborted", "AbortError"));
				});
			})]);
			await this.updateUploadState(item, {
				status: "completed",
				progress: 100,
				completedAt: Date.now()
			});
			this.emitProgress({
				id: item.id,
				status: "completed",
				progress: 100
			});
			setTimeout(() => {
				deleteUploadItem(item.id).catch(() => {});
				this.ephemeralItems.delete(item.id);
			}, 300 * 1e3);
		} catch (error) {
			if (error.name === "AbortError" || error.message?.includes("aborted")) {
				await this.updateUploadState(item, {
					status: "cancelled",
					completedAt: Date.now()
				});
				this.emitProgress({
					id: item.id,
					status: "cancelled",
					progress: item.progress
				});
			} else if (this.isRetryableError(error) && retryCount < maxRetries) {
				const delay = Math.min(1e3 * Math.pow(2, retryCount), 3e4);
				await this.updateUploadState(item, {
					status: "pending",
					retryCount: retryCount + 1,
					error: `Retrying... (${retryCount + 1}/${maxRetries})`,
					progress: 0
				});
				this.emitProgress({
					id: item.id,
					status: "pending",
					progress: 0,
					error: `Retrying... (${retryCount + 1}/${maxRetries})`
				});
				await new Promise((resolve) => setTimeout(resolve, delay));
				this.uploads.delete(item.id);
				this.processQueue();
				return;
			} else {
				let errorMessage = "Upload failed";
				if (error instanceof AppwriteException) errorMessage = error.message || `Upload failed with status ${error.code || "unknown"}`;
				else if (error.message) errorMessage = error.message;
				await this.updateUploadState(item, {
					status: "failed",
					error: errorMessage,
					completedAt: Date.now()
				});
				this.emitProgress({
					id: item.id,
					status: "failed",
					progress: item.progress,
					error: errorMessage
				});
			}
		} finally {
			this.uploads.delete(item.id);
		}
	}
	isRetryableError(error) {
		const errorMessage = error.message?.toLowerCase() || "";
		const errorName = error.name?.toLowerCase() || "";
		const retryablePatterns = [
			"network error",
			"connection reset",
			"connection closed",
			"timeout",
			"failed to fetch",
			"network request failed",
			"aborted",
			"econnreset",
			"etimedout"
		];
		const retryableStatusCodes = [
			408,
			429,
			500,
			502,
			503,
			504
		];
		if (error instanceof AppwriteException) {
			if (error.code && retryableStatusCodes.includes(error.code)) return true;
		}
		if (retryablePatterns.some((pattern) => errorMessage.includes(pattern))) return true;
		if (error.status && retryableStatusCodes.includes(error.status)) return true;
		if (errorName.includes("network") || errorName.includes("timeout")) return true;
		return false;
	}
	async cancelUpload(id) {
		const abortController = this.uploads.get(id);
		if (abortController) abortController.abort();
		else {
			const item = this.ephemeralItems.get(id) ?? await getUploadItem(id);
			if (item && item.status === "pending") await this.updateUploadState(item, {
				status: "cancelled",
				completedAt: Date.now()
			});
		}
	}
	async getUploadStatus(id) {
		return this.ephemeralItems.get(id) ?? await getUploadItem(id);
	}
	async getBucketUploads(projectId, bucketId) {
		const persisted = await getUploadItems(void 0, projectId, bucketId);
		const ephemeral = this.getEphemeralItems(void 0, projectId, bucketId);
		return [...persisted, ...ephemeral];
	}
	async getActiveUploads() {
		const [pending, uploading, completed] = await Promise.all([
			getUploadItems("pending"),
			getUploadItems("uploading"),
			getUploadItems("completed")
		]);
		return [
			...pending,
			...uploading,
			...completed,
			...this.getEphemeralItems("pending"),
			...this.getEphemeralItems("uploading"),
			...this.getEphemeralItems("completed")
		];
	}
	async resumeQueue() {
		const uploading = await getUploadItems("uploading");
		for (const item of uploading) await this.updateUploadState(item, {
			status: "pending",
			progress: 0
		});
		await this.processQueue();
	}
	async removeUploadItem(id) {
		this.ephemeralItems.delete(id);
		await deleteUploadItem(id);
	}
	async clearOldUploads(olderThanMs = 1440 * 60 * 1e3) {
		await clearOldUploads(olderThanMs);
	}
};
const uploadManager = new UploadManager();
if (typeof window !== "undefined") {
	uploadManager.resumeQueue().catch((error) => {
		if (!isIndexedDBMutationError(error)) console.warn("Failed to resume upload queue:", error);
	});
	try {
		const lastClear = localStorage.getItem("upload-queue-last-clear");
		const now = Date.now();
		if (!lastClear || now - parseInt(lastClear, 10) > 1440 * 60 * 1e3) {
			uploadManager.clearOldUploads().catch((error) => {
				if (!isIndexedDBMutationError(error)) console.warn("Failed to clear old uploads:", error);
			});
			try {
				localStorage.setItem("upload-queue-last-clear", now.toString());
			} catch {}
		}
	} catch {}
}
export { uploadManager as t };
