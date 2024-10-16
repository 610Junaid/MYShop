import React from "react";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";

function Service() {
  return (
    <>
      <div className="flex flex-wrap justify-evenly text-center bg-[#D4D3C1] py-10 gap-4">
        <div className="flex flex-col justify-center items-center bg-[#4E161F] px-8 py-4 text-xl font-semibold rounded-xl hover:scale-110 transito duration-200">
          <AiOutlineSafetyCertificate size={30} color="#d1d5db " />
          <p className="text-gray-300">AUTHENTIC PRODUCTS</p>
        </div>

        <div className="flex flex-col justify-center items-center bg-[#4E161F] px-8 py-4 text-xl font-semibold rounded-xl hover:scale-110 transito duration-200">
          <FaShippingFast size={30} color="#d1d5db " />
          <p className="text-gray-300">FREES SHIPPING</p>
        </div>

        <div className="flex flex-col justify-center items-center bg-[#4E161F] px-8 py-4 text-xl font-semibold rounded-xl hover:scale-110 transito duration-200">
          <TbTruckReturn size={30} color="#d1d5db " />
          <p className="text-gray-300">EASY RETURNS</p>
        </div>

        <div className="flex flex-col justify-center items-center bg-[#4E161F] px-8 py-4 text-xl font-semibold rounded-xl hover:scale-110 transito duration-200">
          <RiSecurePaymentLine size={30} color="#d1d5db " />
          <p className="text-gray-300">SECURE PAYMENTS</p>
        </div>

        <div className="flex flex-col justify-center items-center bg-[#4E161F] px-8 py-4 text-xl font-semibold rounded-xl hover:scale-110 transito duration-200">
          <BiSupport size={30} color="#d1d5db " />
          <p className="text-gray-300">24/7 SUPPORT</p>
        </div>
      </div>
    </>
  );
}

export default Service;
