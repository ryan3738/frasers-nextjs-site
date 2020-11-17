import Link from 'next/link';
import Burger from './burger';
import BurgerMenu from './burger-menu';
import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../hooks/hooks';
import NavList from './nav-list';

export default function NavBar({ open, setOpen }) {
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <div className='nav-bar'>
        <div className='burger'>
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
        <nav className='nav-list'>
          <Link href='/'>
            <a className='title'>FRASERS</a>
          </Link>
          <NavList showOnLarge />
        </nav>
      </div>
      <style jsx>{`
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

        @media (min-width: 460px) {
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
