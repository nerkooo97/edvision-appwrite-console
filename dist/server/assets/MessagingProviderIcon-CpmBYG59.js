import { t as cn } from "./utils-DoqqkI3X.js";
import { t as PUBLIC_ICON_MUTED_CLASSES } from "./public-icon-classes-CaQtbn94.js";
import { jsx } from "react/jsx-runtime";
import { Bell, Mail, Phone } from "lucide-react";
var sizeClasses = {
	sm: "h-5 w-5",
	md: "h-6 w-6",
	lg: "h-8 w-8"
};
var providerIconMap = {
	twilio: "twilio.svg",
	msg91: "msg91.svg",
	telesign: "telesign.svg",
	textmagic: "textmagic.svg",
	vonage: "vonage.svg",
	mailgun: "mailgun.svg",
	sendgrid: "sendgrid.svg",
	resend: "resend.svg",
	fcm: "firebase.svg",
	apns: "apple.svg"
};
function MessagingProviderIcon({ providerName, serviceKey, providerType, className, size = "md" }) {
	const iconFile = providerIconMap[(serviceKey ?? providerName)?.toLowerCase().trim() || ""];
	const sizeClass = sizeClasses[size];
	const altLabel = providerName?.trim() || serviceKey?.trim() || "Provider";
	if (iconFile) return /* @__PURE__ */ jsx("img", {
		src: `/icons/${iconFile}`,
		alt: altLabel,
		className: cn(sizeClass, PUBLIC_ICON_MUTED_CLASSES, className)
	});
	return /* @__PURE__ */ jsx(providerType === "email" ? Mail : providerType === "sms" ? Phone : Bell, { className: cn(sizeClass, className) });
}
export { MessagingProviderIcon as t };
