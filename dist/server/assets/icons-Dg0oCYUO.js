import { createRequire } from "node:module";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __reExport = (target, mod, secondTarget, symbols) => {
	if (symbols) {
		__defProp(target, Symbol.toStringTag, { value: "Module" });
		secondTarget && __defProp(secondTarget, Symbol.toStringTag, { value: "Module" });
	}
	__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default");
};
var icons_exports = {};
import * as import_lucide_react from "lucide-react";
__reExport(icons_exports, import_lucide_react, void 0, 1);
export { icons_exports as t };
