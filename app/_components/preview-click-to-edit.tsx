'use client';

import { useEffect } from 'react';
import { useEditState } from 'tinacms/dist/react';
import { bindPreviewClickToEdit } from '@/lib/preview-click-to-edit';

export function PreviewClickToEdit() {
  const { edit } = useEditState();

  useEffect(() => {
    if (!edit) {
      return;
    }

    return bindPreviewClickToEdit();
  }, [edit]);

  return null;
}
