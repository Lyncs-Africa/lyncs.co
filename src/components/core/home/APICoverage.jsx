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
        <div className="w-full font-poppins bg-white flex flex-col justify-center items-center">
            <div className="grid md:grid-cols-2 grid-cols-1 w-full container max-w-7xl relative h-full">
                <div className="my-40 md:p-0 px-5">

                    <motion.h2
                        variants={textVariant}
                        initial="hidden"
                        whileInView="visible"
                        className="font-bold text-3xl md:text-4xl text-black leading-snug"
                    >
                        The largest API coverage <br /> across all commercial<br /> service-offering institutions in Africa
                    </motion.h2>

                    <motion.p
                        variants={textVariant}
                        initial="hidden"
                        whileInView="visible"
                        className="text-[18px] py-8 text-gray-800"
                    >
                        Get useful data from all commercial service providers spanning 10 industries aggregated into services in Nigeria. Currently in beta for Kenya, Ghana, and South Africa.
                    </motion.p>

                    <motion.button
                        variants={textVariant}
                        initial="hidden"
                        whileInView="visible"
                        className="flex gap-2 items-center bg-black text-[17px] text-white px-5 py-3 rounded-lg font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black"
                    >
                        View Coverage
                    </motion.button>

                </div>

                <div className="h-full relative ">
                    <ImageBubble />
                </div>
            </div>
        </div>
    )
}

export default APICoverage;