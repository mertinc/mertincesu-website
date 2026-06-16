import Image from "next/image";
import Reveal from "./reveal";
import SectionHeader from "./section-header";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";

export default function About({ dict }: { dict: Dictionary["about"] }) {
  return (
    <section id="about" className="border-t border-line">
      <div className="max-w-[1120px] mx-auto px-6 py-24 md:py-32">
        <SectionHeader eyebrow={dict.eyebrow} />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          {/* Photo placeholder */}
          <Reveal className="md:col-span-4">
            <div className="relative aspect-[4/5] rounded-lg border border-line overflow-hidden">
              <Image
                src="/portrait.jpg"
                alt={dict.portraitAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </Reveal>

          {/* Bio */}
          <Reveal className="md:col-span-8">
            <h2 className="text-[32px] md:text-[40px] leading-[1.05] tracking-tighter2 font-medium max-w-[20ch]">
              {dict.heading}
            </h2>

            <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-muted max-w-[62ch]">
              <p>{dict.p1}</p>
              <p>
                {dict.p2.pre}
                <span className="text-fg">{dict.p2.accent}</span>
                {dict.p2.post}
              </p>
            </div>

            <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-5">
              {dict.facts.map(({ label, value }) => (
                <div key={label}>
                  <dt className="eyebrow">{label}</dt>
                  <dd className="mt-1.5 text-[14px] whitespace-nowrap">{value}</dd>
                </div>
              ))}
              <div>
                <dt className="eyebrow">{dict.statusLabel}</dt>
                <dd className="mt-1.5 text-[14px] flex items-center gap-1.5 whitespace-nowrap">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {dict.statusValue}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
