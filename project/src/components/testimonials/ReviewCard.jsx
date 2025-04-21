import React from "react";
import "./ReviewCard.css";
import ownerImage from "../../resources/owner.png"


const ReviewCard = ({rating, name, reviewText}) => {
  return (
    <article className="testimonial-card">
      <div className="testimonial-label">{rating}</div>
      <img
        src={ownerImage}
        alt="Review owner"
        className="testimonial-owner-image"
      />
      <div className="testimonial-label">{name}</div>
      <div className="testimonial-text">{reviewText}</div>
    </article>
  );
};

export default ReviewCard;
