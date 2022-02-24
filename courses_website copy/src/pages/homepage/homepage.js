import React from "react";
import Nav from "../../components/navbar/NavBar";
// import Header from "../../components/header/Header";
import HomeHeader from "../../components/homeHeader/homeHeader";
import CourseList from "../../components/courseList/courseList";
import Footer from "../../components/footer/footer";
import Categories from "../../components/categories/categories";
class HomePage extends React.Component {
  render() {
  return (
    <>
      {/* <Header /> */}
      <HomeHeader />
      <Categories />
      <CourseList />
      <Footer />
    </>
  );
};
}

export default HomePage;
