import React from "react";
import "./Introduction.css";
import restaurantImage from "../../resources/owner.png";

const Introduction = () => {
  return (
    <div className="introductionContainer">
      <div className="introductionColumn">
        <h1 className="introductionHeading">Little Lemon</h1>
        <h2 className="introductionSubheading">Chicago</h2>
        <p className="introductionText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a href="/reservations">
            <button className="reserveButton">Reserve a table</button>
        </a>

      </div>
      <div className="introductionColumn">
        <img src={restaurantImage} alt="Restaurant" className="introductionImage" />
      </div>
    </div>
  );
};

export default Introduction;