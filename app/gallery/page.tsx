import client from '@/tina/__generated__/client';
import { GalleryGrid } from './_components/gallery-grid';
import { Metadata } from 'next';

const galleryGridResponse = await client.queries.galleryGrid({
  relativePath: 'galleryGrid.json'
});

export const metadata = {
  title: 'Gallery'
} satisfies Metadata;

export default function GalleryPage() {
  if (galleryGridResponse?.data?.galleryGrid) {
    const galleryImages = galleryGridResponse?.data?.galleryGrid?.images || [];
    return galleryImages ? (
      <section>
        <h1>Gallery</h1>
        <GalleryGrid images={galleryImages} />
      </section>
    ) : null;
  }
}
