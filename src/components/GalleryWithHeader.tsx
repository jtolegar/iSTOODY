import { SectionHeader } from "./SectionHeader";
import { ProductGallery, type GalleryItem } from "./ProductGallery";

interface Props { eyebrow: string; title: string; intro?: string; items: GalleryItem[]; accent?: string; }
export function GalleryWithHeader({ eyebrow, title, intro, items, accent }: Props) {
  return (
    <section className="container-x py-20 sm:py-24">
      <SectionHeader eyebrow={eyebrow} title={title} intro={intro} />
      <div className="mt-12"><ProductGallery items={items} accent={accent} /></div>
    </section>
  );
}
