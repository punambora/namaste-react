import data from "../../data.json";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body-container">
      <div className="search">
        <input type="text" />
        <button>Search</button>
      </div>
      <div className="res-container">
        {data.map((res) => (
          <RestaurantCard key={res.info.resId} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
