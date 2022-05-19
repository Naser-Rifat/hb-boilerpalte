import React from 'react';

import Image from 'next/image';

const ServicesFeature = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url('/images/landingpage/featureservice/servicebg.png')",

        width: '100%',
        height: '24rem',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
      className=" w-full h-full"
    >
      <main className="py-9  mx-auto  w-[55rem]">
        <div className="grid grid-cols-12 gap-3">
          <div
            style={{
              backgroundImage:
                "url('/images/landingpage/featureservice/ind_service_bg.png')",
              height: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
            className=" col-span-4 py-[.6rem] pr-[1rem] pl-[1.3rem] bg-white rounded-lg"
          >
            <div className="flex mb-[.7rem] ">
              <h3 className=" [font-weight:500] w-full font-sans text-[1.4em] tracking-normal	leading-60	">
                {' '}
                Book <br /> Lab Tests
              </h3>
              <img
                // width="50"
                // height="50"
                className="mt-[-5px] w-[25%] h-[25%]"
                src="/images/landingpage/featureservice/icon.png"
                alt="icon"
              />
            </div>

            <div className="flex  justify-between items-center  ">
              <div>
                <h3 className="mb-[.5rem] w-full font-sans text-[.9em] font-semibold tracking-wide text-[#737171] 	">
                  CBC, HbA1c, TSH, & more
                </h3>
                <h3 className=" text-[.9em] font-semibold tracking-wide text-[#2C62D6] ">
                  Upto 50% off
                </h3>
              </div>
              <Image
                width="30"
                height="30"
                src="/images/landingpage/featureservice/next-icon.svg"
              />
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                "url('/images/landingpage/featureservice/ind_service_bg.png')",
              height: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
            className=" col-span-4 py-[.6rem] pr-[1rem] pl-[1.3rem] bg-white rounded-lg"
          >
            <div className="flex mb-[.7rem] ">
              <h3 className=" [font-weight:500] w-full font-sans text-[1.4em] tracking-normal	leading-60	">
                {' '}
                Book <br /> X-rays & Scans
              </h3>
              <img
                // width="50"
                // height="50"
                className="mt-[-5px] w-[25%] h-[25%]"
                src="/images/landingpage/featureservice/icon.png"
                alt="icon"
              />
            </div>

            <div className="flex  justify-between items-center  ">
              <div>
                <h3 className="mb-[.5rem] w-full font-sans text-[.9em] font-semibold tracking-wide text-[#737171] 	">
                  CT Scans, ECG, USG & more
                </h3>
                <h3 className=" text-[.9em] font-semibold tracking-wide text-[#2C62D6] ">
                  Upto 50% off
                </h3>
              </div>
              <Image
                width="30"
                height="30"
                src="/images/landingpage/featureservice/next-icon.svg"
              />
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                "url('/images/landingpage/featureservice/ind_service_bg.png')",
              height: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
            className=" col-span-4 py-[.6rem] pr-[1rem] pl-[1.3rem] bg-white rounded-lg"
          >
            <div className="flex mb-[.7rem] ">
              <h3 className=" [font-weight:500] w-full font-sans text-[1.4em] tracking-normal	leading-60	">
                {' '}
                Book <br /> Surgery
              </h3>
              <img
                // width="50"
                // height="50"
                className="mt-[-5px] w-[25%] h-[25%]"
                src="/images/landingpage/featureservice/icon.png"
                alt="icon"
              />
            </div>

            <div className="flex  justify-between items-center  ">
              <div>
                <h3 className="mb-[.5rem] w-full font-sans text-[.9em] font-semibold tracking-wide text-[#737171] 	">
                  Knee Replacement, Harnia
                </h3>
                <h3 className=" text-[.9em] font-semibold tracking-wide text-[#2C62D6] ">
                  Upto 50% off
                </h3>
              </div>
              <Image
                width="30"
                height="30"
                src="/images/landingpage/featureservice/next-icon.svg"
              />
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                "url('/images/landingpage/featureservice/span-bg.png')",
              height: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
            className=" col-span-6 py-[.6rem] pr-[1rem] pl-[1.3rem] bg-white rounded-lg"
          >
            <div className="flex mb-[.7rem] ">
              <h3 className=" [font-weight:500] w-full font-sans text-[1.4em] tracking-normal	leading-60	">
                {' '}
                At Home <br /> Care Plans
              </h3>
              <img
                // width="50"
                // height="50"
                className="mt-[-5px] w-[18%] h-[18%]"
                src="/images/landingpage/featureservice/icon.png"
                alt="icon"
              />
            </div>

            <div className="flex  justify-between items-center  ">
              <div>
                <h3 className="mb-[.5rem] w-full font-sans text-[.9em] font-semibold tracking-wide text-[#737171] 	">
                  Diabates, Thyroid, PCOS & more
                </h3>
                <h3 className=" text-[.9em] font-semibold tracking-wide text-[#2C62D6] ">
                  Upto 50% off
                </h3>
              </div>
              <Image
                width="30"
                height="30"
                src="/images/landingpage/featureservice/next-icon.svg"
              />
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                "url('/images/landingpage/featureservice/span-bg.png')",
              height: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
            className=" col-span-6 py-[.6rem] pr-[1rem] pl-[1.3rem] bg-white rounded-lg"
          >
            <div className="flex mb-[.7rem] ">
              <h3 className=" [font-weight:500] w-full font-sans text-[1.4em] tracking-normal	leading-60	">
                {' '}
                Exclusive <br /> Health Checkups
              </h3>
              <img
                // width="50"
                // height="50"
                className="mt-[-5px] w-[18%] h-[18%]"
                src="/images/landingpage/featureservice/icon.png"
                alt="icon"
              />
            </div>

            <div className="flex  justify-between items-center  ">
              <div>
                <h3 className="mb-[.5rem] w-full font-sans text-[.9em] font-semibold tracking-wide text-[#737171] 	">
                  Full Body, Diabates, Thyroid & more`
                </h3>
                <h3 className=" text-[.9em] font-semibold tracking-wide text-[#2C62D6] ">
                  Upto 50% off
                </h3>
              </div>
              <Image
                width="30"
                height="30"
                src="/images/landingpage/featureservice/next-icon.svg"
              />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default ServicesFeature;
