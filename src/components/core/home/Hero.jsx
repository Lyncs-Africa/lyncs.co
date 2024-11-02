import React, {useEffect, useMemo, useRef} from 'react';
import {easeInOut, motion} from "framer-motion";
import Link from "next/link"
import SideNav from "@/components/core/shared/SideNav";
import Shop from "@/components/core/shared/Shop";
import StreamShare from "@/components/core/shared/StreamShare";
import Travel from "@/components/core/shared/Travel";
import Typed from "typed.js";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Book flights,",
        "Stream share,",
        "Shop online,",
        "Buy data,",
        "Buy airtime,",
        "Pay for cleaning,",
        "Pay for laundry,",
        "Pay for rides,",
        "Buy bus tickets,",
        "Buy courses,",
        "Pay for meals,",
        "Book hotels",
        "Pay for events,",
      ],
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 3000,
      smartBackspace: true,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

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

  return (
    <div
      className="z-10 overflow-hidden relative w-full bg-black md:bg-right bg-cover font-satoshiMedium">
      <div
        className="md:grid grid-cols-12 py-[100px] xl:py-[160px] overflow-hidden md:relative md:z-10">
        <div className="container mx-auto col-span-10 col-start-2 md:grid grid-cols-2">
        <div
          className="px-4 md:px-0 text-left z-50 relative flex flex-col justify-center">
          <motion.h2
            variants={headerVariant}
            initial="hidden"
            whileInView="visible"
            className="text-blue-300 font-satoshiBold text-[4rem] md:text-[5.5rem] leading-[1.1] font-semibold relative min-h-[160px]"
          >
            <span
              className={`text-white min-h-[100px] relative bg-clip-text after:inline after:text-blue-500 w-max text-left`}>
           Don't just
            </span>
            <p className="min-h-[125px] md:min-h-0">
            <span ref={el}
                  className={`from-[#00AFEF] to-blue-500 bg-gradient-to-r text-transparent min-h-[100px] relative bg-clip-text after:inline after:text-blue-500 w-max text-left`}
            >
            Book flight tickets,
            </span>
            </p>
            <span
              className={`text-white min-h-[100px] relative bg-clip-text after:inline after:text-blue-500 w-max text-left`}>
           Go and prosper
            </span>
          </motion.h2>
          <motion.p
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            className="md:text-[17px] text-[16px] font-extralight py-8 text-gray-400">Access a range of services, all in
            one place
          </motion.p>
          <div>
            <motion.button
              onClick={() => window.location.href = "#for"}
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
          <div className="flex flex-col gap-8 pt-[30px]">
            <div className="bg-[#282A30] rounded p-4">
              <p className="md:text-[17px] text-[16px] font-extralight text-gray-400">Good afternoon Nebechi</p>
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
            <motion.div
              className="h-[150px] flex">
              <div className="w-full bg-[#282A30] rounded p-4">
                <p className="md:text-[17px] text-[16px] font-extralight text-gray-400 leading-[1.1]">Bus ticketing</p>
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
          <div className="flex flex-col justify-center gap-8">
            <Travel/>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
