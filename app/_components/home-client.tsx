'use client';

import { useTina, useEditState } from 'tinacms/dist/react';
import {
  BusinessInfoQuery,
  GalleryGridQuery,
  HighlightConnectionQuery,
  MenuQuery
} from '@/tina/__generated__/types';
import { TinaPayload } from '@/lib/tina-page-props';
import { isHighlightVisible } from '@/lib/is-highlight-visible';
import { Home } from './home';
import { StructuredData } from './structured-data';

type HighlightNode = NonNullable<
  NonNullable<HighlightConnectionQuery['highlightConnection']['edges']>[number]
>['node'];

interface HomeClientProps {
  menuPayload: TinaPayload<MenuQuery>;
  businessInfoPayload: TinaPayload<BusinessInfoQuery>;
  galleryGridPayload: TinaPayload<GalleryGridQuery>;
  highlightsPayload: TinaPayload<HighlightConnectionQuery>;
}

export function HomeClient({
  menuPayload,
  businessInfoPayload,
  galleryGridPayload,
  highlightsPayload
}: HomeClientProps) {
  const { edit } = useEditState();
  const { data: menuData } = useTina(menuPayload);
  const { data: businessInfoData } = useTina(businessInfoPayload);
  const { data: galleryGridData } = useTina(galleryGridPayload);
  const { data: highlightsData } = useTina(highlightsPayload);

  const menu = menuData.menu;
  const businessInfo = businessInfoData.businessInfo;
  const galleryImages = galleryGridData.galleryGrid?.images || [];
  const highlights =
    highlightsData.highlightConnection.edges
      ?.map(edge => edge?.node)
      .filter((node): node is NonNullable<HighlightNode> => {
        if (node == null) {
          return false;
        }

        if (edit) {
          return node.showOnHomepage === true;
        }

        return isHighlightVisible(node);
      }) ?? [];

  if (!menu || !businessInfo) {
    return null;
  }

  return (
    <>
      <StructuredData businessInfo={businessInfo} />
      <Home
        menu={menu}
        businessInfo={businessInfo}
        galleryImages={galleryImages}
        highlights={highlights}
      />
    </>
  );
}
