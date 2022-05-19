import React from 'react';

import Image from 'next/image';

const Section2 = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage:
            "url('/images/landingpage/featureservice/offerbg.png')",
          width: '100%',
          height: '15rem',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="flex relative h-[15rem] rounded-r-[20px] "
      >
        <div className="p-10 w-[90%] ">
          <p className="text-[.8em]">HealthBondhu X ray package</p>
          <h2 className="mb-[1rem] w-[22rem] font-sans text-[2.5em] font-bold leading-tight">
            25% Call Health Care Service
          </h2>
          <button className="p-2 bg-blue-500 rounded">Book Now</button>
        </div>

        {/* <Image
            src="/images/landingpage/featureservice/profile.jpg"
           
            className="object-cover "
            width="500"
            height="500"
            alt="features"
          /> */}
        <Image
          src="/images/landingpage/featureservice/offerstar.png"
          className="object-cover absolute w-full h-full "
          width="500"
          height="500"
          alt="features"
        />
      </div>
    </section>
  );
};

export default Section2;
