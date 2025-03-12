import React, {useMemo} from 'react';
import {motion} from "framer-motion";

const Steps = ({handleIsWidgetLoading}) => {
  const headerVariant = useMemo(() => window.innerWidth < 768 ? {} : {
    hidden: {opacity: 0, x: -450},
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
    <div className="z-20 relative md:-mt-32 w-full bg-black md:bg-right bg-cover font-satoshiMedium">
      <div className="md:grid grid-cols-12 pt-[100px] md:pt-[200px] overflow-md:relative md:z-10">
        <div className="container mx-auto col-span-10 md:grid grid-cols-12 flex flex-col-reverse md:flex-row">
          <div className="col-span-6 text-left z-50 relative flex flex-col justify-center">
            <div className="md:absolute hidden md:block -left-16 top-36 w-full">
              <div className="grid grid-cols-2 gap-4 max-w-[800px]">
                <div className="rounded w-full relative p-6">
                  <div className="bg-slate-600 absolute inset-0 opacity-80 rounded"/>
                  <div className="relative">
                    <p
                      className="text-[18px] font-semibold text-white leading-[1.1]">
                      Nnamdi Azikiwe International Airport, Abuja, Nigeria</p>
                    <p className="text-small font-medium text-slate-400">
                      29th Jan, 2025 12:25 PM
                    </p>
                    <hr className="border-[2px] border-slate-200 border-dashed my-4 w-full"/>
                    <p
                      className="text-[18px] font-semibold text-white leading-[1.1]">
                      Charles De Gaulle, France</p>
                    <p className="text-small font-medium text-slate-400">
                      30th Jan, 2025 6:30 AM
                    </p>
                  </div>
                </div>
                <div className="rounded w-full relative p-6">
                  <div className="bg-slate-600 absolute inset-0 opacity-80 rounded"/>
                  <div className="relative">
                    <p
                      className="text-[18px] font-semibold text-white leading-[1.1]">
                      Murtala Muhammed International Airport, Nigeria</p>
                    <p className="text-small font-medium text-slate-400">
                      10th Mar, 2025 10:45 AM
                    </p>
                    <hr className="border-[2px] border-slate-200 border-dashed my-4 w-full"/>
                    <p
                      className="text-[18px] font-semibold text-white leading-[1.1]">
                      Jomo Kenyatta, Kenya</p>
                    <p className="text-small font-medium text-slate-400">
                      10th Mar, 2025 9:25 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img alt="Lyncs affiliate img" className="" src="/images/hand.png"/>
          </div>
          <div className="px-4 md:px-0 col-span-5 col-start-8 md:block relative">
            <motion.h2
              variants={headerVariant}
              initial="hidden"
              whileInView="visible"
              className="text-white leading-[1] text-[3.5rem] md:text-[5rem] font-bold md:pt-[50px]"
            >
              How it works
            </motion.h2>
            <motion.p
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              className="md:text-[15px] text-[16px] font-extralight py-4 text-gray-500">
              Turn your audience into income by becoming an affiliate with these steps to successfully set up and start
              earning
            </motion.p>
            <div>
              <motion.button onClick={handleOpen}
                className="md:w-auto text-center md:text-left border border-blue-500 bg-blue-500 text-[16px] text-white px-8 py-3 rounded-lg font-satoshiMedium hover:border hover:border-blue-500 hover:bg-transparent hover:text-blue-500">
                Get started
              </motion.button>
            </div>
            <div className="md:absolute -bottom-10 w-full right-0 z-30 py-8 md:py-0">
              <div className="md:grid grid-cols-2 gap-4 my-4 space-y-4 md:space-y-0">
                <div className="bg-slate-600 rounded p-6">
                  <div className="bg-white w-[45px] h-[45px] rounded-full flex items-center justify-center">1</div>
                  <p className="md:text-[18px] text-[16px] leading-[1.3] font-extralight py-2 text-white">
                    Sign up  by creating an account
                  </p>
                  <p className="text-[15px] leading-[1.1] text-slate-300"> Become an official Lyncs Affiliate in minutes</p>
                </div>
                <div className="bg-slate-600 rounded p-6">
                  <div className="bg-white w-[45px] h-[45px] rounded-full flex items-center justify-center">2</div>
                  <p className="md:text-[18px] text-[16px] leading-[1.3] font-extralight py-2 text-white">
                    Book flights at lower rates
                  </p>
                  <p className="text-[15px] leading-[1.1] text-slate-300">Get exclusive discounts that regular customers don’t see.</p>
                </div>
                <div className="bg-slate-600 rounded p-6">
                  <div className="bg-white w-[45px] h-[45px] rounded-full flex items-center justify-center">3</div>
                  <p className="md:text-[18px] text-[16px] leading-[1.3] font-extralight py-2 text-white">
                    Set your price & make a profit
                  </p>
                  <p className="text-[15px] leading-[1.1] text-slate-300">You decide how much you want to charge your customers.</p>
                </div>
                <div className="bg-slate-600 rounded p-6">
                  <div className="bg-white w-[45px] h-[45px] rounded-full flex items-center justify-center">4</div>
                  <p className="md:text-[18px] text-[16px] leading-[1.3] font-extralight py-2 text-white">
                    Complete the booking
                  </p>
                  <p className="text-[15px] leading-[1.1] text-slate-300">Process the payment, confirm the booking, and cash out the difference</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
