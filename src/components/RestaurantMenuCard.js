import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenuCard = () => {
  const params = useParams();
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const getRestaurantMenu = async () => {
    console.log(params);
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5869809&lng=73.7591762&restaurantId=" +
        params.restId
    );
    const json = await response.json();

    console.log(json);
    setRestaurantMenu(json);
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  if (!restaurantMenu) {
    return <Shimmer />;
  }

  const restaurantInfo = restaurantMenu?.data?.cards[2]?.card?.card.info;
  const menu1 =
    restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card?.itemCards;
  const menu2 =
    restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card?.itemCards;
  const menu = menu1 || menu2;

  console.log(menu);

  return (
    <div className="menu-container">
      <div className="name">{restaurantInfo.name}</div>
      <div className="area">{restaurantInfo.areaName}</div>
      <div className="is-open">
        {restaurantInfo.availability?.opened && "Open"}
      </div>
      <div className="rating">{restaurantInfo.avgRatingString}</div>
      <div className="costForTwo">{restaurantInfo.costForTwoMessage}</div>
      <div className="cuisines">{restaurantInfo?.cuisines.join(", ")}</div>
      <div className="time">{restaurantInfo?.sla?.slaString}</div>
      <ul className="menu-list">
        {menu?.map((item) => {
          let data = item?.card?.info;
          const price = data?.defaultPrice || data?.price;

          return (
            <div className="menu-item" key={data.id}>
              <div className="item-name-price">
                <div className="item-name">{data?.name}</div>
                <div className="price">{price && "Rs. " + price / 100}</div>
              </div>
              <div className="description">{data.description}</div>
              <button
                className="cursor-pointer border border-black px-2 py-1  rounded-lg"
                onClick={() => handleAddItem(data)}
              >
                Add
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenuCard;
