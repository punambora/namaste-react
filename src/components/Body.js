import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

export const Body = () => {
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5869809&lng=73.7591762&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await result.json();
    // setRestaurantsData(
    //   result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );
    const data =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    console.log(data);

    setRestaurantsData(data || []);
    setFilteredRestaurants(data || []);
  };

  const filterTopRatedRestaurants = () => {
    setFilteredRestaurants(
      restaurantsData.filter((item) => item.info.avgRating > 4.3)
    );
  };

  const filterSearchedRestaurants = () => {
    setFilteredRestaurants(
      restaurantsData.filter((item) =>
        item.info.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  return (
    <div className="body-container">
      <div className="filters">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={filterSearchedRestaurants}>Search</button>
        </div>
        <div>
          <button onClick={filterTopRatedRestaurants}>
            Top rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurants.length === 0 ? (
          <Shimmer />
        ) : (
          filteredRestaurants.map((res) => (
            <RestaurantCard key={res.info.id} resData={res} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
