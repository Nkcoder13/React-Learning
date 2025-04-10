import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./Body.css";
import resList from "../../util/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  return (
    <div className="bodySection">
      <div className="search">
        <button
          className="topResbtn"
          onClick={() => {
            const filteredRestaurant = resList.filter((res) => {
              return res?.info?.avgRating >= 4.5;
            });
            setListOfRestaurant(filteredRestaurant);
          }}
        >
          Top Restuartants
        </button>
      </div>
      <div className="cards">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
