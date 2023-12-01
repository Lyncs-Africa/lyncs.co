import React, { useMemo } from 'react';
import { easeInOut, motion } from "framer-motion";
import Link from "next/link"
import SideNav from "@/components/core/shared/SideNav";
import Shop from "@/components/core/shared/Shop";
import Ride from "@/components/core/shared/Ride";
import Travel from "@/components/core/shared/Travel";

const Access = () => {
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
      className="z-10 overflow-hidden relative w-full bg-black md:bg-right bg-cover min-h-[100vh] font-satoshiMedium">
      <div
        className="container mx-auto md:grid grid-cols-12 py-[100px] xl:pb-[160px] overflow-hidden md:relative md:z-10">
        <div
          className="md:pt-[50px] px-4 md:px-0 col-span-4 text-left col-start-2 z-50 relative flex flex-col justify-center">
          <motion.h2
            variants={headerVariant}
            initial="hidden"
            whileInView="visible"
            className="text-white leading-[1] text-[3.5rem] md:text-[4.5rem] font-bold"
          >
            One API for everything Commerce
          </motion.h2>
          <motion.p
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            className="text-[18px] font-normal py-8 text-gray-200">
            The only API you’ll ever need to integrate a wide range of services in industries like e-commerce, travel, ride-sharing, food delivery, event management, and bill payment, all within your application
          </motion.p>
          <div>
            <motion.button
              variants={btnVariant}
              initial="hidden"
              whileInView="visible"
              className="flex gap-2 items-center bg-white text-[17px] text-black px-5 py-3 rounded-lg font-satoshiMedium hover:border hover:border-white hover:bg-transparent hover:text-white">
              <Link href="http://app.lyncs.africa"> Get started</Link>
            </motion.button>
          </div>
        </div>
        <div className="col-start-7 col-span-6 flex md:gap-8 gap-4 px-4 mt-10 md:mt-0">
          <SideNav />
          <div className="flex flex-col gap-8">
            <Shop />
            <Ride />
          </div>
          <div className="flex flex-col justify-center gap-8">
            <Travel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Access;