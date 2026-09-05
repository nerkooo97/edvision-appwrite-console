import { t as cn } from "./utils-DoqqkI3X.js";
import { d as sdk } from "./sdk-DjIJ_hjn.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { ConsoleResourceType } from "@appwrite.io/console";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
function generateRandomSuffix() {
	const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
	let suffix = "";
	for (let i = 0; i < 4; i++) suffix += chars.charAt(Math.floor(Math.random() * 36));
	return suffix;
}
function DomainInput({ value, onChange, onValidChange, baseDomain, placeholder = "my-site", disabled = false, className }) {
	const t = useT();
	const [localValue, setLocalValue] = useState("");
	const [status, setStatus] = useState("idle");
	const [error, setError] = useState();
	const checkTimeoutRef = useRef(null);
	const hasTriedSuffixRef = useRef(null);
	const isUserEditedRef = useRef(false);
	const subdomain = value ? value.replace(`.${baseDomain}`, "") : "";
	useEffect(() => {
		setLocalValue(subdomain);
	}, [subdomain]);
	useEffect(() => {
		if (checkTimeoutRef.current) {
			clearTimeout(checkTimeoutRef.current);
			checkTimeoutRef.current = null;
		}
		if (!localValue.trim()) {
			setStatus("idle");
			setError(void 0);
			onValidChange(false);
			return;
		}
		if (localValue.length < 3) {
			setStatus("invalid");
			setError("Subdomain must be at least 3 characters");
			onValidChange(false);
			return;
		}
		if (localValue.length > 63) {
			setStatus("invalid");
			setError("Subdomain must be less than 64 characters");
			onValidChange(false);
			return;
		}
		if (!/^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/.test(localValue)) {
			setStatus("invalid");
			if (localValue.startsWith("-") || localValue.endsWith("-")) setError("Subdomain cannot start or end with a hyphen");
			else setError("Subdomain can only contain lowercase letters, numbers, and hyphens");
			onValidChange(false);
			return;
		}
		const fullDomain = `${localValue}.${baseDomain}`;
		setStatus("checking");
		setError(void 0);
		onValidChange(false);
		checkTimeoutRef.current = setTimeout(async () => {
			try {
				await sdk.forConsole.console.getResource({
					value: fullDomain,
					type: ConsoleResourceType.Rules
				});
				setStatus("available");
				setError(void 0);
				onChange(fullDomain);
				onValidChange(true);
			} catch (err) {
				const error$1 = err;
				if ((error$1?.code || error$1?.response?.code) === 409) if (!isUserEditedRef.current && hasTriedSuffixRef.current !== localValue) {
					hasTriedSuffixRef.current = localValue;
					setLocalValue(`${localValue}-${generateRandomSuffix()}`);
				} else {
					setStatus("taken");
					setError("This domain is already in use");
					onValidChange(false);
				}
				else {
					setStatus("available");
					setError(void 0);
					onChange(fullDomain);
					onValidChange(true);
				}
			}
		}, 500);
		return () => {
			if (checkTimeoutRef.current) clearTimeout(checkTimeoutRef.current);
		};
	}, [
		localValue,
		baseDomain,
		onChange,
		onValidChange
	]);
	const handleInputChange = (e) => {
		const newValue = e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "");
		isUserEditedRef.current = true;
		hasTriedSuffixRef.current = null;
		setLocalValue(newValue);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: cn("space-y-2", className),
		children: [
			/* @__PURE__ */ jsx(Label, {
				htmlFor: "domain",
				className: "text-[13px] font-medium",
				children: t("Domain")
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ jsx(Input, {
						id: "domain",
						value: localValue,
						onChange: handleInputChange,
						placeholder,
						disabled,
						className: cn("h-9 pe-10 text-[13px]", status === "available" && "border-green-500/50", (status === "invalid" || status === "taken") && "border-destructive/50")
					}), /* @__PURE__ */ jsxs("div", {
						className: "absolute end-3 top-1/2 -translate-y-1/2",
						children: [
							status === "checking" && /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin text-muted-foreground" }),
							status === "available" && /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-500" }),
							(status === "invalid" || status === "taken") && /* @__PURE__ */ jsx(XCircle, { className: "h-4 w-4 text-destructive" })
						]
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "flex items-center rounded-md border border-border bg-muted px-3",
					children: /* @__PURE__ */ jsxs("span", {
						className: "text-[13px] text-muted-foreground",
						children: [".", baseDomain]
					})
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "h-[18px]",
				children: [status === "available" && /* @__PURE__ */ jsx("p", {
					className: "text-[12px] text-green-600 dark:text-green-400",
					children: t("Domain is available")
				}), error && /* @__PURE__ */ jsx("p", {
					className: "text-[12px] text-destructive",
					children: t(error)
				})]
			})
		]
	});
}
export { DomainInput as t };
