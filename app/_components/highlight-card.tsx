import { blurDataURL } from '@/components/blur-data-url';
import {
  TypographyH2,
  TypographyH3,
  TypographyMuted
} from '@/components/ui/typography';
import Image from 'next/image';

interface HighlightCardProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  imageSource: string;
  imageAlt: string;
  rightText?: string;
  rightTitle?: string;
  rightSubtitle?: string;
  id?: string;
  titleField?: string;
  subtitleField?: string;
  imageField?: string;
}

export function HighlightCard({
  children,
  title,
  subtitle,
  imageSource,
  imageAlt,
  rightText,
  rightTitle,
  rightSubtitle,
  id,
  titleField,
  subtitleField,
  imageField
}: HighlightCardProps) {
  return (
    <div id={id} className="mt-16 flex w-full max-w-[560px] flex-col">
      {imageSource ? (
        <div className="mx-3" data-tina-field={imageField}>
          <Image
            src={imageSource}
            alt={imageAlt}
            height={560}
            width={560}
            placeholder="blur"
            blurDataURL={blurDataURL}
            className="h-auto w-full"
          />
        </div>
      ) : (
        <div className="mx-3 mb-20 mt-1 h-full space-y-4 bg-accent/50 p-6">
          {rightTitle && (
            <TypographyH2 className="uppercase text-accent-foreground">
              {rightTitle}
            </TypographyH2>
          )}
          {rightSubtitle && (
            <TypographyH3 className="uppercase">{rightSubtitle}</TypographyH3>
          )}
          <TypographyMuted>{rightText || ''}</TypographyMuted>
        </div>
      )}
      <div className="mx-3 mb-20 mt-1 h-full space-y-4 bg-accent/50 p-6">
        {title && (
          <TypographyH2
            className="uppercase text-accent-foreground"
            data-tina-field={titleField}
          >
            {title}
          </TypographyH2>
        )}
        {subtitle && (
          <TypographyH3 className="uppercase" data-tina-field={subtitleField}>
            {subtitle}
          </TypographyH3>
        )}
        <TypographyMuted className="text-lg">{children}</TypographyMuted>
      </div>
    </div>
  );
}
