"use client";
import React from "react";
import { IoIosMusicalNotes } from "react-icons/io";
import { LuDrum } from "react-icons/lu";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { CgBoy } from "react-icons/cg";
import FaqAccordion from "./FaqAccordion";
import { BsFillPeopleFill } from "react-icons/bs";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-black to-gray-950  text-white">
      <h1 className="text-5xl font-bold text-center tracking-wide leading-14 bg-clip-text text-transparent bg-gradient-to-t from-white to-neutral-700 pt-10 mt-24">
        Best {""}
        <span className="underline-offset-2">
          Music Theory
          <div className="mx-auto mt-4 h-[1px] w-[350px] bg-gradient-to-r from-neutral-300 to-gray- rounded-full"></div>
        </span>
      </h1>

      {/* top flex */}
      <div className="flex flex-col md:flex-row items-center gap-8 p-8 ">
        {/* Left image */}
        <div className="h-[430px] w-[300px] rounded-xl  shadow-[0_0_30px_white] ">
          <img
            src="https://i.pinimg.com/736x/02/dc/c2/02dcc2c3dda88b284b8df4833d49d329.jpg"
            className="h-full w-full object-cover border border-gray-900 rounded-md "
          />
        </div>

        {/* Right text box */}
        <div className="w-full lg:max-w-[850px] lg:h-[430px]  text-gray-300  p-6 rounded-xl border border-gray-900 bg-gradient-to-t from-black to-gray-950 text-[15px] flex flex-col gap-8 sm:h-[650px]">
          <div className="flex items-start gap-4">
            <IoIosMusicalNotes className=" lg:text-4xl lg:w-[5rem]  text-8xl text-white p-2 rounded-full shadow-[0_0_60px_white]  bg-gradient-to-t from-white to-gray-700 h-[50px]" />
            <span className="leading-7 text-base">
              Discover your favorite tracks, stream high-quality music without
              limits, and enjoy personalized playlists made just for you. It
              helps people express emotions that words often fail to describe.
            </span>
          </div>

          <div className="flex items-start gap-4">
            <LuDrum className=" lg:text-4xl  text-8xl  lg:w-[5rem]  text-white p-2 rounded-full shadow-[0_0_60px_white]  bg-gradient-to-t from-white to-gray-700 h-[50px]" />
            <span className="leading-7 text-base">
              Unlock the power of perfect rhythm. From live shows to studio
              sessions, we deliver flawless drum beats.Listening to music
              reduces stress and brings peace to the mind.
            </span>
          </div>

          <div className="flex items-start gap-4">
            <BsFillPeopleFill className=" lg:text-4xl  lg:w-[7rem]  text-8xl text-white p-2 rounded-full shadow-[0_0_60px_white]  bg-gradient-to-t from-white to-gray-700 h-[50px]"/>  
            <span className="leading-7 text-base">
              Stay connected without limits. Fast, secure, and reliable personal
              network solutions made for you.Music is not limited by age,
              language, or culture. Whether you are young or old, you can enjoy
              music. It brings people together in celebrations, ceremonies, and
              festivals
            </span>
          </div>

          <div className="flex items-start gap-4">
            <CgBoy className=" lg:text-4xl lg:w-[5rem]  text-8xl text-white p-2 rounded-full shadow-[0_0_60px_white]  bg-gradient-to-t from-white to-gray-700 h-[50px]" />
            <span className="leading-7 text-base">
              Protecting your child, online and offline. Safe, smart, and simple
              security solutions for every age. Everyone should enjoy music, not
              only to entertain themselves but to live a happier, healthier, and
              more creative life.
            </span>
          </div>
        </div>
      </div>

      {/* FAQ below */}
      <div className="w-full px-8 pb-16">
        <FaqAccordion />
      </div>
    </div>
  );
};

export default Page;
