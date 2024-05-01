import React, {useMemo} from 'react';
import {easeInOut, motion} from "framer-motion";

const FlightBooking = ({handleIsWidgetLoading}) => {
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

  const btnVariant = useMemo(() => window.innerWidth < 768 ? {} : {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        ease: easeInOut, delay: 0.3
      }
    }
  }, [])

  const handleOpen = () => {
    handleIsWidgetLoading(true)
    window.LyncsWidget.open(
      {
        key: 'a3a2d99285894aa88b4340436fb7733151cffe74dc6870c214ecc0',
        path: '/flights/one-way-trip',
        onReady: () => {
          handleIsWidgetLoading(false)
        }
      },
    );
  };

  return (
    <div
      className="z-10 overflow-hidden relative w-full bg-white md:bg-right bg-cover font-satoshiMedium">
      <div
        className="container mx-auto md:grid grid-cols-12 py-[70px] md:pb-[160px] xl:pt-0 overflow-hidden md:relative md:z-10">
        <div
          className="px-4 md:px-0 col-span-4 text-left col-start-2 z-50 relative flex flex-col justify-center">
          <motion.h2
            variants={headerVariant}
            initial="hidden"
            whileInView="visible"
            className="text-bold font-satoshiBold leading-[1] text-[3.5rem] md:text-[4.5rem] font-bold"
          >
            Book local & International flights
          </motion.h2>
          <motion.p
            className="text-[18px] py-8 text-gray-800">Book flights both local and internationally at the best rates &
            filter by a bunch of factors
          </motion.p>
          <div>
            <motion.button
              onClick={handleOpen}
              variants={btnVariant}
              initial="hidden"
              whileInView="visible"
              className="flex gap-2 items-center bg-black text-[17px] text-white px-5 py-3 rounded-lg font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black">
              <p> Get started</p>
            </motion.button>
          </div>
        </div>
        <div className="col-start-6 col-span-6 flex gap-8">
          <img className="md:object-contain" src="/images/plane.svg" alt=""/>
        </div>
      </div>
    </div>
  );
};

export default FlightBooking;
