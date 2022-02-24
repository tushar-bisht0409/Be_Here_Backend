import "./course.css";
import logo from "./logo.jpg";

const course = () => {
  return (
    <div className="course">
      <img className="courseimage" src={logo} alt="logos" />
      <span className="spantext">
        Follow Your Passion and <br />
        Exceed
      </span>
      <div className="courseinfo">
        <img className="courselogo" src={logo} alt="" />
        <span>Dr.Ritesh Sajwan</span>
      </div>
      <button className="button">$50</button>
    </div>
  );
};

export default course;
