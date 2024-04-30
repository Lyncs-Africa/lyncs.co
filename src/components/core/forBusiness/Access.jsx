import React, {useMemo, useRef} from 'react';
import {easeInOut, motion, useScroll, useTransform} from "framer-motion";
import Link from "next/link"
import Travel from "@/components/core/forBusiness/shared/Travel";

const Access = () => {
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
  const btnVariant = useMemo(() => window.innerWidth < 768 ? {} : {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        ease: easeInOut, delay: 0.3
      }
    }
  }, [])

  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["0 0.1", "1.5 1"]
  });

  const scaleXProgress = useTransform(scrollYProgress, [0, 1], [0, -150])
  const reverseScaleXProgress = useTransform(scrollYProgress, [0, 1], [0, 150])


  return (
    <div
      className="z-10 overflow-hidden relative w-full bg-black md:bg-right bg-cover font-satoshiMedium">
      <div
        className="px-4 md:px-0 container mx-auto md:grid grid-cols-12 py-[100px] md:py-[160px] xl:pt-[100px] overflow-hidden md:relative md:z-10">
        <div
          className="col-span-4 text-left col-start-2 z-50 relative flex flex-col justify-center">
          <motion.h2
            variants={headerVariant}
            initial="hidden"
            whileInView="visible"
            className="text-white leading-[1] text-[3.5rem] md:text-[4.5rem] font-bold"
          >
            One API for everything Commerce
          </motion.h2>
          <motion.p
            className="md:text-[17px] text-[16px] font-extralight py-8 text-gray-400">
            The only API you’ll ever need to integrate a wide range of services in industries like e-commerce, travel,
            ride-sharing, food delivery, event management, and bill payment, all within your application
          </motion.p>
          <div>
            <motion.button
              variants={btnVariant}
              initial="hidden"
              whileInView="visible"
              className="flex gap-2 items-center bg-white text-[16px] text-black px-5 py-3 rounded-lg font-satoshiMedium hover:border hover:border-white hover:bg-transparent hover:text-white">
              <Link href="http://app.lyncs.africa">Get started</Link>
            </motion.button>
          </div>
        </div>
        <motion.div  ref={ref} className="col-start-7 col-span-6 grid grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="flex flex-col gap-4 justify-center">
            <motion.div
              style={window.innerWidth > 768 ? {
                translateX: scaleXProgress,
              } : {}}
              className="h-[100px] bg-[#282A30] rounded p-4">
              <p className="md:text-[17px] text-[16px] font-extralight text-gray-400">Washing & Cleaning</p>
              <div className="space-y-2 my-2">
                <div className="w-[100px] bg-[#1C1D22] h-[15px]"></div>
                <div className="hidden md:block xl:w-full bg-[#1C1D22] h-[15px]"></div>
              </div>
            </motion.div>
            <div className="h-[150px] bg-[#282A30] rounded p-4">
              <p className="md:text-[17px] text-[16px] font-extralight text-gray-400">Bills Payment</p>
              <div className="my-4 grid grid-cols-3 gap-4">
                <div className="bg-[#1C1D22] h-[15px]"></div>
                <div className="bg-[#1C1D22] h-[15px]"></div>
                <div className="bg-[#1C1D22] h-[15px]"></div>
                <div className="bg-[#1C1D22] h-[15px]"></div>
                <div className="bg-[#1C1D22] h-[15px]"></div>
                <div className="bg-[#1C1D22] h-[15px]"></div>
                <div className="bg-[#1C1D22] h-[15px]"></div>
                <div className="bg-[#1C1D22] h-[15px]"></div>
                <div className="bg-[#1C1D22] h-[15px]"></div>
              </div>
            </div>
            <motion.div
              style={window.innerWidth > 768 ? {
                translateX: scaleXProgress,
              } : {}}
              className="h-[150px] flex justify-end">
              <div className="w-[60%] bg-[#282A30] rounded p-4">
                <p className="md:text-[17px] text-[16px] font-extralight text-gray-400 leading-[1.1]">Ride Booking</p>
                <div className="relative w-full my-2">
                  <input className="pointer-events-none w-full outline-none ease transition-all py-1 px-4 text-sm rounded bg-[#1C1D22] text-black pl-11"
                                                        value=""/>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" id="search" x="0px"
                       y="0px" viewBox="0 0 24 24" className="absolute top-1.5 left-2 fill-gray-400" height="15px"
                       width="15px" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z"></path>
                    </g>
                  </svg>
                </div>
                <div className="my-4 grid grid-cols-2 gap-4">
                  <div className="bg-[#1C1D22] h-[15px]"></div>
                  <div className="bg-[#1C1D22] h-[15px]"></div>
                  <div className="bg-[#1C1D22] h-[15px] col-span-2"></div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col gap-4 justify-center">
            <div className="h-[100px] bg-[#282A30] rounded p-4">
              <p className="md:text-[17px] text-[16px] font-extralight text-gray-400">Events Booking</p>
              <div className="space-y-2 my-2">
                <div className="w-[100px] bg-[#1C1D22] h-[15px]"></div>
                <div className="xl:w-[200px] bg-[#1C1D22] h-[15px]"></div>
              </div>
            </div>
            <div className="xl:h-[50px] bg-[#282A30] rounded p-4">
              <p className="md:text-[17px] text-[16px] font-extralight text-gray-400">Good afternoon Nebechi</p>
            </div>
            <div className="xl:h-[250px] bg-[#282A30] rounded py-4 xl:py-0">
              <Travel/>
            </div>
            <div className="h-[120px] bg-[#282A30] rounded p-4">
              <p className="md:text-[17px] text-[16px] font-extralight text-gray-400">iPhone 11</p>
              <p className="text-small font-extralight text-gray-400">₦750,000</p>
              <div className="my-2 flex gap-2">
                <div className="w-[30px] h-[30px] rounded-full bg-white"></div>
                <div className="w-[30px] h-[30px] rounded-full bg-red-300"></div>
                <div className="w-[30px] h-[30px] rounded-full bg-purple-300"></div>
                <div className="hidden xl:block w-[30px] h-[30px] rounded-full bg-green-300"></div>
                <div className="hidden xl:block w-[30px] h-[30px] rounded-full bg-black"></div>
                <div className="hidden xl:block w-[30px] h-[30px] rounded-full bg-yellow-300"></div>
              </div>
            </div>
          </div>
          <div className="hidden xl:flex flex-col gap-4 justify-center">
            <motion.div
              style={window.innerWidth > 768 ? {
                translateX: reverseScaleXProgress,
              } : {}}
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
            <div
              className="h-[160px] w-[80%] bg-[#282A30] rounded p-4">
              <p className="md:text-[17px] text-[16px] font-extralight text-gray-400">Stream Share</p>
              <div className="grid grid-cols-2 gap-2 my-4">
                <div className="bg-[#1C1D22] rounded-lg p-2 flex items-center">
                  <img src="/images/showmax.svg" className="ride-logo w-full" alt="logo"/>
                </div>
                <div className="bg-[#1C1D22] rounded-lg p-2 flex items-center">
                  <img src="/images/prime-video.svg" className="ride-logo w-full" alt="logo"/>
                </div>
                <div className="col-span-2 h-[50px] bg-[#1C1D22] rounded-lg flex justify-center items-center">
                  <img src="/images/netflix.svg" className="ride-logo w-[90px]" alt="logo"/>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Access;
