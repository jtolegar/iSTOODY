import { Badge } from "./Badge";
import { PagePlaceholder } from "./PagePlaceholder";
import { Reveal } from "./Reveal";

interface Props {
  eyebrow: string; title: string; subtitle: string; includesLine: string;
  price: string; ctaPrimary: string; ctaNote: string; ctaSecondary: string;
  hotmartUrl: string; sampleFile: string;
}
export function ProductHero({
  eyebrow, title, subtitle, includesLine, price,
  ctaPrimary, ctaNote, ctaSecondary, hotmartUrl, sampleFile,
}: Props) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 50% at 15% 0%, var(--accent-soft), transparent 70%)" }} />
      <div className="container-x relative grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 lg:py-20">
        <div>
          <Reveal><Badge tone="accent">{eyebrow}</Badge></Reveal>
          <Reveal delay={60}>
            <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.08] tracking-[-0.02em] text-ink sm:text-5xl">{title}</h1>
          </Reveal>
          <Reveal delay={110}><p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">{subtitle}</p></Reveal>
          <Reveal delay={150}><p className="mt-6 text-sm font-medium text-ink">{includesLine}</p></Reveal>
          <Reveal delay={200}>
            <div className="mt-7 flex items-baseline gap-2">
              <span className="font-serif text-3xl font-medium text-ink">{price}</span>
              <span className="text-sm text-muted">pago único</span>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a href={hotmartUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-medium text-white shadow-card transition-all hover:brightness-110"
                style={{ backgroundColor: "var(--accent)" }}>{ctaPrimary}</a>
              <a href={sampleFile} download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface px-6 py-3.5 text-base font-medium text-ink transition-colors hover:border-ink/25">
                <svg width="16" height="16" viewBox="0 0 15 15" fill="none" aria-hidden>
                  <path d="M7.5 2v8m0 0L4 6.5M7.5 10L11 6.5M2.5 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {ctaSecondary}
              </a>
            </div>
          </Reveal>
          <Reveal delay={280}><p className="mt-3 text-xs text-muted">{ctaNote}</p></Reveal>
        </div>
        <Reveal delay={160} className="relative">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -left-5 top-6 hidden w-2/3 -rotate-6 sm:block">
              <PagePlaceholder kind="diagram" accent="var(--accent)" className="shadow-card" />
            </div>
            <div className="relative mx-auto w-3/4">
              <PagePlaceholder kind="text" label="Material iSTOODY" accent="var(--accent)" className="shadow-lift" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
