import React from "react";
import i1 from "../assets/i1.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";
import i4 from "../assets/i4.jpg";
import i5 from "../assets/i5.jpeg";
import i6 from "../assets/i6.jpg";
function Gallary() {
  return (
    <>
      <div className="px-5 py-14 mx-auto flex flex-wrap bg-neutral-400">
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2 hover:translate-y-[-25px] transition duration-400">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block "
                src={i1}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2 hover:translate-y-[-25px] transition duration-400">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={i2}
              />
            </div>
            <div className="md:p-2 p-1 w-full hover:translate-y-[25px] transition duration-400">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={i3}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2 ">
            <div className="md:p-2 p-1 w-full hover:translate-y-[-25px] transition duration-400">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={i4}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2 hover:translate-y-[25px] transition duration-400">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={i5}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2 hover:translate-y-[25px] transition duration-400">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={i6}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallary;
