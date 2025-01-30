import React from "react";
import Details from "../components/Details";
import Header from "../components/Header";
import Card from "../components/Card";

function Projects() {
  return (
    <div className="bg-black text-white h-full w-full gap-8 md:flex justify-center md:py-16 py-4 px-4 pb-20">
      <Details />
      {/* ------------------------------------------------------------------------------------------------ */}
      <div className="bg-[#1e1e1f] md:w-[60%] rounded-4xl ">
        <Header name="Projects" />


{/* -----------------------------------------------------------------------------------------------project cards */}
        <div className="">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Projects;
