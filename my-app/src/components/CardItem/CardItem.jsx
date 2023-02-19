const CardItem = ({ src, number, title, description }) => {
  return (
    <div className="carditem">
      <img className="carditem-img" src={src} alt="carditem-image"></img>
      <div className="carditem-content">
        <p className="carditem-content-number">{number}</p>
        <h5 className="carditem-content-title">{title}</h5>
        <p className="carditem-content-desc">{description}</p>
      </div>
    </div>
  );
};

export default CardItem;
