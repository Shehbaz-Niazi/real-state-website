import React from "react";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="w-full  h-screen bg-[#0f0715] overflow-hidden relative backgroundImage bg-cover bg-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      {/* content */}
      <div className="flex justify-center items-center flex-col w-[95%] sm:w-[80%] h-full mx-auto relative z-10">
        <h1
          data-aos="fade-left"
          className="text-white text-opacity-80 text-center text-base sm:text-lg uppercase font-medium"
        >
          The best way to
        </h1>
        <h1
        data-aos-delay="150"
          data-aos="fade-right"
          className="text-center font-semibold text-3xl sm:text-5xl text-white mt-4 uppercase"
        >
          Find your dream home
        </h1>
        <p
          data-aos="fade-up"
        data-aos-delay="200"
          className="mt-4 text-center text-sm sm:text-base text-gray-200"
        >
          We have more than 745,000 apartments, place & plot
        </p>
        <div data-aos="zoom-in" 
        data-aos-delay="500"
        className="mt-12 w-full">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Hero;
