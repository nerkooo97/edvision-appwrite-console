import { t as cn } from "./utils-DoqqkI3X.js";
import { jsx, jsxs } from "react/jsx-runtime";
var variants = {
	hero: {
		left: cn("absolute -start-[42%] bottom-[-32%] h-[480px] w-[820px]", "bg-[radial-gradient(ellipse_at_center,rgba(253,54,110,0.2)_0%,rgba(253,54,110,0.07)_38%,transparent_72%)]", "dark:bg-[radial-gradient(ellipse_at_center,rgba(253,54,110,0.12)_0%,rgba(253,54,110,0.04)_38%,transparent_72%)]", "sm:-start-[38%] sm:h-[560px] sm:w-[980px]", "lg:-start-[36%] lg:h-[640px] lg:w-[1120px]"),
		right: cn("absolute -end-[44%] bottom-[-34%] h-[500px] w-[840px]", "bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.17)_0%,rgba(124,103,254,0.06)_40%,transparent_74%)]", "dark:bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.11)_0%,rgba(124,103,254,0.04)_40%,transparent_74%)]", "sm:-end-[40%] sm:h-[580px] sm:w-[1000px]", "lg:-end-[38%] lg:h-[660px] lg:w-[1140px]")
	},
	pricing: {
		left: cn("absolute -start-[52%] top-1/2 h-[780px] w-[1360px] -translate-y-1/2", "bg-[radial-gradient(ellipse_at_center,rgba(253,54,110,0.18)_0%,rgba(253,54,110,0.06)_24%,transparent_58%)]", "dark:bg-[radial-gradient(ellipse_at_center,rgba(253,54,110,0.11)_0%,rgba(253,54,110,0.035)_24%,transparent_58%)]", "sm:-start-[48%] sm:h-[920px] sm:w-[1620px]", "lg:-start-[46%] lg:h-[1040px] lg:w-[1860px]"),
		right: cn("absolute -end-[52%] top-1/2 h-[800px] w-[1380px] -translate-y-1/2", "bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.15)_0%,rgba(124,103,254,0.055)_26%,transparent_60%)]", "dark:bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.095)_0%,rgba(124,103,254,0.035)_26%,transparent_60%)]", "sm:-end-[48%] sm:h-[940px] sm:w-[1640px]", "lg:-end-[46%] lg:h-[1060px] lg:w-[1880px]")
	},
	docs: {
		left: cn("absolute -start-[42%] bottom-[-32%] h-[480px] w-[820px]", "bg-[radial-gradient(ellipse_at_center,rgba(253,54,110,0.2)_0%,rgba(253,54,110,0.07)_38%,transparent_72%)]", "dark:bg-[radial-gradient(ellipse_at_center,rgba(253,54,110,0.12)_0%,rgba(253,54,110,0.04)_38%,transparent_72%)]", "sm:-start-[38%] sm:h-[560px] sm:w-[980px]", "lg:-start-[36%] lg:h-[640px] lg:w-[1120px]"),
		right: cn("absolute -end-[40%] top-[-28%] h-[500px] w-[840px]", "bg-[radial-gradient(ellipse_at_center,rgba(133,219,216,0.17)_0%,rgba(133,219,216,0.06)_40%,transparent_74%)]", "dark:bg-[radial-gradient(ellipse_at_center,rgba(133,219,216,0.11)_0%,rgba(133,219,216,0.04)_40%,transparent_74%)]", "sm:-end-[36%] sm:top-[-30%] sm:h-[580px] sm:w-[1000px]", "lg:-end-[34%] lg:top-[-32%] lg:h-[660px] lg:w-[1140px]")
	},
	partners: {
		left: cn("absolute -start-[42%] bottom-[-32%] h-[480px] w-[820px]", "bg-[radial-gradient(ellipse_at_center,rgba(254,149,103,0.17)_0%,rgba(254,149,103,0.06)_38%,transparent_72%)]", "dark:bg-[radial-gradient(ellipse_at_center,rgba(254,149,103,0.11)_0%,rgba(254,149,103,0.04)_38%,transparent_72%)]", "sm:-start-[38%] sm:h-[560px] sm:w-[980px]", "lg:-start-[36%] lg:h-[640px] lg:w-[1120px]"),
		right: cn("absolute -end-[40%] top-[-30%] h-[500px] w-[860px]", "bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.18)_0%,rgba(124,103,254,0.06)_40%,transparent_74%)]", "dark:bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.11)_0%,rgba(124,103,254,0.04)_40%,transparent_74%)]", "sm:-end-[36%] sm:top-[-32%] sm:h-[580px] sm:w-[1020px]", "lg:-end-[34%] lg:top-[-34%] lg:h-[660px] lg:w-[1160px]")
	},
	testimonials: {
		left: cn("absolute -start-[44%] bottom-[-34%] h-[500px] w-[860px]", "bg-[radial-gradient(ellipse_at_center,rgba(253,54,110,0.18)_0%,rgba(253,54,110,0.06)_38%,transparent_72%)]", "dark:bg-[radial-gradient(ellipse_at_center,rgba(253,54,110,0.11)_0%,rgba(253,54,110,0.04)_38%,transparent_72%)]", "sm:-start-[40%] sm:h-[580px] sm:w-[1020px]", "lg:-start-[38%] lg:h-[640px] lg:w-[1160px]"),
		right: cn("absolute -end-[44%] bottom-[-34%] h-[520px] w-[880px]", "bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.16)_0%,rgba(124,103,254,0.055)_40%,transparent_74%)]", "dark:bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.1)_0%,rgba(124,103,254,0.035)_40%,transparent_74%)]", "sm:-end-[40%] sm:h-[600px] sm:w-[1040px]", "lg:-end-[38%] lg:h-[660px] lg:w-[1180px]")
	}
};
var singleSecondaryLightGradients = {
	purple: cn("bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.16)_0%,rgba(124,103,254,0.055)_36%,transparent_70%)]", "dark:bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.1)_0%,rgba(124,103,254,0.035)_36%,transparent_70%)]"),
	teal: cn("bg-[radial-gradient(ellipse_at_center,rgba(133,219,216,0.16)_0%,rgba(133,219,216,0.055)_36%,transparent_70%)]", "dark:bg-[radial-gradient(ellipse_at_center,rgba(133,219,216,0.1)_0%,rgba(133,219,216,0.035)_36%,transparent_70%)]"),
	orange: cn("bg-[radial-gradient(ellipse_at_center,rgba(254,149,103,0.16)_0%,rgba(254,149,103,0.055)_36%,transparent_70%)]", "dark:bg-[radial-gradient(ellipse_at_center,rgba(254,149,103,0.1)_0%,rgba(254,149,103,0.035)_36%,transparent_70%)]")
};
var singleSecondaryLightHorizontal = {
	left: cn("absolute -start-[36%]", "sm:-start-[32%]", "lg:-start-[28%]"),
	right: cn("absolute -end-[36%]", "sm:-end-[32%]", "lg:-end-[28%]")
};
var singleSecondaryLightSize = cn("h-[620px] w-[980px]", "sm:h-[720px] sm:w-[1120px]", "lg:h-[800px] lg:w-[1240px]");
var singleSecondaryLightAlign = {
	center: "top-1/2 -translate-y-1/2",
	top: "top-[-26%]"
};
var brandLightGradients = {
	pink: cn("bg-[radial-gradient(ellipse_at_center,rgba(253,54,110,0.2)_0%,rgba(253,54,110,0.07)_38%,transparent_72%)]", "dark:bg-[radial-gradient(ellipse_at_center,rgba(253,54,110,0.12)_0%,rgba(253,54,110,0.04)_38%,transparent_72%)]"),
	purple: cn("bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.17)_0%,rgba(124,103,254,0.06)_38%,transparent_72%)]", "dark:bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.11)_0%,rgba(124,103,254,0.04)_38%,transparent_72%)]"),
	teal: cn("bg-[radial-gradient(ellipse_at_center,rgba(133,219,216,0.17)_0%,rgba(133,219,216,0.06)_38%,transparent_72%)]", "dark:bg-[radial-gradient(ellipse_at_center,rgba(133,219,216,0.11)_0%,rgba(133,219,216,0.04)_38%,transparent_72%)]"),
	orange: cn("bg-[radial-gradient(ellipse_at_center,rgba(254,149,103,0.17)_0%,rgba(254,149,103,0.06)_38%,transparent_72%)]", "dark:bg-[radial-gradient(ellipse_at_center,rgba(254,149,103,0.11)_0%,rgba(254,149,103,0.04)_38%,transparent_72%)]")
};
var brandLightPositionClasses = {
	top: cn("absolute top-[-32%] left-1/2 h-[560px] w-[min(1200px,140%)] -translate-x-1/2", "sm:top-[-34%] sm:h-[640px]"),
	bottom: cn("absolute bottom-[-32%] left-1/2 h-[560px] w-[min(1200px,140%)] -translate-x-1/2", "sm:bottom-[-34%] sm:h-[640px]")
};
function SectionBrandLight({ tone = "pink", position = "top" }) {
	return /* @__PURE__ */ jsx("div", {
		className: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
		"aria-hidden": true,
		children: /* @__PURE__ */ jsx("div", { className: cn(brandLightPositionClasses[position], brandLightGradients[tone]) })
	});
}
function SectionDottedBackground({ className }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle,var(--border)_1px,transparent_1px)] bg-[length:18px_18px]", className),
		"aria-hidden": true
	});
}
function SectionSoftLight({ tone = "purple", position = "right", align = "center", className }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", className),
		"aria-hidden": true,
		children: /* @__PURE__ */ jsx("div", { className: cn(singleSecondaryLightHorizontal[position], singleSecondaryLightSize, singleSecondaryLightAlign[align], singleSecondaryLightGradients[tone]) })
	});
}
var tileLights = {
	mcp: cn("absolute -start-[36%] top-[-32%] h-[300px] w-[440px]", "bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.15)_0%,rgba(124,103,254,0.055)_42%,transparent_74%)]", "dark:bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.05)_0%,rgba(124,103,254,0.016)_42%,transparent_74%)]"),
	skills: cn("absolute -end-[36%] top-[-32%] h-[300px] w-[440px]", "bg-[radial-gradient(ellipse_at_center,rgba(253,54,110,0.15)_0%,rgba(253,54,110,0.055)_42%,transparent_74%)]", "dark:bg-[radial-gradient(ellipse_at_center,rgba(253,54,110,0.05)_0%,rgba(253,54,110,0.016)_42%,transparent_74%)]"),
	plugins: cn("absolute -start-[34%] bottom-[6%] h-[280px] w-[420px]", "bg-[radial-gradient(ellipse_at_center,rgba(133,219,216,0.15)_0%,rgba(133,219,216,0.055)_42%,transparent_74%)]", "dark:bg-[radial-gradient(ellipse_at_center,rgba(133,219,216,0.05)_0%,rgba(133,219,216,0.016)_42%,transparent_74%)]"),
	integrations: cn("absolute -end-[34%] bottom-[10%] h-[280px] w-[420px]", "bg-[radial-gradient(ellipse_at_center,rgba(254,149,103,0.15)_0%,rgba(254,149,103,0.055)_42%,transparent_74%)]", "dark:bg-[radial-gradient(ellipse_at_center,rgba(254,149,103,0.05)_0%,rgba(254,149,103,0.016)_42%,transparent_74%)]")
};
function AiTileSoftLight({ tone }) {
	return /* @__PURE__ */ jsx("div", {
		className: "pointer-events-none absolute inset-0 overflow-visible",
		"aria-hidden": true,
		children: /* @__PURE__ */ jsx("div", { className: tileLights[tone] })
	});
}
function ProductBentoSoftLights({ blend = false, expanded = false }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 group-hover:opacity-70 motion-reduce:transition-none motion-reduce:group-hover:opacity-100", blend ? cn("overflow-visible", expanded ? "bg-[radial-gradient(ellipse_120%_100%_at_50%_50%,color-mix(in_srgb,var(--foreground)_6%,transparent)_0%,transparent_75%)]" : "bg-[radial-gradient(ellipse_at_50%_42%,color-mix(in_srgb,var(--foreground)_6%,transparent)_0%,transparent_70%)]") : "overflow-hidden rounded-lg bg-[radial-gradient(ellipse_at_0%_0%,color-mix(in_srgb,var(--foreground)_4%,transparent)_0%,transparent_62%)]"),
		"aria-hidden": true
	});
}
function ProductBentoHoverLight({ tall = false, unclipped = false, productPage = false }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("product-bento-hover-light pointer-events-none absolute inset-0 invisible opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-70 motion-reduce:transition-none motion-reduce:invisible motion-reduce:group-hover:invisible motion-reduce:group-hover:opacity-0 dark:group-hover:opacity-55", unclipped ? "overflow-visible" : "overflow-hidden"),
		"aria-hidden": true,
		children: [/* @__PURE__ */ jsx("div", { className: cn("absolute bg-[radial-gradient(ellipse_at_center,rgba(133,219,216,0.09)_0%,rgba(133,219,216,0.03)_45%,transparent_78%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(133,219,216,0.06)_0%,rgba(133,219,216,0.018)_45%,transparent_78%)]", productPage ? "-start-[18%] top-[0%] h-full w-[136%]" : tall ? "-start-[28%] top-[-28%] h-[440px] w-[680px]" : "-start-[38%] top-[-38%] h-[300px] w-[440px]") }), /* @__PURE__ */ jsx("div", { className: cn("absolute bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.07)_0%,rgba(124,103,254,0.022)_45%,transparent_78%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(124,103,254,0.05)_0%,rgba(124,103,254,0.015)_45%,transparent_78%)]", productPage ? "-end-[18%] bottom-[0%] h-full w-[136%]" : tall ? "-end-[28%] bottom-[-28%] h-[400px] w-[640px]" : "-end-[38%] bottom-[-38%] h-[280px] w-[420px]") })]
	});
}
function HomeSoftLights({ variant = "hero", className }) {
	const lights = variants[variant];
	return /* @__PURE__ */ jsxs("div", {
		className: cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", className),
		"aria-hidden": true,
		children: [/* @__PURE__ */ jsx("div", { className: lights.left }), /* @__PURE__ */ jsx("div", { className: lights.right })]
	});
}
export { SectionBrandLight as a, ProductBentoSoftLights as i, HomeSoftLights as n, SectionDottedBackground as o, ProductBentoHoverLight as r, SectionSoftLight as s, AiTileSoftLight as t };
