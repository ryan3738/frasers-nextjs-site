import Image from 'next/image';

interface SocialProps {
  href: string;
  img: string;
  alt: string;
  color: string;
}

export default function Social({
  href,
  img,
  alt,
  color,
}: SocialProps): JSX.Element {
  return (
    <div className="social">
      <a title={alt} href={href} target="_blank" rel="noreferrer noopener">
        <Image
          src={img}
          alt={alt}
          layout="fixed"
          objectFit="cover"
          height="45"
          width="45"
          quality="100"
        />
      </a>
      <style jsx>{`
        .social {
          width: 45px;
          height: 45px;
          vertical-align: center;
          background-color: var(--primary-color);
          border-radius: 5px;
          grid-column: 1/2;
          margin: 5px;
        }
        .social:hover {
          animation-name: social-button;
          animation-duration: 500ms;
          background-color: var(${color});
        }
      `}</style>
    </div>
  );
}
