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
        path: '/flights/local-flight',
        onReady: () => {
          handleIsWidgetLoading(false)
        },
        // data: {
        //   name: "Seun Suleman",
        //   company: 'Lyncs Africa',
        //   phone: '2348123456789',
        //   dateOfBirth: '1990-01-01',
        //   email: 'sulemanseun@gmail.com',
        //   maxLoanAmount: 150000,
        // }
      },
    );
  };

  return (
    <div
      className="z-10 overflow-hidden relative w-full bg-white md:bg-right bg-cover font-satoshiMedium">
      <div
        className="md:grid grid-cols-12 py-[70px] md:pb-[160px] xl:pt-0 overflow-hidden md:relative md:z-10">
        <div className="container mx-auto col-span-10 col-start-2 md:grid grid-cols-12">
          <div
            className="px-4 md:px-0 col-span-4 text-left z-50 relative flex flex-col justify-center">
            <motion.h2
              variants={headerVariant}
              initial="hidden"
              whileInView="visible"
              className="text-bold font-satoshiBold leading-[1] text-[3.5rem] md:text-[5.5rem] font-bold"
            >
              Book local & International flights
            </motion.h2>
            <motion.p
              className="text-[18px] py-8 text-gray-800">
              Find affordable options, plan flexible trips, and travel with ease across Africa.
            </motion.p>
            <div>
              <motion.button
                onClick={handleOpen}
                variants={btnVariant}
                initial="hidden"
                whileInView="visible"
                className="flex gap-2 items-center bg-black text-[17px] text-white px-5 py-3 rounded-lg font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black">
                <p> Book a trip</p>
              </motion.button>
            </div>
          </div>
          <div className="col-span-8 flex gap-8 pt-[50px] md:pt-0 px-4 md:px-0">
            <img className="md:object-contain" src="/images/plane.svg" alt="Lyncs fly"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightBooking;
