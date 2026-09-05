import { t as cn } from "./utils-DoqqkI3X.js";
import { jsx } from "react/jsx-runtime";
import { Apple, Box, MonitorSmartphone, Smartphone } from "lucide-react";
var PLATFORM_ICON = {
	android: Smartphone,
	ios: Apple,
	windows: MonitorSmartphone
};
var PLATFORM_LABEL = {
	android: "Android",
	ios: "iOS",
	windows: "Windows"
};
var FRAMEWORK_LABEL = {
	flutter: "Flutter",
	"react-native": "React Native",
	expo: "Expo",
	android: "Android",
	ios: "iOS",
	maui: ".NET MAUI",
	other: "Other"
};
var PROVIDER_LABEL = {
	"google-play": "Google Play",
	"app-store-connect": "App Store Connect",
	"microsoft-store": "Microsoft Store"
};
function titleCase(value) {
	if (!value) return "-";
	return value.charAt(0).toUpperCase() + value.slice(1);
}
function platformLabel(platform) {
	return PLATFORM_LABEL[platform] ?? titleCase(platform);
}
function frameworkLabel(framework) {
	return FRAMEWORK_LABEL[framework] ?? titleCase(framework);
}
function providerLabel(provider) {
	return PROVIDER_LABEL[provider] ?? titleCase(provider);
}
function PlatformIcon({ platform, className }) {
	return /* @__PURE__ */ jsx(PLATFORM_ICON[platform] ?? Box, {
		className: cn("h-4 w-4", className),
		"aria-label": platformLabel(platform)
	});
}
function PlatformIcons({ platforms, className }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex items-center gap-1.5 text-muted-foreground", className),
		children: platforms.map((platform) => /* @__PURE__ */ jsx(PlatformIcon, { platform }, platform))
	});
}
export { providerLabel as a, platformLabel as i, PlatformIcons as n, frameworkLabel as r, PlatformIcon as t };
