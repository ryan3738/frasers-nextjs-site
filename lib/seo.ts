import type { Metadata } from 'next';
import globalData from '@/content/global/index.json';

export const SITE_URL = 'https://frasersgh.com';

export const siteMeta = {
  title: globalData.meta.title,
  description: globalData.meta.description,
  keywords: globalData.meta.keywords.join(', '),
  cardImage: globalData.meta.cardImage
};

export function pageMetadata({
  title,
  description,
  path,
  noIndex = false
}: {
  title?: string;
  description?: string;
  path: string;
  noIndex?: boolean;
}): Metadata {
  const pageTitle = title ?? siteMeta.title;
  const pageDescription = description ?? siteMeta.description;
  const url = `${SITE_URL}${path === '/' ? '' : path}`;

  return {
    ...(title ? { title } : {}),
    description: pageDescription,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteMeta.title,
      images: [{ url: siteMeta.cardImage }],
      type: 'website',
      locale: 'en_US'
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [siteMeta.cardImage]
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {})
  };
}

export function rootMetadata(): Metadata {
  return {
    title: {
      template: `%s | ${siteMeta.title}`,
      default: siteMeta.title
    },
    description: siteMeta.description,
    keywords: siteMeta.keywords,
    category: 'restaurant',
    authors: [{ name: 'Ryan Fraser', url: 'https://ryanfraser.dev' }],
    creator: 'Ryan Fraser',
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title: siteMeta.title,
      description: siteMeta.description,
      url: SITE_URL,
      siteName: siteMeta.title,
      images: [{ url: siteMeta.cardImage }],
      type: 'website',
      locale: 'en_US'
    },
    twitter: {
      card: 'summary_large_image',
      title: siteMeta.title,
      description: siteMeta.description,
      images: [siteMeta.cardImage]
    },
    manifest: `${SITE_URL}/site.webmanifest.json`,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    }
  };
}
