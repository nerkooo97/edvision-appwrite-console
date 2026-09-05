import { t as cn } from "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import "./error-formatting-CL2hjGy5.js";
import "./console-profiles-D__E5Kgi.js";
import "./is-marketing-page-dgx45Oqy.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import "./context-menu-D55xedo-.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./DocsRouteLink-cLPNKZ9F.js";
import "./BlogPageAnchor-BwvdqqDT.js";
import { t as MarketingSiteLink } from "./MarketingSiteLink-Cxu9rqvv.js";
import { n as HomeSoftLights } from "./HomeSoftLights-BsLce5-B.js";
import "./PolicySidebarNav-DoDWiBHs.js";
import { t as PolicyToc } from "./PolicyToc-DJyn4nuB.js";
import { t as PricingSectionHeading } from "./PricingSectionHeading-Bstz-ues.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { toast } from "sonner";
import { Check, Copy, Download } from "lucide-react";
const brandColors = [
	{
		name: "Light Grey",
		hex: "#EDEDF0",
		textClassName: "text-[#19191D]",
		backgroundClassName: "bg-[#EDEDF0]"
	},
	{
		name: "Dark Grey",
		hex: "#19191D",
		textClassName: "text-[#EDEDF0]",
		backgroundClassName: "bg-[#19191D]"
	},
	{
		name: "Appwrite Pink",
		hex: "#ff8d11",
		textClassName: "text-white",
		backgroundClassName: "bg-[#ff8d11]"
	}
];
const productVisuals = [
	{
		title: "Dashboard",
		imageSrc: "/assets/visuals/dashboard.avif",
		downloadHref: "/assets/visuals/dashboard.avif"
	},
	{
		title: "Appwrite Auth",
		imageSrc: "/assets/visuals/auth.avif",
		downloadHref: "/assets/visuals/auth.avif"
	},
	{
		title: "Appwrite Databases",
		imageSrc: "/assets/visuals/databases.avif",
		downloadHref: "/assets/visuals/databases.avif"
	},
	{
		title: "Appwrite Storage",
		imageSrc: "/assets/visuals/storage.avif",
		downloadHref: "/assets/visuals/storage.avif"
	},
	{
		title: "Appwrite Functions",
		imageSrc: "/assets/visuals/functions.avif",
		downloadHref: "/assets/visuals/functions.avif"
	},
	{
		title: "Appwrite Messaging",
		imageSrc: "/assets/visuals/messaging.avif",
		downloadHref: "/assets/visuals/messaging.avif"
	}
];
const assetsTocSections = [
	{
		id: "naming",
		label: "Naming"
	},
	{
		id: "logotype",
		label: "Logotype"
	},
	{
		id: "logomark",
		label: "Logomark"
	},
	{
		id: "brand-colors",
		label: "Brand colors"
	},
	{
		id: "product-visuals",
		label: "Product visuals"
	},
	{
		id: "contact-us",
		label: "Contact us"
	}
];
var assetCardClassName = "overflow-hidden rounded-xl border border-border bg-card/50";
function AssetDownloadButtons({ svgHref, rasterHref, className }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex gap-2 opacity-0 transition-opacity group-hover:opacity-100", className),
		children: [/* @__PURE__ */ jsx(Button, {
			variant: "secondary",
			size: "sm",
			className: "h-8 gap-1.5 text-[12px]",
			asChild: true,
			children: /* @__PURE__ */ jsxs("a", {
				href: svgHref,
				download: true,
				children: [/* @__PURE__ */ jsx(Download, { className: "h-3.5 w-3.5" }), "SVG"]
			})
		}), /* @__PURE__ */ jsx(Button, {
			variant: "secondary",
			size: "sm",
			className: "h-8 gap-1.5 text-[12px]",
			asChild: true,
			children: /* @__PURE__ */ jsxs("a", {
				href: rasterHref,
				download: true,
				children: [/* @__PURE__ */ jsx(Download, { className: "h-3.5 w-3.5" }), "PNG"]
			})
		})]
	});
}
function ColorSwatch({ name, hex, backgroundClassName }) {
	const t = useT();
	const [copied, setCopied] = useState(false);
	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(hex);
			setCopied(true);
			toast.success(t("Copied to clipboard"));
			window.setTimeout(() => setCopied(false), 1500);
		} catch {
			toast.error(t("Failed to copy color"));
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		className: assetCardClassName,
		children: [/* @__PURE__ */ jsx("div", { className: cn("aspect-[5/3] w-full", backgroundClassName) }), /* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-between gap-3 border-t border-border bg-muted/30 px-4 py-3",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ jsx("p", {
					className: "truncate text-[13px] font-medium text-foreground",
					children: t(name)
				}), /* @__PURE__ */ jsx("p", {
					className: "font-mono text-[12px] text-muted-foreground",
					children: hex
				})]
			}), /* @__PURE__ */ jsxs(Button, {
				type: "button",
				variant: "outline",
				size: "sm",
				className: "h-8 shrink-0 gap-1.5 px-2.5 text-[12px]",
				onClick: handleCopy,
				"aria-label": `${t("Copy")} ${hex}`,
				children: [copied ? /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsx(Copy, { className: "h-3.5 w-3.5" }), copied ? t("Copied") : t("Copy")]
			})]
		})]
	});
}
function LogoPreview({ src, alt, label, previewClassName, svgHref, rasterHref }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: cn(assetCardClassName, "group"),
		children: [/* @__PURE__ */ jsx("div", {
			className: "border-b border-border bg-muted/20 p-4 sm:p-5",
			children: /* @__PURE__ */ jsx("div", {
				className: cn("flex min-h-[240px] items-center justify-center rounded-lg border border-border/70 p-8 shadow-sm", previewClassName),
				children: /* @__PURE__ */ jsx("img", {
					src,
					alt: t(alt),
					className: "max-h-16 w-full max-w-[240px] object-contain"
				})
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-between gap-3 bg-muted/30 px-4 py-3",
			children: [/* @__PURE__ */ jsx("p", {
				className: "text-[13px] font-medium text-foreground",
				children: t(label)
			}), /* @__PURE__ */ jsx(AssetDownloadButtons, {
				svgHref,
				rasterHref,
				className: "opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
			})]
		})]
	});
}
function CoBrandPreview({ src, alt, label }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: assetCardClassName,
		children: [/* @__PURE__ */ jsx("div", {
			className: "border-b border-border bg-muted/20 p-4 sm:p-5",
			children: /* @__PURE__ */ jsx("div", {
				className: "flex min-h-[220px] items-center justify-center rounded-lg border border-border/70 bg-[#19191D] p-8 shadow-sm",
				children: /* @__PURE__ */ jsx("img", {
					src,
					alt: t(alt),
					className: "max-h-20 w-full max-w-md object-contain"
				})
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "bg-muted/30 px-4 py-3",
			children: /* @__PURE__ */ jsx("p", {
				className: "text-[13px] font-medium text-foreground",
				children: t(label)
			})
		})]
	});
}
function ProductVisualCard({ title, imageSrc, downloadHref }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: cn(assetCardClassName, "group"),
		children: [/* @__PURE__ */ jsx("div", {
			className: "border-b border-border bg-muted/20 p-4 sm:p-5",
			children: /* @__PURE__ */ jsx("div", {
				className: "overflow-hidden rounded-lg border border-border/70 bg-background shadow-sm",
				children: /* @__PURE__ */ jsx("img", {
					src: imageSrc,
					alt: t(title),
					className: "aspect-video w-full object-cover"
				})
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-between gap-3 bg-muted/30 px-4 py-3",
			children: [/* @__PURE__ */ jsx("p", {
				className: "text-[13px] font-medium text-foreground",
				children: t(title)
			}), /* @__PURE__ */ jsx(Button, {
				variant: "outline",
				size: "sm",
				className: "h-8 gap-1.5 text-[12px] opacity-100 sm:opacity-0 sm:group-hover:opacity-100",
				asChild: true,
				children: /* @__PURE__ */ jsxs("a", {
					href: downloadHref,
					download: true,
					children: [/* @__PURE__ */ jsx(Download, { className: "h-3.5 w-3.5" }), t("Download")]
				})
			})]
		})]
	});
}
function View() {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "relative",
		children: [/* @__PURE__ */ jsx(HomeSoftLights, {
			variant: "pricing",
			className: "pointer-events-none opacity-70"
		}), /* @__PURE__ */ jsx("div", {
			className: "relative mx-auto w-full max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid items-start gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[240px_minmax(0,1fr)]",
				children: [
					/* @__PURE__ */ jsxs("header", {
						className: "space-y-4 lg:col-span-2",
						children: [/* @__PURE__ */ jsx(PricingSectionHeading, {
							as: "h1",
							align: "left",
							title: t("Brand assets"),
							description: t("Resources for presenting the Appwrite brand to maintain consistency while using our logos, colors, and other brand elements across various platforms and materials."),
							className: "max-w-2xl"
						}), /* @__PURE__ */ jsx(Button, {
							variant: "brandCta",
							className: "gap-1.5",
							asChild: true,
							children: /* @__PURE__ */ jsxs("a", {
								href: "/assets.zip",
								download: true,
								children: [/* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }), t("Download assets")]
							})
						})]
					}),
					/* @__PURE__ */ jsx(PolicyToc, { items: assetsTocSections }),
					/* @__PURE__ */ jsxs("div", {
						className: "min-w-0 space-y-12 overflow-x-hidden",
						children: [
							/* @__PURE__ */ jsxs("section", {
								id: "naming",
								className: "scroll-mt-24 space-y-3",
								children: [/* @__PURE__ */ jsx("h2", {
									className: "font-aeonik-pro text-[24px] font-normal text-foreground",
									children: t("Naming")
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[14px] leading-7 text-muted-foreground",
									children: t("Write 'Appwrite,' with a lowercase 'w' and no space between the two words. Please refrain from using variations like 'AppWrite' or 'App Write'.")
								})]
							}),
							/* @__PURE__ */ jsxs("section", {
								id: "logotype",
								className: "scroll-mt-24 space-y-4",
								children: [
									/* @__PURE__ */ jsx("h2", {
										className: "font-aeonik-pro text-[24px] font-normal text-foreground",
										children: t("Logotype")
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[14px] leading-7 text-muted-foreground",
										children: t("The Appwrite logo stands as a prominent symbol of our brand's identity. Refrain from altering our logo and preferably use our logo on a neutral background.")
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "grid gap-4 md:grid-cols-2",
										children: [/* @__PURE__ */ jsx(LogoPreview, {
											src: "/assets/logotype/white.svg",
											alt: t("Appwrite logo with black text"),
											label: t("Light background"),
											previewClassName: "bg-[#EDEDF0]",
											svgHref: "/assets/logotype/white.svg",
											rasterHref: "/assets/logotype/white.avif"
										}), /* @__PURE__ */ jsx(LogoPreview, {
											src: "/assets/logotype/black.svg",
											alt: t("Appwrite logo with white text"),
											label: t("Dark background"),
											previewClassName: "bg-[#19191D]",
											svgHref: "/assets/logotype/black.svg",
											rasterHref: "/assets/logotype/black.avif"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "space-y-3 pt-2",
										children: [
											/* @__PURE__ */ jsx("h3", {
												className: "text-[15px] font-semibold text-foreground",
												children: t("Co-branding logotypes")
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-[14px] leading-7 text-muted-foreground",
												children: t("Spacing is determined by the Appwrite mark. Unless otherwise noted by partner brands, each logo is optically equal as a collection of shapes.")
											}),
											/* @__PURE__ */ jsx(CoBrandPreview, {
												src: "/assets/logotype/co-brand.svg",
												alt: t("Appwrite logo besides a generic logo"),
												label: t("Co-branding logotype example")
											})
										]
									})
								]
							}),
							/* @__PURE__ */ jsxs("section", {
								id: "logomark",
								className: "scroll-mt-24 space-y-4",
								children: [
									/* @__PURE__ */ jsx("h2", {
										className: "font-aeonik-pro text-[24px] font-normal text-foreground",
										children: t("Logomark")
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[14px] leading-7 text-muted-foreground",
										children: t("While prioritizing recognizability, the logotype is the recommended choice. Using the Appwrite logomark is suitable for situations where space constraints make it challenging to showcase the complete logotype.")
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "grid gap-4 md:grid-cols-2",
										children: [/* @__PURE__ */ jsx(LogoPreview, {
											src: "/assets/logomark/logo.svg",
											alt: t("Appwrite logomark"),
											label: t("Light background"),
											previewClassName: "bg-[#EDEDF0]",
											svgHref: "/assets/logomark/logo.svg",
											rasterHref: "/assets/logomark/logo.avif"
										}), /* @__PURE__ */ jsx(LogoPreview, {
											src: "/assets/logomark/logo.svg",
											alt: t("Appwrite logomark on dark background"),
											label: t("Dark background"),
											previewClassName: "bg-[#19191D]",
											svgHref: "/assets/logomark/logo.svg",
											rasterHref: "/assets/logomark/logo.avif"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "space-y-3 pt-2",
										children: [
											/* @__PURE__ */ jsx("h3", {
												className: "text-[15px] font-semibold text-foreground",
												children: t("Co-branding lockups")
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-[14px] leading-7 text-muted-foreground",
												children: t("Spacing is determined by the Appwrite mark. Unless otherwise noted by partner brands, each logo is optically equal as a collection of shapes.")
											}),
											/* @__PURE__ */ jsx(CoBrandPreview, {
												src: "/assets/logomark/co-brand.svg",
												alt: t("Logomark cobrand example"),
												label: t("Co-branding lockup example")
											})
										]
									})
								]
							}),
							/* @__PURE__ */ jsxs("section", {
								id: "brand-colors",
								className: "scroll-mt-24 space-y-4",
								children: [/* @__PURE__ */ jsx("h2", {
									className: "font-aeonik-pro text-[24px] font-normal text-foreground",
									children: t("Brand colors")
								}), /* @__PURE__ */ jsx("div", {
									className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
									children: brandColors.map((color) => /* @__PURE__ */ jsx(ColorSwatch, { ...color }, color.hex))
								})]
							}),
							/* @__PURE__ */ jsxs("section", {
								id: "product-visuals",
								className: "scroll-mt-24 space-y-4",
								children: [
									/* @__PURE__ */ jsx("h2", {
										className: "font-aeonik-pro text-[24px] font-normal text-foreground",
										children: t("Product visuals")
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[14px] leading-7 text-muted-foreground",
										children: t("Use these product visuals to enhance your articles, presentations, and content related to Appwrite.")
									}),
									/* @__PURE__ */ jsx("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: productVisuals.map((visual) => /* @__PURE__ */ jsx(ProductVisualCard, { ...visual }, visual.title))
									})
								]
							}),
							/* @__PURE__ */ jsxs("section", {
								id: "contact-us",
								className: "scroll-mt-24 space-y-3",
								children: [/* @__PURE__ */ jsx("h2", {
									className: "font-aeonik-pro text-[24px] font-normal text-foreground",
									children: t("Contact us")
								}), /* @__PURE__ */ jsxs("p", {
									className: "text-[14px] leading-7 text-muted-foreground",
									children: [
										t("Should you require further assistance or have specific needs beyond what's presented on this page, please don't hesitate to"),
										" ",
										/* @__PURE__ */ jsx(MarketingSiteLink, {
											className: "link-neutral",
											href: "/enterprise",
											children: t("contact us")
										}),
										"."
									]
								})]
							})
						]
					})
				]
			})
		})]
	});
}
function AssetsPage() {
	return /* @__PURE__ */ jsx(View, {});
}
export { AssetsPage as component };
