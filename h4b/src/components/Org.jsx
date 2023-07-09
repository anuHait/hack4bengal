import React from "react";
import { InfoCircle } from "iconsax-react";
import { ArrowDown } from "iconsax-react";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import grad from "../assets/grad.png";
import logo1 from "../assets/logo1.png";
import { useState, useEffect } from "react";

const Hospital = () => {
  
  const [files, setFiles] = useState(null);
  const handleFileChange = (e) => {
    setFiles(e.target.files[0]);
  };
  const handleSubmit = async () => {
    if (!files) {
      console.error("No file selected");
      return;
    }
    console.log("file", files);
  };
  return (
    <div>
      <div
        className=" flex flex-row justify-between items-center bg-cover bg-no-repeat bg-center w-[99%]  mt-[0.5%] ml-[0.5%] overflow-auto rounded-t-lg  "
        style={{ backgroundImage: `url(${grad})` }}
      >
        <Link to="/">
          <h1 className=" font-khand font-bold text-black text-4xl m-6">
            MEDIC.<span className=" text-primary">AI</span>
          </h1>
        </Link>
        <div className=" flex flex-row gap-4 mr-10">
          <Link to="/">
            <p className=" text-xl">Services</p>
          </Link>
          <h2 className=" text-xl">/</h2>
          <Link to="/">
            <p className=" text-xl">About & Contact</p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center m-10">
        <h1 className=" text-xl flex lg:hidden mb-4">
          Head over to your PC
        </h1>
        <div className="flex flex-row gap-6 lg:gap-16 justify-between items-center">
          <h1 className="font-bold text-3xl lg:text-5xl mb-4">
            Get your own Model
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center bg-indigo-300 rounded-lg lg:w-[28rem] w-[21rem] h-[12rem] lg:h-[16rem] p-4 text-white font-bold">
          <h1 className="text-xl lg:text-2xl mb-6 mt-2">Upload your Dataset</h1>
          <div className="border-dashed border-white p-5 border-2">
            <label
              htmlFor="file-upload"
              id="upload-label"
              className="flex justify-center items-center flex-col   cursor-pointer"
            >
              <BsFillCloudArrowUpFill className="font-bold text-4xl  text-white" />
              <p>Browse file to upload</p>
            </label>
            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="p-2 bg-primary text-white font-semibold text-[0.8rem] lg:text-[1.4rem] rounded-lg"
        >
          Train Model
        </button>
      </div>
    </div>
  );
};

export default Hospital;
