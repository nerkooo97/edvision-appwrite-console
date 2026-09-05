import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { a as DropdownMenuItem, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import { t as McpIcon } from "./McpIcon-D1Jv-oq2.js";
import { n as useProjectConnectDialog } from "./ProjectConnectDialogContext-DgcmISfV.js";
import { a as openAIChatDeeplink, n as getAIChatIDEs, t as generateAIChatDeeplink } from "./ide-Ch0cGqVM.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { BrainCircuit, ChevronDown, Copy, ExternalLink } from "lucide-react";
const FIX_WITH_AGENT_DROPDOWN_Z = "z-[10050]";
function FixWithAgentDropdown({ prompt, align = "end", className, hideLabelOnSmallScreens = false }) {
	const t = useT();
	const aiChatIDEs = getAIChatIDEs();
	const projectConnect = useProjectConnectDialog();
	const handleOpenInIDE = (ide) => {
		const deeplink = generateAIChatDeeplink(ide, prompt);
		if (deeplink) {
			openAIChatDeeplink(deeplink);
			toast.success(`Opening ${ide.name}...`);
		}
	};
	const handleCopyPrompt = async () => {
		try {
			await navigator.clipboard.writeText(prompt);
			toast.success(t("Prompt copied to clipboard"));
		} catch {
			toast.error(t("Failed to copy prompt"));
		}
	};
	return /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ jsxs(Button, {
			variant: "outline",
			size: "sm",
			className: cn("gap-1.5", className),
			disabled: !prompt.trim(),
			children: [
				/* @__PURE__ */ jsx(BrainCircuit, { className: "h-4 w-4 shrink-0" }),
				/* @__PURE__ */ jsx("span", {
					className: hideLabelOnSmallScreens ? "hidden sm:inline" : void 0,
					children: t("Fix with an Agent")
				}),
				/* @__PURE__ */ jsx(ChevronDown, { className: "h-3 w-3 shrink-0" })
			]
		})
	}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
		align,
		className: cn("min-w-[180px]", FIX_WITH_AGENT_DROPDOWN_Z),
		children: [
			/* @__PURE__ */ jsxs(DropdownMenuItem, {
				onClick: () => void handleCopyPrompt(),
				children: [/* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
					className: "ms-2",
					children: t("Copy prompt")
				})]
			}),
			projectConnect ? /* @__PURE__ */ jsxs(DropdownMenuItem, {
				onClick: () => projectConnect.openConnect("mcp"),
				children: [/* @__PURE__ */ jsx(McpIcon, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
					className: "ms-2",
					children: t("Install Appwrite MCP")
				})]
			}) : null,
			/* @__PURE__ */ jsx("div", { className: "my-1 h-px bg-border" }),
			aiChatIDEs.map((ide) => /* @__PURE__ */ jsxs(DropdownMenuItem, {
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
		]
	})] });
}
export { FixWithAgentDropdown as t };
