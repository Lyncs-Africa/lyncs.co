import React from 'react';
import {motion} from "framer-motion";

const AffiliateMobile = ({handleOpen}) => {
  return (
    <div className="font-satoshiMedium md:hidden bg-[#030A21] min-h-screen relative py-[100px]">
      <div className="absolute w-full min-h-[390px] bg-[url('/images/2.jpg')] bg-cover -left-10 -top-4">
        <div className="absolute inset-0 bg-slate-800 opacity-60"></div>
      </div>
      <div className="relative">
        <img className="-mt-36" src="/images/test-curve.png"/>
        <div className="px-4 -mt-24">
          <motion.h2
            className="text-white leading-[1.3] text-[3.5rem] md:text-[6rem] font-bold"
          >
            Unlock Cheap Flights, <br/> <span className="bg-white text-black py-2">Earn Big!</span>
          </motion.h2>
          <p
            className="md:text-[17px] text-[16px] font-extralight py-8 text-gray-400">
            Join our affiliate program, get exclusive flight discounts, and earn money with every booking. No hidden
            fees, no stress—just smart travel and extra income!
          </p>
          <motion.button onClick={handleOpen}
            className="md:w-auto text-center md:text-left border border-blue-500 bg-blue-500 text-[16px] text-white px-8 py-3 rounded-lg font-satoshiMedium hover:border hover:border-blue-500 hover:bg-transparent hover:text-blue-500">
            Sign me up now
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default AffiliateMobile;
