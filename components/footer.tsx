export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-[1120px] mx-auto px-6 py-10 flex flex-wrap items-center justify-between gap-4 text-[12.5px] text-dim font-mono">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
          <span>© 2026 Mert Incesu</span>

        </div>
        <div className="flex items-center gap-5">
          <a href="#top" className="hover:text-fg transition-colors">
            Back to top ↑
          </a>

        </div>
      </div>
    </footer>
  );
}
