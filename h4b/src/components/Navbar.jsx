import React from 'react'
import grad from "../assets/grad.png"
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className=" flex flex-row justify-between items-center bg-cover bg-no-repeat bg-center overflow-hidden  mt-[0.5%] ml-[0.5%]  rounded-t-lg  "style={{ backgroundImage: `url(${grad})` }}>
      <Link to='/'>
    <h1 className=' font-khand font-bold text-black text-4xl m-8'>MEDIC.<span className=' text-primary'>AI</span></h1>
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
