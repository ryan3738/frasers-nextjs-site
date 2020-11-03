import Link from 'next/link';

export default function Navigation() {
  return (
    <>
      <div className='nav-bar'>
        <div className='nav-list'>
          <div className='hamburger-menu__wrapper'>
            <div className='hamburger-menu'>
              <div className='hamburger-menu__wrapper'>
                <input type='checkbox' />
                <div className='hamburger-menu__button'>
                  <span>&mdash;</span>
                  <span>&mdash;</span>
                  <span>&mdash;</span>
                </div>
                <div className='hamburger-menu__slider'>
                  <div className='hamburger-menu__item'>
                    <Link href='/'>
                      <a>HOME</a>
                    </Link>
                  </div>
                  <div className='hamburger-menu__item'>
                    <Link href='/#about'>
                      <a>ABOUT</a>
                    </Link>
                  </div>
                  <div className='hamburger-menu__item'>
                    <Link href='/#menu'>
                      <a>MENU</a>
                    </Link>
                  </div>
                  <div className='hamburger-menu__item'>
                    <Link href='/#contact'>
                      <a>CONTACT</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <p className='hidden-text'>_____________</p>
          </div>
          <Link href='/#about'>
            <a className='nav-link'>ABOUT</a>
          </Link>
          <Link href='/#menu'>
            <a className='nav-link'>MENU</a>
          </Link>
          <Link href='/#contact'>
            <a className='nav-link'>CONTACT</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .nav-bar {
          right: 0;
          left: 0;
          z-index: 999;
          position: fixed;
        }
        .nav-list {
          background: var(--color-darker);
          position: sticky;
          top: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
          grid-template-rows: 4em;
          justify-items: center;
          padding: 0% 2%;
        }

        .nav-link {
          padding: 1em;
          margin: auto;
        }

        .nav-list a:hover {
          background: var(--color-light);
          color: var(--color-black);
        }

        .hamburger-menu__wrapper {
          min-height: 400px;
          position: relative;
          text-align: center;
        }
        .hamburger-menu {
          height: 100%;
          width: 300px;
          position: absolute;
          top: 0;
          left: 0;
        }
        .hamburger-menu__button {
          width: 40px;
          height: 40px;
          border: 2px solid none;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          z-index: 3;
        }

        .hamburger-menu__button span {
          line-height: 8px;
          text-align: center;
          font-size: 1.6rem;
          font-weight: 400;
          color: var(--color-main);
        }

        .hamburger-menu__button span:last-child {
          padding-bottom: 5px;
        }
        .hamburger-menu__wrapper {
          position: relative;
          height: 100%;
          overflow: hidden;
        }
        .hamburger-menu__wrapper input[type='checkbox'] {
          width: 40px;
          height: 40px;
          outline: 3px solid red;
          opacity: 0;
          position: absolute;
          top: 6px;
          left: 6px;
          z-index: 4;
          cursor: pointer;
        }

        .hamburger-menu__wrapper input:checked ~ .hamburger-menu__button {
          background: var(--color-white);
        }

        .hamburger-menu__wrapper input:checked ~ .hamburger-menu__slider {
          transform: none;
        }

        .hamburger-menu__slider {
          position: absolute;
          top: 0;
          left: 0;
          width: 300px;
          height: 100%;
          background-color: var(--color-darker);
          z-index: 2;
          transform: translateX(-310px);
          transition: transform 0.3s;
          text-align: left;
        }

        .hamburger-menu__item {
          padding: 10px 0 10px 10px;
        }

        .hamburger-menu__item:hover {
          background-color: var(--color-light);
          color: var(--color-black);
        }

        .hamburger-menu__item:first-of-type {
          margin-top: 60px;
        }
        .hidden-text {
          color: var(--color-darker);
          opacity: 0;
        }
      `}</style>
    </>
  );
}
