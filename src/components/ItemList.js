import React from "react";
import { CDN_URL } from "../utils/Consts";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItem(item))
  }
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-b-4 border-black text-left"
        >
          <div className="flex justify-between py-2">
            <div className="flex w-9/12 flex-col">
              <span className="font-bold">{item?.card?.info?.name}</span>
              <span>
                ₹
                {item?.card?.info?.defaultPrice / 100 ||
                  item?.card?.info?.price / 100}
              </span>
              <p className="py-2 w-4/5">{item?.card?.info?.description}</p>
            </div>
            <div className="w-3/12">
              <img
                className="w-full"
                src={CDN_URL + item?.card?.info?.imageId}
              />
              <div className="flex justify-center items-center">
                <button className="bg-white text-green-500 border border-solid w-14 relative bottom-3 font-bold self-center rounded-lg py-1 px-3"
                onClick={()=>handleAddItem(item)}>
                  ADD+
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
