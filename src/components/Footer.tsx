"use client";

import {
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 w-full mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Info */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white">Music Fun</h2>
          <p className="text-gray-400">
            Learn from the best resources and boost your career with top-notch
            courses.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center space-x-2">
              <MdLocationOn className="text-xl" />
              <span>Ahmad Raza, Taj Colony, Depalpur</span>
            </li>
            <li className="flex items-center space-x-2">
              <MdEmail className="text-xl" />
              <span>ahmadraza.bablo1@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <MdPhone className="text-xl" />
              <span>+92 314 1460797</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
          <p className="text-gray-400 mb-4">
            Get updates on new courses and offers.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-md text-black bg-neutral-300"
            />
            <button
              type="submit"
              className="w-full text-white font-semibold py-3 rounded-md transition bg-gradient-to-r from-blue-800 to-blue-500 hover:from-blue-900 hover:to-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 border-t border-gray-700 pt-6 text-sm">
        © 2025 MyWebsite. All rights reserved.
      </div>
    </footer>
  );
}
