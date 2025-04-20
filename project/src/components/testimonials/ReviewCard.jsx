import React from "react";
import "./ReviewCard.css";
import ownerImage from "../../resources/owner.png"


const ReviewCard = () => {
  return (
    <article className="testimonial-card">
      <div className="testimonial-label">Rating</div>
      <img
        src={ownerImage}
        alt="Review owner"
        className="testimonial-owner-image"
      />
      <div className="testimonial-label">Name</div>
      <div className="testimonial-text">Review rext</div>
    </article>
  );
};

export default ReviewCard;
