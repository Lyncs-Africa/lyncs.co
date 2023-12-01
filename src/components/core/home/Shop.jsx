import React, { useEffect, useMemo, useRef } from 'react';
import ProductDetails from "@/components/core/shared/ProductDetails";
import Typed from "typed.js";
import { motion } from "framer-motion";

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1, x: 0,
      transition: {
        type: 'spring', stiffness: 50, duration: 1.5
      }
    }
  }, [])

  const slideVariant = useMemo(() => window.innerWidth < 768 ? {} : {
    hidden: { opacity: 0, x: -300 },
    visible: {
      opacity: 1, x: 0,
      transition: {
        type: 'spring', stiffness: 80, delay: 0.2
      }
    }
  }, [])

  return (
    <div
      className="z-10 overflow-hidden relative w-full bg-white md:bg-right bg-cover min-h-[100vh]">
      <div className="xl:block hidden absolute bottom-[-5rem] w-full z-30">
        <img alt="curve" src="/images/long-curve.svg" />
      </div>
      <div
        className="container mx-auto md:grid grid-cols-12 py-[100px] md:py-[160px] xl:pt-0 overflow-hidden md:relative md:z-10">

        <motion.h2
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          className="text-bold font-satoshiBold col-span-4 col-start-2 leading-tight md:px-0 pl-2 text-[3.5rem] md:text-[4.5rem] font-bold"
        >
          Embedded <br />
          
          <p ref={el}
            className="relative bg-clip-text text-[3.5rem] md:text-[4rem] font-semibold text-transparent bg-gradient-to-r from-[#00AFEF] to-[#0915BA] after:animate-blink after:content-['|'] after:inline after:text-blue-500"
          >
            Shopping
          </p>
          Simplified<br />
          <p className="sm:text-[17px] text-[16px] text-gray-500 font-extralight pl-3 py-8">
            100k+ merchants, 10+ live products
          </p>
        </motion.h2>
        <div className="col-span-6 my-10 md:my-0 px-4 md:px-0">
          <ProductDetails />
        </div>
      </div>
    </div>
  );
};

export default Shop;