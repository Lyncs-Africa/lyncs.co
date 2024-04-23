import React, {useMemo} from 'react';
import {easeInOut, motion} from "framer-motion";
import Link from "next/link";

const Eat = () => {
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

  const handleOpen = () => window.LyncsWidget.open("a3a2d99285894aa88b4340436fb7733151cffe74dc6870c214ecc0")

  return (
    <div
      className="z-10 overflow-hidden relative w-full font-satoshiMedium">
      <div className="xl:block hidden absolute bottom-[-10rem] right-[-2px] w-full z-30">
        <svg fill="#F1F1F8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 265.34">
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path className="cls-1"
                    d="M.17,10.74C43.4,20,87.41,29.54,125.87,51.36c49.88,28.29,86.24,81.56,141.49,99.85a115.56,115.56,0,0,0,71,.33c20.72-6.65,39.05-19,57.45-30.63,34.42-21.75,71.93-40,112.69-45.4,83.85-11.09,164.77,46.12,248.13,17.9,44.46-15,78-52.21,120.65-71.76A236.83,236.83,0,0,1,1000,1.25l-1.71,264.09H.2C.2,180.48-.23,95.6.17,10.74Z"/>
            </g>
          </g>
        </svg>

      </div>
      <div
        className="container mx-auto md:grid grid-cols-12 py-[100px] md:py-[160px] xl:pb-[250px] overflow-hidden md:relative md:z-10">
        <div
          className="px-4 md:px-0 col-span-4 text-left col-start-2 z-50 relative flex flex-col justify-center">
          <motion.h2
            variants={headerVariant}
            initial="hidden"
            whileInView="visible"
            className="text-bold font-satoshiBold leading-[1] text-[3.5rem] md:text-[4.5rem] font-bold"
          >
            Satisfy your cravings with just a few clicks
          </motion.h2>
          <motion.p
            className="text-[18px] py-8 text-gray-800">
            Order meals online and have them delivered right to your doorstep.
          </motion.p>
          <div>
            <motion.button
              onClick={handleOpen}
              variants={btnVariant}
              initial="hidden"
              whileInView="visible"
              className="flex gap-2 items-center bg-black text-[17px] text-white px-5 py-3 rounded-lg font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black">
              <p> Get started</p>
            </motion.button>
          </div>
        </div>
        <div className="col-start-7 col-span-5">
          <img className="object-contain mt-16 md:mt-0" src="/images/man with food.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Eat;
