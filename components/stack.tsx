import Reveal from "./reveal";
import SectionHeader from "./section-header";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";

type Category = Dictionary["stack"]["categories"][number];

function CategoryCard({ title, badge, items }: Category) {
  return (
    <Reveal className="bg-bg p-7">
      <div className="flex items-baseline justify-between mb-5">
        <h3 className="text-[15px] font-medium tracking-tightish">{title}</h3>
        <span className="eyebrow">{badge}</span>
      </div>
      <ul className="space-y-3 font-mono text-[13.5px]">
        {items.map(({ name, note }) => (
          <li key={name} className="flex items-center justify-between">
            <span>{name}</span>
            <span className="text-dim">{note}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function Stack({ dict }: { dict: Dictionary["stack"] }) {
  return (
    <section id="stack" className="border-t border-line">
      <div className="max-w-[1120px] mx-auto px-6 py-24 md:py-32">
        <SectionHeader eyebrow={dict.eyebrow} />

        <Reveal className="max-w-3xl mb-14">
          <h2 className="text-[32px] md:text-[44px] leading-[1.05] tracking-tighter2 font-medium">
            {dict.heading}
          </h2>
          <p className="mt-4 text-muted text-[16px] leading-relaxed">
            {dict.sub}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line rounded-lg overflow-hidden">
          {dict.categories.map((cat) => (
            <CategoryCard key={cat.title} {...cat} />
          ))}
        </div>

        <Reveal className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-3 text-[13px] text-muted">
          <span className="eyebrow mr-2">{dict.alsoLabel}</span>
          {dict.methods.map((m) => (
            <span key={m} className="px-2.5 py-1 rounded-md border border-line font-mono">
              {m}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
