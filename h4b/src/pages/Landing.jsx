import React from 'react'
import {Link} from 'react-router-dom'
import {FaSyringe} from 'react-icons/fa'
import {PiWheelchairBold} from 'react-icons/pi'
import hero from '../assets/hero-img.png'
const Landing = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row justify-center items-center mb-24 '>
      <div className='flex flex-col gap-3 w-[80%] justify-center items-center m-7'>
      <h1 className='text-2xl lg:text-4xl w-[80%] text-center font-semibold mb-6 uppercase'>Unleashing the Power of AI to Predict and Prevent Diseases.</h1>
      <p className='text-lg lg:text-lg text-center w-[70%] font-poppins mb-6'>Harnessing the power of machine learning to provide accurate disease predictions, empowering early detection and proactive healthcare management.</p>
        <div className='flex gap-4'>
        <Link to='/user'>
        <button className='py-2 px-4 bg-primary font-poppins text-white font-regular text-md lg:text-[1.4rem] rounded-lg hover:bg-[#1A31CC] transition duration-250'>Join as a Patient</button>
        </Link>
        <Link to='/get-app'>
        <button className='py-2 px-4 bg-primary font-poppins text-white font-regular text-md lg:text-[1.4rem] rounded-lg hover:bg-[#1A31CC] transition duration-250'>Join as  Organisation</button>
        </Link>
        </div>
      </div>
      <div>
      <div className='flex justify-center items-center shadow-primary '>
      <PiWheelchairBold className='text-5xl bg-purple-400 rounded-lg p-2 shadow-xl mt-48 z-10 text-white' />
      <img src={hero} alt='landing_page' className=' h-full lg:w-[53%]' />
      <FaSyringe className='text-5xl bg-white rounded-lg p-2 shadow-xl text-purple-400' />
      </div>
      </div>
    </div>
   )
}

export default Landing
