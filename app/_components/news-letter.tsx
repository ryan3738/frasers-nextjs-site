import { Button } from '@/components/ui/button';
import { TypographyH3, TypographyMuted } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

export const NewsLetter = ({ className }: { className?: string }) => {
  return (
    <div className={cn('grid justify-items-center gap-2', className)}>
      <TypographyH3>Sign up for our newsletter to receive updates</TypographyH3>
      <Button className="w-fit" asChild>
        <a href="https://squareup.com/outreach/sgPDT7/subscribe">Sign Up</a>
      </Button>
      <TypographyMuted>We respect your privacy</TypographyMuted>
    </div>
  );
};
