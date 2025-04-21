import React from "react";
import ReviewCard from "./ReviewCard";
import "./Testimonials.css";


const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">Testimonials</h2>
      <ReviewCard name="Alex1" rating="★★★★★" reviewText="lorem ipsum dolor sit amet consectetuer adipiscing elit" />
      <ReviewCard name="Alex2" rating="★★★★★" reviewText="lorem ipsum dolor sit amet consectetuer adipiscing elit"/>
      <ReviewCard name="Alex3" rating="★★★★★" reviewText="lorem ipsum dolor sit amet consectetuer adipiscing elit"/>
      <ReviewCard name="Alex4" rating="★★★★★" reviewText="lorem ipsum dolor sit amet consectetuer adipiscing elit"/>
    </div>
  );
};

export default Testimonials;
