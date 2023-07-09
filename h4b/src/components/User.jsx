import React,{useState} from 'react'
// import DropDown from "../components/DropDown"
import Doctor from "../assets/Doctors-bro.png"
import Navbar from "../components/Navbar";
import options from "../components/options.json"
import Select from 'react-select';
import axios from 'axios';

const User = () => {
    const [sym1,setSym1]=useState(null);
    const [sym2,setSym2]=useState(null);
    const [sym3,setSym3]=useState(null);
    const [sym4,setSym4]=useState(null);
    const [sym5,setSym5]=useState(null);

    const handleSubmit=(e)=>{
      try{
        e.preventDefault()
      sym1= replacespace(sym1)
      sym2= replacespace(sym2)
      sym3= replacespace(sym3)
      sym4= replacespace(sym4)
      sym5= replacespace(sym5)
      const response = axios.get(`http://localhost:5000/${sym1}/${sym2}/${sym3}/${sym4}/${sym5}}`)
      console.log(response)
      }catch(err){
        alert("Enter all the symptoms")
      }
    }

    const replacespace = (str) => {
      return str.replace(" ","_")
    }

    return(
        <>
        <Navbar/>
        <div className=' w-[90%] m-auto mt-6'>
            <h1 className='font-bold text-xl lg:text-4xl mb-4'>Take your test.</h1>
            <div className='w-full h-[1px] bg-gray-800 mb-6'></div>
            <h2 className=' text-white w-max py-2 px-3 rounded-lg text-md font-semibold font-poppins bg-primary'>Enter your symptoms</h2>
            
            <div className='flex flex-row gap-16 justify-between items-center  '>
            <div className='flex flex-col gap-3'>

            <Select
        value={sym1}
        onChange={(selected) => setSym1(selected)}
        options={options}
        isSearchable={true}
        placeholder="Select a symptom"
        className='w-64 h-12 rounded-xl py-3 px-2 mb-4'
      />
      <Select
        value={sym2}
        onChange={(selected) => setSym2(selected)}
        options={options}
        isSearchable={true}
        placeholder="Select a symptom"
        className='w-64 h-12 rounded-xl py-3 px-2 mb-4'
      /><Select
      value={sym3}
      onChange={(selected) => setSym3(selected)}
      options={options}
      isSearchable={true}
      placeholder="Select a symptom"
      className='w-64 h-12 rounded-xl py-3 px-2 mb-4'
    /><Select
    value={sym4}
    onChange={(selected) => setSym4(selected)}
    options={options}
    isSearchable={true}
    placeholder="Select a symptom"
    className='w-64 h-12 rounded-xl py-3 px-2 mb-4'
  /><Select
  value={sym5}
  onChange={(selected) => setSym5(selected)}
  options={options}
  isSearchable={true}
  placeholder="Select a symptom"
  className='w-64 h-12 rounded-xl py-3 px-2 mb-4'
/>
<button type="button" onClick={(e)=>handleSubmit()}>Click Me!</button>
            </div>
            <img src={Doctor} alt="doctor" className='w-[34%] mr-40 ' />

            </div>
            
        </div>
        </>
    )
}

export default User