import { particles } from "@/lib/utils";
import React, { useMemo, useEffect } from 'react';
import { easeInOut, motion } from "framer-motion";
import ImageSwitcher from "@/components/ImageSwitcher";
import Link from "next/link";
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
      className="z-10 overflow-hidden relative  w-full bg-black text-white md:bg-right bg-cover px-5 md:px-0 py-20 md:py-10">

      {/* <div className="absolute inset-0" id="particles-js"></div> */}

      <div
        className="md:container md:mx-auto grid grid-cols-1 md:grid-cols-12 py-[20px] md:py-[50px] overflow-hidden md:relative gap-28 md:gap-10 w-full justify-start items-center">

        <motion.div
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
          className="md:col-span-3 flex md:col-start-2 md:m-0">
          <ImageSwitcher />
        </motion.div>

        <div
          className="px-0 sm:px-4 md:px-0 md:col-span-6 text-left relative flex flex-col justify-center text-white">
          <motion.h2
            variants={headerVariant}
            initial="hidden"
            whileInView="visible"
            className="leading-[1] text-[4rem] font-satoshiMedium md:text-[5rem] font-bold text-left"
          >
            Embed AI <br />powered<br /> food ordering
          </motion.h2>
          <motion.p
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            className="md:text-[17px] text-[16px] font-extralight py-8 text-gray-400">
            We are the only API you will ever need to integarate every form of airline, <br/> bus and ride ticketing.
          </motion.p>
          <div>
            <motion.button
              variants={btnVariant}
              initial="hidden"
              whileInView="visible"
              className="flex gap-2 items-center bg-white text-[16px] text-black px-5 py-3 rounded-lg font-satoshiMedium hover:border hover:border-white hover:bg-transparent hover:text-white">
              <Link href="http://app.lyncs.africa"> Get started</Link>
            </motion.button>
          </div>
        </div>

      </div>
    </div>

  );
};

export default BillsPayment;