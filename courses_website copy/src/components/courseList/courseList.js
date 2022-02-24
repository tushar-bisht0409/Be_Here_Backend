import "./courseList.css";

// import Course from "../course/course";
import Card from "../card/card";

const courseList = () => {
  return (
    <div>
      <div className="popularcourses">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="btn-container">
        <button className="view-btn">View All</button>
      </div>
    </div>
  );
};

export default courseList;
