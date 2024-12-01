import React from "react";
import Link from "next/link";
import { NavLinks } from "@/components/types/Navlink";
import { CgClose } from "react-icons/cg";

interface Props {
  showNav:boolean,
  closeNav:()=>void
}

const MobileNavbar = ({closeNav,showNav}:Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-1000%]"
  return (
    <div>
      {/* Overlay */}
      <div className={`transform fixed ${navOpen} transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}></div>
      {/* NavLinks */}
      <div className={`text-white ${navOpen} cursor-pointer  transform transition-all duration-500 delay-300 fixed flex justify-center flex-col h-screen w-[80%] sm:w-[60%] bg-[#c1205e] gap-y-6 z-[10000]`}>
        {NavLinks.map((item, index) => {
          return (
            <Link href={item.url} key={index}>
              <p className="font-medium text-[20px] ml-12 border-b-[1.5px] pb-1 w-fit border-white sm:text-[30px] hover:text-yellow-300 ">
                {item.label}
              </p>
            </Link>
          );
        })}
        {/* cross Button */}
        <CgClose  onClick={closeNav} className="absolute top-[0.7rem] right-[1.7rem] sm:w-8 sm:h-8 w-6 h-6 text-white"/>
      </div>
    </div>
  );
};

export default MobileNavbar;
