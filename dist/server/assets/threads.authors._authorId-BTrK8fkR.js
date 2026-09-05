import "./utils-DoqqkI3X.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import "./translate-DZcqveGn.js";
import "./constants-CL7SLzjY.js";
import "./constants-B5zUV45z.js";
import "./social-stats-X1CQqP0k.js";
import "./date-format-BD1j7PxK.js";
import "./page-direction-CnacIIOa.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import "./popover-BjTNxuf9.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import "./DateTooltip-wgOggQgS.js";
import { a as BreadcrumbPage, i as BreadcrumbList, n as BreadcrumbItem, o as BreadcrumbSeparator, r as BreadcrumbLink, t as Breadcrumb } from "./breadcrumb-DJFLXbij.js";
import "./HomeSoftLights-BsLce5-B.js";
import "./parse-params-BpMT2Ilk.js";
import "./og-image-DdV5MU0-.js";
import { l as cleanThreadRoleLabel } from "./route-meta-C-NVlcqg.js";
import { t as Route$1 } from "./threads.authors._authorId-BYorlO5O.js";
import "./MarketingSections-Dg1QJnZV.js";
import { t as ThreadsPreFooter } from "./ThreadsPreFooter-VaWJ0p_4.js";
import { t as ThreadCard } from "./ThreadCard-DYFrS_-A.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
function AuthorView({ author, threads, total }) {
	const roles = Array.from(new Set((author.roles ?? []).map(cleanThreadRoleLabel).filter(Boolean)));
	return /* @__PURE__ */ jsxs("div", {
		className: "relative overflow-x-hidden bg-background",
		children: [/* @__PURE__ */ jsx("section", {
			className: "border-b border-border py-10 sm:py-14",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6",
				children: [
					/* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "sm",
						className: "-ms-2 mb-6 h-8 px-2",
						asChild: true,
						children: /* @__PURE__ */ jsxs(Link, {
							to: "/threads",
							children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "me-1.5 h-4 w-4" }), "Back"]
						})
					}),
					/* @__PURE__ */ jsx(Breadcrumb, { children: /* @__PURE__ */ jsxs(BreadcrumbList, { children: [
						/* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, {
							asChild: true,
							children: /* @__PURE__ */ jsx(Link, {
								to: "/threads",
								className: "cursor-pointer",
								children: "Threads"
							})
						}) }),
						/* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
						/* @__PURE__ */ jsx(BreadcrumbItem, {
							className: "min-w-0",
							children: /* @__PURE__ */ jsx(BreadcrumbPage, {
								className: "truncate font-aeonik-pro",
								children: author.display_name
							})
						})
					] }) }),
					/* @__PURE__ */ jsx("header", {
						className: "mt-8 border-y border-border py-8",
						children: /* @__PURE__ */ jsxs("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ jsx("h1", {
									className: "font-aeonik-pro text-[32px] font-normal leading-none tracking-tight text-foreground sm:text-[40px]",
									children: author.display_name
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "mt-2 text-[13px] text-muted-foreground",
									children: ["@", author.username]
								}),
								roles.length ? /* @__PURE__ */ jsx("ul", {
									className: "mt-4 flex flex-wrap gap-2",
									children: roles.map((role) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Badge, {
										variant: "secondary",
										className: "text-[10px]",
										children: role
									}) }, role))
								}) : null,
								/* @__PURE__ */ jsxs("ul", {
									className: "mt-6 flex gap-8",
									children: [/* @__PURE__ */ jsxs("li", {
										className: "flex flex-col gap-1",
										children: [/* @__PURE__ */ jsx("span", {
											className: "font-aeonik-pro text-[22px] font-normal text-foreground",
											children: author.thread_count
										}), /* @__PURE__ */ jsx("span", {
											className: "text-[12px] text-muted-foreground",
											children: "Threads"
										})]
									}), /* @__PURE__ */ jsxs("li", {
										className: "flex flex-col gap-1",
										children: [/* @__PURE__ */ jsx("span", {
											className: "font-aeonik-pro text-[22px] font-normal text-foreground",
											children: author.reply_count
										}), /* @__PURE__ */ jsx("span", {
											className: "text-[12px] text-muted-foreground",
											children: "Replies"
										})]
									})]
								})
							]
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-10 flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground",
							children: "Threads"
						}), total > threads.length ? /* @__PURE__ */ jsxs("span", {
							className: "text-[12px] text-muted-foreground",
							children: [
								"Showing ",
								threads.length,
								" of ",
								total
							]
						}) : null]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-6 flex flex-col gap-4",
						children: threads.length > 0 ? threads.map((thread) => /* @__PURE__ */ jsx(ThreadCard, { thread }, thread.$id)) : /* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-muted-foreground",
							children: "No threads yet."
						})
					})
				]
			})
		}), /* @__PURE__ */ jsx(ThreadsPreFooter, {})]
	});
}
function ThreadsAuthorPage() {
	return /* @__PURE__ */ jsx(AuthorView, { ...Route$1.useLoaderData() });
}
export { ThreadsAuthorPage as component };
