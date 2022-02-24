import "./header.css";
import React from "react";
import logo from "./logo.jpg";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headerTitles">
          <h1 className="headerTitlesText">Learn New Skills</h1>
          <h1 className="headerTitlesText">Online With Top</h1>
          <h1 className="headerTitlesText inst ">Instructor</h1>
        </div>
        <div className="headerlogo">
          <img className="headerImg" src={logo} alt="nature" />
        </div>
      </div>
      <div className="headerinfo">
        <div className="headerinfocontent">
          <h1 className="center">202 {"+"}</h1>
          <span className="color">Total Course </span>
        </div>
        <div className="headerinfocontent">
          <h1 className="center">202 {"+"}</h1>
          <span className="color">Instructors Mentoring</span>
        </div>
        <div className="headerinfocontent">
          <h1 className="center bold">202 {"+"}</h1>
          <span className="color">Students Enrolled</span>
        </div>
        <div className="headerinfocontent">
          <h1 className="center">202 {"+"}</h1>
          <span className="color"> Categories Available</span>
        </div>
      </div>
      <div className="searchbar">
        <input
          type="text"
          name="Search"
          id="search"
          placeholder="Looking For..."
        />
        <i class="fas fa-search"></i>
      </div>
    </>
  );
};

export default Header;
