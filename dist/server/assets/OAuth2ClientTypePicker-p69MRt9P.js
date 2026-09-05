import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { n as RadioGroupItem, t as RadioGroup } from "./radio-group-aZurL4eE.js";
import { jsx, jsxs } from "react/jsx-runtime";
var CLIENT_TYPE_OPTIONS = [{
	value: "confidential",
	title: "Confidential",
	description: "Backend or SSR apps that can keep a client secret (Node, Next.js, Nuxt)."
}, {
	value: "public",
	title: "Public",
	description: "Native or static web apps that cannot store a client secret (iOS, Android, SPA)."
}];
function OAuth2ClientTypePicker({ value, onChange, disabled = false }) {
	const t = useT();
	const selected = value === "public" ? "public" : "confidential";
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ jsx(Label, {
			className: "text-[12px] font-medium",
			children: t("Client type")
		}), /* @__PURE__ */ jsx(RadioGroup, {
			value: selected,
			onValueChange: (next) => onChange(next),
			disabled,
			className: "grid grid-cols-1 gap-2 sm:grid-cols-2",
			children: CLIENT_TYPE_OPTIONS.map((option) => {
				const id = `oauth2-client-type-${option.value}`;
				return /* @__PURE__ */ jsxs(Label, {
					htmlFor: id,
					className: cn("flex cursor-pointer items-start gap-2.5 rounded-lg border px-3 py-2.5 transition-colors", selected === option.value ? "border-primary bg-primary/5" : "border-border bg-card/50 hover:bg-muted/20", disabled && "cursor-not-allowed opacity-60"),
					children: [/* @__PURE__ */ jsx(RadioGroupItem, {
						value: option.value,
						id,
						className: "mt-0.5 shrink-0",
						disabled
					}), /* @__PURE__ */ jsxs("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ jsx("span", {
							className: "block text-[13px] font-medium text-foreground",
							children: t(option.title)
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-0.5 text-[12px] leading-snug text-muted-foreground",
							children: t(option.description)
						})]
					})]
				}, option.value);
			})
		})]
	});
}
const OAUTH2_DEVICE_FLOW_DESCRIPTION = "For TVs, CLIs on a remote server, and other devices where typing a password is difficult.";
export { OAuth2ClientTypePicker as n, OAUTH2_DEVICE_FLOW_DESCRIPTION as t };
