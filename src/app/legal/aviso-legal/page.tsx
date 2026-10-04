import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { legalPages } from "@/data/legal";

const data = legalPages["aviso-legal"];

export const metadata: Metadata = {
  title: data.title,
  description: data.title + " de iSTOODY.",
  alternates: { canonical: "/legal/aviso-legal" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <LegalPage title={data.title} intro={data.intro} sections={data.sections} />;
}
