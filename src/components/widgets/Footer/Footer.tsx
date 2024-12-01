import React from "react";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-20 pb-20 bg-black">
      <div className="w-[80%] mx-auto grid items-start justify-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20">
        {/* 1st Footer Part */}
        <div>
          <div className="flex items-center gap-x-2">
            <div className="md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex items-center justify-center flex-col">
              <FaHouse />
            </div>
            <h1 className="text-white font-bold text-sm sm:text-base md:text-xl">
              The Houses
            </h1>
          </div>
          <p className="text-gray-300 mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, dolorum quisquam.
          </p>
          <p className="text-gray-300 mt-4 font-semibold">shehbazniazi.pr@gmail.com</p>
          <p className="text-gray-300 mt-2 font-semibold">+92 347 3184155</p>
          {/* Social Links */}
          <div className="flex items-center gap-x-4 mt-6">
            <FaFacebook className="w-6 h-6 cursor-pointer hover:scale-110 duration-300 text-blue-600"/>
            <FaLinkedin className="w-6 h-6 cursor-pointer hover:scale-110 duration-300 text-blue-400"/>
            <FaWhatsapp className="w-6 h-6 cursor-pointer hover:scale-110 duration-300 text-green-500"/>
            <FaYoutube className="w-6 h-6 cursor-pointer hover:scale-110 duration-300 text-red-500"/>
          </div>
        </div>
        {/* 2nd Part */}
        <div className="">
            <h1 className="footer_heading">Popular Search</h1>
            <p className="footer_link">Apartment For Rent</p>
            <p className="footer_link">Apartment Low to High</p>
            <p className="footer_link">Offices for Buy</p>
            <p className="footer_link">Offices for Rent</p>
        </div>
        {/* 3rd Part */}
        <div className="">
            <h1 className="footer_heading">Popular Search</h1>
            <p className="footer_link">Terms of Use</p>
            <p className="footer_link">Privacy Policy</p>
            <p className="footer_link">Pricing Plans</p>
            <p className="footer_link">Contact Support</p>
            <p className="footer_link">Our Services</p>
            <p className="footer_link">Carrers</p>
            <p className="footer_link">FAQs</p>
        </div>
        {/* 4th Part */}
        <div className="">
            <h1 className="footer_heading">Discover</h1>
            <p className="footer_link">Miami</p>
            <p className="footer_link">Los Angeles</p>
            <p className="footer_link">Chicago</p>
            <p className="footer_link">New York</p>
            <p className="footer_link">London</p>
        </div>
      </div>
      <p className="text-center mt-4 text-base text-white text-opacity-70">©Copyright 2024 by Shehbaz Khan Niazi</p>
    </div>
  );
};

export default Footer;



















