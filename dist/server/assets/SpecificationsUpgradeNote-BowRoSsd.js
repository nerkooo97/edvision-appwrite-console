import { n as useT } from "./translate-DZcqveGn.js";
import { t as CONTACT_ENTERPRISE_URL } from "./constants-BHoPnAWz.js";
import { t as UpgradePlanLink } from "./UpgradePlanLink-BCG1Z_E2.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var CONTACT_SALES_URL = CONTACT_ENTERPRISE_URL;
function SpecificationsUpgradeNote({ orgId, showContactSales = false }) {
	const t = useT();
	return /* @__PURE__ */ jsx("div", {
		className: "rounded-lg border border-border bg-muted/30 px-3 py-2.5",
		children: /* @__PURE__ */ jsxs("p", {
			className: "text-[12px] text-muted-foreground",
			children: [
				t("Need more resources?"),
				" ",
				/* @__PURE__ */ jsx(UpgradePlanLink, { orgId }),
				" ",
				showContactSales ? /* @__PURE__ */ jsxs(Fragment, { children: [
					t("or"),
					" ",
					/* @__PURE__ */ jsx("a", {
						href: CONTACT_SALES_URL,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "font-medium text-foreground underline hover:no-underline",
						children: t("contact sales")
					}),
					" "
				] }) : null,
				t("to unlock additional specifications.")
			]
		})
	});
}
export { SpecificationsUpgradeNote as t };
