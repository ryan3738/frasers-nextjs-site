/* eslint-disable sonarjs/no-redundant-boolean */
import Link from 'next/link';
import { useRef } from 'react';
import Burger from './Burger';
import BurgerMenu from './BurgerMenu';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import NavList, { NavLinks } from './NavList';

interface NavBarProps {
  children?: React.ReactNode;
  links?: NavLinks[];
  burgerLinks?: NavLinks[];
  showHomeLink?: boolean;
  open?: boolean;
  setOpen?: (value: boolean) => void;
  location?: 'top' | 'bottom';
  position?: 'fixed' | 'sticky' | 'static';
}

export default function NavBar({
  children,
  links,
  burgerLinks,
  showHomeLink = true,
  open,
  setOpen,
  position = 'fixed',
  location = 'top',
}: NavBarProps): JSX.Element {
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <div className="nav-bar">
        {burgerLinks && (
          <div className="burger">
            <div ref={node}>
              <Burger open={open} setOpen={setOpen} />
            </div>
            <BurgerMenu links={burgerLinks} open={open} />
          </div>
        )}
        <nav className="nav-list">
          {showHomeLink && (
            <Link href="/">
              <a className="title">FRASERS</a>
            </Link>
          )}
          <NavList links={links} showOnLarge={burgerLinks && true} />
        </nav>
      </div>
      {children}
      <style jsx>{`
        .title {
          padding: 0.5em;
          font-size: 2.2rem;
          color: var(--white-color);
        }
        .nav-bar {
          ${location}: 0;
          left: 0;
          z-index: 999;
          position: ${position};
          background: var(--background-color);
          opacity: 0.97;
          width: 100%;
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
    </>
  );
}
