import { t as cn } from "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import "./error-formatting-CL2hjGy5.js";
import "./constants-CL7SLzjY.js";
import "./constants-B5zUV45z.js";
import "./console-profiles-D__E5Kgi.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./page-direction-CnacIIOa.js";
import "./ThinkingBubble-U48KAaRY.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import "./select-BYGLGp-f.js";
import "./context-menu-D55xedo-.js";
import "./CodeBlock-BGAzMP_K.js";
import "./WizardLayout-DWqXFGuX.js";
import "./code-language-RiwE0Xft.js";
import "./prose-typography-BMJgwhz7.js";
import "./table-CsPM4E9L.js";
import "./modal-auto-focus-BO41bKmA.js";
import "./dialog-CFWmsJbI.js";
import "./alert-BTaNwkUC.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./DocsRouteLink-cLPNKZ9F.js";
import "./ConnectCodeExample-Ujo3XkoF.js";
import "./accordion-DmQmnCa5.js";
import "./use-user-os-Cwg5asTC.js";
import { a as BreadcrumbPage, i as BreadcrumbList, n as BreadcrumbItem, o as BreadcrumbSeparator, r as BreadcrumbLink, t as Breadcrumb } from "./breadcrumb-DJFLXbij.js";
import "./ImagePreviewGallery-CuJmaZOR.js";
import "./Youtube-pQDzLroP.js";
import "./prose-typography-DB73MMim.js";
import "./frontmatter-9RsCswLb.js";
import "./link-styles-DzUNTdI9.js";
import { n as DOCS_PROSE_LINK_CLASS } from "./prose-link-DLbkQskb.js";
import "./DocsHeadingLink-ACXvhwfq.js";
import { a as CarouselPrevious, i as CarouselNext, n as CarouselContent, r as CarouselItem, t as Carousel } from "./carousel-mJzDxueI.js";
import "./parse-params-BpMT2Ilk.js";
import "./server-analytics-C9eyNcYe.js";
import { a as getRelatedIntegrations, o as getIntegrationCategoryHeading } from "./content-BNDqilSS.js";
import "./og-image-DdV5MU0-.js";
import "./page-meta-DY0pOkK9.js";
import "./route-meta-Ddegy6aO.js";
import { t as Route$1 } from "./integrations._slug-j63SUavB.js";
import { t as ChangelogMarkdown } from "./ChangelogMarkdown-BiBlRG_b.js";
import { a as IntegrationPartnerNote, i as IntegrationIcon, n as IntegrationPill, t as IntegrationCard } from "./IntegrationCard-DsiKZEdw.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, BadgeCheck } from "lucide-react";
function IntegrationGallery({ images, className }) {
	const [api, setApi] = useState();
	const [showRightFade, setShowRightFade] = useState(false);
	const updateFade = useCallback((carouselApi) => {
		if (!carouselApi) return;
		setShowRightFade(carouselApi.canScrollNext());
	}, []);
	useEffect(() => {
		if (!api) return;
		updateFade(api);
		const onSelect = () => updateFade(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);
		return () => {
			api.off("reInit", onSelect);
			api.off("select", onSelect);
		};
	}, [api, updateFade]);
	if (images.length === 0) return null;
	return /* @__PURE__ */ jsx("div", {
		className: cn("w-full", className),
		children: /* @__PURE__ */ jsxs(Carousel, {
			opts: {
				align: "start",
				dragFree: true
			},
			setApi,
			className: "w-full",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "relative min-w-0 overflow-hidden",
				children: [/* @__PURE__ */ jsx(CarouselContent, {
					className: "-ms-4",
					children: images.map((image, index) => /* @__PURE__ */ jsx(CarouselItem, {
						className: "basis-[280px] ps-4 sm:basis-[360px] lg:basis-[420px]",
						children: /* @__PURE__ */ jsx("div", {
							className: "overflow-hidden rounded-xl border border-border bg-background shadow-sm",
							children: /* @__PURE__ */ jsx("img", {
								src: image,
								alt: "",
								className: "aspect-[16/9] w-full object-cover",
								loading: index === 0 ? "eager" : "lazy",
								draggable: false
							})
						})
					}, `${image}-${index}`))
				}), /* @__PURE__ */ jsx("div", {
					"aria-hidden": true,
					className: cn("pointer-events-none absolute end-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-l from-muted/20 to-transparent transition-opacity duration-200 sm:w-24", showRightFade ? "opacity-100" : "opacity-0")
				})]
			}), images.length > 1 ? /* @__PURE__ */ jsxs("div", {
				className: "mt-4 flex justify-end gap-2",
				children: [/* @__PURE__ */ jsx(CarouselPrevious, {
					variant: "outline",
					size: "icon",
					className: "static size-8 translate-x-0 translate-y-0 rounded-full"
				}), /* @__PURE__ */ jsx(CarouselNext, {
					variant: "outline",
					size: "icon",
					className: "static size-8 translate-x-0 translate-y-0 rounded-full"
				})]
			}) : null]
		})
	});
}
var INTEGRATION_PROSE_LINK_CLASS = cn(DOCS_PROSE_LINK_CLASS, "text-inherit");
function IntegrationMarkdown({ content, className }) {
	return /* @__PURE__ */ jsx(ChangelogMarkdown, {
		content,
		linkClassName: INTEGRATION_PROSE_LINK_CLASS,
		className
	});
}
function DetailView({ integration }) {
	const t = useT();
	const related = getRelatedIntegrations(integration.slug);
	const images = integration.images.length > 0 ? integration.images : integration.cover ? [integration.cover] : [];
	return /* @__PURE__ */ jsxs("div", {
		className: "relative bg-background",
		children: [
			/* @__PURE__ */ jsx("section", {
				className: "border-b border-border py-8 sm:py-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [
						/* @__PURE__ */ jsx(Button, {
							variant: "ghost",
							size: "sm",
							className: "mb-6 h-9 px-0 text-[13px]",
							asChild: true,
							children: /* @__PURE__ */ jsxs(Link, {
								to: "/integrations",
								children: [/* @__PURE__ */ jsx(ArrowLeft, {
									className: "me-1.5 size-4",
									"aria-hidden": true
								}), t("Back to catalog")]
							})
						}),
						/* @__PURE__ */ jsx(Breadcrumb, { children: /* @__PURE__ */ jsxs(BreadcrumbList, { children: [
							/* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, {
								asChild: true,
								children: /* @__PURE__ */ jsx(Link, {
									to: "/integrations",
									className: "cursor-pointer",
									children: t("Integrations")
								})
							}) }),
							/* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
							/* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbPage, { children: integration.title }) })
						] }) }),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex items-start gap-4",
							children: [/* @__PURE__ */ jsx(IntegrationIcon, {
								slug: integration.slug,
								vendor: integration.product.vendor,
								alt: integration.product.vendor,
								size: "lg"
							}), /* @__PURE__ */ jsxs("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ jsx("h1", {
									className: "font-aeonik-pro text-[28px] font-normal leading-tight text-foreground sm:text-[32px]",
									children: integration.title
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-[14px] text-muted-foreground",
									children: integration.description
								})]
							})]
						})
					]
				})
			}),
			images.length > 0 ? /* @__PURE__ */ jsx("section", {
				className: "border-b border-border bg-muted/20 py-8 sm:py-10",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: /* @__PURE__ */ jsx(IntegrationGallery, { images })
				})
			}) : null,
			/* @__PURE__ */ jsx("section", {
				className: "border-b border-border py-10 sm:py-14",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12",
						children: [/* @__PURE__ */ jsx("article", {
							className: "min-w-0",
							children: /* @__PURE__ */ jsx(IntegrationMarkdown, { content: integration.content })
						}), /* @__PURE__ */ jsx("aside", {
							className: "lg:sticky lg:top-24 lg:self-start",
							children: /* @__PURE__ */ jsxs("div", {
								className: "rounded-xl border border-border bg-card/50 overflow-hidden",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "px-5 py-4",
										children: /* @__PURE__ */ jsx("h2", {
											className: "text-[15px] font-semibold text-foreground",
											children: t("Details")
										})
									}),
									/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
									/* @__PURE__ */ jsxs("dl", {
										className: "space-y-4 px-5 py-4 text-[13px]",
										children: [
											/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
												className: "text-muted-foreground",
												children: t("Vendor")
											}), /* @__PURE__ */ jsx("dd", {
												className: "mt-1 font-medium text-foreground",
												children: integration.product.vendor
											})] }),
											/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
												className: "text-muted-foreground",
												children: t("Category")
											}), /* @__PURE__ */ jsx("dd", {
												className: "mt-1",
												children: /* @__PURE__ */ jsx(IntegrationPill, { children: t(getIntegrationCategoryHeading(integration.category)) })
											})] }),
											/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
												className: "text-muted-foreground",
												children: t("Platform")
											}), /* @__PURE__ */ jsx("dd", {
												className: "mt-2 flex flex-wrap gap-2",
												children: integration.platform.map((platform) => /* @__PURE__ */ jsx(IntegrationPill, { children: platform }, platform))
											})] }),
											integration.isPartner ? /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
												className: "text-muted-foreground",
												children: t("Verified")
											}), /* @__PURE__ */ jsx("dd", {
												className: "mt-1",
												children: /* @__PURE__ */ jsxs(IntegrationPill, {
													variant: "success",
													children: [/* @__PURE__ */ jsx(BadgeCheck, { "aria-hidden": true }), t("Verified")]
												})
											})] }) : null
										]
									})
								]
							})
						})]
					})
				})
			}),
			related.length > 0 ? /* @__PURE__ */ jsx("section", {
				className: "border-b border-border py-10 sm:py-14",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "font-aeonik-pro text-[22px] font-normal text-foreground",
						children: t("Related integrations")
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
						children: related.map((item) => /* @__PURE__ */ jsx(IntegrationCard, { integration: item }, item.slug))
					})]
				})
			}) : null,
			/* @__PURE__ */ jsx(IntegrationPartnerNote, {})
		]
	});
}
function IntegrationDetailPage() {
	const { integration } = Route$1.useLoaderData();
	return /* @__PURE__ */ jsx(DetailView, { integration });
}
export { IntegrationDetailPage as component };
