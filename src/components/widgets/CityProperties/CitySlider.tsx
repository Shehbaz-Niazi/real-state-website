"use client";
import { cities } from "@/components/types/data";
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CityCard from "./CityCard";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CitySlider = () => {
  return (
    <div>
      <Carousel
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        infinite
        responsive={responsive}
      >
        {cities.map((item,i) => {
          return (
            <div key={item.id} data-aos="flip-left" data-aos-delay={`${i * 150}`}>
              <CityCard type={item} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CitySlider;
