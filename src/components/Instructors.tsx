'use client'
import React from 'react';
import { WavyBackground } from './ui/wavy-background';
import { AnimatedTooltip } from './ui/animated-tooltip';
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Vocal Coach",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Guitaar Specialist",
    designation: "Piano Instructor",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Voilin Specialist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "Drum Trainer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Music Theory Mentor",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "Bollywood Singing Coach",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];
 
const Instructors = () => {
  return (
    <div className='relative h-[40rem] overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8'>
      <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full text-center space-y-6'>
        <h2 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white font-extrabold leading-tight'>
          Meet Our Instructors
        </h2>
        <p className='text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-3xl mx-auto'>
          Discover the talented professionals who will guide your musical journey.
        </p>
        <div className='flex flex-row items-center justify-center mb-10 w-full '>
            <AnimatedTooltip items={people}/>
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructors;
