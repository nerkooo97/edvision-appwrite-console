import { b as getConsoleAccountQueryRevision, v as CONSOLE_IMPERSONATION_CHANGED_EVENT } from "./sdk-DjIJ_hjn.js";
import { useEffect, useState } from "react";
function useConsoleImpersonationRevision() {
	const [rev, setRev] = useState(() => getConsoleAccountQueryRevision());
	useEffect(() => {
		const onChange = () => setRev(getConsoleAccountQueryRevision());
		window.addEventListener(CONSOLE_IMPERSONATION_CHANGED_EVENT, onChange);
		return () => window.removeEventListener(CONSOLE_IMPERSONATION_CHANGED_EVENT, onChange);
	}, []);
	return rev;
}
export { useConsoleImpersonationRevision as t };
