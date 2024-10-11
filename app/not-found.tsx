import { TypographyH1 } from '@/components/ui/typography';
import Image from 'next/legacy/image';

export default function Custom404() {
  return (
    <div className="grid place-items-center gap-6 p-6">
      <TypographyH1>404 - Page Not Found</TypographyH1>
      <Image
        src="/images/scott_fraser_square.jpg"
        alt="Scott holding a salmon"
        height="480"
        width="480"
      />
    </div>
  );
}
