import React, {useMemo} from 'react';
import {easeInOut, motion} from "framer-motion";

const Steps = () => {
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

  return (
    <div className="z-10 overflow-hidden relative w-full bg-white md:bg-right bg-cover font-satoshiMedium">
      <div className="md:grid grid-cols-12 pt-[100px] overflow-hidden md:relative md:z-10">
        <div className="container mx-auto col-span-10 md:grid grid-cols-12 col-start-2">
          <div className="px-4 md:px-0 col-span-5 text-left z-50 relative flex flex-col justify-center">
            <motion.h2
              variants={headerVariant}
              initial="hidden"
              whileInView="visible"
              className="text-black leading-[1] text-[3.5rem] md:text-[4rem] font-bold"
            >
              Become an affiliate and start earning today
            </motion.h2>
            <motion.p
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              className="md:text-[15px] text-[16px] font-extralight py-8 text-gray-600">
              Turn your audience into income by becoming an affiliate with these steps to successfully set up and start
              earning
            </motion.p>
            <div className="accordion pb-16">
              <input name="accordion-actions" type="checkbox" id="accordion-item-1"/>
              <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{ease: easeInOut}}
                className="accordion-item">
                <div className="ml-5">
                  <label htmlFor="accordion-item-1"
                         className="text-black accordion-header custom-cursor-default-hover">
                    Register/Create an account
                  </label>
                  <div className="accordion-content">
                    <div className="content text-slate-500 text-[13px]">
                      Go to <a href="https://app.lyncs.africa/register">app.lycns.africa/register</a> to register and
                      create an account
                    </div>
                  </div>
                </div>
              </motion.div>
              <input name="accordion-actions" type="checkbox" id="accordion-item-2"/>
              <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{ease: easeInOut}}
                className="accordion-item">
                <div className="ml-5">
                  <label htmlFor="accordion-item-2"
                         className="text-black accordion-header custom-cursor-default-hover">
                    Copy shop link to clipboard
                  </label>
                  <div className="accordion-content">
                    <div className="content text-slate-500 text-[13px]">
                      After creating an account, go to the dashboard and in the settings tab, copy your shop link to
                      your
                      clipboard
                    </div>
                  </div>
                </div>
              </motion.div>
              <input name="accordion-actions" type="checkbox" id="accordion-item-3"/>
              <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{ease: easeInOut}}
                className="accordion-item">
                <div className="ml-5">
                  <label htmlFor="accordion-item-3" className="text-black accordion-header">
                    Share links
                  </label>
                  <div className="accordion-content">
                    <div className="content text-slate-500 text-[13px]">
                      Paste and share the shop link on social platforms for customers to transact via the link
                    </div>
                  </div>
                </div>
              </motion.div>
              <input name="accordion-actions" type="checkbox" id="accordion-item-4"/>
              <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{ease: easeInOut}}
                className="accordion-item">
                <div className="ml-5">
                  <label htmlFor="accordion-item-4" className="text-black accordion-header">
                    Start earning
                  </label>
                  <div className="accordion-content">
                    <div className="content text-slate-500 text-[13px]">
                      Get commissions per transactions done by customers from your link
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="col-span-5 col-start-8 hidden md:block">
            <img className="h-full object-cover rounded-tl-lg" src="/images/affiliate-2.jpg"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
