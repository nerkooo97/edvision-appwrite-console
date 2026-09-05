import { r as useI18n } from "./i18n-Db4baE06.js";
import { a as getIntlLocale, i as getDayPickerLocale, n as formatLocalizedDateShort, r as formatLocalizedDateTime, t as formatLocalizedDate } from "./date-format-BD1j7PxK.js";
import { useMemo } from "react";
function useLocalizedDateFormat() {
	const { language } = useI18n();
	return useMemo(() => ({
		language,
		intlLocale: getIntlLocale(language),
		dayPickerLocale: getDayPickerLocale(language),
		formatDate: (date, pattern) => formatLocalizedDate(date, pattern, language),
		formatDateTime: (date, options) => formatLocalizedDateTime(date, options, language),
		formatDateShort: (date) => formatLocalizedDateShort(date, language)
	}), [language]);
}
export { useLocalizedDateFormat as t };
