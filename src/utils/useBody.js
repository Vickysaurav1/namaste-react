import React, { useEffect, useState } from "react";

export const useBody = () => {
  const [listOfResturnt, setListOfResturnt] = useState([]);
  const [filteredResturent, setFilteredResturent] = useState([]);
  //fetchdata
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.58713555928455&lng=73.69835094520596&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfResturnt(
      json.data.cards[4].card.card.gridElements?.infoWithStyle.restaurants
    );
    console.log(json);
  };
  return {listOfResturnt,filteredResturent};
};
