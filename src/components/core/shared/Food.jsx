import React from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { motion } from "framer-motion";
import {FaBus} from "react-icons/fa";

const Food = ({handleIsWidgetLoading}) => {
  const handleOpen = (path) => {
    handleIsWidgetLoading(true)
    window.LyncsWidget.open(
      {
        key: 'a3a2d99285894aa88b4340436fb7733151cffe74dc6870c214ecc0',
        path: path,
        onReady: () => {
          handleIsWidgetLoading(false)
        }
      },
    );
  };

  return (
    <>
      <motion.div
        animate={{ y: [0, 10, -10, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 7 }}
        className="relative text-center bg-[#282A30] shadow-lg rounded-lg p-6">
        <div className="absolute right-[25%] top-[-4rem]">
          <img className="w-[100px] rounded-full h-[100px] bg-cover border-[2px] border-slate-400" src="/images/locations/lagos.jpg" />
        </div>
        <p className="mt-10 text-[18px] text-gray-200">Lagos Nigeria</p>
        <div className="border-t border-b border-gray-600 py-2 mt-2 flex gap-2 items-center justify-center">
          <FaBus size="20" className="text-gray-600"/>
          <p className="text-gray-500">Abuja, Nigeria</p>
        </div>
        <div className="flex mt-5 justify-between">
          <p className="text-[18px] text-gray-200 text-left">Book now</p>
          <button onClick={() => handleOpen('/bus')} className="text-white p-2 bg-yellow-600 rounded-lg">
            <AiOutlinePlus />
          </button>
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, -10, 10, 0] }}
        transition={{ delay: 2.5, duration: 1.5, repeat: Infinity, repeatDelay: 7 }}
        className="relative text-center bg-[#282A30] shadow-lg rounded-lg p-6 w-full">
        <div className="absolute right-[25%] top-[-4rem]">
          <img className="w-[100px] rounded-full h-[100px] bg-cover border-[2px] border-slate-400" src="/images/locations/warri.jpeg" />
        </div>
        <p className="mt-10 text-[18px] text-gray-200">Warri, Nigeria <br /></p>
        <div className="border-t border-b border-gray-600 py-2 mt-2 flex gap-2 items-center justify-center">
          <FaBus size="20" className="text-gray-600"/>
          <p className="text-gray-500">Lagos, Nigeria</p>
        </div>
        <div className="flex mt-5 justify-between">
          <p className="text-[18px] text-gray-200 text-left">Book now</p>
          <button onClick={() => handleOpen('/bus')} className="text-white p-2 bg-yellow-600 rounded-lg">
            <AiOutlinePlus />
          </button>
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, -10, 10, 0] }}
        transition={{ delay: 4.5, duration: 1.5, repeat: Infinity, repeatDelay: 7 }}
        className="relative text-center bg-[#282A30] shadow-lg rounded-lg p-6">
        <div className="absolute right-[25%] top-[-4rem]">
          <img className="w-[100px] rounded-full h-[100px] bg-cover border-[2px] border-slate-400" src="/images/locations/accra.jpg" />
        </div>
        <p className="mt-10 text-[18px] text-gray-200">Accra, Ghana <br /></p>
        <div className="border-t border-b border-gray-600 py-2 mt-2 flex gap-2 items-center justify-center">
          <FaBus size="20" className="text-gray-600"/>
          <p className="text-gray-500">Lagos, Nigeria</p>
        </div>
        <div className="flex mt-5 justify-between">
          <p className="text-[18px] text-gray-200 text-left">Book now</p>
          <button onClick={() => handleOpen('/bus')} className="text-white p-2 bg-yellow-600 rounded-lg">
            <AiOutlinePlus />
          </button>
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, -10, 10, 0] }}
        transition={{ delay: 6.5, duration: 1.5, repeat: Infinity, repeatDelay: 7 }}
        className="relative text-center bg-[#282A30] shadow-lg rounded-lg p-6">
        <div className="absolute right-[25%] top-[-4rem]">
          <img className="w-[100px] rounded-full h-[100px] bg-cover border-[2px] border-slate-400" src="/images/locations/abuja.jpg" />
        </div>
        <p className="mt-10 text-[18px] text-gray-200">Abuja, Nigeria</p>
        <div className="border-t border-b border-gray-600 py-2 mt-2 flex gap-2 items-center justify-center">
          <FaBus size="20" className="text-gray-600"/>
          <p className="text-gray-500">Lagos, Nigeria</p>
        </div>
        <div className="flex mt-5 justify-between">
          <p className="text-[18px] text-gray-200 text-left">Book now</p>
          <button onClick={() => handleOpen('/bus')} className="text-white p-2 bg-yellow-600 rounded-lg">
            <AiOutlinePlus />
          </button>
        </div>
      </motion.div>

    </>
  );
};

export default Food;
