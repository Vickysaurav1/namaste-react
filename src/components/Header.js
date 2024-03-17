import React, { useState } from "react";
import { LOGO_URL } from "../utils/Consts";
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

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-itmes">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button onClick={buttonClicked} className="login">
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
