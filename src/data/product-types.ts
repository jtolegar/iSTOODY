/*
  Tipo común a todas las páginas de producto (Biología,
  Filosofía, Literatura, Historia…). Así todas comparten los
  mismos componentes y crear una nueva es copiar un objeto.
*/

export type GalleryKind = "text" | "table" | "scheme" | "diagram";

export interface Product {
  slug: string;
  accentVar: string;
  accentSoft: string;

  hotmartUrl: string; // enlace de pago real
  sampleFile: string; // PDF de muestra en /public
  price: string;

  seo: {
    title: string;
    description: string;
    canonical: string;
    ogImage: string; // PLACEHOLDER
  };

  schema: {
    name: string;
    description: string;
    price: string; // "19.99"
  };

  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    includesLine: string;
    ctaPrimary: string;
    ctaNote: string;
    ctaSecondary: string;
  };

  includes: {
    eyebrow: string;
    title: string;
    items: { title: string; desc: string }[];
  };

  index: {
    eyebrow: string;
    title: string;
    note?: string;
    blocks: { title: string; topics: string[] }[];
  };

  gallery: {
    eyebrow: string;
    title: string;
    intro?: string;
    items: { id: string; label: string; kind: GalleryKind }[];
  };

  pricing: {
    eyebrow: string;
    planName: string;
    price: string;
    features: string[];
    cta: string;
    note: string;
  };

  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };

  about: {
    eyebrow: string;
    title: string;
    body: string;
    note?: string;
  };

  finalCta: {
    title: string;
    primary: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
}
