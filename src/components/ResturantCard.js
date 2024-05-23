import React from "react";
import { CDN_URL } from "../utils/Consts";
const ResturantCard = (props) => {
    const { resName } = props; //destructring on the fly.
    // const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    //   resName?.info;
    return (
      <div className="m-4 p-4 w-[250px] bg-pink-50 rounded-lg hover:bg-pink-400" >
        <img
          className="rounded-lg"
          src={
            CDN_URL+resName?.info?.cloudinaryImageId
          }
        />
        <h3 className="font-bold py-1 text-lg">{resName?.info?.name}</h3>
        <h4>{resName?.info?.cuisines.join(", ")}</h4>
        <h4>{resName?.info?.avgRating}</h4>
        <h4>{resName?.info?.deliveryTime}</h4>
      </div>
    );
  };

  //higehr order component

  //input => ResturantCard o/p=> promotedresturantcard

  export const withPromotedLabel = (ResturantCard) => {
    return (props) => {
      return(
        <>
          <label>Promoted</label>
          <ResturantCard {...props} />
        </>
      )
    }
  }
  export default ResturantCard;