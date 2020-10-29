import MenuItem from './menu-item';

export default function MenuSection(props) {
  return (
    <>
      <h2>{props.category}</h2>
      <MenuItem category={props.category} />
    </>
  );
}
