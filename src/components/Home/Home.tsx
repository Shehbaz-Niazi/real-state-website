'use client'
import React, { useEffect } from 'react'
import Hero from '../widgets/Hero/Hero'
import AppartmentTypes from '../widgets/AppartmentTypes/AppartmentTypes'
import Properties from '../widgets/Properties/Properties'
import CityProperties from '../widgets/CityProperties/CityProperties'
import BuildingFeatures from '../widgets/BuildingFeature/BuildingFeatures'
import Reviews from '../widgets/Reviews/Reviews'
import Blog from '../widgets/Blog/Blog'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const HomePage = () => {
  useEffect(()=>{
    const initAos = async() => {
      await import('aos')
      AOS.init({
        duration:1000,
        easing:"ease",
        once:true,
        anchorPlacement:"top-bottom"
      })
    }
    initAos()
  },[])
  return (
    <div>
        <Hero/>
        <AppartmentTypes/>
        <Properties/>
        <CityProperties/>
        <BuildingFeatures/>
        <Reviews/>
        <Blog/>
    </div>
  )
}

export default HomePage