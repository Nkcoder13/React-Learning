import "./restaurantCard.css";
const RestaurantCard = () => {
  return (
    <>
      <div className="resCard">
        <img src="src/assets/pizza.avif" className="resImg" alt="" />
        <div className="details">
          <h3>Pizza Hut</h3>
          <h3>40-45 mins</h3>
          <h4>4.2 Ratings</h4>
          <h4>Triplicane</h4>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
