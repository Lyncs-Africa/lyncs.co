import { particles } from "@/lib/utils";
import React, { useMemo, useEffect } from 'react';
import { easeInOut, motion } from "framer-motion";
// import Airtime from "@/components/core/shared/Airtime";
// import Cable from "@/components/core/shared/Cable";

const BillsPayment = () => {
  // useEffect(() => {
  //   particles()
  // }, []);

  const headerVariant = useMemo(() => window.innerWidth < 768 ? {} : {
    hidden: { opacity: 0, x: 450 },
    visible: {
      opacity: 1, x: 0,
      transition: {
        type: 'spring',
        stiffness: 50
      }
    }
  }, [])
  const textVariant = useMemo(() => window.innerWidth < 768 ? {} : {
    hidden: { opacity: 0, x: 450 },
    visible: {
      opacity: 1, x: 0,
      transition: {
        type: 'spring', stiffness: 50, delay: 0.2
      }
    }
  }, [])
  const btnVariant = useMemo(() => window.innerWidth < 768 ? {} : {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ease: easeInOut, delay: 0.3
      }
    }
  }, [])

  return (
    <div
      className="z-10 overflow-hidden relative w-full bg-[#F4F6F8] md:bg-right bg-cover font-poppins py-10">

      {/* <div className="absolute inset-0" id="particles-js"></div> */}

      <div
        className="container mx-auto grid grid-cols-1 md:grid-cols-12 md:py-[150px] overflow-hidden md:relative md:z-10 gap-10 sm:gap-0 w-full">

        <div className="col-span-4 flex col-start-2">
          <img src="/images/mockup.gif" className="w-[0px]" />
        </div>

        <div
          className="px-4 md:px-0 col-span-6 text-left relative flex flex-col justify-center">
          <motion.h2
            variants={headerVariant}
            initial="hidden"
            whileInView="visible"
            className="leading-[1] text-[3.5rem] md:text-[5rem] font-bold"
          >
            Embed AI <br />powered<br /> food ordering
          </motion.h2>
          <motion.p
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            className="text-[20px] py-8 font-normal">
            We are the only API you will ever need to integarate every form of airline, bus and ride ticketing.
          </motion.p>
          <div>
            <motion.button
              variants={btnVariant}
              initial="hidden"
              whileInView="visible"
              className="flex gap-2 items-center bg-blue-600 text-[17px] text-white px-10 py-2 rounded-lg font-dmSans hover:bg-blue-600">
              <p> Get started</p>
            </motion.button>
          </div>
        </div>

      </div>
    </div>

  );
};

export default BillsPayment;