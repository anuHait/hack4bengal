import React, { useState } from "react";
// import DropDown from "../components/DropDown"
import Doctor from "../assets/Doctors-bro.png";
import Navbar from "../components/Navbar";
import options from "../components/options.json";
import Select from "react-select";
import axios from "axios";

const User = () => {
  const [sym1, setSym1] = useState("");
  const [sym2, setSym2] = useState("");
  const [sym3, setSym3] = useState("");
  const [sym4, setSym4] = useState("");
  const [sym5, setSym5] = useState("");
  const [dis,setDis]=useState("");
  const handleSubmit = (e) => {
    try {
      //e.preventDefault();

      const replacedSym1 = replacespace(sym1.label);
      const replacedSym2 = replacespace(sym2.label);
      const replacedSym3 = replacespace(sym3.label);
      const replacedSym4 = replacespace(sym4.label);
      const replacedSym5 = replacespace(sym5.label);
      console.log(replacedSym1);
      console.log(replacedSym2);
      console.log(replacedSym3);
      console.log(replacedSym4);
      console.log(replacedSym5);
      const url = `http://localhost:8080/predict/${replacedSym1}/${replacedSym2}/${replacedSym3}/${replacedSym4}/${replacedSym5}`;

      axios
        .get(url)
        .then(function (response) {
          // Handle success
          console.log(response.data);
          setDis(response.data);
        })
        .catch(function (error) {
          // Handle error
          console.log(error);
        });
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const replacespace = (str) => {
    if (typeof str === "string") {
      return str.replace(/ /g, "_");
    }
    return str;
  };

  return (
    <>
      <Navbar />
      <div className=" w-[90%] m-auto mt-6">
        <h1 className="font-bold text-xl lg:text-4xl mb-6 ml-2">Take your test.</h1>
        <h2 className=" text-white w-max py-2 px-3 rounded-3xl text-sm font-regular font-poppins bg-primary">
          Enter your symptoms
        </h2>

        <div className="flex flex-row gap-16 justify-between items-center  ">
          <div className="flex flex-col gap-3">
            <Select
              value={sym1}
              onChange={(selected) => {
                setSym1(selected);
                //console.log(selected.label);
              }}
              options={options}
              isSearchable={true}
              placeholder="Select a symptom"
              className="w-64 h-12 rounded-xl py-3 px-2 mb-4"
            />
            <Select
              value={sym2}
              onChange={(selected) => setSym2(selected)}
              options={options}
              isSearchable={true}
              placeholder="Select a symptom"
              className="w-64 h-12 rounded-xl py-3 px-2 mb-4"
            />
            <Select
              value={sym3}
              onChange={(selected) => setSym3(selected)}
              options={options}
              isSearchable={true}
              placeholder="Select a symptom"
              className="w-64 h-12 rounded-xl py-3 px-2 mb-4"
            />
            <Select
              value={sym4}
              onChange={(selected) => setSym4(selected)}
              options={options}
              isSearchable={true}
              placeholder="Select a symptom"
              className="w-64 h-12 rounded-xl py-3 px-2 mb-4"
            />
            <Select
              value={sym5}
              onChange={(selected) => setSym5(selected)}
              options={options}
              isSearchable={true}
              placeholder="Select a symptom"
              className="w-64 h-12 rounded-xl py-3 px-2 mb-4"
            />
            {dis ?(<h1 className="text-lg font-semibold font-poppins">You may have : {dis}</h1>):(<button
              type="button"
              onClick={handleSubmit}
              className="py-3 mx-2 bg-primary font-poppins text-white font-regular text-sm lg:text-[1.4rem] rounded-lg hover:bg-[#1A31CC] transition duration-250"
            >
              Know More
            </button>)}
          </div>
          <img src={Doctor} alt="doctor" className="w-[34%] mr-40 " />
        </div>
      </div>
    </>
  );
};

export default User;
