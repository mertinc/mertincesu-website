import type { Dictionary } from "@/lib/i18n/dictionaries/en";

export default function Footer({ dict }: { dict: Dictionary["footer"] }) {
  return (
    <footer className="border-t border-line">
      <div className="max-w-[1120px] mx-auto px-6 py-10 flex flex-wrap items-center justify-between gap-4 text-[12.5px] text-dim font-mono">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
          <span>{dict.copyright}</span>

        </div>
        <div className="flex items-center gap-5">
          <a href="#top" className="hover:text-fg transition-colors">
            {dict.backToTop}
          </a>

        </div>
      </div>
    </footer>
  );
}
