import type { Product } from "@/data/product-types";
import { site } from "@/data/site";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ProductHero } from "./ProductHero";
import { SampleBanner } from "./SampleBanner";
import { FeatureSection } from "./FeatureSection";
import { ProductIndex } from "./ProductIndex";
import { GalleryWithHeader } from "./GalleryWithHeader";
import { ProductPricing } from "./ProductPricing";
import { FAQ } from "./FAQ";
import { AboutBlock } from "./AboutBlock";
import { CTASection } from "./CTASection";
import { SubjectAccent } from "./SubjectAccent";

/*
  ProductPage
  ------------------------------------------------------------
  Arma una página de producto completa a partir de un objeto
  Product. Crear una nueva asignatura = crear su data y pasarla
  aquí. Todas comparten estructura, estilo y SEO/Schema.
*/
export function ProductPage({ product, temaLabel }: { product: Product; temaLabel: string }) {
  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.schema.name,
    description: product.schema.description,
    brand: { "@type": "Brand", name: site.name },
    offers: {
      "@type": "Offer",
      price: product.schema.price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${site.url}${product.seo.canonical}`,
    },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faq.items
      .filter((i) => !i.a.toLowerCase().startsWith("provisional"))
      .map((i) => ({
        "@type": "Question",
        name: i.q,
        acceptedAnswer: { "@type": "Answer", text: i.a },
      })),
  };

  return (
    <SubjectAccent accent={product.accentVar} accentSoft={product.accentSoft}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Header />
      <main id="main">
        <ProductHero
          eyebrow={product.hero.eyebrow}
          title={product.hero.title}
          subtitle={product.hero.subtitle}
          includesLine={product.hero.includesLine}
          price={product.price}
          ctaPrimary={product.hero.ctaPrimary}
          ctaNote={product.hero.ctaNote}
          ctaSecondary={product.hero.ctaSecondary}
          hotmartUrl={product.hotmartUrl}
          sampleFile={product.sampleFile}
        />
        <FeatureSection eyebrow={product.includes.eyebrow} title={product.includes.title} items={product.includes.items} />
        <ProductIndex eyebrow={product.index.eyebrow} title={product.index.title} note={product.index.note} blocks={product.index.blocks} />
        <GalleryWithHeader eyebrow={product.gallery.eyebrow} title={product.gallery.title} intro={product.gallery.intro} items={product.gallery.items} accent={product.accentVar} />
        <SampleBanner sampleFile={product.sampleFile} temaLabel={temaLabel} />
        <ProductPricing eyebrow={product.pricing.eyebrow} planName={product.pricing.planName} price={product.pricing.price} features={product.pricing.features} cta={product.pricing.cta} note={product.pricing.note} href={product.hotmartUrl} />
        <FAQ eyebrow={product.faq.eyebrow} title={product.faq.title} items={product.faq.items} />
        <AboutBlock eyebrow={product.about.eyebrow} title={product.about.title} body={product.about.body} note={product.about.note} />
        <CTASection
          title={product.finalCta.title}
          primary={{ label: product.finalCta.primary, href: product.hotmartUrl }}
          secondary={{ label: product.finalCta.secondaryLabel, href: product.finalCta.secondaryHref }}
        />
      </main>
      <Footer />
    </SubjectAccent>
  );
}
