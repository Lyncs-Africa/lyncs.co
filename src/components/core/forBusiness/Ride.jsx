import React, {useMemo} from 'react';
import {easeInOut, motion} from "framer-motion";
import CabHailing from "@/components/core/shared/CabHailing";
import Link from "next/link";

const Ride = ({handleIsWidgetLoading}) => {
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

  const handleWait= (service) => {
    handleIsWidgetLoading(true)
    window.LyncsWidget.open(
      {
        key: 'a3a2d99285894aa88b4340436fb7733151cffe74dc6870c214ecc0',
        path: `/waitlist/?service=${service}&launchDate=2025-01-01T00:00:00`,
        onReady: () => {
          handleIsWidgetLoading(false)
        }
      },
    );
  };

  return (
    <div
      className="z-10 overflow-hidden relative bg-[#0C0E1A] w-full text-white md:bg-right bg-cover px-5 md:px-0 py-20 md:py-10 font-satoshiMedium">

      <div className="animate-wide absolute w-full left-0 top-0 opacity-[0.04]">
        <img src="/images/mocks.png"/>
      </div>
      <div
        className="md:grid grid-cols-12 md:py-[100px] xl:pb-[160px] overflow-hidden md:relative md:z-10">
        <div className="container mx-auto col-start-2 col-span-10 md:grid grid-cols-12">
          <div
            className="px-4 md:px-0 col-span-5 text-left z-50 relative flex flex-col justify-center">
            <motion.h2
              variants={headerVariant}
              initial="hidden"
              whileInView="visible"
              className="text-white leading-[1.1] text-[3.5rem] md:text-[5rem] font-bold"
            >
              Simplifying mobility, one journey at a time
            </motion.h2>
            <motion.p
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              className="md:text-[17px] text-[16px] font-extralight py-8 text-gray-400">
              Experience the ease of booking, travel, and support in one streamlined platform.
            </motion.p>
            <div>
              <motion.button
                onClick={() => handleWait('ride sharing')}
                variants={btnVariant}
                initial="hidden"
                whileInView="visible"
                className="flex gap-2 items-center bg-white text-[16px] text-black px-5 py-3 rounded-lg font-satoshiMedium hover:border hover:border-white hover:bg-transparent hover:text-white">
                Get started
              </motion.button>
            </div>
          </div>
          <div
            className="col-start-7 col-span-6 flex md:gap-8 gap-4 px-4 mt-10 md:mt-0">
            <CabHailing/>
          </div>

        </div>
      </div>
    </div>

  );
};

export default Ride;
