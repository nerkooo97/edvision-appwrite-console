import { n as useT } from "./translate-DZcqveGn.js";
import { n as DatabaseSelector, t as navigateToDatabaseFromSwitcher } from "./navigate-to-database-switcher-BW05huw_.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Link, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { ChevronLeft } from "lucide-react";
function NativeSidebarDatabaseBar({ projectId, databaseId, databaseName }) {
	const t = useT();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex shrink-0 flex-col border-b border-border bg-background",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-2 border-b border-border px-3 py-2.5",
			children: [/* @__PURE__ */ jsx(Link, {
				to: "/projects/$projectId/databases",
				params: { projectId },
				className: "flex h-6 w-6 cursor-pointer items-center justify-center rounded text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
				"aria-label": t("Back to databases"),
				children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
			}), /* @__PURE__ */ jsx("span", {
				className: "text-[13px] font-medium text-foreground",
				children: t("Databases")
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "flex min-w-0 flex-col gap-2 px-2 py-2",
			children: /* @__PURE__ */ jsx(DatabaseSelector, {
				projectId,
				value: databaseId,
				selectedName: databaseName,
				selectedIsNative: true,
				onSelect: (newDatabaseId, meta) => {
					if (newDatabaseId === databaseId) return;
					navigateToDatabaseFromSwitcher({
						projectId,
						selection: {
							id: newDatabaseId,
							apiType: meta?.apiType,
							engine: meta?.engine,
							product: meta?.product
						},
						navigate: (link) => {
							navigate({
								to: link.to,
								params: link.params
							});
						},
						queryClient
					});
				}
			})
		})]
	});
}
export { NativeSidebarDatabaseBar as t };
