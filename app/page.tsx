import { notFound } from 'next/navigation';
import client from '../tina/__generated__/client';
import { pageMetadata } from '@/lib/seo';
import { HomeClient } from './_components/home-client';

export const metadata = pageMetadata({
  path: '/'
});

export const revalidate = 3600;

const menuResponse = await client.queries.menu({
  relativePath: 'dinnerMenu.json'
});

const businessInfoResponse = await client.queries.businessInfo({
  relativePath: 'businessInfo.json'
});

const galleryGridResponse = await client.queries.galleryGrid({
  relativePath: 'galleryGrid.json'
});

const highlightsResponse = await client.queries.highlightConnection({
  first: 50,
  sort: 'order'
});

export default function HomePage() {
  if (
    !menuResponse?.data?.menu ||
    !businessInfoResponse?.data?.businessInfo ||
    !galleryGridResponse?.data?.galleryGrid
  ) {
    notFound();
  }

  return (
    <HomeClient
      menuPayload={menuResponse}
      businessInfoPayload={businessInfoResponse}
      galleryGridPayload={galleryGridResponse}
      highlightsPayload={highlightsResponse}
    />
  );
}
