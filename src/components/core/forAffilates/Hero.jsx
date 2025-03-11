import React from 'react';
import {motion} from "framer-motion";
import AffiliateMobile from "@/components/core/responsive/AffiliateMobile";

const Hero = ({handleIsWidgetLoading}) => {
  const handleOpen = () => {
    handleIsWidgetLoading(true);
    window.LyncsWidget.open({
      key: 'a3a2d99285894aa88b4340436fb7733151cffe74dc6870c214ecc0',
      path: '/affiliates',
      onReady: () => {
        handleIsWidgetLoading(false)
      },
    });
  };

  return (
    <div className="z-30 relative w-full font-satoshiMedium">
      <div
        className="hidden mx-auto px-4 md:px-0 md:grid grid-cols-12 md:relative md:z-10 gap-8 md:gap-0">
        <div className='container mx-auto col-span-11 col-start-2 md:grid grid-cols-12'>
          <div
            className="col-span-8 max-w-4xl flex flex-col justify-center relative py-[100px] xl:pt-[160px] xl:pb-[22rem]">
            <motion.h2
              className="text-black leading-[1.3] text-[3.5rem] md:text-[6rem] font-bold"
            >
              Unlock Cheap Flights, <span className="bg-black text-white">Earn Big!</span>
            </motion.h2>
            <p
              className="md:text-[17px] text-[16px] font-extralight py-8 text-gray-600">
              Join our affiliate program, get exclusive flight discounts, and earn money with every booking. No hidden
              fees, no stress—just smart travel and extra income!
            </p>
            <div>
              <motion.button onClick={handleOpen}
                className="md:w-auto text-center md:text-left border border-blue-500 bg-blue-500 text-[16px] text-white px-8 py-3 rounded-lg font-satoshiMedium hover:border hover:border-blue-500 hover:bg-transparent hover:text-blue-500">
                Sign me up now
              </motion.button>
              <div className="absolute bottom-32 -right-72 opacity-10">
                <img className="w-[300px]" src="/images/logos/dark%20blue%20icon@4x.png"/>
              </div>
              <div className="absolute top-0 -left-72 opacity-10">
                <img className="w-[300px]" src="/images/logos/dark%20blue%20icon@4x.png"/>
              </div>
            </div>

          </div>
          <div
            className="col-span-4 w-full bg-[url('/images/102.jpg')] py-[100px] px-10 pt-[50px] mx-auto bg-cover rounded-b bg-center text-left z-50 relative">
            <div className="absolute inset-0 bg-slate-900 opacity-70 rounded-b"/>
            <img className="animate-wide duration-700 w-64 h-64 object-contain -ml-12 mt-20" src="/images/airline.png"/>

          </div>

        </div>
      </div>
      <AffiliateMobile handleOpen={handleOpen}/>
    </div>
  );
};

export default Hero;
