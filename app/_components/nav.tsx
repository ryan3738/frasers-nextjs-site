'use client';
import { NavLinks, NavList } from './nav-list';
import { cn } from '@/lib/utils';

interface HeaderProps {
  navLinks?: NavLinks[];
  location?: 'top' | 'bottom';
  position?: 'fixed' | 'sticky' | 'static';
  className?: string;
}

export const Nav = ({
  navLinks,
  position = 'sticky',
  location = 'top',
  className
}: HeaderProps) => {
  const headerLinks = navLinks?.filter(link => link.header === true);
  return (
    headerLinks &&
    headerLinks?.length > 0 && (
      <nav
        className={cn(
          'flex h-16 bg-background/95 left-0 z-50 items-center justify-evenly overflow-x-auto w-full',
          location === 'top' ? 'top-0' : 'bottom-0',
          position,
          className
        )}
      >
        <NavList links={headerLinks} />
      </nav>
    )
  );
};
