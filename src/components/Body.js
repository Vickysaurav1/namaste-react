import React from "react";
import ResturantCard from "./ResturantCard";
import restaurants from "../utils/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn">Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {restaurants.map((resList) => {
            return <ResturantCard key={resList.resObj.id} resName={resList} />;
          })}
        </div>
      </div>
    );
  };
export default Body;