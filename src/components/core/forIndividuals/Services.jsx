import React, {useMemo} from 'react';
import {motion} from 'framer-motion';

const Services = ({handleIsWidgetLoading}) => {
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

  const handleOpen = (path) => {
    handleIsWidgetLoading(true)
    window.LyncsWidget.open(
      {
        key: 'a3a2d99285894aa88b4340436fb7733151cffe74dc6870c214ecc0',
        path: `${path}`,
        onReady: () => {
          handleIsWidgetLoading(false)
        }
      },
    );
  };

  const handleWait= (service) => {
    handleIsWidgetLoading(true)
    window.LyncsWidget.open(
      {
        key: 'a3a2d99285894aa88b4340436fb7733151cffe74dc6870c214ecc0',
        path: `/waitlist/?service=${service}&launchDate=2025-01-01T00:00:00`,
        onReady: () => {
          handleIsWidgetLoading(false)
        }
      },
    );
  };

  return (
    <div className="relative w-full overflow-hidden font-satoshiMedium bg-white">
      <div className="mx-auto md:block py-[100px] md:pt-[100px] md:pb-[160px] xl:pb-[250px] relative">
        <div className="xl:block hidden absolute bottom-[-10rem] right-[-2px] w-full z-30">
          <svg fill="#F1F1F8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 265.34">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path className="cls-1"
                      d="M.17,10.74C43.4,20,87.41,29.54,125.87,51.36c49.88,28.29,86.24,81.56,141.49,99.85a115.56,115.56,0,0,0,71,.33c20.72-6.65,39.05-19,57.45-30.63,34.42-21.75,71.93-40,112.69-45.4,83.85-11.09,164.77,46.12,248.13,17.9,44.46-15,78-52.21,120.65-71.76A236.83,236.83,0,0,1,1000,1.25l-1.71,264.09H.2C.2,180.48-.23,95.6.17,10.74Z"/>
              </g>
            </g>
          </svg>
        </div>
        <div className="md:grid grid-cols-12 px-4 md:px-0">
          <div
            className="container mx-auto col-start-2 col-span-10 relative min-h-screen md:min-h-full 2xl:min-h-[90vh]">
            <motion.h2
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              className="text-black leading-[1] font-satoshiBold text-[3.5rem] md:text-[4.5rem] font-bold"
            >
              Explore all <br/> our services.
            </motion.h2>
            <p className="text-[16px] md:text-[17px] py-8 text-slate-800">
              Access a range of services all in one place
            </p>
            <div className="md:grid xl:grid-cols-5 grid-cols-2 gap-5 md:my-10 space-y-4 md:space-y-0">
              <div className="col-span-2 md:grid grid-cols-2 gap-5 space-y-4 md:space-y-0">
                <div onClick={() => handleOpen('/flights/local-flight')}
                     className="min-h-[50%] cursor-pointer rounded-lg bg-slate-900 w-full relative">
                  <div
                    className="absolute inset bg-[url('/images/12.jpg')] w-full h-full rounded-lg opacity-30 bg-cover bg-center"></div>
                  <div className="p-6 relative">
                    <motion.p
                      variants={textVariant}
                      className="md:text-[3rem] text-[2.5rem] leading-[1] py-2 text-white tracking-tight max-w-[700px]">
                      Book flights
                    </motion.p>
                    <p
                      className="text-[15px] py-2 text-slate-100 tracking-tight max-w-[500px]">
                      Book flights both local and internationally at the best rates & filter by a bunch of factors
                    </p>
                  </div>

                </div>
                <motion.div
                  onClick={() => handleWait('tours')}
                  variant={slideVariant}
                  className="cursor-pointer md:min-h-[50%] rounded-lg bg-slate-900 w-full relative md:my-0">
                  <div
                    className="absolute bg-[url('/images/tours.jpg')] bg-center bg-cover inset w-full h-full rounded-lg opacity-30"></div>
                  <div className="p-6 relative">
                    <motion.p
                      initial={{opacity: 0, x: -20}}
                      whileInView={{opacity: 1, x: 0}}
                      transition={{type: 'spring', stiffness: 100}}
                      className="md:text-[3rem] text-[2.5rem] leading-[1] py-2 text-white tracking-tight max-w-[700px]">
                      Tours
                    </motion.p>
                    <motion.p
                      initial={{opacity: 0, x: -20}}
                      whileInView={{opacity: 1, x: 0}}
                      transition={{type: 'spring', stiffness: 100}}
                      className="text-[15px] py-2 text-slate-100 tracking-tight max-w-[500px]">Coming soon</motion.p>
                  </div>

                </motion.div>
              </div>
              <div className="col-span-2 space-y-4">
                <motion.div
                  onClick={() => handleOpen('/bus')}
                  variant={slideVariant}
                  className="cursor-pointer rounded-lg bg-slate-900 w-full relative md:my-0">
                  <div
                    className="absolute inset bg-[url('/images/bus.jpg')] w-full h-full rounded-lg opacity-20 bg-cover bg-right-bottom"></div>
                  <div className="p-6 relative">
                    <motion.p
                      initial={{opacity: 0, x: -20}}
                      whileInView={{opacity: 1, x: 0}}
                      transition={{type: 'spring', stiffness: 100}}
                      className="md:text-[3rem] text-[2.5rem] leading-[1] py-2 text-white tracking-tight max-w-[700px]">
                      Bus Ticketing
                    </motion.p>
                    <motion.p
                      initial={{opacity: 0, x: -20}}
                      whileInView={{opacity: 1, x: 0}}
                      transition={{type: 'spring', stiffness: 100}}
                      className="text-[15px] py-2 text-slate-100 tracking-tight max-w-[500px]">
                      Shop for items from multiple stores and get teh best deals for each item
                    </motion.p>
                  </div>

                </motion.div>
                <div className="md:grid grid-cols-2 gap-4 my-8 xl:my-0">
                  <motion.div
                    onClick={() => handleWait('Keke Napep')}
                    className="cursor-pointer rounded-lg bg-slate-900 w-full relative">
                    <div
                      className="absolute inset bg-slate-500 bg-center w-full h-full rounded-lg opacity-20 bg-cover"></div>
                    <div className="p-6 relative">
                      <motion.p
                        initial={{opacity: 0, x: -20}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{type: 'spring', stiffness: 100}}
                        className="md:text-[3rem] text-[2.5rem] leading-[1] py-2 text-white tracking-tight max-w-[700px]">
                        Keke Napep
                      </motion.p>
                      <motion.p
                        initial={{opacity: 0, x: -20}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{type: 'spring', stiffness: 100}}
                        className="text-[15px] py-2 text-slate-100 tracking-tight max-w-[500px]">
                       Coming soon
                      </motion.p>
                    </div>

                  </motion.div>
                  <motion.div
                    onClick={() => handleWait('Delivery Bikes')}
                    initial={{opacity: 0, x: 200}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{type: 'spring', stiffness: 50, delay: 0.3}}
                    className="cursor-pointer rounded-lg bg-slate-800 w-full relative space-y-4 md:space-y-0">
                    <div
                      className="absolute inset w-full h-full rounded-lg bg-cover"></div>
                    <div className="p-6 relative">
                      <motion.p
                        initial={{opacity: 0, x: -20}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{type: 'spring', stiffness: 50}}
                        className="md:text-[3rem] text-[2.5rem] leading-[1] py-2 text-white tracking-tight">
                        Delivery bikes
                      </motion.p>
                      <motion.p
                        initial={{opacity: 0, x: -20}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{type: 'spring', stiffness: 50}}
                        className="text-[15px] py-2 text-slate-100 tracking-tight max-w-[500px]">
                        Coming soon
                      </motion.p>
                    </div>

                  </motion.div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
