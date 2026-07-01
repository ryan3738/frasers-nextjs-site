'use client';

import { tinaField } from 'tinacms/dist/react';
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
  return (
    <GalleryGrid
      images={images}
      className={className}
      imageFields={images?.map(image =>
        image
          ? {
              src: tinaField(image, 'src'),
              alt: tinaField(image, 'alt')
            }
          : undefined
      )}
    />
  );
}
