import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/seo';
import {
  assertHomePageData,
  loadHomePageData
} from '@/lib/load-home-page-data';
import { HomeClient } from '@/app/_components/home-client';

export const metadata = pageMetadata({
  path: '/cms/gallery',
  noIndex: true
});

export const revalidate = 3600;

const homePageData = await loadHomePageData();

export default function CmsGalleryPreviewPage() {
  if (!assertHomePageData(homePageData)) {
    notFound();
  }

  const {
    menuResponse,
    businessInfoResponse,
    galleryGridResponse,
    highlightsResponse,
    highlightPayloads
  } = homePageData;

  return (
    <HomeClient
      menuPayload={menuResponse}
      businessInfoPayload={businessInfoResponse}
      galleryGridPayload={galleryGridResponse}
      highlightsConnectionPayload={highlightsResponse}
      highlightPayloads={highlightPayloads}
    />
  );
}
