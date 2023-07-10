import React from "react";

const Downbar = () => {
  return (
    <div className="bg-primary text-white font-semibold flex gap-10 text-[1rem] lg:text-[1.4rem] p-5 rounded-xl w-full justify-center items-center mb-24">
      <ul className="list-disc gap-16 flex font-poppins">
        <li>Predict Disease</li>
        <li>Provide better models</li>
        <li>Data Privacy and Security</li>
        <li>NFT's</li>
      </ul>
    </div>
  );
};

export default Downbar;
