import Link from "next/link";
import type { Subject } from "@/data/subjects";
import { Badge } from "./Badge";

export function SubjectCard({ subject }: { subject: Subject }) {
  const available = subject.status === "available";
  const accent = subject.accentVar;
  const CardInner = (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover">
      <span className="absolute left-0 top-5 h-8 w-1 rounded-r-full transition-all duration-300 group-hover:h-12"
        style={{ backgroundColor: accent, opacity: 0.7 }} aria-hidden />
      <div className="flex items-start justify-between pl-2">
        <span className="font-serif text-lg italic" style={{ color: accent }}>{subject.glyph}</span>
        {available ? <Badge tone="neutral">Disponible</Badge> : <Badge tone="soon">Próximamente</Badge>}
      </div>
      <h3 className="mt-3 pl-2 text-lg font-semibold tracking-[-0.01em] text-ink">{subject.name}</h3>
      <p className="mt-1.5 pl-2 text-sm leading-relaxed text-muted">{subject.short}</p>
      <div className="mt-4 flex items-center justify-between border-t border-line pl-2 pt-4">
        <span className="text-sm font-medium text-ink">{available ? subject.fromPrice : "—"}</span>
        <span className="inline-flex items-center gap-1 text-sm font-medium transition-colors"
          style={{ color: available ? accent : "var(--color-muted)" }}>
          {available ? "Ver material" : "En preparación"}
          {available && (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
              className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden>
              <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
      </div>
    </article>
  );
  if (available) {
    return (
      <Link href={subject.href} className="block h-full rounded-card focus-visible:outline-2 focus-visible:outline-offset-2"
        aria-label={`Ver material de ${subject.name}`}>{CardInner}</Link>
    );
  }
  return <div className="h-full">{CardInner}</div>;
}
