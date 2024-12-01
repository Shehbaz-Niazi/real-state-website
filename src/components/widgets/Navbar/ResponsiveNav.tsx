'use client'
import React, { useState } from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const ResponsiveNav = () => {
  const [showNav, setshowNav] = useState(false)
  const openNavHandler = () => setshowNav(true) 
  const closeNavHandler = () => setshowNav(false) 
  return (
    <div>
      <Navbar openNav={openNavHandler}/>
      <MobileNavbar closeNav={closeNavHandler} showNav={showNav}/>
    </div>
  );
};

export default ResponsiveNav;
