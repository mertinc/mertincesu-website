import { notFound, redirect } from "next/navigation";

export const locales = ["en", "de", "tr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Path for a locale: the default locale lives at the root. */
export function localePath(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

/** Non-throwing resolution, e.g. for generateMetadata. */
export function localeFromSegments(segments?: string[]): Locale | null {
  if (!segments || segments.length === 0) return defaultLocale;
  if (segments.length === 1 && isLocale(segments[0])) return segments[0];
  return null;
}

/** Resolve the [[...lang]] param; redirects /en to / and 404s unknown paths. */
export function resolveLocale(segments?: string[]): Locale {
  if (segments?.length === 1 && segments[0] === defaultLocale) redirect("/");
  const locale = localeFromSegments(segments);
  if (!locale) notFound();
  return locale;
}
