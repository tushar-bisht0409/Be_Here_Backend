import { React, useState } from "react";
import "./categories.css";

const Categories = () => {

  const [listState, setListState] = useState('Popular');

  const listChange = (listName) => {
    setListState(listName);
  } 

  return (
    <>
      <div className="categoriesContainer">
        <h1>Our Class Categories</h1>
        <div className="horizon-box">
          <div className="btn-box">
        <button className="btn">
          <i class="fa-solid fa-angle-left"></i>
        </button>
        </div>
        <ul className="categoriesList">
          <li className= {listState === "Popular" ? "active-listItem" : "listItems"} onClick={() => listChange('Popular')}>Popular</li>
          <li className= {listState === "Food" ? "active-listItem" : "listItems"} onClick={() => listChange('Food')}>Food</li>
          <li className= {listState === "Drawing" ? "active-listItem" : "listItems"} onClick={() => listChange('Drawing')}>Drawing</li>
          <li className= {listState === "Arts & Entertainment" ? "active-listItem" : "listItems"} onClick={() => listChange('Arts & Entertainment')}>Arts & Entertainment</li>      
          <li className= {listState === "Sports" ? "active-listItem" : "listItems"} onClick={() => listChange('Sports')}>Sports</li>          
          <li className= {listState === "Lisfestyle" ? "active-listItem" : "listItems"} onClick={() => listChange('Lisfestyle')}>Lisfestyle</li>          
          <li className= {listState === "Gaming" ? "active-listItem" : "listItems"} onClick={() => listChange('Gaming')}>Gaming</li>         
          <li className= {listState === "Development" ? "active-listItem" : "listItems"} onClick={() => listChange('Development')}>Development</li>         
          <li className= {listState === "Education" ? "active-listItem" : "listItems"} onClick={() => listChange('Education')}>Education</li>        </ul>
          <div className="btn-box">
          <button className="btn">
          <i class="fa-solid fa-angle-right"></i>
        </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Categories;
