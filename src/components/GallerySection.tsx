import { gallery } from "@/data/home";
import { SectionHeader } from "./SectionHeader";
import { ProductGallery } from "./ProductGallery";

export function GallerySection() {
  return (
    <section id="galeria" className="container-x py-20 sm:py-24">
      <SectionHeader eyebrow={gallery.eyebrow} title={gallery.title} intro={gallery.intro} />
      <div className="mt-12">
        <ProductGallery items={gallery.items} accent="var(--subject-bio)" />
      </div>
    </section>
  );
}
