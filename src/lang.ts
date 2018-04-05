'use strict';

export type Lang = 'ja' | 'en';

/**
 * Get a default language based on LANG environment value
 * @param lang
 */
export function getDefaultLang(lang: string | null | void): Lang {
  return lang && lang.startsWith('ja') ? 'ja' : 'en';
}
