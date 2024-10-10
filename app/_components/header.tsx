'use client';
import { useRef } from 'react';
import { NavLinks, NavList } from './nav-list';
import { cn } from '@/lib/utils';

interface HeaderProps {
  children?: React.ReactNode;
  navLinks?: NavLinks[];
  showHomeLink?: boolean;
  open?: boolean;
  setOpen?: (value: boolean) => void;
  location?: 'top' | 'bottom';
  position?: 'fixed' | 'sticky' | 'static';
}

export const Header = ({
  children,
  navLinks,
  position = 'sticky',
  location = 'top'
}: HeaderProps) => {
  const headerLinks = navLinks?.filter(link => link.header === true);
  return (
    <header
      className={cn(
        'flex bg-background/95 left-0 z-50 overflow-x-auto w-full ',
        location === 'top' ? 'top-0' : 'bottom-0',
        position
      )}
    >
      {headerLinks && headerLinks?.length > 0 && (
        <nav className="flex h-16 w-full items-center justify-evenly ">
          <NavList links={headerLinks} />
        </nav>
      )}

      {children}
      <style jsx>{`
        .title {
          padding: 0.5em;
          font-size: 2.2rem;
          color: var(--high-emphasis-text);
        }
        .nav-list {
          display: flex;
          justify-content: left;
          align-items: center;
          max-width: 100vw;
          overflow: auto;
          overflow-y: hidden;
          height: 4em;
          top: 0;
        }

        @media (min-width: 769px) {
          .burger {
            display: none;
          }
          .title {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};
