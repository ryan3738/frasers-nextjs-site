import { TypographyH1 } from '@/components/ui/typography';
import { pageMetadata } from '@/lib/seo';
import Image from 'next/image';

export const metadata = pageMetadata({
  title: '404 - Page Not Found',
  description:
    'The page you are looking for could not be found. Return to Frasers Gourmet Hideaway in Oak Harbor, Washington.',
  path: '/404',
  noIndex: true
});

export default function Custom404() {
  return (
    <div className="grid place-items-center gap-6 p-6">
      <TypographyH1>404 - Page Not Found</TypographyH1>
      <Image
        src="/images/scott_fraser_square.jpg"
        alt="Scott holding a salmon"
        height={480}
        width={480}
        className="h-auto max-w-full"
      />
    </div>
  );
}
