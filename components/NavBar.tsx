import Link from 'next/link';
import { useRef } from 'react';
// import Image from 'next/image'
import Burger from './Burger';
import BurgerMenu from './BurgerMenu';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import NavList from './NavList';

interface NavBarProps {
  children?: React.ReactNode;
  open?: boolean;
  setOpen?: (value: boolean) => void;
  location?: 'top' | 'bottom';
  position?: 'fixed' | 'sticky' | 'static';
}

export default function NavBar({
  children,
  open,
  setOpen,
  position='fixed'  ,
  location='top',
}: NavBarProps): JSX.Element {
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <div className="nav-bar">
        {/* <div className="burger">
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
          </div>
          <BurgerMenu open={open} />
        </div> */}
        <nav className="nav-list">
          <Link href="/">
            <a className="title">FRASERS</a>
          </Link>
          <NavList showOnLarge />
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
