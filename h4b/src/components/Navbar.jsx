import React from 'react'
import grad from "../assets/grad.png"
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-cover bg-no-repeat bg-center h-24 mt-[0.5%] ml-[0.5%] overflow-hidden rounded-t-lg bg-gradient-to-b from-purple-300">     <Link to='/' className='flex justify-center items-center gap-1'>
      <img src={logo} alt="logo" className='w-auto p-5 pr-0 h-20'/>
      <h1 className='font-bold text-2xl font-poppins'>EDIC.<span className='text-primary'>AI</span></h1>
    </Link>
      <div className=' flex flex-row gap-1  lg:gap-4 mr-5 lg:mr-10'>
      <HashLink to="#service">
      <p className=' text-lg text-gray-700 hover:text-black lg:text-lg font-poppins'>Services</p>
      </HashLink>
        <h2 className=' text-lg lg:text-xl'>/</h2>
        <HashLink to="#aboutus">
        <a href="/" className=' text-lg text-gray-700 hover:text-black lg:text-lg font-poppins'>About & Contact</a>
        </HashLink>
      </div>
      </div>  
  )
}

export default Navbar
