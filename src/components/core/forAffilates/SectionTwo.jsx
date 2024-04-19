import React, {useMemo} from 'react';
import {easeInOut, motion} from "framer-motion";
import Link from "next/link";
import Travel from "@/components/core/shared/Travel";


const SectionTwo = () => {
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
      className="z-10 overflow-hidden relative w-full bg-[#EEEEEE] md:bg-right bg-cover font-satoshiMedium">
      <div
        className="container mx-auto md:grid grid-cols-12 gap-10 py-[100px] overflow-hidden md:relative md:z-10">
       <div className="col-span-7 hidden md:block">
          <img className="w-full object-cover object-left h-full" src="/images/dashboard.png"/>
        </div>
        <div
          className="col-span-5 px-4 md:px-0 z-50 relative flex flex-col justify-center">
          <motion.h2
            variants={headerVariant}
            initial="hidden"
            whileInView="visible"
            className="text-black leading-[1] text-[3.5rem] md:text-[4rem] font-bold"
          >
            Manage and customize services as you like
          </motion.h2>
          <motion.p
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            className="text-[16px] font-extralight py-8 text-gray-600">Discover the flexibility to curate the services showcased on your store link, empowering customers with personalized choices.</motion.p>
          <div>
            <motion.button
              variants={btnVariant}
              initial="hidden"
              whileInView="visible"
              className="flex gap-2 items-center bg-black text-[16px] text-white px-5 py-3 rounded-lg font-satoshiMedium hover:border hover:border-black hover:bg-transparent hover:text-black">
              <Link href="http://app.lyncs.africa"> Get started</Link>
            </motion.button>
          </div>
        </div>

      </div>
      </div>
  );
};

export default SectionTwo;
