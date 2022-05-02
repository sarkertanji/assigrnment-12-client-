import React, { useEffect, useState } from "react";
import SinngleReview from "../Review/SinngleReview";
import "./reviews.css";

const Reviews = () => {
  const [reviews, setRevierw] = useState([]);
  useEffect(() => {
    fetch("https://whispering-sands-47045.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setRevierw(data));
  }, []);
  return (
    <div className="products-container">
      <h1>OUR REVIEWS</h1>
      <div className="review-container">
        {reviews.map((review) => (
          <SinngleReview key={review.id} review={review}></SinngleReview>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
