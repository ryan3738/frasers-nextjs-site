import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface NavLinks {
  href: string;
  label: string | null | undefined;
  header?: boolean;
  burger?: boolean;
  footer?: boolean;
}

interface NavListProps {
  links: NavLinks[];
  showOnLarge?: boolean;
  burgerMenuLink?: boolean;
}

export function NavList({ links }: NavListProps) {
  const pathname = usePathname();

  console.log('pathname', pathname);
  return (
    <>
      {links?.map((link, index) => {
        const href = link?.href || '';

        console.log({ href, pathname });
        return (
          // <Button
          //   key={link?.label || '' + index}
          //   variant="ghost-inverted"
          //   className="size-full min-w-14 rounded-none px-4 text-xl font-bold"
          //   asChild
          // >
          <Link
            key={link?.label || '' + index}
            className={cn(
              buttonVariants({
                variant: 'ghost-inverted',
                className:
                  'h-14 w-full min-w-14 rounded-none px-4 text-xl bg-background font-bold'
              })
              // 'h-14 w-full min-w-14 rounded-none px-4 text-xl bg-background font-bold'
            )}
            href={link.href}
          >
            {link?.label}
          </Link>
          // </Button>
        );
      })}
      <style jsx>{`
        .nav-link {
          display: flex;
          align-items: center;
          justify-content: center;
          text-transform: uppercase;
          padding: 0 3.25rem;
          margin: auto;
          font-weight: 600;
          min-height: 60px;
          min-width: 60px;
          height: 100%;
          width: auto;
        }
      `}</style>
    </>
  );
}
