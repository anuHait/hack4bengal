import React from "react";
import { InfoCircle } from "iconsax-react";
import { ArrowDown } from "iconsax-react";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Hospital = () => {
  const [files, setFiles] = useState(null);
  const handleFileChange = (e) => {
    setFiles(e.target.files[0]);
    alert("Please start the server if haven't already!");

  };
  const pause = async (milliseconds) => {
    await new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  const handleSubmit = async () => {
    console.log("amar files", files.name);
    try {
      const response = await axios.get(
        `http://localhost:5000/model/${files.name}`,
        { responseType: "blob" }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "model.pkl");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.log(error);
    }

    await pause(6000);
  };
  return (
    <div>
      <div className="flex flex-row justify-between items-center bg-cover bg-no-repeat bg-center h-24 mt-[0.5%] ml-[0.5%] overflow-hidden rounded-t-lg bg-gradient-to-b from-purple-300">
        <Link to="/" className="flex justify-center items-center gap-1">
          <img src={logo} alt="logo" className="w-auto p-5 pr-0 h-20" />
          <h1 className="font-bold text-2xl font-poppins">
            EDIC.<span className="text-primary">AI</span>
          </h1>
        </Link>
        <div className=" flex flex-row gap-4 mr-4 lg:mr-10">
          <Link to="/upload-trained-model">
            <p className="text-lg text-gray-700 hover:text-black lg:text-lg font-poppins">
              Get NFT's
            </p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center m-10">
        <h1 className=" text-xl flex lg:hidden mb-4">Head over to your PC</h1>
        <div className="flex flex-row gap-6 lg:gap-16 justify-between items-center">
          <h1 className="font-bold text-3xl lg:text-5xl mb-10 font-poppins">
            Get your own Model.
          </h1>
        </div>
        <div className="flex flex-col mb-4 justify-center items-center bg-indigo-300 rounded-lg lg:w-[28rem] w-[21rem] h-[12rem] lg:h-[16rem] text-white ">
          <h1 className="text-xl font-semibold lg:text-2xl mb-6 mt-2 font-poppins">
            Upload your Dataset
          </h1>
          <div className="border-dashed border-white p-7 border-2 rounded-md mb-4">
            <label
              htmlFor="file-upload"
              id="upload-label"
              className="flex justify-center items-center flex-col   cursor-pointer"
            >
              <BsFillCloudArrowUpFill className="font-bold text-4xl  text-white" />
              <p className="font-poppins">
                {files ? "Uploaded" : "Browse file to upload"}
              </p>
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
          className="p-3 bg-primary font-poppins text-white font-regular text-lg lg:text-[1.2rem] rounded-lg hover:bg-[#1A31CC] transition duration-250"
        >
          Train Model
        </button>
      </div>
    </div>
  );
};

export default Hospital;
