import menuData from '../public/data/menu-data.json';

const getMenuItem = ({ category }) => {
  return (
    <>
      {menuData.menu
        // .filter(item => item.category === category)
        .filter(item => item.available === true)
        .map(item => (
          <div key={item.itemName} className="menu-item">
            <h3 className="primary-color">{item.itemName}</h3>
            {item.description ? (
              <>
                <div dangerouslySetInnerHTML={{ __html: item.description }} />
                <br />
              </>
            ) : (
              ''
            )}

            <div className="primary-color">{item.price}</div>
            {item.modifier ? (
              <>
                {item.modifier}&nbsp;
                <span className="primary-color">{item.modifierPrice}</span>
                <br />
              </>
            ) : (
              ''
            )}

            {item.dietaryPreferences ? (
              <>
                <br />
                <div className="dietary-preferences">
                  {item.dietaryPreferences}
                </div>
              </>
            ) : (
              ''
            )}
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
              .dietary-preferences {
                font-size: 0.78405rem;
                line-height: 1.1;
                text-transform: uppercase;
              }
            `}</style>
          </div>
        ))}
    </>
  );
};

export default function MenuItem({ category }) {
  return (
    <>
      <div className="menu-section">{getMenuItem(category)}</div>
      <style jsx>
        {`
          .menu-section {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
            grid-gap: 5px;
            padding: 5%;
          }
        `}
      </style>
    </>
  );
}
