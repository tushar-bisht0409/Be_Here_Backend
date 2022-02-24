import "./navbar.css";
import logo from "./logo.jpg";
import React from "react";

const TopBar = () => {
  return (
    <>
      <div className="navbar">
        <img className="logo" src={logo} alt="logos" />
        <div className="navbarcenter">
          <ul className="navbarlist">
            <li className="navbarlistitems">Home</li>
            <li className="navbarlistitems">Instructor</li>
            <li className="navbarlistitems">ContactUs</li>
            <li className="navbarlistitems">AboutUs</li>
          </ul>
        </div>
        <div className="navbarright">
          <button className="navbarbutton">Login</button>
          <button className="navbarbutton">SignUp</button>
        </div>
      </div>
    </>
  );
};

export default TopBar;
