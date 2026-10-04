import { SectionHeader } from "./SectionHeader";
import { Accordion } from "./Accordion";
import { Reveal } from "./Reveal";

interface Block { title: string; topics: string[]; }
interface Props { eyebrow: string; title: string; note?: string; blocks: Block[]; }

export function ProductIndex({ eyebrow, title, note, blocks }: Props) {
  const items = blocks.map((b) => ({
    title: b.title,
    content: (
      <ul className="space-y-2.5 pt-1">
        {b.topics.map((topic, i) => {
          const soon = topic.toLowerCase().includes("próximamente") || topic.toLowerCase().includes("provisional");
          return (
            <li key={i} className="flex items-center gap-3 text-sm text-muted">
              <span className="h-1 w-1 flex-none rounded-full" style={{ backgroundColor: "var(--accent)", opacity: 0.6 }} />
              <span className={soon ? "italic opacity-70" : ""}>{topic}</span>
            </li>
          );
        })}
      </ul>
    ),
  }));
  return (
    <section className="container-x py-20 sm:py-24">
      <SectionHeader eyebrow={eyebrow} title={title} />
      {note && (
        <Reveal>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-dashed border-line px-3 py-1 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-muted/60" />{note}
          </p>
        </Reveal>
      )}
      <Reveal className="mt-8"><Accordion items={items} /></Reveal>
    </section>
  );
}
