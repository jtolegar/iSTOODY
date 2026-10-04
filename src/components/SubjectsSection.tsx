import { subjects } from "@/data/subjects";
import { SubjectCard } from "./SubjectCard";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function SubjectsSection() {
  return (
    <section id="asignaturas" className="container-x py-20 sm:py-24">
      <SectionHeader eyebrow="Asignaturas" title="Prepara cada asignatura con un sistema completo"
        intro="Cada asignatura es un producto independiente con teoría, práctica y repaso. Ya disponibles Biología, Filosofía, Literatura e Historia." />
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((s, i) => (
          <Reveal key={s.slug} delay={i * 60}><SubjectCard subject={s} /></Reveal>
        ))}
      </div>
    </section>
  );
}
