/* eslint-disable prettier/prettier */
import React from 'react';


import Image from 'next/image';

import Header from 'components/Header/Header';
import Nav from 'components/Nav/Nav';

const Banner = () => {
  return (
    <section className="relative bannerBackground ">
      <div className="relative 2xl:w-[70rem] customContainer">
      <Header />
       <Nav />
      <div className="flex w-full h-80">
        <div className="flex flex-col w-full  h-full ">
          <div className="mt-[3rem]  w-[28rem]">
            <h1 className="font-sans text-[2.4em] font-bold tracking-wide text-white leading-1	">
              Health Bondhu for all your health needs.
            </h1>
            <p className=" mt-[5px] w-[25.5rem]  font-sans text-[.8em] tracking-wide text-white opacity-50	">
              Reference site about Lorem Ipsum, giving information on its
              origins, giving information on its origins, m Ipsum, giving giving
              information on its origins, giving information on its origin
            </p>
          </div>

          <div className="flex justify-center  items-center mt-[2rem] w-[15rem]">
            <div className="w-full h-[4rem] ">
              <Image
                width="100"
                height="50"
                src="/images/landingpage/banner/booknow.svg"
                alt=""
              />
            </div>
            <div className="w-full h-[4rem] ">
              <Image
                width="100"
                height="50"
                className="p-[4.5rem]"
                src="/images/landingpage/banner/googleplay.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mt-[1.5rem] w-[37rem] h-full ">
          <Image
            width="600"
            height="600"
            src="/images/landingpage/banner/iPhone12Pro(Wooden Hands).svg"
            alt=""
          />
        </div>
      </div>
    </div>
   
    <img
        
        className="absolute bottom-0 lg:w-full"
        src="/images/landingpage/banner/layer-2.svg"
        alt=""
      />
      <img
         
        className="absolute bottom-0 lg:w-full"
        src="/images/landingpage/banner/layer-1.svg"
        alt=""
      />
    </section>
  );
};

export default Banner;
