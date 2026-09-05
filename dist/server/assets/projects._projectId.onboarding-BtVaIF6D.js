import { t as cn } from "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import { f as useDebugOverrides, r as useI18n } from "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-CL7SLzjY.js";
import "./constants-Dd6QzW31.js";
import "./constants-BDeF927R.js";
import "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import { Cy as isOnboardingStepDone, Sy as getOnboardingGroupState, _y as ONBOARDING_CONNECT, fy as useOnboardingProgressFromSnapshot, gy as ONBOARDING_AGENT_STEP, hy as useSkipOnboardingStep, my as useProjectOnboardingSnapshot, py as useOnboardingStepStates, vy as ONBOARDING_PRODUCT_CATEGORIES, wy as subStepCountsTowardProgress, yy as computeOnboardingProductBreakdown } from "./hooks-BONwG3Mt.js";
import "./auth-BPuxYQAc.js";
import "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import "./databases-Dh0pwZ6h.js";
import "./database-specs-CBc802K0.js";
import "./database-row-inline-edits-CdyGeTxj.js";
import "./form-field-type-badge-C7qMzJo0.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import "./affiliates-BOg1SHC6.js";
import { t as MARKETING_SOCIAL_STATS } from "./social-stats-X1CQqP0k.js";
import "./cimd-CRIktQxf.js";
import "./account-applications-Bo8bAeE0.js";
import "./date-format-BD1j7PxK.js";
import "./invite-url-B18y3cBt.js";
import "./format-metric-6jsfxd5f.js";
import "./domains-Bfw8HsXF.js";
import "./parse-spec-DW3UGcrS.js";
import "./page-direction-CnacIIOa.js";
import { n as useDebugMode } from "./DebugMode-DFSPYy81.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import "./input-yKHNPhDZ.js";
import "./popover-BjTNxuf9.js";
import "./tabs-XaWkg9jR.js";
import "./select-BYGLGp-f.js";
import "./context-menu-D55xedo-.js";
import "./CodeBlock-BGAzMP_K.js";
import "./WizardLayout-DWqXFGuX.js";
import "./RequireAuth-DahioVQe.js";
import "./HeaderAlertBar-CK7Gy4sE.js";
import "./mcp-CgjPVMsn.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import "./label-D8nNLJBa.js";
import "./modal-auto-focus-BO41bKmA.js";
import "./dialog-CFWmsJbI.js";
import "./skeleton-8d0Q_D56.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import "./DateTooltip-wgOggQgS.js";
import "./sheet-CbM5lIV1.js";
import "./BaseDrawer-B4vv4Sf_.js";
import "./use-keyboard-shortcuts-C2m0wYFf.js";
import "./McpIcon-D1Jv-oq2.js";
import "./calendar-6OJ5dwYN.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-DUssQZhw.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./console-project-scopes-nd4nTLJF.js";
import "./DocsRouteLink-cLPNKZ9F.js";
import "./checkbox-r_hqIB3d.js";
import { n as useProjectConnectDialog } from "./ProjectConnectDialogContext-DgcmISfV.js";
import "./Icon-BtIL187e.js";
import "./FrameworkIcon-DTkSe6r3.js";
import { i as markOnboardingAgentStepSkipped, n as getOnboardingAgentStepState, r as markOnboardingAgentStepDone } from "./MCPSection-k-iSVVVO.js";
import "./ConnectCodeExample-Ujo3XkoF.js";
import "./radio-group-aZurL4eE.js";
import "./DateTimePicker-DySgezub.js";
import { i as AccordionItem, n as AccordionContent, o as AccordionTrigger, t as Accordion } from "./accordion-DmQmnCa5.js";
import "./separator-B2hXZdKL.js";
import "./ScopeEditor-DGe3mP1w.js";
import "./ApiKeyDrawer-C9r-i_O0.js";
import "./use-user-os-Cwg5asTC.js";
import "./PostgresCopyableField-eNLUNLhf.js";
import "./TerraformIcon-DDZR7KCM.js";
import "./providers-8aVvAoJZ.js";
import "./agent-discovery-SMCX1bvP.js";
import "./analytics-C_KnVoso.js";
import { t as Progress } from "./progress-DDUqzOsb.js";
import "./console-rbac-loader-DvaSNNjB.js";
import { t as Route$1 } from "./projects._projectId.onboarding-DwMWCJ9z.js";
import "./RefreshButton-BA9lQ7jC.js";
import { t as ServiceHeader } from "./ServiceHeader-C9TuKD27.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Check, ChevronDown, ChevronRight, ExternalLink, Lock, Minus } from "lucide-react";
var POOLS = {
	early: [
		"Great start - every big app begins with step one.",
		"You’re on your way - small steps add up fast.",
		"Solid beginning. Keep the momentum going.",
		"Nice - you’re already moving.",
		"This is how shipping starts - one checkbox at a time.",
		"Love the energy - keep stacking those wins."
	],
	momentum: [
		"You’re gaining steam - keep going.",
		"Nice progress - the foundation is taking shape.",
		"Momentum looks good from here.",
		"Keep at it - you’re building something real.",
		"You’re past the awkward early bit - nice.",
		"Every checkbox is a vote for shipping - keep it up."
	],
	half: [
		"More than halfway - you’re in the zone.",
		"Strong progress - the finish line is in sight.",
		"You’re past the halfway mark. Don’t stop now.",
		"This is where projects start to feel real.",
		"Huge progress - a few more wins to go.",
		"Halfway there - and looking sharp."
	],
	almost: [
		"So close - you’re almost there.",
		"Final stretch - finish strong.",
		"Almost done - one last push.",
		"You’re inches from the finish line.",
		"The hard part’s behind you - wrap it up.",
		"Last lap - you’ve got this."
	],
	done: [
		"Nice work - you’re all set to build.",
		"Everything’s wired. Time to ship something great.",
		"Checklist complete. You’ve got this.",
		"That’s the full tour. Go build.",
		"You did it - your stack is ready when you are.",
		"All green - now go make something people love.",
		"You’re ready - and the community helps Appwrite grow."
	]
};
function getEncouragementBand(progress) {
	if (progress >= 100) return "done";
	if (progress >= 75) return "almost";
	if (progress >= 50) return "half";
	if (progress >= 25) return "momentum";
	return "early";
}
function pickEncouragementForBand(band) {
	const pool = POOLS[band];
	return pool[Math.floor(Math.random() * pool.length)];
}
var CONNECT_SECTION = {
	title: "Connect",
	description: "Register where your app runs, add API credentials, and connect a coding agent with MCP."
};
var CARD_SHELL = "rounded-xl border border-border bg-card/50 overflow-hidden";
var ONBOARDING_ROW_X = "px-4 sm:px-5";
var ONBOARDING_ICON_COL = "flex w-7 shrink-0 justify-center";
var ONBOARDING_ICON_GAP = "gap-3";
var RING_VB = 120;
var RING_STROKE = 8;
var EMPTY_SNAPSHOT = { stagesBySdk: {} };
function OnboardingProductBreakdown({ rows, showSkeleton, className, connectComplete }) {
	const t = useT();
	return /* @__PURE__ */ jsx("div", {
		className: cn("w-full space-y-3", showSkeleton && "animate-pulse", className),
		"aria-label": t("Progress by product"),
		children: rows.map((row) => {
			const pct = row.total === 0 ? 0 : Math.round(row.completed / row.total * 100);
			const locked = row.id !== "connect" && !connectComplete;
			const rowInner = /* @__PURE__ */ jsxs("div", {
				className: cn("space-y-1.5 w-full text-start", locked && "opacity-[0.65]"),
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between gap-2 min-w-0",
					children: [/* @__PURE__ */ jsx("span", {
						className: cn("text-[11px] font-medium truncate", locked ? "text-muted-foreground" : "text-foreground"),
						children: t(row.label)
					}), /* @__PURE__ */ jsxs("span", {
						className: "flex items-center gap-1.5 shrink-0",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "text-[10px] tabular-nums text-muted-foreground",
							children: [
								row.completed,
								"/",
								row.total
							]
						}), locked ? /* @__PURE__ */ jsx(Lock, {
							className: "size-3 shrink-0 text-muted-foreground",
							"aria-hidden": true
						}) : null]
					})]
				}), /* @__PURE__ */ jsx(Progress, {
					value: showSkeleton ? 0 : pct,
					className: cn("h-1.5 w-full bg-muted/80", locked ? "[&>div]:!bg-muted-foreground/30" : "[&>div]:!bg-[var(--brand-cta)]")
				})]
			});
			return locked ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsx("div", {
					className: "block w-full",
					children: rowInner
				})
			}), /* @__PURE__ */ jsx(TooltipContent, {
				side: "top",
				className: "max-w-xs text-balance",
				children: t("Connect your app first.")
			})] }, row.id) : /* @__PURE__ */ jsx("div", { children: rowInner }, row.id);
		})
	});
}
function OnboardingProgressPanel({ projectId, progress, completedSteps, totalSteps, showSkeleton, productBreakdown, connectComplete }) {
	const t = useT();
	const { previewOnboardingComplete } = useDebugOverrides();
	const [breakdownOpen, setBreakdownOpen] = useState(false);
	const c = RING_VB / 2;
	const radius = (RING_VB - RING_STROKE) / 2;
	const circumference = 2 * Math.PI * radius;
	const displayProgress = previewOnboardingComplete ? 100 : progress;
	const strokeDashoffset = circumference * (1 - displayProgress / 100);
	const complete = !showSkeleton && displayProgress === 100;
	const encouragementBand = getEncouragementBand(displayProgress);
	const headline = useMemo(() => pickEncouragementForBand(encouragementBand), [encouragementBand, projectId]);
	const ringInline = "relative aspect-square w-[min(92px,25vw)] shrink-0 sm:w-[120px] text-[var(--brand-cta)]";
	const ringStacked = "relative aspect-square w-[120px] shrink-0 text-[var(--brand-cta)]";
	const progressRing = (layout) => {
		const wrap = layout === "inline" ? ringInline : ringStacked;
		if (showSkeleton) return /* @__PURE__ */ jsx("div", {
			className: cn("rounded-full bg-muted animate-pulse shrink-0 aspect-square", layout === "inline" ? "w-[min(92px,25vw)] sm:w-[120px]" : "w-[120px]"),
			"aria-hidden": true
		});
		if (complete) return /* @__PURE__ */ jsx("div", {
			className: cn("flex shrink-0 items-center justify-center rounded-full border border-border bg-card/80", wrap),
			children: /* @__PURE__ */ jsx("span", {
				className: "flex h-[60%] w-[60%] items-center justify-center rounded-full border border-emerald-500/35 bg-emerald-500/10",
				children: /* @__PURE__ */ jsx(Check, { className: "h-1/2 w-1/2 text-emerald-600 dark:text-emerald-400" })
			})
		});
		return /* @__PURE__ */ jsxs("div", {
			className: cn("relative shrink-0", wrap),
			children: [/* @__PURE__ */ jsxs("svg", {
				viewBox: `0 0 ${RING_VB} ${RING_VB}`,
				className: "h-full w-full -rotate-90",
				"aria-hidden": true,
				children: [/* @__PURE__ */ jsx("circle", {
					cx: c,
					cy: c,
					r: radius,
					fill: "none",
					stroke: "currentColor",
					strokeWidth: RING_STROKE,
					className: "opacity-20"
				}), /* @__PURE__ */ jsx("circle", {
					cx: c,
					cy: c,
					r: radius,
					fill: "none",
					stroke: "currentColor",
					strokeWidth: RING_STROKE,
					strokeLinecap: "round",
					strokeDasharray: circumference,
					strokeDashoffset,
					className: "transition-[stroke-dashoffset] duration-300 ease-out"
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "absolute inset-0 flex flex-col items-center justify-center gap-0.5 px-1.5",
				children: [/* @__PURE__ */ jsxs("span", {
					className: cn("font-semibold tabular-nums text-foreground leading-none", layout === "inline" ? "text-[clamp(1rem,4.5vw,1.375rem)]" : "text-[22px]"),
					children: [progress, "%"]
				}), /* @__PURE__ */ jsxs("span", {
					className: cn("font-medium text-muted-foreground tabular-nums", layout === "inline" ? "text-[10px] sm:text-[11px]" : "text-[11px]"),
					children: [
						completedSteps,
						"/",
						totalSteps
					]
				})]
			})]
		});
	};
	const headlineBlock = /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("h2", {
		className: "text-[13px] font-semibold text-foreground leading-snug",
		children: t(headline)
	}), /* @__PURE__ */ jsx("p", {
		className: "text-[11px] text-muted-foreground leading-snug mt-1.5",
		children: t(complete ? "We're focused on building a product Appwriters love. The best way we grow is when the community helps spread the word." : "Connect this project, then complete each product area - one clear action at a time.")
	})] });
	return /* @__PURE__ */ jsxs("div", {
		className: cn(CARD_SHELL, "w-full"),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-4 py-4 sm:px-5 sm:py-5 lg:hidden",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex flex-row items-start gap-3 sm:gap-5",
					children: [/* @__PURE__ */ jsx("div", {
						className: "min-w-0 flex-1 text-start",
						children: headlineBlock
					}), /* @__PURE__ */ jsx("div", {
						className: cn("flex shrink-0 justify-end pt-0.5", showSkeleton && "items-center"),
						children: progressRing("inline")
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-5 w-full space-y-4 pt-1",
					children: [/* @__PURE__ */ jsxs("button", {
						type: "button",
						onClick: () => setBreakdownOpen((o) => !o),
						className: "flex w-full cursor-pointer items-center justify-center gap-1.5 py-1 text-[11px] font-medium text-muted-foreground hover:text-foreground transition-colors",
						"aria-expanded": breakdownOpen,
						children: [/* @__PURE__ */ jsx("span", { children: t("Breakdown") }), /* @__PURE__ */ jsx(ChevronDown, {
							className: cn("size-3.5 shrink-0 transition-transform", breakdownOpen && "rotate-180"),
							"aria-hidden": true
						})]
					}), breakdownOpen ? /* @__PURE__ */ jsx(OnboardingProductBreakdown, {
						rows: productBreakdown,
						showSkeleton,
						connectComplete
					}) : null]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "hidden lg:block",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "px-4 py-4 text-start sm:px-5 sm:py-5",
						children: headlineBlock
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col items-center px-4 pb-6 pt-5 sm:px-5 sm:pb-7 sm:pt-6",
						children: [progressRing("stacked"), /* @__PURE__ */ jsxs("div", {
							className: "mt-6 w-full max-w-[240px] space-y-4",
							children: [/* @__PURE__ */ jsxs("button", {
								type: "button",
								onClick: () => setBreakdownOpen((o) => !o),
								className: "flex w-full cursor-pointer items-center justify-center gap-1.5 py-1 text-[11px] font-medium text-muted-foreground hover:text-foreground transition-colors",
								"aria-expanded": breakdownOpen,
								children: [/* @__PURE__ */ jsx("span", { children: t("Breakdown") }), /* @__PURE__ */ jsx(ChevronDown, {
									className: cn("size-3.5 shrink-0 transition-transform", breakdownOpen && "rotate-180"),
									"aria-hidden": true
								})]
							}), breakdownOpen ? /* @__PURE__ */ jsx(OnboardingProductBreakdown, {
								className: "w-full",
								rows: productBreakdown,
								showSkeleton,
								connectComplete
							}) : null]
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-4 py-4 sm:px-5 sm:py-4 bg-muted/30 flex flex-col gap-2",
				children: [/* @__PURE__ */ jsx(Button, {
					variant: "outline",
					size: "sm",
					className: "h-9 w-full text-[13px]",
					asChild: true,
					children: /* @__PURE__ */ jsx(Link, {
						to: "/projects/$projectId",
						params: { projectId },
						children: t("Go to dashboard")
					})
				}), complete ? /* @__PURE__ */ jsx(Button, {
					variant: "outline",
					size: "sm",
					className: "h-9 w-full text-[13px]",
					asChild: true,
					children: /* @__PURE__ */ jsxs("a", {
						href: MARKETING_SOCIAL_STATS.github.link,
						target: "_blank",
						rel: "noopener noreferrer",
						children: [t("Star on GitHub"), /* @__PURE__ */ jsx(ExternalLink, { className: "ms-1.5 h-3.5 w-3.5 shrink-0" })]
					})
				}) : null]
			})
		]
	});
}
function StepStatusIcon({ state }) {
	const t = useT();
	if (state === "completed") return /* @__PURE__ */ jsx("span", {
		className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10",
		"aria-hidden": true,
		children: /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" })
	});
	if (state === "skipped") return /* @__PURE__ */ jsx("span", {
		className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-dashed border-muted-foreground/35 bg-muted/30",
		title: t("Skipped"),
		"aria-hidden": true,
		children: /* @__PURE__ */ jsx(Minus, { className: "h-3.5 w-3.5 text-muted-foreground" })
	});
	return /* @__PURE__ */ jsx("span", {
		className: "h-7 w-7 shrink-0 rounded-full border-2 border-muted-foreground/20 bg-transparent",
		"aria-hidden": true
	});
}
function GroupStatusIcon({ locked, state }) {
	if (locked) return /* @__PURE__ */ jsx("span", {
		className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-muted/40",
		"aria-hidden": true,
		children: /* @__PURE__ */ jsx(Lock, { className: "h-3.5 w-3.5 text-muted-foreground" })
	});
	return /* @__PURE__ */ jsx(StepStatusIcon, { state });
}
function StepStatusNotTrackedIcon() {
	const t = useT();
	return /* @__PURE__ */ jsxs("span", {
		className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-dashed border-muted-foreground/35 bg-muted/25",
		title: t("Not counted in overall progress"),
		children: [/* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: t("Not counted in overall progress")
		}), /* @__PURE__ */ jsx("span", {
			className: "text-[11px] font-medium leading-none text-muted-foreground/80",
			"aria-hidden": true,
			children: "-"
		})]
	});
}
function SubStepRow({ step, projectId, state, countsTowardProgress, isDebugModeOpen, onSkip, skipPending }) {
	const t = useT();
	const fulfilled = state !== "pending";
	const ctaLabel = t(fulfilled ? step.ctaDone ?? "Open" : step.cta);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col gap-3 py-3 sm:flex-row sm:items-stretch sm:gap-3", ONBOARDING_ROW_X),
		children: [/* @__PURE__ */ jsxs("div", {
			className: cn("flex min-w-0 flex-1", ONBOARDING_ICON_GAP),
			children: [/* @__PURE__ */ jsx("div", {
				className: cn(ONBOARDING_ICON_COL, "items-start pt-0.5 sm:items-center sm:self-stretch sm:pt-0"),
				children: countsTowardProgress ? /* @__PURE__ */ jsx(StepStatusIcon, { state }) : /* @__PURE__ */ jsx(StepStatusNotTrackedIcon, {})
			}), /* @__PURE__ */ jsxs("div", {
				className: "min-w-0 flex-1 space-y-0.5",
				children: [
					/* @__PURE__ */ jsxs("span", {
						className: cn("text-[13px] font-medium block", state === "skipped" ? "text-muted-foreground" : "text-foreground"),
						children: [t(step.label), state === "skipped" ? /* @__PURE__ */ jsxs("span", {
							className: "sr-only",
							children: [
								" (",
								t("skipped"),
								")"
							]
						}) : null]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-[12px] text-muted-foreground leading-relaxed",
						children: t(step.hint)
					}),
					isDebugModeOpen && /* @__PURE__ */ jsx("p", {
						className: "text-[10px] text-amber-700/90 dark:text-amber-400/90 font-mono leading-snug pt-1",
						children: step.debug
					})
				]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex w-full shrink-0 items-center justify-end gap-1.5 sm:w-auto sm:self-center sm:ps-0",
			children: [!fulfilled && onSkip ? /* @__PURE__ */ jsx(Button, {
				type: "button",
				variant: "ghost",
				size: "sm",
				className: "h-8 shrink-0 px-2 text-[12px] font-normal text-muted-foreground hover:text-foreground",
				disabled: skipPending,
				onClick: onSkip,
				children: t("Skip")
			}) : null, /* @__PURE__ */ jsx(Button, {
				variant: "outline",
				size: "sm",
				className: cn("h-9 min-w-0 flex-1 gap-1.5 px-3 text-[12px] font-medium sm:h-8 sm:w-auto sm:max-w-[11rem] sm:flex-none", fulfilled ? "text-muted-foreground" : "border-[color-mix(in_srgb,var(--brand-cta)_40%,var(--border))] bg-background text-[var(--brand-cta)] hover:bg-[color-mix(in_srgb,var(--brand-cta)_10%,transparent)] hover:text-[var(--brand-cta)]"),
				asChild: true,
				children: /* @__PURE__ */ jsxs(Link, {
					to: step.to,
					params: {
						projectId,
						..."params" in step ? step.params : void 0
					},
					className: "inline-flex min-w-0 items-center justify-center gap-1.5 sm:justify-start",
					title: ctaLabel,
					children: [/* @__PURE__ */ jsx("span", {
						className: "truncate",
						children: ctaLabel
					}), /* @__PURE__ */ jsx(ChevronRight, { className: "size-3.5 shrink-0 opacity-70" })]
				})
			})]
		})]
	});
}
function AgentConnectStepRow({ projectId, isDebugModeOpen }) {
	const t = useT();
	const projectConnect = useProjectConnectDialog();
	const [state, setState] = useState(() => getOnboardingAgentStepState(projectId));
	useEffect(() => {
		setState(getOnboardingAgentStepState(projectId));
	}, [projectId]);
	const fulfilled = state !== "pending";
	const ctaLabel = t(fulfilled ? ONBOARDING_AGENT_STEP.ctaDone : ONBOARDING_AGENT_STEP.cta);
	const handleSkip = () => {
		markOnboardingAgentStepSkipped(projectId);
		setState("skipped");
	};
	const handleOpen = () => {
		markOnboardingAgentStepDone(projectId);
		setState("completed");
		projectConnect?.openConnect("mcp");
	};
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col gap-3 py-3 sm:flex-row sm:items-stretch sm:gap-3", ONBOARDING_ROW_X),
		children: [/* @__PURE__ */ jsxs("div", {
			className: cn("flex min-w-0 flex-1", ONBOARDING_ICON_GAP),
			children: [/* @__PURE__ */ jsx("div", {
				className: cn(ONBOARDING_ICON_COL, "items-start pt-0.5 sm:items-center sm:self-stretch sm:pt-0"),
				children: /* @__PURE__ */ jsx(StepStatusNotTrackedIcon, {})
			}), /* @__PURE__ */ jsxs("div", {
				className: "min-w-0 flex-1 space-y-0.5",
				children: [
					/* @__PURE__ */ jsxs("span", {
						className: cn("text-[13px] font-medium block", state === "skipped" ? "text-muted-foreground" : "text-foreground"),
						children: [t(ONBOARDING_AGENT_STEP.label), state === "skipped" ? /* @__PURE__ */ jsxs("span", {
							className: "sr-only",
							children: [
								" (",
								t("skipped"),
								")"
							]
						}) : null]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-[12px] text-muted-foreground leading-relaxed",
						children: t(ONBOARDING_AGENT_STEP.hint)
					}),
					isDebugModeOpen && /* @__PURE__ */ jsx("p", {
						className: "text-[10px] text-amber-700/90 dark:text-amber-400/90 font-mono leading-snug pt-1",
						children: ONBOARDING_AGENT_STEP.debug
					})
				]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex w-full shrink-0 items-center justify-end gap-1.5 sm:w-auto sm:self-center sm:ps-0",
			children: [!fulfilled ? /* @__PURE__ */ jsx(Button, {
				type: "button",
				variant: "ghost",
				size: "sm",
				className: "h-8 shrink-0 px-2 text-[12px] font-normal text-muted-foreground hover:text-foreground",
				onClick: handleSkip,
				children: t("Skip")
			}) : null, /* @__PURE__ */ jsxs(Button, {
				type: "button",
				variant: "outline",
				size: "sm",
				className: cn("h-9 min-w-0 flex-1 gap-1.5 px-3 text-[12px] font-medium sm:h-8 sm:w-auto sm:max-w-[11rem] sm:flex-none", fulfilled ? "text-muted-foreground" : "border-[color-mix(in_srgb,var(--brand-cta)_40%,var(--border))] bg-background text-[var(--brand-cta)] hover:bg-[color-mix(in_srgb,var(--brand-cta)_10%,transparent)] hover:text-[var(--brand-cta)]"),
				onClick: handleOpen,
				title: ctaLabel,
				children: [/* @__PURE__ */ jsx("span", {
					className: "truncate",
					children: ctaLabel
				}), /* @__PURE__ */ jsx(ChevronRight, { className: "size-3.5 shrink-0 opacity-70" })]
			})]
		})]
	});
}
function View({ initialData } = {}) {
	const t = useT();
	const { catalog } = useI18n();
	const getStartedTitle = catalog.app.sidebar.onboarding.getStarted;
	const { projectId } = useParams({ strict: false });
	const { data: snapshotFromHook, isLoading } = useProjectOnboardingSnapshot(projectId);
	const snapshot = snapshotFromHook ?? initialData?.snapshot;
	const { isDebugModeOpen } = useDebugMode();
	const { unlockOnboardingLocks } = useDebugOverrides();
	const skipStepMutation = useSkipOnboardingStep(projectId);
	const { progress, completedSteps, totalSteps } = useOnboardingProgressFromSnapshot(snapshot);
	const stepStates = useOnboardingStepStates(snapshot);
	const connectComplete = unlockOnboardingLocks || !!snapshot && ONBOARDING_CONNECT.every((step) => isOnboardingStepDone(snapshot, step.sdkKeys));
	const showSkeleton = isLoading && !snapshot;
	const productBreakdown = useMemo(() => computeOnboardingProductBreakdown(snapshot ?? EMPTY_SNAPSHOT), [snapshot]);
	const [accordionOpenByCategory, setAccordionOpenByCategory] = useState({});
	if (!projectId) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col",
		children: [/* @__PURE__ */ jsx(ServiceHeader, {
			title: getStartedTitle,
			fullWidthBorder: true
		}), /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex w-full min-w-0 max-w-7xl flex-1 flex-col gap-6 px-4 pt-4 pb-4 sm:px-6 sm:pt-6 sm:pb-6 lg:grid lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)] lg:items-start lg:gap-8",
			children: [/* @__PURE__ */ jsx("aside", {
				className: "w-full min-w-0 lg:sticky lg:top-4 lg:z-10",
				children: /* @__PURE__ */ jsx(OnboardingProgressPanel, {
					projectId,
					progress,
					completedSteps,
					totalSteps,
					showSkeleton,
					productBreakdown,
					connectComplete
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "min-w-0 flex flex-col",
				children: [/* @__PURE__ */ jsxs("div", {
					className: CARD_SHELL,
					children: [/* @__PURE__ */ jsxs("div", {
						className: "px-4 py-3 border-b border-border bg-muted/10",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
							children: t(CONNECT_SECTION.title)
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-muted-foreground mt-1.5 leading-snug",
							children: t(CONNECT_SECTION.description)
						})]
					}), /* @__PURE__ */ jsxs("ul", {
						className: "divide-y divide-border",
						children: [ONBOARDING_CONNECT.map((step) => {
							return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(SubStepRow, {
								step,
								projectId,
								state: stepStates.get(step.id) ?? "pending",
								countsTowardProgress: true,
								isDebugModeOpen,
								onSkip: () => skipStepMutation.mutate(step.sdkKeys),
								skipPending: skipStepMutation.isPending
							}) }, step.id);
						}), /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(AgentConnectStepRow, {
							projectId,
							isDebugModeOpen
						}) }, ONBOARDING_AGENT_STEP.id)]
					})]
				}), ONBOARDING_PRODUCT_CATEGORIES.map((category) => {
					const categoryGroupIds = category.groups.map((g) => g.id);
					const openForCategory = accordionOpenByCategory[category.id] ?? [];
					const hasAnyOpen = openForCategory.length > 0;
					return /* @__PURE__ */ jsxs("section", {
						className: "mt-10 space-y-3",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-start justify-between gap-3 px-1",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground min-w-0",
								children: t(category.label)
							}), connectComplete && categoryGroupIds.length > 1 ? /* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "ghost",
								size: "sm",
								className: "h-auto min-h-0 shrink-0 py-1 -me-1 px-2 text-[11px] font-medium text-muted-foreground hover:text-foreground",
								onClick: () => {
									setAccordionOpenByCategory((prev) => ({
										...prev,
										[category.id]: hasAnyOpen ? [] : categoryGroupIds
									}));
								},
								"aria-expanded": hasAnyOpen,
								"aria-label": hasAnyOpen ? `Collapse all ${category.label} sections` : `Expand all ${category.label} sections`,
								children: hasAnyOpen ? t("Collapse all") : t("Expand all")
							}) : null]
						}), /* @__PURE__ */ jsx(Accordion, {
							type: "multiple",
							value: openForCategory,
							onValueChange: (next) => {
								setAccordionOpenByCategory((prev) => ({
									...prev,
									[category.id]: next
								}));
							},
							className: "flex flex-col gap-4",
							children: category.groups.map((group) => {
								const subs = group.subSteps;
								const trackedSubs = subs.filter((s) => subStepCountsTowardProgress(s));
								const trackedSubIds = trackedSubs.map((s) => s.id);
								const doneInGroup = trackedSubs.filter((s) => (stepStates.get(s.id) ?? "pending") !== "pending").length;
								const trackedTotal = trackedSubs.length;
								const groupState = getOnboardingGroupState(trackedSubIds, stepStates);
								const locked = !connectComplete;
								const item = /* @__PURE__ */ jsxs(AccordionItem, {
									value: group.id,
									disabled: locked,
									className: cn("rounded-xl border border-border bg-card/50 overflow-hidden", "last:border-b last:border-border", locked && "bg-muted/20 border-muted-foreground/15"),
									children: [/* @__PURE__ */ jsx(AccordionTrigger, {
										className: cn("items-start py-4 hover:no-underline", ONBOARDING_ROW_X, "[&>svg]:mt-1.5 [&>svg]:shrink-0", locked ? "cursor-not-allowed" : "cursor-pointer"),
										children: /* @__PURE__ */ jsxs("div", {
											className: cn("flex min-w-0 flex-1 items-start", ONBOARDING_ICON_GAP),
											children: [/* @__PURE__ */ jsx("div", {
												className: cn(ONBOARDING_ICON_COL, "pt-0.5"),
												children: /* @__PURE__ */ jsx(GroupStatusIcon, {
													locked,
													state: groupState
												})
											}), /* @__PURE__ */ jsxs("div", {
												className: "flex min-w-0 flex-1 items-start justify-between gap-4",
												children: [/* @__PURE__ */ jsxs("div", {
													className: "min-w-0 flex-1 flex flex-col gap-1.5",
													children: [/* @__PURE__ */ jsxs("span", {
														className: "flex flex-wrap items-baseline gap-2 min-w-0",
														children: [/* @__PURE__ */ jsx("span", {
															className: "text-[15px] font-semibold tracking-tight text-foreground leading-snug",
															children: t(group.label)
														}), group.comingSoon ? /* @__PURE__ */ jsx(Badge, {
															variant: "info",
															className: "text-[10px] shrink-0",
															children: t("Soon")
														}) : null]
													}), /* @__PURE__ */ jsx("p", {
														className: "text-[13px] text-muted-foreground leading-relaxed line-clamp-4 m-0",
														children: t(group.description)
													})]
												}), trackedTotal > 0 ? /* @__PURE__ */ jsxs("span", {
													className: "flex shrink-0 items-center pt-0.5 text-[11px] font-medium text-muted-foreground tabular-nums",
													children: [
														doneInGroup,
														"/",
														trackedTotal
													]
												}) : null]
											})]
										})
									}), /* @__PURE__ */ jsx(AccordionContent, {
										className: "border-t border-border bg-muted/5 pb-0",
										children: /* @__PURE__ */ jsx("ul", {
											className: "divide-y divide-border",
											children: subs.map((sub) => {
												return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(SubStepRow, {
													step: sub,
													projectId,
													state: stepStates.get(sub.id) ?? "pending",
													countsTowardProgress: subStepCountsTowardProgress(sub),
													isDebugModeOpen,
													onSkip: () => skipStepMutation.mutate(sub.sdkKeys),
													skipPending: skipStepMutation.isPending
												}) }, sub.id);
											})
										})
									})]
								}, group.id);
								return locked ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
									asChild: true,
									children: item
								}), /* @__PURE__ */ jsx(TooltipContent, {
									side: "top",
									className: "max-w-xs text-balance",
									children: t("Connect your app first.")
								})] }, group.id) : item;
							})
						})]
					}, category.id);
				})]
			})]
		})]
	});
}
function OnboardingPage() {
	const loaderData = Route$1.useLoaderData();
	return /* @__PURE__ */ jsx(View, { initialData: loaderData?.snapshot ? { snapshot: loaderData.snapshot } : void 0 });
}
export { OnboardingPage as component };
