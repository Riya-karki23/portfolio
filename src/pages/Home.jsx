import React from 'react'
import Details from '../components/Details'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

function Home() {
  return (
    <>
    <div className='  p-4  bg-black text-white h-full w-full gap-8 md:flex justify-center md:py-16 '>
      <Details/>
      {/* ------------------------------------------------------------------------------------------------ */}
      <div className="bg-[#1e1e1f] md:w-[60%] rounded-4xl border-2 border-[#353536] mb-20 ">

        {/* ------------------------------------------------------------------------------------------------------- */}
       <Header name='About'/>
        <div className=" md:px-7 px-4 text-[#b1b0b0] md:py-9 py-4 md:text-lg " >
              <p>I am a passionate MERN stack developer specializing in creating dynamic and responsive web applications using MongoDB, Express, React, and Node.js. </p>
              <p>I thrive on turning innovative ideas into functional, scalable, and user-friendly solutions. My goal is to deliver web experiences that are not only efficient but also visually appealing and engaging. I am always eager to learn and grow, constantly refining my skills to build projects that stand out in both performance and design.</p>
              </div>
        {/* ------------------------------------------------------------------------------------------------------- */}
        

        <div className="md:px-8 px-4">
        <h1 className='text-3xl font-semibold pt-9 '>Skills<span className='h-2 block w-16 bg-yellow-500 rounded-3xl mt-2'></span></h1>
        <div className=" md:flex md:gap-10 mt-4 ">
            <div className="md:w-1/2 h-40 shadow-sm shadow-gray-500 mb-6 p-7 rounded-2xl">
            <h3 className='text-xl font-semibold pb-3'>Frontend Development</h3>
            <p className='text-lg text-[#B1B1B0]'>HTML, CSS, Javascript, TailwindCSS, Bootstrap, React</p>
            
            </div>
            <div className=" md:w-1/2 h-40 shadow-sm shadow-gray-500  p-7 rounded-2xl">
            <h3 className='text-xl font-semibold pb-3'>Backend Development</h3>
            <p className='text-lg text-[#B1B1B0]'>Node.js, Express.js, Adonisjs</p>
            
            </div>
          </div>
          <div className=" md:flex md:gap-10 mt-4">
          <div className=" md:w-1/2 h-40 shadow-sm shadow-gray-500 mb-6  p-7 rounded-2xl">
          <h3 className='text-xl font-semibold pb-3'>Database Management</h3>
            <p className='text-lg text-[#B1B1B0]'>MYSQL, MongoDB, Mongoose, Postgres</p>
            
            </div>
            <div className=" md:w-1/2  h-40 shadow-sm shadow-gray-500  p-7 rounded-2xl">
            <h3 className='text-xl font-semibold pb-3'>Tools </h3>
            <p className='text-lg text-[#B1B1B0]'>Git, GitHub, Postman</p>
            
            </div>
          </div>
        <div className="md:my-9 py-7">
        <h1 className='text-3xl font-semibold pt-9 '>Education<span className='h-2 block w-16 bg-yellow-500 rounded-3xl mt-2'></span></h1>
        <div className=" md:flex gap-10 mt-7 ">
          <div className=" md:w-1/2 h-40 shadow-sm shadow-gray-500 mb-6  p-7 rounded-2xl">
          <h3 className='text-xl font-semibold pb-3'>BCA  | 2024<br/>Invertis University </h3>
            <p className='text-lg text-[#B1B1B0]'>Percentage(%) - 77.47%</p>
            
            </div>
          <div className=" md:w-1/2 h-40 shadow-sm shadow-gray-500  p-7 rounded-2xl">
          <h3 className='text-xl font-semibold pb-3'>XII (CBSE) | 2020 <br/> Himalayan Progressive School</h3>
            <p className='text-lg text-[#B1B1B0]'>Percentage(%) - 76.4%</p>
            
            </div>
           
          </div>

        </div>
        </div>


      </div>

    </div>
    </>
  )
}

export default Home