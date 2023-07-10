import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { BsFillCloudArrowUpFill } from 'react-icons/bs';
import logo from "../assets/logo.png"

const Aggregate = () => {
  const [files,setFiles] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    // Perform authentication logic here
    if (username === 'admin' && password === '123456') {
      setIsLoggedIn(true);
      setIsOpen(false);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handlChange = (e) => {
    setFiles(e.target.files);
  }
  const handleUpload =()=>{
    console.log(files);
  }
  return (
    <div>
    <div className="flex flex-row justify-between items-center bg-cover bg-no-repeat bg-center h-24 mt-[0.5%] ml-[0.5%] overflow-hidden rounded-t-lg bg-gradient-to-b from-purple-300">
    <Link to='/' className='flex justify-center items-center gap-1'>
      <img src={logo} alt="logo" className='w-auto p-5 pr-0 h-20'/>
      <h1 className='font-bold text-2xl font-poppins'>EDIC.<span className='text-primary'>AI</span></h1>
    </Link>
    <div className='flex flex-row gap-4 mr-4 lg:mr-10'>
      <Link to='/'>
        <p className='text-lg text-gray-700 hover:text-black lg:text-lg font-poppins'>Services</p>
      </Link>
      <h2 className='text-xl'>/</h2>
      <Link to='/'>
        <p className='text-lg text-gray-700 hover:text-black lg:text-lg font-poppins'>About & Contact</p>
      </Link>
    </div>
  </div>
  <div className='flex flex-col gap-4 justify-center items-center m-10 '>

  <h1 className='text-center font-bold mb-10 font-poppins text-4xl'>Select models for Aggregration. </h1>
<div className='flex flex-col mb-4 justify-center items-center bg-indigo-300 rounded-lg lg:w-[28rem] w-[21rem] h-[12rem] lg:h-[16rem] text-white'>
  <h1 className='text-xl font-semibold lg:text-2xl mb-6 mt-2 font-poppins'>Upload required files</h1>
  <div className='border-dashed border-white p-7 border-2 rounded-md mb-4'>
    <label htmlFor="file-upload" id="upload-label" className={`flex justify-center items-center flex-col cursor-pointer `}>
      <BsFillCloudArrowUpFill className="font-bold text-4xl text-white" />
      <p>{` ${files.length} files selected`}</p>
    </label>
    <input type='file' multiple onChange={handlChange} className='hidden' id="file-upload"></input>
  </div>
</div>
<a href='https://storage.googleapis.com/medic-ai-bucket/aggregated_model.pkl'>
<button onClick={handleUpload} className='p-3 bg-primary font-poppins text-white font-regular text-lg lg:text-[1.2rem] rounded-lg hover:bg-[#1A31CC] transition duration-250'>Aggregate</button>
</a>
</div>
    {isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-gradient-to-b from-purple-300 to-white p-8 lg:p-10 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="username" className="block mb-1 font-medium">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full p-2 border border-gray-300 rounded"
                value={username}
                placeholder='username'
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-1 font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border border-gray-300 rounded"
                value={password}
                placeholder='********'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-white py-2 px-4 rounded hover:bg-indigo-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )}
</div>

    
  )
}

export default Aggregate
