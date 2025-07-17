import FeaturedCourses from '@/components/FeaturedCourses';
import HeroSection from '@/components/HeroSection';
import Instructors from '@/components/Instructors';
import TestimonialCards from '@/components/TestimonialCards';
import UpcomingWebinars from '@/components/UpcomingWebinars';
import WhyChoseus from '@/components/WhyChoseus';
import React from 'react';

const page = () => {
  return (
    <div className='bg-black '>
      
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChoseus/>
      <UpcomingWebinars/>
      <TestimonialCards/>
      <Instructors/>
      
    </div>
  );
}

export default page;
