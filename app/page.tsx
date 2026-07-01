import { notFound } from 'next/navigation';
import client from '../tina/__generated__/client';
import { Home } from './_components/home';

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
  const menu = menuResponse?.data?.menu;
  const businessInfo = businessInfoResponse?.data?.businessInfo;
  const galleryImages = galleryGridResponse?.data?.galleryGrid?.images || [];
  const highlights =
    highlightsResponse.data.highlightConnection.edges
      ?.map(edge => edge?.node)
      .filter(
        (node): node is NonNullable<typeof node> =>
          node != null && node.order != null
      ) ?? [];

  if (!menu || !businessInfo || !galleryImages) notFound();
  return (
    <Home
      menu={menu}
      businessInfo={businessInfo}
      galleryImages={galleryImages}
      highlights={highlights}
    />
  );
}
