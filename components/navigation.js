import Link from 'next/link';

export default function Navigation() {
  return (
    <>
      <div className="nav-bar">
        <div className='nav-list'>
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
      `}</style>
    </>
  );
}
