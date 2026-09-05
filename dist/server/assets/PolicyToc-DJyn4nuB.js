import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { n as getRelatedPolicyLinks } from "./policies-DpEX8qSM.js";
import { n as policySidebarLinkClassName, t as PolicySidebarSection } from "./PolicySidebarNav-DoDWiBHs.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
function PolicyRelatedLinks({ current, className, embedded = false }) {
	const t = useT();
	const location = useLocation();
	const { features } = useConsoleProfile();
	const links = getRelatedPolicyLinks(current, features.marketing);
	if (links.length === 0) return null;
	const linkClassName = (isActive, embeddedLink) => embeddedLink ? policySidebarLinkClassName(isActive) : cn("inline-flex rounded-md border border-border bg-card/50 px-3 py-1.5 text-[13px] font-medium leading-5 transition-colors", isActive ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent/50 hover:text-foreground");
	const linkList = /* @__PURE__ */ jsx("ul", {
		className: embedded ? "space-y-0.5" : "flex flex-wrap gap-2",
		children: links.map((link) => {
			const isActive = !link.external && location.pathname === link.path;
			return /* @__PURE__ */ jsx("li", { children: link.external ? /* @__PURE__ */ jsx("a", {
				href: link.href,
				target: "_blank",
				rel: "noopener noreferrer",
				className: linkClassName(false, embedded),
				children: t(link.label)
			}) : /* @__PURE__ */ jsx(Link, {
				to: link.path,
				className: linkClassName(isActive, embedded),
				children: t(link.label)
			}) }, link.slug);
		})
	});
	if (embedded) return /* @__PURE__ */ jsx(PolicySidebarSection, {
		title: t("Related policies"),
		ariaLabel: t("Related policies"),
		className,
		children: linkList
	});
	return /* @__PURE__ */ jsxs("nav", {
		"aria-label": t("Related policies"),
		className,
		children: [/* @__PURE__ */ jsx("p", {
			className: "mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
			children: t("Related policies")
		}), linkList]
	});
}
function PolicyToc({ items, currentPolicy, className }) {
	const t = useT();
	const [activeId, setActiveId] = useState(items[0]?.id ?? "");
	useEffect(() => {
		if (items.length === 0) return;
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
			if (visible[0]?.target.id) setActiveId(visible[0].target.id);
		}, {
			rootMargin: "-20% 0px -60% 0px",
			threshold: [
				0,
				.25,
				.5,
				1
			]
		});
		for (const item of items) {
			const element = document.getElementById(item.id);
			if (element) observer.observe(element);
		}
		return () => observer.disconnect();
	}, [items]);
	if (items.length === 0 && !currentPolicy) return null;
	return /* @__PURE__ */ jsx("aside", {
		className: cn("sticky top-6 z-10 hidden max-h-[calc(100dvh-3rem)] self-start overflow-y-auto lg:block", className),
		children: /* @__PURE__ */ jsxs("div", {
			className: "space-y-8 pe-2",
			children: [items.length > 0 ? /* @__PURE__ */ jsx(PolicySidebarSection, {
				title: t("On this page"),
				ariaLabel: t("Table of contents"),
				children: /* @__PURE__ */ jsx("ul", {
					className: "space-y-0.5",
					children: items.map((item) => /* @__PURE__ */ jsx("li", {
						className: "min-w-0",
						children: /* @__PURE__ */ jsx("a", {
							href: `#${item.id}`,
							title: t(item.label),
							className: policySidebarLinkClassName(activeId === item.id),
							children: t(item.label)
						})
					}, item.id))
				})
			}) : null, currentPolicy ? /* @__PURE__ */ jsx(PolicyRelatedLinks, {
				current: currentPolicy,
				embedded: true
			}) : null]
		})
	});
}
export { PolicyRelatedLinks as n, PolicyToc as t };
