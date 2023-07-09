import React from 'react'
import {Link} from 'react-router-dom'
import {FaSyringe} from 'react-icons/fa'
import {PiWheelchairBold} from 'react-icons/pi'
import hero from '../assets/hero-img.png'
const Landing = () => {
  return (
    <>
    <div className='flex flex-col-reverse lg:flex-row gap-5 justify-center items-center ml-10'>
      <div className='flex flex-col gap-3 justify-center items-center m-7'>
      <h1 className='text-2xl lg:text-4xl text-center font-bold mb-8 '>Get conveneince for your health facilties.</h1>
      <p className='text-lg lg:text-xl font-semibold mb-6'>Get the best health care facilities at your door step.</p>
        <div className='flex gap-4'>
        <Link to='/user'>
        <button className='p-3 bg-primary text-white font-semibold text-[0.8rem] lg:text-[1.4rem] rounded-lg hover:bg-[#1A31CC] transition duration-250'>Join as a Patient</button>
        </Link>
        <Link to='/get-app'>
        <button className='p-3 bg-primary text-white font-semibold text-[0.8rem] lg:text-[1.4rem] rounded-lg'>Join as  Organisation</button>
        </Link>
        </div>
      </div>
      <div>
      <div className='flex justify-center items-center shadow-primary mb-3 -mt-10'>
      <PiWheelchairBold className='text-5xl  bg-purple-400 rounded-lg p-2 shadow-xl mt-48 -mr-4 z-10 text-white' />
      <img src={hero} alt='landing_page' className='w-[45%] lg:w-[53%]' />
      <FaSyringe className='text-5xl  bg-white rounded-lg p-2 shadow-xl -ml-3 text-purple-400' />
      </div>
      </div>
    </div>
    </>
  )
}

export default Landing
