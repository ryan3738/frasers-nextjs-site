import Image from 'next/image';
import { GalleryGridQuery } from '@/tina/__generated__/types';
import { blurDataURL } from '@/components/blur-data-url';
import { cn } from '@/lib/utils';

interface GridProps {
  images: GalleryGridQuery['galleryGrid']['images'];
  className?: string;
  imageFields?: Array<{ src?: string; alt?: string } | undefined>;
}

export const GalleryGrid = ({ images, className, imageFields }: GridProps) => {
  return (
    <div
      className={cn(
        ' flex w-full flex-wrap items-center justify-center gap-6 text-center',
        className
      )}
    >
      {images &&
        images.map(
          (image, index) =>
            image &&
            image.src && (
              <div
                key={image.alt}
                className="group relative inline-block aspect-square w-full min-w-[240px] max-w-[360px] outline outline-0 outline-offset-8 outline-secondary-foreground transition-all duration-300 ease-in-out hover:outline-2 hover:outline-offset-0"
                data-tina-field={imageFields?.[index]?.src}
              >
                <div className="absolute inset-0 z-10 bg-background opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-40" />
                <div
                  className="absolute bottom-0 left-0 z-20 w-full p-6 text-left text-3xl font-bold uppercase opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 sm:text-5xl"
                  data-tina-field={imageFields?.[index]?.alt}
                >
                  {image.alt}
                </div>

                <Image
                  src={image.src}
                  alt={image.alt || 'gallery image'}
                  fill
                  sizes="(max-width: 360px) 100vw, 360px"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                />
              </div>
            )
        )}
    </div>
  );
};
