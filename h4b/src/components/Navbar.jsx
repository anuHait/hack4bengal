import React from 'react'
import grad from "../assets/grad.png"
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <div className=" flex flex-row justify-between items-center bg-cover bg-no-repeat bg-center overflow-hidden  mt-[0.5%] ml-[0.5%]  rounded-t-lg  "style={{ backgroundImage: `url(${grad})` }}>
      <Link to='/' className='flex justify-center items-center gap-1'>
      <img src={logo} alt="logo" className='w-auto p-3 pr-0 h-16 '/>
      <h1 className='font-semibold text-2xl font-poppins'>EDIC.<span className='text-primary'>AI</span></h1>
      </Link>
      <div className=' flex flex-row gap-1  lg:gap-4 mr-5 lg:mr-10'>
      <HashLink to="#service">
      <p className=' text-lg lg:text-xl'>Services</p>
      </HashLink>
        <h2 className=' text-lg lg:text-xl'>/</h2>
        <HashLink to="#aboutus">
        <a href="/" className=' text-lg lg:text-xl'>About & Contact</a>
        </HashLink>
      </div>
      </div>  
  )
}

export default Navbar
