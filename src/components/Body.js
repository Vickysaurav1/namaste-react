import React, { useState, useEffect } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
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
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=18.585048&lng=73.740268&carousel=true&third_party_vendor=1"
    );
    const json = await data.json();
    console.log(json);
    setListOfResturnt(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredResturent(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    console.log(listOfResturnt);
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
              const filteredRes = listOfResturnt.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResturent(filteredRes);
            }}
          >
            search
          </button>
        </div>
        <button
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
              <ResturantCard
                key={resList?.info?.differentiatedUi?.id}
                resName={resList}
              />
            );
          })}
      </div>
    </div>
  );
};
export default Body;
