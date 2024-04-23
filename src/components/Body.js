import React, { useState, useEffect, useMemo } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useBody } from "../utils/useBody";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //using custom hook for code modularity  and reusability and API call is happening in the useBody only.
  const { listOfResturnt } = useBody();
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    setFilteredRes(listOfResturnt);
  }, [listOfResturnt]);

  if (onlineStatus === false)
    return (
      <h1>Looks Like you're offline!!Please check your internet connection</h1>
    );

  return listOfResturnt?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search p-4 m-4">
          <input
            type="text"
            className="border border-dotted border-black p-1 m-1 rounded-lg"
            placeholder="search..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 rounded"
            onClick={() => {
              //filter the resturent list and update the UI
              console.log(searchText);
              const filteredAvgRes = listOfResturnt.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRes(filteredAvgRes);
            }}
          >
            search
          </button>
        </div>
        <div className="p-4 m-4">
          <button
            //onClick of the button return resturnat having average rating greater than 4
            className="px-4 py-2 bg-green-50 rounded-lg"
            onClick={() => {
              const filteredList = listOfResturnt.filter(
                (res) => res?.info?.avgRating > 4
              );
              setFilteredRes(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRes?.length > 0 &&
          filteredRes?.map((resList) => {
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
