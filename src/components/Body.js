import React, { useState, useEffect } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import restaurants from "../utils/mockData";

const Body = () => {
  // local state variable - super powerful variable.
  const [listOfResturnt, setListOfResturnt] = useState([]);
  const [filteredResturent, setFilteredResturent] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.58713555928455&lng=73.69835094520596&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

    );
    const json = await data.json();
    console.log(json);
    setListOfResturnt(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredResturent(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return listOfResturnt.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="search..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter the resturent list and update the UI
              console.log(searchText);
              const filteredAvgRes = listOfResturnt.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResturent(filteredAvgRes);
            }}
          >
            search
          </button>
        </div>
        <button
          //onClick of the button return resturnat having average rating greater than 4
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfResturnt.filter(
              (res) => res?.info?.avgRating > 4
            );
            setFilteredResturent(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredResturent.length > 0 &&
          filteredResturent.map((resList) => {
            return (
              <Link
                key={resList?.info?.id}
                to={"/restaurants/" + resList?.info?.id}
              >
                <ResturantCard
                  key={resList?.info?.differentiatedUi?.id}
                  resName={resList}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
};
export default Body;
