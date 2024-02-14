import Head from 'next/head';
import GalleryGrid from '../components/GalleryGrid';
import { useEffect, useState } from 'react';
import client from '../tina/__generated__/client';

export default function GalleryPage() {
  const [galleryGridResponse, setGalleryGridResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const galleryGridResponse = await client.queries.galleryGrid({
        relativePath: "galleryGrid.json"
      });
      setGalleryGridResponse(galleryGridResponse);
    };
    fetchData();
  }, [])

  if (
    galleryGridResponse?.data?.galleryGrid
  ) {
    const galleryImages = galleryGridResponse?.data?.galleryGrid?.images || [];
    return (
      <>
        <Head>
          <title>Gallery</title>
        </Head>
        <section>
          <h1>Gallery</h1>
          <GalleryGrid images={galleryImages} />
        </section>
      </>
    );
  }
}
