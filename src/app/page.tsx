import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { SubjectsSection } from "@/components/SubjectsSection";
import { Differentiation } from "@/components/Differentiation";
import { ProblemSolution } from "@/components/ProblemSolution";
import { SamplesSection } from "@/components/SamplesSection";
import { CTASection } from "@/components/CTASection";
import { AboutBlock } from "@/components/AboutBlock";
import { finalCta, about } from "@/data/home";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <SubjectsSection />
        <Differentiation />
        <ProblemSolution />
        <SamplesSection />
        <AboutBlock eyebrow={about.eyebrow} title={about.title} body={about.body} note={about.note} />
        <CTASection title={finalCta.title} primary={finalCta.primary} secondary={finalCta.secondary} />
      </main>
      <Footer />
    </>
  );
}
