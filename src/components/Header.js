import React, { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/Consts";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const buttonClicked = () => {
    if (btnName === "Login") {
      setBtnName("Logout");
    } else if (btnName === "Logout") {
      setBtnName("Login");
    } else {
      return "sdd";
    }
  };

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  //if no dependency provided = useEffect gets called on each render.
  //if dependency array empty=> useEffect gets called on initial render and jsut once.
  //if dependecy array has a element = btnName = useEffect is called everytime when btnName is updated.
  useEffect(() => {
    console.log("useEffect called");
  }, [btnName]);

  //selector - subscribing to the store using selector

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online stauts:{onlineStatus ? "✅" : "❌"}</li>
          <li className="px-4">
            <Link to="./">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">Cart-({cartItems.length} items)</Link>
          </li>
          <button
            onClick={buttonClicked}
            className="border-dotted border-2 border-pink-600 bg-green-100 py-1 hover:bg-green-400 rounded-lg px-3"
          >
            {btnName}
          </button>
          <li className="px-4">
            <Link to="/grocery">{loggedInUser}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
