import React from 'react';
import BannerSlider from '../BannerSlider';
import HowItWorks from '../Shared/HowItWorks';
import TrustedBy from '../Shared/TrustedBy';

const Home = () => {
  return (
    <div className='py-10'>
      <BannerSlider></BannerSlider>
      <HowItWorks></HowItWorks>
      <TrustedBy></TrustedBy>
    </div>
  );
};

export default Home;