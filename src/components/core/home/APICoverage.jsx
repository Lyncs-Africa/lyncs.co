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
        <div className="w-full font-poppins bg-white flex flex-col justify-center items-center relative">
            <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-10 px-0 h-full bg-[#F4F6F8]">
                <div className="flex flex-col md:justify-start md:py-40 pl-20 md:items-start justify-center items-center w-full px-5">

                    <motion.h2
                        variants={textVariant}
                        initial="hidden"
                        whileInView="visible"
                        className="font-bold text-3xl md:text-4xl text-[#222c3b] leading-snug"
                    >
                        <p className="pb-4">The most extensive API coverage</p>
                        <p>in African commercial services.</p>
                    </motion.h2>

                    <motion.p
                        variants={textVariant}
                        initial="hidden"
                        whileInView="visible"
                        className="text-[16px] py-8 text-[#54667f] max-w-2xl w-full"
                    >
                        Get useful data from all commercial service providers spanning 10 industries aggregated into services in Nigeria. Currently in beta for Kenya, Ghana, and South Africa.
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

                <div className="h-full relative w-full ">
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
                            <li className="rounded-full bg-center  object-center border-4"></li>
                            <li className="rounded-full bg-center  object-center border-4"></li>
                            <li className="rounded-full bg-center  object-center"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default APICoverage;