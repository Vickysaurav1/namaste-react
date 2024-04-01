import React, { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/Consts";
import { Link } from "react-router-dom";
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

  //if no dependency provided = useEffect gets called on each render.
  //if dependency array empty=> useEffect gets called on initial render and jsut once.
  //if dependecy array has a element = btnName = useEffect is called everytime when btnName is updated.
  useEffect(() => {
    console.log("useEffect called");
  }, [btnName]);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-itmes">
        <ul>
          <li>
            <Link to="./">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
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
