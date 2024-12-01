"use client";
import { NavLinks } from "@/components/types/Navlink";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { HiBars3BottomRight } from "react-icons/hi2";

interface Props {
  openNav:() => void
}

const Navbar = ({openNav}:Props) => {
  const [navBg, setnavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setnavBg(true);
      } else {
        setnavBg(false);
      }
    };
    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    }
  }, []);

  return (
    <div className={` h-[10vh] z-[100] w-full ${navBg ? "bg-gray-800" : "bg-black opacity-80 "}  duration-300 `}>
      <div className="flex items-center h-full justify-between w-[95%] px-4 sm:w-[90%] xl:w-[83%] mx-auto">
        {/* LOGO */}
        <div className="flex items-center gap-x-2">
          <div className="md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex items-center justify-center flex-col">
            <FaHouse />
          </div>
          {/* Heaidng */}
          <h1 className="text-white font-bold text-sm sm:text-base md:text-xl">
            The Houses
          </h1>
        </div>
        {/* NAV links */}
        <div className="lg:flex items-center gap-x-14 text-white hidden">
          {NavLinks.map((item) => {
            return (
              <Link key={item.id} href={item.url}>
                <p className="font-medium hover:text-yellow-300">
                  {item.label}
                </p>
              </Link>
            );
          })}
        </div>
        {/* Login and Registor Button */}
        <div className="flex items-center gap-x-4">
          {/* Login */}
          <div className="flex items-center cursor-pointer text-white gap-x-2 hover:text-rose-400 transition-all duration-300">
            <FaUserCircle className="w-5 h-5" />
            <p className="font-bold text-xs sm:text-base">Login / Registor</p>
            {/* Burger Icon */}
            <HiBars3BottomRight  onClick={openNav} className="sm:w-8 sm:h-8 h-6 w-6 cursor-pointer text-white lg:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
