import { t as cn } from "./utils-DoqqkI3X.js";
import { u as getSiteScreenshotFilePreviewUrl } from "./sdk-DjIJ_hjn.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { bt as formatDecimalBytes } from "./form-field-type-badge-C7qMzJo0.js";
import { _r as useFunctionDeploymentProxyRules, pn as useDeploymentProxyRules } from "./affiliates-BOg1SHC6.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { t as WizardLayout } from "./WizardLayout-DWqXFGuX.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { a as DropdownMenuItem, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import { n as openDialogAfterOverlayCloses, t as closeDialogBeforeOverlayUnmount } from "./overlay-lock-CIY7GeXu.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider } from "./tooltip-DUssQZhw.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import { t as FrameworkIcon } from "./FrameworkIcon-DTkSe6r3.js";
import { s as getVcsProvider } from "./providers-8aVvAoJZ.js";
import { t as useAvifSupport } from "./avif-support-fkUYDvxs.js";
import { n as stripAnsiForClipboard, t as BuildLogsView } from "./BuildLogsView-ByzI55tv.js";
import { a as isDeploymentTimeout, i as isDeploymentInProgress, n as getDeploymentStatusBadge, r as isDeploymentCompleted } from "./deployment-status-gtgbrodz.js";
import { c as DrawerTrigger, i as DrawerDescription, o as DrawerHeader, r as DrawerContent, s as DrawerTitle, t as Drawer } from "./drawer-By6QdQ1h.js";
import { t as getDeploymentRepositoryWebUrl } from "./deployment-repository-url-C0skr3dd.js";
import { t as FixWithAgentDropdown } from "./FixWithAgentDropdown-Bbwqh7Cs.js";
import { t as DeploymentInfo } from "./DeploymentInfo-CB1fVDuW.js";
import { n as SITE_SCREENSHOT_CARD_HEIGHT, r as SITE_SCREENSHOT_CARD_WIDTH, t as SITE_SCREENSHOTS_BUCKET_ID } from "./screenshot-preview-sizes-CXYa3cGX.js";
import { t as domainUrl } from "./url-DJdOJ4ra.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ImageFormat } from "@appwrite.io/console";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ArrowDown, ArrowUp, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Copy, Download, ExternalLink, FileCode, GitBranch, GitCommit, HelpCircle, Moon, Package, Play, RefreshCw, Search, Sun, Trash2, XCircle } from "lucide-react";
import { useTheme } from "next-themes";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
function stripAnsiCodes(text) {
	return text.replace(/\x1b\[(\d+(?:;\d+)*)?m/g, "");
}
function generateDeploymentAIFixPrompt(deployment, runtime, resourceName, isSite) {
	const resourceType = isSite ? "Site" : "Function";
	const cleanLogs = stripAnsiCodes((deployment.buildLogs || "").split("\n").slice(-100).join("\n"));
	let prompt = `# Fix Appwrite ${resourceType} Deployment Failure

## Context
`;
	if (resourceName) prompt += `- **${resourceType} Name**: ${resourceName}\n`;
	prompt += `- **Deployment ID**: ${deployment.$id}\n`;
	if (runtime) prompt += `- **Runtime**: ${runtime}\n`;
	prompt += `- **Status**: Failed\n`;
	prompt += `- **Created**: ${new Date(deployment.$createdAt).toISOString()}\n`;
	if (deployment.providerBranch) prompt += `- **Branch**: ${deployment.providerBranch}\n`;
	if (deployment.providerCommitHash) prompt += `- **Commit**: ${deployment.providerCommitHash.slice(0, 7)}\n`;
	if (deployment.providerCommitMessage) prompt += `- **Commit Message**: ${deployment.providerCommitMessage}\n`;
	prompt += `
## Build Logs (Last 100 lines)

\`\`\`
${cleanLogs || "No build logs available"}
\`\`\`

## Task

Please analyze the build logs above and help me fix the deployment failure. Identify:
1. The root cause of the failure
2. Specific code changes or configuration updates needed
3. Any missing dependencies or incorrect settings

Provide clear, actionable steps to resolve this issue.`;
	return prompt;
}
function formatSize(bytes) {
	return formatDecimalBytes(bytes);
}
function formatDuration(seconds) {
	if (seconds < 60) return `${seconds}s`;
	return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
}
var WIZARD_PORTAL_Z_DROPDOWN = "z-[10050]";
var WIZARD_PORTAL_Z_POPOVER = "z-[10050]";
var WIZARD_DIALOG_OVERLAY_Z = "z-[10050]";
var WIZARD_DIALOG_CONTENT_Z = "z-[10051]";
var WIZARD_DRAWER_OVERLAY_Z = "z-[10052]";
var WIZARD_DRAWER_CONTENT_Z = "z-[10053]";
var URL_COPY_HIDE_DELAY_MS = 500;
function detectVcsProvider(deployment) {
	if (deployment.providerRepositoryUrl) {
		const url = deployment.providerRepositoryUrl.toLowerCase();
		if (url.includes("github.com")) {
			const { label, Icon: Icon$1 } = getVcsProvider("github");
			return {
				name: label,
				icon: /* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4" })
			};
		}
		if (url.includes("gitlab.com")) {
			const { label, Icon: Icon$1 } = getVcsProvider("gitlab");
			return {
				name: label,
				icon: /* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4" })
			};
		}
		if (url.includes("bitbucket.org") || url.includes("bitbucket.com")) {
			const { label, Icon: Icon$1 } = getVcsProvider("bitbucket");
			return {
				name: label,
				icon: /* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4" })
			};
		}
		if (url.includes("cursor.com")) {
			const { label, Icon: Icon$1 } = getVcsProvider("origin");
			return {
				name: label,
				icon: /* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4" })
			};
		}
	}
	if (deployment.vcsProvider) {
		const provider = deployment.vcsProvider.toLowerCase();
		if (provider === "github") {
			const { label, Icon: Icon$1 } = getVcsProvider("github");
			return {
				name: label,
				icon: /* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4" })
			};
		}
		if (provider === "gitlab") {
			const { label, Icon: Icon$1 } = getVcsProvider("gitlab");
			return {
				name: label,
				icon: /* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4" })
			};
		}
		if (provider === "bitbucket") {
			const { label, Icon: Icon$1 } = getVcsProvider("bitbucket");
			return {
				name: label,
				icon: /* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4" })
			};
		}
		if (provider === "origin") {
			const { label, Icon: Icon$1 } = getVcsProvider("origin");
			return {
				name: label,
				icon: /* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4" })
			};
		}
	}
	if (deployment.type === "git" || deployment.type === "vcs") {
		if (deployment.providerRepositoryUrl || deployment.providerRepositoryId) return {
			name: "Git",
			icon: /* @__PURE__ */ jsx(GitBranch, { className: "h-4 w-4" })
		};
	}
	return null;
}
function getVcsProviderType(deployment) {
	if (deployment.providerRepositoryUrl) {
		const url = deployment.providerRepositoryUrl.toLowerCase();
		if (url.includes("github.com")) return "github";
		if (url.includes("gitlab.com")) return "gitlab";
		if (url.includes("bitbucket.org") || url.includes("bitbucket.com")) return "bitbucket";
		if (url.includes("cursor.com")) return "origin";
	}
	if (deployment.vcsProvider) {
		const provider = deployment.vcsProvider.toLowerCase();
		if (provider === "github") return "github";
		if (provider === "gitlab") return "gitlab";
		if (provider === "bitbucket") return "bitbucket";
		if (provider === "origin") return "origin";
	}
	return null;
}
function getCommitUrl(deployment) {
	if (!deployment.providerCommitHash || !deployment.providerRepositoryOwner || !deployment.providerRepositoryName) return null;
	const owner = deployment.providerRepositoryOwner;
	const repo = deployment.providerRepositoryName;
	const commitHash = deployment.providerCommitHash;
	const provider = getVcsProviderType(deployment);
	if (!provider) return null;
	if (provider === "github") return `https://github.com/${owner}/${repo}/commit/${commitHash}`;
	if (provider === "gitlab") return `https://gitlab.com/${owner}/${repo}/-/commit/${commitHash}`;
	if (provider === "bitbucket") return `https://bitbucket.org/${owner}/${repo}/commits/${commitHash}`;
	if (provider === "origin") return `https://cursor.com/codebase/${owner}/${repo}/commit/${commitHash}`;
	return null;
}
function getBranchUrl(deployment) {
	if (!deployment.providerBranch || !deployment.providerRepositoryOwner || !deployment.providerRepositoryName) return null;
	const owner = deployment.providerRepositoryOwner;
	const repo = deployment.providerRepositoryName;
	const branch = deployment.providerBranch;
	const provider = getVcsProviderType(deployment);
	if (!provider) return null;
	if (provider === "github") return `https://github.com/${owner}/${repo}/tree/${branch}`;
	if (provider === "gitlab") return `https://gitlab.com/${owner}/${repo}/-/tree/${branch}`;
	if (provider === "bitbucket") return `https://bitbucket.org/${owner}/${repo}/src/${branch}`;
	if (provider === "origin") return `https://cursor.com/codebase/${owner}/${repo}/tree/${branch}`;
	return null;
}
function DeploymentDetailView({ projectId, resourceId, deploymentId, deployment, isLoading, parentResource, deployments, deploymentDetailRoute, listRoute, onDelete, onCancelBuild, onDownloadSource, onDownloadBuild, onRedeploy, onActivate, showRuntime = false, RuntimeIcon, invalidateQueries, fallbackPath }) {
	const t = useT();
	const navigate = useNavigate();
	const location = useLocation();
	const queryClient = useQueryClient();
	const [logsSearch, setLogsSearch] = useState("");
	const [selectedLogLines, setSelectedLogLines] = useState(() => /* @__PURE__ */ new Set());
	const lineAnchorRef = useRef(null);
	const prevHydratedDeploymentIdRef = useRef(void 0);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [cancelBuildDialogOpen, setCancelBuildDialogOpen] = useState(false);
	const [redeployDialogOpen, setRedeployDialogOpen] = useState(false);
	const [activateDialogOpen, setActivateDialogOpen] = useState(false);
	const [deploymentActionsDrawerOpen, setDeploymentActionsDrawerOpen] = useState(false);
	const logsContainerRef = useRef(null);
	const lineRefs = useRef(/* @__PURE__ */ new Map());
	const hasUserScrolledRef = useRef(false);
	const [isAtTop, setIsAtTop] = useState(true);
	const [isAtBottom, setIsAtBottom] = useState(false);
	const [urlCopyHiddenUntilLeave, setUrlCopyHiddenUntilLeave] = useState(null);
	const urlCopyHideAfterCopyTimeoutRef = useRef(null);
	const [commitCopyHiddenUntilLeave, setCommitCopyHiddenUntilLeave] = useState(false);
	const commitCopyHideAfterCopyTimeoutRef = useRef(null);
	const [branchCopyHiddenUntilLeave, setBranchCopyHiddenUntilLeave] = useState(false);
	const branchCopyHideAfterCopyTimeoutRef = useRef(null);
	const [elapsedSeconds, setElapsedSeconds] = useState(0);
	useEffect(() => {
		if (!deployment?.$createdAt || !isDeploymentInProgress(deployment.status)) return;
		const tick = () => {
			const created = new Date(deployment.$createdAt).getTime();
			setElapsedSeconds(Math.floor((Date.now() - created) / 1e3));
		};
		tick();
		const interval = setInterval(tick, 1e3);
		return () => clearInterval(interval);
	}, [deployment?.$createdAt, deployment?.status]);
	useEffect(() => {
		const depId = deployment?.$id;
		if (depId === void 0) return;
		if (prevHydratedDeploymentIdRef.current === depId) return;
		prevHydratedDeploymentIdRef.current = depId;
		const lineParam = new URLSearchParams(typeof location.search === "string" ? location.search : "").get("line");
		const parsed = lineParam ? parseInt(lineParam, 10) : NaN;
		const line = !isNaN(parsed) ? parsed : null;
		setSelectedLogLines(line != null ? new Set([line]) : /* @__PURE__ */ new Set());
		lineAnchorRef.current = line;
	}, [deployment?.$id]);
	const isSiteDeployment = deploymentDetailRoute.includes("/sites/");
	const parentResourceParam = isSiteDeployment ? "siteId" : "functionId";
	const apiDeploymentId = deployment?.$id ?? deploymentId;
	const deploymentIndex = useMemo(() => {
		if (!deployments || !apiDeploymentId) return -1;
		return deployments.findIndex((d) => d.$id === apiDeploymentId);
	}, [deployments, apiDeploymentId]);
	const previousDeployment = deploymentIndex > 0 ? deployments[deploymentIndex - 1] : null;
	const nextDeployment = deploymentIndex >= 0 && deploymentIndex < (deployments.length || 0) - 1 ? deployments[deploymentIndex + 1] : null;
	const isActiveDeployment = parentResource?.deploymentId === deploymentId;
	const siteProxyRules = useDeploymentProxyRules(isSiteDeployment ? projectId : null, isSiteDeployment ? resourceId : null, isSiteDeployment ? apiDeploymentId : null);
	const functionProxyRules = useFunctionDeploymentProxyRules(!isSiteDeployment ? projectId : null, !isSiteDeployment ? resourceId : null, !isSiteDeployment ? apiDeploymentId : null);
	const proxyRules = isSiteDeployment ? siteProxyRules : functionProxyRules;
	const visitEntries = useMemo(() => {
		const domains = /* @__PURE__ */ new Set();
		for (const r of proxyRules.rules) {
			if (!r.domain) continue;
			if (r.type !== "deployment" && r.type !== "redirect") continue;
			domains.add(r.domain);
		}
		return Array.from(domains);
	}, [proxyRules.rules]);
	useEffect(() => {
		if (urlCopyHideAfterCopyTimeoutRef.current) {
			clearTimeout(urlCopyHideAfterCopyTimeoutRef.current);
			urlCopyHideAfterCopyTimeoutRef.current = null;
		}
		setUrlCopyHiddenUntilLeave(null);
		if (commitCopyHideAfterCopyTimeoutRef.current) {
			clearTimeout(commitCopyHideAfterCopyTimeoutRef.current);
			commitCopyHideAfterCopyTimeoutRef.current = null;
		}
		setCommitCopyHiddenUntilLeave(false);
		if (branchCopyHideAfterCopyTimeoutRef.current) {
			clearTimeout(branchCopyHideAfterCopyTimeoutRef.current);
			branchCopyHideAfterCopyTimeoutRef.current = null;
		}
		setBranchCopyHiddenUntilLeave(false);
	}, [deployment?.$id]);
	useEffect(() => {
		return () => {
			if (urlCopyHideAfterCopyTimeoutRef.current) {
				clearTimeout(urlCopyHideAfterCopyTimeoutRef.current);
				urlCopyHideAfterCopyTimeoutRef.current = null;
			}
			if (commitCopyHideAfterCopyTimeoutRef.current) {
				clearTimeout(commitCopyHideAfterCopyTimeoutRef.current);
				commitCopyHideAfterCopyTimeoutRef.current = null;
			}
			if (branchCopyHideAfterCopyTimeoutRef.current) {
				clearTimeout(branchCopyHideAfterCopyTimeoutRef.current);
				branchCopyHideAfterCopyTimeoutRef.current = null;
			}
		};
	}, []);
	const { resolvedTheme } = useTheme();
	const [sidebarScreenshotLoaded, setSidebarScreenshotLoaded] = useState(false);
	const [sidebarScreenshotThemeOverride, setSidebarScreenshotThemeOverride] = useState(null);
	const defaultScreenshotTheme = useMemo(() => {
		if (typeof window === "undefined") return "dark";
		if (resolvedTheme === "dark") return "dark";
		if (resolvedTheme === "light") return "light";
		if (resolvedTheme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
		return "light";
	}, [resolvedTheme]);
	const sidebarScreenshotTheme = sidebarScreenshotThemeOverride ?? defaultScreenshotTheme;
	const avifSupported = useAvifSupport();
	const sidebarScreenshotFileId = deployment ? sidebarScreenshotTheme === "dark" ? deployment.screenshotDark : deployment.screenshotLight : null;
	useEffect(() => {
		setSidebarScreenshotLoaded(false);
	}, [
		deployment?.$id,
		sidebarScreenshotTheme,
		sidebarScreenshotFileId
	]);
	const isDeploymentFailed = deployment ? deployment.status === "failed" || isDeploymentTimeout(deployment.status, deployment.$createdAt) : false;
	const aiFixPrompt = useMemo(() => {
		if (!deployment || !isDeploymentFailed) return "";
		return generateDeploymentAIFixPrompt(deployment, parentResource?.runtime, parentResource?.name, isSiteDeployment);
	}, [
		deployment,
		isDeploymentFailed,
		parentResource?.runtime,
		parentResource?.name,
		isSiteDeployment
	]);
	const vcsProvider = deployment ? detectVcsProvider(deployment) : null;
	const repositoryUrl = deployment ? getDeploymentRepositoryWebUrl(deployment) : null;
	const commitUrl = deployment ? getCommitUrl(deployment) : null;
	const branchUrl = deployment ? getBranchUrl(deployment) : null;
	const resolvedCommitUrl = deployment?.providerCommitUrl || commitUrl || null;
	const resolvedBranchUrl = deployment?.providerBranchUrl || branchUrl || null;
	const statusBadge = deployment ? getDeploymentStatusBadge(deployment.status, deployment.$createdAt) : null;
	const buildLogs = deployment?.buildLogs || "";
	const deploymentDetailSidebar = useMemo(() => {
		if (!deployment) return null;
		const screenshotId = sidebarScreenshotTheme === "dark" ? deployment.screenshotDark : deployment.screenshotLight;
		const screenshotUrl = isSiteDeployment && screenshotId && projectId ? getSiteScreenshotFilePreviewUrl(projectId, {
			bucketId: SITE_SCREENSHOTS_BUCKET_ID,
			fileId: screenshotId,
			width: 640,
			height: 360,
			output: avifSupported ? ImageFormat.Avif : void 0
		}) : null;
		const typeLabel = deployment.type === "cli" ? "CLI" : deployment.type === "manual" ? t("Manual") : deployment.type === "vcs" ? "VCS" : deployment.type || "N/A";
		return /* @__PURE__ */ jsxs("div", {
			className: "divide-y divide-border pb-4 [&>section:first-of-type]:!pt-0 [&>section:first-of-type]:pb-3",
			children: [
				isSiteDeployment && /* @__PURE__ */ jsxs("section", {
					className: "space-y-2.5 py-3",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
							children: t("Preview")
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-0.5 rounded border border-border/60 bg-muted/40 p-0.5",
							children: [/* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => {
									setSidebarScreenshotThemeOverride("light");
									setSidebarScreenshotLoaded(false);
								},
								className: cn("rounded p-1 transition-colors", sidebarScreenshotTheme === "light" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"),
								title: t("Light screenshot"),
								children: /* @__PURE__ */ jsx(Sun, { className: "h-3 w-3" })
							}), /* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => {
									setSidebarScreenshotThemeOverride("dark");
									setSidebarScreenshotLoaded(false);
								},
								className: cn("rounded p-1 transition-colors", sidebarScreenshotTheme === "dark" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"),
								title: t("Dark screenshot"),
								children: /* @__PURE__ */ jsx(Moon, { className: "h-3 w-3" })
							})]
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "relative w-full aspect-video overflow-hidden rounded border border-border bg-muted",
						children: screenshotUrl ? /* @__PURE__ */ jsxs("div", {
							className: "absolute inset-0",
							children: [/* @__PURE__ */ jsx("img", {
								src: screenshotUrl,
								alt: t("Deployment screenshot"),
								onLoad: () => setSidebarScreenshotLoaded(true),
								className: cn("h-full w-full object-cover object-top transition-opacity duration-300", sidebarScreenshotLoaded ? "opacity-100" : "opacity-0")
							}, screenshotId), parentResource?.framework ? /* @__PURE__ */ jsx("div", {
								className: "absolute bottom-1 start-1 flex h-6 w-6 items-center justify-center rounded border border-border/60 bg-background/90",
								children: /* @__PURE__ */ jsx(FrameworkIcon, {
									framework: parentResource.framework,
									size: "sm"
								})
							}) : null]
						}) : /* @__PURE__ */ jsx("div", {
							className: "flex h-full items-center justify-center px-2",
							children: /* @__PURE__ */ jsx("p", {
								className: "text-center text-[10px] leading-snug text-muted-foreground",
								children: isDeploymentCompleted(deployment.status) ? t("No preview") : t("Not ready")
							})
						})
					})]
				}),
				(isSiteDeployment || visitEntries.length > 0) && /* @__PURE__ */ jsxs("section", {
					className: "space-y-2 py-3",
					children: [
						/* @__PURE__ */ jsx("h3", {
							className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
							children: t("URLs")
						}),
						!isActiveDeployment && visitEntries.length > 0 ? /* @__PURE__ */ jsx("p", {
							className: "text-[10px] leading-snug text-muted-foreground",
							children: t("Live traffic uses the active deployment until you activate this one.")
						}) : null,
						visitEntries.length === 0 ? isSiteDeployment ? /* @__PURE__ */ jsx("p", {
							className: "text-[10px] leading-snug text-muted-foreground",
							children: t("No proxy rules reference this deployment.")
						}) : null : /* @__PURE__ */ jsx("ul", {
							className: "space-y-0",
							children: visitEntries.map((domain) => {
								const copyHiddenUntilLeave = urlCopyHiddenUntilLeave === domain;
								return /* @__PURE__ */ jsxs("li", {
									className: "group flex min-w-0 items-center gap-1 py-0.5",
									onMouseLeave: () => {
										if (urlCopyHideAfterCopyTimeoutRef.current) {
											clearTimeout(urlCopyHideAfterCopyTimeoutRef.current);
											urlCopyHideAfterCopyTimeoutRef.current = null;
										}
										setUrlCopyHiddenUntilLeave((blocked) => blocked === domain ? null : blocked);
									},
									children: [/* @__PURE__ */ jsxs("a", {
										href: domainUrl(domain),
										target: "_blank",
										rel: "noopener noreferrer",
										title: `Open ${domain} in new tab`,
										className: "link-neutral flex min-w-0 flex-1 items-center gap-1 overflow-hidden font-mono text-[11px]",
										children: [/* @__PURE__ */ jsx("span", {
											className: "min-w-0 truncate",
											children: domain
										}), /* @__PURE__ */ jsx(ExternalLink, {
											className: "h-3 w-3 shrink-0 text-muted-foreground opacity-70 group-hover:opacity-100 group-hover:text-foreground",
											"aria-hidden": true
										})]
									}), /* @__PURE__ */ jsx(Button, {
										type: "button",
										variant: "ghost",
										size: "sm",
										className: cn("h-6 w-6 shrink-0 p-0 text-muted-foreground transition-opacity duration-150", "hover:bg-muted/60 hover:text-foreground", copyHiddenUntilLeave ? "pointer-events-none opacity-0" : "pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100"),
										onClick: (e) => {
											const el = e.currentTarget;
											navigator.clipboard.writeText(domainUrl(domain));
											toast.success(t("URL copied"));
											el.blur();
											if (urlCopyHideAfterCopyTimeoutRef.current) clearTimeout(urlCopyHideAfterCopyTimeoutRef.current);
											urlCopyHideAfterCopyTimeoutRef.current = window.setTimeout(() => {
												urlCopyHideAfterCopyTimeoutRef.current = null;
												setUrlCopyHiddenUntilLeave(domain);
											}, URL_COPY_HIDE_DELAY_MS);
										},
										children: /* @__PURE__ */ jsx(Copy, { className: "h-3 w-3" })
									})]
								}, domain);
							})
						})
					]
				}),
				(deployment.providerCommitMessage || deployment.providerCommitHash || deployment.providerCommitAuthor) && /* @__PURE__ */ jsxs("section", {
					className: "space-y-2 py-3",
					children: [
						/* @__PURE__ */ jsx("h3", {
							className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
							children: t("Commit")
						}),
						deployment.providerCommitAuthor ? /* @__PURE__ */ jsx("div", {
							className: "min-w-0",
							children: deployment.providerCommitAuthorUrl ? /* @__PURE__ */ jsx("a", {
								href: deployment.providerCommitAuthorUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "link-neutral truncate text-[11px]",
								title: deployment.providerCommitAuthor,
								children: deployment.providerCommitAuthor
							}) : /* @__PURE__ */ jsx("span", {
								className: "truncate text-[11px] font-medium text-foreground",
								title: deployment.providerCommitAuthor,
								children: deployment.providerCommitAuthor
							})
						}) : null,
						deployment.providerCommitMessage ? /* @__PURE__ */ jsx("p", {
							className: "break-words text-[11px] leading-snug whitespace-pre-wrap text-foreground",
							children: deployment.providerCommitMessage
						}) : null,
						deployment.providerCommitHash ? /* @__PURE__ */ jsxs("div", {
							className: "group flex min-w-0 items-center gap-1 pt-0.5",
							onMouseLeave: () => {
								if (commitCopyHideAfterCopyTimeoutRef.current) {
									clearTimeout(commitCopyHideAfterCopyTimeoutRef.current);
									commitCopyHideAfterCopyTimeoutRef.current = null;
								}
								setCommitCopyHiddenUntilLeave(false);
							},
							children: [/* @__PURE__ */ jsx(GitCommit, { className: "h-3 w-3 shrink-0 text-muted-foreground" }), /* @__PURE__ */ jsxs("div", {
								className: "flex min-w-0 flex-1 items-center gap-1",
								children: [resolvedCommitUrl ? /* @__PURE__ */ jsx("a", {
									href: resolvedCommitUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "min-w-0 truncate font-mono text-[11px] link-neutral",
									title: deployment.providerCommitHash,
									children: deployment.providerCommitHash.slice(0, 7)
								}) : /* @__PURE__ */ jsx("span", {
									className: "min-w-0 truncate font-mono text-[11px] font-medium text-foreground",
									title: deployment.providerCommitHash,
									children: deployment.providerCommitHash.slice(0, 7)
								}), /* @__PURE__ */ jsx(Button, {
									type: "button",
									variant: "ghost",
									size: "sm",
									className: cn("h-6 w-6 shrink-0 p-0 text-muted-foreground transition-opacity duration-150", "hover:bg-muted/60 hover:text-foreground", commitCopyHiddenUntilLeave ? "pointer-events-none opacity-0" : "pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100"),
									"aria-label": t("Copy commit hash"),
									title: t("Copy commit hash"),
									onClick: (e) => {
										const el = e.currentTarget;
										navigator.clipboard.writeText(deployment.providerCommitHash);
										toast.success(t("Commit copied"));
										el.blur();
										if (commitCopyHideAfterCopyTimeoutRef.current) clearTimeout(commitCopyHideAfterCopyTimeoutRef.current);
										commitCopyHideAfterCopyTimeoutRef.current = window.setTimeout(() => {
											commitCopyHideAfterCopyTimeoutRef.current = null;
											setCommitCopyHiddenUntilLeave(true);
										}, URL_COPY_HIDE_DELAY_MS);
									},
									children: /* @__PURE__ */ jsx(Copy, { className: "h-3 w-3" })
								})]
							})]
						}) : null
					]
				}),
				deployment.providerBranch ? /* @__PURE__ */ jsxs("section", {
					className: "space-y-2 py-3",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
						children: t("Branch")
					}), /* @__PURE__ */ jsxs("div", {
						className: "group flex min-w-0 items-center gap-1",
						onMouseLeave: () => {
							if (branchCopyHideAfterCopyTimeoutRef.current) {
								clearTimeout(branchCopyHideAfterCopyTimeoutRef.current);
								branchCopyHideAfterCopyTimeoutRef.current = null;
							}
							setBranchCopyHiddenUntilLeave(false);
						},
						children: [/* @__PURE__ */ jsx(GitBranch, { className: "h-3 w-3 shrink-0 text-muted-foreground" }), /* @__PURE__ */ jsxs("div", {
							className: "flex min-w-0 flex-1 items-center gap-1",
							children: [resolvedBranchUrl ? /* @__PURE__ */ jsx("a", {
								href: resolvedBranchUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "link-neutral min-w-0 truncate text-[11px]",
								children: deployment.providerBranch
							}) : /* @__PURE__ */ jsx("span", {
								className: "min-w-0 truncate text-[11px] font-medium text-foreground",
								children: deployment.providerBranch
							}), /* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "ghost",
								size: "sm",
								className: cn("h-6 w-6 shrink-0 p-0 text-muted-foreground transition-opacity duration-150", "hover:bg-muted/60 hover:text-foreground", branchCopyHiddenUntilLeave ? "pointer-events-none opacity-0" : "pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100"),
								"aria-label": t("Copy branch name"),
								title: t("Copy branch name"),
								onClick: (e) => {
									const el = e.currentTarget;
									navigator.clipboard.writeText(deployment.providerBranch);
									toast.success(t("Branch copied"));
									el.blur();
									if (branchCopyHideAfterCopyTimeoutRef.current) clearTimeout(branchCopyHideAfterCopyTimeoutRef.current);
									branchCopyHideAfterCopyTimeoutRef.current = window.setTimeout(() => {
										branchCopyHideAfterCopyTimeoutRef.current = null;
										setBranchCopyHiddenUntilLeave(true);
									}, URL_COPY_HIDE_DELAY_MS);
								},
								children: /* @__PURE__ */ jsx(Copy, { className: "h-3 w-3" })
							})]
						})]
					})]
				}) : null,
				vcsProvider && deployment.providerRepositoryOwner && deployment.providerRepositoryName ? /* @__PURE__ */ jsxs("section", {
					className: "space-y-2 py-3",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
						children: t("Repository")
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex min-w-0 items-center gap-1.5",
						children: [/* @__PURE__ */ jsx("span", {
							className: "shrink-0 text-muted-foreground [&_svg]:h-3 [&_svg]:w-3",
							children: vcsProvider.icon
						}), repositoryUrl ? /* @__PURE__ */ jsxs("a", {
							href: repositoryUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "link-neutral truncate text-[11px]",
							children: [
								deployment.providerRepositoryOwner,
								"/",
								deployment.providerRepositoryName
							]
						}) : /* @__PURE__ */ jsxs("span", {
							className: "truncate text-[11px] font-medium text-foreground",
							children: [
								deployment.providerRepositoryOwner,
								"/",
								deployment.providerRepositoryName
							]
						})]
					})]
				}) : null,
				/* @__PURE__ */ jsxs("section", {
					className: "space-y-2 py-3",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
						children: t("Details")
					}), /* @__PURE__ */ jsxs("div", {
						className: "space-y-2 text-[11px]",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-muted-foreground",
									children: t("Size")
								}), /* @__PURE__ */ jsx("span", {
									className: "shrink-0 font-medium text-foreground",
									children: formatSize((deployment.buildSize || 0) + (deployment.sourceSize || 0))
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-muted-foreground",
										children: t("Type")
									}), /* @__PURE__ */ jsx(TooltipProvider, {
										delayDuration: 0,
										children: /* @__PURE__ */ jsxs(TooltipPrimitive.Root, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
											asChild: true,
											children: /* @__PURE__ */ jsx("button", {
												type: "button",
												className: "inline-flex items-center justify-center focus:outline-none",
												children: /* @__PURE__ */ jsx(HelpCircle, { className: "h-3 w-3 text-muted-foreground hover:text-foreground" })
											})
										}), /* @__PURE__ */ jsx(TooltipContent, {
											side: "top",
											sideOffset: 4,
											className: cn("max-w-xs", WIZARD_PORTAL_Z_POPOVER),
											children: /* @__PURE__ */ jsx("p", {
												className: "text-[12px]",
												children: deployment.type === "vcs" ? t("VCS (Version Control System) deployments are triggered from a connected Git repository and enable automatic deployments on code pushes.") : deployment.type === "cli" ? t("CLI deployments are created using the Appwrite command line tool, useful for developer workflows and scripted automation.") : deployment.type === "manual" ? t("Manual deployments are created by uploading code through the Console or API, or by redeploying an existing deployment. Useful for quick testing and re-running builds.") : t("The deployment type indicates how this deployment was created.")
											})
										})] })
									})]
								}), /* @__PURE__ */ jsx("span", {
									className: "shrink-0 font-medium text-foreground",
									children: typeLabel
								})]
							}),
							showRuntime && parentResource?.runtime && RuntimeIcon ? /* @__PURE__ */ jsxs("div", {
								className: "flex min-w-0 items-center justify-between gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "shrink-0 text-muted-foreground",
									children: t("Runtime")
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex min-w-0 items-center gap-1",
									children: [/* @__PURE__ */ jsx(RuntimeIcon, {
										runtime: parentResource.runtime,
										size: "sm",
										className: "h-3 w-3 shrink-0"
									}), /* @__PURE__ */ jsx("span", {
										className: "truncate font-mono font-medium text-foreground",
										children: parentResource.runtime
									})]
								})]
							}) : null
						]
					})]
				})
			]
		});
	}, [
		deployment,
		isSiteDeployment,
		isActiveDeployment,
		projectId,
		parentResource?.framework,
		parentResource?.runtime,
		visitEntries,
		vcsProvider,
		repositoryUrl,
		resolvedCommitUrl,
		resolvedBranchUrl,
		showRuntime,
		RuntimeIcon,
		sidebarScreenshotTheme,
		sidebarScreenshotLoaded,
		urlCopyHiddenUntilLeave,
		commitCopyHiddenUntilLeave,
		branchCopyHiddenUntilLeave,
		avifSupported,
		t
	]);
	const navigateToDeploymentsList = useCallback(() => {
		navigate({
			to: listRoute,
			params: {
				projectId,
				[parentResourceParam]: resourceId
			}
		});
	}, [
		navigate,
		listRoute,
		projectId,
		parentResourceParam,
		resourceId
	]);
	const refetchAndNavigate = async () => {
		closeDialogBeforeOverlayUnmount(() => {
			setDeleteDialogOpen(false);
			setCancelBuildDialogOpen(false);
		});
		for (const queryKey of invalidateQueries) {
			const normalizedKey = Array.isArray(queryKey) ? queryKey : [queryKey];
			await queryClient.refetchQueries({ queryKey: normalizedKey });
		}
		navigateToDeploymentsList();
	};
	const cancelBuildMutation = useMutation({
		mutationFn: async () => {
			if (!onCancelBuild) throw new Error(t("Cancel build is not available"));
			return await onCancelBuild(apiDeploymentId);
		},
		onSuccess: async () => {
			closeDialogBeforeOverlayUnmount(() => setCancelBuildDialogOpen(false));
			for (const queryKey of invalidateQueries) {
				const normalizedKey = Array.isArray(queryKey) ? queryKey : [queryKey];
				await queryClient.refetchQueries({ queryKey: normalizedKey });
			}
			toast.success(t("Build cancelled"));
		},
		onError: (error) => {
			toast.error(error.message || t("Failed to cancel build"));
		}
	});
	const deleteMutation = useMutation({
		mutationFn: async () => {
			if (isActiveDeployment) throw new Error(t("Cannot delete the active deployment. Please activate another deployment first."));
			return await onDelete(apiDeploymentId);
		},
		onSuccess: async () => {
			await refetchAndNavigate();
			toast.success(t("Deployment deleted successfully"));
		},
		onError: (error) => {
			toast.error(error.message || t("Failed to delete deployment"));
		}
	});
	const redeployMutation = useMutation({
		mutationFn: async () => {
			if (!onRedeploy) throw new Error(t("Redeploy is not available for this deployment type"));
			return await onRedeploy(projectId, resourceId, apiDeploymentId);
		},
		onSuccess: () => {
			invalidateQueries.forEach((queryKey) => {
				const normalizedKey = Array.isArray(queryKey) ? queryKey : [queryKey];
				queryClient.invalidateQueries({ queryKey: normalizedKey });
			});
			toast.success(t("Deployment rebuild started"));
			setRedeployDialogOpen(false);
		},
		onError: (error) => {
			toast.error(error.message || t("Failed to redeploy"));
		}
	});
	const activateMutation = useMutation({
		mutationFn: async () => {
			if (!onActivate) throw new Error(t("Activate is not available for this deployment type"));
			return await onActivate(projectId, resourceId, apiDeploymentId);
		},
		onSuccess: () => {
			invalidateQueries.forEach((queryKey) => {
				const normalizedKey = Array.isArray(queryKey) ? queryKey : [queryKey];
				queryClient.invalidateQueries({ queryKey: normalizedKey });
			});
			toast.success(t("Deployment activated successfully"));
			setActivateDialogOpen(false);
		},
		onError: (error) => {
			toast.error(error.message || t("Failed to activate deployment"));
		}
	});
	const handleDownloadSource = () => {
		onDownloadSource(projectId, resourceId, apiDeploymentId);
	};
	const handleDownloadBuild = () => {
		if (!isDeploymentCompleted(deployment?.status)) return;
		onDownloadBuild(projectId, resourceId, apiDeploymentId);
	};
	const syncLineSearchUrl = useCallback((next) => {
		if (next.size === 0) navigate({
			to: location.pathname,
			search: (prev) => {
				const newSearch = { ...prev || {} };
				delete newSearch.line;
				return Object.keys(newSearch).length === 0 ? {} : newSearch;
			},
			replace: true
		});
		else if (next.size === 1) {
			const only = [...next][0];
			navigate({
				to: location.pathname,
				search: (prev) => ({
					...prev || {},
					line: only
				}),
				replace: true
			});
		} else navigate({
			to: location.pathname,
			search: (prev) => {
				const newSearch = { ...prev || {} };
				delete newSearch.line;
				return Object.keys(newSearch).length === 0 ? {} : newSearch;
			},
			replace: true
		});
	}, [navigate, location.pathname]);
	const getLogsTextForClipboard = useCallback(() => {
		if (!buildLogs) return "";
		if (selectedLogLines.size === 0) return buildLogs;
		const lines = buildLogs.split("\n");
		return [...selectedLogLines].sort((a, b) => a - b).map((n) => lines[n - 1] ?? "").map(stripAnsiForClipboard).join("\n");
	}, [buildLogs, selectedLogLines]);
	const performCopyLogs = useCallback(async () => {
		if (!buildLogs) {
			toast.error(t("No logs to copy"));
			return;
		}
		try {
			await navigator.clipboard.writeText(getLogsTextForClipboard());
			const n = selectedLogLines.size;
			if (n === 0) toast.success(t("Logs copied to clipboard"));
			else if (n === 1) {
				const line = Math.min(...selectedLogLines);
				toast.success(`${t("Copied line")} ${line}`);
			} else toast.success(`Copied ${n} lines`);
		} catch {
			toast.error(t("Failed to copy logs"));
		}
	}, [
		buildLogs,
		getLogsTextForClipboard,
		selectedLogLines,
		t
	]);
	const handleCopyLogs = () => {
		performCopyLogs();
	};
	useEffect(() => {
		if (selectedLogLines.size === 0 || !buildLogs) return;
		const onKeyDown = (e) => {
			if (!(e.metaKey || e.ctrlKey) || e.key !== "c") return;
			const target = e.target;
			if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement) return;
			if (target instanceof HTMLElement && target.isContentEditable) return;
			const logsEl = logsContainerRef.current;
			const active = document.activeElement;
			if (logsEl && active instanceof Node && active !== logsEl && !logsEl.contains(active)) return;
			const selectionText = window.getSelection()?.toString().trim();
			if (selectionText && selectionText.length > 0) return;
			e.preventDefault();
			performCopyLogs();
		};
		window.addEventListener("keydown", onKeyDown, true);
		return () => window.removeEventListener("keydown", onKeyDown, true);
	}, [
		selectedLogLines,
		buildLogs,
		performCopyLogs
	]);
	const handleDownloadLogs = () => {
		if (!buildLogs) {
			toast.error(t("No logs to download"));
			return;
		}
		const blob = new Blob([buildLogs], { type: "text/plain" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `deployment-${apiDeploymentId}-logs.txt`;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
		toast.success(t("Logs downloaded"));
	};
	const getScrollContainer = useCallback(() => {
		if (!logsContainerRef.current) return null;
		let element = logsContainerRef.current;
		while (element) {
			const overflowY = window.getComputedStyle(element).overflowY;
			if (overflowY === "auto" || overflowY === "scroll") return element;
			element = element.parentElement;
		}
		return null;
	}, []);
	const updateScrollPosition = useCallback(() => {
		const scrollContainer = getScrollContainer();
		if (!scrollContainer) return;
		hasUserScrolledRef.current = true;
		const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
		const threshold = 10;
		setIsAtTop(scrollTop <= threshold);
		setIsAtBottom(scrollTop + clientHeight >= scrollHeight - threshold);
	}, [getScrollContainer]);
	useEffect(() => {
		const scrollContainer = getScrollContainer();
		if (!scrollContainer) return;
		updateScrollPosition();
		scrollContainer.addEventListener("scroll", updateScrollPosition);
		window.addEventListener("resize", updateScrollPosition);
		return () => {
			scrollContainer.removeEventListener("scroll", updateScrollPosition);
			window.removeEventListener("resize", updateScrollPosition);
		};
	}, [
		getScrollContainer,
		updateScrollPosition,
		buildLogs
	]);
	useEffect(() => {
		if (!(!hasUserScrolledRef.current || isAtBottom) || !buildLogs) return;
		const scrollContainer = getScrollContainer();
		if (scrollContainer) scrollContainer.scrollTop = scrollContainer.scrollHeight;
	}, [
		buildLogs,
		isAtBottom,
		getScrollContainer
	]);
	const scrollTargetLine = useMemo(() => {
		if (selectedLogLines.size !== 1) return null;
		return Math.min(...selectedLogLines);
	}, [selectedLogLines]);
	useEffect(() => {
		if (scrollTargetLine === null) return;
		if (!buildLogs) return;
		let retryCount = 0;
		const maxRetries = 10;
		const tryScroll = () => {
			const lineElement = lineRefs.current.get(scrollTargetLine);
			if (!lineElement) {
				if (retryCount < maxRetries) {
					retryCount++;
					setTimeout(tryScroll, 100);
				}
				return;
			}
			const scrollContainer = getScrollContainer();
			if (!scrollContainer) return;
			const containerRect = scrollContainer.getBoundingClientRect();
			const relativeTop = lineElement.getBoundingClientRect().top - containerRect.top + scrollContainer.scrollTop;
			scrollContainer.scrollTo({
				top: relativeTop - 20,
				behavior: "smooth"
			});
		};
		const timeoutId = setTimeout(tryScroll, 100);
		return () => clearTimeout(timeoutId);
	}, [
		scrollTargetLine,
		getScrollContainer,
		buildLogs
	]);
	const handleScrollToTop = () => {
		const scrollContainer = getScrollContainer();
		if (scrollContainer) scrollContainer.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	const handleScrollToBottom = () => {
		const scrollContainer = getScrollContainer();
		if (scrollContainer) scrollContainer.scrollTo({
			top: scrollContainer.scrollHeight,
			behavior: "smooth"
		});
	};
	const handleLineClick = useCallback((lineNumber, event) => {
		const focusLogsPane = () => {
			logsContainerRef.current?.focus({ preventScroll: true });
		};
		if (event.shiftKey) {
			const anchor = lineAnchorRef.current ?? (selectedLogLines.size > 0 ? Math.min(...selectedLogLines) : lineNumber);
			const start = Math.min(anchor, lineNumber);
			const end = Math.max(anchor, lineNumber);
			const next$1 = new Set(selectedLogLines);
			for (let i = start; i <= end; i++) next$1.add(i);
			setSelectedLogLines(next$1);
			syncLineSearchUrl(next$1);
			focusLogsPane();
			return;
		}
		if (event.metaKey || event.ctrlKey) {
			const next$1 = new Set(selectedLogLines);
			if (next$1.has(lineNumber)) next$1.delete(lineNumber);
			else next$1.add(lineNumber);
			lineAnchorRef.current = lineNumber;
			setSelectedLogLines(next$1);
			syncLineSearchUrl(next$1);
			focusLogsPane();
			return;
		}
		const isOnlySelectedLine = selectedLogLines.size === 1 && selectedLogLines.has(lineNumber);
		lineAnchorRef.current = lineNumber;
		const next = isOnlySelectedLine ? /* @__PURE__ */ new Set() : new Set([lineNumber]);
		setSelectedLogLines(next);
		syncLineSearchUrl(next);
		focusLogsPane();
	}, [selectedLogLines, syncLineSearchUrl]);
	const routeParams = useMemo(() => {
		return {
			projectId,
			[parentResourceParam]: resourceId,
			deploymentId
		};
	}, [
		projectId,
		resourceId,
		deploymentId,
		parentResourceParam
	]);
	if (isLoading) return /* @__PURE__ */ jsx(WizardLayout, {
		title: t("Deployment details"),
		fullscreen: true,
		useSidebar: false,
		fallbackPath,
		children: /* @__PURE__ */ jsx("div", {
			className: "flex h-full items-center justify-center",
			children: /* @__PURE__ */ jsx("div", {
				className: "rounded-lg border border-border bg-card py-12 px-6 text-center",
				children: /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground",
					children: t("Loading deployment...")
				})
			})
		})
	});
	if (!deployment) return /* @__PURE__ */ jsx(WizardLayout, {
		title: t("Deployment details"),
		fullscreen: true,
		useSidebar: false,
		fallbackPath,
		children: /* @__PURE__ */ jsx("div", {
			className: "flex h-full items-center justify-center",
			children: /* @__PURE__ */ jsx("div", {
				className: "rounded-lg border border-border bg-card py-12 px-6 text-center",
				children: /* @__PURE__ */ jsx("p", {
					className: "mb-4 text-[13px] text-muted-foreground",
					children: t("Deployment not found")
				})
			})
		})
	});
	return /* @__PURE__ */ jsxs(WizardLayout, {
		title: /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsx("span", {
				className: "hidden sm:inline",
				children: t("Deployment")
			}),
			/* @__PURE__ */ jsx("span", {
				className: "sm:hidden",
				children: t("Deploy")
			}),
			parentResource?.name && /* @__PURE__ */ jsxs(Fragment, { children: [
				" ",
				/* @__PURE__ */ jsx("span", {
					className: "text-muted-foreground hidden sm:inline",
					children: t("for")
				}),
				" ",
				/* @__PURE__ */ jsx(Link, {
					to: listRoute,
					params: {
						projectId,
						[parentResourceParam]: resourceId
					},
					className: "link-neutral font-medium",
					children: parentResource.name
				})
			] }),
			/* @__PURE__ */ jsx(CopyableId, {
				id: deployment.$id,
				size: "sm",
				maxWidth: 300,
				className: "hidden sm:inline-flex"
			}),
			/* @__PURE__ */ jsx(CopyableId, {
				id: deployment.$id,
				size: "sm",
				maxWidth: 200,
				className: "sm:hidden"
			})
		] }),
		headerActions: deployments.length > 0 ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-1",
			children: [/* @__PURE__ */ jsx(Button, {
				variant: "ghost",
				size: "sm",
				className: "h-8 w-8 p-0",
				disabled: !previousDeployment,
				onClick: () => {
					if (previousDeployment) navigate({
						to: deploymentDetailRoute,
						params: {
							...routeParams,
							deploymentId: previousDeployment.$id
						}
					});
				},
				children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
			}), /* @__PURE__ */ jsx(Button, {
				variant: "ghost",
				size: "sm",
				className: "h-8 w-8 p-0",
				disabled: !nextDeployment,
				onClick: () => {
					if (nextDeployment) navigate({
						to: deploymentDetailRoute,
						params: {
							...routeParams,
							deploymentId: nextDeployment.$id
						}
					});
				},
				children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
			})]
		}) }) : void 0,
		headerBottom: /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", {
			className: "bg-muted/20",
			children: /* @__PURE__ */ jsx("div", {
				className: "px-4 sm:px-6 py-3 sm:py-4",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap items-center gap-x-4 gap-y-2 sm:contents",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-[12px] sm:text-[13px] text-muted-foreground",
								children: t("Deployed")
							}), /* @__PURE__ */ jsx("span", {
								className: "text-[12px] sm:text-[13px] font-medium text-foreground",
								children: /* @__PURE__ */ jsx(DateTooltip, { date: deployment.$createdAt })
							})]
						}), deployment.providerCommitAuthor ? /* @__PURE__ */ jsxs("div", {
							className: "flex min-w-0 items-center gap-2",
							children: [/* @__PURE__ */ jsx("span", {
								className: "shrink-0 text-[12px] sm:text-[13px] text-muted-foreground",
								children: t("Committer")
							}), deployment.providerCommitAuthorUrl ? /* @__PURE__ */ jsx("a", {
								href: deployment.providerCommitAuthorUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "link-neutral min-w-0 truncate text-[12px] sm:text-[13px] font-medium",
								title: deployment.providerCommitAuthor,
								children: deployment.providerCommitAuthor
							}) : /* @__PURE__ */ jsx("span", {
								className: "min-w-0 truncate text-[12px] sm:text-[13px] font-medium text-foreground",
								title: deployment.providerCommitAuthor,
								children: deployment.providerCommitAuthor
							})]
						}) : null]
					}), (deployment.buildDuration != null || isDeploymentInProgress(deployment.status) || statusBadge) && /* @__PURE__ */ jsxs("div", {
						className: "flex w-full items-center justify-between gap-2 sm:w-auto sm:justify-start sm:gap-3 sm:ms-auto",
						children: [
							(isDeploymentInProgress(deployment.status) ? !isDeploymentTimeout(deployment.status, deployment.$createdAt) : deployment.buildDuration != null && deployment.buildDuration > 0 && !isDeploymentTimeout(deployment.status, deployment.$createdAt)) && /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[12px] sm:text-[13px] text-muted-foreground",
									children: t("Duration")
								}), /* @__PURE__ */ jsx("span", {
									className: "text-[12px] sm:text-[13px] font-medium text-foreground",
									children: isDeploymentInProgress(deployment.status) ? formatDuration(Math.max(0, elapsedSeconds)) : formatDuration(deployment.buildDuration)
								})]
							}),
							(isActiveDeployment || statusBadge) && (isActiveDeployment ? /* @__PURE__ */ jsxs(Badge, {
								variant: "active",
								className: "gap-1.5 text-[12px] font-medium shrink-0 h-6 px-2.5",
								children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-3.5 w-3.5" }), t("Active")]
							}) : statusBadge && /* @__PURE__ */ jsxs(Badge, {
								variant: statusBadge.badgeVariant,
								className: "gap-1.5 text-[12px] font-medium shrink-0 h-6 px-2.5",
								children: [(() => {
									const StatusIcon = statusBadge.icon;
									return /* @__PURE__ */ jsx(StatusIcon, { className: "h-3.5 w-3.5" });
								})(), t(statusBadge.label)]
							})),
							isDeploymentFailed && /* @__PURE__ */ jsx(FixWithAgentDropdown, {
								prompt: aiFixPrompt,
								align: "end",
								className: "h-6 px-2.5 text-[12px] [&_svg:first-child]:h-3.5 [&_svg:first-child]:w-3.5",
								hideLabelOnSmallScreens: true
							})
						]
					})]
				})
			})
		}) }),
		fullscreen: true,
		useSidebar: false,
		constrainWidth: false,
		constrainFooterWidth: false,
		showBackButton: true,
		backButtonLabel: "Deployments",
		onBack: navigateToDeploymentsList,
		contentPadding: false,
		contentWrapperClassName: "flex min-h-0 flex-1 flex-col overflow-hidden",
		fullscreenContentXClassName: "ps-0 pe-0",
		fullscreenInnerClassName: "flex min-h-0 flex-1 flex-col",
		onClose: navigateToDeploymentsList,
		contentClassName: "flex min-h-0 flex-1 flex-col gap-0 overflow-hidden lg:flex-row",
		footer: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
			className: "hidden w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-2 lg:flex",
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex items-center",
				children: deployment && isDeploymentInProgress(deployment.status) && onCancelBuild ? /* @__PURE__ */ jsxs(Button, {
					variant: "outline",
					size: "sm",
					onClick: () => setCancelBuildDialogOpen(true),
					disabled: cancelBuildMutation.isPending,
					className: "h-9 text-[13px]",
					children: [/* @__PURE__ */ jsx(XCircle, { className: "me-1.5 h-4 w-4" }), t("Cancel")]
				}) : /* @__PURE__ */ jsx(TooltipProvider, {
					delayDuration: 0,
					children: /* @__PURE__ */ jsxs(TooltipPrimitive.Root, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
						asChild: true,
						children: /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsxs(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => setDeleteDialogOpen(true),
							disabled: isActiveDeployment,
							className: "h-9 text-[13px]",
							children: [/* @__PURE__ */ jsx(Trash2, { className: "me-1.5 h-4 w-4" }), t("Delete")]
						}) })
					}), isActiveDeployment && /* @__PURE__ */ jsx(TooltipContent, {
						sideOffset: 4,
						className: WIZARD_PORTAL_Z_POPOVER,
						children: /* @__PURE__ */ jsx("p", { children: t("Cannot delete the active deployment. Please activate another deployment first.") })
					})] })
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap items-center gap-2 sm:ms-auto",
				children: [
					/* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ jsxs(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							className: "h-9 text-[13px]",
							children: [
								/* @__PURE__ */ jsx(Download, { className: "me-1.5 h-4 w-4" }),
								t("Download"),
								/* @__PURE__ */ jsx(ChevronDown, { className: "ms-1.5 h-3.5 w-3.5" })
							]
						})
					}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
						align: "end",
						className: WIZARD_PORTAL_Z_DROPDOWN,
						children: [/* @__PURE__ */ jsxs(DropdownMenuItem, {
							onClick: handleDownloadSource,
							children: [/* @__PURE__ */ jsx(FileCode, { className: "me-2 h-4 w-4" }), t("Source code")]
						}), /* @__PURE__ */ jsxs(DropdownMenuItem, {
							onClick: handleDownloadBuild,
							disabled: !isDeploymentCompleted(deployment?.status),
							title: !isDeploymentCompleted(deployment?.status) ? t("Build output is available after the deployment has completed.") : void 0,
							children: [/* @__PURE__ */ jsx(Package, { className: "me-2 h-4 w-4" }), t("Build output")]
						})]
					})] }),
					onRedeploy && /* @__PURE__ */ jsxs(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						onClick: () => setRedeployDialogOpen(true),
						disabled: redeployMutation.isPending,
						className: "h-9 text-[13px]",
						children: [/* @__PURE__ */ jsx(RefreshCw, { className: "me-1.5 h-4 w-4" }), t("Redeploy")]
					}),
					/* @__PURE__ */ jsx(TooltipProvider, {
						delayDuration: 0,
						children: /* @__PURE__ */ jsxs(TooltipPrimitive.Root, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsxs(Button, {
								type: "button",
								variant: "outline",
								size: "sm",
								onClick: () => {
									if (onActivate) setActivateDialogOpen(true);
									else toast.info(t("Activate deployment functionality coming soon"));
								},
								disabled: isActiveDeployment || activateMutation.isPending || deployment?.status !== "ready",
								className: "h-9 text-[13px]",
								children: [/* @__PURE__ */ jsx(Play, { className: "me-1.5 h-4 w-4" }), t("Activate")]
							}) })
						}), (isActiveDeployment || deployment?.status !== "ready") && /* @__PURE__ */ jsx(TooltipContent, {
							sideOffset: 4,
							className: WIZARD_PORTAL_Z_POPOVER,
							children: /* @__PURE__ */ jsx("p", { children: isActiveDeployment ? t("This deployment is already active.") : t("Build must be ready before activating.") })
						})] })
					})
				]
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "w-full lg:hidden",
			children: /* @__PURE__ */ jsxs(Drawer, {
				open: deploymentActionsDrawerOpen,
				onOpenChange: setDeploymentActionsDrawerOpen,
				children: [/* @__PURE__ */ jsx(DrawerTrigger, {
					asChild: true,
					children: /* @__PURE__ */ jsxs(Button, {
						type: "button",
						variant: "outline",
						className: "h-10 w-full justify-between gap-2 text-[13px]",
						children: [/* @__PURE__ */ jsx("span", { children: t("Deployment actions") }), /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4 shrink-0 text-muted-foreground" })]
					})
				}), /* @__PURE__ */ jsxs(DrawerContent, {
					overlayClassName: WIZARD_DRAWER_OVERLAY_Z,
					className: cn(WIZARD_DRAWER_CONTENT_Z, "max-h-[85dvh]"),
					children: [/* @__PURE__ */ jsxs(DrawerHeader, {
						className: "!text-start",
						children: [/* @__PURE__ */ jsx(DrawerTitle, {
							className: "text-[15px] font-semibold",
							children: t("Deployment actions")
						}), /* @__PURE__ */ jsx(DrawerDescription, {
							className: "sr-only",
							children: t("Download, redeploy, activate, cancel or delete this deployment.")
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex max-h-[min(65dvh,24rem)] flex-col gap-2 overflow-y-auto px-4 pb-6",
						children: [
							deployment && isDeploymentInProgress(deployment.status) && onCancelBuild && /* @__PURE__ */ jsxs(Button, {
								type: "button",
								variant: "outline",
								className: "h-10 w-full justify-start text-[13px]",
								onClick: () => {
									setDeploymentActionsDrawerOpen(false);
									openDialogAfterOverlayCloses(() => setCancelBuildDialogOpen(true));
								},
								disabled: cancelBuildMutation.isPending,
								children: [/* @__PURE__ */ jsx(XCircle, { className: "me-2 h-4 w-4" }), t("Cancel build")]
							}),
							!(deployment && isDeploymentInProgress(deployment.status) && onCancelBuild) && /* @__PURE__ */ jsxs(Button, {
								type: "button",
								variant: "outline",
								className: "h-10 w-full justify-start text-[13px]",
								onClick: () => {
									setDeploymentActionsDrawerOpen(false);
									openDialogAfterOverlayCloses(() => setDeleteDialogOpen(true));
								},
								disabled: isActiveDeployment,
								title: isActiveDeployment ? t("Cannot delete the active deployment. Activate another deployment first.") : void 0,
								children: [/* @__PURE__ */ jsx(Trash2, { className: "me-2 h-4 w-4" }), t("Delete deployment")]
							}),
							/* @__PURE__ */ jsx("div", { className: "my-1 h-px bg-border" }),
							/* @__PURE__ */ jsxs(Button, {
								type: "button",
								variant: "outline",
								className: "h-10 w-full justify-start text-[13px]",
								onClick: () => {
									handleDownloadSource();
									setDeploymentActionsDrawerOpen(false);
								},
								children: [/* @__PURE__ */ jsx(FileCode, { className: "me-2 h-4 w-4" }), t("Download source code")]
							}),
							/* @__PURE__ */ jsxs(Button, {
								type: "button",
								variant: "outline",
								className: "h-10 w-full justify-start text-[13px]",
								onClick: () => {
									handleDownloadBuild();
									setDeploymentActionsDrawerOpen(false);
								},
								disabled: !isDeploymentCompleted(deployment?.status),
								title: !isDeploymentCompleted(deployment?.status) ? t("Build output is available after the deployment has completed.") : void 0,
								children: [/* @__PURE__ */ jsx(Package, { className: "me-2 h-4 w-4" }), t("Download build output")]
							}),
							onRedeploy && /* @__PURE__ */ jsxs(Button, {
								type: "button",
								variant: "outline",
								className: "h-10 w-full justify-start text-[13px]",
								onClick: () => {
									setDeploymentActionsDrawerOpen(false);
									setRedeployDialogOpen(true);
								},
								disabled: redeployMutation.isPending,
								children: [/* @__PURE__ */ jsx(RefreshCw, { className: "me-2 h-4 w-4" }), t("Redeploy")]
							}),
							/* @__PURE__ */ jsxs(Button, {
								type: "button",
								variant: "outline",
								className: "h-10 w-full justify-start text-[13px]",
								onClick: () => {
									setDeploymentActionsDrawerOpen(false);
									if (onActivate) setActivateDialogOpen(true);
									else toast.info(t("Activate deployment functionality coming soon"));
								},
								disabled: isActiveDeployment || activateMutation.isPending || deployment?.status !== "ready",
								title: isActiveDeployment ? t("This deployment is already active.") : activateMutation.isPending ? void 0 : deployment?.status !== "ready" ? t("Build must be ready before activating.") : void 0,
								children: [/* @__PURE__ */ jsx(Play, { className: "me-2 h-4 w-4" }), t("Activate")]
							})
						]
					})]
				})]
			})
		})] }),
		children: [
			/* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
				className: "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden lg:flex-row",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex min-h-0 min-w-0 flex-1 flex-col lg:border-e lg:border-border",
					children: [/* @__PURE__ */ jsx("div", {
						className: "min-w-0 shrink-0 border-b border-border",
						children: /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs("div", {
							className: "flex min-w-0 items-center gap-2 py-3 ps-6 pe-4 sm:pe-5",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "relative min-w-0 flex-1",
									children: [/* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
										placeholder: t("Search logs..."),
										value: logsSearch,
										onChange: (e) => setLogsSearch(e.target.value),
										className: "h-9 w-full min-w-0 ps-9 text-[13px]"
									})]
								}),
								/* @__PURE__ */ jsxs(TooltipPrimitive.Root, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
									asChild: true,
									children: /* @__PURE__ */ jsx(Button, {
										variant: "outline",
										size: "sm",
										onClick: handleDownloadLogs,
										disabled: !buildLogs,
										className: "h-9 w-9 shrink-0 p-0",
										children: /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" })
									})
								}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: t("Download logs") }) })] }),
								/* @__PURE__ */ jsxs(TooltipPrimitive.Root, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
									asChild: true,
									children: /* @__PURE__ */ jsx(Button, {
										variant: "outline",
										size: "sm",
										onClick: handleCopyLogs,
										disabled: !buildLogs,
										className: "h-9 w-9 shrink-0 p-0",
										children: /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" })
									})
								}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: selectedLogLines.size > 0 ? `Copy ${selectedLogLines.size} selected line${selectedLogLines.size === 1 ? "" : "s"} (⌘C / Ctrl+C)` : t("Copy logs") }) })] })
							]
						}) })
					}), /* @__PURE__ */ jsx("div", {
						ref: logsContainerRef,
						tabIndex: -1,
						className: "flex min-h-0 min-w-0 w-full flex-1 flex-col overflow-y-auto overflow-x-auto ps-6 pe-4 pb-44 sm:pe-5 outline-none",
						children: /* @__PURE__ */ jsx("div", {
							className: "min-h-full min-w-0",
							children: /* @__PURE__ */ jsx(BuildLogsView, {
								buildLogs,
								searchTerm: logsSearch,
								selectedLines: selectedLogLines,
								onLineClick: handleLineClick,
								lineRefs,
								emptyMessage: t("No build logs available."),
								lineHorizontalPaddingClass: "ps-0 pe-0"
							})
						})
					})]
				}), /* @__PURE__ */ jsx("aside", {
					className: "hidden min-h-0 w-[min(100%,20rem)] shrink-0 flex-col overflow-y-auto bg-muted/10 px-6 py-3 lg:flex xl:w-[min(100%,22rem)]",
					children: deploymentDetailSidebar
				})]
			}), buildLogs && /* @__PURE__ */ jsx("div", {
				className: "pointer-events-none fixed bottom-24 end-8 z-[101] lg:end-[calc(20rem+1.25rem)] xl:end-[calc(22rem+1.25rem)]",
				children: /* @__PURE__ */ jsx("div", {
					className: "pointer-events-auto flex flex-col gap-2",
					children: /* @__PURE__ */ jsxs(TooltipProvider, { children: [/* @__PURE__ */ jsxs(TooltipPrimitive.Root, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
						asChild: true,
						children: /* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "sm",
							onClick: handleScrollToTop,
							disabled: isAtTop,
							className: "h-8 w-8 p-0 bg-card/95 backdrop-blur-sm",
							children: /* @__PURE__ */ jsx(ArrowUp, { className: "h-4 w-4" })
						})
					}), /* @__PURE__ */ jsx(TooltipContent, {
						side: "left",
						children: /* @__PURE__ */ jsx("p", { children: t("Scroll to top") })
					})] }), /* @__PURE__ */ jsxs(TooltipPrimitive.Root, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
						asChild: true,
						children: /* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "sm",
							onClick: handleScrollToBottom,
							disabled: isAtBottom,
							className: "h-8 w-8 p-0 bg-card/95 backdrop-blur-sm",
							children: /* @__PURE__ */ jsx(ArrowDown, { className: "h-4 w-4" })
						})
					}), /* @__PURE__ */ jsx(TooltipContent, {
						side: "left",
						children: /* @__PURE__ */ jsx("p", { children: t("Scroll to bottom") })
					})] })] })
				})
			})] }),
			/* @__PURE__ */ jsx(Dialog, {
				open: cancelBuildDialogOpen,
				onOpenChange: setCancelBuildDialogOpen,
				children: /* @__PURE__ */ jsxs(DialogContent, {
					overlayClassName: WIZARD_DIALOG_OVERLAY_Z,
					className: cn("sm:max-w-md p-0", WIZARD_DIALOG_CONTENT_Z),
					children: [
						/* @__PURE__ */ jsxs(DialogHeader, {
							className: "px-6 pt-6 pb-4 text-start",
							children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Cancel build") }), /* @__PURE__ */ jsx(DialogDescription, {
								className: "text-[13px] mt-2",
								children: t("Stop the current deployment? You can deploy again later.")
							})]
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsx("div", {
							className: "px-6 pb-4 pt-4",
							children: deployment && /* @__PURE__ */ jsx(DeploymentInfo, {
								deployment,
								showStatus: true
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "outline",
								onClick: () => setCancelBuildDialogOpen(false),
								className: "h-9 text-[13px]",
								children: t("Keep building")
							}), /* @__PURE__ */ jsx(Button, {
								variant: "destructive",
								onClick: () => cancelBuildMutation.mutate(),
								disabled: cancelBuildMutation.isPending,
								className: "h-9 text-[13px]",
								children: t("Cancel")
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx(Dialog, {
				open: deleteDialogOpen,
				onOpenChange: setDeleteDialogOpen,
				children: /* @__PURE__ */ jsxs(DialogContent, {
					overlayClassName: WIZARD_DIALOG_OVERLAY_Z,
					className: cn("sm:max-w-md p-0", WIZARD_DIALOG_CONTENT_Z),
					children: [
						/* @__PURE__ */ jsx(DialogHeader, {
							className: "px-6 pt-6 pb-4 text-start",
							children: /* @__PURE__ */ jsx(DialogTitle, { children: t("Delete deployment") })
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 pb-4 pt-4",
							children: [/* @__PURE__ */ jsx(DialogDescription, {
								className: "text-[13px] mb-4",
								children: t("Are you sure you want to delete this deployment? This action cannot be undone.")
							}), /* @__PURE__ */ jsx(DeploymentInfo, {
								deployment,
								showStatus: true
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "outline",
								onClick: () => setDeleteDialogOpen(false),
								className: "h-9 text-[13px]",
								children: t("Cancel")
							}), /* @__PURE__ */ jsx(Button, {
								variant: "destructive",
								onClick: () => deleteMutation.mutate(),
								disabled: deleteMutation.isPending,
								className: "h-9 text-[13px]",
								children: t("Delete")
							})]
						})
					]
				})
			}),
			onRedeploy && /* @__PURE__ */ jsx(Dialog, {
				open: redeployDialogOpen,
				onOpenChange: setRedeployDialogOpen,
				children: /* @__PURE__ */ jsxs(DialogContent, {
					overlayClassName: WIZARD_DIALOG_OVERLAY_Z,
					className: cn("sm:max-w-md p-0", WIZARD_DIALOG_CONTENT_Z),
					children: [
						/* @__PURE__ */ jsx(DialogHeader, {
							className: "px-6 pt-6 pb-4 text-start",
							children: /* @__PURE__ */ jsx(DialogTitle, { children: t("Redeploy deployment") })
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 pb-4 pt-4",
							children: [/* @__PURE__ */ jsx(DialogDescription, {
								className: "text-[13px] mb-4",
								children: t(isSiteDeployment ? "This will create a new build for this deployment using the current site configuration. The original deployment's code will be preserved and used for the new build." : "This will create a new build for this deployment using the current function configuration. The original deployment's code will be preserved and used for the new build.")
							}), /* @__PURE__ */ jsx(DeploymentInfo, {
								deployment,
								showStatus: true
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "outline",
								onClick: () => setRedeployDialogOpen(false),
								disabled: redeployMutation.isPending,
								className: "h-9 text-[13px]",
								children: t("Cancel")
							}), /* @__PURE__ */ jsx(Button, {
								variant: "default",
								onClick: () => redeployMutation.mutate(),
								disabled: redeployMutation.isPending,
								className: "h-9 text-[13px]",
								children: t("Redeploy")
							})]
						})
					]
				})
			}),
			onActivate && /* @__PURE__ */ jsx(Dialog, {
				open: activateDialogOpen,
				onOpenChange: setActivateDialogOpen,
				children: /* @__PURE__ */ jsxs(DialogContent, {
					overlayClassName: WIZARD_DIALOG_OVERLAY_Z,
					className: cn("sm:max-w-md p-0", WIZARD_DIALOG_CONTENT_Z),
					children: [
						/* @__PURE__ */ jsx(DialogHeader, {
							className: "px-6 pt-6 pb-4 text-start",
							children: /* @__PURE__ */ jsx(DialogTitle, { children: t("Activate deployment") })
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 pb-4 pt-4",
							children: [/* @__PURE__ */ jsx(DialogDescription, {
								className: "text-[13px] mb-4",
								children: t("This will switch the active deployment to this one. All traffic will be routed to this deployment once activated.")
							}), /* @__PURE__ */ jsx(DeploymentInfo, {
								deployment,
								showStatus: true
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "outline",
								onClick: () => setActivateDialogOpen(false),
								disabled: activateMutation.isPending,
								className: "h-9 text-[13px]",
								children: t("Cancel")
							}), /* @__PURE__ */ jsx(Button, {
								variant: "default",
								onClick: () => activateMutation.mutate(),
								disabled: activateMutation.isPending,
								className: "h-9 text-[13px]",
								children: t("Activate")
							})]
						})
					]
				})
			})
		]
	});
}
export { DeploymentDetailView as t };
