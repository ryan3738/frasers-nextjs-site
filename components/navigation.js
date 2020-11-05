import Link from 'next/link';
import BurgerCss from './burger-css';
// import { slide as Menu } from 'react-burger-menu';
import Burger from './burger';
import BurgerMenu from './burger-menu';
import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../hooks/hooks';
// import NavList from './nav-list'

export default function Navigation({ open, setOpen }) {
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <div className='nav-bar'>
        <div className='burger'>
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
          </div>
          <BurgerMenu open={open} setOpen={setOpen} />
        </div>
        {/* <NavList></NavList> */}
        <nav className='nav-list'>
          <Link href='/#about'>
            <a className='nav-link'>ABOUT</a>
          </Link>
          <Link href='/#menu'>
            <a className='nav-link'>MENU</a>
          </Link>
          <Link href='/#contact'>
            <a className='nav-link'>CONTACT</a>
          </Link>
        </nav>
      </div>
      <style jsx>{`
        .nav-bar {
          right: 0;
          left: 0;
          z-index: 999;
          position: fixed;
        }
        .nav-list {
          display: none;
        }

        .nav-link {
          padding: 1em;
          margin: auto;
          /* display: none; */
        }

        .nav-list a:hover {
          background: var(--color-light);
          color: var(--color-black);
        }

        @media (min-width: 460px) {
          .burger {
            display: none;
          }
          .nav-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
            grid-template-rows: 4em;
            justify-items: center;
            padding: 0% 2%;
            background: var(--color-darker);
            position: sticky;
            top: 0;
          }
        }
      `}</style>
    </>
  );
}
