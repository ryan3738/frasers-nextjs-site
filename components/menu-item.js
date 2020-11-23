import menuData from '../public/data/menu-data.json';

const getMenuItem = (menuData, category) => {
  return (
    <>
      {menuData.menu
        .filter((e) => e.category === category)
        //   .filter((e) => e.available === true)
        .map((data) => {
          return (
            <div key={data['itemName']} className='menu-item'>
              <h3 className='primary-color'>{data['itemName']}</h3>
              <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
              <p className='primary-color'>{data.price}</p>
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
      <div className='menu-section'>
        {getMenuItem(menuData, props.category)}
      </div>
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
