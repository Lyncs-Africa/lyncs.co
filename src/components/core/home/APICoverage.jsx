import ImageBubble from "@/components/ImageBuble";
import { motion } from 'framer-motion';
import Link from "next/link";
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
        <div className="w-full font-satoshiMedium flex flex-col justify-center items-center relative bg-[#F4F6F8]">
            <div
                className="md:container md:px-0 px-5 mx-auto md:grid grid-cols-12 xl:pt-0 overflow-hidden md:relative md:z-10">

                {/* className="grid md:grid-cols-5 grid-cols-1 w-full gap-10 px-0 h-" */}
                <div className="flex flex-col col-span-12 lg:col-span-5 text-left col-start-1 lg:col-start-2 justify-start py-[100px] lg:py-[200px] items-start  w-full">

                    <motion.h2
                        variants={textVariant}
                        initial="hidden"
                        whileInView="visible"
                        className="font-bold md:block hidden text-left text-[3.5rem] md:text-[4rem] text-[#222c3b] leading-tight"
                    >
                        <p className="pb-4 lg:block hidden">Enjoy Africa's biggest API<br /> for e-commerce<br /> coverage.</p>
                    </motion.h2>

                    <motion.h2
                        variants={textVariant}
                        initial="hidden"
                        whileInView="visible"
                        className="font-bold lg:hidden block text-left text-[3.2rem] text-[#222c3b] leading-snug"
                    >
                        <p className="pb-4">Enjoy Africa's biggest API for e-commerce coverage.</p>
                    </motion.h2>

                    <motion.p
                        variants={textVariant}
                        initial="hidden"
                        whileInView="visible"
                        className="text-[16px] font-medium text-left pb-8 pt-4 text-[#54667f] max-w-2xl w-full"
                    >
                        Get live products and APIs from commercial service providers spanning multiple industries aggregated across in Africa.
                    </motion.p>

                    <Link href={"#"}>
                        <motion.button
                            variants={textVariant}
                            initial="hidden"
                            whileInView="visible"
                            className="flex items-center font-medium text-md bg-blue-600 text-[17px] text-white px-5 py-3 rounded-lg font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black mt-4"
                        >
                            View Coverage
                        </motion.button>
                    </Link>

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