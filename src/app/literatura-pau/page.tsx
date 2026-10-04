import type { Metadata } from "next";
import { ProductPage } from "@/components/ProductPage";
import { literatura as p } from "@/data/literatura";

export const metadata: Metadata = {
  title: p.seo.title,
  description: p.seo.description,
  alternates: { canonical: p.seo.canonical },
  openGraph: { title: p.schema.name, description: p.seo.description, url: p.seo.canonical, type: "website", images: [{ url: p.seo.ogImage, width: 1200, height: 630, alt: p.schema.name }] },
  twitter: { card: "summary_large_image", title: p.schema.name, description: p.seo.description, images: [p.seo.ogImage] },
};

export default function Page() {
  return <ProductPage product={p} temaLabel="el Tema 1 · Realismo y Naturalismo" />;
}
