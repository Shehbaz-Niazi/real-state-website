import SectionHeadings from "@/components/shared/SectionHeadings";
import { properties } from "@/components/types/data";
import React from "react";
import PrpopertyCard from "./PrpopertyCard";

const Properties = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100">
      <div className="w-[80%] mx-auto">
        <SectionHeadings heading="Discover Our Properties" />
        <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-center">
          {properties.map((item,i) => {
            return <div key={item.id} data-aos="zoom-in-up" data-aos-delay={`${i * 150}`}>
                <PrpopertyCard type={item}/>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Properties;
