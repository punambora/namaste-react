import { SWIGGY_IMAGE_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { info } = resData;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    areaName,
    costForTwo,
    sla,
  } = info;
  return (
    <div className="res-card">
      <img className="res-img" src={SWIGGY_IMAGE_URL + cloudinaryImageId} />
      <div className="res-name">{name}</div>
      <div className="res-cuisines">{cuisines.join(", ")}</div>
      <div className="res-rating">{avgRating}</div>
      <div className="res-address">{areaName}</div>
      <div className="res-cost">{costForTwo}</div>
      <div className="res-distance">{sla.slaString}</div>
    </div>
  );
};

export default RestaurantCard;
