import React from "react";
import "./card.css";
import logo from "./bg.jpg";

const card = () => {
  return (
    <div className="cardContainer">
      <div>
        <img className="cardImage" src={logo} alt="logos" />
      </div>
      <div className="categoryContainer">
        <p className="cardCategory">LifeStyle</p>
        <p className="spantext">Cat Behaviour Psycology and Care Traning and Care Traning</p>
        <div className="cardRating">
          <div className="ratingBox">
            <text style={{fontSize: "14px", fontWeight: '400', color: "orange"}}>5.0</text>
            <i style={{alignSelf: 'center', margin: '4px' , fontSize: '10px', color: "orange"}} className="fa-solid fa-star"></i>
            <text style={{fontSize: "14px", fontWeight: '400', color: 'grey'}}>(1001)</text>
          </div>
          <div className="ratingBox">
            <text style={{fontSize: "14px", fontWeight: '500', color: "black"}}>12,000 </text>
            <text style={{fontSize: "14px", fontWeight: '400', color: 'grey'}}>Students</text>
          </div>
        </div>
        <div className="cardDetails">
          <div>
          <i style={{alignSelf: 'center', margin: '4px' , fontSize: '14px', color: "red"}} className="fa-solid fa-clock"></i>
          <text style={{fontSize: "12px", fontWeight: '400', color: "black"}}>6 hr 40 min </text>
          </div>
          <div>
          <i style={{alignSelf: 'center', margin: '4px' , fontSize: '14px', color: "orange"}} className="fa-solid fa-calendar-plus"></i>
          <text style={{fontSize: "12px", fontWeight: '400', color: "black"}}>32 Lectures</text>
          </div>
          <div>
          <i style={{alignSelf: 'center', margin: '4px' , fontSize: '14px', color: "green"}} className="fa-solid fa-signal"></i>
          <text style={{fontSize: "12px", fontWeight: '400', color: "black"}}>Intermediate</text>
          </div>
        </div>
        <hr className="line"/>
        <div className="cardInfo">
          <div className="instructor">
          <img className="cardLogo" src={logo} alt="" />
          <span>Dr.SP Singh</span>
          </div>
          <text className="price">$50</text>
        </div>
      </div>
    </div>
  );
};

export default card;
