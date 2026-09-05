import { t as cn } from "./utils-DoqqkI3X.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React$1 from "react";
import { Info } from "lucide-react";
function validateDefaultId(id) {
	if (!id || id.length === 0) return true;
	if (id.length > 36) return false;
	if (!/^[a-zA-Z0-9_]/.test(id)) return false;
	return /^[a-zA-Z0-9][a-zA-Z0-9._-]*$/.test(id);
}
function validateDedicatedId(id) {
	if (!id || id.length === 0) return true;
	if (id.length > 36) return false;
	return /^[A-Za-z0-9]+$/.test(id);
}
function IdInput({ value, onChange, maxLength = 36, disabled = false, placeholder = "Leave blank to auto-generate", className, id, idFormat = "default" }) {
	const validateId = idFormat === "dedicated" ? validateDedicatedId : validateDefaultId;
	const idHelpText = idFormat === "dedicated" ? "Allowed characters: letters and numbers only" : "Allowed characters: alphanumeric, non-leading hyphen, underscore, period";
	const [isOpen, setIsOpen] = React$1.useState(false);
	const [inputValue, setInputValue] = React$1.useState(value || "");
	const [error, setError] = React$1.useState(null);
	React$1.useEffect(() => {
		setInputValue(value || "");
	}, [value]);
	React$1.useEffect(() => {
		if (isOpen) {
			setInputValue(value || "");
			setError(null);
		}
	}, [isOpen, value]);
	const handleInputChange = (e) => {
		const newValue = e.target.value;
		setInputValue(newValue);
		if (newValue.length > maxLength) setError(`ID must be ${maxLength} characters or less`);
		else if (newValue && !validateId(newValue)) setError("Invalid ID format");
		else setError(null);
		const trimmedValue = newValue.trim();
		onChange?.(trimmedValue || void 0);
	};
	const handleToggle = () => {
		if (!disabled) {
			setIsOpen(!isOpen);
			if (!isOpen) {
				setInputValue(value || "");
				setError(null);
			}
		}
	};
	const displayValue = value || "Auto-generated";
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ jsx(Badge, {
			variant: "outline",
			className: cn("cursor-pointer transition-colors hover:bg-accent", disabled && "cursor-not-allowed opacity-50", className),
			onClick: handleToggle,
			children: displayValue
		}), isOpen && /* @__PURE__ */ jsxs("div", {
			className: "rounded-lg border border-border bg-card p-4 space-y-4",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [/* @__PURE__ */ jsx(Input, {
						id,
						type: "text",
						placeholder,
						value: inputValue,
						onChange: handleInputChange,
						maxLength,
						disabled,
						className: cn("pe-16", error && "border-destructive focus-visible:ring-destructive"),
						autoFocus: true
					}), /* @__PURE__ */ jsx("div", {
						className: "absolute end-3 top-1/2 -translate-y-1/2 pointer-events-none",
						children: /* @__PURE__ */ jsxs("span", {
							className: cn("text-[11px] text-muted-foreground", inputValue.length > maxLength && "text-destructive"),
							children: [
								inputValue.length,
								"/",
								maxLength
							]
						})
					})]
				}), error && /* @__PURE__ */ jsx("p", {
					className: "text-[12px] text-destructive",
					children: error
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex items-start gap-2 rounded-lg border border-border bg-muted/30 p-3",
				children: [/* @__PURE__ */ jsx(Info, { className: "h-4 w-4 shrink-0 text-muted-foreground mt-0.5" }), /* @__PURE__ */ jsx("p", {
					className: "text-[12px] text-muted-foreground",
					children: idHelpText
				})]
			})]
		})]
	});
}
export { IdInput as t };
