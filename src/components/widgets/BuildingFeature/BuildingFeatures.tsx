import SectionHeadings from "@/components/shared/SectionHeadings";
import { buildings } from "@/components/types/data";
import React from "react";
import BuildingFeatureCards from "./BuildingFeatureCards";

const BuildingFeatures = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100">
      <div className="w-[80%] mx-auto">
        <SectionHeadings heading="Explore Bilding Feature" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-14">
            {
                buildings.map((item,i)=>{
                    return(
                        <div key={item.id}  data-aos="fade-right" data-aos-delay={`${i * 150}`}>
                            <BuildingFeatureCards type={item}/>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  );
};

export default BuildingFeatures;
