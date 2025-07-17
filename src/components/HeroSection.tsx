"use client";
import React from "react";
import Link from "next/link";
import BackgroundBoxes from "./ui/background-boxes";
import { Button } from "./ui/moving-border";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-auto md:h-[40rem] w-full overflow-hidden rounded-md py-10 md:py-0 bg-black">
      <BackgroundBoxes className="top-[-30%] left-[-20%] fill-white" />

      {/* ✅ Animate From Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full text-center px-4 mt-2"
      >
        <h1 className="mt-20 md:mt-8 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
          Master the Art of Music
        </h1>
        <p className="mt-4 text-base md:text-lg max-w-lg mx-auto font-normal bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
          Dive into your comprehensive music courses and transform your journey
          today. Whether you're a beginner or looking to refine your skills, join
          us to unlock your true potential.
        </p>
        <div className="mt-6">
          <Link href="/courses">
            <Button className="cursor-pointer">Explore Courses</Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
