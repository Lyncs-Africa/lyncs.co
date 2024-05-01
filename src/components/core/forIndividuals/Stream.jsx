import React, {useRef} from 'react';
import {motion, useScroll, useTransform} from "framer-motion";

const Stream = ({handleIsWidgetLoading}) => {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["0.2 1", "1.5 0.5"]
  })
  const scaleYProgress = useTransform(scrollYProgress, [0, 1], [-50, -300])
  const reverseScaleYProgress = useTransform(scrollYProgress, [0, 1], [-150, 180])

  const handleOpen = () => {
    handleIsWidgetLoading(true)
    window.LyncsWidget.open(
      {
        key: 'a3a2d99285894aa88b4340436fb7733151cffe74dc6870c214ecc0',
        path: '/streamshare',
        onReady: () => {
          handleIsWidgetLoading(false)
        }
      },
    );
  };

  return (
    <motion.div
      ref={ref}
      className="z-10 overflow-hidden relative w-full md:bg-black bg-slate-900 md:bg-right bg-cover md:min-h-[100vh] font-satoshiMedium">
      <div className="md:hidden bg-stream bg-cover bg-center opacity-40 absolute inset-0"></div>
      <div
        className="px-4 md:px-0 container py-[100px] md:py-0 mx-auto md:grid grid-cols-12 overflow-hidden md:relative md:z-10">
        <div
          className="md:pt-[50px] col-span-5 text-left col-start-2 z-50 relative flex flex-col justify-center">
          <motion.h2
            className="text-white leading-[1] text-[3.5rem] md:text-[4.5rem] font-bold"
          >
            Watch Netflix, Prime & Showmax movies for ₦3,900
          </motion.h2>
          <p
            className="md:text-[17px] text-[16px] font-extralight py-8 text-gray-400">
            Gain access to multiple streaming services for a cheaper price
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
    </motion.div>
  );
};

export default Stream;
