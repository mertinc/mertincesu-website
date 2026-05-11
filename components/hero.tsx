import Reveal from "./reveal";

function ArrowRightIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

const stats = [
  { label: "Focus", value: "Distributed backends", mono: false },
  { label: "Primary", value: "Kotlin · Spring Boot", mono: true },
  { label: "Experience", value: "3+ years, production", mono: false },
  { label: "Open to", value: "Senior BE · Platform · DE", mono: false },
] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 grid-bg pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative max-w-[1120px] mx-auto px-6 pt-24 md:pt-32 pb-24 md:pb-32">

        <Reveal className="flex items-center gap-2 mb-8 text-[12px] font-mono text-muted">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
          <span>Munich, Germany</span>
          <span className="text-dim">·</span>
          <span>UTC+1</span>
          <span className="text-dim">·</span>
          <span>v2026.05</span>
        </Reveal>

        <Reveal
          as="h1"
          className="text-[44px] sm:text-[64px] md:text-[80px] leading-[0.98] tracking-tighter2 font-medium"
        >
          Backend engineer
          <br />
          building <span className="accent-underline">reliable</span> systems
          <br className="hidden sm:block" />
          <span className="text-muted">at the API layer.</span>
        </Reveal>

        <Reveal
          as="p"
          className="mt-8 max-w-2xl text-[17px] md:text-[18px] leading-relaxed text-muted"
        >
          I&apos;m <span className="text-fg">Mert Incesu</span> — a software
          engineer with 3+ years of experience designing and shipping production
          microservices in Kotlin, Java and Spring Boot. I care about clear
          contracts, observability, and code that ages well.
        </Reveal>

        <Reveal className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-fg text-bg text-[14px] font-medium hover:bg-fg/90 transition-colors"
          >
            View projects
            <ArrowRightIcon />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-line2 text-[14px] hover:border-fg/40 hover-glass transition-colors"
          >
            Get in touch
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-line text-[14px] text-muted hover:text-fg hover:border-line2 transition-colors"
          >
            <DownloadIcon />
            Download CV
          </a>
        </Reveal>

        <Reveal className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line rounded-lg overflow-hidden">
          {stats.map(({ label, value, mono }) => (
            <div key={label} className="bg-bg p-5">
              <div className="eyebrow">{label}</div>
              <div
                className={`mt-2 text-[15px] tracking-tightish${
                  mono ? " font-mono" : ""
                }`}
              >
                {value}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
