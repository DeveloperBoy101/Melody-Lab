"use client";
import React, { useState } from "react";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";

const ContactPage = () => {
  const [phone, setPhone] = useState<string>("");

  return (
    <div className="min-h-screen bg-gradient-to-t from-black to-gray-800 flex flex-col items-center justify-around px-8 py-16 gap-10">
      {/* Top Section - Contact */}
      <div className="flex flex-col md:flex-row justify-around w-full gap-10">
        {/* Contact Info */}
        <div className="md:w-[45%] w-full flex flex-col gap-8 text-white mt-22">
          <h1 className="text-4xl font-bold mb-4 text-white">Get in Touch</h1>
          <div className="flex items-center gap-4 bg-gray-900/70 p-4 rounded-lg shadow-[0_0_10px_white]">
            <IoMdCall className="text-3xl text-green-400" />
            <div>
              <h2 className="font-semibold text-lg">Phone</h2>
              <p className="text-sm text-gray-300">+923141460797</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-gray-900/70 p-4 rounded-lg shadow-[0_0_10px_white]">
            <MdEmail className="text-3xl text-yellow-400" />
            <div>
              <h2 className="font-semibold text-lg">Email</h2>
              <p className="text-sm text-gray-300">
                ahmadraza.bablo1@gmail.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-gray-900/70 p-4 rounded-lg shadow-[0_0_10px_white]">
            <GoLocation className="text-3xl text-blue-400" />
            <div>
              <h2 className="font-semibold text-lg">Location</h2>
              <p className="text-sm text-gray-300">
                Depalpur, Punjab, Pakistan
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-[45%] w-full bg-gradient-to-b from-black to-gray-700 p-8 rounded-xl shadow-[0_0_20px_white] mt-22">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">
            Contact Form
          </h2>
          <form className="flex flex-col gap-5 text-white">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-md bg-transparent border border-gray-600 focus:ring-1 focus:ring-white outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-md bg-transparent border border-gray-600 focus:ring-1 focus:ring-white outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="p-3 rounded-md bg-transparent border border-gray-600 focus:ring-1 focus:ring-white outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-white to-gray-400 text-black font-bold py-3 rounded-md hover:opacity-80 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section - Music Website Intro */}
      <div className="w-full bg-gradient-to-r from-black to-gray-900 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Musical Journey?
        </h2>
        <p className="text-lg mb-6 text-gray-300">
          Join thousands of artists shaping their careers with us.
        </p>
        <button className="bg-gradient-to-r from-white to-gray-300 text-black font-bold py-3 px-8 rounded-md hover:opacity-80 transition cursor-pointer">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default ContactPage;
