import React from 'react';

import Image from 'next/image';

const Header = () => {
  return (
    <div className="p-[.3rem] w-full">
      <div className="flex justify-between items-center w-full h-[3rem] ">
        <div>
          <Image
            width="100"
            height="50"
            src="/images/landingpage/header/hblogo.svg"
            alt="hb-logo"
          />
        </div>
        <div className="flex justify-end items-center ">
          <p className=" mr-3 w-[17rem] font-sans text-[.7rem]  tracking-wide  text-white ">
            We’ve just Launched in Borned Find out more
          </p>

          <button className="flex justify-center items-center w-[8.5rem] h-[1.9rem] text-[.75rem] text-white rounded-full border-[1px] border-white">
            <Image
              width="10"
              height="10"
              src="/images/landingpage/header/phonelogo.svg"
              alt="phone-logo"
            />{' '}
            <span className="ml-[.6rem] font-sans font-normal tracking-wide ">
              09613 - 892
            </span>
          </button>
          <button className="ml-2 w-[5.5rem]  h-[1.9rem] font-sans text-[.75em] font-medium tracking-wide bg-white rounded-full">
            Login
          </button>
        </div>
      </div>
      <hr className=" mt-[.4rem]    text-[#7296DF] " />
    </div>
  );
};

export default Header;
