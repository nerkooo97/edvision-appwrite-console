import { t as cn } from "./utils-DoqqkI3X.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
function InputTags({ id, value, onChange, placeholder = "Enter values and press Enter", className, validateEmail = false, splitOnComma = false, disabled = false, lockedTags = [], prefillRequest, onPrefillConsumed }) {
	const [inputValue, setInputValue] = useState("");
	const [error, setError] = useState(null);
	useEffect(() => {
		if (!prefillRequest?.value) return;
		const text = prefillRequest.value;
		setInputValue(text);
		setError(null);
		const focusWithCursorAtEnd = () => {
			const el = id ? document.getElementById(id) : null;
			if (!el || !(el instanceof HTMLInputElement)) return;
			el.focus();
			const end = el.value.length;
			el.setSelectionRange(end, end);
		};
		requestAnimationFrame(() => requestAnimationFrame(focusWithCursorAtEnd));
		onPrefillConsumed?.();
	}, [
		prefillRequest?.id,
		prefillRequest?.value,
		onPrefillConsumed,
		id
	]);
	const validateEmailFormat = (email) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};
	const splitTokens = (raw) => {
		if (!raw.trim()) return [];
		if (validateEmail) return raw.split(/[,\s]+/).map((part) => part.trim()).filter(Boolean);
		if (splitOnComma) return raw.split(",").map((part) => part.trim()).filter(Boolean);
		return [raw.trim()];
	};
	const handleAddMany = (raw) => {
		if (disabled) return;
		const tokens = splitTokens(raw);
		if (tokens.length === 0) return;
		const next = [...value];
		let added = false;
		for (const tag of tokens) {
			if (validateEmail && !validateEmailFormat(tag)) {
				setError("Please enter a valid email address");
				return;
			}
			if (lockedTags.includes(tag) || next.includes(tag)) continue;
			next.push(tag);
			added = true;
		}
		if (!added && tokens.length > 0) {
			setError(validateEmail ? "This email is already added" : "This value is already added");
			return;
		}
		if (added) {
			onChange(next);
			setInputValue("");
			setError(null);
		}
	};
	const handleKeyDown = (e) => {
		if ((e.key === "Enter" || validateEmail && (e.key === " " || e.key === ",") || splitOnComma && e.key === ",") && inputValue.trim()) {
			e.preventDefault();
			handleAddMany(inputValue);
		} else if (e.key === "Backspace" && !inputValue && value.length > 0) handleRemove(value[value.length - 1]);
	};
	const handlePaste = (e) => {
		if (!validateEmail && !splitOnComma) return;
		const text = e.clipboardData.getData("text");
		if (!(validateEmail ? /[,\s]/.test(text) : text.includes(","))) return;
		e.preventDefault();
		handleAddMany(inputValue ? `${inputValue}${text}` : text);
	};
	const handleRemove = (tagToRemove) => {
		if (disabled) return;
		onChange(value.filter((tag) => tag !== tagToRemove));
		setError(null);
	};
	const handleBlur = () => {
		if (inputValue.trim()) handleAddMany(inputValue);
	};
	const handleInputChange = (next) => {
		setError(null);
		if ((validateEmail || splitOnComma) && next.includes(",")) {
			const parts = next.split(",");
			const pending = parts.pop() ?? "";
			if (parts.some((part) => part.trim())) handleAddMany(parts.join(","));
			setInputValue(pending);
			return;
		}
		setInputValue(next);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: cn("space-y-1", className),
		children: [/* @__PURE__ */ jsxs("div", {
			className: cn("flex min-h-9 w-full flex-wrap items-center gap-1.5 rounded-md border border-input bg-transparent px-3 py-1.5 text-[13px] shadow-xs transition-[color,box-shadow]", "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]", "dark:bg-input/30", disabled && "cursor-not-allowed opacity-50"),
			children: [
				lockedTags.map((tag) => /* @__PURE__ */ jsx(Badge, {
					variant: "secondary",
					className: "h-6 shrink-0 px-2 py-0 text-[12px] font-normal",
					children: /* @__PURE__ */ jsx("span", {
						className: "font-mono",
						children: tag
					})
				}, `locked-${tag}`)),
				value.map((tag) => /* @__PURE__ */ jsxs(Badge, {
					variant: "secondary",
					className: "h-6 shrink-0 gap-1 px-2 py-0 text-[12px] font-normal",
					children: [/* @__PURE__ */ jsx("span", {
						className: "font-mono",
						children: tag
					}), /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => handleRemove(tag),
						disabled,
						className: "rounded-full text-muted-foreground hover:bg-muted-foreground/20 hover:text-foreground disabled:pointer-events-none",
						"aria-label": `Remove ${tag}`,
						children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
					})]
				}, tag)),
				/* @__PURE__ */ jsx(Input, {
					id,
					type: "text",
					value: inputValue,
					onChange: (e) => handleInputChange(e.target.value),
					onKeyDown: handleKeyDown,
					onPaste: handlePaste,
					onBlur: handleBlur,
					disabled,
					placeholder: value.length === 0 ? placeholder : "",
					className: "h-6 min-w-[120px] flex-1 border-0 bg-transparent p-0 text-[13px] shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
				})
			]
		}), error ? /* @__PURE__ */ jsx("p", {
			className: "text-[12px] text-red-500",
			children: error
		}) : null]
	});
}
export { InputTags as t };
