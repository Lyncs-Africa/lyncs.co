import React, { useMemo } from 'react';
import { easeInOut, motion } from "framer-motion";
import Link from "next/link"

const Travel = () => {
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
    hidden: { opacity: 0, x: -450 },
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
      className="z-10 overflow-hidden relative w-full bg-white md:bg-right bg-cover font-satoshiMedium">
      <div className="xl:block hidden absolute bottom-[-5rem] w-full z-30">
        <img alt="curve" src="/images/long-curve.svg"/>
      </div>
      <div
        className="container mx-auto md:grid grid-cols-12 py-[100px] md:py-[160px] xl:pt-0 xl:pb-[250px] overflow-hidden md:relative md:z-10">
        <div
          className="md:pt-[50px] px-4 md:px-0 col-span-4 text-left col-start-2 z-50 relative flex flex-col justify-center">
          <motion.h2
            variants={headerVariant}
            initial="hidden"
            whileInView="visible"
            className="text-bold font-satoshiBold leading-[1] text-[3.5rem] md:text-[4.5rem] font-bold"
          >
            Robust APIs for ticketing
          </motion.h2>
          <motion.p
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            className="text-[18px] py-8 text-gray-800">
            We are the only API you will ever need to integarate every form of airline, bus and ride ticketing.
          </motion.p>
          <Link href="https://app.lyncs.africa/register">
            <motion.button
              variants={btnVariant}
              initial="hidden"
              whileInView="visible"
              className="flex gap-2 items-center bg-black text-[17px] text-white px-5 py-3 rounded-lg font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black">
              <p> Get started</p>
            </motion.button>
          </Link>
        </div>
        <div className="col-start-6 col-span-6 flex gap-8">
          <img src="/images/travel.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Travel;
