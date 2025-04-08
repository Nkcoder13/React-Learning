import "./restaurantCard.css";
const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, locality, cloudinaryImageId } =
    resData?.info;
  const { slaString } = resData?.info?.sla;

  return (
    <>
      <div className="resCard">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          className="resImg"
          alt=""
        />
        <div className="details">
          <h3>{name}</h3>
          <h4>{cuisines.join(",")}</h4>
          <h4>
            {avgRating} {"|"} {slaString}
          </h4>
          <h4>{costForTwo}</h4>
          <h4>{locality}</h4>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
