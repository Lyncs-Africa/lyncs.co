import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
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
    <div className="relative w-full overflow-hidden font-satoshiMedium bg-white">
      <div className="container mx-auto md:block md:pt-[160px] xl:py-[70px] py-[70px] relative">
        <div className="md:grid grid-cols-12 px-4 md:px-0">
          <div
            className="col-start-2 col-span-10 relative">
            <motion.h2
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              className="text-black leading-[1] font-satoshiBold text-[3.5rem] md:text-[4.5rem] font-bold"
            >
              Explore all <br /> our services.
            </motion.h2>
            <p className="text-[16px] md:text-[17px] py-8 text-slate-800">
              Access a range of services all in one place
            </p>
            <div className="md:grid xl:grid-cols-3 grid-cols-2 gap-8 md:my-10">
              <div className="flex flex-col gap-5">
                <motion.div
                  variant={slideVariant}
                  className="md:min-h-[200px] rounded-lg bg-slate-900 w-full relative md:my-0">
                  <div
                    className="absolute inset bg-[url('/images/travel.jpg')] w-full h-full rounded-lg opacity-30 bg-cover bg-right"></div>
                  <div className="p-6 relative">
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ type: 'spring', stiffness: 100 }}
                      className="md:text-[3rem] text-[2.5rem] leading-[1] py-2 text-white tracking-tight max-w-[700px]">
                      Flight Booking
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ type: 'spring', stiffness: 100 }}
                      className="text-[15px] py-2 text-slate-100 tracking-tight max-w-[500px]">
                      Book flights both local and internationally at the best rates & filter by a bunch of factors
                    </motion.p>
                  </div>

                </motion.div>
                <motion.div
                  variant={slideVariant}
                  className="md:min-h-[200px] rounded-lg bg-slate-900 w-full relative md:my-0">
                  <div
                    className="absolute inset bg-[url('/images/shopping-bag.jpg')] w-full h-full rounded-lg opacity-30 bg-cover bg-center"></div>
                  <div className="p-6 relative">
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ type: 'spring', stiffness: 100 }}
                      className="md:text-[3rem] text-[2.5rem] leading-[1] py-2 text-white tracking-tight max-w-[700px]">
                      Online Shopping
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ type: 'spring', stiffness: 100 }}
                      className="text-[15px] py-2 text-slate-100 tracking-tight max-w-[500px]">
                      Shop for items from multiple stores and get teh best deals for each item
                    </motion.p>
                  </div>

                </motion.div>

              </div>
              <div className="rounded-lg bg-slate-900 w-full relative my-10 md:my-0">
                <div
                  className="absolute inset bg-[url('/images/stream.jpg')] w-full h-full rounded-lg opacity-30 bg-cover bg-center"></div>
                <div className="p-6 relative">
                  <motion.p
                    variants={textVariant}
                    className="md:text-[3rem] text-[2.5rem] leading-[1] py-2 text-white tracking-tight max-w-[700px]">
                    Stream Share
                  </motion.p>
                  <p
                    className="text-[15px] py-2 text-slate-100 tracking-tight max-w-[500px]">
                    Watch Netflix, Prime and Showmax for ₦3,900
                  </p>
                </div>

              </div>
              <div className="md:grid grid-cols-2 gap-5 my-8 xl:my-0">
                <motion.div
                  className="rounded-lg bg-slate-900 w-full relative my-10 md:my-0">
                  <div
                    className="absolute inset bg-[url('/images/eat.jpg')] w-full h-full rounded-lg opacity-30 bg-cover"></div>
                  <div className="p-6 relative">
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ type: 'spring', stiffness: 100 }}
                      className="md:text-[3rem] text-[2.5rem] leading-[1] py-2 text-white tracking-tight max-w-[700px]">
                      Eat
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ type: 'spring', stiffness: 100 }}
                      className="text-[15px] py-2 text-slate-100 tracking-tight max-w-[500px]">
                      Order food online and have it delivered to you
                    </motion.p>
                  </div>

                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ type: 'spring', stiffness: 50, delay: 0.3 }}
                  className="rounded-lg bg-slate-800 w-full relative mt-10 md:my-0">
                  <div
                    className="absolute inset w-full h-full rounded-lg opacity-40 bg-cover"></div>
                  <div className="p-6 relative">
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ type: 'spring', stiffness: 50 }}
                      className="md:text-[3rem] text-[2.5rem] leading-[1] py-2 text-white tracking-tight">
                      Ride
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ type: 'spring', stiffness: 50 }}
                      className="text-[15px] py-2 text-slate-100 tracking-tight max-w-[500px]">
                      Get discounts on bolt rides
                    </motion.p>
                  </div>

                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 200 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 50 }}
                  className="col-span-2 rounded-lg bg-slate-900 w-full relative my-10 md:my-0">
                  <div
                    className="absolute inset bg-[url('/images/laundry.jpg')] w-full h-full rounded-lg opacity-20 bg-cover"></div>
                  <div className="p-6 relative">
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ type: 'spring', stiffness: 100 }}
                      className="md:text-[3rem] text-[2.5rem] leading-[1] py-2 text-white tracking-tight max-w-[700px]">
                      Washing & Cleaning
                    </motion.p>
                    <p
                      className="text-[15px] py-2 text-slate-100 tracking-tight max-w-[500px]">
                      Order for dry cleaning & house cleaning services for affordable rates
                    </p>
                  </div>

                </motion.div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
