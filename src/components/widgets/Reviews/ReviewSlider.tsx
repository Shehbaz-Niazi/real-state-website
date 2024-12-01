'use client'
import { userReviewData } from "@/components/types/data";
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ReviewSlider = () => {
  return (
    <div>
      <Carousel
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        infinite
        responsive={responsive}
      >
        {userReviewData.map((item)=>{
            return(
                <div key={item.id}>
                    <ReviewCard type={item}/>
                </div>
            )
        })}
      </Carousel>
    </div>
  );
};

export default ReviewSlider;
