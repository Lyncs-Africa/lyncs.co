import React, {useMemo} from 'react';
import {easeInOut} from "framer-motion";
import Link from "next/link";

const MultiSecton = () => {
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
    <div id="for" className="z-10 overflow-hidden relative w-full bg-white md:bg-right bg-cover font-satoshiMedium">
      <div
        className="md:grid grid-cols-12 md:py-[100px] overflow-hidden md:relative md:z-10">
        <div
          className="container bg-white min-h-[300px] mx-auto col-span-10 col-start-2">
          <div
            className="p-6 py-[50px] text-left z-50 relative space-y-6">
          <div>
            <h2
              className="text-black font-satoshiBold text-[4rem] md:text-[5rem] leading-[1.1] font-semibold relative">
              Use Cases
            </h2>
            <p
              className="text-slate-600 md:text-[17px] text-[16px] mb-10 ">
              Access a range of services, all in one place
            </p>
          </div>
            <div className="md:grid grid-cols-2 gap-8 space-y-8 md:space-y-0">
              <div className="card p-6 flex flex-col justify-center gap-5 relative overflow-hidden group min-h-[400px] rounded-lg">
                <div className="absolute inset-0 opacity-40 bg-slate-800 z-10"></div>
                <div className="inner-background bg-individuals bg-cover bg-center absolute inset-0"></div>
                <div className="z-10">
                  <h2
                    className="text-white font-satoshiBold text-[3rem] md:text-[3rem] leading-[1.1] font-semibold relative">
                    For
                  </h2>
                  <h2
                    className="text-white font-satoshiBold text-[3rem] md:text-[3rem] leading-[1.1] font-semibold relative">
                    Individuals
                  </h2>
                </div>
                <Link href="/individuals">
                  <button
                    className="z-10 opacity-70 group-hover:opacity-100 relative cursor-pointer border text-[17px] text-white text-center py-3 px-8 rounded border ease transition-all border-white bg-transparent">
                    Get started
                  </button>
                </Link>
              </div>
              <div className="card p-6 flex flex-col justify-center gap-5 relative overflow-hidden group min-h-[400px] rounded-lg">
                <div className="absolute inset-0 opacity-40 bg-slate-800 z-10"></div>
                <div className="inner-background bg-affiliates bg-cover bg-center absolute inset-0"></div>
                <div className="z-10">
                  <h2
                    className="text-white font-satoshiBold text-[3rem] md:text-[3rem] leading-[1.1] font-semibold relative">
                    For
                  </h2>
                  <h2
                    className="text-white font-satoshiBold text-[3rem] md:text-[3rem] leading-[1.1] font-semibold relative">
                    Affiliates
                  </h2>
                </div>
                <Link href="/affilates">
                  <button
                    className="z-10 opacity-70 group-hover:opacity-100 relative cursor-pointer border text-[17px] text-white text-center py-3 px-8 rounded border ease transition-all border-white bg-transparent">
                    Get started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiSecton;
