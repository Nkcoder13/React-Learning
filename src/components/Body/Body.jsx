import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./Body.css";
import resList from "../../util/mockData";
import { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { API_URL } from "../../util/constant";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
    console.log(listOfRestaurant);
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bodySection">
      <div className="search">
        <button
          className="topResbtn"
          onClick={() => {
            const filteredRestaurant = listOfRestaurant.filter((res) => {
              return res?.info?.avgRating >= 4.3;
            });
            setListOfRestaurant(filteredRestaurant);
          }}
        >
          Top Restuartants
        </button>
        <input
          className="searchBox"
          type="text"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>
        <button
          className="topResbtn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterRestaurant(filteredList);
          }}
        >
          Search
        </button>
      </div>
      <div className="cards">
        {filterRestaurant.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
