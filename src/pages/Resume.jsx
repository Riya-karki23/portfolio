import React from 'react'
import Details from '../components/Details'
import Header from '../components/Header'

function Resume() {
  return (
    <div className='bg-black text-white h-full w-full gap-8 md:flex justify-center md:py-16 p-4 pb-20 '>
    <Details/>
    {/* ------------------------------------------------------------------------------------------------ */}
    <div className="bg-[#1e1e1f] md:w-[60%] rounded-4xl border-2 border-[#353536]">
    <Header name='Resume'/>
    <div className="pl-16 md:mt-14 absolute right-7 ">
      <a  className="bg-[#585858] md:px-4 md:py-2 px-2 py-1 rounded-lg" href="/assets/Resume(Riya karki).jpg " download="Resume(Riya karki).jpg">Download Resume
      </a>
      </div>
    <div className=" md:px-16 py-10 ">
      <img src="/assets/Resume(Riya karki).jpg" alt='resume'/>
    </div>
    </div>
   
    </div>
  )
}

export default Resume