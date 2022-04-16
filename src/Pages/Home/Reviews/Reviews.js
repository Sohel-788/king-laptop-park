
import React from "react";
import { Container, Typography } from "@mui/material";
import { useState,useEffect } from "react";
import Slider from "react-slick";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews,setReviews]=useState([]);
  useEffect(()=>{
    fetch('./reviews.json')
    .then(res=>res.json())
    .then(data=>setReviews(data))
  },[])
//slick slider settings
  const settings = {
    dots: true,
    infinite: true,
      speed: 500,
      slidesToShow: 4,
      autoplay: true,
    slidesToScroll: 1,
    initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots:false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:false
          }
        }
      ]
  };
  return (
    <div id="reviews">
      <Container sx={{my:5}}>
        <Typography
                sx={{ my: 5 }}
                variant="h4"
                gutterBottom
                component="div"
              >
        Our happy customer's <span style={{color:'tomato'}}>reviews</span>
      </Typography>
        <Slider {...settings}>
        {
            reviews.map(review=> <Review
            key={review.id}
            review={review}
            ></Review> )
          }
        </Slider>
    </Container>
    </div>
  );
};

export default Reviews;
