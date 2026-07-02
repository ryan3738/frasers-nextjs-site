'use client';

import { useEffect } from 'react';
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
  GALLERY_FORM_ID,
  MENU_FORM_ID
} from '@/lib/preview-path';
import { useActivePreviewFormId } from '@/lib/use-active-preview-form-id';
import { isHighlightVisible } from '@/lib/is-highlight-visible';
import { Home } from './home';
import { StructuredData } from './structured-data';
import { HighlightClient } from './highlight-client';
import { TinaLive } from './tina-live';

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
  const activeFormId = useActivePreviewFormId();

  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7310/ingest/c4db365b-e961-468a-ac35-40eab15a1a76',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'3c9f59'},body:JSON.stringify({sessionId:'3c9f59',location:'home-client.tsx:activeFormId',message:'active preview form resolved',data:{activeFormId,href:window.location.href},timestamp:Date.now(),hypothesisId:'B,E',runId:'post-fix'})}).catch(()=>{});
    // #endregion
  }, [activeFormId]);

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

  return (
    <TinaLive
      payload={businessInfoPayload}
      formId={BUSINESS_INFO_FORM_ID}
      enabled={activeFormId === BUSINESS_INFO_FORM_ID}
    >
      {businessInfoData => (
        <TinaLive
          payload={menuPayload}
          formId={MENU_FORM_ID}
          enabled={activeFormId === MENU_FORM_ID}
        >
          {menuData => (
            <TinaLive
              payload={galleryGridPayload}
              formId={GALLERY_FORM_ID}
              enabled={activeFormId === GALLERY_FORM_ID}
            >
              {galleryGridData => {
                const menu = menuData.menu;
                const businessInfo = businessInfoData.businessInfo;
                const galleryImages = galleryGridData.galleryGrid?.images || [];
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
              }}
            </TinaLive>
          )}
        </TinaLive>
      )}
    </TinaLive>
  );
}
