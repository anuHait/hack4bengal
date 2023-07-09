import React from "react";
import { InfoCircle } from "iconsax-react";
import { ArrowDown } from "iconsax-react";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import grad from "../assets/grad.png";
import * as fcl from "@onflow/fcl";
import * as t from "@onflow/types";
import { Web3Storage } from 'web3.storage'
import { config } from "@onflow/fcl";
import logo1 from "../assets/logo1.png";
import { useState, useEffect } from "react";
fcl.config({
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn", // Endpoint set to Testnet
  "accessNode.api": "https://access-testnet.onflow.org", // Endpoint set to Testnet
});
config({
  "app.detail.icon": logo1,
  "app.detail.title": "MEDIC.AI"
})
const Hospital = () => {
  const [user, setUser] = useState("");
  const [files, setFiles] = useState(null);
  var cid;
  useEffect(() => {
    fcl.currentUser().subscribe((user) => {
      setUser(user?.addr);
    });
  }, []);
 const atoken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQ0YTc2NkQxNDc5M0VEQmY3NEFhNzQxMTI4Mzk3QUI0QjJiRGVBMmEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODg4OTk2MTE3MTQsIm5hbWUiOiJhbnVzbWl0YSJ9.XlnnZQnVMqpViE-nd1yih8K00f-OlC3eULH7WOR0bUw"
  function getAccessToken () {
    return atoken
  }
  
  function makeStorageClient () {
    return new Web3Storage({ token: getAccessToken() })
  }
  
  const handleFileChange = (e) => {
    setFiles(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!files) {
      console.error("No file selected");
      return;
    }
    console.log("file", files);

    try {
      const client = makeStorageClient();
      cid = await client.put([files]);
      console.log("stored file with cid:", cid);
    } catch (error) {
      console.error("Error storing file:", error);
    }
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
        <h1 className="font-semibold text-xl flex lg:hidden mb-4">
          Head over to your PC
        </h1>
        <div className="flex flex-row gap-6 lg:gap-16 justify-between items-center">
          <h1 className="font-bold text-3xl lg:text-5xl mb-4">
            Get your own Model
          </h1>
          {/* Connect wallet */}
          <div>
            <button
              onClick={() => fcl.authenticate()}
              className="p-3 bg-primary text-white font-semibold text-[0.8rem] lg:text-[1.4rem] rounded-lg"
            >
              {user ? "Connected!" : "Connect wallet"}
            </button>
          </div>
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
          Upload
        </button>
        { user &&(
          <div className="font-semibold text-xl">Wallet Address: {user}</div>
        )
          }
      </div>
    </div>
  );
};

export default Hospital;
