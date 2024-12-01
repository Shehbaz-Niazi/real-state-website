"use client";
import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";

interface Props {
  type: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
}

const BuildingFeatureCards = ({ type }: Props) => {
  return (
   <Tilt className="rounded-lg shadow-md p-4 bg-white">
     <div className="w-16 h-16 mx-auto flex items-center justify-center flex-col bg-gray-100 rounded-full">
      <Image src={type.image} alt={type.title} width={40} height={40} /></div>
      <div className="p-2">
           <p className="mt-6 text-red-600 font-bold text-xl">{type.id}</p> 
           <p className=" text-gray-700 font-bold mt-2 mb-2 text-lg">{type.title}</p>
           <p className="text-sm opacity-70 text-gray-700">{type.description}</p> 
      </div>
   </Tilt>
  );
};

export default BuildingFeatureCards;
