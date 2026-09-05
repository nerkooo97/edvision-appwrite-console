import { t as cn } from "./utils-DoqqkI3X.js";
import { i as InputOTPSlot, n as InputOTPGroup, r as InputOTPSeparator, t as InputOTP } from "./input-otp-DTuOA8dL.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
const OAUTH2_DEVICE_CODE_LENGTH = 6;
function normalizeUserCode(value) {
	return value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6);
}
function OAuth2DeviceCodeInput({ id, value, onChange, disabled = false, readOnly = false, autoFocus = false, className, "aria-invalid": ariaInvalid }) {
	return /* @__PURE__ */ jsxs(InputOTP, {
		id,
		maxLength: 6,
		value: normalizeUserCode(value),
		onChange: (next) => {
			if (readOnly) return;
			onChange?.(normalizeUserCode(next));
		},
		disabled: disabled || readOnly,
		autoFocus,
		inputMode: "text",
		autoComplete: "one-time-code",
		spellCheck: false,
		pushPasswordManagerStrategy: "none",
		pattern: REGEXP_ONLY_DIGITS_AND_CHARS,
		pasteTransformer: normalizeUserCode,
		"aria-invalid": ariaInvalid,
		containerClassName: cn("w-full justify-center", className),
		children: [
			/* @__PURE__ */ jsxs(InputOTPGroup, {
				className: "flex-1",
				children: [
					/* @__PURE__ */ jsx(InputOTPSlot, {
						index: 0,
						className: "h-16 w-full font-mono text-2xl uppercase"
					}),
					/* @__PURE__ */ jsx(InputOTPSlot, {
						index: 1,
						className: "h-16 w-full font-mono text-2xl uppercase"
					}),
					/* @__PURE__ */ jsx(InputOTPSlot, {
						index: 2,
						className: "h-16 w-full font-mono text-2xl uppercase"
					})
				]
			}),
			/* @__PURE__ */ jsx(InputOTPSeparator, {}),
			/* @__PURE__ */ jsxs(InputOTPGroup, {
				className: "flex-1",
				children: [
					/* @__PURE__ */ jsx(InputOTPSlot, {
						index: 3,
						className: "h-16 w-full font-mono text-2xl uppercase"
					}),
					/* @__PURE__ */ jsx(InputOTPSlot, {
						index: 4,
						className: "h-16 w-full font-mono text-2xl uppercase"
					}),
					/* @__PURE__ */ jsx(InputOTPSlot, {
						index: 5,
						className: "h-16 w-full font-mono text-2xl uppercase"
					})
				]
			})
		]
	});
}
export { OAuth2DeviceCodeInput as n, normalizeUserCode as r, OAUTH2_DEVICE_CODE_LENGTH as t };
