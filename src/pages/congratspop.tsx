/* eslint-disable prettier/prettier */
import React from 'react';

import Image from 'next/image';

const CongratsPop = () => {
  return (
  
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
                  Congratulation!!
                </h1>
                <p className=" mt-[1.8rem] text-[1em] text-center  text-[#3D6ED6]">
                  Successfully Create Your Account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CongratsPop;
