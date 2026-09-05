import { n as useT } from "./translate-DZcqveGn.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Switch } from "./switch-D-U5gDIQ.js";
import { n as AlertDescription, t as Alert } from "./alert-BTaNwkUC.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { t as InputTags } from "./input-tags-CcIzF147.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { AlertCircle, Info } from "lucide-react";
const DEPLOYMENT_RETENTION_OPTIONS = [
	{
		value: 7,
		label: "1 Week"
	},
	{
		value: 30,
		label: "1 Month"
	},
	{
		value: 90,
		label: "3 Months"
	},
	{
		value: 180,
		label: "6 Months"
	},
	{
		value: 365,
		label: "1 Year"
	},
	{
		value: 730,
		label: "2 Years"
	},
	{
		value: 1825,
		label: "5 Years"
	},
	{
		value: 3650,
		label: "10 Years"
	}
];
function getRetentionOptions(retention) {
	const hasCurrentOption = DEPLOYMENT_RETENTION_OPTIONS.some((option) => option.value === retention);
	if (retention < 1 || retention > 36500 || hasCurrentOption) return DEPLOYMENT_RETENTION_OPTIONS;
	return [{
		value: retention,
		label: `${retention} days`
	}, ...DEPLOYMENT_RETENTION_OPTIONS];
}
function getDeploymentRetention(resource) {
	return resource.deploymentRetention ?? 0;
}
function DeploymentRetentionCard({ deploymentRetention: currentRetention, onUpdate, isPending = false }) {
	const t = useT();
	const [unlimitedRetention, setUnlimitedRetention] = useState(currentRetention === 0);
	const [retentionDays, setRetentionDays] = useState(currentRetention > 0 ? currentRetention : 30);
	useEffect(() => {
		setUnlimitedRetention(currentRetention === 0);
		setRetentionDays(currentRetention > 0 ? currentRetention : 30);
	}, [currentRetention]);
	const retentionOptions = useMemo(() => getRetentionOptions(retentionDays), [retentionDays]);
	const deploymentRetention = unlimitedRetention ? 0 : retentionDays;
	const isUnchanged = currentRetention === deploymentRetention;
	const isInvalid = !unlimitedRetention && (retentionDays < 1 || retentionDays > 36500);
	const selectedLabel = retentionOptions.find((option) => option.value === retentionDays)?.label ?? `${retentionDays} days`;
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("div", {
					className: "flex items-center gap-3",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex-1",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("Retention")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-muted-foreground mt-1",
							children: t("Control how long inactive deployments are kept before they are automatically deleted. Active deployments are always retained.")
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsxs("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx(Switch, {
							id: "deployment-retention-unlimited",
							checked: unlimitedRetention,
							onCheckedChange: setUnlimitedRetention,
							disabled: isPending
						}), /* @__PURE__ */ jsx(Label, {
							htmlFor: "deployment-retention-unlimited",
							className: "text-[13px] text-foreground cursor-pointer",
							children: t("Keep deployments forever")
						})]
					}), !unlimitedRetention ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
						className: "space-y-2 max-w-[200px]",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "deployment-retention",
							className: "text-[13px]",
							children: t("Retention period")
						}), /* @__PURE__ */ jsxs(Select, {
							value: String(retentionDays),
							onValueChange: (value) => setRetentionDays(Number(value)),
							disabled: isPending,
							children: [/* @__PURE__ */ jsx(SelectTrigger, {
								id: "deployment-retention",
								className: "h-9 border-border bg-background text-[13px] text-foreground focus:ring-0",
								children: /* @__PURE__ */ jsx(SelectValue, { placeholder: t("1 Month") })
							}), /* @__PURE__ */ jsx(SelectContent, { children: retentionOptions.map((option) => /* @__PURE__ */ jsx(SelectItem, {
								value: String(option.value),
								className: "text-[13px]",
								children: t(option.label)
							}, option.value)) })]
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[12px] text-muted-foreground",
						children: `${t("Inactive deployments are deleted after")} ${t(selectedLabel).toLowerCase()}.`
					})] }) : /* @__PURE__ */ jsx("p", {
						className: "text-[12px] text-muted-foreground",
						children: t("Inactive deployments will not be automatically deleted.")
					})]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30",
				children: /* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: isUnchanged || isInvalid || isPending,
					onClick: () => onUpdate(deploymentRetention),
					children: t("Update")
				})
			})
		]
	});
}
function hasGitRepository(resource) {
	return Boolean(resource.installationId && resource.providerRepositoryId);
}
function normalizeTriggerPatterns(patterns = []) {
	return [...new Set(patterns.map((pattern) => pattern.trim()).filter(Boolean))];
}
function triggerPatternsEqual(a, b) {
	const left = normalizeTriggerPatterns(a).sort();
	const right = normalizeTriggerPatterns(b).sort();
	if (left.length !== right.length) return false;
	return left.every((value, index) => value === right[index]);
}
function getResourceBuildTriggers(resource) {
	return {
		providerBranches: normalizeTriggerPatterns(resource.providerBranches),
		providerPaths: normalizeTriggerPatterns(resource.providerPaths)
	};
}
function formatPatternList(patterns) {
	if (patterns.length === 0) return "";
	const quoted = patterns.map((pattern) => `"${pattern}"`);
	if (quoted.length <= 3) return quoted.join(", ");
	return `${quoted.slice(0, 3).join(", ")}, and ${patterns.length - 3} more`;
}
function describeTriggerBehavior(branches, paths) {
	const normalizedBranches = normalizeTriggerPatterns(branches);
	const normalizedPaths = normalizeTriggerPatterns(paths);
	return `${normalizedBranches.length === 0 ? "All branches" : `Only branches matching ${formatPatternList(normalizedBranches)}`} trigger deployments on ${normalizedPaths.length === 0 ? "all file changes" : `only paths matching ${formatPatternList(normalizedPaths)}`}.`;
}
function isValidGlobPattern(pattern) {
	const trimmed = pattern.trim();
	if (!trimmed) return false;
	const negated = trimmed.startsWith("!");
	const core = negated ? trimmed.slice(1).trim() : trimmed;
	if (!core) return false;
	if (negated && trimmed.startsWith("!!")) return false;
	return /^[\w*?/.[\]{}-]+$/.test(core);
}
function findIncludeExcludeConflicts(patterns, field) {
	const includes = /* @__PURE__ */ new Set();
	const excludes = /* @__PURE__ */ new Set();
	for (const pattern of patterns) if (pattern.startsWith("!")) excludes.add(pattern.slice(1));
	else includes.add(pattern);
	const issues = [];
	for (const include of includes) if (excludes.has(include)) issues.push({
		field,
		message: `Pattern "${include}" is both included and excluded.`
	});
	return issues;
}
function validateTriggerPatterns(branches, paths) {
	const normalizedBranches = normalizeTriggerPatterns(branches);
	const normalizedPaths = normalizeTriggerPatterns(paths);
	const issues = [];
	for (const pattern of normalizedBranches) if (!isValidGlobPattern(pattern)) issues.push({
		field: "branches",
		message: `Branch pattern "${pattern}" is invalid.`
	});
	for (const pattern of normalizedPaths) if (!isValidGlobPattern(pattern)) issues.push({
		field: "paths",
		message: `Path pattern "${pattern}" is invalid.`
	});
	issues.push(...findIncludeExcludeConflicts(normalizedBranches, "branches"));
	issues.push(...findIncludeExcludeConflicts(normalizedPaths, "paths"));
	return issues;
}
function getBranchExamples(productionBranch) {
	return [
		{
			label: "Production",
			pattern: productionBranch?.trim() || "main"
		},
		{
			label: "Prefix",
			pattern: "feat/*"
		},
		{
			label: "Exclude",
			pattern: "!draft/*"
		}
	];
}
function getPathExamples() {
	return [
		{
			label: "Folder",
			pattern: "src/**"
		},
		{
			label: "Monorepo",
			pattern: "apps/my-app/**"
		},
		{
			label: "Exclude",
			pattern: "!docs/**"
		},
		{
			label: "Exclude files",
			pattern: "!**/*.md"
		}
	];
}
function getPathFilterRootNote(rootDirectory) {
	const normalized = rootDirectory?.trim();
	if (!normalized || normalized === "./" || normalized === ".") return null;
	return `Paths match from repo root, not ${normalized}.`;
}
function getBranchPlaceholder(productionBranch) {
	return `Enter or comma to add · e.g. ${productionBranch?.trim() || "main"}, feat/*, !draft/*`;
}
function getPathPlaceholder(_kind) {
	return "Enter or comma to add · e.g. src/**, !docs/**";
}
function FieldLabel({ htmlFor, children, tooltip }) {
	const t = useT();
	return /* @__PURE__ */ jsxs(Label, {
		htmlFor,
		className: "text-[13px] mb-2 block",
		children: [children, /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx("button", {
				type: "button",
				className: "inline-flex ms-1.5 align-middle text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded",
				"aria-label": t("More info"),
				children: /* @__PURE__ */ jsx(Info, { className: "h-3.5 w-3.5" })
			})
		}), /* @__PURE__ */ jsx(TooltipContent, {
			side: "top",
			className: "max-w-[240px] z-[200] text-[12px]",
			children: tooltip
		})] })]
	});
}
function PatternExamples({ examples, disabled, onPick }) {
	const t = useT();
	if (examples.length === 0) return null;
	return /* @__PURE__ */ jsx("div", {
		className: "mt-2 flex flex-wrap gap-1.5",
		children: examples.map((example) => /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx(Button, {
				type: "button",
				variant: "outline",
				size: "sm",
				className: "h-7 text-[12px] font-normal",
				disabled,
				onClick: () => onPick(example.pattern),
				children: t(example.label)
			})
		}), /* @__PURE__ */ jsx(TooltipContent, {
			side: "top",
			className: "max-w-[240px] z-[200] font-mono text-[12px]",
			children: example.pattern
		})] }, example.label))
	});
}
function fieldIssues(issues, field) {
	const messages = issues.filter((issue) => issue.field === field).map((issue) => issue.message);
	if (messages.length === 0) return null;
	return messages.join(" ");
}
function BuildTriggersCard({ kind, resource, projectId, resourceId, docsLink, onSave, isSaving = false }) {
	const t = useT();
	const isConfigured = hasGitRepository(resource);
	const productionBranch = resource.providerBranch?.trim() || "main";
	const pathRootNote = getPathFilterRootNote(resource.providerRootDirectory);
	const gitSettingsTo = kind === "function" ? "/projects/$projectId/functions/$functionId/settings/git" : "/projects/$projectId/sites/$siteId/settings/git";
	const gitSettingsParams = kind === "function" ? {
		projectId,
		functionId: resourceId
	} : {
		projectId,
		siteId: resourceId
	};
	const saved = useMemo(() => getResourceBuildTriggers(resource), [
		resource.providerBranches,
		resource.providerPaths,
		resource.$id
	]);
	const [providerBranches, setProviderBranches] = useState(saved.providerBranches);
	const [providerPaths, setProviderPaths] = useState(saved.providerPaths);
	const [branchPrefill, setBranchPrefill] = useState(null);
	const [pathPrefill, setPathPrefill] = useState(null);
	useEffect(() => {
		setProviderBranches(saved.providerBranches);
		setProviderPaths(saved.providerPaths);
	}, [
		saved.providerBranches,
		saved.providerPaths,
		resource.$id
	]);
	const hasChanges = !triggerPatternsEqual(providerBranches, saved.providerBranches) || !triggerPatternsEqual(providerPaths, saved.providerPaths);
	const validationIssues = useMemo(() => validateTriggerPatterns(providerBranches, providerPaths), [providerBranches, providerPaths]);
	const branchExamples = useMemo(() => getBranchExamples(productionBranch), [productionBranch]);
	const pathExamples = useMemo(() => getPathExamples(), []);
	const behaviorSummary = describeTriggerBehavior(providerBranches, providerPaths);
	const branchFieldError = fieldIssues(validationIssues, "branches");
	const pathFieldError = fieldIssues(validationIssues, "paths");
	const handleSave = () => {
		if (validateTriggerPatterns(providerBranches, providerPaths).length > 0) return;
		onSave({
			providerBranches: normalizeTriggerPatterns(providerBranches),
			providerPaths: normalizeTriggerPatterns(providerPaths)
		});
	};
	const handleClearAll = () => {
		setProviderBranches([]);
		setProviderPaths([]);
	};
	const fieldsDisabled = !isConfigured || isSaving;
	const hasAnyPatterns = providerBranches.length > 0 || providerPaths.length > 0;
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Triggers")
				}), /* @__PURE__ */ jsxs("p", {
					className: "text-[13px] text-muted-foreground mt-2",
					children: [
						t("Limit which pushes trigger deployments. Use globs; prefix with"),
						" ",
						/* @__PURE__ */ jsx("span", {
							className: "font-mono",
							children: "!"
						}),
						" ",
						t("to exclude."),
						" ",
						/* @__PURE__ */ jsx(DocsRouteLink, {
							href: docsLink,
							className: "link-neutral",
							children: t("Learn more")
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsxs("div", {
					className: "space-y-4",
					children: [
						!isConfigured ? /* @__PURE__ */ jsx("div", {
							className: "rounded-lg border border-border bg-muted/30 px-3 py-2.5",
							children: /* @__PURE__ */ jsxs("p", {
								className: "text-[12px] text-muted-foreground",
								children: [
									t("Connect a repository in"),
									" ",
									/* @__PURE__ */ jsx(Link, {
										to: gitSettingsTo,
										params: gitSettingsParams,
										className: "link-neutral",
										children: t("Git settings")
									}),
									"."
								]
							})
						}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
							className: "rounded-lg border border-border bg-muted/30 overflow-hidden",
							children: [/* @__PURE__ */ jsx("div", {
								className: "border-b border-border bg-muted/40 px-3.5 py-2",
								children: /* @__PURE__ */ jsx("span", {
									className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
									children: hasChanges ? t("Preview") : t("Current behavior")
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-3 px-3.5 py-3",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-[13px] font-medium text-foreground leading-relaxed",
									children: behaviorSummary
								}), /* @__PURE__ */ jsxs("p", {
									className: "border-t border-border pt-3 text-[12px] text-muted-foreground",
									children: [
										t("Production"),
										" ",
										/* @__PURE__ */ jsx("code", {
											className: "font-mono text-foreground",
											children: productionBranch
										}),
										" · ",
										/* @__PURE__ */ jsx(Link, {
											to: gitSettingsTo,
											params: gitSettingsParams,
											className: "link-neutral",
											children: "Git"
										})
									]
								})]
							})]
						}), validationIssues.length > 0 ? /* @__PURE__ */ jsxs(Alert, {
							variant: "destructive",
							className: "border-destructive/30 py-2.5",
							children: [/* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4" }), /* @__PURE__ */ jsx(AlertDescription, {
								className: "text-[12px]",
								children: /* @__PURE__ */ jsx("ul", {
									className: "list-disc ps-4 space-y-1",
									children: validationIssues.map((issue) => /* @__PURE__ */ jsx("li", { children: issue.message }, `${issue.field}-${issue.message}`))
								})
							})]
						}) : null] }),
						/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx(FieldLabel, {
								htmlFor: "provider-branches",
								tooltip: t("Empty = all branches. ! excludes."),
								children: t("Branch filters")
							}),
							/* @__PURE__ */ jsx(PatternExamples, {
								examples: branchExamples,
								disabled: fieldsDisabled,
								onPick: (pattern) => setBranchPrefill({
									id: Date.now(),
									value: pattern
								})
							}),
							/* @__PURE__ */ jsx(InputTags, {
								id: "provider-branches",
								value: providerBranches,
								onChange: (value) => setProviderBranches(value),
								disabled: fieldsDisabled,
								splitOnComma: true,
								placeholder: getBranchPlaceholder(productionBranch),
								prefillRequest: branchPrefill,
								onPrefillConsumed: () => setBranchPrefill(null),
								className: "mt-2"
							}),
							branchFieldError ? /* @__PURE__ */ jsx("p", {
								className: "text-[12px] text-destructive mt-1",
								children: branchFieldError
							}) : null
						] }),
						/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx(FieldLabel, {
								htmlFor: "provider-paths",
								tooltip: t("Empty = all file changes. ! excludes."),
								children: t("Path filters")
							}),
							/* @__PURE__ */ jsx(PatternExamples, {
								examples: pathExamples,
								disabled: fieldsDisabled,
								onPick: (pattern) => setPathPrefill({
									id: Date.now(),
									value: pattern
								})
							}),
							/* @__PURE__ */ jsx(InputTags, {
								id: "provider-paths",
								value: providerPaths,
								onChange: (value) => setProviderPaths(value),
								disabled: fieldsDisabled,
								splitOnComma: true,
								placeholder: getPathPlaceholder(kind),
								prefillRequest: pathPrefill,
								onPrefillConsumed: () => setPathPrefill(null),
								className: "mt-2"
							}),
							pathFieldError ? /* @__PURE__ */ jsx("p", {
								className: "text-[12px] text-destructive mt-1",
								children: pathFieldError
							}) : null,
							pathRootNote ? /* @__PURE__ */ jsx("p", {
								className: "text-[12px] text-muted-foreground mt-1",
								children: pathRootNote
							}) : null
						] })
					]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: !isConfigured || !hasChanges || isSaving || validationIssues.length > 0,
					onClick: handleSave,
					children: t("Update")
				}), /* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "outline",
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: fieldsDisabled || !hasAnyPatterns,
					onClick: handleClearAll,
					children: t("Clear all")
				})]
			})
		]
	});
}
export { getDeploymentRetention as a, DeploymentRetentionCard as i, describeTriggerBehavior as n, normalizeTriggerPatterns as r, BuildTriggersCard as t };
