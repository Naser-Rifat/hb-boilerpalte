/* eslint-disable prettier/prettier */
import React from 'react';

import Image from 'next/image';
import { BiUser } from 'react-icons/bi';
import { BsArrowLeft } from 'react-icons/bs';
import { HiOutlineDeviceMobile } from 'react-icons/hi';
import { MdCheckBox } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { VscReferences } from 'react-icons/vsc';

const SignUp = () => {
  return (
    <section>
      {/* <div className="container mx-auto mt-20">
        <section className="grid grid-cols-12 ]">
          <div className="col-span-6 hidden lg:block">
            <div>
              <div className="w-[574.94px] h-[647.54px] border-2 mt-[115px] "></div>
            </div>
          </div>

          <div className="col-span-6 ">
            <div className=" mt-[150px] mx-auto">
              <h1 className="text-[24px]">
                {" "}
                Signup to{" "}
                <span className="font-bold text-[24px]  text-blue-800">
                  Health Bondhu
                </span>
              </h1>
              <p className="text-[14px] text-gray-400 mb-[52px]  ">
                Sign Up to healthbondu and amazing thing near around you
              </p>

              <div className=" w-[470px] 2xl:h-[725px] ">
                <form className="flex flex-col justify-center px-12	 items-center ">
                  <span>
                    <input
                      placeholder="Phone Number"
                      className=" w-[470px] h-[60px]   text-[14px] bg-white rounded-full outline-none    p-5  "
                    />
                  </span>
                  <span className=" mt-[29px]">
                    <input
                      placeholder="Full Name"
                      className="   w-[470px] h-[60px] text-[14px] bg-white outline-none   rounded-full p-5 "
                    />
                  </span>
                  <span className=" mt-[29px]">
                    <input
                      placeholder="Password"
                      className=" w-[470px]  h-[60px] text-[14px] bg-white outline-none   rounded-full p-5  "
                    />
                  </span>
                  <span className=" mt-[29px]">
                    <input
                      placeholder="Refer code (Option)"
                      className=" w-[470px] h-[60px] text-[14px] bg-white outline-none   rounded-full p-5  "
                    />
                  </span>
                  <button className=" w-[250px] h-[60px] text-[20px] bg-[#2C62D6]  rounded-full text-white  mt-[29px]  ">
                    Sign Up
                  </button>
                </form>

                <p className="text-gray-400 text-[16px] mt-[22px] mb-[25px] 2xl:w-[200px] mx-auto text-center  [font-weight: 500] ">
                  Or quick continue with
                </p>

                <div className=" text-center flex justify-center xs: mb-[22px]">
                  <div className="  flex justify-center items-center text-white  rounded-full mx-2 w-[60px] h-[60px] bg-[#3B5999] p-5 ">
                    <span className="text-[22px] [font-weight:500]">f</span>
                  </div>
                  <div className="flex justify-center items-center text-white  rounded-full mx-2 w-[60px] h-[60px] bg-[#DD4B39] p-5 ">
                    <span className="text-[22px] [font-weight:500]">G</span>
                  </div>
                </div>
                <div className=" flex    mx-auto  2xl:w-[297px]  ">
                  {" "}
                  <svg
                    width="18"
                    height="18"
                    className="mb-2  "
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 13.5H14.25V15H3.75V13.5ZM7.2 11.475L3.75 8.025L5.25 6.6L7.2 8.55L12.75 3L14.25 4.5L7.2 11.475Z"
                      fill="#3E6ED7"
                    />
                  </svg>
                  <p className="text-[12px] [font-weight:400] [line-height:16px]  text-center">
                    By signing up you accept our{" "}
                    <span className="font-bold m-0">Terms & Conditions</span>{" "}
                    and
                    <span className="font-bold m-0"> Privacy Policy</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div> */}

      {/* mobile responsive part  */}

      <div className="w-full h-[100vh]  bg-white md:hidden ">
        <div className=" flex relative flex-col h-[100vh]  ">
          <div className="absolute m-0  w-full ">
            <svg
              className=" absolute mt-[-1em] w-[100%] "
              viewBox="0 0 375 382"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="500" height="382" fill="url(#paint0_linear_7_26)" />
              <mask
                id="mask0_7_26"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="500"
                height="382"
              >
                <rect
                  width="500"
                  height="382"
                  fill="url(#paint1_linear_7_26)"
                />
              </mask>
              <g mask="url(#mask0_7_26)">
                <path
                  d="M82.6417 160.941C30.1103 160.541 -19.3317 196.189 -37.4863 214.063V326.821H412.486V126.863C387.035 114.335 349.877 99.8014 242.983 139.392C136.09 178.983 148.306 161.442 82.6417 160.941Z"
                  fill="#7199DF"
                  fillOpacity="0.3"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_7_26"
                  x1="-1.79715e-05"
                  y1="-30.4498"
                  x2="375"
                  y2="410.332"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2C62D6" />
                  <stop offset="1" stopColor="#48B0E0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_7_26"
                  x1="-1.79715e-05"
                  y1="-30.4498"
                  x2="375"
                  y2="410.332"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2C62D6" />
                  <stop offset="1" stopColor="#48B0E0" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              className="absolute mt-[4.5em] mr-20 w-[100%] opacity-70"
              viewBox="0 0 375 235"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M98.4211 94.6272C34.8941 103.179 -17.2954 148.074 -35.4492 169.453V234.607H380.927C381.267 167.586 381.742 32.4252 380.927 27.9458C379.909 22.3467 299.994 -17.8655 236.367 10.1304C172.74 38.1263 177.83 83.9378 98.4211 94.6272Z"
                fill="#3CA2DC"
                fillOpacity="0.3"
              />
            </svg>
            <svg
              width="39"
              height="39"
              className="absolute mt-[5.6rem] ml-[1.7rem]"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.4307 32.6432C37.4273 30.3979 35.9712 28.3583 34.1435 26.6382C32.3214 24.9131 30.1629 23.5377 27.7872 22.5879C27.7659 22.5779 27.7446 22.5729 27.7234 22.5628C31.0372 20.3015 33.1914 16.6181 33.1914 12.4623C33.1914 5.57789 27.2872 0 20 0C12.7128 0 6.8086 5.57789 6.8086 12.4623C6.8086 16.6181 8.96284 20.3015 12.2766 22.5678C12.2554 22.5779 12.2341 22.5829 12.2128 22.593C9.82986 23.5427 7.69157 24.9045 5.85648 26.6432C4.03048 28.3647 2.57461 30.4039 1.56927 32.6482C0.58163 34.8455 0.0489727 37.2012 0.00013301 39.5879C-0.00128669 39.6416 0.00867084 39.6949 0.0294191 39.7449C0.0501674 39.7948 0.0812866 39.8403 0.120943 39.8787C0.160599 39.9171 0.20799 39.9476 0.260324 39.9685C0.312657 39.9893 0.368874 40 0.425662 40H3.61713C3.85117 40 4.03734 39.8241 4.04266 39.608C4.14904 35.7286 5.79797 32.0955 8.71284 29.3417C11.7288 26.4925 15.7341 24.9246 20 24.9246C24.2659 24.9246 28.2712 26.4925 31.2872 29.3417C34.202 32.0955 35.851 35.7286 35.9573 39.608C35.9627 39.8291 36.1488 40 36.3829 40H39.5743C39.6311 40 39.6873 39.9893 39.7397 39.9685C39.792 39.9476 39.8394 39.9171 39.8791 39.8787C39.9187 39.8403 39.9498 39.7948 39.9706 39.7449C39.9913 39.6949 40.0013 39.6416 39.9999 39.5879C39.9467 37.1859 39.4201 34.8492 38.4307 32.6432ZM20 21.1055C17.5585 21.1055 15.2607 20.206 13.532 18.5729C11.8032 16.9397 10.8511 14.7688 10.8511 12.4623C10.8511 10.1558 11.8032 7.98492 13.532 6.35176C15.2607 4.71859 17.5585 3.8191 20 3.8191C22.4415 3.8191 24.7393 4.71859 26.468 6.35176C28.1968 7.98492 29.1489 10.1558 29.1489 12.4623C29.1489 14.7688 28.1968 16.9397 26.468 18.5729C24.7393 20.206 22.4415 21.1055 20 21.1055Z"
                fill="white"
              />
            </svg>
            <div className="absolute mt-[8.7rem] ml-[1.7rem]">
              <h1 className="  text-[1.5em] font-medium  text-white">
                Sign Up
              </h1>
              <p className="[font-weight:500]  mt-[.4rem] w-[80%]  text-[.88em] text-white  ">
                Sign Up to Healthbondu and amazing thing near around you
              </p>
            </div>

            <div className="flex absolute justify-between px-7 pt-7 w-full">
              <p className="text-white">
                <BsArrowLeft className="inline mb-[2px] bold" />{" "}
                <span className="text-[1em] font-thin"> Back</span>
              </p>
              <Image
                width={32}
                height={32}
                src="/images/hb-logo.svg"
                alt="hb-Logo"
              />
            </div>
          </div>

          {/* sign up input field */}

          <div className="absolute mt-[17.6rem] w-full  bg-white rounded-t-[35px]   xs:mt-[15.6rem] ">
            <form className="mt-[1.8em]  text-center">
              <div className="flex justify-center items-center mx-auto mb-[.7rem] w-[83%]  h-[3.4rem] bg-[#F0F1FF] rounded-full">
                <HiOutlineDeviceMobile className=" ml-[1rem]  text-base text-gray-700" />
                <input
                  placeholder="Phone Number"
                  className=" ml-[1rem]  w-[80%] text-[.9em]  bg-transparent   focus:outline-none"
                />
              </div>
              <div className="flex justify-center  items-center mx-auto  mb-[.7rem] w-[83%]   h-[3.4rem] bg-[#F0F1FF] rounded-full">
                <BiUser className=" ml-[1rem] text-base  text-gray-700" />
                <input
                  placeholder="Full Name"
                  className=" ml-[1rem]  w-[80%] text-[.9em]  bg-transparent focus:outline-none"
                />
              </div>
              <div className="flex justify-center items-center  mx-auto mb-[.7rem] w-[83%]    h-[3.4rem] bg-[#F0F1FF] rounded-full">
                <RiLockPasswordLine className=" ml-[1rem] text-base  text-gray-700 " />
                <input
                  placeholder="Password"
                  className="ml-[1rem]  w-[80%] text-[.9em] bg-transparent    focus:outline-none"
                />
              </div>
              <div className="flex justify-center items-center mx-auto mb-[.7rem] w-[83%] h-[3.4rem] bg-[#F0F1FF] rounded-full">
                <VscReferences className=" ml-[1rem] text-base  text-gray-700 " />
                <input
                  placeholder="Refer code (Optional)"
                  className="ml-[1rem]  w-[80%] text-[.9em] bg-transparent      focus:outline-none"
                />
              </div>

              <button className="mt-[.5rem] mb-3 w-[55%] h-[3.5rem] text-[1em]  font-medium text-white bg-[#406CDA]  rounded-full">
                Sign Up
              </button>
            </form>
            <div className="text-center">
              <p className="mb-3 text-[.9em] font-bold">
                Or quick continue with
              </p>
              <div className="flex justify-center items-center mb-2">
                <div className="flex justify-center items-center mx-2 w-[2.7rem] h-[2.7rem] text-[1.6em] font-bold  text-white bg-[#3B5999] rounded-full shadow-lg">
                  f
                </div>
                <div className="flex justify-center items-center mx-2 w-[2.7rem] h-[2.7rem] text-[1.6em] font-bold  text-white bg-[#DD4B39] rounded-full shadow-lg">
                  G
                </div>
              </div>
              <div className="flex justify-center items-center mx-auto mb-5 w-[85%] ">
                {/* <MdCheckBoxOutlineBlank/> */}

                <p className="">
                  <MdCheckBox className="inline my-1 mr-1 text-base text-blue-500" />
                  <span className="text-[.9em]">
                    {" "}
                    By signing up you accept our{" "}
                  </span>
                  <span className="text-[.9em] font-bold underline">
                    Terms & Conditions
                  </span>{" "}
                  <span className="text-[.9em]">and </span>
                  <span className="text-[.9em] font-bold underline">
                    Privacy Policy
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
