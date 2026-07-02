'use client';

import { useEditState, tinaField } from 'tinacms/dist/react';
import { GalleryGridQuery } from '@/tina/__generated__/types';
import { GalleryGrid } from './gallery-grid';

interface GalleryGridEditableProps {
  images?: GalleryGridQuery['galleryGrid']['images'];
  className?: string;
}

export function GalleryGridEditable({
  images,
  className
}: GalleryGridEditableProps) {
  const { edit } = useEditState();

  return (
    <GalleryGrid
      images={images}
      className={className}
      imageFields={
        edit
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
