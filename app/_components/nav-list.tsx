'use client';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSyncExternalStore } from 'react';

export interface NavLinks {
  href: string;
  label: string | null | undefined;
  header?: boolean;
  burger?: boolean;
  footer?: boolean;
}

interface NavListProps {
  links: NavLinks[];
  linkFields?: Array<{ label?: string; href?: string } | undefined>;
  showOnLarge?: boolean;
  burgerMenuLink?: boolean;
}

function subscribeToHash(callback: () => void) {
  window.addEventListener('hashchange', callback);
  return () => window.removeEventListener('hashchange', callback);
}

export function NavList({ links, linkFields }: NavListProps) {
  const pathName = usePathname();
  const hash = useSyncExternalStore(
    subscribeToHash,
    () => window.location.hash,
    () => ''
  );

  return links?.map((link, index) => {
    const href = link.href;
    const hashPath = pathName + hash;

    return (
      <Button
        onClick={event => {
          event.stopPropagation();
        }}
        className={cn(
          'uppercase h-20 w-full rounded-none text-xl bg-background/90 font-bold z-50',
          hashPath === href ? 'bg-secondary/50 text-accent-foreground' : ''
        )}
        variant="ghost-inverted"
        key={link?.label || '' + index}
        asChild
      >
        <Link href={link.href} data-tina-field={linkFields?.[index]?.label}>
          {link?.label}
        </Link>
      </Button>
    );
  });
}
