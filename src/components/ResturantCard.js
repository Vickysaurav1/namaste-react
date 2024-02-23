import React from "react";
import { CDN_URL } from "../utils/Consts";
const ResturantCard = (props) => {
    const { resName } = props; //destructring on the fly.
    const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
      resName?.resObj;
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          src={
            CDN_URL+cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    );
  };
  export default ResturantCard;