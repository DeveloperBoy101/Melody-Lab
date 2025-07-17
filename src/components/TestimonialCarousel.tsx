'use client';

import React from 'react';
import Slider from 'react-slick';
import { cn } from '@/lib/utils';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const testimonials = [
  {
    quote: `This platform is like a symphony for my workflow – everything just clicks perfectly.From organizing sessions to final exports, it’s smooth like a mastered track.I finally feel like I’m producing, not just.`,
    name: 'Zayn Melody',
    title: 'Music Producer at SoundForge',
  },
  {
    quote: `A true harmony of design and performance – as smooth as a jazz solo.The interface feels like singing on stage with perfect reverb and lights.I can finally focus on creativity instead of the clutter.`,
    name: 'Lara Vox',
    title: 'Vocal Artist & Songwriter',
  },
  {
    quote: `Helps me manage my tracks, clients, and releases effortlessly.Everything is right where I need it — no more last-minute file hunts.It’s like having a virtual assistant who knows music.`,
    name: 'DJ Rezon',
    title: 'Electronic DJ & Mixing Specialist',
  },
  {
    quote: `Whether it’s pre-production or mastering, this tool hits all the right notes.It keeps my instruments, files, and session flow in sync.Feels like a studio tech built just for guitarists like me.`,
    name: 'Nina Strings',
    title: 'Session Guitarist & Composer',
  },
  {
    quote: `I create beats faster and stay organized – this tool is my studio essential.Loops, layers, and lyrics are all under control.It’s like having my own rhythm manager in one tab for their own work here.`,
    name: 'Kash Flow',
    title: 'Hip-Hop Beat Maker',
  },
  {
    quote: `As a live performer, having this kind of structure keeps my gigs stress-free.Setlists, timings, and gear notes – everything is just a swipe away.It’s the best tour manager I’ve never paid for.`,
    name: 'Echo Blaze',
    title: 'Live Performer & Touring Artist',
  },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 15000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  pauseOnHover: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const TestimonialCarousel = () => {
  return (
    <div className="relative w-full py-20 overflow-hidden bg-neutral-950">
      {/* Grid lines */}
      <div
        className={cn(
          'absolute inset-0 z-0',
          '[background-size:40px_40px]',
          '[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]'
        )}
      />
      {/* Radial Fade */}
      <div className="absolute inset-0 z-10 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="relative w-full max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Hear Our Harmony: Voices Of Success</h2>
        <Slider {...sliderSettings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-3">
              <div className="w-[350px] rounded-2xl border-2 border-zinc-700 bg-[radial-gradient(ellipse_at_center,_#1f2937_0%,_#111827_100%)] px-8 py-6 h-full">
                <p className="text-white text-sm mb-4 leading-relaxed whitespace-pre-line">“{item.quote}”</p>
                <div>
                  <p className="text-white font-semibold text-sm">{item.name}</p>
                  <p className="text-gray-400 text-sm">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default TestimonialCarousel
