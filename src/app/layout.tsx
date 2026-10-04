import type { Metadata } from "next";
import { site } from "@/data/site";
import "./globals.css";

/*
  ⚠️ FUENTES
  --------------------------------------------------------------
  Para la tipografía definitiva (Inter + Fraunces) con next/font,
  DESCOMENTA este bloque, añade `${inter.variable} ${fraunces.variable}`
  al <html> de abajo y borra el className vacío. En Vercel y en
  tu máquina funciona; en el preview se usa fallback del sistema.

  import { Inter, Fraunces } from "next/font/google";
  const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
  const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-serif", display: "swap", axes: ["opsz"] });
*/

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · Apuntes y materiales para 2º de Bachillerato y PAU`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: site.name,
    title: `${site.name} · Materiales para 2º de Bachillerato y PAU`,
    description: site.description,
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: site.name }], // PLACEHOLDER
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · Materiales para 2º de Bachillerato y PAU`,
    description: site.description,
    images: ["/og-default.png"], // PLACEHOLDER
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <a href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
