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
        <div className=" flex flex-col w-64 h-48 border-2 border-black bg-white rounded-2xl">
          <img src={tick} alt="tick" className=" w-6 h-6 m-4 ml-[84%]" />
          <h1 className="font-poppins text-3xl font-medium ml-5 mt-10">
            Disease Prediction
          </h1>
        </div>
        <div className=" flex flex-col w-64 h-48 border-2 border-black bg-white rounded-2xl">
          <img src={tick} alt="tick" className=" w-6 h-6 m-4 ml-[84%]" />
          <h1 className="font-poppins text-3xl font-medium ml-5 mt-10">
            Collaboration with Hospitals
          </h1>
        </div>
        <div className=" flex flex-col w-64 h-48 border-2 border-black bg-white rounded-2xl">
          <img src={tick} alt="tick" className=" w-6 h-6 m-4 ml-[84%]" />
          <h1 className="font-poppins text-3xl font-medium ml-5 mt-10">
            Improved diagnosis
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-12 w-max mx-auto lg:grid-cols-3 ">
        <div className=" flex flex-col w-64 h-48 border-2 border-black bg-white rounded-2xl">
          <img src={tick} alt="tick" className=" w-6 h-6 m-4 ml-[84%]" />
          <h1 className="font-poppins text-3xl font-medium ml-5 mt-10">
            Reward based system
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
