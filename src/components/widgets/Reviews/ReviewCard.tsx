import Image from "next/image";
import React from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";

interface Props {
  type: {
    id: number;
    name: string;
    profession: string;
    userImage: string;
    review: string;
  };
}

const ReviewCard = ({ type }: Props) => {
  return (
    <div className="bg-white rounded-lg m-3 p-6 relative">
      <FaQuoteRight className="w-8 h-8 text-red-600 opacity-20 absolute top-4 right-4" />
      <div className="mt-6 flex items-center">
        <FaStar className="w-4 h-4 text-yellow-600" />
        <FaStar className="w-4 h-4 text-yellow-600" />
        <FaStar className="w-4 h-4 text-yellow-600" />
        <FaStar className="w-4 h-4 text-yellow-600" />
        <FaStar className="w-4 h-4 text-yellow-600" />
      </div>

      <p className="mt-6 text-base text-gray-600 font-medium">{type.review}</p>
      <div className="w-full h-[1.2px] bg-gray-600 opacity-10 mt-6 mb-6"></div>
      <div className="flex items-center gap-x-4">
        <Image
          src={type.userImage}
          alt={type.name}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <h1 className="font-bol text-gray-800">{type.name}</h1>
          <p className="text-sm text-gray-500">{type.profession}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
