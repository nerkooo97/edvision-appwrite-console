import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { n as frameworkHasStaticAdapter, r as getFrameworkAdapterDefaults, t as frameworkHasSsrAdapter } from "./adapter-defaults-DTi3IaNG.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { i as AccordionItem, n as AccordionContent, o as AccordionTrigger, t as Accordion } from "./accordion-DmQmnCa5.js";
import { n as useWizard } from "./WizardContext-BjDTRlef.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { Info, RotateCcw } from "lucide-react";
const START_COMMAND_FIELD_TOOLTIP = "Shell command that starts your SSR app after deploy (for example, npm run start). If left empty, your framework default is used. This field is optional.";
function StartCommandLabel({ htmlFor, trailing, className }) {
	const t = useT();
	const label = /* @__PURE__ */ jsxs(Label, {
		htmlFor,
		className: cn("text-[13px] flex w-full items-center gap-1.5", className),
		children: [/* @__PURE__ */ jsxs("span", { children: [t("Start command"), /* @__PURE__ */ jsxs("span", {
			className: "font-normal text-muted-foreground",
			children: [" ", t("(optional)")]
		})] }), /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx("button", {
				type: "button",
				className: "inline-flex text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded",
				"aria-label": t("About start command (optional)"),
				children: /* @__PURE__ */ jsx(Info, { className: "h-3.5 w-3.5" })
			})
		}), /* @__PURE__ */ jsx(TooltipContent, {
			side: "top",
			className: "max-w-[260px] z-[200] text-[12px]",
			children: t(START_COMMAND_FIELD_TOOLTIP)
		})] })]
	});
	if (trailing) return /* @__PURE__ */ jsxs("div", {
		className: "flex w-full items-center justify-between gap-2",
		children: [label, trailing]
	});
	return /* @__PURE__ */ jsx("div", {
		className: "w-full",
		children: label
	});
}
function BuildSettings({ installCommand, buildCommand, outputDirectory, startCommand = "", fallbackFile = "", onInstallCommandChange, onBuildCommandChange, onOutputDirectoryChange, onStartCommandChange, onFallbackFileChange, frameworkKey, disabled = false, className, defaultOpen = false }) {
	const t = useT();
	const { getFramework, getFrameworkDefaults } = useWizard();
	const framework = frameworkKey ? getFramework(frameworkKey) : void 0;
	const showStartCommand = frameworkHasSsrAdapter(framework);
	const isSsrOnlyFramework = !!framework && !frameworkHasStaticAdapter(framework);
	const showFallbackFile = !!onFallbackFileChange && !isSsrOnlyFramework;
	const fallbackDisabled = disabled || !frameworkKey;
	const staticDefaults = useMemo(() => getFrameworkAdapterDefaults(framework, "static"), [framework]);
	const [defaults, setDefaults] = useState({
		installCommand: "npm install",
		buildCommand: "npm run build",
		outputDirectory: ".output",
		fallbackFile: ""
	});
	useEffect(() => {
		if (frameworkKey) {
			const createDefaults = getFrameworkDefaults(frameworkKey);
			setDefaults({
				installCommand: createDefaults.installCommand,
				buildCommand: createDefaults.buildCommand,
				outputDirectory: createDefaults.outputDirectory,
				fallbackFile: staticDefaults.fallbackFile
			});
		}
	}, [
		frameworkKey,
		getFrameworkDefaults,
		staticDefaults.fallbackFile
	]);
	const handleResetInstall = () => {
		onInstallCommandChange(defaults.installCommand);
	};
	const handleResetBuild = () => {
		onBuildCommandChange(defaults.buildCommand);
	};
	const handleResetOutput = () => {
		onOutputDirectoryChange(defaults.outputDirectory);
	};
	const handleResetFallback = () => {
		onFallbackFileChange?.(defaults.fallbackFile);
	};
	const isInstallModified = installCommand !== defaults.installCommand;
	const isBuildModified = buildCommand !== defaults.buildCommand;
	const isOutputModified = outputDirectory !== defaults.outputDirectory;
	const isFallbackModified = fallbackFile !== defaults.fallbackFile;
	return /* @__PURE__ */ jsx(Accordion, {
		type: "single",
		collapsible: true,
		defaultValue: defaultOpen ? "build-settings" : void 0,
		className: cn("rounded-xl border border-border bg-card/50 overflow-hidden", className),
		children: /* @__PURE__ */ jsxs(AccordionItem, {
			value: "build-settings",
			className: "border-none",
			children: [/* @__PURE__ */ jsx(AccordionTrigger, {
				className: "px-6 py-4 hover:no-underline hover:bg-transparent cursor-pointer",
				children: /* @__PURE__ */ jsx("span", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Build")
				})
			}), /* @__PURE__ */ jsx(AccordionContent, {
				className: "px-6 pb-4 pt-0 border-t border-border",
				children: /* @__PURE__ */ jsxs("div", {
					className: "space-y-4 pt-4",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "install-command",
									className: "text-[13px]",
									children: t("Install command")
								}), isInstallModified && /* @__PURE__ */ jsxs(Button, {
									type: "button",
									variant: "ghost",
									size: "sm",
									onClick: handleResetInstall,
									disabled,
									className: "h-6 px-2 text-[11px] text-muted-foreground hover:text-foreground",
									children: [/* @__PURE__ */ jsx(RotateCcw, { className: "me-1 h-3 w-3" }), t("Reset")]
								})]
							}), /* @__PURE__ */ jsx(Input, {
								id: "install-command",
								value: installCommand,
								onChange: (e) => onInstallCommandChange(e.target.value),
								placeholder: defaults.installCommand,
								disabled,
								className: "h-9 font-mono text-[13px]"
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "build-command",
									className: "text-[13px]",
									children: t("Build command")
								}), isBuildModified && /* @__PURE__ */ jsxs(Button, {
									type: "button",
									variant: "ghost",
									size: "sm",
									onClick: handleResetBuild,
									disabled,
									className: "h-6 px-2 text-[11px] text-muted-foreground hover:text-foreground",
									children: [/* @__PURE__ */ jsx(RotateCcw, { className: "me-1 h-3 w-3" }), t("Reset")]
								})]
							}), /* @__PURE__ */ jsx(Input, {
								id: "build-command",
								value: buildCommand,
								onChange: (e) => onBuildCommandChange(e.target.value),
								placeholder: defaults.buildCommand,
								disabled,
								className: "h-9 font-mono text-[13px]"
							})]
						}),
						showStartCommand && onStartCommandChange && /* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsx(StartCommandLabel, { htmlFor: "start-command" }), /* @__PURE__ */ jsx(Input, {
								id: "start-command",
								value: startCommand,
								onChange: (e) => onStartCommandChange(e.target.value),
								placeholder: t("Enter start command"),
								disabled,
								className: "h-9 font-mono text-[13px]"
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "output-directory",
									className: "text-[13px]",
									children: t("Output directory")
								}), isOutputModified && /* @__PURE__ */ jsxs(Button, {
									type: "button",
									variant: "ghost",
									size: "sm",
									onClick: handleResetOutput,
									disabled,
									className: "h-6 px-2 text-[11px] text-muted-foreground hover:text-foreground",
									children: [/* @__PURE__ */ jsx(RotateCcw, { className: "me-1 h-3 w-3" }), t("Reset")]
								})]
							}), /* @__PURE__ */ jsx(Input, {
								id: "output-directory",
								value: outputDirectory,
								onChange: (e) => onOutputDirectoryChange(e.target.value),
								placeholder: defaults.outputDirectory,
								disabled,
								className: "h-9 font-mono text-[13px]"
							})]
						}),
						showFallbackFile && /* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "fallback-file",
										className: "text-[13px]",
										children: t("Fallback file")
									}), isFallbackModified && /* @__PURE__ */ jsxs(Button, {
										type: "button",
										variant: "ghost",
										size: "sm",
										onClick: handleResetFallback,
										disabled,
										className: "h-6 px-2 text-[11px] text-muted-foreground hover:text-foreground",
										children: [/* @__PURE__ */ jsx(RotateCcw, { className: "me-1 h-3 w-3" }), t("Reset")]
									})]
								}),
								/* @__PURE__ */ jsx(Input, {
									id: "fallback-file",
									value: fallbackFile,
									onChange: (e) => onFallbackFileChange?.(e.target.value),
									placeholder: defaults.fallbackFile || "index.html",
									disabled: fallbackDisabled,
									className: "h-9 font-mono text-[13px]"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-muted-foreground",
									children: !frameworkKey ? t("Select a framework to configure the fallback file") : t("File to serve for routes that don't match any static files")
								})
							]
						})
					]
				})
			})]
		})
	});
}
export { BuildSettings as t };
