import { t as cn } from "./utils-DoqqkI3X.js";
import { o as getApiEndpoint } from "./sdk-DjIJ_hjn.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { Ns as useVcsInstallations, ks as useInstallation } from "./hooks-BONwG3Mt.js";
import { R as useProject } from "./projects-BaTJenfQ.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { n as AlertDescription, r as AlertTitle, t as Alert } from "./alert-BTaNwkUC.js";
import { a as getKnownVcsProvider, r as buildVcsAuthUrl } from "./providers-8aVvAoJZ.js";
import { t as WarningAlert } from "./WarningAlert-ZIbpbrZO.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { AlertTriangle, CloudOff, PlugZap, RefreshCw } from "lucide-react";
function isReconnectKind(kind) {
	return kind === "reconnect";
}
function useVcsInstallationErrorCopy(kind) {
	const t = useT();
	if (kind === "reconnect") return {
		title: t("Reconnect this Git installation"),
		description: t("Appwrite can no longer access this Git provider on your behalf. Reconnect the installation to restore access to your repositories."),
		icon: AlertTriangle
	};
	if (kind === "locked") return {
		title: t("This installation is being refreshed"),
		description: t("Another request is already refreshing this installation. Try again in a moment."),
		icon: RefreshCw
	};
	return {
		title: t("Could not reach the Git provider"),
		description: t("This is usually temporary. Try again in a moment."),
		icon: CloudOff
	};
}
function VcsInstallationIdentity({ provider, organization, className }) {
	const parts = [getKnownVcsProvider(provider)?.label, organization].filter(Boolean);
	if (parts.length === 0) return null;
	return /* @__PURE__ */ jsx("p", {
		className: cn("text-[12px] text-muted-foreground", className),
		children: parts.join(" / ")
	});
}
function VcsInstallationErrorActions({ kind, reconnectUrl, onRetry, isRetrying }) {
	const t = useT();
	const reconnectIsPrimary = isReconnectKind(kind);
	const reconnect = reconnectUrl && kind !== "locked" ? /* @__PURE__ */ jsx(Button, {
		asChild: true,
		size: "sm",
		variant: reconnectIsPrimary ? "default" : "outline",
		className: "text-[13px]",
		children: /* @__PURE__ */ jsxs("a", {
			href: reconnectUrl,
			children: [/* @__PURE__ */ jsx(PlugZap, { className: "me-1.5 h-3.5 w-3.5" }), t("Reconnect installation")]
		})
	}, "reconnect") : null;
	const retry = onRetry ? /* @__PURE__ */ jsxs(Button, {
		type: "button",
		size: "sm",
		variant: reconnectIsPrimary ? "outline" : "default",
		onClick: onRetry,
		disabled: isRetrying,
		className: "text-[13px]",
		children: [/* @__PURE__ */ jsx(RefreshCw, { className: cn("me-1.5 h-3.5 w-3.5", isRetrying && "animate-spin") }), t("Try again")]
	}, "retry") : null;
	const visible = (reconnectIsPrimary ? [reconnect, retry] : [retry, reconnect]).filter(Boolean);
	if (visible.length === 0) return null;
	return /* @__PURE__ */ jsx(Fragment, { children: visible });
}
function VcsInstallationErrorState({ kind, provider, organization, reconnectUrl, onRetry, isRetrying, className }) {
	const { title, description, icon } = useVcsInstallationErrorCopy(kind);
	return /* @__PURE__ */ jsx(EmptyState, {
		icon,
		title,
		description,
		className,
		action: /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col items-center gap-3",
			children: [/* @__PURE__ */ jsx(VcsInstallationIdentity, {
				provider,
				organization
			}), /* @__PURE__ */ jsx("div", {
				className: "flex flex-wrap justify-center gap-2",
				children: /* @__PURE__ */ jsx(VcsInstallationErrorActions, {
					kind,
					reconnectUrl,
					onRetry,
					isRetrying
				})
			})]
		})
	});
}
function VcsInstallationErrorAlert({ kind, provider, organization, reconnectUrl, onRetry, isRetrying, className, children }) {
	const { title, description, icon: Icon$1 } = useVcsInstallationErrorCopy(kind);
	const body = /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ jsx("span", { children: children ?? description }),
			/* @__PURE__ */ jsx(VcsInstallationIdentity, {
				provider,
				organization
			}),
			/* @__PURE__ */ jsx("div", {
				className: "flex flex-wrap gap-2",
				children: /* @__PURE__ */ jsx(VcsInstallationErrorActions, {
					kind,
					reconnectUrl,
					onRetry,
					isRetrying
				})
			})
		]
	});
	if (isReconnectKind(kind)) return /* @__PURE__ */ jsx(WarningAlert, {
		title,
		icon: Icon$1,
		className,
		children: body
	});
	return /* @__PURE__ */ jsxs(Alert, {
		className,
		children: [
			/* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4 text-muted-foreground" }),
			/* @__PURE__ */ jsx(AlertTitle, {
				className: "text-[13px] font-medium text-foreground",
				children: title
			}),
			/* @__PURE__ */ jsx(AlertDescription, {
				className: "mt-2 text-[13px] leading-relaxed text-muted-foreground",
				children: body
			})
		]
	});
}
function useVcsInstallationReconnect(projectId, installationId, returnUrl) {
	const { data: installationsData } = useVcsInstallations(projectId);
	const { project } = useProject(projectId ?? void 0);
	const listed = installationsData?.installations?.find((candidate) => candidate.$id === installationId);
	const { data: fetched } = useInstallation(projectId, listed ? null : installationId);
	const installation = listed ?? fetched;
	const provider = installation?.provider;
	const organization = installation?.organization;
	const region = project?.region;
	return useMemo(() => {
		const knownProvider = getKnownVcsProvider(provider);
		if (!knownProvider || !projectId || typeof window === "undefined") return {
			provider,
			organization
		};
		const redirectUrl = returnUrl ?? window.location.href;
		return {
			provider,
			organization,
			reconnectUrl: buildVcsAuthUrl({
				endpoint: getApiEndpoint(region),
				provider: knownProvider.id,
				projectId,
				successUrl: redirectUrl,
				failureUrl: redirectUrl
			})
		};
	}, [
		provider,
		organization,
		projectId,
		region,
		returnUrl
	]);
}
export { VcsInstallationErrorAlert as n, VcsInstallationErrorState as r, useVcsInstallationReconnect as t };
