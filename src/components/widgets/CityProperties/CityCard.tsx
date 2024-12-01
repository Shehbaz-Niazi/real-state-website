import Image from "next/image";
import React from "react";

interface Props {
  type: {
    id: number;
    image: string;
    cityName: string;
    numberOfProperties: number;
  };
}

const CityCard = ({ type }: Props) => {
  return (
    <div className="relative rounded-lg overflow-hidden m-2">
      <Image
        src={type.image}
        alt={type.cityName}
        width={700}
        height={700}
        className="rounded-lg w-full h-[450px] object-cover gap-x-4"
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute font-semibold top-4 left-4">
        <h1 className="text-lg font-semibold text-white">{type.cityName}</h1>
        <p className="text-gray-200">{type.numberOfProperties} Properties</p>
      </div>
    </div>
  );
};

export default CityCard;
