import React, { useEffect, useRef } from 'react';
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
        "Travelling",
        "Flying",
        " Events",
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

  return (
    <div
      className="z-10 overflow-hidden relative w-full bg-white md:bg-right bg-cover min-h-[100vh] font-poppins">
      <div className="xl:block hidden absolute bottom-[-5rem] w-full z-30">
        <img alt="curve" src="/images/long-curve.svg" />
      </div>
      <div
        className="container mx-auto md:grid grid-cols-12 py-[100px] md:py-[160px] xl:pt-0 overflow-hidden md:relative md:z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, type: "spring", stiffness: 50 }}
          className=" px-4 md:px-0 col-span-4 text-left col-start-2 z-50 relative flex flex-col justify-center">
          <h2
            className="text-black text-[3.5rem] md:text-[4rem] font-semibold"
          >
            Embedded
          </h2>

          <p ref={el}
            className="relative bg-clip-text leading-[1] text-[3.5rem] md:text-[4rem] font-semibold text-transparent bg-gradient-to-r from-[#00AFEF] to-[#0915BA] after:animate-blink after:content-['|'] after:inline after:text-blue-500"
          >
            Online Shopping
          </p>

          <h2 className="text-black text-[3.5rem] md:text-[4rem] font-semibold">Simplified</h2>

          <p className="text-[18px] py-8 text-blue-500">
            100k+ merchants, 10+ live products
          </p>

          <div>

            <button
              className="text-[17px] text-white bg-black px-5 py-3 rounded-lg font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black">
              Get started
            </button>
          </div>
        </motion.div>
        <div className="col-span-6 my-10 md:my-0 px-4 md:px-0">
          <ProductDetails />
        </div>
      </div>
    </div>
  );
};

export default Shop;