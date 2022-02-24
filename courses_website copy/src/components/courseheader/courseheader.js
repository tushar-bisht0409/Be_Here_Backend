import React from "react";
import "./courseheader.css";

import logo from "./logo.jpg";

const coursepage = () => {
  return (
    <>
      <div className="coursebar">
        <img className="logo" src={logo} alt="logos" />
        <div className="coursecenter">
          <input className="search" type="text" name="" id="" />
        </div>
        <div className="courseright">
          <button className="coursebutton">Login</button>
          <button className="coursebutton">SignUp</button>
        </div>
      </div>
    </>
  );
};

export default coursepage;
