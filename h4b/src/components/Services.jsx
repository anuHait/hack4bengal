import React from 'react'
const Services = () => {
  return (
    <div className=' ' id="service">
        <h1 className='font-bold text-xl lg:text-4xl mb-4'>Services.</h1>
        <div className='w-full h-[1px] bg-gray-800 mb-12'></div>
        <div className='grid grid-row w-[55%] gap-10 lg:grid-cols-3 mb-40 '>
          <div className=" grid grid-col ml-16 w-full h-80 rounded-2xl shadow-xl justify-center items-center bg-white mt-6">
            <h1 className=" text-3xl mx-8 font-poppins font-medium mb-8">Predict disease by symptoms</h1>
            <div className=' grid grid-row'>
              <button className=' bg-transparent font-regular border ml-8 text-lg p-2 border-black rounded-lg w-[45%] hover:bg-primary hover:text-white transition duration-300'>Learn More</button>
            </div>
          </div>
          <div className=" grid grid-col ml-16 w-full h-80 rounded-2xl shadow-xl justify-center items-center bg-white mt-6">
            <h1 className=" text-3xl mx-8 font-poppins font-medium mb-8">Provide better models</h1>
            <div className=' grid grid-row'>
              <button className=' bg-transparent font-regular border ml-8 text-lg p-2 border-black rounded-lg w-[45%] hover:bg-primary hover:text-white transition duration-300'>Learn More</button>
            </div>
          </div>
          <div className=" grid grid-col ml-16 w-full h-80 rounded-2xl shadow-xl justify-center items-center bg-white mt-6">
            <h1 className=" text-3xl mx-8 font-poppins font-medium mb-8">Stores medical history</h1>
            <div className=' grid grid-row'>
              <button className=' bg-transparent font-regular border ml-8 text-lg p-2 border-black rounded-lg w-[45%] hover:bg-primary hover:text-white transition duration-300'>Learn More</button>
            </div>
          </div>
        </div>
    </div>    
  )
}

export default Services
  