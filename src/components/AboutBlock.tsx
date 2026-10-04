import { Reveal } from "./Reveal";

interface Props { eyebrow: string; title: string; body: string; note?: string; }
export function AboutBlock({ eyebrow, title, body, note }: Props) {
  return (
    <section id="sobre" className="border-t border-line bg-surface">
      <div className="container-x py-20 sm:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />{eyebrow}
          </span>
          <h2 className="mt-4 font-serif text-2xl font-medium leading-snug tracking-[-0.02em] text-ink sm:text-3xl">{title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{body}</p>
          {note && (
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-dashed border-line px-3 py-1 text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-muted/60" />{note}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
