import { bt as formatDecimalBytes } from "./form-field-type-badge-C7qMzJo0.js";
(/* @__PURE__ */ new Date(Date.now() - 7200 * 1e3)).toISOString(), (/* @__PURE__ */ new Date(Date.now() - 1440 * 60 * 1e3)).toISOString(), (/* @__PURE__ */ new Date(Date.now() - 300 * 1e3)).toISOString(), (/* @__PURE__ */ new Date(Date.now() - 4320 * 60 * 1e3)).toISOString(), (/* @__PURE__ */ new Date(Date.now() - 3600 * 1e3)).toISOString(), (/* @__PURE__ */ new Date(Date.now() - 336 * 60 * 60 * 1e3)).toISOString();
new Date(Date.now() + 360 * 60 * 60 * 1e3).toISOString(), (/* @__PURE__ */ new Date(Date.now() - 360 * 60 * 60 * 1e3)).toISOString(), new Date(Date.now() + 360 * 60 * 60 * 1e3).toISOString();
(/* @__PURE__ */ new Date(Date.now() - 360 * 60 * 60 * 1e3)).toISOString(), (/* @__PURE__ */ new Date(Date.now() - 360 * 60 * 60 * 1e3)).toISOString(), (/* @__PURE__ */ new Date(Date.now() - 1080 * 60 * 60 * 1e3)).toISOString(), (/* @__PURE__ */ new Date(Date.now() - 1056 * 60 * 60 * 1e3)).toISOString(), (/* @__PURE__ */ new Date(Date.now() - 1800 * 60 * 60 * 1e3)).toISOString(), (/* @__PURE__ */ new Date(Date.now() - 1800 * 60 * 60 * 1e3)).toISOString(), (/* @__PURE__ */ new Date(Date.now() - 2520 * 60 * 60 * 1e3)).toISOString(), (/* @__PURE__ */ new Date(Date.now() - 2520 * 60 * 60 * 1e3)).toISOString(), (/* @__PURE__ */ new Date(Date.now() - 3240 * 60 * 60 * 1e3)).toISOString(), (/* @__PURE__ */ new Date(Date.now() - 3216 * 60 * 60 * 1e3)).toISOString();
new Date(Date.now() + 2160 * 60 * 60 * 1e3).toISOString();
new Date(Date.now() + 1440 * 60 * 60 * 1e3).toISOString(), (/* @__PURE__ */ new Date(Date.now() - 720 * 60 * 60 * 1e3)).toISOString(), new Date(Date.now() + 2880 * 60 * 60 * 1e3).toISOString(), (/* @__PURE__ */ new Date(Date.now() - 10080 * 60 * 1e3)).toISOString(), new Date(Date.now() + 720 * 60 * 60 * 1e3).toISOString(), (/* @__PURE__ */ new Date(Date.now() - 1440 * 60 * 60 * 1e3)).toISOString(), new Date(Date.now() + 4320 * 60 * 60 * 1e3).toISOString(), (/* @__PURE__ */ new Date(Date.now() - 336 * 60 * 60 * 1e3)).toISOString(), new Date(Date.now() + 1080 * 60 * 60 * 1e3).toISOString(), (/* @__PURE__ */ new Date(Date.now() - 1080 * 60 * 60 * 1e3)).toISOString();
function formatBytes(bytes) {
	return formatDecimalBytes(bytes);
}
function formatNumber(num) {
	if (num >= 1e6) return (num / 1e6).toFixed(1) + "M";
	if (num >= 1e3) return (num / 1e3).toFixed(1) + "K";
	return num.toString();
}
export { formatNumber as n, formatBytes as t };
