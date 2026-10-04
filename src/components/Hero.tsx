import { hero } from "@/data/home";
import { Button } from "./Button";
import { PagePlaceholder } from "./PagePlaceholder";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)",
        }} />
      <div className="container-x relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:py-24">
        <div className="max-w-xl">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
              {hero.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mt-5 text-balance font-serif text-4xl font-medium leading-[1.08] tracking-[-0.02em] text-ink sm:text-5xl lg:text-[3.4rem]">
              {hero.titleTop}<br />
              <span className="text-[var(--accent)]">{hero.titleBottom}</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">{hero.subtitle}</p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={hero.ctaPrimary.href} size="lg">{hero.ctaPrimary.label}</Button>
              <Button href={hero.ctaSecondary.href} variant="secondary" size="lg">{hero.ctaSecondary.label}</Button>
            </div>
          </Reveal>
        </div>
        <Reveal delay={140} className="relative">
          <div className="relative mx-auto max-w-md lg:mr-0">
            <div className="absolute -left-6 top-8 hidden w-3/5 -rotate-6 sm:block">
              <PagePlaceholder kind="scheme" accent="var(--subject-bio)" className="shadow-card" />
            </div>
            <div className="absolute -right-4 top-4 hidden w-3/5 rotate-6 sm:block">
              <PagePlaceholder kind="table" accent="var(--subject-lit)" className="shadow-card" />
            </div>
            <div className="relative w-4/5 mx-auto sm:w-2/3">
              <PagePlaceholder kind="text" label="Página de teoría" accent="var(--subject-filo)" className="shadow-lift" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
