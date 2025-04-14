import React from 'react';
import BannerSlider from '../BannerSlider';
import HowItWorks from '../Shared/HowItWorks';
import TrustedBy from '../Shared/TrustedBy';
import BooksCategories from './BooksCategories';

const Home = () => {
  return (
    <div className='py-10'>
      <BannerSlider></BannerSlider>
      <BooksCategories></BooksCategories>
      <HowItWorks></HowItWorks>
      <TrustedBy></TrustedBy>
    </div>
  );
};

export default Home;