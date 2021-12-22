import Link from 'next/link';

export default function ButtonLink({ buttonText, buttonLink }): JSX.Element {
  return (
    <>
      <Link href={buttonLink}>
        <a className="button-text">{buttonText}</a>
      </Link>

      <style jsx>{`
        .button-text {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          font-weight: bold;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          width: 50%;
          min-height: 60px;
          max-width: 360px;
          min-width: 60px;
          margin: 0.5rem 0;
          background-color: var(--primary-color);
          border: 2px solid var(--primary-color);
          border-radius: 7px;
          color: var(--black-color);
          transition: all 0.3s ease-in-out;
        }
        .button-text:hover {
          transform: scale(1.1);
          background-color: var(--primary-color-desaturated);
          border-color: var(--surface-color);
        }
      `}</style>
    </>
  );
}
