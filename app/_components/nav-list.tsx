'use client';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

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
  const pathName = usePathname();
  const [hash, setHash] = useState('');
  const params = useParams();

  useEffect(() => {
    setHash(window.location.hash);
  }, [params]);

  return links?.map((link, index) => {
    const href = link.href;
    const hashPath = pathName + hash;

    return (
      <Link
        key={link?.label || '' + index}
        className={cn(
          buttonVariants({
            variant: 'ghost-inverted',
            className:
              'uppercase h-20 w-full rounded-none text-xl bg-background/90 font-bold z-50'
          }),
          hashPath === href ? 'bg-secondary/50 text-accent-foreground' : ''
        )}
        href={link.href}
      >
        {link?.label}
      </Link>
    );
  });
}
