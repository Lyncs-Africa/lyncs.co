import React from 'react';
import Link from "next/link";

const Strip = () => {
  return (
    <div
    className="block py-[100px] px-4 md:px-0 md:pb-[70px] relative bg-black overflow-hidden font-satoshiMedium">
    <div className="md:grid grid-cols-12">
      <div className="bg-[url('/images/abstract.jpg')] bg-cover md:text-center col-start-2 col-span-10 md:w-[80%] mx-auto bg-black p-10 md:p-24 rounded-lg md:rounded-[32px] relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative">
          <h2 className="text-gray-300 text-[2rem] md:text-[3.5rem] font-bold leading-[1.1] relative z-10">
            Connect today
          </h2>
          <p className="md:text-[18px] text-gray-300 my-3">
            Get free API calls when you sign up
          </p>
          <div className="ml-auto">
            <button
              className="my-3 md:text-[17px] text-gray-300 bg-black px-5 py-3 rounded-lg  hover:bg-blue-500 hover:border-gray-300 hover:text-white  ">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Strip;