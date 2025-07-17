"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is KMusic Academy?",
    answer:
      "KMusic Academy is a professional music learning platform offering high-quality training in singing, instruments, and music production for all age groups.",
  },
  {
    question: "Which courses are available at KMusic Academy?",
    answer:
      "We offer courses in Singing, Guitar, Piano, Drums, Violin, Music Production, DJing, and Audio Mixing — from beginner to advanced levels.",
  },
  {
    question: "Do you provide online music classes?",
    answer:
      "Yes! We provide both online and in-studio classes with flexible schedules to fit your learning needs, accessible worldwide.",
  },
  {
    question: "Are trial classes available before joining?",
    answer:
      "Absolutely! You can attend a free trial class to experience our teaching style before making a decision.",
  },
  {
    question: "Do instructors have professional music experience?",
    answer:
      "Yes, all our instructors are trained professionals with years of experience in live performances, studio recordings, and teaching.",
  },
  {
    question: "Will I get a certificate after completing a course?",
    answer:
      "Yes, every student receives a recognized certificate from KMusic Academy upon successful completion of their course.",
  },
  {
    question: "Is KMusic Academy suitable for kids and beginners?",
    answer:
      "Of course! We have specially designed beginner-friendly and kids music programs that make learning easy and fun.",
  },
  {
    question: "How can I join KMusic Academy?",
    answer:
      "You can easily join by filling out our online registration form, contacting our support team, or visiting our nearest studio branch.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 sm:mt-20">
      <h1 className="text-3xl sm:text-5xl font-bold text-center tracking-wide leading-14 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-700 mb-4">
        Frequently {""}
        <span>
          Asked Questions
          <div className="mx-auto mt-4 h-[1px] w-[350px] bg-gradient-to-r from-neutral-300 to-gray- rounded-full"></div>
        </span>
      </h1>
      <p className="text-center text-gray-300 mb-8 text-sm sm:text-base">
        Click the arrows to expand and discover answers to common questions
      </p>

      <div className="space-y-4 font-light">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden transition-all duration-300 border border-gray-800 hover:border-gray-700"
          >
            <button
              className="flex justify-between items-center w-full p-4 sm:p-5 text-left text-sm sm:text-base bg-gradient-to-t from-black to-gray-800 hover:to-gray-700 transition-colors duration-200"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-sm sm:text-base">{faq.question}</span>
              <FaChevronDown
                className={`ml-2 sm:ml-4 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`px-4 sm:px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-96 py-4 opacity-100"
                  : "max-h-0 py-0 opacity-0"
              }`}
            >
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-500 mt-10 text-sm sm:text-base">
        Have more questions? Feel free to ask!
      </p>
    </div>
  );
}
