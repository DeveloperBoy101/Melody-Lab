"use client";
import React from "react";

const cards = [
  {
    id: 1,
    balance: "$5,750.20",
    number: "5282 3456 7890 1289",
    expiry: "09/25",
    gradient: "from-black to-stone-500",
  },
  {
    id: 2,
    balance: "$4,570.80",
    number: "5294 2436 4780 2468",
    expiry: "12/24",
    gradient: "from-orange-600 to-yellow-500",
  },
];

const Vcards = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-black to-neutral-800 p-6 pt-20 pb-22">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-t from-white to-gray-600 text-4xl font-bold text-center mb-10 mt-10">Buy Your Course</h1>

      <div className="flex flex-col lg:flex-row justify-around items-center gap-10">
        {/* Left Side - Cards */}
        <div className="flex flex-wrap sm:flex-nowrap lg:flex-col justify-center gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`w-[90vw] sm:w-[230px] sm:h-[140px] lg:w-[320px] h-[120px] rounded-xl text-white p-4 flex flex-col justify-between bg-gradient-to-br shadow-[0_0_10px_white] ${card.gradient}`}
            >
              <div className="flex justify-between items-center">
                <p className="text-xs sm:text-sm opacity-80">Current Balance</p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                  alt="mastercard"
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </div>
              <p className="text-2xl sm:text-3xl font-bold">{card.balance}</p>
              <div className="flex justify-between items-center text-xs sm:text-sm mt-2">
                <p>{card.number}</p>
                <p>{card.expiry}</p>
              </div>
            </div>
          ))}

          {/* Add New */}
          <div className="w-[90vw] sm:w-[230px] sm:h-[140px] lg:w-[320px] h-[120px] rounded-xl bg-gray-200 flex flex-col justify-center items-center cursor-pointer border-2 border-dashed border-gray-400">
            <div className="bg-green-500 rounded-full p-2 mb-2">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <p className="font-semibold text-lg">Add new</p>
          </div>
        </div>

        {/* Right Side - Payment Form */}
        <div className="w-[90vw] sm:w-[500px] lg:w-[600px] lg:h-[470px] bg-gradient-to-t from-black to-neutral-800 rounded-xl p-6 shadow-[0_0_20px_white]">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-t from-white to-gray-500">
            Payment Details
          </h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 text-white focus:ring-white bg-transparent"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 text-white focus:ring-white bg-transparent"
            />
            <input
              type="text"
              placeholder="Card Number"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 text-white focus:ring-white bg-transparent"
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Expiry Date (MM/YY)"
                className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 text-white focus:ring-white bg-transparent"
              />
              <input
                type="text"
                placeholder="CVV"
                className="sm:w-[100px] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 text-white focus:ring-white bg-transparent"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-gray-300 to-gray-500 text-black p-3 rounded-md font-semibold hover:from-white hover:to-white hover:text-black duration-300 w-[8rem]"
            >
              Pay Now
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full mt-16 bg-gradient-to-r from-black to-gray-800 p-10  text-white text-center flex flex-col gap-6">
        <h1 className="text-4xl font-bold">Your Learning, Your Control</h1>
        <p className="text-lg max-w-4xl mx-auto leading-8 text-gray-300">
          Elevate your skills at your own pace with flexible payments and premium resources. With your secure payment options, you get lifetime access to professional courses designed to shape your career. Unlock your potential and get started today with confidence.
        </p>
      </div>
    </div>
  );
};

export default Vcards;
