import React, {useMemo} from 'react';
import {easeInOut, motion} from "framer-motion";
import SideNav from "@/components/core/shared/SideNav";
import ExploreCard from "@/components/core/shared/ExploreCard";
import TravelCard from "@/components/core/shared/TravelCard";

const Revolutionizing = ({handleIsWidgetLoading}) => {

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
    hidden: {opacity: 0, x: -450},
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

  const handleOpen = () => {
    handleIsWidgetLoading(true);
    try {
      window.LyncsWidget.open({
        key: 'a3a2d99285894aa88b4340436fb7733151cffe74dc6870c214ecc0/?isSelectOpen=true&view=view-one',
        onReady: () => {
          handleIsWidgetLoading(false);
        }
      });
    } catch (error) {
      console.error("Failed to open widget", error);
      handleIsWidgetLoading(false);
    }
  };

  return (
    <div
      className="z-10 overflow-hidden relative w-full bg-black md:bg-right bg-cover font-satoshiMedium">
      <div
        className="md:grid grid-cols-12 py-[100px] xl:pt-[160px]  md:pb-[300px] xl:pb-[350px] overflow-hidden md:relative md:z-10">
        <div
          className="md:block md:-bottom-24 hidden absolute xl:bottom-[-10rem] -right-0.5 bottom-[-10rem] w-full z-30">
          <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 265.34">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path className="cls-1"
                      d="M.17,10.74C43.4,20,87.41,29.54,125.87,51.36c49.88,28.29,86.24,81.56,141.49,99.85a115.56,115.56,0,0,0,71,.33c20.72-6.65,39.05-19,57.45-30.63,34.42-21.75,71.93-40,112.69-45.4,83.85-11.09,164.77,46.12,248.13,17.9,44.46-15,78-52.21,120.65-71.76A236.83,236.83,0,0,1,1000,1.25l-1.71,264.09H.2C.2,180.48-.23,95.6.17,10.74Z"/>
              </g>
            </g>
          </svg>

        </div>
        <div className="container mx-auto col-span-10 col-start-2 md:grid grid-cols-2">
          <div
            className="px-4 md:px-0 text-left z-50 relative flex flex-col justify-center">
            <motion.h2
              variants={headerVariant}
              initial="hidden"
              whileInView="visible"
              className="text-white font-satoshiBold text-[3rem] md:text-[4rem] xl:text-[5.5rem] md:leading-[1.4] font-semibold relative min-h-[160px]"
            >
              Revolutionizing mobility, <span className="bg-white text-black">one trip at a time</span>
            </motion.h2>
            <motion.p
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              className="md:text-[17px] text-[16px] font-extralight py-8 text-gray-400">
              From ride-sharing to flexible trip payments, experience the future of travel today.
            </motion.p>
            <div>
              <motion.button
                onClick={handleOpen}
                variants={btnVariant}
                initial="hidden"
                whileInView="visible"
                className="flex gap-2 items-center bg-white text-[16px] text-black px-5 py-3 rounded-lg font-satoshiMedium hover:border hover:border-white hover:bg-transparent hover:text-white">
                Get started
              </motion.button>
            </div>
          </div>
          <div className="flex md:gap-8 gap-4 px-4 mt-10 md:mt-0">
            <SideNav/>
            <div className="flex flex-col gap-8">
              <div className="bg-[#282A30] rounded p-4">
                <p className="md:text-[17px] text-[16px] font-extralight text-gray-400">Where are you going to
                  today?</p>
              </div>
              <motion.div
                className="h-[180px] w-[80%] bg-[#282A30] rounded p-4">
                <p className="md:text-[17px] text-[16px] font-extralight text-gray-400">Book flight</p>
                <div className="my-4 space-y-4">
                  <div className="space-y-2">
                    <p className="text-small font-extralight text-gray-400">Where from</p>
                    <div className="w-[100px] bg-[#1C1D22] h-[15px]"></div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-small font-extralight text-gray-400">Where to</p>
                    <div className="w-[100px] bg-[#1C1D22] h-[15px]"></div>
                  </div>
                </div>
              </motion.div>
              <ExploreCard/>
            </div>
            <div className="flex flex-col justify-center gap-8">
              <TravelCard/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revolutionizing;
