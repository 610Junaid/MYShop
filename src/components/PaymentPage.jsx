import React from "react";

const PaymentPage = () => {
  return (
    <div className="text-center text-2xl font-semibold mt-2 mb-2">
      <h2 className="text-2xl font-semibold mt-2 mb-2 ">
        You are going to pay with Razorpay
      </h2>
      <button className="bg-slate-400 px-2 py-2 rounded-xl text-red-800 hover:translate-x-2 hover:translate-y-1">
        Make Payment
      </button>
    </div>
  );
};

export default PaymentPage;
