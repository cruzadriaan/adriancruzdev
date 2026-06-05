import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import SectionDivider from '../components/SectionDivider';
// import { cardVariants } from "../utils/cardVariants";
import { AboutMeStats } from "../data/AboutMeData";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";

const AboutMe = ({ containerClass, mediumTextGradient }) => {
    return (
        <div className="flex flex-col pt-10 px-5 md:px-0">

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7 }}>

                <SectionDivider section="ABOUT ME" />

                <div className="flex flex-col md:flex-row items-center justify-center">

                    {/* Code Snippet */}
                    <div className="flex flex-col bg-gray-800 backdrop-blur-lg w-75 sm:w-100 h-33 sm:h-43 mb-10 rounded-2xl border border-gray-700 cursor-pointer">

                        {/* Snippet navbar */}
                        <div>
                            <div className="flex flex-row items-center gap-2.5  bg-gray-800 border-b border-gray-900/70 rounded-t-2xl p-2.5 sm:p-3 cursor-pointer">
                                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-orange-500"></span>
                                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2  rounded-full bg-yellow-400"></span>
                                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2  rounded-full bg-green-400"></span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCopy} className="absolute top-2 right-3 text-xs sm:text-[14px] text-gray-400  cursor-pointer hover:text-gray-300" />
                            </div>
                        </div>

                        {/* Syntax */}
                        <div className="py-1.5 sm:py-3.5 px-4 sm:px-6 flex flex-col text-[11px] sm:text-[13px] text-white font-mono">

                            <p className='text-white'><span className="text-red-400">const</span><span className="text-blue-300"> developer </span>
                                = <span className="text-yellow-300">{`{`}</span></p>

                            <div className="ml-5 flex flex-col text-gray-300 text-[11px] sm:text-[13px]">

                                {/* with typewriter Effect */}
                                <div className="flex w-50 sm:w-55 md:w-56">
                                    <p className="animate-typewriter sm:animate-typewriter-sm md:animate-typewriter-md  overflow-hidden whitespace-nowrap">
                                        <span>focus: </span>
                                        <span className=" text-green-400">"Frontend Engineering"</span>,
                                    </p>
                                    <span className="animate-blink border-l" />
                                </div>

                                {/* without typewriter Effect */}
                                <p>passion: <span className="text-green-400  ">"UI/UX Development"</span>,</p>
                                <p className='text-gray-200'>
                                    <span>goal: </span>
                                    <span className="text-green-400">"Building Great Products"</span>
                                    <span className="text-yellow-300 pt-1 block">{`}`}</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col items-center justify-center md:flex-row"
                    >

                        {/* How I build section */}
                        <div className={` ${containerClass} py-6 mb-10  w-90 sm:w-120`}>

                            <h1 className="text-white text-[17px] sm:text-[20px] flex flex-wrap font-semibold">
                                How I build
                            </h1>

                            <div className="flex flex-col gap-2 mt-5">
                                <div className="flex flex-row items-center text-gray-300 text-[14px] leading-relaxed">
                                    <FontAwesomeIcon icon={faCheck} className="text-green-400 text-[11px] sm:text-[18px] mr-2" />
                                    <p>Clean and maintanable code</p>
                                </div>
                                <div className="flex flex-row items-center text-gray-300 text-[14px] leading-relaxed">
                                    <FontAwesomeIcon icon={faCheck} className="text-green-400 text-[11px] sm:text-[18px] mr-2" />
                                    <p>Mobile-first development</p>
                                </div>
                                <div className="flex flex-row items-center text-gray-300 text-[14px] leading-relaxed">
                                    <FontAwesomeIcon icon={faCheck} className="text-green-400 text-[11px] sm:text-[18px] mr-2" />
                                    <p>Performance focused interfaces</p>
                                </div>
                                <div className="flex flex-row items-center text-gray-300 text-[14px] leading-relaxed">
                                    <FontAwesomeIcon icon={faCheck} className="text-green-400 text-[11px] sm:text-[18px] mr-2" />
                                    <p>Accessible user experiences</p>
                                </div>
                            </div>

                        </div >
                    </motion.div >

                </div>
            </motion.div>

            {/* Hero Stats */}
            < div className="mb-15 md:mt-5 mx-auto justify-items-center w-90 sm:w-105 md:w-190 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6" >
                {
                    AboutMeStats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 1.5, delay: index * 0.1 }}
                            className="bg-gray-800/40 backdrop-blur-md py-4 sm:py-6 px-4 sm:px-5 w-42 sm:w-50 md:w-45 rounded-xl border border-gray-700 cursor-pointer
                            hover:shadow-[0_0_10px_rgba(107,0,255,0.98)] transition-shadow duration-300"
                        >
                            <FontAwesomeIcon icon={stat.icon} className="text-gray-400 text-base sm:text-[19px] mb-2" />
                            <h2 className={`${mediumTextGradient} text-2xl sm:text-3xl font-bold`}>{stat.count}</h2>
                            <p className="text-gray-400 text-[13px] sm:text-[14px]">{stat.title}</p>
                        </motion.div>
                    ))
                }
            </div >
        </div >
    )
}

export default AboutMe