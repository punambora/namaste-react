const RestaurantCard = ({ resData }) => {
  const { info } = resData;
  const { image, name, cuisine, rating, locality, timing, costText, distance } =
    info;
  return (
    <div className="res-card">
      <img className="res-img" src={image.url} />
      <div className="res-name">{name}</div>
      <div className="res-cuisines">
        {cuisine.map((cuis) => cuis.name).join(", ")}
      </div>
      <div className="res-rating">{rating.aggregate_rating}</div>
      <div className="res-address">{locality.name}</div>
      <div className="res-timing">{timing.text}</div>
      <div className="res-cost">{costText.text}</div>
      <div className="res-distance">{distance}</div>
    </div>
  );
};

export default RestaurantCard;
