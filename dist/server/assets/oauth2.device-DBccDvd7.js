import "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import { d as sdk } from "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-BDeF927R.js";
import "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import { t as getOAuth2App } from "./cimd-CRIktQxf.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import "./input-yKHNPhDZ.js";
import "./mcp-CgjPVMsn.js";
import "./debug-mcp-endpoint-B4hkK2QF.js";
import "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import "./dropdown-menu-DH51wH-m.js";
import "./checkbox-r_hqIB3d.js";
import { t as Route$1 } from "./oauth2.device-DkvEOKHY.js";
import { t as Card } from "./card-BZWeW6wv.js";
import "./input-otp-DTuOA8dL.js";
import { n as OAuth2ConsentCard, t as OAuth2OutcomeCard } from "./OAuth2OutcomeCard-AomxctSa.js";
import { n as OAuth2DeviceCodeInput, r as normalizeUserCode, t as OAUTH2_DEVICE_CODE_LENGTH } from "./OAuth2DeviceCodeInput-B1PhKXls.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { AppwriteException } from "@appwrite.io/console";
import { useMutation } from "@tanstack/react-query";
import { Loader2, MonitorSmartphone } from "lucide-react";
var DEVICE_FLOW = "device";
function OAuth2DevicePage() {
	const t = useT();
	const navigate = useNavigate();
	const search = Route$1.useSearch();
	const [phase, setPhase] = useState("loading");
	const [account, setAccount] = useState(null);
	const [code, setCode] = useState(normalizeUserCode(search.user_code ?? ""));
	const [grant, setGrant] = useState(null);
	const [app, setApp] = useState(null);
	const [error, setError] = useState(null);
	const hasPrefilledCode = Boolean(normalizeUserCode(search.user_code ?? ""));
	const activeCodeRef = useRef(code);
	const submitMutation = useMutation({
		mutationFn: async (userCode) => {
			const loadedGrant = await sdk.forConsole.oauth2.createGrant({ userCode });
			return {
				loadedGrant,
				loadedApp: await getOAuth2App(loadedGrant.appId)
			};
		},
		onSuccess: ({ loadedGrant, loadedApp }, userCode) => {
			if (userCode !== activeCodeRef.current) return;
			setGrant(loadedGrant);
			setApp(loadedApp);
			setError(null);
			setPhase("consent");
		},
		onError: (e, userCode) => {
			if (userCode !== activeCodeRef.current) return;
			if (e instanceof AppwriteException && e.type === "oauth2_invalid_user_code") setError(t("That code is invalid or has expired. Check your device and try again."));
			else setError(getErrorMessage(e, t("Could not verify that code.")));
			setPhase("enter-code");
		}
	});
	useEffect(() => {
		let cancelled = false;
		async function init() {
			const loggedInAccount = await sdk.forConsole.account.get().catch(() => null);
			if (cancelled) return;
			if (!loggedInAccount) {
				navigate({
					to: "/sign-in",
					search: { redirect: window.location.pathname + window.location.search },
					replace: true
				});
				return;
			}
			setAccount(loggedInAccount);
			setPhase("enter-code");
		}
		init();
		return () => {
			cancelled = true;
		};
	}, []);
	useEffect(() => {
		const next = normalizeUserCode(search.user_code ?? "");
		if (next === code) return;
		activeCodeRef.current = next;
		setCode(next);
		setGrant(null);
		setApp(null);
		setError(null);
		submitMutation.reset();
		setPhase((current) => current === "loading" ? current : "enter-code");
	}, [search.user_code]);
	const handleSubmit = (e) => {
		e.preventDefault();
		const normalized = normalizeUserCode(code);
		if (!normalized) return;
		setError(null);
		activeCodeRef.current = normalized;
		submitMutation.mutate(normalized);
	};
	return /* @__PURE__ */ jsx("div", {
		className: "bg-background h-full overflow-y-auto",
		children: /* @__PURE__ */ jsx("div", {
			className: "flex min-h-full flex-col items-center p-6 md:p-10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "my-auto w-full max-w-xl",
				children: [
					phase === "loading" && /* @__PURE__ */ jsx("div", {
						className: "flex min-h-64 items-center justify-center",
						children: /* @__PURE__ */ jsx(Loader2, { className: "text-muted-foreground size-8 animate-spin" })
					}),
					phase === "enter-code" && /* @__PURE__ */ jsx(Card, {
						className: "overflow-hidden p-6 md:p-8",
						children: /* @__PURE__ */ jsxs("form", {
							onSubmit: handleSubmit,
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
											children: hasPrefilledCode ? t("Confirm your code") : t("Connect a device")
										}), /* @__PURE__ */ jsx("p", {
											className: "text-muted-foreground text-[13px] leading-relaxed",
											children: hasPrefilledCode ? t("Make sure this matches the code shown on your device, then continue.") : t("Enter the code shown on your device to continue.")
										})]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-3",
									children: [
										/* @__PURE__ */ jsx(Label, {
											htmlFor: "user-code",
											children: t("Device code")
										}),
										/* @__PURE__ */ jsx(OAuth2DeviceCodeInput, {
											id: "user-code",
											value: code,
											onChange: (next) => {
												setCode(next);
												setError(null);
											},
											autoFocus: true,
											disabled: submitMutation.isPending,
											"aria-invalid": Boolean(error)
										}),
										error && /* @__PURE__ */ jsx("p", {
											className: "text-destructive text-[13px]",
											children: error
										})
									]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "flex flex-col gap-2",
									children: /* @__PURE__ */ jsx(Button, {
										type: "submit",
										variant: "brandCta",
										className: "w-full",
										disabled: code.length < 6 || submitMutation.isPending,
										children: t("Continue")
									})
								}),
								account && /* @__PURE__ */ jsxs("p", {
									className: "text-muted-foreground text-center text-[12px]",
									children: [
										t("Signed in as"),
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "text-foreground font-medium",
											children: account.email || account.name
										}),
										"."
									]
								})
							]
						})
					}),
					phase === "consent" && grant && app && /* @__PURE__ */ jsx(OAuth2ConsentCard, {
						grant,
						app,
						accountLabel: account?.email || account?.name || void 0,
						flow: DEVICE_FLOW,
						onDone: (outcome) => setPhase(outcome === "approved" ? "approved" : "denied")
					}),
					(phase === "approved" || phase === "denied") && /* @__PURE__ */ jsx(OAuth2OutcomeCard, {
						outcome: phase,
						flow: DEVICE_FLOW,
						app,
						accountLabel: account?.email || account?.name || void 0
					})
				]
			})
		})
	});
}
export { OAuth2DevicePage as component };
