import Link from "next/link";
import { localePath, locales, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";

const NAV_LINKS = [
  { href: "#about", key: "about" },
  { href: "#stack", key: "stack" },
  { href: "#experience", key: "experience" },
  { href: "#contact", key: "contact" },
] as const;

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
          <nav
            aria-label={dict.languageLabel}
            className="flex items-center rounded-md border border-line2 overflow-hidden font-mono text-[11px]"
          >
            {locales.map((l) => (
              <Link
                key={l}
                href={localePath(l)}
                aria-current={l === locale ? "true" : undefined}
                className={`px-2 py-1.5 transition-colors ${
                  l === locale
                    ? "text-fg bg-fg/10"
                    : "text-dim hover:text-fg"
                }`}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </nav>

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
