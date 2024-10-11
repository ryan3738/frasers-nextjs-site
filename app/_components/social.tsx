import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/legacy/image';

interface SocialProps {
  href: string;
  img: string;
  alt: string;
  className?: string;
}

export function Social({
  href,
  img,
  alt,

  className
}: SocialProps): JSX.Element {
  return (
    <Button size="icon" className={cn('m-1 size-[45px]', className)} asChild>
      <a title={alt} href={href} target="_blank" rel="noreferrer noopener">
        <Image
          src={img}
          alt={alt}
          layout="fixed"
          objectFit="cover"
          height="45"
          width="45"
          quality="100"
        />
      </a>
    </Button>
  );
}
