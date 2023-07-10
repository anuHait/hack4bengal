import React from 'react'
import about from '../assets/about1.png'
const Aboutus = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-10 items-center justify-start mt-40' id="aboutus">
    {/*For image  */}
      <div className=' ml-5 mb-16'>
      <img src={about} alt='aboutus' className=' h-full rounded-xl'/>
      </div>
      {/*For content  */}
      <div className=' mb-16'>
      <h1 className='font-bold text-xl lg:text-4xl mb-4'>About Medic.</h1>
      <div className='w-full h-[1px] bg-gray-800 mb-7'></div>
      <div className='grid grid-row lg:grid-cols-3 gap-3 mb-9 '>
      <div className='flex flex-col justify-center items-center'>
      <h3 className='bg-primary text-white px-2.5 py-1.5 text-center rounded-2xl mr-40 mb-3'>What's medic?</h3>
      <p className='font-semibold w-[70%]'>It's an application that incorporates machine learning techniques to predict diseases using symptom data and incorporates trained models from hospitals. This approach of leveraging hospital datasets can enhance the accuracy and effectiveness of the machine learning model.</p>
      </div>
      <div className='flex flex-col justify-center items-center'>
      <h3 className='bg-primary text-white px-2.5 py-1.5 text-center rounded-2xl mr-48 mb-3'>Our Goals</h3>
      <p className='font-semibold w-[70%]'>1. Disease Prediction <br /> 2. Machine Learning Model Enhancement <br /> 3. Collaboration with Hospitals <br /> 4. Improved Disease Diagnosis <br /> 5. A reward-based system for the hospitals</p>
      </div>
      <div className='flex flex-col justify-center items-center'>
      <h3 className='bg-primary text-white px-2.5 py-1.5 text-center rounded-2xl mr-40 mb-3'>What's medic?</h3>
      <p className='font-semibold w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta maiores officiis sequi accusantium tempora vel, architecto laudantium, in cumque non atque. Id tempora, quia velit repellendus ducimus pariatur sequi.</p>
      </div>
      </div>
      <h1 className='font-bold text-xl lg:text-4xl mb-4'>Contact Us.</h1>
      <div className='w-full h-[1px] bg-gray-800 mb-7'></div>
      <div className='grid grid-row lg:grid-cols-3 gap-3 '>
      <div className='flex flex-col justify-center items-center'>
      <p className='font-bold font-poppins text-lg text-primary w-[70%] '>Email Support: <span className=' text-lg text-black font-poppins font-medium'>medicsupport@gmail.com</span></p> 
      </div>
      <div className='font-bold font-poppins text-primary w-[70%] text-lg'>Number: <br /><span className=' text-lg text-black font-poppins font-medium'>+91 912XXXXXXX</span></div>
      <div className=''></div>
      </div>
      </div>
    </div>
  )
}

export default Aboutus
