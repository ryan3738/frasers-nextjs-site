'use client';

import { useEditState } from 'tinacms/dist/react';
import {
  BusinessInfoQuery,
  GalleryGridQuery,
  HighlightConnectionQuery,
  HighlightQuery,
  MenuQuery
} from '@/tina/__generated__/types';
import { TinaPayload } from '@/lib/tina-page-props';
import { useTinaWithForm } from '@/lib/use-tina-with-form';
import { isHighlightVisible } from '@/lib/is-highlight-visible';
import { Home } from './home';
import { StructuredData } from './structured-data';
import { HighlightClient } from './highlight-client';

type HighlightNode = NonNullable<
  NonNullable<HighlightConnectionQuery['highlightConnection']['edges']>[number]
>['node'];

interface HomeClientProps {
  menuPayload: TinaPayload<MenuQuery>;
  businessInfoPayload: TinaPayload<BusinessInfoQuery>;
  galleryGridPayload: TinaPayload<GalleryGridQuery>;
  highlightsConnectionPayload: TinaPayload<HighlightConnectionQuery>;
  highlightPayloads: TinaPayload<HighlightQuery>[];
}

export function HomeClient({
  menuPayload,
  businessInfoPayload,
  galleryGridPayload,
  highlightsConnectionPayload,
  highlightPayloads
}: HomeClientProps) {
  const { edit } = useEditState();
  const { data: menuData } = useTinaWithForm(menuPayload);
  const { data: businessInfoData } = useTinaWithForm(businessInfoPayload);
  const { data: galleryGridData } = useTinaWithForm(galleryGridPayload);

  const menu = menuData.menu;
  const businessInfo = businessInfoData.businessInfo;
  const galleryImages = galleryGridData.galleryGrid?.images || [];
  const phoneNumber = businessInfo?.phoneNumber ?? '';

  const highlightPayloadByPath = new Map(
    highlightPayloads.map(payload => [
      (payload.variables as { relativePath: string }).relativePath,
      payload
    ])
  );

  const orderedHighlights =
    highlightsConnectionPayload.data.highlightConnection.edges
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

  const highlightsContent = orderedHighlights.map(highlight => {
    const relativePath = highlight._sys.relativePath;
    const payload = highlightPayloadByPath.get(relativePath);

    if (!payload) {
      return null;
    }

    return (
      <HighlightClient
        key={relativePath}
        {...payload}
        phoneNumber={phoneNumber}
      />
    );
  });

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
        highlightsContent={highlightsContent}
      />
    </>
  );
}
