import React from "react";
import { InfoCircle } from "iconsax-react";
import { ArrowDown } from "iconsax-react";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import * as fcl from "@onflow/fcl";
import * as t from "@onflow/types";
import { Web3Storage } from 'web3.storage'
import { config } from "@onflow/fcl";
import logo1 from "../assets/logo1.png";
import createNFT from "../cadence/transactions/createNFT";
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
  const [url, setUrl] = useState("");
  const [isUpl,setIsUpl]=useState(false);
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
    setIsUpl(true);
    if (!files) {
      console.error("No file selected");
      return;
    }
    console.log("file", files);

    try {
      const client = makeStorageClient();
      cid = await client.put([files]);
      setUrl(`https://dweb.link/ipfs/${cid}`);
      setIsUpl(false);
      console.log("stored file with cid:", cid);

      const transactionId = await fcl.mutate({
        cadence: createNFT,
        proposer: fcl.currentUser,
        payer: fcl.currentUser,
        authorizations: [fcl.currentUser],
        args: (arg, t) => [arg(url, t.String)],
        limit: 50
      })
      console.log("Transaction submitted", transactionId)
    } catch (error) {
      console.error("Error storing file:", error);
    }
  };



  return (
    <div>
    <div className="flex flex-row justify-between items-center bg-cover bg-no-repeat bg-center h-24 mt-[0.5%] ml-[0.5%] overflow-hidden rounded-t-lg bg-gradient-to-b from-purple-300">
    <Link to='/' className='flex justify-center items-center gap-1'>
      <img src={logo} alt="logo" className='w-auto p-5 pr-0 h-20'/>
      <h1 className='font-bold text-2xl font-poppins'>EDIC.<span className='text-primary'>AI</span></h1>
    </Link>
        <div className=" flex flex-row gap-4 mr-4 lg:mr-10">
          <Link to="/">
            <p className="text-lg text-gray-700 hover:text-black lg:text-lg font-poppins">Services</p>
          </Link>
          <h2 className=" text-xl">/</h2>
          <Link to="/">
            <p className="text-lg text-gray-700 hover:text-black lg:text-lg font-poppins">About & Contact</p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center mx-10 my-2">
        <h1 className="font-semibold text-xl flex lg:hidden mb-4">
          Head over to your PC
        </h1>
        <div className="flex flex-row gap-6 lg:gap-16 justify-between items-center">
          <h1 className="font-bold text-3xl lg:text-5xl mb-10 font-poppins mt-10">
            Upload train
          </h1>
          {/* Connect wallet */}
          <div>
            <button
              onClick={() => fcl.authenticate()}
              className="p-3 bg-primary font-poppins text-white font-regular text-lg lg:text-[1.2rem] rounded-lg hover:bg-[#1A31CC] transition duration-250"
            >
              {user ? "Connected!" : "Connect wallet"}
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-indigo-300 rounded-lg lg:w-[28rem] w-[21rem] h-[12rem] lg:h-[16rem] p-4 text-white font-bold mb-2">
          <h1 className="text-xl font-semibold lg:text-2xl mb-6 mt-2 font-poppins">Upload your trained model</h1>
          <div className="border-dashed border-white p-5 border-2">
            <label
              htmlFor="file-upload"
              id="upload-label"
              className="flex justify-center items-center flex-col   cursor-pointer"
            >
              <BsFillCloudArrowUpFill className="font-bold text-4xl  text-white" />
              <p className="font-poppins">{files?'Selected':"Browse file to upload"}</p>
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
          className="p-3 bg-primary font-poppins text-white font-regular text-lg lg:text-[1.2rem] rounded-lg hover:bg-[#1A31CC] transition duration-250 mb-2"
        >
          Upload
        </button>
        { user &&(
          <div className="font-semibold text-xl font-poppins">Wallet Address: {user}</div>
        )
          }
        {isUpl && (
          <div className="font-semibold text-xl">May take a few seconds</div>
        )}
        {url && (
          <div className="m-40 lg:m-12">
          <h1 className="text-lg font-semibold font-poppins">Click here to view your NFT: <a href={url} target="_blank" className="text-blue-700">{url}</a></h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hospital;
