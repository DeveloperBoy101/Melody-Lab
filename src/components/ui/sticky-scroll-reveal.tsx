"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#0f172a", // slate-900
    "#000000", // black
    "#171717", // neutral-900
  ];

  const instrumentImages = [
    "https://images.unsplash.com/photo-1528032947483-4e1df543253a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmlvbGlufGVufDB8fDB8fHww",
    "https://t4.ftcdn.net/jpg/02/57/33/93/360_F_257339302_LWVM6ZkukZUoVVo8CY0UHx5y283PG9RR.jpg",
    "https://c.superprof.com/i/m/14045199/600/20220804140706/14045199.webp",
    "https://musicuniverse.hk/wp-content/uploads/2023/11/61ca318e22c5d5710c2fd49f_1227_TeachingMusictoKids_MusicEducation_02.jpeg",
    " https://st2.depositphotos.com/1177973/8210/i/450/depositphotos_82105082-stock-photo-musical-instruments-on-turquoise.jpg",
    "https://cdn.dribbble.com/userupload/26370265/file/original-f43ab34778db3452409290acae60b199.png?resize=752x&vertical=center",
    "https://e1.pxfuel.com/desktop-wallpaper/440/419/desktop-wallpaper-instrumental-dark-hip-hop-rap-music-beat-2015-special-dark-beat-music-beats.jpg",
    "https://media.istockphoto.com/id/473869426/photo/group-of-kids-playing-musical-instruments-indoors.jpg?s=612x612&w=0&k=20&c=E7ZxmyUifgWsQAm55A3H46KUUnPUIfISEboEsUrZsi0=",
  ];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[30rem] justify-between rounded-md px-6  overflow-y-auto"
      ref={ref}
    >
      {/* Left Side (Text) */}
      <div className="relative flex items-start pr-6 pl-20">
        <div className="max-w-xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold text-white"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="mt-6 max-w-sm text-white/80 text-sm"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      {/* Right Side Sticky Image */}
      <div
        className={cn(
          "sticky top-10 hidden h-60 w-72 overflow-hidden rounded-md lg:block mt-28 mr-28",
          contentClassName
        )}
      >
        <img
          src={instrumentImages[activeCard % instrumentImages.length]}
          alt="Instrument"
          className="h-full w-full object-cover "
          loading="lazy"
        />
      </div>
    </motion.div>
  );
};
