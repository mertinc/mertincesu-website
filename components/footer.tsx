import type { Dictionary } from "@/lib/i18n/dictionaries/en";

export default function Footer({ dict }: { dict: Dictionary["footer"] }) {
  return (
    <footer className="border-t border-line">
      <div className="max-w-[1120px] mx-auto px-6 pt-10 pb-8 flex flex-col gap-4 text-[12.5px] text-dim font-mono">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
            <span>{dict.copyright}</span>
          </div>
          <a href="#top" className="hover:text-fg transition-colors">
            {dict.backToTop}
          </a>
        </div>
        <p className="text-[11px] text-dim/60">{dict.rights}</p>
      </div>
    </footer>
  );
}
