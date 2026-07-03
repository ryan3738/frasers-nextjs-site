'use client';

import { BusinessInfoQuery } from '@/tina/__generated__/types';
import { businessInfoTinaFields } from '@/lib/business-info-tina-fields';
import { Contact } from './contact';
import { useVisualEditMode } from './preview-mode';

interface ContactEditableProps {
  businessInfo: BusinessInfoQuery['businessInfo'];
}

export function ContactEditable({ businessInfo }: ContactEditableProps) {
  const { isVisualEditing } = useVisualEditMode();

  if (!businessInfo) {
    return null;
  }

  const fields = businessInfoTinaFields(businessInfo, isVisualEditing);

  return <Contact businessInfo={businessInfo} {...fields} />;
}
