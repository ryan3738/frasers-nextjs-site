import Link from 'next/link';

export default function Navigation() {
  return (
    <>
      <div>
        <div>
          {/* Change to logo */}

          <Link href='/#about'>
            <a>ABOUT</a>
          </Link>
          <Link href='/#menu'>
            <a>MENU</a>
          </Link>
          <Link href='/#contact'>
            <a>CONTACT</a>
          </Link>
        </div>
      </div>
    </>
  );
}
