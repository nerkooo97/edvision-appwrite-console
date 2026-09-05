import "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import { d as sdk } from "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-CL7SLzjY.js";
import "./constants-Dd6QzW31.js";
import "./constants-BDeF927R.js";
import "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import { b as performConsoleSignOut, w as refreshConsoleAccountAfterAuth } from "./auth-BPuxYQAc.js";
import "./projects-BaTJenfQ.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { r as useAuth } from "./RequireAuth-DahioVQe.js";
import "./HeaderAlertBar-CK7Gy4sE.js";
import { t as AppwriteLogo } from "./AppwriteLogo-SOi0wsVe.js";
import { t as Card } from "./card-BZWeW6wv.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, useRouter, useSearch } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AppwriteException } from "@appwrite.io/console";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { CheckCircle, Loader2, UserRoundX, XCircle } from "lucide-react";
function getJoinRedirectUrl() {
	if (typeof window === "undefined") return "/join";
	return `${window.location.pathname}${window.location.search}`;
}
function AcceptInvitePage() {
	const { isAuthenticated, isLoading } = useAuth();
	const navigate = useNavigate();
	useEffect(() => {
		if (!isLoading && !isAuthenticated) {
			const rawSearch = typeof window !== "undefined" ? window.location.search : "";
			const searchStr = rawSearch.startsWith("?") ? rawSearch.slice(1) : rawSearch;
			const redirectUrl = `/join${searchStr ? `?${searchStr}` : ""}`;
			if (redirectUrl.startsWith("/") && !redirectUrl.includes("://")) navigate({
				to: "/sign-in",
				search: { redirect: redirectUrl }
			});
			else navigate({ to: "/sign-in" });
		}
	}, [
		isLoading,
		isAuthenticated,
		navigate
	]);
	if (isLoading) return /* @__PURE__ */ jsx("div", {
		className: "bg-background relative flex min-h-svh flex-col items-center justify-center p-6 md:p-10",
		children: /* @__PURE__ */ jsx(Loader2, { className: "h-8 w-8 animate-spin text-muted-foreground" })
	});
	if (!isAuthenticated) return null;
	return /* @__PURE__ */ jsx(AcceptInviteContent, {});
}
function AcceptInviteContent() {
	const t = useT();
	const search = useSearch({ from: "/_auth/join" });
	const navigate = useNavigate();
	const router = useRouter();
	const queryClient = useQueryClient();
	const { account: accountUnknown } = useAuth();
	const account = accountUnknown;
	const [accepted, setAccepted] = useState(false);
	const [error, setError] = useState(null);
	const [errorIsAccountMismatch, setErrorIsAccountMismatch] = useState(false);
	const [teamName, setTeamName] = useState(null);
	const [isSwitchingAccount, setIsSwitchingAccount] = useState(false);
	const hasAllParams = search.teamId && search.membershipId && search.userId && search.secret;
	const isWrongAccount = !!hasAllParams && !!account && account.$id !== search.userId;
	const handleSwitchAccount = () => {
		setIsSwitchingAccount(true);
		performConsoleSignOut(queryClient, { redirect: getJoinRedirectUrl() });
	};
	useEffect(() => {
		if (hasAllParams && !isWrongAccount) sdk.forConsole.teams.get(search.teamId).then((team) => {
			return sdk.forConsole.teams.listMemberships(search.teamId, []).then((membershipsResponse) => {
				if (membershipsResponse.memberships?.find((m) => m.$id === search.membershipId && m.userId === search.userId)) setTeamName(team.name || null);
			});
		}).catch((err) => {
			console.warn("Failed to verify invitation:", err);
		});
	}, [
		hasAllParams,
		isWrongAccount,
		search.teamId,
		search.membershipId,
		search.userId
	]);
	const acceptMutation = useMutation({
		mutationFn: async () => {
			if (!hasAllParams) throw new Error("Missing required invitation parameters");
			return await sdk.forConsole.teams.updateMembershipStatus({
				teamId: search.teamId,
				membershipId: search.membershipId,
				userId: search.userId,
				secret: search.secret
			});
		},
		onSuccess: async () => {
			setAccepted(true);
			toast.success(t("Successfully joined the organization!"));
			await refreshConsoleAccountAfterAuth(queryClient);
			await router.invalidate();
			setTimeout(() => {
				if (search.teamId) navigate({
					to: "/organizations/$orgId",
					params: { orgId: search.teamId }
				});
				else navigate({ to: "/" });
			}, 2e3);
		},
		onError: (err) => {
			const errorMessage = err?.message || t("Failed to accept invitation");
			setError(errorMessage);
			setErrorIsAccountMismatch(err instanceof AppwriteException && err.type === "team_invite_mismatch");
			toast.error(errorMessage);
		}
	});
	const handleAccept = () => {
		setError(null);
		setErrorIsAccountMismatch(false);
		acceptMutation.mutate();
	};
	return /* @__PURE__ */ jsx("div", {
		className: "bg-background relative flex min-h-svh flex-col items-center justify-center p-6 md:p-10",
		children: /* @__PURE__ */ jsxs("div", {
			className: "w-full max-w-sm md:max-w-4xl",
			children: [
				/* @__PURE__ */ jsx(Card, {
					className: "overflow-hidden py-0",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid md:grid-cols-2",
						children: [/* @__PURE__ */ jsx("div", {
							className: "p-6 md:p-10 min-h-[600px] flex flex-col justify-center",
							children: accepted ? /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col items-center text-center space-y-4",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10",
									children: /* @__PURE__ */ jsx(CheckCircle, { className: "h-8 w-8 text-green-500" })
								}), /* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsx("h1", {
										className: "text-2xl font-semibold tracking-tight",
										children: t("Welcome to the organization!")
									}), /* @__PURE__ */ jsx("p", {
										className: "text-sm text-muted-foreground",
										children: t("You've successfully joined. Redirecting you now...")
									})]
								})]
							}) : isWrongAccount ? /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col items-center text-center space-y-4",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/10",
										children: /* @__PURE__ */ jsx(UserRoundX, { className: "h-8 w-8 text-amber-500" })
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ jsx("h1", {
											className: "text-2xl font-semibold tracking-tight",
											children: t("You're signed in with a different account")
										}), /* @__PURE__ */ jsxs("p", {
											className: "text-sm text-muted-foreground",
											children: [
												t("This invitation was sent to a different account."),
												" ",
												t("You're currently signed in as"),
												" ",
												/* @__PURE__ */ jsx("span", {
													className: "font-medium text-foreground",
													children: account?.email
												}),
												". ",
												t("Switch to the account the invitation was sent to in order to accept it.")
											]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mt-4 w-full space-y-3",
										children: [/* @__PURE__ */ jsx(Button, {
											onClick: handleSwitchAccount,
											disabled: isSwitchingAccount,
											className: "w-full",
											children: t("Switch account")
										}), /* @__PURE__ */ jsx(Button, {
											onClick: () => navigate({ to: "/" }),
											disabled: isSwitchingAccount,
											variant: "ghost",
											className: "w-full",
											children: t("Go to dashboard")
										})]
									})
								]
							}) : error ? /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col items-center text-center space-y-4",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10",
										children: /* @__PURE__ */ jsx(XCircle, { className: "h-8 w-8 text-red-500" })
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ jsx("h1", {
											className: "text-2xl font-semibold tracking-tight",
											children: t("Unable to accept invitation")
										}), /* @__PURE__ */ jsx("p", {
											className: "text-sm text-muted-foreground",
											children: error
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mt-4 w-full space-y-3",
										children: [errorIsAccountMismatch && /* @__PURE__ */ jsx(Button, {
											onClick: handleSwitchAccount,
											disabled: isSwitchingAccount,
											variant: "outline",
											className: "w-full",
											children: t("Switch account")
										}), /* @__PURE__ */ jsx(Button, {
											onClick: () => navigate({ to: "/" }),
											disabled: isSwitchingAccount,
											variant: errorIsAccountMismatch ? "ghost" : "outline",
											className: "w-full",
											children: t("Go to dashboard")
										})]
									})
								]
							}) : !hasAllParams ? /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col items-center text-center space-y-4",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/10",
										children: /* @__PURE__ */ jsx(XCircle, { className: "h-8 w-8 text-amber-500" })
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ jsx("h1", {
											className: "text-2xl font-semibold tracking-tight",
											children: t("Invalid invitation link")
										}), /* @__PURE__ */ jsx("p", {
											className: "text-sm text-muted-foreground",
											children: t("This invitation link is missing required parameters. Please use the link from your invitation email.")
										})]
									}),
									/* @__PURE__ */ jsx(Button, {
										onClick: () => navigate({ to: "/" }),
										variant: "outline",
										className: "mt-4",
										children: t("Go to dashboard")
									})
								]
							}) : /* @__PURE__ */ jsxs("div", {
								className: "space-y-6",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsx("h1", {
										className: "text-2xl font-semibold tracking-tight",
										children: t("Accept invitation")
									}), teamName ? /* @__PURE__ */ jsxs("p", {
										className: "text-sm text-muted-foreground",
										children: [
											t("You've been invited to join"),
											" ",
											/* @__PURE__ */ jsx("span", {
												className: "font-medium text-foreground",
												children: teamName
											}),
											". ",
											t("Accept the invitation to get started.")
										]
									}) : /* @__PURE__ */ jsx("p", {
										className: "text-sm text-muted-foreground",
										children: t("You've been invited to join an organization. Accept the invitation to get started.")
									})]
								}), /* @__PURE__ */ jsx("div", {
									className: "space-y-4",
									children: /* @__PURE__ */ jsx(Button, {
										onClick: handleAccept,
										disabled: acceptMutation.isPending || !hasAllParams,
										className: "w-full",
										children: t("Accept invitation")
									})
								})]
							})
						}), /* @__PURE__ */ jsx("div", {
							className: "hidden bg-background md:block min-h-[600px]",
							children: /* @__PURE__ */ jsx("img", {
								alt: "Image",
								className: "h-full w-full object-cover",
								height: "600",
								src: "/cover.avif",
								width: "600"
							})
						})]
					})
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mt-6 text-center text-xs text-muted-foreground",
					children: [
						t("By accepting this invitation, you agree to our"),
						" ",
						/* @__PURE__ */ jsx("a", {
							href: "#",
							className: "link-neutral",
							children: t("Terms of Service")
						}),
						" ",
						t("and"),
						" ",
						/* @__PURE__ */ jsx("a", {
							href: "#",
							className: "link-neutral",
							children: t("Privacy Policy")
						}),
						"."
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-10 md:mt-16 flex justify-center",
					children: /* @__PURE__ */ jsx(AppwriteLogo, { className: "h-6 w-auto" })
				})
			]
		})
	});
}
export { AcceptInvitePage as component };
