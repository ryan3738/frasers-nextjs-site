'use client';

import { tinaField } from 'tinacms/dist/react';
import { GalleryGridQuery } from '@/tina/__generated__/types';
import { useVisualEditMode } from '@/app/_components/preview-mode';
import { GalleryGrid } from './gallery-grid';

interface GalleryGridEditableProps {
  images?: GalleryGridQuery['galleryGrid']['images'];
  className?: string;
}

export function GalleryGridEditable({
  images,
  className
}: GalleryGridEditableProps) {
  const { isVisualEditing } = useVisualEditMode();

  return (
    <GalleryGrid
      images={images}
      className={className}
      imageFields={
        isVisualEditing
          ? images?.map(image =>
              image
                ? {
                    src: tinaField(image, 'src'),
                    alt: tinaField(image, 'alt')
                  }
                : undefined
            )
          : undefined
      }
    />
  );
}
