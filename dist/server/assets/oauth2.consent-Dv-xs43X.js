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
import "./constants-CL7SLzjY.js";
import "./constants-Dd6QzW31.js";
import "./constants-BDeF927R.js";
import "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import { b as performConsoleSignOut } from "./auth-BPuxYQAc.js";
import "./projects-BaTJenfQ.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import { t as getOAuth2App } from "./cimd-CRIktQxf.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import "./input-yKHNPhDZ.js";
import "./mcp-CgjPVMsn.js";
import "./debug-mcp-endpoint-B4hkK2QF.js";
import "./badge-L9aO6DfA.js";
import "./dropdown-menu-DH51wH-m.js";
import "./checkbox-r_hqIB3d.js";
import { t as Route$1 } from "./oauth2.consent-BGeHkwRk.js";
import { t as Card } from "./card-BZWeW6wv.js";
import { n as OAuth2ConsentCard, r as isWebRedirect, t as OAuth2OutcomeCard } from "./OAuth2OutcomeCard-AomxctSa.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AppwriteException } from "@appwrite.io/console";
import { useQueryClient } from "@tanstack/react-query";
import { Loader2, TriangleAlert } from "lucide-react";
const OAuth2ErrorType = { INVALID_REQUEST: "oauth2_invalid_request" };
const OAuth2ErrorMessage = {
	AUTHORIZE_FAILED: "Could not start authorization.",
	GRANT_INVALID: "This authorization request is invalid or has expired.",
	HANDLE_EXPIRED: "This sign-in request has expired. Return to the application and try connecting again.",
	MISSING_REQUEST: "Missing authorization request. Open this page from an application sign-in."
};
var ACCOUNT_SWITCH_STORAGE_PREFIX = "oauth2-account-switch:";
function rememberAccountSwitchUrl(key, url) {
	try {
		sessionStorage.setItem(`${ACCOUNT_SWITCH_STORAGE_PREFIX}${key}`, url);
	} catch {}
}
function accountSwitchUrlFor(key) {
	try {
		return sessionStorage.getItem(`${ACCOUNT_SWITCH_STORAGE_PREFIX}${key}`);
	} catch {
		return null;
	}
}
function parseMaxAge(raw) {
	if (!raw) return void 0;
	const value = Number(raw);
	return Number.isInteger(value) && value >= 0 ? value : void 0;
}
function toResourceParam(resources) {
	if (resources.length === 0) return void 0;
	return resources;
}
function readAuthorizeParams(params) {
	return {
		redirectUri: params.get("redirect_uri") ?? "",
		responseType: params.get("response_type") ?? "code",
		scope: params.get("scope") ?? "",
		state: params.get("state") ?? void 0,
		nonce: params.get("nonce") ?? void 0,
		codeChallenge: params.get("code_challenge") ?? void 0,
		codeChallengeMethod: params.get("code_challenge_method") ?? void 0,
		prompt: params.get("prompt") ?? void 0,
		maxAge: parseMaxAge(params.get("max_age")),
		authorizationDetails: params.get("authorization_details") ?? void 0,
		resource: toResourceParam(params.getAll("resource"))
	};
}
function getAccount() {
	return sdk.forConsole.account.get().catch(() => null);
}
function OAuth2ConsentPage() {
	const t = useT();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const search = Route$1.useSearch();
	const [phase, setPhase] = useState("loading");
	const [grant, setGrant] = useState(null);
	const [app, setApp] = useState(null);
	const [account, setAccount] = useState(null);
	const [error, setError] = useState(null);
	const [completedRedirectUrl, setCompletedRedirectUrl] = useState(void 0);
	const [accountSwitchResumeUrl, setAccountSwitchResumeUrl] = useState(null);
	const onDone = (outcome, redirectUrl) => {
		setCompletedRedirectUrl(redirectUrl);
		setPhase(outcome === "approved" ? "approved" : "denied");
	};
	const switchAccount = async () => {
		if (!accountSwitchResumeUrl) return;
		setPhase("loading");
		await performConsoleSignOut(queryClient, { redirect: accountSwitchResumeUrl });
	};
	useEffect(() => {
		let cancelled = false;
		setPhase("loading");
		setError(null);
		setCompletedRedirectUrl(void 0);
		setAccountSwitchResumeUrl(null);
		const currentRelativeUrl = window.location.pathname + window.location.search;
		const params = new URLSearchParams(window.location.search);
		const goSignIn = (resumeUrl) => {
			navigate({
				to: "/sign-in",
				search: { redirect: resumeUrl ?? currentRelativeUrl },
				replace: true
			});
		};
		const fail = (e, fallback) => {
			setError(getErrorMessage(e, t(fallback)));
			setPhase("error");
		};
		async function loadConsent(grantId, knownAccount) {
			const loadedGrant = await sdk.forConsole.oauth2.getGrant({ grantId });
			const [loadedApp, loadedAccount] = await Promise.all([getOAuth2App(loadedGrant.appId), knownAccount !== void 0 ? Promise.resolve(knownAccount) : getAccount()]);
			if (cancelled) return;
			setGrant(loadedGrant);
			setApp(loadedApp);
			setAccount(loadedAccount);
			setPhase("ready");
		}
		async function handleAuthorizeResult(result, loggedInAccount, clientId, fromRequestUri, resumeUrl) {
			if (result.redirectUrl) {
				window.location.href = result.redirectUrl;
				if (!isWebRedirect(result.redirectUrl)) {
					setCompletedRedirectUrl(result.redirectUrl);
					setAccount(loggedInAccount);
					const loadedApp = clientId ? await getOAuth2App(clientId).catch(() => null) : null;
					if (cancelled) return;
					setApp(loadedApp);
					setPhase("approved");
				}
				return;
			}
			if (result.grantId) {
				if (resumeUrl) rememberAccountSwitchUrl(result.grantId, resumeUrl);
				if (fromRequestUri) {
					navigate({
						to: "/oauth2/consent",
						search: { grant_id: result.grantId },
						replace: true
					});
					return;
				}
				await loadConsent(result.grantId, loggedInAccount);
				return;
			}
			setError(t(OAuth2ErrorMessage.AUTHORIZE_FAILED));
			setPhase("error");
		}
		async function resumeFromGrant(grantId) {
			setAccountSwitchResumeUrl(accountSwitchUrlFor(grantId));
			try {
				await loadConsent(grantId);
			} catch (e) {
				if (cancelled) return;
				if (e instanceof AppwriteException && e.code === 401) {
					goSignIn();
					return;
				}
				fail(e, OAuth2ErrorMessage.GRANT_INVALID);
			}
		}
		async function resumeFromRequestUri(clientId, requestUri) {
			const resumeUrl = accountSwitchUrlFor(requestUri);
			setAccountSwitchResumeUrl(resumeUrl);
			const loggedInAccount = await getAccount();
			if (cancelled) return;
			if (!loggedInAccount) {
				goSignIn();
				return;
			}
			try {
				const result = await sdk.forConsole.oauth2.authorize({
					clientId: clientId ?? void 0,
					requestUri
				});
				if (cancelled) return;
				await handleAuthorizeResult(result, loggedInAccount, clientId, true, resumeUrl);
			} catch (e) {
				if (cancelled) return;
				if (e instanceof AppwriteException && e.type === OAuth2ErrorType.INVALID_REQUEST) {
					setError(t(OAuth2ErrorMessage.HANDLE_EXPIRED));
					setPhase("error");
					return;
				}
				fail(e, OAuth2ErrorMessage.AUTHORIZE_FAILED);
			}
		}
		async function startAuthorize(clientId) {
			setAccountSwitchResumeUrl(currentRelativeUrl);
			const loggedInAccount = await getAccount();
			if (cancelled) return;
			if (!loggedInAccount) {
				try {
					const par = await sdk.forConsole.oauth2.createPAR({
						clientId,
						...readAuthorizeParams(params)
					});
					if (cancelled) return;
					rememberAccountSwitchUrl(par.request_uri, currentRelativeUrl);
					goSignIn(`/oauth2/consent?client_id=${encodeURIComponent(clientId)}&request_uri=${encodeURIComponent(par.request_uri)}`);
				} catch (e) {
					if (cancelled) return;
					if (e instanceof AppwriteException && e.type === OAuth2ErrorType.INVALID_REQUEST) {
						fail(e, OAuth2ErrorMessage.AUTHORIZE_FAILED);
						return;
					}
					goSignIn();
				}
				return;
			}
			try {
				const result = await sdk.forConsole.oauth2.authorize({
					clientId,
					...readAuthorizeParams(params)
				});
				if (cancelled) return;
				await handleAuthorizeResult(result, loggedInAccount, clientId, false, currentRelativeUrl);
			} catch (e) {
				if (cancelled) return;
				fail(e, OAuth2ErrorMessage.AUTHORIZE_FAILED);
			}
		}
		async function init() {
			const grantId = params.get("grant_id");
			if (grantId) {
				await resumeFromGrant(grantId);
				return;
			}
			const clientId = params.get("client_id");
			const requestUri = params.get("request_uri");
			if (requestUri) {
				await resumeFromRequestUri(clientId, requestUri);
				return;
			}
			if (clientId) {
				await startAuthorize(clientId);
				return;
			}
			setError(t(OAuth2ErrorMessage.MISSING_REQUEST));
			setPhase("error");
		}
		init();
		return () => {
			cancelled = true;
		};
	}, [search]);
	const accountLabel = account?.email || account?.name || void 0;
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
					phase === "error" && /* @__PURE__ */ jsx(Card, {
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
										children: t("Authorization failed")
									}), /* @__PURE__ */ jsx("p", {
										className: "text-muted-foreground text-[13px] leading-relaxed",
										children: error
									})]
								})]
							}), /* @__PURE__ */ jsx(Button, {
								variant: "outline",
								className: "w-full",
								onClick: () => navigate({
									to: "/",
									replace: true
								}),
								children: t("Go to console")
							})]
						})
					}),
					phase === "ready" && grant && app && /* @__PURE__ */ jsx(OAuth2ConsentCard, {
						grant,
						app,
						accountLabel,
						flow: "authorization",
						onSwitchAccount: accountSwitchResumeUrl ? switchAccount : void 0,
						onDone
					}),
					(phase === "approved" || phase === "denied") && /* @__PURE__ */ jsx(OAuth2OutcomeCard, {
						outcome: phase,
						flow: "authorization",
						app,
						accountLabel,
						redirectUrl: completedRedirectUrl
					})
				]
			})
		})
	});
}
export { OAuth2ConsentPage as component };
