import Reveal from "./reveal";
import ContactForm from "./contact-form";

function Svg({ children }: { children: React.ReactNode }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

function EmailIcon() {
  return <Svg><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Svg>;
}

function GitHubIcon() {
  return <Svg><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" /></Svg>;
}

function LinkedInIcon() {
  return <Svg><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 11v6M8 8v.01M12 17v-4a2 2 0 1 1 4 0v4M12 17v-6" /></Svg>;
}

function GlobeIcon() {
  return <Svg><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></Svg>;
}

const links = [
  {
    icon: EmailIcon,
    label: "Email",
    display: "mert@mertincesu.dev",
    href: "mailto:mert@mertincesu.dev",
    arrow: "→",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    display: "linkedin.com/in/mert-incesu",
    href: "https://linkedin.com/in/mert-incesu",
    arrow: "→",
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    display: "github.com/mertinc",
    href: "https://github.com/mertinc",
    arrow: "→",
  },
  {
    icon: GlobeIcon,
    label: "Resume",
    display: "mertincesu.dev/cv.pdf",
    href: "/cv.pdf",
    arrow: "↓",
  },
] as const;

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="max-w-[1120px] mx-auto px-6 py-24 md:py-32">
        <Reveal className="flex items-center gap-3 mb-12">
          <span className="eyebrow">04 / Contact</span>
          <span className="h-px flex-1 bg-line" aria-hidden="true" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <Reveal className="md:col-span-5">
            <h2 className="text-[32px] md:text-[48px] leading-[1.02] tracking-tighter2 font-medium">
              Get in touch.
              <br />
              <span className="text-muted">
                I respond to every message.
                <span className="caret">&nbsp;</span>
              </span>
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-muted max-w-[42ch]">
              Interested in backend and platform engineering roles across Munich, Berlin, or 
              remote within Europe. Also open to open-source collaborations, personal projects,
              and long-term client or project-based engineering work.
            </p>

            <ul className="mt-10 space-y-px border border-line rounded-lg overflow-hidden">
              {links.map(({ icon: Icon, label, display, href, arrow }) => (
                <li key={label} className="first:border-0 border-t border-line">
                  <a
                    href={href}
                    className="group flex items-center justify-between px-5 py-4 hover-glass transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-md border border-line2 grid place-items-center">
                        <Icon />
                      </span>
                      <span>
                        <span className="block text-[14px]">{label}</span>
                        <span className="block font-mono text-[12.5px] text-muted">
                          {display}
                        </span>
                      </span>
                    </span>
                    <span className="text-muted group-hover:text-fg transition-colors">
                      {arrow}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="md:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
