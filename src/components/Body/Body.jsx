import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./Body.css";
const Body = () => {
  return (
    <div className="bodySection">
      <div className="search">
        <h3>Search Here..</h3>
      </div>
      <div className="cards">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

export default Body;
