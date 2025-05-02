import Shimmer from "../Shimmer/Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../../util/useRestaurantMenu";
import ItemHeader from "./ItemHeader";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuData = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (menuData === null) return <Shimmer />;

  let data = menuData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const category = data.filter(
    (item) =>
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  if (data === undefined) {
    data = [];
  }

  return (
    <div>
      {/* categories Accordian */}
      {category.map((cate, index) => (
        <ItemHeader
          key={cate?.card?.card?.name}
          data={cate?.card?.card}
          showItem={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
