// import doubleItems from '../public/data/double.json';
import Image from 'next/image';

export default function Double({
  children,
  title,
  subtitle,
  imageSource,
  imageAlt,
  imageLeft,
  rightText,
  rightTitle,
  rightSubtitle,
  id,
}: {
  children: React.ReactNode
  title: string
  subtitle: string
  imageSource: string
  imageAlt: string
  imageLeft: string
  rightText: string
  rightTitle: string
  rightSubtitle: string
  id: string
}) {
  return (
    <>
      <div className="double-container">
        <a className="anchor" id={id} />
        {imageSource ? (
          <>
            <div className="double-item double-right">
              <Image
                src={imageSource}
                alt={imageAlt}
                height="560"
                width="560"
              />
            </div>
          </>
        ) : (
          <>
            <div className="double-item double-text double-right">
              <h2 className="primary-color">{rightTitle}</h2>
              <h3>{rightSubtitle}</h3>
              <div
                className="medium-emphasis"
                dangerouslySetInnerHTML={{ __html: rightText }}
              />
            </div>
          </>
        )}

        <div className="double-item double-text double-left">
          <h2 className="primary-color">{title}</h2>
          <h3>{subtitle}</h3>
          <div className="medium-emphasis">{children}</div>
        </div>
        <style jsx>{`
          a.anchor {
            display: block;
            position: relative;
            top: -50px;
            visibility: hidden;
          }
          .primary-color {
            color: var(--primary-color-desaturated);
          }

          .double-container {
            display: flex;
            flex-direction: column;
            max-width: 560px;
          }

          .double-item {
            text-align: left;
            margin: 0 10px 0;
          }

          .double-item > img {
            padding-top: 4rem;
            object-fit: cover;
            width: 100%;
            max-height: 100%;
          }
          .double-text {
            margin: 5px 10px 5rem;
            background: var(--surface-color);
            padding: 1.5rem;
            height: 100%;
          }
          .double-right {
            grid-area: p1;
          }

          .double-left {
            grid-area: t1;
          }

          .alternating-color:nth-child(odd) {
            color: var(--color-white);
          }
        `}</style>
      </div>
    </>
  );
}
