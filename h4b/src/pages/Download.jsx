import React from 'react'
import { Link } from 'react-router-dom'
import hero from "../assets/downloadpg.jpg"
import {ImDownload} from 'react-icons/im'
import logo from "../assets/logo.png"

const download = () => {
  return (
    <div>
    <div className="flex flex-row justify-between items-center bg-cover bg-no-repeat bg-center h-24 mt-[0.5%] ml-[0.5%] overflow-hidden rounded-t-lg bg-gradient-to-b from-purple-300">
    <Link to='/' className='flex justify-center items-center gap-1'>
      <img src={logo} alt="logo" className='w-auto p-5 pr-0 h-20'/>
      <h1 className='font-bold text-2xl font-poppins'>EDIC.<span className='text-primary'>AI</span></h1>
    </Link>
    <div className='flex flex-row gap-1 lg:gap-4 mr-5 lg:mr-10'>
      <Link to='/hospital'>
        <p className='text-lg text-gray-700 hover:text-black lg:text-lg font-poppins'>Train Your Models</p>
      </Link>
      <h2 className=' text-lg lg:text-xl'>/</h2>
      <Link to='/upload-trained-model'>
        <p className='text-lg text-gray-700 hover:text-black lg:text-lg font-poppins'>Get NFT's</p>
      </Link>
    </div>
  </div>    
  <div className='flex flex-row gap-10 m-10 lg:m-20 justify-center items-center'>
  <div>
  <h1 className='font-bold text-2xl lg:text-5xl font-poppins'>Get MEDIC.AI for Desktop</h1>
  <div className='flex flex-col-reverse lg:flex-row gap-16 m-10'>
    <ul className='flex flex-col gap-3 lg:mr-10 list-decimal text-xl'>
      <li className='font-poppins text-lg'>To start training your model, click below to download our application.</li>
      <a href="https://storage.cloud.google.com/medic-ai-bucket/mysetup.exe">
      <button className='p-2 flex gap-3 bg-primary hover:bg-[#1A31CC] transition duration-200 justify-center items-center mb-4 text-white font-semibold text-[1rem] lg:text-[1.4rem] rounded-lg w-[14rem]' >Download <ImDownload className='text-white text-lg'/></button>
      </a>
      <li className='font-poppins text-lg'> After downloading it, start the application by <span className='font-semibold'>Run as an administrator.</span></li>
      <li className='font-poppins text-lg'>If you have already downloaded our application <Link to="/hospital" className='text-primary font-semibold'>click here</Link> to start training your model.</li>
    </ul>
  </div>
  </div>
  <img src={hero} alt='download' className='w-[40%] mr-10 rounded-lg shadow-lg border-1 border-black'></img>  
  </div>  
  </div>
  )
}

export default download
