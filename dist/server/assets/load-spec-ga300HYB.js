import { c as getSpecFilename, l as getSpecMode, p as resolveSpecVersionDirs } from "./constants-Dd6QzW31.js";
import { t as ReferenceNotFoundError } from "./errors-Dx4R8-YI.js";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { accessSync, constants } from "node:fs";
import { fileURLToPath } from "node:url";
var SPECS_DIR_NAME = "specs";
var specsRoot;
function hasSpecsData(root) {
	try {
		accessSync(join(root, "specs"), constants.R_OK);
		return true;
	} catch {
		return false;
	}
}
function resolveSpecsPackageRoot() {
	const moduleDir = dirname(fileURLToPath(import.meta.url));
	const cwd = process.cwd();
	const candidates = [
		process.env.APPWRITE_SPECS_ROOT,
		join(cwd, "node_modules", "@appwrite.io", "specs"),
		join(moduleDir, "..", "..", SPECS_DIR_NAME),
		join(cwd, SPECS_DIR_NAME),
		join(cwd, "dist", SPECS_DIR_NAME),
		join(moduleDir, "..", "..", "appwrite-specs"),
		join(cwd, "appwrite-specs"),
		join(cwd, "dist", "appwrite-specs")
	].filter((value) => Boolean(value));
	for (const candidate of candidates) if (hasSpecsData(candidate)) return candidate;
	throw new Error("Could not locate @appwrite.io/specs data. Expected specs/ under node_modules or dist/specs.");
}
function getSpecsPackageRoot() {
	if (!specsRoot) specsRoot = resolveSpecsPackageRoot();
	return specsRoot;
}
var specCache = /* @__PURE__ */ new Map();
function resolveSpecFilePath(specDir, mode) {
	const filename = getSpecFilename(specDir, mode);
	return join(getSpecsPackageRoot(), "specs", specDir, filename);
}
async function loadSpecByPath(specDir, mode) {
	const cacheKey = `${specDir}/${mode}`;
	const cached = specCache.get(cacheKey);
	if (cached) return cached;
	const filePath = resolveSpecFilePath(specDir, mode);
	let raw;
	try {
		raw = await readFile(filePath, "utf-8");
	} catch {
		throw new ReferenceNotFoundError(`Missing OpenAPI spec ${filePath}`);
	}
	const spec = JSON.parse(raw);
	specCache.set(cacheKey, spec);
	return spec;
}
async function loadReferenceOpenApiSpec(version, platform) {
	const mode = getSpecMode(platform);
	const { specDir } = resolveSpecVersionDirs(version);
	return loadSpecByPath(specDir, mode);
}
async function loadReferenceOpenApiSpecByMode(version, mode) {
	const { specDir } = resolveSpecVersionDirs(version);
	return loadSpecByPath(specDir, mode);
}
async function loadReferenceConsoleSpec(version) {
	const { specDir } = resolveSpecVersionDirs(version);
	return loadSpecByPath(specDir, "console");
}
export { getSpecsPackageRoot as i, loadReferenceOpenApiSpec as n, loadReferenceOpenApiSpecByMode as r, loadReferenceConsoleSpec as t };
