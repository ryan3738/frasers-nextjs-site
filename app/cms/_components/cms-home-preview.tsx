import { notFound } from 'next/navigation';
import {
  assertHomePageData,
  loadHomePageData
} from '@/lib/load-home-page-data';
import { HomeClient } from '@/app/_components/home-client';

const homePageData = await loadHomePageData();

export function CmsHomePreview() {
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
