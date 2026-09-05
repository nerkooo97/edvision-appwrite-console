import { t as cn } from "./utils-DoqqkI3X.js";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React$1 from "react";
import { MinusIcon } from "lucide-react";
import { OTPInput, OTPInputContext } from "input-otp";
function InputOTP({ className, containerClassName, ...props }) {
	return /* @__PURE__ */ jsx(OTPInput, {
		"data-slot": "input-otp",
		containerClassName: cn("flex items-center gap-2 has-disabled:opacity-50", containerClassName),
		className: cn("disabled:cursor-not-allowed", className),
		...props
	});
}
function InputOTPGroup({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "input-otp-group",
		className: cn("flex items-center", className),
		...props
	});
}
function InputOTPSlot({ index, className, ...props }) {
	const { char, hasFakeCaret, isActive } = React$1.useContext(OTPInputContext)?.slots[index] ?? {};
	return /* @__PURE__ */ jsxs("div", {
		"data-slot": "input-otp-slot",
		"data-active": isActive,
		className: cn("data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-e text-sm transition-all outline-none first:rounded-s-md first:border-s last:rounded-e-md data-[active=true]:z-10 data-[active=true]:ring-[3px]", className),
		...props,
		children: [char, hasFakeCaret && /* @__PURE__ */ jsx("div", {
			className: "pointer-events-none absolute inset-0 flex items-center justify-center",
			children: /* @__PURE__ */ jsx("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" })
		})]
	});
}
function InputOTPSeparator({ ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "input-otp-separator",
		role: "separator",
		...props,
		children: /* @__PURE__ */ jsx(MinusIcon, {})
	});
}
export { InputOTPSlot as i, InputOTPGroup as n, InputOTPSeparator as r, InputOTP as t };
