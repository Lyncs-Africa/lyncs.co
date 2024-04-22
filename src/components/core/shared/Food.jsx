import React from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { motion } from "framer-motion";

const Food = () => {
  return (
    <>
      <motion.div
        animate={{ y: [0, 10, -10, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 7 }}
        className="relative text-center bg-slate-900 shadow-lg rounded-lg p-6">
        <div className="absolute right-[25%] top-[-4rem]">
          <img className="w-[100px]" src="/images/food/1.png" />
        </div>
        <p className="mt-10 text-[18px] text-gray-200">Beef Stew</p>
        <div className="border-t border-b border-gray-600 py-2 mt-2 flex gap-4 items-center justify-center">
          <p className="text-gray-500">Papa Cass Restaurant</p>
        </div>
        <div className="flex mt-5 justify-between">
          <p className="text-[18px] text-gray-200 text-left">&#8358;2,000</p>
          <div className="text-white p-2 bg-yellow-600 rounded-lg">
            <AiOutlinePlus />
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, -10, 10, 0] }}
        transition={{ delay: 2.5, duration: 1.5, repeat: Infinity, repeatDelay: 7 }}
        className="relative text-center bg-slate-900 shadow-lg rounded-lg p-6 w-full">
        <div className="absolute right-[25%] top-[-4rem]">
          <img className="w-[100px]" src="/images/food/2.png" />
        </div>
        <p className="mt-10 text-[18px] text-gray-200">Tuna Sala <br /></p>
        <div className="border-t border-b border-gray-600 py-2 mt-2 flex gap-4 items-center justify-center">
          <p className="text-gray-500">Veggies Restaurant </p>
        </div>
        <div className="flex mt-5 justify-between">
          <p className="text-[18px] text-gray-200 text-left">&#8358;2,800</p>
          <div className="text-white p-2 bg-yellow-600 rounded-lg">
            <AiOutlinePlus />
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, -10, 10, 0] }}
        transition={{ delay: 4.5, duration: 1.5, repeat: Infinity, repeatDelay: 7 }}
        className="relative text-center bg-slate-900 shadow-lg rounded-lg p-6">
        <div className="absolute right-[25%] top-[-4rem]">
          <img className="w-[100px]" src="/images/food/3.png" />
        </div>
        <p className="mt-10 text-[18px] text-gray-200">Sargam Food <br /></p>
        <div className="border-t border-b border-gray-600 py-2 mt-2 flex gap-4 items-center justify-center">
          <p className="text-gray-500">Chinese College</p>
        </div>
        <div className="flex mt-5 justify-between">
          <p className="text-[18px] text-gray-200 text-left">&#8358;5,500</p>
          <div className="text-white p-2 bg-yellow-600 rounded-lg">
            <AiOutlinePlus />
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, -10, 10, 0] }}
        transition={{ delay: 6.5, duration: 1.5, repeat: Infinity, repeatDelay: 7 }}
        className="relative text-center bg-slate-900 shadow-lg rounded-lg p-6">
        <div className="absolute right-[25%] top-[-4rem]">
          <img className="w-[100px]" src="/images/food/4.png" />
        </div>
        <p className="mt-10 text-[18px] text-gray-200">Kings Delight <br />Fried Rice</p>
        <div className="border-t border-b border-gray-600 py-2 mt-2 flex gap-4 items-center justify-center">
          <p className="text-gray-500">The Second place</p>
        </div>
        <div className="flex mt-5 justify-between">
          <p className="text-[18px] text-gray-200 text-left">&#8358;10,200</p>
          <div className="text-white p-2 bg-yellow-600 rounded-lg">
            <AiOutlinePlus />
          </div>
        </div>
      </motion.div>

    </>
  );
};

export default Food;
