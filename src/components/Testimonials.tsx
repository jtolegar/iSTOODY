import { testimonials as t } from "@/data/home";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function Testimonials() {
  if (!t.show) return null;
  return (
    <section className="container-x py-20 sm:py-24">
      <SectionHeader eyebrow={t.eyebrow} title={t.title} />
      <Reveal>
        <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-dashed border-line px-3 py-1 text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-muted/60" />{t.note}
        </p>
      </Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.placeholders.map((p, i) => (
          <Reveal key={i} delay={i * 60}>
            <figure className="flex h-full flex-col rounded-card border border-dashed border-line bg-surface p-6">
              <blockquote className="flex-1 text-[15px] leading-relaxed text-muted"><span className="italic">“{p.quote}”</span></blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-dashed border-line pt-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/[0.04] text-xs font-medium text-muted">A·A</span>
                <span className="text-sm">
                  <span className="block font-medium text-ink/70">{p.name}</span>
                  <span className="block text-xs text-muted">{p.result}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
