import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/Consts";
import useResMenu from "../utils/useResMenu";

const ResMenu = () => {
  //useparam hooks for dynamic resturant id
  const { resId } = useParams();
  
  //passing the data using a custom hook useResMenu()
  const resInfo = useResMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};
  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};
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
