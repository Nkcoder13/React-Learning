import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./Body.css";
import resList from "../../util/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

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
