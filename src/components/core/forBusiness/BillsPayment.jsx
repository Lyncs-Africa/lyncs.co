import React, {useMemo} from 'react';
import {easeInOut, motion} from "framer-motion";
import CabHailing from "@/components/core/shared/CabHailing";
import Link from "next/link";

const BillsPayment = () => {
  const headerVariant = useMemo(() => window.innerWidth < 768 ? {} : {
    hidden: {opacity: 0, x: 450},
    visible: {
      opacity: 1, x: 0,
      transition: {
        type: 'spring',
        stiffness: 50
      }
    }
  }, [])
  const textVariant = useMemo(() => window.innerWidth < 768 ? {} : {
    hidden: {opacity: 0, x: 450},
    visible: {
      opacity: 1, x: 0,
      transition: {
        type: 'spring', stiffness: 50, delay: 0.2
      }
    }
  }, [])
  const btnVariant = useMemo(() => window.innerWidth < 768 ? {} : {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        ease: easeInOut, delay: 0.3
      }
    }
  }, [])

  return (
    <div
      className="z-10 overflow-hidden relative bg-[#0C0E1A] w-full text-white md:bg-right bg-cover px-5 md:px-0 py-20 md:py-10 font-satoshiMedium">

      <div className="animate-wide absolute w-full left-0 top-0 opacity-[0.04]">
        <img src="/images/mocks.png"/>
      </div>
      <div
        className="container mx-auto md:grid grid-cols-12 py-[100px] xl:pb-[160px] overflow-hidden md:relative md:z-10">

        <div
          className="px-4 md:px-0 col-span-4 text-left col-start-2 z-50 relative flex flex-col justify-center">
          <motion.h2
            variants={headerVariant}
            initial="hidden"
            whileInView="visible"
            className="text-white leading-[1] text-[3.5rem] md:text-[4.5rem] font-bold"
          >
            Robust API for cab hailing
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

        <div
          className="col-start-7 col-span-6 flex md:gap-8 gap-4 px-4 mt-10 md:mt-0">
          <CabHailing/>
        </div>

      </div>
    </div>

  );
};

export default BillsPayment;