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
import {
  BUSINESS_INFO_FORM_ID,
  formIdFromCollectionPath,
  GALLERY_FORM_ID,
  MENU_FORM_ID,
  shouldSelectForm
} from '@/lib/preview-path';
import { useSyncPreviewForm } from '@/lib/use-sync-preview-form';
import { useTinaLiveData } from '@/lib/use-tina-live-data';
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

interface HomeClientViewProps {
  menu: MenuQuery['menu'];
  businessInfo: BusinessInfoQuery['businessInfo'];
  galleryImages: GalleryGridQuery['galleryGrid']['images'];
  activeFormId: string | null;
  orderedHighlights: NonNullable<HighlightNode>[];
  highlightPayloadByPath: Map<string, TinaPayload<HighlightQuery>>;
}

function HomeClientView({
  menu,
  businessInfo,
  galleryImages,
  activeFormId,
  orderedHighlights,
  highlightPayloadByPath
}: HomeClientViewProps) {
  const phoneNumber = businessInfo?.phoneNumber ?? '';

  if (!menu || !businessInfo) {
    return null;
  }

  const highlightsContent = orderedHighlights.map(highlight => {
    const relativePath = highlight._sys.relativePath;
    const payload = highlightPayloadByPath.get(relativePath);

    if (!payload) {
      return null;
    }

    return (
      <HighlightClient
        key={relativePath}
        activeFormId={activeFormId}
        {...payload}
        phoneNumber={phoneNumber}
      />
    );
  });

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

function HomeClientEdit({
  menuPayload,
  businessInfoPayload,
  galleryGridPayload,
  activeFormId,
  orderedHighlights,
  highlightPayloadByPath
}: {
  menuPayload: TinaPayload<MenuQuery>;
  businessInfoPayload: TinaPayload<BusinessInfoQuery>;
  galleryGridPayload: TinaPayload<GalleryGridQuery>;
  activeFormId: string | null;
  orderedHighlights: NonNullable<HighlightNode>[];
  highlightPayloadByPath: Map<string, TinaPayload<HighlightQuery>>;
}) {
  const businessInfoData = useTinaLiveData(
    businessInfoPayload,
    BUSINESS_INFO_FORM_ID,
    shouldSelectForm(activeFormId, BUSINESS_INFO_FORM_ID)
  );
  const menuData = useTinaLiveData(
    menuPayload,
    MENU_FORM_ID,
    shouldSelectForm(activeFormId, MENU_FORM_ID)
  );
  const galleryGridData = useTinaLiveData(
    galleryGridPayload,
    GALLERY_FORM_ID,
    shouldSelectForm(activeFormId, GALLERY_FORM_ID)
  );

  return (
    <HomeClientView
      menu={menuData.menu}
      businessInfo={businessInfoData.businessInfo}
      galleryImages={galleryGridData.galleryGrid?.images || []}
      activeFormId={activeFormId}
      orderedHighlights={orderedHighlights}
      highlightPayloadByPath={highlightPayloadByPath}
    />
  );
}

export function HomeClient({
  menuPayload,
  businessInfoPayload,
  galleryGridPayload,
  highlightsConnectionPayload,
  highlightPayloads
}: HomeClientProps) {
  const { edit } = useEditState();
  const activeFormId = useSyncPreviewForm();

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
          const formId = formIdFromCollectionPath(
            'content/highlight',
            node._sys.relativePath
          );
          if (activeFormId === formId) {
            return true;
          }
          return node.showOnHomepage === true;
        }

        return isHighlightVisible(node);
      }) ?? [];

  if (edit) {
    return (
      <HomeClientEdit
        menuPayload={menuPayload}
        businessInfoPayload={businessInfoPayload}
        galleryGridPayload={galleryGridPayload}
        activeFormId={activeFormId}
        orderedHighlights={orderedHighlights}
        highlightPayloadByPath={highlightPayloadByPath}
      />
    );
  }

  return (
    <HomeClientView
      menu={menuPayload.data.menu}
      businessInfo={businessInfoPayload.data.businessInfo}
      galleryImages={galleryGridPayload.data.galleryGrid?.images || []}
      activeFormId={activeFormId}
      orderedHighlights={orderedHighlights}
      highlightPayloadByPath={highlightPayloadByPath}
    />
  );
}
