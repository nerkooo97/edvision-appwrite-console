import { n as useT } from "./translate-DZcqveGn.js";
import { t as AppwriteLogo } from "./AppwriteLogo-SOi0wsVe.js";
import { t as Card } from "./card-BZWeW6wv.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
var CREATE_OAUTH2_SESSION_DOCS = "https://appwrite.io/docs/references/cloud/client-web/account#createOAuth2Session";
function OAuth2RelayCard({ title, preview = false, previewProject, previewError, previewSearch = "" }) {
	const t = useT();
	const [search, setSearch] = useState(preview ? previewSearch : "");
	const [project, setProject] = useState(preview ? previewProject ?? null : null);
	const [oauthError, setOauthError] = useState(preview ? previewError ?? null : null);
	useEffect(() => {
		if (preview) {
			setSearch(previewSearch);
			setProject(previewProject ?? null);
			setOauthError(previewError ?? null);
			return;
		}
		const params = new URLSearchParams(window.location.search);
		setSearch(window.location.search);
		setProject(params.get("project"));
		const errorParam = params.get("error");
		if (errorParam) try {
			setOauthError(JSON.parse(errorParam));
		} catch {
			setOauthError({ message: errorParam });
		}
	}, [
		preview,
		previewProject,
		previewError,
		previewSearch
	]);
	const callbackLink = useMemo(() => project ? `appwrite-callback-${project}://${search}` : null, [project, search]);
	useEffect(() => {
		if (preview || !callbackLink) return;
		window.location.href = callbackLink;
	}, [callbackLink, preview]);
	const content = /* @__PURE__ */ jsx(Card, {
		className: "overflow-hidden p-6 md:p-8",
		children: project ? /* @__PURE__ */ jsxs("div", {
			className: "space-y-2 text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-2xl font-semibold tracking-tight",
					children: title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-muted-foreground text-[13px] leading-relaxed",
					children: t("You will be automatically redirected back to your app shortly.")
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "text-muted-foreground text-[13px] leading-relaxed",
					children: [
						t("If you are not redirected, please click on the following"),
						" ",
						/* @__PURE__ */ jsx("a", {
							href: callbackLink ?? "#",
							className: "link-neutral",
							children: t("link")
						}),
						"."
					]
				})
			]
		}) : oauthError ? /* @__PURE__ */ jsxs("div", {
			className: "space-y-2 text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-2xl font-semibold tracking-tight",
					children: t("Login failed")
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-muted-foreground text-[13px] leading-relaxed",
					children: oauthError.message ?? t("An error occurred during the OAuth login flow.")
				}),
				oauthError.type ? /* @__PURE__ */ jsxs("p", {
					className: "text-muted-foreground text-[12px]",
					children: [
						t("Error type:"),
						" ",
						oauthError.type
					]
				}) : null
			]
		}) : /* @__PURE__ */ jsxs("div", {
			className: "space-y-2 text-center",
			children: [/* @__PURE__ */ jsx("h1", {
				className: "text-2xl font-semibold tracking-tight",
				children: t("Missing redirect URL")
			}), /* @__PURE__ */ jsxs("p", {
				className: "text-muted-foreground text-[13px] leading-relaxed",
				children: [
					t("Your OAuth login flow is missing a proper redirect URL. Please check the"),
					" ",
					/* @__PURE__ */ jsx("a", {
						href: CREATE_OAUTH2_SESSION_DOCS,
						target: "_blank",
						rel: "noreferrer",
						className: "link-neutral",
						children: t("OAuth docs")
					}),
					" ",
					t("and send request for new session with a valid callback URL.")
				]
			})]
		})
	});
	if (preview) return content;
	return /* @__PURE__ */ jsx("div", {
		className: "bg-background relative min-h-svh overflow-y-auto",
		children: /* @__PURE__ */ jsx("div", {
			className: "flex min-h-svh flex-col items-center p-6 md:p-10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "my-auto w-full max-w-xl",
				children: [content, /* @__PURE__ */ jsx("div", {
					className: "mt-10 flex justify-center md:mt-16",
					children: /* @__PURE__ */ jsx(AppwriteLogo, { className: "h-6 w-auto" })
				})]
			})
		})
	});
}
export { OAuth2RelayCard as t };
