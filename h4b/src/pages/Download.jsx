import React from 'react'
import { Link } from 'react-router-dom'
import grad from "../assets/grad.png";
import hero from "../assets/hero-img.png"
import {ImDownload} from 'react-icons/im'
const download = () => {
  return (
    <div>
    <div className="flex flex-row justify-between items-center bg-cover bg-no-repeat bg-center w-[99%] mt-[0.5%] ml-[0.5%] overflow-hidden  rounded-t-lg " style={{ backgroundImage: `url(${grad})` }}>
    <Link to='/'>
      <h1 className='font-khand font-bold text-black text-4xl m-8'>MEDIC.<span className='text-primary'>AI</span></h1>
    </Link>
    <div className='flex flex-row gap-1  lg:gap-4 mr-5 lg:mr-10'>
      <Link to='/hospital'>
        <p className='text-lg lg:text-xl'>Train Your Models</p>
      </Link>
      <h2 className=' text-lg lg:text-xl'>/</h2>
      <Link to='/aggregate'>
        <p className='text-lg lg:text-xl'>Aggregate</p>
      </Link>
    </div>
  </div>    
  <div className=' m-10 lg:m-20 flex-col justify-center items-center'>
  <h1 className='font-bold text-2xl lg:text-5xl'>Get MEDIC.AI for Desktop</h1>

  <div className='flex flex-col-reverse lg:flex-row gap-16 m-10'>
    <ul className='flex flex-col gap-3 lg:mr-10 list-decimal text-xl'>
    <li>To start training your model,click below to download our application</li>
    <li> After downloading it start the application by <span className='font-semibold'>Run as an administrator</span></li>
    <button className='p-2 flex gap-3 bg-primary justify-center items-center mb-4 text-white font-semibold text-[1rem] lg:text-[1.4rem] rounded-lg w-[14rem]'>Download <ImDownload className='text-white text-lg'/></button>
    <li>If you already have downloaded our application <Link to="/hospital" className='text-primary font-semibold'>click here</Link> to start training your model</li>
    </ul>
  <img src={hero} alt='download' className='w-56'></img>
  </div>
  
  </div>
  </div>
  )
}

export default download
