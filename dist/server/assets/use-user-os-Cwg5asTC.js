import { C as resolveUserOs, f as useDebugOverrides, h as getUserOsLabel, m as detectUserOs, y as orderOsOptions } from "./i18n-Db4baE06.js";
import { useMemo } from "react";
function useUserOs() {
	const { userOs: override } = useDebugOverrides();
	const detectedOs = useMemo(() => detectUserOs(), []);
	const os = resolveUserOs(override);
	return {
		os,
		detectedOs,
		override,
		label: getUserOsLabel(os),
		orderOptions: (options = [
			"macos",
			"windows",
			"linux"
		]) => orderOsOptions(options, os)
	};
}
export { useUserOs as t };
