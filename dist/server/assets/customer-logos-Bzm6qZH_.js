import { t as cn } from "./utils-DoqqkI3X.js";
import { jsx } from "react/jsx-runtime";
var maskLogoClassName = (emphasized, interactive) => cn("block bg-foreground/75 dark:bg-muted-foreground", interactive && "transition duration-200 group-hover:scale-105 group-hover:bg-foreground dark:group-hover:bg-foreground", emphasized && "bg-foreground opacity-100 dark:bg-foreground");
var imageLogoClassName = (emphasized, interactive) => cn("max-h-10 max-w-full object-contain opacity-90 [filter:brightness(0.42)] dark:opacity-80 dark:[filter:none]", interactive && "transition duration-200 group-hover:scale-105 group-hover:opacity-100 group-hover:[filter:brightness(0)] dark:group-hover:opacity-100 dark:group-hover:[filter:none]", emphasized && "opacity-100 [filter:brightness(0)] dark:opacity-100 dark:[filter:none]");
var maskStyle = (maskUrl, width, height) => ({
	width,
	height,
	maskImage: `url(${maskUrl})`,
	maskPosition: "center",
	maskRepeat: "no-repeat",
	maskSize: "contain",
	WebkitMaskImage: `url(${maskUrl})`,
	WebkitMaskPosition: "center",
	WebkitMaskRepeat: "no-repeat",
	WebkitMaskSize: "contain"
});
function TrustedByLogo({ src, alt, width, height, mask = false, maskSrc, inverseMask = false, emphasized = false, interactive = true, className }) {
	const resolvedMaskSrc = maskSrc ?? src;
	if (inverseMask) return /* @__PURE__ */ jsx("span", {
		role: "img",
		"aria-label": alt,
		className: cn(maskLogoClassName(emphasized, interactive), className),
		style: maskStyle(resolvedMaskSrc, width, height)
	});
	if (mask) return /* @__PURE__ */ jsx("span", {
		role: "img",
		"aria-label": alt,
		className: cn(maskLogoClassName(emphasized, interactive), className),
		style: maskStyle(resolvedMaskSrc, width, height)
	});
	return /* @__PURE__ */ jsx("img", {
		src,
		alt,
		width,
		height,
		loading: "lazy",
		className: cn(imageLogoClassName(emphasized, interactive), className)
	});
}
const allHomeCaseStudies = [
	{
		id: "devkind",
		logo: "/images/logos/trusted-by/devkind.svg",
		logoWidth: 107,
		logoHeight: 32,
		headline: "DevKind reduced development time by 60% and lowered server costs by 40%",
		blurb: "A special thanks to Appwrite for providing robust features and seamless functionality.",
		name: "Hassan Ahmed",
		title: "Software Engineer",
		company: "DevKind",
		avatar: "/images/testimonials/hassan.avif",
		storyUrl: "/blog/post/customer-story-storealert"
	},
	{
		id: "langx",
		logo: "/images/logos/trusted-by/langx.svg",
		logoWidth: 134,
		logoHeight: 29,
		headline: "LangX handled millions of requests using Appwrite",
		blurb: "With its comprehensive suite of services, Appwrite emerged as an ideal choice for my needs.",
		name: "Xue",
		title: "Founder",
		company: "LangX",
		avatar: "/images/testimonials/xue.avif",
		storyUrl: "/blog/post/customer-stories-langx"
	},
	{
		id: "k-collect",
		logo: "/images/logos/trusted-by/k-collect.svg",
		logoWidth: 120,
		logoHeight: 35,
		logoMask: true,
		headline: "K-Collect reduced infrastructure costs by 700%",
		blurb: "A major impact that Appwrite made was the amount of time and stress saved.",
		name: "Ryan O'Connor",
		title: "Founder",
		company: "K-Collect",
		avatar: "/images/testimonials/ryan.avif",
		storyUrl: "/blog/post/customer-stories-kcollect"
	},
	{
		id: "majik-kids",
		logo: "/images/logos/trusted-by/majik-kids.svg",
		logoWidth: 88,
		logoHeight: 32,
		headline: "Majik Kids built a Fair Pay audio platform for children on Appwrite Cloud",
		blurb: "Just like a Swiss Army Knife, you can choose and use the tools that you need with Appwrite.",
		name: "Phil McClusky",
		title: "Development Lead",
		company: "Majik Kids",
		avatar: "/images/testimonials/majik.avif",
		storyUrl: "/blog/post/customer-stories-majik-kids"
	},
	{
		id: "myshoefitter",
		logo: "/images/logos/trusted-by/myshoefitter.svg",
		logoWidth: 197,
		logoHeight: 32,
		headline: "mySHOEFITTER sized 12,000+ feet accurately for major EU retailers",
		blurb: "The integrated user authentication and the ease of creating data structures have undoubtedly saved us several weeks’ worth of time.",
		name: "Marius Bolik",
		title: "CTO",
		company: "mySHOEFITTER",
		avatar: "/images/testimonials/marius-bolik2.avif",
		storyUrl: "/blog/post/customer-stories-myshoefitter"
	},
	{
		id: "socialaize",
		logo: "/images/logos/trusted-by/socialaize.svg",
		logoWidth: 126,
		logoHeight: 32,
		headline: "Socialaize runs hundreds of thousands of function executions per day on Cloud",
		blurb: "It’s especially nice that Appwrite have to deal with the scaling now and not me.",
		name: "Zach Handley",
		title: "Founder",
		company: "Socialaize",
		avatar: "/images/testimonials/zach-handley.avif",
		storyUrl: "/blog/post/customer-story-socialaize"
	},
	{
		id: "undo",
		logo: "/images/logos/trusted-by/undo.svg",
		logoWidth: 125,
		logoHeight: 32,
		headline: "UNDO went from idea to paying customers tracking 9,000+ circular assets",
		blurb: "Thanks to Appwrite and advances in technology, we were able to get an MVP out in 2/3 months with 1 developer.",
		name: "Jonas Janssen",
		title: "Co-founder",
		company: "UNDO",
		avatar: "/images/testimonials/jonas-janssen.avif",
		storyUrl: "/blog/post/customer-stories-undo"
	},
	{
		id: "radar",
		logo: "/images/logos/trusted-by/radar.svg",
		logoWidth: 100,
		logoHeight: 32,
		logoSize: "lg",
		headline: "Radar shipped a polished iOS hub for every kind of media recommendation",
		blurb: "The barrier to entry is zero with Appwrite. And I think that’s really special.",
		name: "Matt Martino",
		title: "Founder",
		company: "Paradox",
		avatar: "/images/testimonials/matt-martino.avif",
		storyUrl: "/blog/post/customer-story-radar"
	}
];
var VISIBLE_COUNT = 3;
function shuffleHomeCaseStudies(studies) {
	const out = [...studies];
	for (let i = out.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[out[i], out[j]] = [out[j], out[i]];
	}
	return out;
}
function pickRandomHomeCaseStudies(count = VISIBLE_COUNT) {
	return shuffleHomeCaseStudies(allHomeCaseStudies).slice(0, count);
}
const homeCustomerLogos = [
	{
		src: "/images/logos/trusted-by/times-of-india.svg",
		alt: "The Times of India",
		width: 123,
		height: 45,
		size: "lg"
	},
	{
		src: "/images/logos/trusted-by/devkind.svg",
		alt: "DevKind",
		width: 91,
		height: 27
	},
	{
		src: "/images/logos/trusted-by/first-media.svg",
		alt: "First Media",
		width: 139,
		height: 37,
		size: "lg"
	},
	{
		src: "/images/logos/trusted-by/acer.svg",
		alt: "Acer",
		width: 90,
		height: 22
	},
	{
		src: "/images/logos/trusted-by/ibm.svg",
		alt: "IBM",
		width: 63,
		height: 26
	},
	{
		src: "/images/logos/trusted-by/american-airlines.svg",
		alt: "American Airlines",
		width: 125,
		height: 20
	},
	{
		src: "/images/logos/trusted-by/langx.svg",
		alt: "LangX",
		width: 114,
		height: 25
	},
	{
		src: "/images/logos/trusted-by/gm.svg",
		maskSrc: "/images/logos/trusted-by/gm-inverse-mask.svg",
		alt: "GM",
		width: 41,
		height: 41,
		inverseMask: true
	},
	{
		src: "/images/logos/trusted-by/ey.svg",
		alt: "EY",
		width: 39,
		height: 41
	},
	{
		src: "/images/logos/trusted-by/k-collect.svg",
		alt: "K-Collect",
		width: 120,
		height: 35,
		mask: true
	},
	{
		src: "/images/logos/trusted-by/bosch.svg",
		alt: "BOSCH",
		width: 94,
		height: 31
	},
	{
		src: "/images/logos/trusted-by/decathlon.svg",
		maskSrc: "/images/logos/trusted-by/decathlon-inverse-mask.svg",
		alt: "DECATHLON",
		width: 108,
		height: 27,
		inverseMask: true
	},
	{
		src: "/images/logos/trusted-by/store-alert.svg",
		alt: "StoreAlert",
		width: 148,
		height: 32,
		size: "lg"
	}
];
const HOME_LOGO_GRID_COUNT = 12;
function buildAllHomeLogos() {
	const logos = [];
	const seenSrcs = /* @__PURE__ */ new Set();
	for (const study of allHomeCaseStudies) {
		if (seenSrcs.has(study.logo)) continue;
		seenSrcs.add(study.logo);
		logos.push({
			src: study.logo,
			alt: study.company,
			width: study.logoWidth,
			height: study.logoHeight,
			mask: study.logoMask,
			size: study.logoSize
		});
	}
	for (const logo of homeCustomerLogos) {
		if (seenSrcs.has(logo.src)) continue;
		seenSrcs.add(logo.src);
		logos.push(logo);
	}
	return logos;
}
const allCustomerLogos = buildAllHomeLogos();
function pickRandomHomeLogos(count = 12) {
	const shuffled = shuffleHomeCaseStudies(buildAllHomeLogos());
	return shuffled.slice(0, Math.min(count, shuffled.length));
}
export { TrustedByLogo as a, pickRandomHomeCaseStudies as i, allCustomerLogos as n, pickRandomHomeLogos as r, HOME_LOGO_GRID_COUNT as t };
