import React, { useState } from 'react'
import { MdOutlineMail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Details() {

const [btn, setBtn ] = useState(false);

function toggleBtn(){
  setBtn(!btn)

}


  return (
    <div className='pb-4 md:bg-[#19191a] md:h-fit  md:w-[20%] md:rounded-4xl md:pt-[60px] flex items-center flex-col gap-4'>
      <div className=" relative px-3 py-2 md:border-0 border-2 border-[#353536] md:bg-[#19191a]   bg-[#1e1e1f] w-[98%]  rounded-2xl md:border-b-neutral-700 md:p-4 flex md:flex-col items-center gap-5">
        <div className="bg-[#2B2B2C] md:h-44 md:w-44 h-20 w-20 rounded-3xl flex justify-center items-center">
        <img className='md:h-44 md:w-44 h-20 w-20 object-cover object-top  rounded-3xl ' src="assets/profile.jpg" alt='profile-pic' />
        </div>
        <div className="flex flex-col  gap-2 items-center">
        <h3 className='md:text-3xl text-lg font-semibold '>Riya karki</h3>
        <p className='bg-[#2B2B2C] text-sm md:px-6 px-2  py-1 rounded-md mb-4'>Web developer</p>
        </div>
        <div className="absolute md:hidden top-0 right-0  text-amber-400 text-xs shadow shadow-gray-600 border-r-0 border-t-0 p-3 rounded-bl-2xl">
        <IoIosArrowDown onClick={toggleBtn}/>
        </div>
      </div>
      <div className="hidden flex-wrap md:flex md:flex-col justify-between px-3 py-3 md:gap-5 border-y-1 border-y-neutral-700 pb-6">
      <div className="flex gap-4 items-center">
      <MdOutlineMail className='text-yellow-300 h-8 md:text-xl'/>
      <div className="">
       <h4 className='text-sm text-[#a1a1a6]' >EMAIL</h4>
       <p>riyakarki2308@gmail.com</p>
      </div>
      </div>
      <div className="flex gap-4 items-center">
      <IoIosPhonePortrait  className='text-yellow-300 h-8 text-xl'/>
      <div className="">
       <h4 className='text-sm text-[#a1a1a6]' >PHONE</h4>
       <p>8394054994</p>
      </div>
      </div>
      <div className="flex gap-4 items-center">
      <MdOutlineCalendarMonth className='text-yellow-300 h-8 text-xl'/>
      <div className="">
       <h4 className='text-sm text-[#a1a1a6]' >BIRTHDAY</h4>
       <p>February 23, 2003</p>
      </div>
      </div>
      <div className="flex gap-4 items-center">
      <HiOutlineLocationMarker className='text-yellow-300 h-8 text-xl'/>
      <div className="">
       <h4 className='text-sm text-[#a1a1a6]' >LOCATION</h4>
       <p>Pantnagar,<br/>
       Uttarakhand</p>
      </div>
      </div>

      </div>

      <div className="hidden md:flex gap-6 pb-7">
  <Link to="https://www.linkedin.com/in/riya-karki-a91a69250/"><CiLinkedin className='text-gray-400 h-8 text-3xl hover:text-white cursor-pointer'/></Link>
 <Link to="https://github.com/Riya-karki23"> <FaGithub className='text-gray-400 h-8 text-2xl hover:text-white cursor-pointer'/></Link>


      </div>
      {/* {btn &&
      <div className="bg-[#3a3a3c] w-[91%] absolute top-15 grid grid-cols-2 gap-8 px-2 py-8 rounded-sm ">
        <div className="">
      <p className='font-medium text-gray-300 underline'>Email</p>
      <p>riyakarki2308@gmail.com</p>
      </div>
        <div className="pl-12">
      <p className='font-medium text-gray-300 underline'>Phone No.</p>
      <p>8394054994</p>
      </div>
      <div className="">
       <p className='font-medium text-gray-300 underline' >LOCATION</p>
       <p>Pantnagar,<br/>
       Uttarakhand</p>
      </div>
      <div className="pt-1 pl-4">
       <p className='font-medium text-gray-300 underline' >BIRTHDAY</p>
       <p>February 23, 2003</p>
      </div>
      </div>
} */}
      
    </div>
  )
}

export default Details