import ImageBubble from "@/components/ImageBuble";
import { motion } from 'framer-motion';
import { useMemo } from "react";

const APICoverage = () => {
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
        <div className="w-full font-poppins flex flex-col justify-center items-center relative bg-[#F4F6F8]">
            <div
                className="container mx-auto md:grid grid-cols-12 py-[100px] md:py-[160px] xl:pt-0 overflow-hidden md:relative md:z-10 ">

                {/* className="grid md:grid-cols-5 grid-cols-1 w-full gap-10 px-0 h-" */}
                <div className="flex flex-col col-span-4 text-left col-start-2 md:justify-start md:py-40 md:items-start justify-center items-center w-full">

                    <motion.h2
                        variants={textVariant}
                        initial="hidden"
                        whileInView="visible"
                        className="font-bold text-3xl md:text-4xl text-[#222c3b] leading-snug"
                    >
                        <p className="pb-4">Enjoy Africa's biggest<br /> API for e-commerce<br /> coverage.</p>
                        {/* <p className="pb-4">The most extensive API coverage</p> */}
                        {/* <p>in African commercial services.</p> */}
                    </motion.h2>

                    <motion.p
                        variants={textVariant}
                        initial="hidden"
                        whileInView="visible"
                        className="text-[18px] font-medium pb-8 pt-4 text-[#54667f] max-w-2xl w-full"
                    >
                        Get live products and APIs from commercial service providers spanning multiple industries aggregated across in Africa.
                    </motion.p>

                    <motion.button
                        variants={textVariant}
                        initial="hidden"
                        whileInView="visible"
                        className="flex items-center bg-blue-600 text-[17px] text-white px-5 py-3 rounded-lg font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black mt-4"
                    >
                        View Coverage
                    </motion.button>

                </div>

                <div className="h-full relative w-full col-span-6 my-10 md:my-0 px-4 md:px-0">
                    {/* <ImageBubble /> */}
                    <div className="logo-area">
                        <ul className="logo-circles">
                            <li className="rounded-full bg-center  object-center border-4"></li>
                            <li className="rounded-full bg-center  object-center border-4"></li>
                            <li className="rounded-full bg-center  object-center border-4"></li>
                            <li className="rounded-full bg-center  object-center border-4"></li>
                            <li className="rounded-full bg-center  object-center border-4"></li>
                            <li className="rounded-full bg-center  object-center border-4"></li>
                            <li className="rounded-full bg-center  object-center border-4"></li>
                            <li className="rounded-full bg-center  object-center border-4"></li>
                            <li className="rounded-full bg-center  object-center border-4"></li>
                            {/* <li className="rounded-full bg-center  object-center border-4"></li> */}
                            {/* <li className="rounded-full bg-center  object-center border-4"></li> */}
                            {/* <li className="rounded-full bg-center  object-center"></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default APICoverage;