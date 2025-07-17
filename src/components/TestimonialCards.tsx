'use client';
import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';

const TestimonialCards = () => {
  return (
    <div className="relative py-10 overflow-hidden bg-neutral-950">
      <div className="absolute inset-0 z-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
       
        <TestimonialCarousel />
    </div>
  );
};
export default TestimonialCards;
