import { NavLinks, NavList } from './nav-list';
import { cn } from '@/lib/utils';

interface HeaderProps {
  navLinks?: NavLinks[];
  location?: 'top' | 'bottom';
  className?: string;
}

export const Nav = ({ navLinks, location = 'top', className }: HeaderProps) => {
  const headerLinks = navLinks?.filter(link => link.header === true);
  return (
    headerLinks &&
    headerLinks?.length > 0 && (
      <nav
        className={cn(
          'flex h-20 bg-background/90 left-1/2 z-40 overflow-x-auto w-full',
          location === 'top' ? 'top-0' : 'bottom-0',
          className
        )}
      >
        <NavList links={headerLinks} />
      </nav>
    )
  );
};
