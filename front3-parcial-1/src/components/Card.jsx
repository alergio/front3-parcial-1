const Card = ({ props }) => {
  const dynamicColor = "#" + props.color;
  return (
    <div className="colorClass" style={{ "--dynamic-color": dynamicColor }}>
      Hola {props.name} tu color favorito es:{" "}
      <i style={{ color: dynamicColor }}>{props.color}</i>
    </div>
  );
};

export default Card;
