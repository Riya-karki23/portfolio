import React from 'react'
import { Link } from 'react-router-dom'

function Header({name}) {
  return (
    <div className=" md:flex justify-between pl-8  ">
    <h1 className='text-3xl font-semibold pt-9 '>{name}<span className='h-2 block w-16 bg-yellow-500 rounded-3xl mt-5'></span></h1>
    <div className=" hidden md:block  bg-[rgba(48,48,50,0.9)] rounded-tl-2xl rounded-tr-2xl md:rounded-tl-none md:bg-[#2B2B2C]   md:px-16 md:rounded-bl-3xl h-16 md:rounded-tr-3xl">
      <ul className=' flex   justify-center md:gap-16 gap-9 md:text-lg text-sm md:font-semibold py-4 px-8 '>
        <Link to="/"><li>About</li></Link>
        <Link to="/projects"><li>Projects</li></Link>
        <Link to="/resume"><li>Resume</li></Link>
        <Link to="/certificates"><li> Certificates</li></Link>
      </ul>
    </div>
    <div className="md:hidden bottom-0 left-0 fixed w-full  bg-[rgba(48,48,50,0.9)] rounded-tl-2xl rounded-tr-2xl md:rounded-tl-none md:bg-[#2B2B2C]   md:px-16 md:rounded-bl-3xl h-14 md:rounded-tr-3xl">
      <ul className='flex justify-center md:gap-16 gap-9 md:text-lg text-sm md:font-semibold py-4 px-8 '>
        <Link to="/"><li>About</li></Link>
        <Link to="/projects"><li>Projects</li></Link>
        <Link to="/resume"><li>Resume</li></Link>
        <Link to="/certificates"><li> Certificates</li></Link>
      </ul>
    </div>
  
</div>
  )
}

export default Header