/* eslint-disable prettier/prettier */

import React from 'react';




const RutineService = () => {
  return (
    <section>
      <div  className="p-0  m-0 h-[100vh] md:hidden min-w-screen">
        <div className="flex justify-between px-[3rem] pt-[2rem] pb-[1em]">
          <button className="  text-gray-500">বাংলা</button>
          <button className="  text-gray-500">skip</button>
        </div>
        <div style={{backgroundImage:"url('/images/rutineservice/rutineservice.svg')"}} className="absolute mt-[2rem]  w-full h-[100vh] bg-white bg-no-repeat bg-cover xs:h-[35rem]">
        
        </div>
        
        <div className="absolute mt-[25rem] ml-[2.7rem] xs:mt-[19rem] xs:ml-[2rem]">
          <h4  className="text-[#A6A6A6]">Health Bondhu</h4>
        <hr className="[height:.17rem] w-[60%] bg-[#C4D9EF]"/>
          <h1 className="[font-weight:900]  w-[75%] text-[22px]">On Demand & Rutine Service</h1>
          <p className="[font-weight:500]  mt-[.8rem] w-[75%] text-[.9rem] ">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the in</p>
        </div>
   
        <div  className="flex absolute justify-center items-center mt-[38rem] mb-[2rem] w-full xs:mt-[32rem] "> 
          <button className="mx-1 w-[40%] h-[4rem] text-base font-medium text-white bg-[#2C62D6]	 rounded-full xs:h-[3rem] xs:text-sm">Login</button>
          <button className="mx-1 w-[40%] h-[4rem] text-base font-medium text-white bg-[#53ACDD]	 rounded-full xs:h-[3rem] xs:text-sm">Registration</button>
        </div>
       
      </div>
    </section>
  );
};

export default RutineService;
