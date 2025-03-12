import React, {useMemo} from 'react';
import {easeInOut, motion} from "framer-motion";


const SectionTwo = () => {
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
      className="z-10 overflow-hidden relative w-full bg-white md:bg-right bg-cover font-satoshiMedium">
      <div
        className="container mx-auto md:grid grid-cols-12 gap-10 py-[100px] md:py-[160px] overflow-hidden md:relative md:z-10">
        <div className="col-start-2 col-span-10 px-4 md:px-0">
          <motion.h2
            className="text-black leading-[1] text-[3.5rem] md:text-[5rem] font-bold max-w-4xl"
          >
            Unlock Exclusive Deals, Earn More
          </motion.h2>
          <p className="md:text-[17px] text-[16px] py-5 text-slate-500">
            Why join? What’s in It for you?
          </p>
          <div className="md:grid grid-cols-9 gap-4 md:max-w-[90%] space-y-4 md:space-y-0">
            <div className="space-y-4 col-span-2">
              <div className="bg-[url('/images/101.jpg')] bg-cover bg-center min-h-[200px] rounded relative p-6">
                <div className="absolute inset-0 bg-slate-800 opacity-70 rounded"/>
                <div className="relative">
                  <p className="text-white text-[20px] font-semibold">Get best deals</p>
                  <p className="text-slate-200 text-[14px] leading-[1.1]">Get flights at a lower price than the public sees.</p>
                </div>
              </div>
              <div className="bg-[url('/images/20.jpg')] bg-cover bg-center min-h-[200px] rounded relative p-6">
                <div className="absolute inset-0 bg-slate-800 opacity-70 rounded"/>
                <div className="relative">
                  <p className="text-white text-[20px] font-semibold">Refer and earn</p>
                  <p className="text-slate-200 text-[14px] leading-[1.1]"> Get paid for every successful affiliate referral </p>
                </div>
              </div>
            </div>
            <div className="bg-[url('/images/6.jpg')] bg-cover bg-bottom min-h-[200px] rounded relative col-span-3 p-6">
              <div className="absolute inset-0 bg-slate-800 opacity-80 rounded"/>
              <div className="relative">
                <p className="text-white text-[28px] font-semibold">Personalize flight tickets</p>
                <p className="text-slate-200 text-[14px] leading-[1.1]">Customize flight tickets with your logo and make it look like they came straight from your business.</p>
              </div>
            </div>
            <div className="space-y-4 col-span-4">
              <div className="bg-[url('/images/bg-affilates.jpg')] bg-cover bg-center min-h-[200px] rounded md:w-[60%] p-6 relative">
                <div className="absolute inset-0 bg-slate-800 opacity-70 rounded"/>
               <div className="relative">
                 <p className="text-white text-[20px] font-semibold">Hassle-free refunds</p>
                 <p className="text-slate-200 text-[14px] leading-[1.1]">Enjoy a clear and fair refund policy that ensures you and your customers are always covered.</p>
               </div>
              </div>
              <div className="bg-[url('/images/2.jpg')] bg-cover bg-center min-h-[200px] rounded relative p-6">
                <div className="absolute inset-0 bg-slate-800 opacity-60 rounded"/>
                <div className="relative">
                  <p className="text-white text-[20px] font-semibold">Leaderboards with perks</p>
                  <p className="text-slate-200 text-[14px] leading-[1.1]">Top the leaderboard and unlock exclusive gifts for your achievements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
