import React from "react";
import ReviewCard from "./ReviewCard";
import "./Testimonials.css";


const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">Testimonials</h2>
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </div>
  );
};

export default Testimonials;
