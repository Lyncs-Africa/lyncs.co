import React, {useEffect, useMemo, useRef} from 'react';
import ProductDetails from "@/components/core/shared/ProductDetails";
import Typed from "typed.js";
import {easeInOut, motion} from "framer-motion";
import Link from "next/link";

const Shop = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Commerce",
        "Shopping",
      ],
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 3000,
      smartBackspace: true,
      loop: true,
      showCursor: false
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const textVariant = useMemo(() => window.innerWidth < 768 ? {} : {
    hidden: {opacity: 0, x: -20},
    visible: {
      opacity: 1, x: 0,
      transition: {
        type: 'spring', stiffness: 50, duration: 1.5
      }
    }
  }, [])

  const slideVariant = useMemo(() => window.innerWidth < 768 ? {} : {
    hidden: {opacity: 0, x: -300},
    visible: {
      opacity: 1, x: 0,
      transition: {
        type: 'spring', stiffness: 80, delay: 0.2
      }
    }
  }, [])

  const btnVariant = useMemo(() => window.innerWidth < 768 ? {} : {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ease: easeInOut, delay: 0.3
      }
    }
  }, [])

  return (
    <div
      className="z-10 overflow-hidden relative w-full bg-white md:bg-right bg-cover min-h-[100vh]">
      <div className="xl:block hidden absolute bottom-[-5rem] w-full z-30">
        <img alt="curve" src="/images/long-curve.svg"/>
      </div>
      <div
        className="container mx-auto md:grid grid-cols-12 py-[100px] md:py-[160px] xl:pt-0 overflow-hidden md:relative md:z-10">
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          className="col-span-4 col-start-2 flex justify-center flex-col">
          <h2
            className="text-bold font-satoshiBold leading-tight md:px-0 pl-2 text-[3.5rem] md:text-[4.5rem]"
          >
            Embeded <br/>

            <p ref={el}
               className="relative bg-clip-text text-[3.5rem] md:text-[4rem] font-semibold text-transparent bg-gradient-to-r from-[#00AFEF] to-[#0915BA] after:animate-blink after:content-['|'] after:inline after:text-blue-500"
            >
              Shopping
            </p>
            Simplified<br/>
          </h2>
          <p className="text-slate-800 text-[16px] md:text-[17px] py-5">
            Allow your customers shop from live products <br/> across Africa.
          </p>
          <div>
            <motion.button
              variants={btnVariant}
              initial="hidden"
              whileInView="visible"
              className="flex gap-2 items-center bg-black text-[16px] text-white px-5 py-3 rounded-lg font-satoshiMedium hover:border hover:border-black hover:bg-transparent hover:text-black">
              <Link href="https://app.lyncs.africa"> Get started</Link>
            </motion.button>
          </div>
        </motion.div>
        <div className="col-span-6 my-10 md:my-0 px-4 md:px-0">
          <ProductDetails/>
        </div>
      </div>
    </div>
  );
};

export default Shop;