import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div id="wrapper">
      <br />
      <h1>Oops! Lost your way?</h1>
      <div id="info">
        <h3>404: PAGE NOT FOUND </h3>
        <br />

        <h4>Come Back To Home, Friend ! 😇</h4>
        <br />
        <Link to='/dashboard' className="link404">
          Home Page
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
