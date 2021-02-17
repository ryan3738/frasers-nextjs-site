import menuData from '../public/data/menu-data.json'

const getMenuItem = ({ category }) => (
  <>
    {menuData.menu
      .filter((e) => e.category === category)
      .filter((e) => e.available === true)
      .map((data) => (
        <div key={data.itemName} className="menu-item">
          <h3 className="primary-color">{data.itemName}</h3>
          <div dangerouslySetInnerHTML={{ __html: data.description }} />
          <br />
          <div className="primary-color">{data.price}</div>
          {data.modifier ? (
            <>
              {data.modifier}&nbsp;
              <span className="primary-color">{data.modifierPrice}</span>
              <br/>
            </>
          ) : (
            ''
          )}

          {data.dietaryPreferences ? (
            <>

            <br/>
            <div className="dietary-preferences">{data.dietaryPreferences}</div>
            </>
          ) : ('')}
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
            .dietary-preferences{
              font-size: 0.78405rem;
              line-height: 1.1;
              text-transform: uppercase;
            }
          `}</style>
        </div>
      ))}
  </>
)

export default function MenuItem(category) {
  return (
    <div>
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
    </div>
  )
}
