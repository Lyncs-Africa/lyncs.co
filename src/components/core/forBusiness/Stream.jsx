import React, {useRef} from 'react';
import {motion, useScroll, useTransform} from "framer-motion";
import Link from "next/link";

const Stream = () => {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["0.2 1", "1.5 0.5"]
  })
  const scaleYProgress = useTransform(scrollYProgress, [0, 1], [-50, -300])
  const reverseScaleYProgress = useTransform(scrollYProgress, [0, 1], [-150, 180])

  return (
    <motion.div
      ref={ref}
      className="z-10 overflow-hidden relative w-full md:bg-black bg-slate-900 md:bg-right bg-cover min-h-[100vh] font-satoshiMedium">
      <div className="md:hidden bg-stream bg-cover bg-center opacity-40 absolute inset-0"></div>
      <div className="px-4 md:px-0 py-[100px] md:py-0 md:grid grid-cols-12 overflow-hidden md:relative md:z-10">
        <div className="col-start-2 col-span-10 md:grid grid-cols-12 container mx-auto">
          <div
            className="md:pt-[50px] col-span-5 text-left z-50 relative flex flex-col justify-center">
            <motion.h2
              className="text-white leading-[1] text-[3.5rem] md:text-[4.5rem] font-bold"
            >
              API to bundle Netflix, Prime & Showmax in one place
            </motion.h2>
            <p
              className="md:text-[17px] text-[16px] font-extralight py-8 text-gray-400">
              We are the only API you will ever need to integarate every form of airline, bus and ride ticketing.
            </p>
            <div className="my-4">
              <motion.button
                className="flex gap-2 items-center bg-white text-[16px] text-black px-5 py-3 rounded-lg font-satoshiMedium hover:border hover:border-white hover:bg-transparent hover:text-white">
                <Link href="http://app.lyncs.africa"> Get started</Link>
              </motion.button>
            </div>
          </div>
          <div
            className="hidden col-start-7 col-span-6 md:relative md:w-[80%] mt-10 md:mt-0 md:flex justify-center gap-4 md:flex-row flex-col">
            <motion.div
              style={window.innerWidth > 768 ? {
                translateY: scaleYProgress,
              } : {}}
              transition={{type: "spring", stiffness: 80}}
              className="flex flex-col gap-5"
            >
              <div
                className="bg-[url('/images/stream-share/ebuka.png')] bg-cover min-h-[200px] md:w-[200px] rounded-lg relative">
                <div className="bg-slate-900 opacity-60 absolute inset-0"></div>
              </div>
              <div
                className="bg-[url('/images/stream-share/reacher.png')] bg-cover bg-top min-h-[200px] md:w-[200px] rounded-lg relative">
                <div className="bg-slate-900 opacity-60 absolute inset-0"></div>
              </div>
              <div
                className="bg-[url('/images/stream-share/breath-of-life.png')] bg-cover bg-bottom min-h-[200px] md:w-[200px] rounded-lg relative">
                <div className="bg-slate-900 opacity-60 absolute inset-0"></div>
              </div>
              <div
                className="bg-[url('/images/stream-share/real-housewives.jpg')] bg-cover min-h-[200px] md:w-[200px] rounded-lg relative">
                <div className="bg-slate-900 opacity-60 absolute inset-0"></div>
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
                className="bg-[url(/images/stream-share/afamefuna.jpg')] bg-cover min-h-[200px] w-[200px] rounded-lg relative">
                <div className="bg-slate-900 opacity-60 absolute inset-0"></div>
              </div>
              <div
                className="bg-[url('/images/stream-share/far-from-home.jpg')] bg-cover bg-center min-h-[200px] w-[200px] rounded-lg relative">
                <div className="bg-slate-900 opacity-60 absolute inset-0"></div>
              </div>
              <div
                className="bg-[url('/images/stream-share/afamefuna.jpg')] bg-cover min-h-[200px] w-[200px] rounded-lg relative">
                <div className="bg-slate-900 opacity-60 absolute inset-0"></div>
              </div>
              <div
                className="bg-[url('/images/stream-share/wura.jpg')] bg-cover min-h-[200px] w-[200px] rounded-lg relative -mb-10">
                <div className="bg-slate-900 opacity-60 absolute inset-0"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Stream;
