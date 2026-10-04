import { SectionHeader } from "./SectionHeader";
import { Accordion } from "./Accordion";
import { Reveal } from "./Reveal";

interface QA { q: string; a: string; }
interface Props { eyebrow: string; title: string; items: QA[]; }

export function FAQ({ eyebrow, title, items }: Props) {
  const accItems = items.map((item) => {
    const provisional = item.a.toLowerCase().startsWith("provisional");
    return {
      title: item.q,
      content: <p className={`pt-1 text-sm leading-relaxed ${provisional ? "italic text-muted/80" : "text-muted"}`}>{item.a}</p>,
    };
  });
  return (
    <section id="faq" className="container-x py-20 sm:py-24">
      <SectionHeader eyebrow={eyebrow} title={title} />
      <Reveal className="mx-auto mt-10 max-w-3xl"><Accordion items={accItems} defaultOpen={null} /></Reveal>
    </section>
  );
}
