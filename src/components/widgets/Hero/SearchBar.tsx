import React from "react";
import { FaSearch } from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const SearchBar = () => {
  return (
    <div className="w-full md:w-[80%] mx-auto bg-white h-[4rem] sm:h-[5rem] flex flex-col px-4 sm:px-8  justify-center rounded-lg">
      <div className="flex items-center justify-between h-full ">
        <input
          type="text"
          placeholder="Enter an Address, city or ZIP to buy"
          className="sm:flex-[0.8] h-[60%] bg-gray-100 block rounded-lg outline-none px-4 placeholder:text-sm"
        />
        <div className="flex items-center flex-[0.2] ml-8 gap-x-6">
          <div className="lg:flex hidden items-center cursor-pointer space-x-2">
            <HiAdjustmentsHorizontal className="text-gray-700 w-6 h-6" />
            <p className="text-gray-700 font-semibold">Advance</p>
          </div>
          <div className="w-12 h-12 bg-rose-600 flex items-center hover:bg-red-800 transition-all duration-200 
          cursor-pointer justify-center text-white rounded-full">
            <FaSearch/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
