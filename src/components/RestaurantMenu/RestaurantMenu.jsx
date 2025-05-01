import Shimmer from "../Shimmer/Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../../util/useRestaurantMenu";
import ItemHeader from "./ItemHeader";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuData = useRestaurantMenu(resId);

  if (menuData === null) return <Shimmer />;

  let data = menuData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const category = data.filter(
    (x) =>
      x?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  if (data === undefined) {
    data = [];
  }

  return (
    <div>
      {/* categories Accordian */}
      {category.map((x) => (
        <ItemHeader key={x?.card?.card?.name} data={x?.card?.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
