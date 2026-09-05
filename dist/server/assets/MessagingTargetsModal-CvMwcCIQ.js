import { n as useT } from "./translate-DZcqveGn.js";
import { Uo as MESSAGING_TARGET_PICKER_PAGE_SIZE, ns as messagingTargetPickerUsersQueryOptions } from "./hooks-BONwG3Mt.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { n as CollapsibleContent, r as CollapsibleTrigger, t as Collapsible } from "./collapsible-BcDIDOgI.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { t as Pagination } from "./Pagination-BDei8M4v.js";
import { t as Checkbox } from "./checkbox-r_hqIB3d.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ChevronDown, ChevronRight, Users } from "lucide-react";
function filterTargetsForProvider(user, providerType) {
	const targets = user.targets || [];
	if (!providerType) return targets;
	return targets.filter((t) => t.providerType === providerType);
}
function providerLabel(type) {
	if (type === "email") return "Email";
	if (type === "sms") return "SMS";
	if (type === "push") return "Push";
	return type;
}
function MessagingTargetsModal({ open, onOpenChange, title, description, projectId, providerType, initialSelectedById, onConfirm }) {
	const t = useT();
	const [search, setSearch] = useState("");
	const [debouncedSearch, setDebouncedSearch] = useState("");
	const [page, setPage] = useState(1);
	const [selectedById, setSelectedById] = useState({});
	const [openUsers, setOpenUsers] = useState({});
	useEffect(() => {
		const t$1 = setTimeout(() => setDebouncedSearch(search.trim()), 300);
		return () => clearTimeout(t$1);
	}, [search]);
	const { data, isLoading } = useQuery(messagingTargetPickerUsersQueryOptions(projectId, page - 1, 25, debouncedSearch, providerType ?? null));
	const users = data?.users ?? [];
	const total = data?.total ?? 0;
	useEffect(() => {
		if (!open) return;
		const next = {};
		for (const [id, t$1] of Object.entries(initialSelectedById)) if (t$1) next[id] = t$1;
		setSelectedById(next);
	}, [open, initialSelectedById]);
	useEffect(() => {
		if (!open) {
			setSearch("");
			setDebouncedSearch("");
			setPage(1);
			setOpenUsers({});
		}
	}, [open]);
	const usersWithTargets = useMemo(() => {
		return users.map((u) => ({
			user: u,
			targets: filterTargetsForProvider(u, providerType)
		})).filter((row) => row.targets.length > 0);
	}, [users, providerType]);
	const toggleTarget = (target, checked) => {
		setSelectedById((prev) => {
			const next = { ...prev };
			if (checked) next[target.$id] = target;
			else delete next[target.$id];
			return next;
		});
	};
	const toggleUserRow = (user, checked) => {
		const targets = filterTargetsForProvider(user, providerType);
		setSelectedById((prev) => {
			const next = { ...prev };
			for (const t$1 of targets) if (checked) next[t$1.$id] = t$1;
			else delete next[t$1.$id];
			return next;
		});
	};
	const userCheckboxState = (user) => {
		const targets = filterTargetsForProvider(user, providerType);
		if (targets.length === 0) return {
			checked: false,
			disabled: true
		};
		let selected = 0;
		for (const t$1 of targets) if (selectedById[t$1.$id]) selected++;
		if (selected === 0) return {
			checked: false,
			disabled: false
		};
		if (selected === targets.length) return {
			checked: true,
			disabled: false
		};
		return {
			checked: "indeterminate",
			disabled: false
		};
	};
	const handleConfirm = () => {
		onConfirm({ ...selectedById });
		onOpenChange(false);
	};
	const handleCancel = () => {
		onOpenChange(false);
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-2xl p-0 max-h-[80dvh] flex flex-col",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: title }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: description
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 pb-4 pt-0 flex-1 min-h-0 flex flex-col gap-4",
					children: [
						/* @__PURE__ */ jsx(Input, {
							placeholder: t("Search by name, email, phone or ID..."),
							value: search,
							onChange: (e) => {
								setSearch(e.target.value);
								setPage(1);
							},
							className: "h-9"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex-1 min-h-0 overflow-y-auto space-y-2",
							children: isLoading ? /* @__PURE__ */ jsx("div", {
								className: "text-center py-8 text-sm text-muted-foreground",
								children: t("Loading users…")
							}) : usersWithTargets.length === 0 ? /* @__PURE__ */ jsx(EmptyState, {
								icon: Users,
								isEmpty: !debouncedSearch,
								hasFilters: !!debouncedSearch,
								className: "py-8"
							}) : usersWithTargets.map(({ user, targets }) => {
								const rowState = userCheckboxState(user);
								const isOpen = openUsers[user.$id] ?? false;
								return /* @__PURE__ */ jsxs(Collapsible, {
									open: isOpen,
									onOpenChange: (o) => setOpenUsers((s) => ({
										...s,
										[user.$id]: o
									})),
									className: "rounded-lg border border-border bg-card",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 px-3 py-2",
										children: [/* @__PURE__ */ jsx(Checkbox, {
											checked: rowState.checked === "indeterminate" ? "indeterminate" : rowState.checked,
											disabled: rowState.disabled,
											onCheckedChange: (v) => {
												toggleUserRow(user, v === true || v === "indeterminate");
											},
											onClick: (e) => e.stopPropagation()
										}), /* @__PURE__ */ jsxs(CollapsibleTrigger, {
											className: "flex flex-1 items-center gap-2 text-start min-w-0",
											children: [
												isOpen ? /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground" }) : /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 shrink-0 text-muted-foreground" }),
												/* @__PURE__ */ jsx("span", {
													className: "truncate text-[13px] font-medium text-foreground",
													children: user.name || user.email || user.phone || user.$id
												}),
												/* @__PURE__ */ jsxs(Badge, {
													variant: "info",
													className: "text-[10px] shrink-0",
													children: [
														targets.filter((t$1) => selectedById[t$1.$id]).length,
														"/",
														targets.length
													]
												})
											]
										})]
									}), /* @__PURE__ */ jsx(CollapsibleContent, { children: /* @__PURE__ */ jsx("div", {
										className: "border-t border-border px-3 py-2 space-y-2",
										children: targets.map((target) => /* @__PURE__ */ jsxs("div", {
											className: "flex items-start gap-2 ps-6",
											children: [/* @__PURE__ */ jsx(Checkbox, {
												checked: !!selectedById[target.$id],
												onCheckedChange: (v) => toggleTarget(target, v === true),
												className: "mt-0.5"
											}), /* @__PURE__ */ jsxs("div", {
												className: "flex flex-wrap items-center gap-2 min-w-0",
												children: [/* @__PURE__ */ jsx(Badge, {
													variant: "info",
													className: "text-[10px] shrink-0",
													children: t(providerLabel(target.providerType))
												}), /* @__PURE__ */ jsx("span", {
													className: "text-[13px] text-foreground break-all",
													children: target.providerType === "push" ? target.name || target.identifier : target.identifier
												})]
											})]
										}, target.$id))
									}) })]
								}, user.$id);
							})
						}),
						total > 25 ? /* @__PURE__ */ jsx(Pagination, {
							className: "pt-1",
							currentPage: page,
							totalItems: total,
							pageSize: 25,
							onPageChange: setPage,
							onPageSizeChange: () => {},
							showPageSizeSelector: false,
							itemLabel: t("users")
						}) : null
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: handleCancel,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						onClick: handleConfirm,
						children: t("Save selection")
					})]
				})
			]
		})
	});
}
export { MessagingTargetsModal as t };
