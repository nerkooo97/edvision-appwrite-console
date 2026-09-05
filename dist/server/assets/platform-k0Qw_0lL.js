function getPlatformIdentifier(platform) {
	const p = platform;
	if (typeof p.hostname === "string" && p.hostname) return p.hostname;
	if (typeof p.applicationId === "string") return p.applicationId;
	if (typeof p.bundleIdentifier === "string") return p.bundleIdentifier;
	if (typeof p.packageName === "string") return p.packageName;
	if (typeof p.packageIdentifierName === "string") return p.packageIdentifierName;
	if (typeof p.key === "string") return p.key;
	if (typeof p.identifier === "string") return p.identifier;
	return "";
}
function getPlatformSearchText(platform) {
	return [
		platform.name,
		getPlatformIdentifier(platform),
		platform.type
	].filter(Boolean).join(" ");
}
function getPlatformDisplayName(platform) {
	const normalized = platform.toLowerCase();
	if (normalized.startsWith("flutter-")) return `Flutter ${getPlatformDisplayName(normalized.replace("flutter-", ""))}`;
	if (normalized.startsWith("react-native-")) return `React Native ${getPlatformDisplayName(normalized.replace("react-native-", ""))}`;
	if (normalized.startsWith("apple-")) {
		const appleType = normalized.replace("apple-", "");
		return `Apple ${{
			ios: "iOS",
			macos: "macOS",
			watchos: "watchOS",
			tvos: "tvOS"
		}[appleType] || appleType}`;
	}
	return {
		web: "Web",
		android: "Android",
		ios: "iOS",
		apple: "Apple",
		"apple-ios": "Apple iOS",
		"apple-macos": "Apple macOS",
		"apple-watchos": "Apple watchOS",
		"apple-tvos": "Apple tvOS",
		linux: "Linux",
		macos: "macOS",
		mac: "macOS",
		windows: "Windows",
		win: "Windows",
		unity: "Unity",
		flutter: "Flutter",
		"react-native": "React Native"
	}[normalized] || normalized.charAt(0).toUpperCase() + normalized.slice(1);
}
export { getPlatformIdentifier as n, getPlatformSearchText as r, getPlatformDisplayName as t };
