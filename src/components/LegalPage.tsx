import { Header } from "./Header";
import { Footer } from "./Footer";

interface Section { h: string; p: string[]; }
interface Props { title: string; intro: string; sections: Section[]; }

export function LegalPage({ title, intro, sections }: Props) {
  return (
    <>
      <Header />
      <main id="main" className="container-x py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <h1 className="font-serif text-3xl font-medium tracking-[-0.02em] text-ink sm:text-4xl">
            {title}
          </h1>

          <p className="mt-6 text-sm text-muted">{intro}</p>

          <div className="prose-legal mt-8">
            {sections.map((s) => (
              <div key={s.h}>
                <h2>{s.h}</h2>
                {s.p.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
