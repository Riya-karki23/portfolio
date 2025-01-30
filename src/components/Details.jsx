import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Details() {
  return (
    <div className='pb-4 md:bg-[#19191a] md:h-fit  md:w-[20%] md:rounded-4xl md:pt-[60px] flex items-center flex-col gap-4'>
      <div className="px-3 py-2 border-2 border-[#353536]  md:border-b-2 bg-[#1e1e1f] w-[98%]  rounded-2xl md:border-b-neutral-700 md:p-4 flex md:flex-col items-center gap-5">
        <div className="bg-[#2B2B2C] md:h-44 md:w-44 h-20 w-20 rounded-3xl flex justify-center items-center">
        <img className='md:h-40 md:w-40 h-20 w-20 object-cover object-center rounded-3xl' src="assets\profile.jpg" alt='profile-pic' />
        </div>
        <div className="flex flex-col  gap-2 items-center">
        <h3 className='md:text-3xl text-lg font-semibold '>Riya karki</h3>
        <p className='bg-[#2B2B2C] text-sm md:px-6 px-2  py-1 rounded-md mb-4'>Web developer</p>
        </div>
      </div>
      <div className="hidden flex-wrap md:flex md:flex-col justify-between px-3 py-3 md:gap-5 border-b-2 border-b-neutral-700 pb-6">
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
      
    </div>
  )
}

export default Details