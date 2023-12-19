import React from 'react';
import {motion} from "framer-motion";
import {GiAmpleDress, GiConverseShoe} from "react-icons/gi";
import {IoIosPhonePortrait} from "react-icons/io";
import {MdChair} from "react-icons/md";

const ShopNav = () => {
  return (
    <div
      className="rounded-lg shadow-lg bg-black w-[70px] h-[350px] py-10 px-1 xl:px-0 flex flex-col items-center justify-between">
      <motion.div
        animate={{y: [0, 10, -10, 10, 0]}}
        transition={{duration: 1.5, repeat: Infinity, repeatDelay: 13}}
        className="h-[35px] w-[35px] rounded-full text-sm text-gray-500 p-4 bg-white flex items-center justify-center">
        SS
      </motion.div>
      <div className="flex flex-col gap-5">
        <motion.div
          animate={{y: [0, 10, -10, 10, 0]}}
          transition={{delay: 2.5, duration: 1.5, repeat: Infinity, repeatDelay: 13}}
          className="h-[25px] w-[25px] rounded-lg text-gray-300">
          <GiConverseShoe size="25px"/>
        </motion.div>
        <motion.div
          animate={{y: [0, 10, -10, 10, 0]}}
          transition={{delay: 4.5, duration: 1.5, repeat: Infinity, repeatDelay: 13}}
          className="h-[25px] w-[25px] text-gray-300">
          <GiAmpleDress size="25px"/>
        </motion.div>
        <motion.div
          animate={{y: [0, 10, -10, 10, 0]}}
          transition={{delay: 6.5, duration: 1.5, repeat: Infinity, repeatDelay: 13}}
          className="h-[25px] w-[25px] text-gray-300">
          <IoIosPhonePortrait size="25px"/>
        </motion.div>
        <motion.div
          animate={{y: [0, 10, -10, 10, 0]}}
          transition={{delay: 8.5, duration: 1.5, repeat: Infinity, repeatDelay: 13}}
          className="h-[25px] w-[25px] rounded-lg text-gray-300">
          <MdChair size="25px"/>
        </motion.div>
      </div>
    </div>

  );
};

export default ShopNav;