import React from 'react';

import Image from 'next/image';

const Activity = () => {
  return (
    <section className=" relative mt-[-2.5rem]">
      <div className="flex justify-center items-center   p-3 mx-auto  w-[55rem]  bg-white rounded-lg  ">
        {/* sub div-1 */}
        <div
          style={{
            backgroundImage:
              "url('/images/landingpage/activity/activitybg.png')",
            height: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          className="flex justify-center items-center mx-2 bg-[#E3ECFF] rounded "
        >
          <Image
            width="50"
            height="50"
            src="/images/landingpage/activity/icon-1.svg"
            alt=""
          />
          <h3 className="w-[8rem] text-[.8em] text-center">Family Care</h3>
        </div>
        <div
          style={{
            backgroundImage:
              "url('/images/landingpage/activity/activitybg.png')",
            height: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          className="flex justify-center items-center mx-2 bg-[#E3ECFF] rounded "
        >
          <Image
            width="50"
            height="50"
            src="/images/landingpage/activity/icon-1.svg"
            alt=""
          />
          <h3 className="w-[8rem] text-[.8em] text-center">Family Care</h3>
        </div>
        <div
          style={{
            backgroundImage:
              "url('/images/landingpage/activity/activitybg.png')",
            height: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          className="flex justify-center items-center mx-2 bg-[#E3ECFF] rounded "
        >
          <Image
            width="50"
            height="50"
            src="/images/landingpage/activity/icon-1.svg"
            alt=""
          />
          <h3 className="w-[8rem] text-[.8em] text-center">Family Care</h3>
        </div>
        <div
          style={{
            backgroundImage:
              "url('/images/landingpage/activity/activitybg.png')",
            height: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          className="flex justify-center items-center mx-2 bg-[#E3ECFF] rounded "
        >
          <Image
            width="50"
            height="50"
            src="/images/landingpage/activity/icon-1.svg"
            alt=""
          />
          <h3 className="w-[8rem] text-[.8em] text-center">Family Care</h3>
        </div>
      </div>
    </section>
  );
};

export default Activity;
