/* eslint-disable prettier/prettier */
import React from 'react';

import Image from 'next/image';

const PassChangedPop = () => {
  return (
    // <section className=" h-full md:hidden min-w-screen">
    //   <div className="absolute w-full h-96 bg-[#000]"></div>
    //   <div className="absolute mt-[270px]  w-full h-full bg-gray-100  rounded-t-[35px] ">
    //     <div className="flex flex-col justify-center items-center">
    //       <Image
    //         width={200}
    //         height={200}
    //         src="/images/clock.svg"
    //         alt="clock image"
    //       />
    //       <div className="flex flex-col justify-center items-center my-[2rem]">
    //         <h1 className="text-[1.8em] font-medium text-[#3D6ED6]">
    //           Password Changed
    //         </h1>
    //         <p className=" w-[70%] text-center text-[#3D6ED6]">
    //           Congratulation!! You’ve successfully changed your password.
    //         </p>
    //         <button className="mt-[2rem] mb-3 w-[40%] h-[3rem]  text-white  bg-[#406CDA] rounded-[6px]">
    //           Back to Login
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section>
      {/* mobile responsive part  */}

      <div className="w-full h-[100vh]  bg-white md:hidden ">
        <div className=" flex relative flex-col h-[100vh] bg-gray-100 ">
          {/* sign up input field */}

          <div className="absolute bottom-0   w-full bg-white   rounded-t-[35px] ">
            <div className="flex flex-col justify-center items-center mt-[5rem] mb-[6rem]">
              <Image
                width={200}
                height={200}
                src="/images/clock.svg"
                alt="clock-img"
              />
              <div className="flex flex-col justify-center items-center my-[2rem]">
                <h1 className="text-[1.8em] font-bold text-[#3D6ED6]">
                  Password Changed
                </h1>
                <p className=" mt-[.6rem] w-[70%] text-[1em] text-center  text-[#3D6ED6]">
                  Congratulation!! You’ve successfully changed your password.
                </p>

                <button className="mt-[2rem] mb-3 w-[40%] h-[4rem]  text-white  bg-[#406CDA] rounded-[8px]">
                  Back to Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassChangedPop;
