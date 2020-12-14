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
            display: flex;
            flex-direction: column;
            max-width: 612px;
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

          
        `}</style>
      </div>
    </>
  );
}
