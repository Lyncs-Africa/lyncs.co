import { particles } from "@/lib/utils";
import React, { useMemo, useEffect } from 'react';
import { easeInOut, motion } from "framer-motion";
// import Airtime from "@/components/core/shared/Airtime";
// import Cable from "@/components/core/shared/Cable";

const BillsPayment = () => {
  useEffect(() => {
    particles()
  }, []);

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
      className="z-10 overflow-hidden relative w-full bg-black text-white md:bg-right bg-cover font-poppins py-10">

      <div className="absolute inset-0" id="particles-js"></div>
      <div
        className="container mx-auto grid grid-cols-1 md:grid-cols-12 md:pt-[50px] overflow-hidden md:relative md:z-10 gap-10 w-full">

        <div className="col-span-4 flex col-start-2">
          <img src="/images/mockup.gif" className="h-full w-[300px]" />
        </div>

        <div
          className=" px-4 md:px-0 col-span-6 text-left relative flex flex-col justify-center">
          <motion.h2
            variants={headerVariant}
            initial="hidden"
            whileInView="visible"
            className="leading-[1] text-[3.5rem] md:text-[4.5rem] font-bold"
          >
            API for everything Commerce
          </motion.h2>
          <motion.p
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            className="text-[15px] py-8 font-normal">
            The only API you’ll ever need to integrate a wide range of services in industries like e-commerce, travel, ride-sharing, food delivery, event management, and bill payment, all within your application
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