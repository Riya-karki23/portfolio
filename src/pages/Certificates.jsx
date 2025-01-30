import React from 'react';
import Details from '../components/Details';
import Header from '../components/Header';

function Certificates() {
  return (
    <div className='bg-black text-white h-full w-full gap-8 md:flex justify-center md:py-16 py-4 pb-20'>
      <Details />
      <div className="bg-[#1e1e1f] md:w-[60%] rounded-4xl">
        <Header name='Certificates' />
        
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-7 md:mt-24 mt-16">
          <a
            href='/assets/certificates/internship-letter.jpg' 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2b2b2c] p-4 mx-4 rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transition-transform"
          >
            <img 
              src='/assets/certificates/internship-letter.jpg' 
              alt='Internship Certificate' 
              className="rounded-md w-full h-56 object-cover"
            />
            <p className="text-center mt-2 text-lg font-semibold">Internship Certificate</p>
          </a>

          <a
            href='/assets/certificates/project-certificate.png' 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2b2b2c] mx-4  p-4 rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transition-transform"
          >
            <img 
              src='/assets/certificates/project-certificate.png' 
              alt='Project Certificate' 
              className="rounded-md w-full h-56 object-cover"
            />
            <p className="text-center mt-2 text-lg font-semibold">Project Certificate</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
