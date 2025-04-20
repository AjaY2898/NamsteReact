import { useEffect, useState } from "react";
import { MENU_API } from "./Constants";

const useRestaurantMenu = (restId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + restId);
    const json = await data.json();
    setResInfo(json);
  };
  //   console.log("info fetched sucessfully " + resInfo.toString());
  return resInfo;
};

export default useRestaurantMenu;
