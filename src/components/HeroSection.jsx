import React from "react";
import banner from "../assets/Heroimage.webp";

function HeroSection() {
  return (
    <>
      <div className="relative">
        <div>
          <img src={banner} alt="" className="" />
        </div>

        <div className="absolute top-[10%] left-[2.8%] flex">
          <div>
            <h1 className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-[#4E161F]">
              Uncover Hidden Gems
            </h1>
            <p className="text-center sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl mt-1 font-semibold">
              Where Style Meets Savings
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
