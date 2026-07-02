import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/seo';
import {
  assertHomePageData,
  loadHomePageData
} from '@/lib/load-home-page-data';
import { HomeClient } from '@/app/_components/home-client';

export const revalidate = 3600;

const homePageData = await loadHomePageData();

export async function generateMetadata({
  params
}: {
  params: Promise<{ filename: string }>;
}) {
  const { filename } = await params;

  return pageMetadata({
    path: `/cms/highlight/${filename}`,
    noIndex: true
  });
}

export default async function CmsHighlightPreviewPage({
  params
}: {
  params: Promise<{ filename: string }>;
}) {
  const { filename } = await params;

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
