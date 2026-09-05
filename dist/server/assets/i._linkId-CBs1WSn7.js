import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import "./translate-DZcqveGn.js";
import "./error-formatting-CL2hjGy5.js";
import { i as isValidAffiliateLinkId, t as buildAffiliateApiInviteUrl } from "./invite-url-B18y3cBt.js";
import { t as Route } from "./i._linkId-DupQpBsO.js";
import { useLayoutEffect } from "react";
function AffiliateInviteRedirect() {
	const { linkId: rawLinkId } = Route.useParams();
	useLayoutEffect(() => {
		const linkId = rawLinkId?.trim() ?? "";
		if (!isValidAffiliateLinkId(linkId)) {
			window.location.replace("/sign-up");
			return;
		}
		window.location.replace(buildAffiliateApiInviteUrl(linkId));
	}, [rawLinkId]);
	return null;
}
export { AffiliateInviteRedirect as component };
