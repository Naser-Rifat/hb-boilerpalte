/* eslint-disable prettier/prettier */

import React from 'react';

import Activity from 'components/Activites/Activities';
import Banner from 'components/Banner/Banner';
import BestDeals from 'components/BestDeals/BestDeals';
import FeatureCoupons from 'components/FeatureCoupons/FeatureCoupons';
import FeaturePackages from 'components/FeaturePackages/FeaturePackages';
import FeatureService from 'components/FeatureService/FeatureService';
import ServicesFeature from 'components/FeatureService/Section-3/ServicesFeature';

const Homepage = () => {
  return (
    <section className="bg-gray-100">
{/* 
<div className="hidden md:block relative mx-auto fullbg">
      <div className=" mx-auto   md:block  min-w-screen"> */}
       
          <Banner />
        {/* <Image
          // width="1000"
          // height="100"
          layout="fill"
          className="w-full  absolute mt-[15rem] "
          src="/images/landingpage/banner/layer-2.svg"
          alt=""
        />
        <Image
          // width="1000"
          // height="100"
          layout="fill"
          className="w-full absolute "
          src="/images/landingpage/banner/layer-1.svg"
          alt=""
        /> */}
      {/* </div> */}

      <Activity />
    {/* // </div> */}
    <FeatureService />
    <ServicesFeature/>
    <FeaturePackages/>
    <FeatureCoupons/>
    <BestDeals/>
    
    </section>
  );
};

export default Homepage;
