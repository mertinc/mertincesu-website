import Link from "next/link";
import { localePath, locales, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";
import { ThemeToggle } from "./theme-toggle";

const NAV_LINKS = [
  { href: "#about", key: "about" },
  { href: "#stack", key: "stack" },
  { href: "#experience", key: "experience" },
  { href: "#contact", key: "contact" },
] as const;

const LOCALE_LABELS: Record<string, string> = {
  en: "English",
  de: "Deutsch",
  tr: "Türkçe",
};

export default function Nav({
  dict,
  locale,
}: {
  dict: Dictionary["nav"];
  locale: Locale;
}) {
  return (
    <header className="fixed top-0 inset-x-0 z-40 nav-blur border-b border-line">
      <div className="max-w-[1120px] mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-md border border-line2 text-fg font-mono text-[12px] font-medium">
            mi
          </span>
          <span className="font-medium tracking-tightish text-[14px]">
            Mert Incesu
          </span>
          <span className="hidden sm:inline text-dim text-[13px] font-mono">
            / {dict.role}
          </span>
        </a>

        <nav aria-label="Site sections" className="hidden md:flex items-center gap-7 text-[13px] text-muted">
          {NAV_LINKS.map(({ href, key }) => (
            <a key={href} href={href} className="hover:text-fg transition-colors">
              {dict.links[key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <details
            className="group relative"
            aria-label={dict.languageLabel}
          >
            <summary className="flex items-center gap-1 px-2.5 py-1.5 rounded-md border border-line2 font-mono text-[11px] text-dim hover:text-fg cursor-pointer transition-colors select-none list-none [&::-webkit-details-marker]:hidden">
              {locale.toUpperCase()}
              <svg
                width="9" height="9" viewBox="0 0 9 9"
                fill="none" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"
                className="transition-transform duration-150 group-open:rotate-180"
                aria-hidden="true"
              >
                <path d="M1.5 3L4.5 6L7.5 3"/>
              </svg>
            </summary>
            <div className="absolute right-0 top-full mt-1 min-w-[88px] rounded-md border border-line2 bg-bg overflow-hidden z-50">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={localePath(l)}
                  aria-current={l === locale ? "true" : undefined}
                  className={`flex items-center px-3 py-1.5 font-mono text-[11px] transition-colors ${
                    l === locale
                      ? "text-fg bg-fg/10"
                      : "text-dim hover:text-fg hover:bg-fg/5"
                  }`}
                >
                  {LOCALE_LABELS[l]}
                </Link>
              ))}
            </div>
          </details>

          <ThemeToggle />

          <a
            href="#contact"
            className="text-[13px] inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-line2 hover:border-fg/40 hover-glass transition-colors"
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot"
              aria-hidden="true"
            />
            <span className="hidden sm:inline">{dict.available}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
