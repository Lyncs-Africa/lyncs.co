import React from 'react';
import ProductDetails from "@/components/core/shared/ProductDetails";
import { motion } from "framer-motion";

const Shop = () => {
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
          className="md:pt-[50px] px-4 md:px-0 col-span-4 text-left col-start-2 z-50 relative flex flex-col justify-center">
          <h2
            className="text-black leading-[1] text-[3.5rem] md:text-[4.5rem] font-bold"
          >
            Lorem ipsum dolor sit amet
          </h2>
          <p
            className="text-[18px] py-8 text-black">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, sed!
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