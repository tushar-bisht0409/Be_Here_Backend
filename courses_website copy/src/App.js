import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoursePage from "./pages/coursepage/coursepage";
import React from "react";

class App extends React.Component {

  componentDidMount() {
  //  this.props.dispatch(fetchAuthStatus());
  }

  render() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />}>
          </Route>
          <Route path="/courses" element={<CoursePage />}>            
          </Route>
        </Routes>
      </Router>
    </>
  );
  }
}

export default App;
