import doubleItems from '../public/data/double.json';
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
}) {
  return (
    <>
      <div className='double-container'>
        {imageSource ? (
          <>
            <div className='double-item double-right'>
              <Image
                src={imageSource}
                alt={imageAlt}
                height='612'
                width='612'
              />
            </div>
          </>
        ) : (
          <>
            <div className='double-item double-text double-right'>
              <h2 className='primary-color'>{rightTitle}</h2>
              <h3>{rightSubtitle}</h3>
              <div className='medium-emphasis'>{rightText}</div>
            </div>
          </>
        )}

        <div className='double-item double-text double-left'>
          <h2 className='primary-color'>{title}</h2>
          <h3 >{subtitle}</h3>
          <div className='medium-emphasis'>{children}</div>
        </div>
        <style jsx>{`
          .primary-color {
            color: var(--primary-color-desaturated);
          }

          .double-container {
            display: grid;
            justify-content: center;
            align-content: center;
            grid-template-columns: 0.25em repeat(10, minmax(10px, 108px)) 0.25em;
            grid-row: repeat(8, minmax(200px, 500px));
            grid-row: repeat(2, minmax(200px, 500px));
            /* background-color: var(--color-darker); */
            grid-template-areas:
              '. p1 p1 p1 p1 p1 p1 p1 p1 p1 p1 .'
              '. t1 t1 t1 t1 t1 t1 t1 t1 t1 t1 .';
          }

          .double-item {
            margin: 0 10% 0;
            text-align: left;
          }

          .double-item > img {
            padding-top: 4rem;
            object-fit: cover;
            width: 100%;
            max-height: 100%;
          }
          .double-text {
            margin: 1rem 10% 5rem;
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

          @media (min-width: 460px) {
            /* .double-text { */
            /* padding-top: 4rem; */
            /* } */
            .double-item {
              margin: 5vh 2vw;
            }
            .double-container {
              grid-template-areas: '. l l l l l r r r r r .';
            }
            .double-right {
              grid-area: ${imageLeft ? 'l' : 'r'};
            }

            .double-left {
              grid-area: ${imageLeft ? 'r' : 'l'};
            }
          }
        `}</style>
      </div>
    </>
  );
}
