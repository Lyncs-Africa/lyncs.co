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
    <motion.div
      ref={ref}
      className="z-10 overflow-hidden relative w-full bg-black md:bg-right bg-cover md:min-h-[100vh] font-satoshiMedium">
      <div
        className="px-4 md:px-0 py-[100px] md:py-0 mx-auto md:grid grid-cols-12 overflow-hidden md:relative md:z-10">
        <div className="container mx-auto col-span-10 col-start-2 md:grid grid-cols-12">
          <div
            className="md:pt-[50px] col-span-5 text-left z-50 relative flex flex-col justify-center">
            <motion.h2
              className="text-white leading-[1] text-[3.5rem] md:text-[4.5rem] font-bold"
            >
             Hear what people are saying about us at Lyncs
            </motion.h2>
            <p
              className="md:text-[17px] text-[16px] font-extralight py-8 text-gray-400">
              Our customers' journeys start with trust, ease, and savings. Explore real stories about how we make travel simple and enjoyable!
            </p>
            <div className="my-4">
              <motion.button
                onClick={handleOpen}
                className="flex gap-2 items-center bg-white text-[16px] text-black px-5 py-3 rounded-lg font-satoshiMedium hover:border hover:border-white hover:bg-transparent hover:text-white">
                Get started
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
                className="bg-[#282A30] bg-cover min-h-[200px] md:w-[200px] rounded-lg relative p-4">
                <p className="text-white text-md">I was impressed by the variety of choices available! I could pick the flight with my preference, and everything was just as expected. Great experience!</p>
                <Ratings value={4.5}/>
              </div>
              <div
                className="bg-[#282A30] bg-cover bg-top min-h-[200px] md:w-[200px] rounded-lg relative p-4">
                <p className="text-white text-md">I got an incredible rate on my flight ticket, and the booking process was so smooth. Their customer service even followed up to make sure everything went well—above and beyond</p>
                <Ratings value={4.5}/>
              </div>
              <div
                className="bg-[#282A30] bg-cover bg-bottom min-h-[200px] md:w-[200px] rounded-lg relative p-4">
                <p className="text-white text-md">I loved the user-friendly site and clear options. Customer support was amazing, making sure I had everything I needed for a smooth trip!</p>
                <Ratings value={4.5}/>
              </div>
              <div
                className="bg-[#282A30] bg-cover md:w-[200px] rounded-lg relative p-4">
                <p className="text-white text-md">Effortless booking with unbeatable rates! I booked a bus for a cross-country trip, and it was fast, simple, and stress-free</p>
                <Ratings value={5}/>
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
                className="bg-[#282A30] bg-cover w-[200px] rounded-lg relative p-4">
                <p className="text-white text-md">This site made it so easy to find flights that fits my budget and schedule. The entire process was smooth from booking to boarding!</p>
                <Ratings value={5}/>
              </div>
              <div
                className="bg-[#282A30] bg-cover bg-center min-h-[200px] w-[200px] rounded-lg relative p-4">
                <p className="text-white text-md">The entire journey from browsing deals to booking my seat was flawless. Plus, the support team was quick to answer my questions. I’ll definitely be using this service again!</p>
                <Ratings value={4.5}/>
              </div>
              <div
                className="bg-[#282A30] bg-cover min-h-[200px] w-[200px] rounded-lg relative p-4">
                <p className="text-white text-md">The filtering options were a lifesaver! I could easily compare buses based on amenities and departure times. My go-to for travel now!</p>
                <Ratings value={4.5}/>
              </div>
              <div
                className="bg-[#282A30] bg-cover min-h-[200px] w-[200px] rounded-lg relative -mb-10 p-4">
                <p className="text-white text-md">Great service and affordable prices! I managed to find the perfect bus for my last-minute trip with no hassle. Highly recommend</p>
              <Ratings value={5}/>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Stream;
