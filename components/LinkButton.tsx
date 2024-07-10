import Link from 'next/link';

export default function LinkButton({ buttonText, buttonLink }): JSX.Element {
  return (
    <>
      <Link
        className="mx-auto my-2 flex size-fit min-h-16 min-w-16 max-w-[360px] place-items-center rounded bg-[var(--primary-color)] px-4 py-2 font-bold uppercase text-black opacity-100 transition-all duration-300 ease-in-out hover:opacity-80"
        href={buttonLink}
      >
        {buttonText}
      </Link>
    </>
  );
}
