import React from 'react';

const Nav = () => {
  return (
    <nav className=" mx-auto w-[90%]  h-[3rem] ">
      <ul className="flex justify-center items-center ">
        <li className="mx-[.5rem]   mt-[5px] font-sans text-[.8em] tracking-wide text-white 2xl:text-[1.5em]">
          Home{' '}
        </li>
        <li className="mx-[.5rem]  mt-[5px] font-sans text-[.8em] tracking-wide text-white 2xl:text-[1.5em]">
          Coupon
        </li>
        <li className="mx-[.5rem]  mt-[5px] font-sans text-[.8em] tracking-wide text-white 2xl:text-[1.5em]">
          Feature Service
        </li>
        <li className="mx-[.5rem]  mt-[5px] font-sans text-[.8em] tracking-wide text-white 2xl:text-[1.5em]">
          Consultations
        </li>
        <li className="mx-[.5rem]  mt-[5px] font-sans text-[.8em] tracking-wide text-white 2xl:text-[1.5em]">
          Packages
        </li>
        <li className="mx-[.5rem]  mt-[5px] font-sans text-[.8em] tracking-wide text-white 2xl:text-[1.5em]">
          Best Deals
        </li>
        <li className="mx-[.5rem]  mt-[5px] font-sans text-[.8em] tracking-wide text-white 2xl:text-[1.5em]">
          Self checkups
        </li>
        <li className="mx-[.5rem]  mt-[5px] font-sans text-[.8em] tracking-wide text-white 2xl:text-[1.5em]">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
