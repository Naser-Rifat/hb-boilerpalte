import React from 'react';

import Image from 'next/image';

const FeatureCoupons = () => {
  return (
    <section className="py-[5rem] bg-white ">
      <div className="pb-[2rem]  mx-auto w-[55rem]">
        <div className="flex justify-between items-center pb-[2rem] w-full h-[2rem] ">
          <h1 className="text-[1.1em] font-semibold">Our Feature Service</h1>

          <button className="py-1  px-3 mx-2 font-sans text-[.7em] text-black bg-[#F2F5F7]  rounded-full">
            View All
          </button>
        </div>

        <div className="grid grid-cols-12 gap-3">
          <div className=" flex col-span-6 p-3 bg-white rounded-2xl border-2 drop-shadow-lg ">
            <div className=" ">
              <Image
                width="200"
                height="270"
                src="/images/landingpage/featurecoupon/coupon.png"
                alt=""
              />
            </div>
            <div className="ml-3 w-full">
              <Image
                width="35"
                height="45"
                src="/images/landingpage/featurecoupon/ibn-sina-logo.png"
                alt=""
              />
              <h2 className="mt-[.3rem] font-sans text-[1rem] font-semibold">
                IBN SINA
              </h2>
              <p className="mt-[.8em] w-[12rem] text-[.7em] font-bold	 tracking-normal leading-snug">
                Information on how to participate forms part of these Terms &
                Conditions.{' '}
              </p>
              <div className="flex justify-between items-center">
                <h3 className="mt-[.4em] text-[1em] font-bold">10% OFF</h3>
                <button className=" py-2 px-4 text-[.7em] text-white bg-[#2C62D6] rounded">
                  {' '}
                  Coupons
                </button>
              </div>
            </div>
          </div>
          <div className=" flex col-span-6 p-3 bg-white rounded-2xl border-2 drop-shadow-lg ">
            <div className=" ">
              <Image
                width="200"
                height="270"
                src="/images/landingpage/featurecoupon/coupon.png"
                alt=""
              />
            </div>
            <div className="ml-3 w-full">
              <Image
                width="35"
                height="45"
                src="/images/landingpage/featurecoupon/ibn-sina-logo.png"
                alt=""
              />
              <h2 className="mt-[.3rem] font-sans text-[1rem] font-semibold">
                IBN SINA
              </h2>
              <p className="mt-[.8em] w-[12rem] text-[.7em] font-bold	 tracking-normal leading-snug">
                Information on how to participate forms part of these Terms &
                Conditions.{' '}
              </p>
              <div className="flex justify-between items-center">
                <h3 className="mt-[.4em] text-[1em] font-bold">10% OFF</h3>
                <button className=" py-2 px-4 text-[.7em] text-white bg-[#2C62D6] rounded">
                  {' '}
                  Coupons
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCoupons;
