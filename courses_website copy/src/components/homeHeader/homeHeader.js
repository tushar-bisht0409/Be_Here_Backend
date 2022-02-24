import "./homeHeader.css";
import logo from "./logo.jpg";
import { Link } from "react-router-dom";
const homeHeader = () => {
  return (
    <>
    <div className="box">
      <div className="headerContainer">
        <div className="headerLeft">
          <h1>Anytime, Anywhere,
            Learn Your Schedule From Any Device
            {/* Anytime, Anywhere,
            <br /> Learn Your Schedule
            <br />
            From Any Device */}
          </h1>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            in autem quod <b>asdf</b> voluptate provident natus voluptates at
            distinctio vitae dolores iste
          </span>

          <div className="searchbar">
            <i class="fas fa-search"></i>
            <input
              type="text"
              name="Search"
              id="search"
              placeholder="Course Title or Keyword"
            />
            <button className="searchbtn">Search</button>
          </div>
        </div>
        <div className="headerRight">
        </div>
      </div>
      
      </div>
    </>
  );
};

export default homeHeader;
