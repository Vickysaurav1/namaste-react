import React from "react";
import { CDN_URL } from "../utils/Consts";
const ResturantCard = (props) => {
    const { resName } = props; //destructring on the fly.
    // const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    //   resName?.info;
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          src={
            CDN_URL+resName?.info?.cloudinaryImageId
          }
        />
        <h3>{resName?.info?.name}</h3>
        <h4>{resName?.info?.cuisines.join(", ")}</h4>
        <h4>{resName?.info?.avgRating}</h4>
        <h4>{resName?.info?.deliveryTime}</h4>
      </div>
    );
  };
  export default ResturantCard;