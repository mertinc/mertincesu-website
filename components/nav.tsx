const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  // { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
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
            / software engineer
          </span>
        </a>

        <nav aria-label="Site sections" className="hidden md:flex items-center gap-7 text-[13px] text-muted">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="hover:text-fg transition-colors">
              {label}
            </a>
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
          Available for work
        </a>
      </div>
    </header>
  );
}
