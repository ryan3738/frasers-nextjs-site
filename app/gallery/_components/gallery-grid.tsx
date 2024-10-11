import Image from 'next/legacy/image';
import { GalleryGridQuery } from '@/tina/__generated__/types';
import { blurDataURL } from '@/components/blur-data-url';
import { cn } from '@/lib/utils';

interface GridProps {
  images: GalleryGridQuery['galleryGrid']['images'];
  className?: string;
}

export const GalleryGrid = ({ images, className }: GridProps) => {
  return (
    <div
      className={cn(
        ' flex w-full flex-wrap items-center justify-center gap-6 text-center',
        className
      )}
    >
      {images &&
        images.map(
          image =>
            image &&
            image.src && (
              <div
                key={image.alt}
                className="group relative inline-block h-auto w-full min-w-[240px] max-w-[360px] outline outline-0 outline-offset-8 outline-secondary-foreground transition-all duration-300 ease-in-out hover:outline-2 hover:outline-offset-0"
              >
                <div className="absolute left-0 top-0 z-10 size-full bg-background opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-40" />
                <div className="absolute bottom-0 left-0 z-20 w-full p-6 text-left  text-3xl font-bold uppercase opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 sm:text-5xl">
                  {image.alt}
                </div>

                <Image
                  className="absolute left-0 top-0"
                  src={image.src}
                  alt={image.alt || 'gallery image'}
                  layout="responsive"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  height="560"
                  width="560"
                />
              </div>
            )
        )}
    </div>
  );
};
