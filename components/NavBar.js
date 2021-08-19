import Link from 'next/link';
import React, { useState, useRef } from 'react';
// import Image from 'next/image'
import Burger from './Burger';
import BurgerMenu from './BurgerMenu';
import { useOnClickOutside } from '../hooks/hooks';
import NavList from './NavList';

export default function NavBar({ children, open, setOpen }) {
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <div className="nav-bar">
        <div className="burger">
          {/* <div>
            <Link href='/'>
              <a className='title'>FRASERS</a>
            </Link>
          </div> */}
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
          </div>
          <BurgerMenu open={open} setOpen={setOpen} />
        </div>
        {/* <NavList></NavList> */}
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
          right: 0;
          left: 0;
          z-index: 999;
          position: fixed;
          background: var(--background-color);
          opacity: 0.97;
          width: 100%;
        }
        .nav-list {
          display: flex;
          justify-content: left;
          align-items: center;
          height: 4em;
          position: sticky;
          top: 0;
        }

        .nav-list a:hover {
          background: var(--primary-color-desaturated);
          color: var(--background-color);
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
