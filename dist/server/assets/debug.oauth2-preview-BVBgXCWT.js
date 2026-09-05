import "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import "./translate-DZcqveGn.js";
import "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-BDeF927R.js";
import "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import "./input-yKHNPhDZ.js";
import "./mcp-CgjPVMsn.js";
import { i as getEffectiveMcpEndpointUrl } from "./debug-mcp-endpoint-B4hkK2QF.js";
import "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import "./dropdown-menu-DH51wH-m.js";
import "./checkbox-r_hqIB3d.js";
import "./AppwriteLogo-SOi0wsVe.js";
import { t as Route$1 } from "./debug.oauth2-preview-Ac8xjelm.js";
import { t as Card } from "./card-BZWeW6wv.js";
import { t as OAuth2RelayCard } from "./OAuth2RelayCard-D08_Rvpv.js";
import "./input-otp-DTuOA8dL.js";
import { a as PROJECT_RAR_TYPE, i as ORGANIZATION_RAR_TYPE, n as OAuth2ConsentCard, t as OAuth2OutcomeCard } from "./OAuth2OutcomeCard-AomxctSa.js";
import { n as OAuth2DeviceCodeInput, t as OAUTH2_DEVICE_CODE_LENGTH } from "./OAuth2DeviceCodeInput-B1PhKXls.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Loader2, MonitorSmartphone, TriangleAlert } from "lucide-react";
var ACCOUNT_LABEL = "demo@appwrite.io";
var SCREEN_OPTIONS = [
	{
		value: "consent",
		label: "Consent"
	},
	{
		value: "consent-mcp",
		label: "Consent (MCP)"
	},
	{
		value: "consent-resources",
		label: "Consent (resources)"
	},
	{
		value: "device-enter-code",
		label: "Device code"
	},
	{
		value: "device-confirm-code",
		label: "Device confirm"
	},
	{
		value: "device-consent",
		label: "Device consent"
	},
	{
		value: "outcome-approved",
		label: "Access granted"
	},
	{
		value: "outcome-approved-device",
		label: "Device connected"
	},
	{
		value: "outcome-approved-deeplink",
		label: "Access granted (deep link)"
	},
	{
		value: "outcome-denied",
		label: "Request cancelled"
	},
	{
		value: "error",
		label: "Authorization failed"
	},
	{
		value: "loading",
		label: "Loading"
	},
	{
		value: "relay-success",
		label: "Relay success"
	},
	{
		value: "relay-failure",
		label: "Relay failure"
	},
	{
		value: "relay-missing",
		label: "Relay missing URL"
	},
	{
		value: "relay-error",
		label: "Relay error"
	}
];
function mockApp(overrides) {
	return {
		$id: "demo-app",
		$createdAt: "2026-01-01T00:00:00.000Z",
		$updatedAt: "2026-01-01T00:00:00.000Z",
		name: "Cursor",
		description: "AI-powered code editor",
		clientUri: "https://cursor.com",
		logoUri: "",
		privacyPolicyUrl: "https://cursor.com/privacy",
		termsUrl: "https://cursor.com/terms",
		contacts: ["support@cursor.com"],
		tagline: "The AI Code Editor",
		tags: ["developer", "ide"],
		labels: [],
		images: [],
		supportUrl: "https://cursor.com/support",
		dataDeletionUrl: "",
		redirectUris: ["https://cursor.com/oauth/callback", "cursor://oauth"],
		postLogoutRedirectUris: [],
		enabled: true,
		type: "public",
		deviceFlow: true,
		teamId: "",
		userId: "demo-user",
		installationScopes: [],
		installationRedirectUrl: "",
		secrets: [],
		...overrides
	};
}
function mockGrant(overrides) {
	return {
		$id: "demo-grant",
		$createdAt: "2026-01-01T00:00:00.000Z",
		$updatedAt: "2026-01-01T00:00:00.000Z",
		userId: "demo-user",
		appId: "demo-app",
		scopes: [
			"openid",
			"profile",
			"email"
		],
		resources: [],
		authorizationDetails: "",
		prompt: "consent",
		redirectUri: "https://cursor.com/oauth/callback",
		authTime: Math.floor(Date.now() / 1e3),
		expire: "2026-12-31T00:00:00.000Z",
		...overrides
	};
}
var IDENTITY_GRANT = mockGrant();
var FULL_ACCESS_GRANT = mockGrant({ scopes: [
	"openid",
	"profile",
	"email",
	"all"
] });
var RESOURCES_GRANT = mockGrant({
	scopes: [
		"openid",
		"profile",
		"email",
		"project:all",
		"organization:projects.read",
		"organization:organization.read"
	],
	authorizationDetails: JSON.stringify([{
		type: PROJECT_RAR_TYPE,
		identifiers: ["*"]
	}, {
		type: ORGANIZATION_RAR_TYPE,
		identifiers: ["*"]
	}])
});
function mcpGrant() {
	return mockGrant({
		scopes: [
			"openid",
			"profile",
			"email",
			"project:all",
			"project:users.read",
			"project:users.write",
			"project:databases.read",
			"project:databases.write",
			"project:tables.read",
			"project:tables.write",
			"project:rows.read",
			"project:rows.write",
			"project:files.read",
			"project:files.write",
			"project:functions.read",
			"project:functions.write",
			"organization:all",
			"organization:projects.read",
			"organization:projects.write",
			"organization:organization.read"
		],
		resources: [getEffectiveMcpEndpointUrl()],
		authorizationDetails: JSON.stringify([{
			type: PROJECT_RAR_TYPE,
			identifiers: ["*"]
		}, {
			type: ORGANIZATION_RAR_TYPE,
			identifiers: ["*"]
		}])
	});
}
function DeviceCodeCard({ code: initialCode, hasPrefilledCode, error }) {
	const [code, setCode] = useState(initialCode);
	useEffect(() => {
		setCode(initialCode);
	}, [initialCode]);
	return /* @__PURE__ */ jsx(Card, {
		className: "overflow-hidden p-6 md:p-8",
		children: /* @__PURE__ */ jsxs("form", {
			onSubmit: (e) => e.preventDefault(),
			className: "space-y-6",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col items-center gap-4 text-center",
					children: [/* @__PURE__ */ jsx("div", {
						className: "bg-muted text-muted-foreground flex size-10 items-center justify-center rounded-xl ring-1 ring-border/50",
						children: /* @__PURE__ */ jsx(MonitorSmartphone, { className: "size-4" })
					}), /* @__PURE__ */ jsxs("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ jsx("h1", {
							className: "text-2xl font-semibold tracking-tight",
							children: hasPrefilledCode ? "Confirm your code" : "Connect a device"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground text-[13px] leading-relaxed",
							children: hasPrefilledCode ? "Make sure this matches the code shown on your device, then continue." : "Enter the code shown on your device to continue."
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ jsx(Label, {
							htmlFor: "user-code",
							children: "Device code"
						}),
						/* @__PURE__ */ jsx(OAuth2DeviceCodeInput, {
							id: "user-code",
							value: code,
							onChange: setCode,
							autoFocus: true,
							"aria-invalid": Boolean(error)
						}),
						error ? /* @__PURE__ */ jsx("p", {
							className: "text-destructive text-[13px]",
							children: error
						}) : null
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex flex-col gap-2",
					children: /* @__PURE__ */ jsx(Button, {
						type: "submit",
						variant: "brandCta",
						className: "w-full",
						disabled: code.length < 6,
						children: "Continue"
					})
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "text-muted-foreground text-center text-[12px]",
					children: [
						"Signed in as",
						" ",
						/* @__PURE__ */ jsx("span", {
							className: "text-foreground font-medium",
							children: ACCOUNT_LABEL
						}),
						"."
					]
				})
			]
		})
	});
}
function AuthorizationFailedCard() {
	return /* @__PURE__ */ jsx(Card, {
		className: "overflow-hidden p-6 md:p-8",
		children: /* @__PURE__ */ jsxs("div", {
			className: "space-y-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col items-center gap-4 text-center",
				children: [/* @__PURE__ */ jsx("div", {
					className: "bg-destructive/10 flex size-10 items-center justify-center rounded-xl",
					children: /* @__PURE__ */ jsx(TriangleAlert, { className: "text-destructive size-4" })
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ jsx("h1", {
						className: "text-2xl font-semibold tracking-tight",
						children: "Authorization failed"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground text-[13px] leading-relaxed",
						children: "This authorization request is invalid or has expired."
					})]
				})]
			}), /* @__PURE__ */ jsx(Button, {
				variant: "outline",
				type: "button",
				className: "w-full",
				children: "Go to console"
			})]
		})
	});
}
function OAuth2PreviewPage() {
	const search = Route$1.useSearch();
	const navigate = Route$1.useNavigate();
	const screenFromUrl = search.screen ?? "consent";
	const [screen, setScreen] = useState(screenFromUrl);
	const [outcome, setOutcome] = useState(null);
	useEffect(() => {
		setScreen(screenFromUrl);
	}, [screenFromUrl]);
	useEffect(() => {
		setOutcome(null);
	}, [screen]);
	const app = useMemo(() => mockApp(), []);
	const mcp = useMemo(() => mcpGrant(), []);
	const screenIndex = SCREEN_OPTIONS.findIndex((option) => option.value === screen);
	const currentIndex = screenIndex >= 0 ? screenIndex : 0;
	const setPreviewScreen = (next) => {
		setScreen(next);
		navigate({
			to: "/debug/oauth2-preview",
			search: { screen: next },
			replace: true
		});
	};
	const goToRelativeScreen = (delta) => {
		setPreviewScreen(SCREEN_OPTIONS[(currentIndex + delta + SCREEN_OPTIONS.length) % SCREEN_OPTIONS.length].value);
	};
	useEffect(() => {
		const onKeyDown = (event) => {
			const target = event.target;
			if (!(target instanceof HTMLElement)) return;
			if (target.isContentEditable || target.closest("input, textarea, select")) return;
			if (event.key === "ArrowLeft") {
				event.preventDefault();
				goToRelativeScreen(-1);
			} else if (event.key === "ArrowRight") {
				event.preventDefault();
				goToRelativeScreen(1);
			}
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [currentIndex]);
	const consentFlow = screen === "device-consent" ? "device" : "authorization";
	const activeGrant = useMemo(() => {
		if (screen === "consent-mcp" || screen === "device-consent") return mcp;
		if (screen === "consent-resources") return RESOURCES_GRANT;
		if (screen === "consent") return FULL_ACCESS_GRANT;
		return IDENTITY_GRANT;
	}, [mcp, screen]);
	const showConsent = !outcome && (screen === "consent" || screen === "consent-mcp" || screen === "consent-resources" || screen === "device-consent");
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed inset-0 z-[9997] flex flex-col bg-background",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex shrink-0 flex-wrap items-center gap-3 border-b border-border px-4 py-2",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-[12px] text-muted-foreground",
					children: "Debug preview. OAuth2 screens."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1.5",
					children: [
						/* @__PURE__ */ jsx(Button, {
							type: "button",
							size: "sm",
							variant: "outline",
							className: "h-8 w-8 cursor-pointer px-0",
							onClick: () => goToRelativeScreen(-1),
							"aria-label": "Previous screen",
							children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ jsx("select", {
							value: screen,
							onChange: (event) => setPreviewScreen(event.target.value),
							"aria-label": "OAuth2 preview screen",
							className: "border-input bg-background h-8 w-[280px] cursor-pointer rounded-md border px-2 text-[12px] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
							children: SCREEN_OPTIONS.map((option) => /* @__PURE__ */ jsx("option", {
								value: option.value,
								children: option.label
							}, option.value))
						}),
						/* @__PURE__ */ jsx(Button, {
							type: "button",
							size: "sm",
							variant: "outline",
							className: "h-8 w-8 cursor-pointer px-0",
							onClick: () => goToRelativeScreen(1),
							"aria-label": "Next screen",
							children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
						})
					]
				}),
				/* @__PURE__ */ jsxs("span", {
					className: "text-[11px] text-muted-foreground",
					children: [
						currentIndex + 1,
						" / ",
						SCREEN_OPTIONS.length
					]
				}),
				outcome ? /* @__PURE__ */ jsx(Button, {
					type: "button",
					size: "sm",
					variant: "outline",
					className: "h-8 cursor-pointer text-[12px]",
					onClick: () => setOutcome(null),
					children: "Reset outcome"
				}) : null
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "min-h-0 flex-1 overflow-y-auto",
			children: /* @__PURE__ */ jsx("div", {
				className: "flex min-h-full flex-col items-center p-6 md:p-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "my-auto w-full max-w-xl",
					children: [
						showConsent ? /* @__PURE__ */ jsx(OAuth2ConsentCard, {
							grant: activeGrant,
							app,
							accountLabel: ACCOUNT_LABEL,
							flow: consentFlow,
							preview: true,
							onSwitchAccount: consentFlow === "authorization" ? () => void 0 : void 0,
							onDone: (next) => setOutcome(next)
						}, screen) : null,
						outcome ? /* @__PURE__ */ jsx(OAuth2OutcomeCard, {
							outcome,
							flow: consentFlow,
							app,
							accountLabel: ACCOUNT_LABEL,
							redirectUrl: outcome === "approved" && consentFlow === "authorization" ? "cursor://oauth" : void 0
						}) : null,
						!outcome && screen === "device-enter-code" ? /* @__PURE__ */ jsx(DeviceCodeCard, {
							code: "",
							hasPrefilledCode: false
						}) : null,
						!outcome && screen === "device-confirm-code" ? /* @__PURE__ */ jsx(DeviceCodeCard, {
							code: "AB12CD",
							hasPrefilledCode: true
						}) : null,
						!outcome && screen === "outcome-approved" ? /* @__PURE__ */ jsx(OAuth2OutcomeCard, {
							outcome: "approved",
							flow: "authorization",
							app,
							accountLabel: ACCOUNT_LABEL
						}) : null,
						!outcome && screen === "outcome-approved-device" ? /* @__PURE__ */ jsx(OAuth2OutcomeCard, {
							outcome: "approved",
							flow: "device",
							app,
							accountLabel: ACCOUNT_LABEL
						}) : null,
						!outcome && screen === "outcome-approved-deeplink" ? /* @__PURE__ */ jsx(OAuth2OutcomeCard, {
							outcome: "approved",
							flow: "authorization",
							app,
							accountLabel: ACCOUNT_LABEL,
							redirectUrl: "cursor://oauth"
						}) : null,
						!outcome && screen === "outcome-denied" ? /* @__PURE__ */ jsx(OAuth2OutcomeCard, {
							outcome: "denied",
							flow: "authorization",
							app,
							accountLabel: ACCOUNT_LABEL
						}) : null,
						!outcome && screen === "error" ? /* @__PURE__ */ jsx(AuthorizationFailedCard, {}) : null,
						!outcome && screen === "loading" ? /* @__PURE__ */ jsx("div", {
							className: "flex min-h-64 items-center justify-center",
							children: /* @__PURE__ */ jsx(Loader2, { className: "text-muted-foreground size-8 animate-spin" })
						}) : null,
						!outcome && screen === "relay-success" ? /* @__PURE__ */ jsx(OAuth2RelayCard, {
							title: "You're now logged in",
							preview: true,
							previewProject: "demoProject",
							previewSearch: "?project=demoProject&secret=demo"
						}) : null,
						!outcome && screen === "relay-failure" ? /* @__PURE__ */ jsx(OAuth2RelayCard, {
							title: "Login failed",
							preview: true,
							previewProject: "demoProject",
							previewSearch: "?project=demoProject&error=denied"
						}) : null,
						!outcome && screen === "relay-missing" ? /* @__PURE__ */ jsx(OAuth2RelayCard, {
							title: "You're now logged in",
							preview: true
						}) : null,
						!outcome && screen === "relay-error" ? /* @__PURE__ */ jsx(OAuth2RelayCard, {
							title: "Login failed",
							preview: true,
							previewError: {
								message: "The user cancelled the authorization request.",
								type: "user_denied",
								code: 401
							}
						}) : null
					]
				})
			})
		})]
	});
}
export { OAuth2PreviewPage as component };
