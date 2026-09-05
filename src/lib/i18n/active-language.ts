import { loadDebugOverrides } from '@/lib/debug-overrides'

export type SupportedLanguage = 'en' | 'he' | 'ja' | 'bs'

/**
 * Resolve a stored language preference to a concrete language.
 * Defaults to English when unset or invalid.
 */
export function resolveLanguagePreference(
  preference: DebugLanguageOverride | string,
): SupportedLanguage {
  if (
    preference === 'en' ||
    preference === 'he' ||
    preference === 'ja' ||
    preference === 'bs'
  ) {
    return preference
  }
  return 'bs'
}

/**
 * Current active UI language from the stored preference.
 * Safe to call outside React and during SSR.
 */
export function getActiveLanguage(): SupportedLanguage {
  return resolveLanguagePreference(loadDebugOverrides().language)
}
