import React from "react";
import tick from "../assets/tickk.png";
const Services = () => {
  return (
    <div className=" mt-10 " id="service">
      <h1 className="font-bold text-center text-2xl lg:text-4xl mb-4">
        Services.
      </h1>
      <div className="w-[60%] h-[1px] mx-auto bg-gray-800 mb-16"></div>
      <div className="flex flex-row gap-12 w-max mb-12 mx-auto lg:grid-cols-3 ">
        <div className=" flex flex-row w-64 h-48 border-2 border-black bg-white rounded-2xl">
          <img src={tick} alt="tick" className=" w-6 h-6 " />
        </div>
        <div className=" w-64 h-48 border-2 border-black bg-white rounded-2xl"></div>
        <div className=" w-64 h-48 border-2 border-black bg-white rounded-2xl"></div>
      </div>
      <div className="flex flex-row gap-12 w-max mx-auto lg:grid-cols-3 ">
        <div className=" w-64 h-48 border-2 border-black bg-white rounded-2xl"></div>
      </div>
    </div>
  );
};

export default Services;
