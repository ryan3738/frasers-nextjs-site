import { BusinessInfoQuery } from '@/tina/__generated__/types';
import { siteMeta, SITE_URL } from '@/lib/seo';

interface StructuredDataProps {
  businessInfo: BusinessInfoQuery['businessInfo'];
}

export function StructuredData({ businessInfo }: StructuredDataProps) {
  const { address, hours, phoneNumber, email } = businessInfo;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: siteMeta.title,
    image: siteMeta.cardImage,
    url: SITE_URL,
    telephone: phoneNumber,
    email,
    servesCuisine: ['Steak', 'Seafood', 'Pacific Northwest'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: [address?.street, address?.street2].filter(Boolean).join(' '),
      addressLocality: address?.city,
      addressRegion: address?.region,
      postalCode: address?.zip,
      addressCountry: 'US'
    },
    openingHours: hours?.map(entry => `${entry?.day}: ${entry?.hours}`)
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
