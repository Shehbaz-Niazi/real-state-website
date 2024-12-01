import SectionHeadings from "@/components/shared/SectionHeadings";
import { appartmentTypeData } from "@/components/types/data";
import React from "react";
import AppartmentTypeCard from "./AppartmentTypeCard";

const AppartmentTypes = () => (
  <div className="pt-16 pb-16">
    <div className="w-[80%] mx-auto">
      <SectionHeadings heading="Apaptment Types" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-10 mb-20 gap-8 items-center">
        {appartmentTypeData.map((type, i) => {
          return (
            <div key={type.id} data-aos="zoom-in" data-aos-delay={`${i * 150}`}>
              <AppartmentTypeCard type={type} />
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default AppartmentTypes;
