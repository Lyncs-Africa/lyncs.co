import {easeInOut, motion} from 'framer-motion';
import Link from "next/link";
import {useMemo} from "react";

const APICoverage = () => {
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
    <div className="w-full font-satoshiMedium flex flex-col justify-center items-center relative bg-[#F4F6F8] px-4 md:px-0">
      <div
        className="md:container md:px-0 mx-auto md:grid grid-cols-12 xl:pt-0 overflow-hidden md:relative md:z-10">

        {/* className="grid md:grid-cols-5 grid-cols-1 w-full gap-10 px-0 h-" */}
        <div
          className="flex flex-col col-span-12 lg:col-span-5 text-left col-start-1 lg:col-start-2 justify-start py-[100px] lg:py-[200px] items-start w-full">

          <motion.h2
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            className="font-bold text-left text-[3.5rem] md:text-[4.5rem] text-black leading-[1]"
          >
            Experience<br/> Africa's largest<br/> e-commerce API.
          </motion.h2>
          <motion.p
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            className="md:text-[17px] text-[16px] font-medium text-left pb-8 pt-4 text-slate-800"
          >
            Get live products and APIs from commercial service providers spanning multiple industries aggregated across
            in Africa.
          </motion.p>

          <div>
            <motion.button
              variants={btnVariant}
              initial="hidden"
              whileInView="visible"
              className="flex gap-2 items-center bg-black text-[16px] text-white px-5 py-3 rounded-lg font-satoshiMedium hover:border hover:border-black hover:bg-transparent hover:text-black">
              <Link href="https://app.lyncs.africa/"> View coverage</Link>
            </motion.button>
          </div>

        </div>

        <div className="h-full relative w-full col-span-6 my-10 md:my-0 md:px-0">
          {/* <ImageBubble /> */}
          <div className="logo-area">
            <ul className="logo-circles">
              <li className="rounded-full bg-center object-center"></li>
              <li className="rounded-full bg-center object-center"></li>
              <li className="rounded-full bg-center object-center"></li>
              <li className="rounded-full bg-center object-center"></li>
              <li className="rounded-full bg-center object-center "></li>
              <li className="rounded-full bg-center object-center "></li>
              <li className="rounded-full bg-center object-center "></li>
              <li className="rounded-full bg-center object-center "></li>
              <li className="rounded-full bg-center object-center "></li>
              {/* <li className="rounded-full bg-center  object-center "></li> */}
              {/* <li className="rounded-full bg-center  object-center "></li> */}
              {/* <li className="rounded-full bg-center  object-center"></li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default APICoverage;