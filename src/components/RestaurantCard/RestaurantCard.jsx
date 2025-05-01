import "./restaurantCard.css";
import { IMG_URL } from "../../util/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, locality, cloudinaryImageId } =
    resData?.info;
  const { slaString } = resData?.info?.sla;

  return (
    <>
      <div className=" bg-slate-200  rounded-lg p-2 hover:scale-110 hover:border hover:border-slate-700 hover:bg-slate-400 hover:text-white w-64 ">
        <div className="relative">
          <img
            src={IMG_URL + cloudinaryImageId}
            className="size-60 rounded-lg"
            alt=""
          />
        </div>
        <div className="text-center my-2">
          <h3 className="font-medium font-[Open_Sans] text-xl text-slate-900 italic">
            {name}
          </h3>

          <h4>{cuisines.join(", ")}</h4>
          <h4>
            {avgRating} {"|"} {slaString}
          </h4>
          <h4 className="font-mono text-red-700 font-extrabold">
            {costForTwo}
          </h4>
          <h4>{locality}</h4>
        </div>
      </div>
    </>
  );
};

export const RestaurantCardWithFastDelivery = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <h1 className="absolute top-0 left-0 bg-green-700 text-white p-2 rounded-lg z-1">
          Fast Delivery
        </h1>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
