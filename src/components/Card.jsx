import React from 'react'
import data from '../utils/ProjectData'
import { Link } from 'react-router-dom'

function Card() {
  return (
    <div className="md:p-10 p-4 flex gap-10 flex-wrap">
   
  
{data.map((elem,idx)=>(
    <div className="md:max-w-sm bg-[#2b2b2c] w rounded-lg shadow-sm shadow-gray-400  ">
    <div classNameName='flex justify-center '>
        <img className="rounded-t-lg md:h-56 w-full" src={elem.image} alt="project-image" />
    </div>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{elem.name}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{elem.description}</p>
        <div className="flex justify-between ">
        <Link to={elem.link} className="inline-flex  items-center px-1 md:px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View Project
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
        <Link to={elem.code} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-400 rounded-lg hover:bg-red-200 focus:ring-4 focus:outline-none ">
            View code
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
        </div>
    </div>
</div>
))
}
  
</ div>
  )
}

export default Card