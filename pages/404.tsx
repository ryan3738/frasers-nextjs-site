import Image from 'next/legacy/image';

// pages/404.js
export default function Custom404(): JSX.Element {
  return (
    <>
      <div>
        <h1>404 - Page Not Found</h1>
        <Image
          className="image404"
          src="/images/scott_fraser_square.jpg"
          alt="Scott holding a salmon"
          height="612"
          width="612"
        />
      </div>
    </>
  );
}
