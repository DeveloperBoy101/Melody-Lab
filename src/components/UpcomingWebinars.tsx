'use client'
import Link from 'next/link';
import React from 'react';
import { HoverEffect } from "./ui/card-hover-effect"
const UpcomingWebinars = () => {
const featuredWebinars = [
  {
    title: "Spotify Top Hits",
    description: "Enjoy the latest top hits from Spotify charts.",
    musicalLink: "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M",
    isFeatured: true,
  },
  {
    title: "YouTube LoFi Hip Hop",
    description: "Relax and focus with the best LoFi hip hop live stream.",
    musicalLink: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
    isFeatured: true,
  },
  {
    title: "SoundCloud Trending",
    description: "Discover trending tracks on SoundCloud.",
    musicalLink: "https://soundcloud.com/charts/top",
    isFeatured: false,
  },
  {
    title: "Apple Music Chill Mix",
    description: "Unwind with Apple Music's Chill Mix playlist.",
    musicalLink: "https://music.apple.com/us/playlist/chill-mix/pl.7dcae24a4e3a4c8a9185d5bfb2e7c2e6",
    isFeatured: true,
  },
  {
    title: "Wynk Bollywood Party",
    description: "Bollywood party songs to set the mood right on Wynk Music.",
    musicalLink: "https://wynk.in/music/playlist/bollywood-party-hits/bb_1464264550781",
    isFeatured: false,
  },
  {
    title: "Deezer Hip Hop Classics",
    description: "Listen to timeless hip-hop classics on Deezer.",
    musicalLink: "https://www.deezer.com/en/playlist/1379602475",
    isFeatured: false,
  },
];

  return (
    <div className='p-12 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Featured Webinars</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhanced Musical Journey</p>
            </div>
            <div className='mt-10'>
                <HoverEffect items={featuredWebinars.map(webinar =>(
                  {
                    title : webinar.title,
                    description : webinar.description,
                    link : webinar.musicalLink
                  }
                ))}/>
            </div>
            <div className='mt-10 text-center'>
                <Link href={"/"} className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>
                View All Webinars
                </Link>
            </div>

        </div>
    </div>
  );
}

export default UpcomingWebinars;
