'use client';

import { useEditState } from 'tinacms/dist/react';
import { BusinessInfoQuery } from '@/tina/__generated__/types';
import { businessInfoTinaFields } from '@/lib/business-info-tina-fields';
import { Contact } from './contact';

interface ContactEditableProps {
  businessInfo: BusinessInfoQuery['businessInfo'];
}

export function ContactEditable({ businessInfo }: ContactEditableProps) {
  const { edit } = useEditState();

  if (!businessInfo) {
    return null;
  }

  const fields = businessInfoTinaFields(businessInfo, edit);

  return <Contact businessInfo={businessInfo} {...fields} />;
}
