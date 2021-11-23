import Link from 'next/link';
import { useRef } from 'react';
// import Image from 'next/image'
import Burger from './Burger';
import BurgerMenu from './BurgerMenu';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import NavList from './NavList';

enum Location {
  Top = 'top',
  Bottom = 'bottom',
}

enum Position {
  Fixed = 'fixed',
  Sticky = 'sticky',
  Static= 'static',
}

interface NavBarProps {
  children: React.ReactNode;
  open: boolean;
  setOpen: (value: boolean) => void;
  location?: Location;
  position?: Position;
}

export default function NavBar({
  children,
  open,
  setOpen,
  position=Position.Fixed,
  location=Location.Top,
}: NavBarProps): JSX.Element {
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <div className="nav-bar">
        <div className="burger">
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
          </div>
          <BurgerMenu open={open} />
        </div>
        <nav className="nav-list">
          <Link href="/">
            <a className="title">FRASERS</a>
          </Link>
          <NavList showOnLarge />
        </nav>
      </div>
      {children}
      <style jsx>{`
        .welcome-logo {
          position: absolute;
          top: 0.5rem;
          left: 1rem;
          width: 6rem;
        }
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
