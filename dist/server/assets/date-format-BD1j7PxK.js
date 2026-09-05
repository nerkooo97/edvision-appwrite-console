import { i as getActiveLanguage } from "./i18n-Db4baE06.js";
import { format } from "date-fns";
import { enUS } from "date-fns/locale/en-US";
import { he } from "date-fns/locale/he";
import { ja } from "date-fns/locale/ja";
import { enUS as enUS$1 } from "react-day-picker/locale/en-US";
import { he as he$1 } from "react-day-picker/locale/he";
import { ja as ja$1 } from "react-day-picker/locale/ja";
var DATE_FNS_LOCALES = {
	en: enUS,
	he,
	ja
};
var INTL_LOCALES = {
	en: "en-US",
	he: "he-IL",
	ja: "ja-JP"
};
var DAY_PICKER_LOCALES = {
	en: enUS$1,
	he: he$1,
	ja: ja$1
};
function getDateFnsLocale(language = getActiveLanguage()) {
	return DATE_FNS_LOCALES[language] ?? enUS;
}
function getIntlLocale(language = getActiveLanguage()) {
	return INTL_LOCALES[language] ?? "en-US";
}
function getDayPickerLocale(language = getActiveLanguage()) {
	return DAY_PICKER_LOCALES[language] ?? enUS$1;
}
function formatLocalizedDate(date, pattern, language = getActiveLanguage()) {
	return format(date, pattern, { locale: getDateFnsLocale(language) });
}
function formatLocalizedDateTime(date, options, language = getActiveLanguage()) {
	return date.toLocaleString(getIntlLocale(language), options);
}
function formatLocalizedDateShort(date, language = getActiveLanguage()) {
	return date.toLocaleDateString(getIntlLocale(language), {
		day: "numeric",
		month: "short",
		year: "numeric"
	});
}
export { getIntlLocale as a, getDayPickerLocale as i, formatLocalizedDateShort as n, formatLocalizedDateTime as r, formatLocalizedDate as t };
