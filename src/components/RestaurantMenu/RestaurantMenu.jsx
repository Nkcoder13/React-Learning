import Shimmer from "../Shimmer/Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../../util/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuData = useRestaurantMenu(resId);

  if (menuData === null) return <Shimmer />;

  const { name, city, costForTwoMessage } = menuData[2].card.card.info;
  let eData =
    menuData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;
  if (eData === undefined) {
    eData = [];
  }

  return (
    <div>
      <h1>{name}</h1>
      <h2>{city}</h2>
      <h4>{costForTwoMessage}</h4>
      <ul>
        {eData.map((x) => (
          <li key={x.card.info.id}>
            {x.card.info.name} - ₹
            {(x.card.info.price ||
              x.card.info.finalPrice ||
              x.card.info.defaultPrice) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
