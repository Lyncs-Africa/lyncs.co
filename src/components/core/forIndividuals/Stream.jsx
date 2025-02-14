import React, {useRef} from 'react';
import {motion, useScroll, useTransform} from "framer-motion";
import Ratings from "@/components/global/Ratings";

const Stream = ({handleIsWidgetLoading}) => {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["0.2 1", "1.5 0.5"]
  })
  const scaleYProgress = useTransform(scrollYProgress, [0, 1], [-50, -300])
  const reverseScaleYProgress = useTransform(scrollYProgress, [0, 1], [-150, 180])

  const handleOpen = () => {
    handleIsWidgetLoading(true);
    try {
      window.LyncsWidget.open({
        key: 'a3a2d99285894aa88b4340436fb7733151cffe74dc6870c214ecc0',
        path: '/flights/local-flight',
        onReady: () => {
          handleIsWidgetLoading(false);
        }
      });
    } catch (error) {
      console.error("Failed to open widget", error);
      handleIsWidgetLoading(false); // Ensure loading state is reset in case of error
    }
  };

  const handleWait= (service) => {
    handleIsWidgetLoading(true)
    window.LyncsWidget.open(
      {
        key: 'a3a2d99285894aa88b4340436fb7733151cffe74dc6870c214ecc0',
        path: `/waitlist/?service=${service}&launchDate=2025-04-01T00:00:00`,
        onReady: () => {
          handleIsWidgetLoading(false)
        }
      },
    );
  };

  return (
    <motion.div
      ref={ref}
      className="z-10 overflow-hidden relative w-full bg-white md:bg-right bg-cover font-satoshiMedium">
      <div
        className="px-4 md:px-0 py-[100px] md:py-0 mx-auto md:grid grid-cols-12 overflow-hidden md:relative md:z-10">
        <div className="container mx-auto col-span-10 col-start-2 md:grid grid-cols-12">
          <div
            className="md:pt-[50px] col-span-5 text-left z-50 relative flex flex-col justify-center">
            <motion.h2
              className="text-black leading-[1] text-[3.5rem] md:text-[5rem] font-bold"
            >
              Everyone needs<br/> a break
              <br/>
              <span className="text-white bg-black md:leading-[1.3]">But why do <br/>you travel ?</span>
            </motion.h2>
            <p
              className="md:text-[17px] text-[16px] font-extralight py-8 text-gray-600">
              Whether it’s work, play, or escape—book now, pay in installments.
            </p>
            <div className="my-4">
              <motion.button
                onClick={handleOpen}
                className="flex gap-2 items-center bg-black text-[16px] text-white px-5 py-3 rounded-lg font-satoshiMedium hover:border hover:border-black hover:bg-transparent hover:text-black">
                Book a trip now
              </motion.button>
            </div>
          </div>
          <div
            className="col-start-7 col-span-6 md:relative md:w-[80%] mt-10 md:mt-0 md:flex justify-center gap-4 md:flex-row flex-col">
            <motion.div
              style={window.innerWidth > 768 ? {
                translateY: scaleYProgress,
              } : {}}
              transition={{type: "spring", stiffness: 80}}
              className="flex flex-col gap-5"
            >
              <div
                className="bg-slate-800 bg-cover bg-bottom min-h-[150px] md:min-h-[200px] md:w-[200px] rounded-lg relative p-4">
                <div
                  className="absolute bg-[url('/images/locations/cross-river.jpeg')] inset-0 bg-cover rounded-lg opacity-30"></div>
                <div className="absolute left-0 bottom-0 rounded-t-lg w-full p-3">
                  <div className="inset-0 absolute bg-white rounded-t-lg opacity-20"></div>
                  <p className="text-white text-md relative text-center z-10">Cross River, Nigeria</p>
                </div>
              </div>
              <div
                className="bg-slate-800 bg-cover bg-bottom md:min-h-[200px] min-h-[150px] md:w-[200px] rounded-lg relative p-4">
                <div
                  className="absolute bg-[url('/images/locations/warri.jpeg')] inset-0 bg-cover rounded-lg opacity-30"></div>
                <div className="absolute left-0 bottom-0 rounded-t-lg w-full p-3">
                  <div className="inset-0 absolute bg-white rounded-t-lg opacity-20"></div>
                  <p className="text-white text-md relative text-center z-10">Warri, Nigeria</p>
                </div>
              </div>
              <div
                className="bg-slate-800 bg-cover bg-bottom min-h-[150px] md:min-h-[200px] md:w-[200px] rounded-lg relative p-4">
                <div
                  className="absolute bg-[url('/images/locations/abuja.jpg')] inset-0 bg-cover rounded-lg opacity-30"></div>
                <div className="absolute left-0 bottom-0 rounded-t-lg w-full p-3">
                  <div className="inset-0 absolute bg-white rounded-t-lg opacity-20"></div>
                  <p className="text-white text-md relative text-center z-10">Abuja, Nigeria</p>
                </div>
              </div>
              <div
                className="bg-slate-800 bg-cover bg-bottom min-h-[150px] md:w-[200px] rounded-lg relative p-4">
                <div
                  className="absolute bg-[url('/images/locations/lagos.jpg')] inset-0 bg-cover rounded-lg opacity-30"></div>
                <div className="absolute left-0 bottom-0 rounded-t-lg w-full p-3">
                  <div className="inset-0 absolute bg-white rounded-t-lg opacity-20"></div>
                  <p className="text-white text-md relative text-center z-10">Lagos, Nigeria</p>
                </div>
              </div>

            </motion.div>
            <motion.div
              style={window.innerWidth > 768 ? {
                translateY: reverseScaleYProgress,
              } : {}}
              transition={{type: "spring", stiffness: 80}}
              className="hidden md:flex flex-col gap-5"
            >
              <div
                className="bg-slate-800 bg-cover bg-bottom min-h-[200px] md:w-[200px] rounded-lg relative p-4">
                <div
                  className="absolute bg-[url('/images/locations/london.jpg')] inset-0 bg-cover rounded-lg opacity-30"></div>
                <div className="absolute left-0 bottom-0 rounded-t-lg w-full p-3">
                  <div className="inset-0 absolute bg-white rounded-t-lg opacity-20"></div>
                  <p className="text-white text-md relative text-center z-10">London, Uk</p>
                </div>
              </div>
              <div
                className="bg-slate-800 bg-cover bg-bottom min-h-[150px] md:w-[200px] rounded-lg relative p-4">
                <div
                  className="absolute bg-[url('/images/locations/paris.jpg')] inset-0 bg-cover rounded-lg opacity-30"></div>
                <div className="absolute left-0 bottom-0 rounded-t-lg w-full p-3">
                  <div className="inset-0 absolute bg-white rounded-t-lg opacity-20"></div>
                  <p className="text-white text-md relative text-center z-10">Paris France</p>
                </div>
              </div>
              <div
                className="bg-slate-800 bg-cover bg-bottom min-h-[180px] md:w-[200px] rounded-lg relative p-4">
                <div
                  className="absolute bg-[url('/images/locations/toronto.jpg')] inset-0 bg-cover rounded-lg opacity-30"></div>
                <div className="absolute left-0 bottom-0 rounded-t-lg w-full p-3">
                  <div className="inset-0 absolute bg-white rounded-t-lg opacity-20"></div>
                  <p className="text-white text-md relative text-center z-10">Toronto, Canada</p>
                </div>
              </div>
              <div
                className="bg-slate-800 bg-cover bg-bottom min-h-[200px] md:w-[200px] rounded-lg relative p-4">
                <div
                  className="absolute bg-[url('/images/locations/accra.jpg')] inset-0 bg-cover rounded-lg opacity-30"></div>
                <div className="absolute left-0 bottom-0 rounded-t-lg w-full p-3">
                  <div className="inset-0 absolute bg-white rounded-t-lg opacity-20"></div>
                  <p className="text-white text-md relative text-center z-10">Accra, Ghana</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Stream;
