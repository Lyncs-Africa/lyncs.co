import React from 'react';
import {BsArrowUpRight, BsLuggage} from "react-icons/bs";
import {AiFillCar, AiOutlineShoppingCart} from "react-icons/ai";
import {FaPlaneDeparture} from "react-icons/fa";
import {FaMoneyBills} from "react-icons/fa6";
import {IoFastFoodOutline} from "react-icons/io5";
import {motion} from "framer-motion";
import {RiMotorbikeFill} from "react-icons/ri";
import {GiWorld} from "react-icons/gi";

const SideNav = () => {
  return (
    <div
      className="rounded-lg shadow-lg bg-[#FBFBFB] h-[500px] py-10 px-4 flex flex-col items-center justify-between">
      <motion.div
        animate={{y:[0, 10, -10, 10, 0]}}
        transition={{duration: 1.5, repeat: Infinity, repeatDelay: 13}}
        className="h-[35px] w-[35px] rounded-full text-sm text-gray-50 p-4 bg-black flex items-center justify-center">
        SS
      </motion.div>
      <div className="flex flex-col gap-5">
        <motion.div
          animate={{y:[0, 10, -10, 10, 0]}}
          transition={{delay: 2.5, duration: 1.5, repeat: Infinity, repeatDelay: 13}}
          className="h-[25px] w-[25px] rounded-lg text-gray-800">
          <BsArrowUpRight size="25px"/>
        </motion.div>
        <motion.div
          animate={{y:[0, 10, -10, 10, 0]}}
          transition={{delay: 4.5, duration: 1.5, repeat: Infinity, repeatDelay: 13}}
          className="h-[25px] w-[25px] text-gray-800">
          <AiFillCar size="25px"/>
        </motion.div>
        <motion.div
          animate={{y:[0, 10, -10, 10, 0]}}
          transition={{delay: 6.5, duration: 1.5, repeat: Infinity, repeatDelay: 13}}
          className="h-[25px] w-[25px] text-gray-800">
          <RiMotorbikeFill size="25px"/>
        </motion.div>
        <motion.div
          animate={{y:[0, 10, -10, 10, 0]}}
          transition={{delay: 8.5, duration: 1.5, repeat: Infinity, repeatDelay: 13}}
          className="h-[25px] w-[25px] rounded-lg text-gray-800">
          <FaPlaneDeparture size="25px"/>
        </motion.div>
        <motion.div
          animate={{y:[0, 10, -10, 10, 0]}}
          transition={{delay: 10.5, duration: 1.5, repeat: Infinity, repeatDelay: 13}}
          className="h-[25px] w-[25px] rounded-lg text-gray-800">
          <GiWorld size="25px"/>
        </motion.div>
        <motion.div
          animate={{y:[0, 10, -10, 10, 0]}}
          transition={{delay: 12.5, duration: 1.5, repeat: Infinity, repeatDelay: 13}}
          className="h-[25px] w-[25px] rounded-lg text-gray-800">
          <FaMoneyBills size="25px"/>
        </motion.div>
      </div>
    </div>

  );
};

export default SideNav;
