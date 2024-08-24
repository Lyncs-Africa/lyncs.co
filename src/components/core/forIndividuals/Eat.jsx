import React, {useMemo} from 'react';
import {easeInOut, motion} from "framer-motion";

const Eat = ({handleIsWidgetLoading}) => {
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

  const handleOpen = () => {
    handleIsWidgetLoading(true)
    window.LyncsWidget.open(
      {
        key: 'a3a2d99285894aa88b4340436fb7733151cffe74dc6870c214ecc0',
        path: '/waitlist/?service=food%20ordering&launchDate=2024-07-01T00:00:00',
        onReady: () => {
          handleIsWidgetLoading(false)
        }
      },
    );
  };

  return (
    <div
      className="z-10 overflow-hidden relative w-full font-satoshiMedium">
      <div
        className="md:grid grid-cols-12 md:pt-[160px] py-[70px] overflow-hidden md:relative md:z-10">
       <div className="container mx-auto col-span-10 col-start-2 md:grid grid-cols-12">
         <div
           className="px-4 md:px-0 col-span-5 text-left z-50 relative flex flex-col justify-center">
           <motion.h2
             variants={headerVariant}
             initial="hidden"
             whileInView="visible"
             className="text-bold font-satoshiBold leading-[1] text-[3.5rem] md:text-[4.5rem] font-bold"
           >
             Satisfy your cravings with just a few clicks
           </motion.h2>
           <motion.p
             className="text-[18px] py-8 text-gray-800">
             Order meals online and have them delivered right to your doorstep.
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
         <div className="col-span-5 col-start-7">
           <img className="object-contain mt-16 md:mt-0" src="/images/man with food.png" alt=""/>
         </div>
       </div>
      </div>
    </div>
  );
};

export default Eat;
