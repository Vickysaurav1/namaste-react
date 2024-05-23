import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/Consts";
import useResMenu from "../utils/useResMenu";
import ResturantCategory from "./ResturantCategory";

const ResMenu = () => {
  //useparam hooks for dynamic resturant id
  const { resId } = useParams();

  //passing the data using a custom hook useResMenu()
  const resInfo = useResMenu(resId);

  //setting value of 1st item in resturant category array as true.

  const [showIndex, setShowIndex] = useState();

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};
  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  const category =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("item>>>", category);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="font-semibold my-4 text-lg">
        Cost for two - {costForTwoMessage}
      </h3>
      <h3 className="font-bold text-lg">Menu</h3>

      {category.map((category, index) => (
        <ResturantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex && true}
          setShowIndex={() => setShowIndex(showIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default ResMenu;
