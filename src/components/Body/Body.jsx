import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./Body.css";
import { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { API_URL } from "../../util/constant";
import { Link } from "react-router";
import useOnlineStatus from "../../util/useOnlineStatus";
import { RestaurantCardWithFastDelivery } from "../RestaurantCard/RestaurantCard";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");
  const status = useOnlineStatus();

  const RestaurantCardWithFastDeliveryComp =
    RestaurantCardWithFastDelivery(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  if (status === false)
    return <h1>Please check your network once, it seems you </h1>;

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
    <div className="px-5 py-2">
      <div className="flex justify-start items-center my-3 gap-5">
        <button
          className="bg-green-600 px-3 py-2 text-white rounded-lg shadow-emerald-200 hover:cursor-pointer hover:bg-green-800"
          onClick={() => {
            const filteredRestaurant = listOfRestaurant.filter((res) => {
              return res?.info?.avgRating >= 4.5;
            });
            setFilterRestaurant(filteredRestaurant);
          }}
        >
          Top Restuartants
        </button>
        <div className="space-x-3 mx-4">
          <input
            className="py-1 border border-none rounded-sm ring-1 ring-cyan-700-600 focus:ring-0 focus:outline-cyan-900"
            type="text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:cursor-pointer hover:bg-cyan-400"
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
      </div>
      <div className="grid grid-cols-6 gap-8 mt-10">
        {filterRestaurant.map((restaurant) => (
          <Link
            to={"restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant?.info?.sla?.deliveryTime > 30 ? (
              <RestaurantCard resData={restaurant} key={restaurant.info.id} />
            ) : (
              <RestaurantCardWithFastDeliveryComp
                resData={restaurant}
                key={restaurant.info.id}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
