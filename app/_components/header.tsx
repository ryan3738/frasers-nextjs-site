'use client';
import Link from 'next/link';
import { useRef } from 'react';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { NavLinks, NavList } from './nav-list';
import { Burger } from './burger';
import { BurgerMenu } from './burger-menu';

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
  showHomeLink = true,
  navLinks,
  open,
  setOpen,
  position = 'fixed',
  location = 'top'
}: HeaderProps) => {
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  const headerLinks = navLinks?.filter(link => link.header === true);
  const burgerLinks = navLinks?.filter(link => link.burger === true);
  return (
    <header>
      <div className="nav-bar w-full opacity-95">
        {burgerLinks?.length > 0 && (
          <div className="burger">
            <div ref={node}>
              <Burger open={open} setOpen={setOpen} />
            </div>
            <BurgerMenu links={burgerLinks} open={open} />
          </div>
        )}
        {headerLinks?.length > 0 && (
          <>
            <nav className="nav-list ">
              {showHomeLink && (
                <div className="title">
                  <Link href="/" className=" hover:text-white">
                    FRASERS
                  </Link>
                </div>
              )}
              <NavList links={headerLinks} showOnLarge={burgerLinks && true} />
            </nav>
          </>
        )}
      </div>
      {headerLinks?.length > 0 && <div className="nav-spacer" />}
      {children}
      <style jsx>{`
        .nav-spacer {
          height: 4em;
        }
        .title {
          padding: 0.5em;
          font-size: 2.2rem;
          color: var(--high-emphasis-text);
        }
        .nav-bar {
          ${location}: 0;
          left: 0;
          z-index: 999;
          position: ${position};
          background: var(--background-color);
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
