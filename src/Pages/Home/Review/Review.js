import { Rating } from "@mui/material";
import React from "react";
import './Review.css'
const Review = ({ review }) => {
  const { img, comment, displayName} = review;
  const [value] = React.useState(4);
  return (
    <div className='review'>
      <div className="reviewer">
        <img src={img} alt="" />
      </div>
      <div className="reviewInfo">
        <h6>{displayName}</h6>
        <p>{comment}</p>
        <p>
            <Rating name="read-only" value={value} readOnly />
        </p>
      </div>
    </div>
  );
};

export default Review;
