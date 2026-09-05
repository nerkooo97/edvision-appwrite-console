import { t as cn } from "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import { c as INIT_TICKET_IMAGE_HEIGHT, l as INIT_TICKET_IMAGE_WIDTH, t as INIT_TICKET_ASPECT_RATIO } from "./ticket-layout-B97VGq99.js";
import "./constants-CL7SLzjY.js";
import "./constants-B5zUV45z.js";
import "./console-profiles-D__E5Kgi.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import "./parse-params-BpMT2Ilk.js";
import "./og-image-DdV5MU0-.js";
import "./page-meta-DY0pOkK9.js";
import { n as getInitTicketShareImageSrc } from "./init-ticket-share-FwW0y3EN.js";
import { t as Route } from "./init._ticketId-DNUHWMMd.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
function View({ ticketId, imageSrc: imageSrcFromLoader }) {
	const imageSrc = imageSrcFromLoader ?? getInitTicketShareImageSrc(ticketId);
	const [imageLoaded, setImageLoaded] = useState(false);
	return /* @__PURE__ */ jsx("div", {
		className: "mx-auto w-full max-w-[820px] px-4 py-10 sm:px-6 sm:py-12",
		children: /* @__PURE__ */ jsxs("div", {
			className: "space-y-6 text-center",
			children: [/* @__PURE__ */ jsx("div", {
				className: "relative w-full overflow-hidden rounded-xl border border-border bg-muted/30 shadow-sm",
				style: { aspectRatio: INIT_TICKET_ASPECT_RATIO },
				children: /* @__PURE__ */ jsx("img", {
					src: imageSrc,
					alt: "Init ticket",
					width: INIT_TICKET_IMAGE_WIDTH,
					height: 682,
					decoding: "async",
					fetchPriority: "high",
					loading: "eager",
					onLoad: () => setImageLoaded(true),
					className: cn("absolute inset-0 h-full w-full object-cover transition-opacity duration-200", imageLoaded ? "opacity-100" : "opacity-0")
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ jsx("h1", {
						className: "text-[20px] font-semibold tracking-tight text-foreground sm:text-[22px]",
						children: "Init ticket"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-[13px] leading-relaxed text-muted-foreground",
						children: "Claim your personalized pass, customize it with your stack, and share for a chance to win exclusive Init swag."
					}),
					/* @__PURE__ */ jsx(Button, {
						asChild: true,
						className: "h-10 text-[13px]",
						children: /* @__PURE__ */ jsx(Link, {
							to: "/init",
							children: "Claim your ticket"
						})
					})
				]
			})]
		})
	});
}
function InitTicketSharePage() {
	const { ticketId, imageSrc } = Route.useLoaderData();
	return /* @__PURE__ */ jsx(View, {
		ticketId,
		imageSrc
	});
}
export { InitTicketSharePage as component };
