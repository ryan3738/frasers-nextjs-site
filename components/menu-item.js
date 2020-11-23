import menu from '../public/data/menu.json';

const getMenuItem = (menu, category) => {
  return (
    <>
      {menu
        .filter((e) => e.Category === category)
        //   .filter((e) => e.Available === true)
        .map((data) => {
          return (
            <div key={data['itemName']} className='menu-item'>
              <h3 className='primary-color'>{data['itemName']}</h3>
              <p dangerouslySetInnerHTML={{ __html: data.Description }}></p>
              <p className='primary-color'>{data.Price}</p>
              <style jsx>{`
                .menu-item {
                  text-align: left;
                  border-color: var(--primary-color-desaturated);
                  border-radius: 7px;
                  padding: 5%;
                  background: var(--surface-color);
                  border-color: var(--primary-color-desaturated);
                }
                .primary-color {
                  color: var(--primary-color-desaturated);
                }
              `}</style>
            </div>
          );
        })}
    </>
  );
};

export default function MenuItem(props) {
  return (
    <div>
      <div className='menu-section'>{getMenuItem(menu, props.category)}</div>
      <style jsx>
        {`
          .menu-section {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
            grid-gap: 20px;
            padding: 5%;
          }
        `}
      </style>
    </div>
  );
}
