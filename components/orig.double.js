import doubleItems from '../public/data/double.json'
import Image from 'next/image'

const getDoubleItem = (double, category) => {
  return (
    <>
      {double
        .filter((e) => e.category === category)
        //   .filter((e) => e.Available === true)
        .map((data) => {
          return (
            <div key={data.title} className="double-container">
              <div className="double-item double-pic right">
                <Image
                  src={data.imageSource}
                  alt={data.imageAlt}
                  height="612"
                  width="612"
                />
              </div>
              <div className="double-item double-text left">
                <h3 className="primary-color">{data.title}</h3>
                {data.subTitle ? <h4 className="">{data.subTitle}</h4> : ''}
                <p className="medium-emphasis">{data.content}</p>
              </div>
              <style jsx>{`
                .primary-color {
                  color: var(--primary-color-desaturated);
                }

                 {
                  /* .double-container {
                  display: grid;
                  justify-content: center;
                  align-content: center;
                  grid-template-columns: 0.25em repeat(10, minmax(10px, 108px)) 0.25em;
                  grid-row: repeat(8, minmax(200px, 500px));
                  grid-row: repeat(2, minmax(200px, 500px));

                  grid-template-areas:
                    '. p1 p1 p1 p1 p1 p1 p1 p1 p1 p1 .'
                    '. t1 t1 t1 t1 t1 t1 t1 t1 t1 t1 .';
                } */
                }

                .double-item {
                  margin: 0 20px 0;
                  text-align: left;
                }

                .double-item > img {
                  padding-top: 4rem;
                  object-fit: cover;
                  width: 100%;
                  max-height: 100%;
                }

                .double-pic {
                  grid-area: p1;
                }

                .double-text {
                  margin: 1rem 20px 5rem;
                  grid-area: t1;
                  background-color: var(--surface-color);
                  padding: 1rem;
                  border-radius: 7px;
                }

                /* .alternating-color:nth-child(odd) {
                  color: var(--white-color);
                } */

                 {
                  /* @media (min-width: 460px) { */
                }
                /* .double-text { */
                /* padding-top: 4rem; */
                /* } */
                 {
                  /* .double-item {
                    margin: 5vh 2vw;
                  }
                  .double-container {
                    grid-template-areas: '. l l l l l r r r r r .';
                  }
                  .double-pic {
                    grid-area: ${data.imageLeft ? 'l' : 'r'};
                  }

                  .double-text {
                    grid-area: ${data.imageLeft ? 'r' : 'l'};
                  }
                } */
                }
              `}</style>
            </div>
          )
        })}
    </>
  )
}

export default function Double ({ category }) {
  return <>{getDoubleItem(doubleItems, category)}</>
}
