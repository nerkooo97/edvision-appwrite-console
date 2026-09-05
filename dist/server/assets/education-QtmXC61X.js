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
import { n as analyticsAttrs } from "./analytics-actions-FGYQVzYg.js";
import "./context-menu-D55xedo-.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./DocsRouteLink-cLPNKZ9F.js";
import "./accordion-DmQmnCa5.js";
import { t as BlogPageAnchor } from "./BlogPageAnchor-BwvdqqDT.js";
import { t as MarketingSiteLink } from "./MarketingSiteLink-Cxu9rqvv.js";
import { s as SectionSoftLight } from "./HomeSoftLights-BsLce5-B.js";
import { a as MarketingHeroSection, c as MarketingSectionHeading, i as MarketingFeatureGrid, n as MarketingCtaSection, u as marketingSplitLayoutClassName } from "./MarketingSections-Dg1QJnZV.js";
import { t as MarketingFaqSection } from "./MarketingFaqSection-DYJ5RTNJ.js";
import { n as AvatarFallback, r as AvatarImage, t as Avatar } from "./avatar-DsYcfNc5.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Beaker, BookOpen, Github, MessageCircle } from "lucide-react";
import { useTheme } from "next-themes";
var LOGO_HEIGHT_CLASS = "h-5 w-auto";
function EducationPartnerLogos({ className }) {
	const [mounted, setMounted] = useState(false);
	const { theme, resolvedTheme } = useTheme();
	useEffect(() => {
		setMounted(true);
	}, []);
	const isDark = mounted ? (resolvedTheme ?? theme) === "dark" : true;
	const appwriteLogo = isDark ? "/images/education/appwrite-logotype-white.svg" : "/images/education/appwrite-logotype-black.svg";
	const githubLogo = isDark ? "/images/education/github-mark.svg" : "/images/education/github-lockup-black.svg";
	return /* @__PURE__ */ jsxs("div", {
		className: cn("inline-flex items-center justify-center", className),
		children: [
			/* @__PURE__ */ jsx("img", {
				src: appwriteLogo,
				alt: "Appwrite",
				className: cn(LOGO_HEIGHT_CLASS, "pe-5"),
				loading: "lazy"
			}),
			/* @__PURE__ */ jsx("span", {
				className: "h-5 w-px shrink-0 bg-foreground/25 dark:bg-foreground/35",
				"aria-hidden": true
			}),
			/* @__PURE__ */ jsx("img", {
				src: githubLogo,
				alt: "GitHub",
				className: cn(LOGO_HEIGHT_CLASS, "ps-5"),
				loading: "lazy"
			})
		]
	});
}
var CHAT_LINK_CLASS = "link-neutral";
var INCOMING_NAME_CLASS = "text-[13px] font-medium text-[#19191D]";
var INCOMING_TIME_CLASS = "text-[11px] text-[#616161]";
var INCOMING_BODY_CLASS = "mt-1 text-[13px] leading-6 text-[#333333]";
var CHAT_MESSAGES = [
	{
		id: "walter-1",
		name: "Walter O'Brien",
		time: "8:32 AM",
		avatar: "/images/community/avatars/walter.avif",
		fallback: "WO",
		content: "Hello devs! I am getting a CORS error when sending a request to the backend. Can you help me?"
	},
	{
		id: "steven-1",
		name: "Steven",
		time: "8:38 AM",
		avatar: "/images/avatars/steven.avif",
		fallback: "S",
		isReply: true,
		content: /* @__PURE__ */ jsxs(Fragment, { children: [
			"Hey Walter! Is this the message you get",
			" ",
			/* @__PURE__ */ jsx(BlogPageAnchor, {
				href: "/blog/post/cors-error",
				className: CHAT_LINK_CLASS,
				children: "\"Access blocked by CORS policy\""
			}),
			"?"
		] })
	},
	{
		id: "walter-2",
		name: "Walter O'Brien",
		time: "9:05 AM",
		avatar: "/images/community/avatars/walter.avif",
		fallback: "WO",
		content: "Yes!"
	},
	{
		id: "steven-2",
		name: "Steven",
		time: "9:08 AM",
		avatar: "/images/avatars/steven.avif",
		fallback: "S",
		isReply: true,
		content: /* @__PURE__ */ jsxs(Fragment, { children: [
			"You should be able to debug this with a few steps. Just follow this blog:",
			" ",
			/* @__PURE__ */ jsx(BlogPageAnchor, {
				href: "/blog/post/cors-error",
				className: CHAT_LINK_CLASS,
				children: "/blog/post/cors-error"
			}),
			". Let me know if this helps 🙂"
		] })
	}
];
function ChatBubble({ message }) {
	const t = useT();
	const isReply = message.isReply;
	return /* @__PURE__ */ jsx("li", {
		className: cn("flex", isReply ? "justify-end" : "justify-start"),
		children: /* @__PURE__ */ jsx("div", {
			className: cn("relative max-w-[min(340px,100%)] rounded-lg p-3 backdrop-blur-[10px]", isReply ? [
				"border border-[hsl(340_55%_80%)] bg-[hsl(330_28%_88%)] shadow-[0_1px_3px_rgba(0,0,0,0.06)]",
				"dark:border-[hsl(340_62%_86%)] dark:bg-[hsl(330_26%_91%)] dark:shadow-none",
				"before:pointer-events-none before:absolute before:end-[23px] before:-top-[15px] before:block before:h-4 before:w-[23px] before:rotate-180 before:bg-[hsl(340_55%_80%)] before:[clip-path:polygon(50%_100%,0_0,100%_0)]",
				"before:dark:bg-[hsl(340_62%_86%)]",
				"after:pointer-events-none after:absolute after:end-6 after:-top-[14px] after:block after:h-[15px] after:w-[21px] after:rotate-180 after:bg-[hsl(330_28%_88%)] after:[clip-path:polygon(50%_100%,0_0,100%_0)]",
				"after:dark:bg-[hsl(330_26%_91%)]"
			] : [
				"border border-border bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)]",
				"dark:border-transparent dark:bg-[hsl(0_0%_99%)] dark:shadow-sm",
				"before:pointer-events-none before:absolute before:start-[23px] before:top-[calc(100%-1px)] before:block before:h-4 before:w-[23px] before:bg-white before:[clip-path:polygon(50%_100%,0_0,100%_0)]",
				"before:dark:bg-[hsl(0_0%_99%)]"
			]),
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex gap-3",
				children: [/* @__PURE__ */ jsxs(Avatar, {
					className: "size-10 shrink-0 ring-1 ring-black/[0.06] dark:ring-transparent",
					children: [/* @__PURE__ */ jsx(AvatarImage, {
						src: message.avatar,
						alt: ""
					}), /* @__PURE__ */ jsx(AvatarFallback, {
						className: "text-[11px]",
						children: message.fallback
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap items-baseline gap-x-2 gap-y-0.5",
						children: [/* @__PURE__ */ jsx("span", {
							className: INCOMING_NAME_CLASS,
							children: message.name
						}), /* @__PURE__ */ jsx("time", {
							className: INCOMING_TIME_CLASS,
							children: message.time
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: INCOMING_BODY_CLASS,
						children: typeof message.content === "string" ? t(message.content) : message.content
					})]
				})]
			})
		})
	});
}
function CommunitySupportChat() {
	return /* @__PURE__ */ jsx("div", {
		className: "rounded-xl border border-border bg-muted p-4 shadow-sm dark:bg-card/40 dark:shadow-none sm:p-6",
		children: /* @__PURE__ */ jsx("ul", {
			className: "flex flex-col gap-5 sm:gap-8",
			children: CHAT_MESSAGES.map((message) => /* @__PURE__ */ jsx(ChatBubble, { message }, message.id))
		})
	});
}
const educationHero = {
	eyebrow: "Education Program",
	title: "Build your next project with Appwrite",
	description: "Join the Appwrite Education program in collaboration with the GitHub Student Developer Pack. Students access Appwrite Cloud for free throughout their studies.",
	githubEducationUrl: "https://github.com/education"
};
const educationFeatureCards = [
	{
		title: "Develop your skills",
		description: "Get access to Appwrite Cloud and build your entire backend with Appwrite.",
		icon: BookOpen
	},
	{
		title: "Build with any framework",
		description: "Get free access to build with Appwrite’s Education plan, valid throughout your student career.",
		icon: Beaker
	},
	{
		title: "Join a vibrant community",
		description: "Get community support in the Appwrite Discord server.",
		icon: MessageCircle
	}
];
const educationKickstart = {
	title: "Kickstart your developer journey with Appwrite",
	paragraphs: ["Earn free access through GitHub Education to build your next project on Appwrite Cloud. Sign up for the GitHub Student Developer Pack to receive Appwrite Cloud for the duration of your studies.", "This credit is available only for users who are verified through the GitHub program as students. The plan is valid until you graduate from GitHub Education."],
	image: "/images/education/kickstart.avif"
};
const educationSteps = [
	{
		title: "Enroll to the GitHub Student Developer Pack",
		description: "Sign up for the Student Developer pack and explore the benefits.",
		href: "https://github.com/education",
		label: "Enroll on GitHub Education",
		external: true
	},
	{
		title: "Access the Education plan",
		description: "Create your Appwrite account through the Education program sign up page. Once verified, the Education plan will be applied to your account.",
		href: "/sign-up",
		label: "Sign up",
		external: false
	},
	{
		title: "Start from our docs",
		description: "Once your Appwrite account is created, go to our Docs and get started with Appwrite Cloud.",
		href: "/docs",
		label: "Go to Appwrite Docs",
		external: false
	}
];
const educationCommunity = {
	title: "Get help from the open source community",
	description: "Join a growing community of developers and students who use Appwrite to build their products. Gain access to a wealth of knowledge, support, and shared experiences needed to grow and advance your tech career.",
	discordUrl: "/discord"
};
const educationFaqItems = [
	{
		question: "What is the Appwrite Education Program?",
		answer: "If you're a student with the GitHub Student Developer Pack, you can access the Appwrite Education plan for free while in school to help you build your next project."
	},
	{
		question: "What does the Education plan offer?",
		answer: "Students with access to the Education plan can create 2 projects with equal usage limits as the Appwrite Pro plan (minus email support) at no cost. We also have a special channel for Education program members in the Appwrite Discord server for support, which will feature exclusive events, hackathons, etc."
	},
	{
		question: "Who is eligible to apply?",
		answer: "Any student enrolled in the GitHub Student Developer Pack can apply for free and receive Appwrite's Education plan until graduation."
	},
	{
		question: "How do I apply?",
		answer: "If you're already enrolled in the GitHub Student Developer Pack, click the 'Sign up' button on this page and fill in your details. If you're not enrolled with GitHub Education yet, first apply for the GitHub Student Developer Pack, then come back and sign up to Appwrite Cloud here."
	},
	{
		question: "What happens after I sign up?",
		answer: "Appwrite Cloud will automatically verify your GitHub Student Developer Pack membership and apply the Education plan to your account. You can then start using Appwrite right away."
	},
	{
		question: "I'm already an Appwrite user. Can I still apply?",
		answer: "This program is open to all Appwrite users who are verified members of the GitHub Student Developer Pack."
	},
	{
		question: "How long do the Appwrite Education program benefits last?",
		answer: "Your access to the Appwrite Education plan is valid until you finish your studies and graduate from the GitHub Student Developer Pack."
	},
	{
		question: "Does the Education plan include any add-ons?",
		answer: "No, the Education plan does not cover any add-ons."
	},
	{
		question: "Can I use the Education plan for commercial purposes?",
		answer: "No, you may not use the Education plan for any non-educational or commercial purposes."
	}
];
const educationCta = {
	title: "Start building like a team of hundreds with Appwrite",
	description: "Develop your developer skills with Appwrite Pro, join a vibrant community of open-source contributors, and start building with a vast array of frameworks."
};
function View() {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "relative overflow-x-hidden bg-background",
		children: [
			/* @__PURE__ */ jsxs(MarketingHeroSection, {
				eyebrow: educationHero.eyebrow,
				title: educationHero.title,
				description: educationHero.description,
				gradientTitle: true,
				leading: /* @__PURE__ */ jsx(EducationPartnerLogos, {}),
				children: [/* @__PURE__ */ jsx(Button, {
					variant: "brandCta",
					size: "lg",
					className: "h-10 text-[14px]",
					asChild: true,
					children: /* @__PURE__ */ jsx(Link, {
						to: "/sign-up",
						search: { redirect: "/" },
						...analyticsAttrs("education-sign-up"),
						children: t("Sign up now")
					})
				}), /* @__PURE__ */ jsx(Button, {
					variant: "outline",
					size: "lg",
					className: "h-10 text-[14px]",
					asChild: true,
					children: /* @__PURE__ */ jsxs("a", {
						href: educationHero.githubEducationUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						children: [/* @__PURE__ */ jsx(Github, { className: "me-1.5 h-4 w-4" }), "GitHub Education"]
					})
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-b border-border py-14 sm:py-16",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: /* @__PURE__ */ jsx(MarketingFeatureGrid, {
						items: educationFeatureCards,
						columns: 3
					})
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative border-b border-border bg-muted/20",
				children: [/* @__PURE__ */ jsx(SectionSoftLight, { tone: "teal" }), /* @__PURE__ */ jsx("div", {
					className: "relative z-[1] mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20",
					children: /* @__PURE__ */ jsxs("div", {
						className: marketingSplitLayoutClassName({ align: "center" }),
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(MarketingSectionHeading, {
							align: "left",
							size: "md",
							title: educationKickstart.title
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-5 space-y-4 text-[14px] leading-7 text-muted-foreground",
							children: educationKickstart.paragraphs.map((paragraph) => /* @__PURE__ */ jsx("p", { children: t(paragraph) }, paragraph.slice(0, 24)))
						})] }), /* @__PURE__ */ jsx("div", {
							className: "overflow-hidden rounded-xl border border-border bg-card/50",
							children: /* @__PURE__ */ jsx("img", {
								src: educationKickstart.image,
								alt: "",
								className: "h-auto w-full object-cover",
								loading: "lazy"
							})
						})]
					})
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-b border-border py-16 sm:py-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ jsx(MarketingSectionHeading, {
						title: t("Get started today"),
						size: "md"
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-10 grid overflow-hidden rounded-xl border border-border bg-card/45 lg:grid-cols-3",
						children: educationSteps.map((step, index) => /* @__PURE__ */ jsxs("article", {
							className: "flex h-full flex-col border-b border-border p-6 last:border-b-0 lg:border-b-0 lg:border-e lg:last:border-e-0",
							children: [
								/* @__PURE__ */ jsxs(Badge, {
									variant: "info",
									className: "w-fit text-[10px] shrink-0",
									children: [
										t("Step"),
										" ",
										index + 1
									]
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-4 text-[14px] font-semibold text-foreground",
									children: t(step.title)
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 flex-1 text-[13px] leading-6 text-muted-foreground",
									children: t(step.description)
								}),
								/* @__PURE__ */ jsx(Button, {
									variant: "outline",
									className: "mt-6 w-fit",
									asChild: true,
									children: step.external ? /* @__PURE__ */ jsx("a", {
										href: step.href,
										target: "_blank",
										rel: "noopener noreferrer",
										children: t(step.label)
									}) : /* @__PURE__ */ jsx(Link, {
										to: step.href,
										search: { redirect: "/" },
										...step.href === "/sign-up" ? analyticsAttrs("education-sign-up") : {},
										children: t(step.label)
									})
								})
							]
						}, step.title))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-b border-border bg-muted/10 py-16 sm:py-20",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: /* @__PURE__ */ jsxs("div", {
						className: marketingSplitLayoutClassName({ align: "center" }),
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(MarketingSectionHeading, {
							align: "left",
							size: "md",
							title: educationCommunity.title,
							description: educationCommunity.description
						}), /* @__PURE__ */ jsx(Button, {
							variant: "outline",
							className: "mt-6",
							asChild: true,
							children: /* @__PURE__ */ jsx(MarketingSiteLink, {
								href: educationCommunity.discordUrl,
								children: t("Join Discord")
							})
						})] }), /* @__PURE__ */ jsx(CommunitySupportChat, {})]
					})
				})
			}),
			/* @__PURE__ */ jsx(MarketingFaqSection, { items: educationFaqItems }),
			/* @__PURE__ */ jsx(MarketingCtaSection, {
				title: educationCta.title,
				description: educationCta.description,
				children: /* @__PURE__ */ jsx(Button, {
					variant: "brandCta",
					size: "lg",
					className: "h-10 text-[14px]",
					asChild: true,
					children: /* @__PURE__ */ jsx(Link, {
						to: "/sign-up",
						search: { redirect: "/" },
						...analyticsAttrs("education-sign-up"),
						children: t("Sign up")
					})
				})
			})
		]
	});
}
function EducationPage() {
	return /* @__PURE__ */ jsx(View, {});
}
export { EducationPage as component };
