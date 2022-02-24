import React from "react";
import "./coursepage.css";
import Courseheader from "../../components/courseheader/courseheader";

const coursepage = () => {
  return (
    <>
      <Courseheader />
      <div className="courseheader">
        <div className="container">
          <div className="desbox1">
            <h1>
              Follow Your
              <br /> Passion and Exceed
            </h1>
            <div className="tutotordescription">
              <h2 className="name">Dr Ritesh Sajwan</h2>
            </div>
          </div>
          <div className="desbox2">
            <ul className="subnav">
              <li className="item">Overview</li>
              <li className="item">Requirements</li>
              <li className="item">Resources</li>
              <li className="item">Review</li>
            </ul>
            <div className="demoplayer">
              <h1>This is player</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default coursepage;
