/* eslint-disable prettier/prettier */
import Image from 'next/image';
import { BsArrowLeft } from 'react-icons/bs';

const UpdatePass = () => {
  return (
    <section>
      <div className="w-full h-[100vh]  bg-white md:hidden ">
        <div className=" flex relative flex-col h-[100vh]  ">
          <div className="absolute m-0  w-full">
            <svg
              className=" absolute mt-[-1em] w-[100%]  "
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

            <div className="absolute mt-[6rem] ml-[1.7rem]">
              <Image
                width="40"
                height="40"
                src="/images/updatepass/updatepass.svg"
                alt=""
              />
            </div>
            <div className="absolute mt-[8.7rem] ml-[1.7rem]">
              <h1 className="  text-[1.5em] font-medium  text-white">
                Create new password
              </h1>
              <p className="[font-weight:500]  mt-[.4rem] w-[80%] text-[.88em] text-white  ">
                Create a new password and please never share it with anyone for
                safe use.
              </p>
            </div>

            <div className="flex absolute justify-between px-7 pt-7 w-full">
              <p className="text-white">
                <BsArrowLeft className="inline mb-[2px] bold" />{" "}
                <span className="text-[1em] font-thin"> Back</span>
              </p>
              <Image width={32} height={32} src="/images/hb-logo.svg" alt="" />
            </div>
          </div>

          {/* sign up input field */}

          <div className="absolute mt-[17.6rem] w-full  bg-white rounded-t-[35px]   xs:mt-[15.6rem] ">
            <form className="mt-[1.8em]  text-center">
              <div className=" flex justify-center items-center mx-auto mb-[1rem] w-[83%]  h-[3.4rem] bg-gray-100 rounded-full">
                <Image
                  width={15}
                  height={15}
                  src="/images/updatepass/changepass.svg"
                  alt="changePassImg"
                />
                <input
                  placeholder="New Password"
                  className=" ml-[1em] w-[80%] h-[95%]  bg-transparent   focus:outline-none"
                />
              </div>
              <div className="   flex justify-center items-center mx-auto mb-[1rem] w-[83%]  h-[3.4rem] bg-gray-100 rounded-full">
                <Image
                  width={15}
                  height={15}
                  src="/images/updatepass/changepass.svg"
                  alt="changePassImg"
                />
                <input
                  placeholder="Confirm new Password"
                  className=" ml-[1em] w-[80%] h-[95%]  bg-transparent   focus:outline-none"
                />
              </div>
              <button className="mt-[.5rem] mb-[1.9rem] w-[60%] h-[3.5rem] text-[1em]  font-medium text-white bg-[#406CDA]  rounded-full">
                Update Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdatePass;
