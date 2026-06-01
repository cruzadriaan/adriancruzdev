// import SectionDivider from "../components/SectionDivider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
// import { cardVariants } from "../utils/cardVariants";
import { AboutMeStats } from "../data/AboutMeData";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const AboutMe = ({ containerClass, mediumTextGradient }) => {
    return (
        <>

            <div className={`relative w-90 mx-auto flex items-center justify-center mb-10`}>

                {/* Code Snippet */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1.5 }}
                    className=" bg-gray-800 backdrop-blur-lg w-75 h-33 rounded-2xl flex flex-col mx-auto border border-gray-700 cursor-pointer
                                    hover:shadow-[0_0_10px_rgba(107,0,255,0.98)] transition-shadow duration-300"
                >

                    <div>
                        <div className="flex flex-row items-center gap-2.5  bg-gray-800 border-b border-gray-900/70 rounded-t-2xl p-2.5 cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faCopy} className="absolute top-2 right-3 text-xs text-gray-400  cursor-pointer hover:text-gray-300" />
                        </div>
                    </div>

                    {/* Syntax */}
                    <div className="py-1.5 px-4 flex flex-col text-[11px] text-white font-mono">
                        {/* <p className="text-gray-500">//About Me</p> */}
                        <p className='text-white'><span className="text-red-400">const</span><span className="text-blue-300"> developer </span>
                            = <span className="text-yellow-300">{`{`}</span></p>


                        <div className="ml-5 flex flex-col text-gray-300 text-[11px]">

                            {/* Typewriter Effect */}
                            <div className="flex w-50">
                                <p className="animate-typewriter overflow-hidden whitespace-nowrap">
                                    <span>focus: </span>
                                    <span className=" text-green-400">"Frontend Engineering"</span>,
                                </p>
                                <span className="animate-blink border-l"></span>
                            </div>


                            <p>experience: <span className="text-green-400  ">"2+ Years"</span>,</p>
                            {/* No typewriter Effect */}
                            <p className='text-gray-200'>
                                <span>specialization: </span>
                                <span className="text-green-400">"React Ecosystem"</span>
                            </p>
                            <p><span className="text-yellow-300 pt-1 block">{`}`}</span></p>
                        </div>

                    </div>

                </motion.div>
            </div>

            {/* About Me Content */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                className={` ${containerClass} mb-10`}>


                {/* About Me Image and Introduction */}
                <div className="flex  flex-row  gap-4">
                    <div className="mt-5">
                        <h1 className="text-white text-[17px] flex flex-wrap font-normal">
                            Front End Developer building
                            responsive, high-performance
                            web experiences.
                        </h1>
                    </div>
                </div>

                {/* About Me Description */}
                <div className="mt-5 text-gray-300 text-[13px] leading-relaxed">
                    <p>I specialize in React, Tailwind CSS,
                        and modern frontend workflows.

                        I enjoy transforming complex ideas
                        into intuitive interfaces that feel
                        fast, accessible, and engaging.</p>
                </div>
            </motion.div>

            {/* Hero Stats */}
            <div className="mx-auto mb-15 w-90 grid grid-cols-2 md:grid-cols-4 gap-4">
                {AboutMeStats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        className="bg-gray-800/40 backdrop-blur-md py-4 px-4 rounded-xl border border-gray-700 cursor-pointer
                            hover:shadow-[0_0_10px_rgba(107,0,255,0.98)] transition-shadow duration-300"
                    >
                        <FontAwesomeIcon icon={stat.icon} className="text-gray-400 text-base mb-2" />
                        <h2 className={`${mediumTextGradient} text-2xl font-bold`}>{stat.count}</h2>
                        <p className="text-gray-400 text-[13px]">{stat.title}</p>
                    </motion.div>
                ))}
            </div>

        </>
    )
}

export default AboutMe