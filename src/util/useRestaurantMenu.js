import { useState, useEffect } from "react";
import { MENU_URL } from "./constant";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  const fetchMenu = async () => {
    const resMenu = await fetch(MENU_URL + resId);
    const json = await resMenu.json();
    setResMenu(json?.data?.cards);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return resMenu;
};

export default useRestaurantMenu;
