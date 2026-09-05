import { t as cn } from "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import { c as getProjectApiEndpoint } from "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-CL7SLzjY.js";
import "./constants-Dd6QzW31.js";
import "./constants-BDeF927R.js";
import { Pt as useOrganizationScopes } from "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import "./hooks-BONwG3Mt.js";
import "./auth-BPuxYQAc.js";
import { R as useProject, j as useCreatePlatform } from "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import "./databases-Dh0pwZ6h.js";
import "./database-specs-CBc802K0.js";
import "./database-row-inline-edits-CdyGeTxj.js";
import "./form-field-type-badge-C7qMzJo0.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import "./affiliates-BOg1SHC6.js";
import "./social-stats-X1CQqP0k.js";
import "./cimd-CRIktQxf.js";
import "./account-applications-Bo8bAeE0.js";
import "./date-format-BD1j7PxK.js";
import "./invite-url-B18y3cBt.js";
import "./format-metric-6jsfxd5f.js";
import "./domains-Bfw8HsXF.js";
import "./parse-spec-DW3UGcrS.js";
import "./page-direction-CnacIIOa.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { t as CodeBlock } from "./CodeBlock-BGAzMP_K.js";
import { t as WizardLayout } from "./WizardLayout-DWqXFGuX.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { a as DropdownMenuItem, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { t as PlatformIcon } from "./Icon-BtIL187e.js";
import { t as FrameworkIcon } from "./FrameworkIcon-DTkSe6r3.js";
import { f as canCreatePlatform } from "./console-access-checks-BTMEOKcL.js";
import { t as registerConsoleRealtimeListener } from "./console-hub-DIz9opmN.js";
import { t as Route$1 } from "./projects._projectId.apps.add-CnIqxvUn.js";
import { a as openAIChatDeeplink, n as getAIChatIDEs, t as generateAIChatDeeplink } from "./ide-Ch0cGqVM.js";
import { t as getPlatformDisplayName } from "./platform-k0Qw_0lL.js";
import { t as PROJECT_CHANNELS } from "./constants-DeVF3k3a.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { BrainCircuit, Check, ChevronDown, ChevronRight, Copy, ExternalLink, Globe, Info, Loader2, Shield } from "lucide-react";
const ADD_APP_KINDS = [
	"web",
	"android",
	"apple",
	"flutter",
	"react-native",
	"windows",
	"linux"
];
const WEB_FRAMEWORK_KEYS = [
	"react",
	"vue",
	"svelte",
	"sveltekit",
	"tanstack-start",
	"nextjs",
	"nuxt",
	"angular",
	"analog",
	"remix",
	"solid",
	"vite",
	"astro",
	"js"
];
function defaultVariantForKind(kind) {
	switch (kind) {
		case "web": return "web";
		case "android": return "android";
		case "apple": return "apple-ios";
		case "flutter": return "flutter-android";
		case "react-native": return "react-native-android";
		case "windows": return "flutter-windows";
		case "linux": return "flutter-linux";
	}
}
function variantNeedsHostname(variant) {
	return variant === "web" || variant === "flutter-web";
}
function variantNeedsKey(variant) {
	if (variant === "web") return false;
	if (variant === "flutter-web") return false;
	return true;
}
function isValidHostname(value) {
	const v = value.trim();
	if (!v) return false;
	if (v === "localhost") return true;
	if (/[\s/:]/.test(v)) return false;
	return /^[a-zA-Z0-9][a-zA-Z0-9.-]*[a-zA-Z0-9]$/.test(v) || v.length >= 3;
}
function isValidKey(value) {
	const v = value.trim();
	if (v.length < 3) return false;
	return /^[a-zA-Z][a-zA-Z0-9._-]*(\.[a-zA-Z][a-zA-Z0-9._-]*)+$/.test(v);
}
function isValidKeyForVariant(variant, value) {
	const v = value.trim();
	if (v.length < 2) return false;
	if (variant === "flutter-linux") return /^[a-zA-Z0-9._-]+$/.test(v);
	return isValidKey(value);
}
const FLUTTER_VARIANT_OPTIONS = [
	{
		value: "flutter-android",
		label: "Android"
	},
	{
		value: "flutter-ios",
		label: "iOS"
	},
	{
		value: "flutter-web",
		label: "Web"
	},
	{
		value: "flutter-linux",
		label: "Linux"
	},
	{
		value: "flutter-macos",
		label: "macOS"
	},
	{
		value: "flutter-windows",
		label: "Windows"
	}
];
const APPLE_VARIANT_OPTIONS = [
	{
		value: "apple-ios",
		label: "iOS"
	},
	{
		value: "apple-macos",
		label: "macOS"
	},
	{
		value: "apple-watchos",
		label: "watchOS"
	},
	{
		value: "apple-tvos",
		label: "tvOS"
	}
];
const REACT_NATIVE_VARIANT_OPTIONS = [{
	value: "react-native-android",
	label: "Android"
}, {
	value: "react-native-ios",
	label: "iOS"
}];
const WEB_FRAMEWORK_META = {
	react: {
		label: "React",
		port: 5173,
		runCommand: "pnpm dev",
		envPrefix: "VITE_"
	},
	vue: {
		label: "Vue",
		port: 5173,
		runCommand: "pnpm dev",
		envPrefix: "VITE_"
	},
	svelte: {
		label: "Svelte",
		port: 5173,
		runCommand: "pnpm dev",
		envPrefix: "PUBLIC_"
	},
	sveltekit: {
		label: "SvelteKit",
		port: 5173,
		runCommand: "pnpm dev",
		envPrefix: "PUBLIC_",
		starterRepo: "starter-for-svelte"
	},
	"tanstack-start": {
		label: "TanStack Start",
		port: 3e3,
		runCommand: "pnpm dev",
		envPrefix: "VITE_"
	},
	nextjs: {
		label: "Next.js",
		port: 3e3,
		runCommand: "pnpm dev",
		envPrefix: "NEXT_PUBLIC_"
	},
	nuxt: {
		label: "Nuxt",
		port: 3e3,
		runCommand: "pnpm dev",
		envPrefix: "NUXT_PUBLIC_"
	},
	angular: {
		label: "Angular",
		port: 4200,
		runCommand: "pnpm start",
		envPrefix: ""
	},
	analog: {
		label: "Analog",
		port: 5173,
		runCommand: "pnpm dev",
		envPrefix: "VITE_",
		starterRepo: "starter-for-analog"
	},
	remix: {
		label: "Remix",
		port: 3e3,
		runCommand: "pnpm dev",
		envPrefix: "VITE_",
		starterRepo: "starter-for-remix"
	},
	solid: {
		label: "Solid",
		port: 5173,
		runCommand: "pnpm dev",
		envPrefix: "VITE_",
		starterRepo: "starter-for-js"
	},
	vite: {
		label: "Vite",
		port: 5173,
		runCommand: "pnpm dev",
		envPrefix: "VITE_",
		starterRepo: "starter-for-js"
	},
	astro: {
		label: "Astro",
		port: 4321,
		runCommand: "pnpm dev",
		envPrefix: "PUBLIC_",
		starterRepo: "starter-for-astro"
	},
	js: {
		label: "No framework",
		port: 5173,
		runCommand: "pnpm dev",
		envPrefix: "VITE_"
	}
};
function getWebStarterRepoName(framework) {
	return WEB_FRAMEWORK_META[framework].starterRepo ?? `starter-for-${framework}`;
}
function generatePromptFromConfig(config) {
	return `
Goal: Setting up Appwrite SDK in the project depending on if a project already exists or not.

Following are the project details:

\`\`\`
${config.configCode}
\`\`\`

Follow the steps depending on if a project already exists on user's working directory or not:

## If a project already exists:
${config.alreadyExistsInstructions}

## If a project does not exist:

1. Clone the starter kit using ${config.using || "the terminal"}. Make sure to clone in the current working directory so that the cloned files are directly available in the working directory.

\`\`\`bash
${config.cloneCommand} .
\`\`\`

2. Replace all occurrences of the environment variables described in the project details section with their corresponding values. This effectively hardcodes the project details wherever those environment variables are used. Use grep (or an equivalent search) to find and update all occurrences.
3. ${config.runInstructions}`;
}
function buildWebPromptConfig(params) {
	const { framework, projectId, projectName, endpoint } = params;
	const meta = WEB_FRAMEWORK_META[framework];
	const starterRepo = getWebStarterRepoName(framework);
	const alreadyExists = framework === "angular" ? `Install the Appwrite web SDK. Create or update the Angular environment file with the project endpoint and project ID.

Use \`appwrite\` package and wire the client in a shared module. On app launch, call \`client.ping()\` once to verify connectivity.` : `Install the Appwrite web SDK. Create an \`appwrite\` client module (TypeScript or JavaScript to match the project) and set endpoint + project.

Example:

\`\`\`js
import { Client } from "appwrite";
const client = new Client().setEndpoint("${endpoint}").setProject("${projectId}");
export { client };
client.ping();
\`\`\`

Ensure \`client.ping()\` runs once when the app starts so the user can confirm the setup.`;
	const dotenvBlock = `APPWRITE_PROJECT_ID="${projectId}"
APPWRITE_PROJECT_NAME="${projectName}"
APPWRITE_ENDPOINT="${endpoint}"`;
	const angularBlock = `export const environment = {
  appwriteEndpoint: '${endpoint}',
  appwriteProjectId: '${projectId}',
  appwriteProjectName: '${projectName}',
};`;
	return {
		title: `Starter kit for Appwrite (${meta.label})`,
		alreadyExistsInstructions: alreadyExists,
		cloneCommand: `git clone https://github.com/appwrite/${starterRepo}\ncd ${starterRepo}`,
		configFile: framework === "angular" ? "src/environments/environment.ts" : ".env",
		configCode: framework === "angular" ? angularBlock : dotenvBlock,
		configLanguage: framework === "angular" ? "ts" : "dotenv",
		runInstructions: `Install dependencies with \`pnpm install\`, then run \`${meta.runCommand}\`. Open http://localhost:${meta.port} and use the demo control to send a ping to Appwrite.`,
		using: "the terminal or your editor"
	};
}
function buildNativePromptConfig(variant, configCode, alreadyExistsInstructions) {
	const native = NATIVE_PLATFORM_PROMPTS[variant];
	if (!native) return {
		title: "Appwrite starter kit",
		alreadyExistsInstructions,
		cloneCommand: "git clone https://github.com/appwrite/starter-for-flutter\ncd starter-for-flutter",
		configFile: "lib/config/environment.dart",
		configCode,
		configLanguage: "plaintext",
		runInstructions: "Install dependencies, run the app on a device or simulator, then use the demo to ping Appwrite.",
		using: "the terminal"
	};
	return {
		title: native.title,
		alreadyExistsInstructions,
		cloneCommand: native.cloneCommand,
		configFile: native.configFile,
		configCode,
		configLanguage: native.configLanguage,
		runInstructions: native.runInstructions,
		using: native.using
	};
}
var NATIVE_PLATFORM_PROMPTS = {
	android: {
		title: "Starter kit for Appwrite (Android)",
		cloneCommand: "git clone https://github.com/appwrite/starter-for-android\ncd starter-for-android",
		configFile: "constants/AppwriteConfig.kt",
		configLanguage: "kotlin",
		runInstructions: "Run on a device or emulator, then use the demo to ping Appwrite.",
		using: "Android Studio or the terminal"
	},
	"apple-ios": {
		title: "Starter kit for Appwrite (Apple)",
		cloneCommand: "git clone https://github.com/appwrite/starter-for-ios\ncd starter-for-ios",
		configFile: "Sources/Config.plist",
		configLanguage: "plaintext",
		runInstructions: "Run on a simulator or device, then use the demo to ping Appwrite.",
		using: "Xcode or the terminal"
	},
	"apple-macos": {
		title: "Starter kit for Appwrite (Apple)",
		cloneCommand: "git clone https://github.com/appwrite/starter-for-ios\ncd starter-for-ios",
		configFile: "Sources/Config.plist",
		configLanguage: "plaintext",
		runInstructions: "Run on a simulator or device, then use the demo to ping Appwrite.",
		using: "Xcode or the terminal"
	},
	"apple-watchos": {
		title: "Starter kit for Appwrite (Apple)",
		cloneCommand: "git clone https://github.com/appwrite/starter-for-ios\ncd starter-for-ios",
		configFile: "Sources/Config.plist",
		configLanguage: "plaintext",
		runInstructions: "Run on a simulator or device, then use the demo to ping Appwrite.",
		using: "Xcode or the terminal"
	},
	"apple-tvos": {
		title: "Starter kit for Appwrite (Apple)",
		cloneCommand: "git clone https://github.com/appwrite/starter-for-ios\ncd starter-for-ios",
		configFile: "Sources/Config.plist",
		configLanguage: "plaintext",
		runInstructions: "Run on a simulator or device, then use the demo to ping Appwrite.",
		using: "Xcode or the terminal"
	},
	"flutter-android": {
		title: "Starter kit for Appwrite (Flutter)",
		cloneCommand: "git clone https://github.com/appwrite/starter-for-flutter\ncd starter-for-flutter",
		configFile: "lib/config/environment.dart",
		configLanguage: "dart",
		runInstructions: "Run with `flutter run` on a device or simulator, then use the demo to ping Appwrite.",
		using: "the terminal"
	},
	"flutter-ios": {
		title: "Starter kit for Appwrite (Flutter)",
		cloneCommand: "git clone https://github.com/appwrite/starter-for-flutter\ncd starter-for-flutter",
		configFile: "lib/config/environment.dart",
		configLanguage: "dart",
		runInstructions: "Run with `flutter run` on a device or simulator, then use the demo to ping Appwrite.",
		using: "the terminal"
	},
	"flutter-web": {
		title: "Starter kit for Appwrite (Flutter)",
		cloneCommand: "git clone https://github.com/appwrite/starter-for-flutter\ncd starter-for-flutter",
		configFile: "lib/config/environment.dart",
		configLanguage: "dart",
		runInstructions: "Run with `flutter run -d chrome` (or your target), then use the demo to ping Appwrite.",
		using: "the terminal"
	},
	"flutter-linux": {
		title: "Starter kit for Appwrite (Flutter)",
		cloneCommand: "git clone https://github.com/appwrite/starter-for-flutter\ncd starter-for-flutter",
		configFile: "lib/config/environment.dart",
		configLanguage: "dart",
		runInstructions: "Run with `flutter run -d linux`, then use the demo to ping Appwrite.",
		using: "the terminal"
	},
	"flutter-macos": {
		title: "Starter kit for Appwrite (Flutter)",
		cloneCommand: "git clone https://github.com/appwrite/starter-for-flutter\ncd starter-for-flutter",
		configFile: "lib/config/environment.dart",
		configLanguage: "dart",
		runInstructions: "Run with `flutter run -d macos`, then use the demo to ping Appwrite.",
		using: "the terminal"
	},
	"flutter-windows": {
		title: "Starter kit for Appwrite (Flutter)",
		cloneCommand: "git clone https://github.com/appwrite/starter-for-flutter\ncd starter-for-flutter",
		configFile: "lib/config/environment.dart",
		configLanguage: "dart",
		runInstructions: "Run with `flutter run -d windows`, then use the demo to ping Appwrite.",
		using: "the terminal"
	},
	"react-native-android": {
		title: "Starter kit for Appwrite (React Native)",
		cloneCommand: "git clone https://github.com/appwrite/starter-for-react-native\ncd starter-for-react-native",
		configFile: "index.ts",
		configLanguage: "typescript",
		runInstructions: "Run `pnpm install` then `pnpm android` or `pnpm ios`, then use the demo to ping Appwrite.",
		using: "the terminal"
	},
	"react-native-ios": {
		title: "Starter kit for Appwrite (React Native)",
		cloneCommand: "git clone https://github.com/appwrite/starter-for-react-native\ncd starter-for-react-native",
		configFile: "index.ts",
		configLanguage: "typescript",
		runInstructions: "Run `pnpm install` then `pnpm ios`, then use the demo to ping Appwrite.",
		using: "the terminal"
	}
};
var STEPS = [
	{
		id: 1,
		title: "Choose platform",
		description: "Pick the client stack you are building."
	},
	{
		id: 2,
		title: "App details",
		description: "Hostname or bundle ID and display name."
	},
	{
		id: 3,
		title: "Connect locally",
		description: "Run a starter or use AI, then verify with a ping."
	}
];
function WizardProgress({ stage }) {
	const t = useT();
	const activeIndex = stage === "platform" ? 0 : stage === "details" ? 1 : 2;
	return /* @__PURE__ */ jsx("div", {
		className: "w-full bg-muted/20",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto w-full max-w-7xl px-6 py-3.5",
			children: /* @__PURE__ */ jsx("div", {
				className: "flex w-full flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6",
				children: STEPS.map((s, i) => {
					const isComplete = i < activeIndex;
					const isCurrent = i === activeIndex;
					return /* @__PURE__ */ jsxs("div", {
						className: "flex min-w-0 flex-1 gap-3",
						children: [/* @__PURE__ */ jsx("div", {
							className: cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-[12px] font-semibold transition-colors", isComplete && "border-primary bg-primary text-primary-foreground", isCurrent && !isComplete && "border-primary bg-background text-primary", !isCurrent && !isComplete && "border-border bg-muted/50 text-muted-foreground"),
							children: isComplete ? /* @__PURE__ */ jsx(Check, {
								className: "h-4 w-4",
								strokeWidth: 2.5
							}) : s.id
						}), /* @__PURE__ */ jsxs("div", {
							className: "min-w-0 pt-0.5",
							children: [/* @__PURE__ */ jsx("p", {
								className: cn("text-[13px] font-semibold", isCurrent ? "text-foreground" : "text-muted-foreground"),
								children: t(s.title)
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-0.5 text-[12px] leading-snug text-muted-foreground",
								children: t(s.description)
							})]
						})]
					}, s.id);
				})
			})
		})
	});
}
function ConfigureWizardAside() {
	const t = useT();
	return /* @__PURE__ */ jsx("div", {
		className: "rounded-xl border border-border bg-card/50 p-5",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex items-start gap-3",
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted",
				children: /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-muted-foreground" })
			}), /* @__PURE__ */ jsxs("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
						children: t("Why register an app?")
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 text-[13px] leading-relaxed text-muted-foreground",
						children: t("Apps tell Appwrite which origins or bundle IDs are allowed to call your project API. Choose the kind of client you are building - you can register more apps later.")
					}),
					/* @__PURE__ */ jsxs("ul", {
						className: "mt-3 list-disc space-y-1.5 ps-4 text-[12px] leading-snug text-muted-foreground",
						children: [/* @__PURE__ */ jsxs("li", { children: [
							/* @__PURE__ */ jsx("span", {
								className: "font-medium text-foreground/90",
								children: t("Web")
							}),
							" -",
							" ",
							t("allowed hostnames (origins)")
						] }), /* @__PURE__ */ jsxs("li", { children: [
							/* @__PURE__ */ jsx("span", {
								className: "font-medium text-foreground/90",
								children: t("Mobile & desktop")
							}),
							" ",
							"- ",
							t("bundle ID or package name")
						] })]
					})
				]
			})]
		})
	});
}
function ConnectionAside({ webFramework, platformSlug, pingReceived }) {
	const t = useT();
	const connected = pingReceived;
	const waiting = !pingReceived;
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 p-5",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
				children: t("Connection")
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-1 text-[13px] text-muted-foreground",
				children: t("Your app talks to Appwrite from the hostname or bundle you register, using the project API endpoint.")
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-6 flex flex-col items-center gap-3",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex w-full max-w-[220px] items-center justify-between gap-2",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/50",
							children: webFramework ? /* @__PURE__ */ jsx(FrameworkIcon, {
								framework: webFramework === "js" ? "vanilla" : webFramework,
								size: "lg",
								className: "!h-8 !w-8"
							}) : /* @__PURE__ */ jsx(PlatformIcon, {
								platform: platformSlug,
								size: "md"
							})
						}),
						/* @__PURE__ */ jsx(ConnectionLine, {
							active: connected,
							waiting
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[hsl(343_98%_58%_/0.35)] bg-[hsl(343_98%_58%_/0.08)]",
							"aria-hidden": true,
							children: /* @__PURE__ */ jsxs("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								viewBox: "-12 -19 136 136",
								fill: "none",
								className: "h-8 w-8",
								children: [/* @__PURE__ */ jsx("path", {
									d: "M111.1 73.4729V97.9638H48.8706C30.7406 97.9638 14.9105 88.114 6.44112 73.4729C5.2099 71.3444 4.13229 69.1113 3.22835 66.7935C1.45387 62.2516 0.338421 57.3779 0 52.2926V45.6712C0.0734729 44.5379 0.189248 43.4135 0.340647 42.3025C0.650124 40.0227 1.11768 37.7918 1.73218 35.6232C7.54544 15.0641 26.448 0 48.8706 0C71.2932 0 90.1935 15.0641 96.0068 35.6232H69.3985C65.0302 28.9216 57.4692 24.491 48.8706 24.491C40.272 24.491 32.711 28.9216 28.3427 35.6232C27.0113 37.6604 25.9782 39.9069 25.3014 42.3025C24.7002 44.4266 24.3796 46.6664 24.3796 48.9819C24.3796 56.0019 27.3319 62.3295 32.0653 66.7935C36.4515 70.9369 42.3649 73.4729 48.8706 73.4729H111.1Z",
									fill: "hsl(343 98% 58%)"
								}), /* @__PURE__ */ jsx("path", {
									d: "M111.1 42.3027V66.7937H65.6759C70.4094 62.3297 73.3616 56.0021 73.3616 48.9821C73.3616 46.6666 73.041 44.4268 72.4399 42.3027H111.1Z",
									fill: "hsl(343 98% 58%)"
								})]
							})
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: cn("mt-6 w-full rounded-lg border px-3 py-2.5 text-center text-[12px]", connected && "border-green-500/40 bg-green-500/10 text-green-800 dark:text-green-300", waiting && "border-primary/30 bg-primary/5 text-foreground"),
					children: [
						waiting && /* @__PURE__ */ jsx("span", { children: t("Waiting for your app to ping Appwrite…") }),
						" ",
						connected && /* @__PURE__ */ jsxs("span", {
							className: "inline-flex items-center justify-center gap-2 font-medium",
							children: [/* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5 shrink-0" }), t("Connected - your SDK reached this project.")]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-4 text-[11px] leading-relaxed text-muted-foreground",
				children: t("Keep this tab open while your app is running so Appwrite can confirm the connection.")
			})
		]
	});
}
function ConnectionLine({ active, waiting }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-w-0 flex-1 items-center gap-0",
		children: [
			/* @__PURE__ */ jsx("div", { className: cn("h-px min-w-[12px] flex-1 transition-all duration-500", active ? "bg-gradient-to-l from-[hsl(343_98%_58%)] to-transparent" : waiting ? "animate-pulse bg-gradient-to-r from-muted via-primary/40 to-muted" : "border-t border-dashed border-border bg-transparent") }),
			/* @__PURE__ */ jsx("div", {
				className: cn("mx-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors", active ? "border-[hsl(343_98%_58%_/0.5)] bg-[hsl(343_98%_58%_/0.12)] text-[hsl(343_98%_48%)]" : "border-border bg-muted/80 text-muted-foreground"),
				children: active ? /* @__PURE__ */ jsx(Check, {
					className: "h-3.5 w-3.5",
					strokeWidth: 2.5
				}) : waiting ? /* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-muted-foreground/50" })
			}),
			/* @__PURE__ */ jsx("div", { className: cn("h-px min-w-[12px] flex-1 transition-all duration-500", active ? "bg-gradient-to-r from-[hsl(343_98%_58%)] to-transparent" : waiting ? "animate-pulse bg-gradient-to-r from-muted via-primary/40 to-muted" : "border-t border-dashed border-border bg-transparent") })
		]
	});
}
function FieldLabelWithInfo({ htmlFor, children, tooltip, required, className }) {
	const t = useT();
	return /* @__PURE__ */ jsxs(Label, {
		htmlFor,
		className: cn("flex items-center gap-1.5 text-[12px] font-medium", className),
		children: [/* @__PURE__ */ jsxs("span", { children: [children, required ? /* @__PURE__ */ jsx("span", {
			className: "ms-1 text-destructive",
			children: "*"
		}) : null] }), tooltip ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx("button", {
				type: "button",
				"aria-label": t("More information"),
				className: "inline-flex h-4 w-4 items-center justify-center rounded text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
				children: /* @__PURE__ */ jsx(Info, {
					className: "h-3.5 w-3.5",
					"aria-hidden": true
				})
			})
		}), /* @__PURE__ */ jsx(TooltipContent, {
			side: "top",
			sideOffset: 6,
			className: "z-[10050] max-w-[260px] text-[12px]",
			children: tooltip
		})] }) : null]
	});
}
var HOSTNAME_HINT = "The hostname your app uses to call the Appwrite APIs in production or development. No protocol or port number - use localhost during local development.";
var BUNDLE_ID_HINT = "You can find your Bundle Identifier in the General tab for your app's primary target in Xcode.";
var PACKAGE_NAME_HINT = "Your package name is generally the applicationId in your app-level build.gradle file.";
var APP_NAME_HINT = "Your application name as it appears on the device.";
var NAME_HINT = "A friendly name to identify this app in your Appwrite project. Only used inside the console.";
function getNameTooltip() {
	return NAME_HINT;
}
function getHostnameTooltip(_variant) {
	return HOSTNAME_HINT;
}
function getKeyTooltip(variant) {
	if (variant === "flutter-linux" || variant === "flutter-windows") return APP_NAME_HINT;
	if (variant.startsWith("apple") || variant === "flutter-ios" || variant === "flutter-macos" || variant === "react-native-ios") return BUNDLE_ID_HINT;
	return PACKAGE_NAME_HINT;
}
function iconPlatformForKind$1(k) {
	if (k === "windows" || k === "linux") return k;
	if (k === "react-native") return "react-native";
	if (k === "apple") return "apple";
	return k;
}
function PlatformKindCards({ value, onChange, disabled }) {
	return /* @__PURE__ */ jsx("div", {
		className: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4",
		children: ADD_APP_KINDS.map((k) => {
			return /* @__PURE__ */ jsxs("button", {
				type: "button",
				disabled,
				onClick: () => onChange(k),
				className: cn("flex w-full min-w-0 cursor-pointer items-center gap-3 rounded-lg border border-border bg-card/50 p-4 text-start transition-colors", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", value === k ? "border-primary bg-card ring-1 ring-primary/30" : "hover:bg-card", disabled && "pointer-events-none cursor-not-allowed opacity-50"),
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground",
					children: /* @__PURE__ */ jsx(PlatformIcon, {
						platform: iconPlatformForKind$1(k),
						size: "md"
					})
				}), /* @__PURE__ */ jsx("span", {
					className: "min-w-0 text-[13px] font-medium leading-snug text-foreground",
					children: getPlatformDisplayName(k)
				})]
			}, k);
		})
	});
}
function iconPlatformForKind(k) {
	if (k === "windows" || k === "linux") return k;
	if (k === "react-native") return "react-native";
	if (k === "apple") return "apple";
	return k;
}
var VARIANT_LABELS = {
	"flutter-android": "Android",
	"flutter-ios": "iOS",
	"flutter-web": "Web",
	"flutter-linux": "Linux",
	"flutter-macos": "macOS",
	"flutter-windows": "Windows",
	"apple-ios": "iOS",
	"apple-macos": "macOS",
	"apple-watchos": "watchOS",
	"apple-tvos": "tvOS",
	"react-native-android": "Android",
	"react-native-ios": "iOS"
};
function variantToIconKey$1(variant) {
	if (variant.startsWith("flutter-")) {
		const os = variant.replace("flutter-", "");
		if (os === "web") return null;
		return os;
	}
	if (variant.startsWith("react-native-")) return variant.replace("react-native-", "");
	return variant;
}
function getSelectionSummary(kind, variant, framework) {
	const kindLabel = getPlatformDisplayName(kind);
	if (kind === "web") {
		const iconKey = framework === "js" ? "vanilla" : framework;
		return {
			kindLabel,
			secondary: {
				label: WEB_FRAMEWORK_META[framework].label,
				icon: /* @__PURE__ */ jsx(FrameworkIcon, {
					framework: iconKey,
					size: "md"
				})
			}
		};
	}
	if (kind === "flutter" || kind === "apple" || kind === "react-native") {
		const iconKey = variantToIconKey$1(variant);
		return {
			kindLabel,
			secondary: {
				label: VARIANT_LABELS[variant] ?? variant,
				icon: iconKey ? /* @__PURE__ */ jsx(PlatformIcon, {
					platform: iconKey,
					size: "md"
				}) : /* @__PURE__ */ jsx(Globe, { className: "h-6 w-6" })
			}
		};
	}
	return {
		kindLabel,
		secondary: null
	};
}
function PlatformKindIcon({ kind }) {
	return /* @__PURE__ */ jsx(PlatformIcon, {
		platform: iconPlatformForKind(kind),
		size: "md"
	});
}
function SelectedPlatformCard({ kind, variant, framework, onChange, disabled }) {
	const t = useT();
	const { kindLabel, secondary } = getSelectionSummary(kind, variant, framework);
	return /* @__PURE__ */ jsx("div", {
		className: "rounded-xl border border-border bg-card/50 px-3 py-2.5 sm:px-4 sm:py-3",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex min-w-0 flex-1 flex-wrap items-center gap-1.5",
				children: [/* @__PURE__ */ jsxs("span", {
					className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/40 px-2 py-1 text-[12px] font-medium text-foreground",
					children: [/* @__PURE__ */ jsx("span", {
						className: "flex h-3.5 w-3.5 shrink-0 items-center justify-center text-muted-foreground [&_img]:!h-3.5 [&_img]:!w-3.5 [&_svg]:!h-3.5 [&_svg]:!w-3.5",
						children: /* @__PURE__ */ jsx(PlatformKindIcon, { kind })
					}), kindLabel]
				}), secondary ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(ChevronRight, {
					className: "h-3.5 w-3.5 shrink-0 text-muted-foreground/60",
					"aria-hidden": true
				}), /* @__PURE__ */ jsxs("span", {
					className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/40 px-2 py-1 text-[12px] font-medium text-foreground",
					children: [/* @__PURE__ */ jsx("span", {
						className: "flex h-3.5 w-3.5 shrink-0 items-center justify-center text-muted-foreground [&_img]:!h-3.5 [&_img]:!w-3.5 [&_svg]:!h-3.5 [&_svg]:!w-3.5",
						children: secondary.icon
					}), secondary.label]
				})] }) : null]
			}), /* @__PURE__ */ jsx(Button, {
				type: "button",
				variant: "ghost",
				size: "sm",
				className: "h-7 shrink-0 px-2 text-[12px] text-muted-foreground hover:text-foreground",
				onClick: onChange,
				disabled,
				children: t("Change")
			})]
		})
	});
}
function SetupStep({ number, label, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex gap-3 sm:gap-4",
		children: [/* @__PURE__ */ jsx("span", {
			className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border bg-background text-[11px] font-semibold text-muted-foreground",
			"aria-hidden": true,
			children: number
		}), /* @__PURE__ */ jsxs("div", {
			className: "min-w-0 flex-1 pt-0.5",
			children: [/* @__PURE__ */ jsx("p", {
				className: "mb-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground",
				children: label
			}), /* @__PURE__ */ jsx("div", {
				className: "space-y-2",
				children
			})]
		})]
	});
}
function variantToIconKey(variant) {
	if (variant.startsWith("flutter-")) {
		const os = variant.replace("flutter-", "");
		if (os === "web") return null;
		return os;
	}
	if (variant.startsWith("react-native-")) return variant.replace("react-native-", "");
	return variant;
}
function TargetIcon({ variant }) {
	const key = variantToIconKey(variant);
	if (!key) return /* @__PURE__ */ jsx(Globe, { className: "h-6 w-6" });
	return /* @__PURE__ */ jsx(PlatformIcon, {
		platform: key,
		size: "md"
	});
}
function VariantTargetCards({ options, value, onChange, disabled }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("grid gap-3", options.length <= 2 ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3"),
		children: options.map((o) => {
			return /* @__PURE__ */ jsxs("button", {
				type: "button",
				disabled,
				onClick: () => onChange(o.value),
				className: cn("flex w-full min-w-0 cursor-pointer items-center gap-3 rounded-lg border border-border bg-card/50 p-4 text-start transition-colors", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", value === o.value ? "border-primary bg-card ring-1 ring-primary/30" : "hover:bg-card", disabled && "pointer-events-none cursor-not-allowed opacity-50"),
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground",
					children: /* @__PURE__ */ jsx(TargetIcon, { variant: o.value })
				}), /* @__PURE__ */ jsx("span", {
					className: "min-w-0 text-[13px] font-medium leading-snug text-foreground",
					children: o.label
				})]
			}, o.value);
		})
	});
}
var ORDER = [
	"react",
	"tanstack-start",
	"nextjs",
	"vue",
	"nuxt",
	"svelte",
	"sveltekit",
	"angular",
	"analog",
	"remix",
	"solid",
	"vite",
	"astro",
	"js"
];
function WebFrameworkCards({ value, onChange, disabled }) {
	return /* @__PURE__ */ jsx("div", {
		className: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4",
		children: ORDER.map((k) => {
			const selected = value === k;
			const label = WEB_FRAMEWORK_META[k].label;
			const iconKey = k === "js" ? "vanilla" : k;
			return /* @__PURE__ */ jsxs("button", {
				type: "button",
				disabled,
				onClick: () => onChange(k),
				className: cn("flex w-full min-w-0 cursor-pointer items-center gap-3 rounded-lg border border-border bg-card/50 p-4 text-start transition-colors", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", selected ? "border-primary bg-card ring-1 ring-primary/30" : "hover:bg-card", disabled && "pointer-events-none cursor-not-allowed opacity-50"),
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted",
					children: /* @__PURE__ */ jsx(FrameworkIcon, {
						framework: iconKey,
						size: "md"
					})
				}), /* @__PURE__ */ jsx("span", {
					className: "min-w-0 text-[13px] font-medium leading-snug text-foreground",
					children: label
				})]
			}, k);
		})
	});
}
function normalizeKind(k) {
	if (k && ADD_APP_KINDS.includes(k)) return k;
	return "web";
}
function normalizeFramework(f) {
	if (f && WEB_FRAMEWORK_KEYS.includes(f)) return f;
	return "react";
}
function normalizeConfigureStep(raw, configurePhase) {
	if (configurePhase === "setup") return "details";
	return raw === "details" ? "details" : "platform";
}
function View({ projectId, search }) {
	const t = useT();
	const navigate = useNavigate();
	const step = search.step ?? "configure";
	const kind = normalizeKind(search.kind);
	const framework = normalizeFramework(search.framework);
	const configureStep = normalizeConfigureStep(search.configureStep, step);
	const resolvedVariant = useMemo(() => {
		if (search.variant?.trim()) return search.variant.trim();
		return defaultVariantForKind(kind);
	}, [kind, search.variant]);
	const wizardStage = useMemo(() => {
		if (step === "setup") return "setup";
		return configureStep === "details" ? "details" : "platform";
	}, [step, configureStep]);
	const { project } = useProject(projectId);
	const { features } = useConsoleProfile();
	const { access } = useOrganizationScopes(project?.teamId);
	const mayCreate = canCreatePlatform(access, features);
	const defaultPlatformName = useMemo(() => {
		if (resolvedVariant === "web") return `My ${WEB_FRAMEWORK_META[framework].label} app`;
		return `My ${getPlatformDisplayName(resolvedVariant)} app`;
	}, [resolvedVariant, framework]);
	const [name, setName] = useState(defaultPlatformName);
	const [nameTouched, setNameTouched] = useState(false);
	const [hostname, setHostname] = useState("localhost");
	const [key, setKey] = useState("");
	const [pingReceived, setPingReceived] = useState(false);
	const [nameError, setNameError] = useState(null);
	const [hostnameError, setHostnameError] = useState(null);
	const [keyError, setKeyError] = useState(null);
	const [createError, setCreateError] = useState(null);
	const [copied, setCopied] = useState(false);
	const copiedTimeoutRef = useRef(null);
	useEffect(() => {
		if (!nameTouched) setName(defaultPlatformName);
	}, [defaultPlatformName, nameTouched]);
	useEffect(() => {
		return () => {
			if (copiedTimeoutRef.current) clearTimeout(copiedTimeoutRef.current);
		};
	}, []);
	const createMutation = useCreatePlatform(projectId);
	useEffect(() => {
		if (!mayCreate) navigate({
			to: "/projects/$projectId/apps",
			params: { projectId },
			replace: true
		});
	}, [
		mayCreate,
		navigate,
		projectId
	]);
	useEffect(() => {
		if (step === "setup" && !search.platformId) navigate({
			to: "/projects/$projectId/apps/add",
			params: { projectId },
			search: {
				step: "configure",
				kind,
				variant: search.variant,
				framework: search.framework,
				configureStep: "platform"
			},
			replace: true
		});
	}, [
		step,
		search.platformId,
		navigate,
		projectId,
		kind,
		search.variant,
		search.framework
	]);
	useEffect(() => {
		if (step !== "setup" || !projectId) return;
		let cancelled = false;
		let cleanup;
		(async () => {
			cleanup = await registerConsoleRealtimeListener([...PROJECT_CHANNELS], (response) => {
				if (cancelled) return;
				if ((response.events ?? []).includes(`projects.${projectId}.ping`)) setPingReceived(true);
			});
		})();
		return () => {
			cancelled = true;
			cleanup?.();
		};
	}, [step, projectId]);
	const endpoint = useMemo(() => getProjectApiEndpoint(projectId), [projectId]);
	function updateSearch(patch) {
		navigate({
			to: "/projects/$projectId/apps/add",
			params: { projectId },
			search: {
				step: search.step,
				kind: search.kind,
				variant: search.variant,
				framework: search.framework,
				platformId: search.platformId,
				configureStep: search.configureStep,
				...patch
			},
			replace: true
		});
	}
	const promptText = useMemo(() => {
		if (!project?.$id) return "";
		if (resolvedVariant === "web") return generatePromptFromConfig(buildWebPromptConfig({
			framework,
			projectId: project.$id,
			projectName: project.name ?? "",
			endpoint
		}));
		return generatePromptFromConfig(buildNativePromptConfig(resolvedVariant, `APPWRITE_PROJECT_ID="${project.$id}"
APPWRITE_PROJECT_NAME="${project.name ?? ""}"
APPWRITE_ENDPOINT="${endpoint}"`, `Install the Appwrite SDK for this target. Configure the client with the endpoint and project ID above. Add a control that calls client.ping() so the user can verify connectivity.`));
	}, [
		resolvedVariant,
		framework,
		project,
		endpoint
	]);
	const nativeEnvBlock = useMemo(() => `APPWRITE_PROJECT_ID="${project?.$id ?? ""}"
APPWRITE_PROJECT_NAME="${project?.name ?? ""}"
APPWRITE_ENDPOINT="${endpoint}"`, [project, endpoint]);
	const manualBlocks = useMemo(() => {
		if (resolvedVariant === "web") {
			const meta = WEB_FRAMEWORK_META[framework];
			const repo = getWebStarterRepoName(framework);
			const starter = `git clone https://github.com/appwrite/${repo}
cd ${repo}`;
			const env = framework === "angular" ? `export const environment = {
  appwriteEndpoint: '${endpoint}',
  appwriteProjectId: '${project?.$id ?? ""}',
  appwriteProjectName: '${project?.name ?? ""}',
};` : `APPWRITE_PROJECT_ID="${project?.$id ?? ""}"
APPWRITE_PROJECT_NAME="${project?.name ?? ""}"
APPWRITE_ENDPOINT="${endpoint}"`;
			return {
				clone: starter,
				cloneLang: "bash",
				configLabel: framework === "angular" ? "Update src/environments/environment.ts" : "Copy .env.example to .env and set values",
				config: env,
				configLang: framework === "angular" ? "typescript" : "env",
				installRun: `pnpm install && ${meta.runCommand}`,
				port: meta.port
			};
		}
		const native = buildNativePromptConfig(resolvedVariant, nativeEnvBlock, `Install the Appwrite SDK for this target and wire endpoint + project ID.`);
		const lang = native.configLanguage === "kotlin" ? "kotlin" : native.configLanguage === "dart" ? "dart" : native.configLanguage === "typescript" ? "typescript" : "plaintext";
		const installRun = resolvedVariant.startsWith("flutter") ? "flutter pub get && flutter run" : resolvedVariant === "react-native-ios" ? "pnpm install && pnpm ios" : resolvedVariant === "react-native-android" ? "pnpm install && pnpm android" : "Run from your IDE";
		return {
			clone: native.cloneCommand,
			cloneLang: "bash",
			configLabel: `Update ${native.configFile}`,
			config: nativeEnvBlock,
			configLang: lang,
			installRun,
			port: resolvedVariant === "flutter-web" ? 8080 : 0
		};
	}, [
		resolvedVariant,
		framework,
		endpoint,
		project,
		nativeEnvBlock
	]);
	const asidePlatformSlug = resolvedVariant === "web" ? "web" : resolvedVariant;
	const handleKindChange = (next) => {
		updateSearch({
			kind: next,
			variant: defaultVariantForKind(next),
			step: "configure",
			platformId: void 0,
			configureStep: "platform"
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!mayCreate || !project?.$id) return;
		const trimmedName = name.trim();
		const nextNameError = trimmedName ? null : t("Enter an app name");
		const nextHostnameError = variantNeedsHostname(resolvedVariant) && !isValidHostname(hostname) ? t("Enter a valid hostname (e.g. localhost or app.example.com)") : null;
		const nextKeyError = variantNeedsKey(resolvedVariant) && !isValidKeyForVariant(resolvedVariant, key) ? resolvedVariant.includes("apple") ? t("Enter a valid bundle ID (e.g. com.example.app)") : t("Enter a valid package name (e.g. com.example.app)") : null;
		setNameError(nextNameError);
		setHostnameError(nextHostnameError);
		setKeyError(nextKeyError);
		setCreateError(null);
		if (nextNameError || nextHostnameError || nextKeyError) return;
		createMutation.mutate({
			variant: resolvedVariant,
			name: trimmedName,
			hostname: variantNeedsHostname(resolvedVariant) ? hostname.trim() : void 0,
			key: variantNeedsKey(resolvedVariant) ? key.trim() : void 0
		}, {
			onSuccess: (created) => {
				navigate({
					to: "/projects/$projectId/apps/add",
					params: { projectId },
					search: {
						step: "setup",
						kind,
						variant: resolvedVariant,
						framework,
						platformId: created.$id
					},
					replace: true
				});
			},
			onError: (err) => {
				setCreateError(getErrorMessage(err) || t("Failed to register app"));
			}
		});
	};
	const aiChatIDEs = useMemo(() => getAIChatIDEs(), []);
	const handleOpenInIDE = (ide) => {
		if (!promptText) return;
		const deeplink = generateAIChatDeeplink(ide, promptText);
		if (deeplink) openAIChatDeeplink(deeplink);
	};
	const handleCopyPrompt = async () => {
		if (!promptText) return;
		try {
			await navigator.clipboard.writeText(promptText);
			setCopied(true);
			if (copiedTimeoutRef.current) clearTimeout(copiedTimeoutRef.current);
			copiedTimeoutRef.current = setTimeout(() => setCopied(false), 2e3);
		} catch {}
	};
	const variantTargetSection = kind === "flutter" ? /* @__PURE__ */ jsxs("section", {
		className: "space-y-3",
		children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
			className: "text-[15px] font-semibold text-foreground",
			children: t("Choose target")
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-1 text-[13px] text-muted-foreground",
			children: t("Where this Flutter app runs.")
		})] }), /* @__PURE__ */ jsx(VariantTargetCards, {
			options: FLUTTER_VARIANT_OPTIONS,
			value: resolvedVariant,
			onChange: (v) => updateSearch({
				variant: v,
				step: "configure",
				platformId: void 0
			}),
			disabled: createMutation.isPending
		})]
	}) : kind === "apple" ? /* @__PURE__ */ jsxs("section", {
		className: "space-y-3",
		children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
			className: "text-[15px] font-semibold text-foreground",
			children: t("Choose target")
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-1 text-[13px] text-muted-foreground",
			children: t("Which Apple platform you are building for.")
		})] }), /* @__PURE__ */ jsx(VariantTargetCards, {
			options: APPLE_VARIANT_OPTIONS,
			value: resolvedVariant,
			onChange: (v) => updateSearch({
				variant: v,
				step: "configure",
				platformId: void 0
			}),
			disabled: createMutation.isPending
		})]
	}) : kind === "react-native" ? /* @__PURE__ */ jsxs("section", {
		className: "space-y-3",
		children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
			className: "text-[15px] font-semibold text-foreground",
			children: t("Choose target")
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-1 text-[13px] text-muted-foreground",
			children: t("Android or iOS for this React Native app.")
		})] }), /* @__PURE__ */ jsx(VariantTargetCards, {
			options: REACT_NATIVE_VARIANT_OPTIONS,
			value: resolvedVariant,
			onChange: (v) => updateSearch({
				variant: v,
				step: "configure",
				platformId: void 0
			}),
			disabled: createMutation.isPending
		})]
	}) : null;
	const useWizardSidebar = step === "setup" || step === "configure" && configureStep === "platform";
	const sidebar = step === "setup" ? /* @__PURE__ */ jsx(ConnectionAside, {
		webFramework: resolvedVariant === "web" ? framework : null,
		platformSlug: asidePlatformSlug,
		pingReceived
	}) : step === "configure" && configureStep === "platform" ? /* @__PURE__ */ jsx(ConfigureWizardAside, {}) : null;
	return /* @__PURE__ */ jsx(WizardLayout, {
		title: t("Connect your app"),
		headerBottom: /* @__PURE__ */ jsx(WizardProgress, { stage: wizardStage }),
		fallbackPath: `/projects/${projectId}/apps`,
		fullscreen: true,
		useSidebar: useWizardSidebar,
		sidebar,
		constrainWidth: true,
		maxWidth: "max-w-7xl",
		footerAlign: "right",
		footer: step === "configure" && configureStep === "platform" ? /* @__PURE__ */ jsx(Button, {
			type: "button",
			onClick: () => {
				requestAnimationFrame(() => updateSearch({
					configureStep: "details",
					kind,
					variant: resolvedVariant,
					framework
				}));
			},
			children: t("Continue")
		}, "wizard-step-platform") : step === "configure" && configureStep === "details" ? /* @__PURE__ */ jsx(Button, {
			type: "submit",
			form: "add-app-configure",
			disabled: createMutation.isPending,
			children: t("Register and continue")
		}, "wizard-step-details") : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Button, {
			type: "button",
			variant: "outline",
			onClick: () => navigate({
				to: "/projects/$projectId/apps/add",
				params: { projectId },
				search: {
					step: "configure",
					kind,
					variant: resolvedVariant,
					framework,
					configureStep: "platform"
				},
				replace: true
			}),
			children: t("Add another app")
		}, "wizard-step-setup-add-another"), /* @__PURE__ */ jsx(Button, {
			type: "button",
			onClick: () => navigate({
				to: "/projects/$projectId/apps",
				params: { projectId }
			}),
			children: t("Done")
		}, "wizard-step-setup-done")] }),
		children: step === "configure" && configureStep === "platform" ? /* @__PURE__ */ jsxs("div", {
			className: "w-full space-y-8",
			children: [
				/* @__PURE__ */ jsxs("section", {
					className: "space-y-3",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "text-[15px] font-semibold text-foreground",
						children: t("Choose your platform")
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-1 text-[13px] text-muted-foreground",
						children: t("Web, mobile, or desktop - pick what matches your project.")
					})] }), /* @__PURE__ */ jsx(PlatformKindCards, {
						value: kind,
						onChange: handleKindChange,
						disabled: createMutation.isPending
					})]
				}),
				kind === "web" ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: "border-t border-border" }), /* @__PURE__ */ jsxs("section", {
					className: "space-y-3",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "text-[15px] font-semibold text-foreground",
						children: t("Choose a web framework")
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-1 text-[13px] text-muted-foreground",
						children: t("We match starters and AI prompts to the framework you pick.")
					})] }), /* @__PURE__ */ jsx(WebFrameworkCards, {
						value: framework,
						onChange: (k) => updateSearch({
							framework: k,
							step: "configure",
							platformId: void 0,
							configureStep: "platform"
						}),
						disabled: createMutation.isPending
					})]
				})] }) : null,
				variantTargetSection ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: "border-t border-border" }), variantTargetSection] }) : null
			]
		}) : step === "configure" && configureStep === "details" ? /* @__PURE__ */ jsxs("div", {
			className: "mx-auto w-full max-w-2xl space-y-6",
			children: [/* @__PURE__ */ jsx(SelectedPlatformCard, {
				kind,
				variant: resolvedVariant,
				framework,
				disabled: createMutation.isPending,
				onChange: () => updateSearch({ configureStep: "platform" })
			}), /* @__PURE__ */ jsx("form", {
				id: "add-app-configure",
				onSubmit: handleSubmit,
				className: "space-y-8",
				children: /* @__PURE__ */ jsxs("section", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("App details")
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-1 text-[13px] text-muted-foreground",
							children: t("These values are sent to Appwrite when you register this app.")
						})] }),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ jsx(FieldLabelWithInfo, {
									htmlFor: "add-app-name",
									required: true,
									tooltip: getNameTooltip(),
									children: t("Name")
								}),
								/* @__PURE__ */ jsx(Input, {
									id: "add-app-name",
									value: name,
									onChange: (e) => {
										setName(e.target.value);
										if (!nameTouched) setNameTouched(true);
										if (nameError) setNameError(null);
									},
									placeholder: defaultPlatformName,
									autoComplete: "off",
									"aria-invalid": nameError ? true : void 0
								}),
								nameError && /* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-destructive",
									children: nameError
								})
							]
						}),
						variantNeedsHostname(resolvedVariant) && /* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ jsx(FieldLabelWithInfo, {
									htmlFor: "add-app-hostname",
									required: true,
									tooltip: getHostnameTooltip(resolvedVariant),
									children: t("Hostname")
								}),
								/* @__PURE__ */ jsx(Input, {
									id: "add-app-hostname",
									value: hostname,
									onChange: (e) => {
										setHostname(e.target.value);
										if (hostnameError) setHostnameError(null);
									},
									placeholder: "localhost",
									autoComplete: "off",
									"aria-invalid": hostnameError ? true : void 0
								}),
								hostnameError ? /* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-destructive",
									children: hostnameError
								}) : /* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-muted-foreground",
									children: t("Origin your app will call Appwrite from (no protocol or port). Use localhost for local development.")
								})
							]
						}),
						variantNeedsKey(resolvedVariant) && /* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ jsx(FieldLabelWithInfo, {
									htmlFor: "add-app-key",
									required: true,
									tooltip: getKeyTooltip(resolvedVariant),
									children: resolvedVariant.includes("apple") ? t("Bundle ID") : t("Package name")
								}),
								/* @__PURE__ */ jsx(Input, {
									id: "add-app-key",
									value: key,
									onChange: (e) => {
										setKey(e.target.value);
										if (keyError) setKeyError(null);
									},
									placeholder: "com.example.app",
									autoComplete: "off",
									"aria-invalid": keyError ? true : void 0
								}),
								keyError && /* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-destructive",
									children: keyError
								})
							]
						}),
						createError && /* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-destructive",
							children: createError
						})
					]
				})
			})]
		}) : /* @__PURE__ */ jsxs("div", {
			className: "w-full space-y-6 pb-2",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "rounded-xl border border-border bg-card/50 overflow-hidden",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 px-6 py-4",
						children: [/* @__PURE__ */ jsx("span", {
							className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10",
							"aria-hidden": true,
							children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-emerald-600 dark:text-emerald-400" })
						}), /* @__PURE__ */ jsxs("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-[15px] font-semibold text-foreground",
								children: t("App registered")
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-1 text-[13px] text-muted-foreground",
								children: t("Your project is ready to accept traffic from this app.")
							})]
						})]
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-xl border border-border bg-card/50 overflow-hidden",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-[15px] font-semibold text-foreground",
									children: t("Set up with AI")
								}), /* @__PURE__ */ jsx(Badge, {
									variant: "success",
									className: "text-[10px]",
									children: t("Recommended")
								})]
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-2 text-[13px] text-muted-foreground",
								children: t("Hand off a ready-made prompt with your endpoint and project ID to your favourite AI tool, or copy it anywhere.")
							})]
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap gap-2 px-6 py-4",
							children: [/* @__PURE__ */ jsxs(Button, {
								type: "button",
								size: "sm",
								className: "h-9 text-[13px]",
								disabled: !promptText,
								onClick: () => void handleCopyPrompt(),
								children: [copied ? /* @__PURE__ */ jsx(Check, {}) : /* @__PURE__ */ jsx(Copy, {}), t("Copy prompt")]
							}), /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
								asChild: true,
								children: /* @__PURE__ */ jsxs(Button, {
									type: "button",
									variant: "outline",
									size: "sm",
									className: "h-9 text-[13px]",
									disabled: !promptText,
									children: [
										/* @__PURE__ */ jsx(BrainCircuit, {}),
										t("Open in tool"),
										/* @__PURE__ */ jsx(ChevronDown, {})
									]
								})
							}), /* @__PURE__ */ jsx(DropdownMenuContent, {
								align: "start",
								className: "z-[10050] min-w-[200px]",
								children: aiChatIDEs.map((ide) => /* @__PURE__ */ jsxs(DropdownMenuItem, {
									onClick: () => handleOpenInIDE(ide),
									children: [
										/* @__PURE__ */ jsx("img", {
											src: ide.iconPath,
											alt: ide.name,
											className: "h-4 w-4"
										}),
										/* @__PURE__ */ jsxs("span", {
											className: "ms-2",
											children: [
												t("Prompt"),
												" ",
												ide.name
											]
										}),
										/* @__PURE__ */ jsx(ExternalLink, {
											className: "ms-auto h-2.5 w-2.5 shrink-0 text-muted-foreground/30",
											strokeWidth: 1.25
										})
									]
								}, ide.id))
							})] })]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-xl border border-border bg-card/50 overflow-hidden",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-[15px] font-semibold text-foreground",
								children: t("Manual setup")
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-2 text-[13px] text-muted-foreground",
								children: t("Clone the starter, drop in your credentials, then run the app and send a ping to confirm the link.")
							})]
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-5 px-6 py-5",
							children: [
								/* @__PURE__ */ jsx(SetupStep, {
									number: 1,
									label: t("Clone starter"),
									children: /* @__PURE__ */ jsx(CodeBlock, {
										code: manualBlocks.clone,
										language: manualBlocks.cloneLang,
										copyInside: true
									})
								}),
								/* @__PURE__ */ jsx(SetupStep, {
									number: 2,
									label: t(manualBlocks.configLabel),
									children: /* @__PURE__ */ jsx(CodeBlock, {
										code: manualBlocks.config,
										language: manualBlocks.configLang,
										copyInside: true
									})
								}),
								/* @__PURE__ */ jsxs(SetupStep, {
									number: 3,
									label: t("Install and run"),
									children: [/* @__PURE__ */ jsx(CodeBlock, {
										code: manualBlocks.installRun,
										language: "bash",
										copyInside: true
									}), manualBlocks.port > 0 && /* @__PURE__ */ jsxs("p", {
										className: "text-[12px] text-muted-foreground",
										children: [
											t("Demo URL"),
											":",
											" ",
											/* @__PURE__ */ jsxs("a", {
												href: `http://localhost:${manualBlocks.port}`,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "link-neutral inline-flex items-center gap-1",
												children: [
													"http://localhost:",
													manualBlocks.port,
													/* @__PURE__ */ jsx(ExternalLink, {
														className: "h-3 w-3 text-muted-foreground",
														"aria-hidden": true
													})
												]
											})
										]
									})]
								}),
								/* @__PURE__ */ jsx(SetupStep, {
									number: 4,
									label: t("Send a ping"),
									children: /* @__PURE__ */ jsxs("div", {
										className: cn("flex items-center gap-2 rounded-md border px-3 py-2 text-[13px]", pingReceived ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "border-border bg-muted/30 text-muted-foreground"),
										children: [pingReceived ? /* @__PURE__ */ jsx("span", {
											className: "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10",
											"aria-hidden": true,
											children: /* @__PURE__ */ jsx(Check, { className: "h-3 w-3 text-emerald-600 dark:text-emerald-400" })
										}) : /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 shrink-0 animate-spin" }), /* @__PURE__ */ jsx("span", {
											className: cn(pingReceived && "font-medium"),
											children: pingReceived ? t("Ping received - your SDK reached Appwrite.") : t("Waiting for client.ping() from your app...")
										})]
									})
								})
							]
						})
					]
				})
			]
		})
	});
}
function AddAppPage() {
	const { projectId } = Route$1.useParams();
	return /* @__PURE__ */ jsx(View, {
		projectId,
		search: Route$1.useSearch()
	});
}
export { AddAppPage as component };
