import { problemSolution as ps } from "@/data/home";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function ProblemSolution() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="container-x py-20 sm:py-24">
        <SectionHeader eyebrow={ps.eyebrow} title={ps.title} intro={ps.intro} />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-card border border-line bg-paper p-6 sm:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-muted">Cómo estás ahora</h3>
              <ul className="mt-5 space-y-3.5">
                {ps.problems.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-ink/80">
                    <span className="mt-2 h-1 w-3 flex-none rounded-full bg-muted/50" aria-hidden />
                    <span className="text-[15px]">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="h-full rounded-card border p-6 sm:p-8" style={{ borderColor: "var(--accent)", backgroundColor: "var(--accent-soft)" }}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--accent)" }}>Con iSTOODY</h3>
              <ul className="mt-5 space-y-3.5">
                {ps.solutions.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-ink">
                    <svg className="mt-0.5 h-4 w-4 flex-none" viewBox="0 0 16 16" fill="none" style={{ color: "var(--accent)" }} aria-hidden>
                      <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[15px] font-medium">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
