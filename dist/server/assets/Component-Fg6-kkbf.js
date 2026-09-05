import { t as cn } from "./utils-DoqqkI3X.js";
import { H as isStaleChunkLoadError, V as forceReloadForStaleChunk, W as tryReloadForStaleChunk } from "./sdk-DjIJ_hjn.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { r as formatError } from "./error-formatting-CL2hjGy5.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { n as captureExceptionWithContext, r as extractRouteContext } from "./SentryContext-BM5Kx9zs.js";
import { t as useConfirmedOffline } from "./network-connectivity-D-2A27IF.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useCanGoBack, useLocation, useNavigate, useRouter } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { AlertTriangle, ArrowLeft, Check, Copy, Home, RefreshCw, WifiOff } from "lucide-react";
function ErrorComponent({ error, info, reset, preview = false }) {
	const t = useT();
	const randomErrorId = useRef(Math.random().toString(36).substring(2, 15));
	const location = useLocation();
	const navigate = useNavigate();
	const router = useRouter();
	const canGoBack = useCanGoBack();
	const isConfirmedOffline = useConfirmedOffline();
	const isProjectRoute = location.pathname.startsWith("/projects/");
	const lowerMessage = (error.message || "").toLowerCase();
	const errorWithCode = error;
	const errorCode = errorWithCode.code;
	const isProjectNotFound = isProjectRoute && (error.name === "NotFoundError" || errorCode === 404 || lowerMessage.includes("not found") || lowerMessage.includes("404") || lowerMessage.includes("does not exist"));
	const isProjectAccessDenied = isProjectRoute && (error.name === "UnauthorizedError" || error.name === "ForbiddenError" || errorCode === 401 || errorCode === 403 || lowerMessage.includes("unauthorized") || lowerMessage.includes("forbidden") || lowerMessage.includes("permission denied") || lowerMessage.includes("access denied"));
	const isConnectivityError = isConfirmedOffline;
	const isStaleChunkError = isStaleChunkLoadError(error);
	const formattedError = isProjectNotFound ? {
		title: "Project Not Found",
		message: "This project could not be found or you do not have access to view it.",
		isUserFriendly: true
	} : isProjectAccessDenied ? {
		title: "Access Denied",
		message: "You do not have permission to access this project. Please contact your administrator if you believe this is an error.",
		isUserFriendly: true
	} : isConnectivityError ? {
		title: "You're offline",
		message: "This page needs a connection to Appwrite. Reconnect to the internet, then try again - we can reload automatically when you are back online.",
		isUserFriendly: true
	} : isStaleChunkError ? {
		title: "Update available",
		message: "A newer version of the console was deployed while you had this tab open. Reload the page to continue.",
		isUserFriendly: true
	} : formatError(error, "An unexpected error occurred.");
	const message = useMemo(() => ({
		type: "NOTIFY_ERROR",
		data: {
			errorId: randomErrorId.current,
			href: location.href,
			errorMessage: error.message,
			errorStack: error.stack,
			errorCause: error.cause,
			errorComponentStack: info?.componentStack
		}
	}), [
		location.href,
		error.message,
		error.stack,
		error.cause,
		info?.componentStack
	]);
	const routeContext = useMemo(() => extractRouteContext(location.pathname), [location.pathname]);
	const isUnauthorized = errorCode === 401 || errorWithCode.status === 401;
	useEffect(() => {
		if (preview || isUnauthorized || isConnectivityError || isStaleChunkError) return;
		captureExceptionWithContext(error, {
			...routeContext,
			source: "error-component",
			errorId: randomErrorId.current,
			errorName: error.name,
			errorCode: errorWithCode.code,
			errorType: errorWithCode.type,
			componentStack: info?.componentStack,
			url: location.href,
			pathname: location.pathname,
			isProjectNotFound,
			isProjectAccessDenied,
			isConnectivityError,
			userAgent: typeof navigator !== "undefined" ? navigator.userAgent : void 0,
			language: typeof navigator !== "undefined" ? navigator.language : void 0,
			screenWidth: typeof window !== "undefined" ? window.screen.width : void 0,
			screenHeight: typeof window !== "undefined" ? window.screen.height : void 0,
			viewportWidth: typeof window !== "undefined" ? window.innerWidth : void 0,
			viewportHeight: typeof window !== "undefined" ? window.innerHeight : void 0
		});
	}, [
		preview,
		isUnauthorized,
		error,
		info,
		location.href,
		location.pathname,
		isProjectNotFound,
		isProjectAccessDenied,
		isConnectivityError,
		isStaleChunkError,
		routeContext
	]);
	useEffect(() => {
		if (preview || !isStaleChunkError) return;
		tryReloadForStaleChunk(error);
	}, [
		preview,
		isStaleChunkError,
		error
	]);
	useEffect(() => {
		if (!isConnectivityError || preview) return;
		const onOnline = () => {
			reset();
		};
		window.addEventListener("online", onOnline);
		return () => window.removeEventListener("online", onOnline);
	}, [
		isConnectivityError,
		preview,
		reset
	]);
	useEffect(() => {
		if (preview || isConnectivityError) return;
		const interval = setInterval(() => {
			window.parent.postMessage(message);
		}, 2e3);
		return () => clearInterval(interval);
	}, [
		preview,
		message,
		isConnectivityError
	]);
	const handleGoHome = () => {
		navigate({ to: "/" });
	};
	const handleGoBack = () => {
		router.history.back();
	};
	const handleRetry = () => {
		reset();
	};
	const handleReload = () => {
		forceReloadForStaleChunk();
	};
	const showTechnicalDetails = !isProjectNotFound && !isProjectAccessDenied && !isConnectivityError && !isStaleChunkError;
	const showSupportBlurb = !isProjectNotFound && !isProjectAccessDenied && !isConnectivityError && !isStaleChunkError;
	const [copied, setCopied] = useState(false);
	const handleCopy = async () => {
		const errorDetails = {
			message: error.message || "No error message",
			stack: error.stack || "No stack trace",
			cause: error.cause ? String(error.cause) : void 0,
			componentStack: info?.componentStack,
			url: location.href,
			errorId: randomErrorId.current
		};
		const errorText = [
			`Error: ${errorDetails.message}`,
			errorDetails.stack && `\nStack:\n${errorDetails.stack}`,
			errorDetails.componentStack && `\nComponent Stack:\n${errorDetails.componentStack}`,
			errorDetails.cause && `\nCause: ${errorDetails.cause}`,
			`\nURL: ${errorDetails.url}`,
			`Error ID: ${errorDetails.errorId}`
		].filter(Boolean).join("\n");
		await navigator.clipboard.writeText(errorText);
		setCopied(true);
		toast.success(t("Error details copied to clipboard"));
		setTimeout(() => setCopied(false), 2e3);
	};
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-full w-full flex-col items-center justify-center gap-8 px-4 py-8",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col items-center max-w-md w-full gap-8",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: cn("rounded-full p-3", isConnectivityError ? "bg-amber-500/15" : "bg-destructive/10"),
					children: isConnectivityError ? /* @__PURE__ */ jsx(WifiOff, { className: "h-8 w-8 text-amber-600 dark:text-amber-400" }) : /* @__PURE__ */ jsx(AlertTriangle, { className: "h-8 w-8 text-destructive" })
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-3 text-center",
					children: [/* @__PURE__ */ jsx("h1", {
						className: "text-2xl font-semibold",
						children: t(formattedError.title)
					}), /* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground text-sm leading-relaxed",
						children: t(formattedError.message)
					})]
				}),
				isConnectivityError ? /* @__PURE__ */ jsxs("p", {
					className: "text-muted-foreground text-[13px] leading-relaxed text-center -mt-4",
					children: [
						t("If your connection looks fine, check our"),
						" ",
						/* @__PURE__ */ jsx("a", {
							href: "https://status.appwrite.online",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "underline hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded",
							children: t("status page")
						}),
						" ",
						t("for service updates.")
					]
				}) : null,
				showTechnicalDetails ? /* @__PURE__ */ jsxs("div", {
					className: "relative w-full max-w-full rounded-lg border bg-card px-4 py-3",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-start gap-2 pe-8 min-w-0 w-full",
						children: [/* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 shrink-0 mt-0.5 text-destructive" }), /* @__PURE__ */ jsx("div", {
							className: "text-xs font-mono text-muted-foreground flex-1 min-w-0 overflow-hidden text-start",
							style: {
								wordBreak: "break-all",
								overflowWrap: "break-word"
							},
							children: error.message || t("No error details available")
						})]
					}), /* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "sm",
						className: "absolute top-2 end-2 h-7 w-7 p-0 shrink-0",
						onClick: handleCopy,
						"aria-label": t("Copy error details"),
						children: copied ? /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-emerald-500" }) : /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" })
					})]
				}) : null,
				showSupportBlurb ? /* @__PURE__ */ jsx("div", {
					className: "w-full border-t border-border pt-6",
					children: /* @__PURE__ */ jsxs("p", {
						className: "text-muted-foreground text-[13px] leading-relaxed text-center",
						children: [
							t("We’ve already logged it to our error system and will probably spin up a super agent any minute to hunt this bug down. If you think this might be more than a client-side hiccup, check our"),
							" ",
							/* @__PURE__ */ jsx("a", {
								href: "https://status.appwrite.online",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "underline hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded",
								children: t("status page")
							}),
							". ",
							t("Until then - try again or head home. You’ve got this.")
						]
					})
				}) : null,
				isStaleChunkError ? /* @__PURE__ */ jsx("div", {
					className: "flex w-full flex-col gap-3",
					children: /* @__PURE__ */ jsxs(Button, {
						variant: "brandCta",
						onClick: handleReload,
						size: "sm",
						className: "h-9 min-h-9 w-full shrink-0 gap-2 text-[13px] font-medium",
						children: [/* @__PURE__ */ jsx(RefreshCw, { className: "h-4 w-4" }), t("Reload page")]
					})
				}) : isConnectivityError ? /* @__PURE__ */ jsxs("div", {
					className: "flex w-full flex-col gap-3",
					children: [/* @__PURE__ */ jsxs(Button, {
						variant: "brandCta",
						onClick: handleRetry,
						size: "sm",
						className: "h-9 min-h-9 w-full shrink-0 gap-2 text-[13px] font-medium",
						children: [/* @__PURE__ */ jsx(RefreshCw, { className: "h-4 w-4" }), t("Try again")]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-3 sm:flex-row",
						children: [canGoBack ? /* @__PURE__ */ jsxs(Button, {
							variant: "outline",
							onClick: handleGoBack,
							className: "w-full shrink-0 sm:flex-1 min-h-9",
							children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "me-1.5 h-4 w-4" }), t("Go back")]
						}) : null, /* @__PURE__ */ jsxs(Button, {
							variant: "outline",
							onClick: handleGoHome,
							className: cn("w-full shrink-0 min-h-9 sm:flex-1", !canGoBack && "sm:w-full"),
							children: [/* @__PURE__ */ jsx(Home, { className: "me-1.5 h-4 w-4" }), t("Go home")]
						})]
					})]
				}) : /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col sm:flex-row gap-3 w-full",
					children: [/* @__PURE__ */ jsxs(Button, {
						variant: "outline",
						onClick: handleGoHome,
						className: "w-full shrink-0 sm:flex-1 min-h-9",
						children: [/* @__PURE__ */ jsx(Home, { className: "me-1.5 h-4 w-4" }), t("Go home")]
					}), /* @__PURE__ */ jsxs(Button, {
						variant: "brandCta",
						onClick: handleRetry,
						size: "sm",
						className: "h-9 min-h-9 w-full shrink-0 gap-2 text-[13px] font-medium sm:flex-1",
						children: [/* @__PURE__ */ jsx(RefreshCw, { className: "h-4 w-4" }), t("Try again")]
					})]
				})
			]
		})
	});
}
export { ErrorComponent as t };
