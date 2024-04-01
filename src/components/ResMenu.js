import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/Consts";

const ResMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  //useparam hooks for dynamic resturant id
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
         MENU_API_URL + resId + "&isMenuUx4=true&submitAction=ENTER"
    //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.587136013124955&lng=73.69835134595633&restaurantId=649401&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log("json>>", json);
    await setResInfo(json?.data);
    console.log("resInfo>", resInfo);
  };
  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};
  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};
  console.log("item>>>", itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <h3>{costForTwoMessage}</h3>
      <h3>Menu</h3>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - {`Rs ` + item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResMenu;
