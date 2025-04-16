import { useEffect, useState } from "react";
import { MENU_URL } from "../../util/constant";
import Shimmer from "../Shimmer/Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menuData = await fetch(MENU_URL + resId);
    const data = await menuData.json();
    setMenuData(data?.data?.cards);
  };

  if (menuData === null) return <Shimmer />;

  const { name, city, id, costForTwoMessage } = menuData[2].card.card.info;
  let eData =
    menuData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;
  if (eData === undefined) {
    eData = [];
  }

  console.log(eData);
  //   eData.map((x) => console.log(x.card.info.name));

  //   [4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards
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
