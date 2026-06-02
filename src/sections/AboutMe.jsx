import SectionDivider from "../components/SectionDivider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
// import { cardVariants } from "../utils/cardVariants";
import { AboutMeStats } from "../data/AboutMeData";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";

const AboutMe = ({ containerClass, mediumTextGradient }) => {
    return (
        <div className="border-t border-gray-800/30 shadow-lg pt-5">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.5 }}
                >

                <SectionDivider section="About me" />

                {/* Whole Code Snippet */}
                <div className={`relative mt-5 w-90 mx-auto flex items-center justify-center mb-10`}>

                    {/* Code Snippet */}
                    <div
                        className=" bg-gray-800 backdrop-blur-lg w-75 h-33 rounded-2xl flex flex-col mx-auto border border-gray-700 cursor-pointer
                                    hover:shadow-[0_0_10px_rgba(107,0,255,0.98)] transition-shadow duration-300">

                        {/* Snippet navbar */}
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

                            <p className='text-white'><span className="text-red-400">const</span><span className="text-blue-300"> developer </span>
                                = <span className="text-yellow-300">{`{`}</span></p>

                            <div className="ml-5 flex flex-col text-gray-300 text-[11px]">

                                {/* with typewriter Effect */}
                                <div className="flex w-50">
                                    <p className="animate-typewriter overflow-hidden whitespace-nowrap">
                                        <span>focus: </span>
                                        <span className=" text-green-400">"Frontend Engineering"</span>,
                                    </p>
                                    <span className="animate-blink border-l"></span>
                                </div>

                                <p>passion: <span className="text-green-400  ">"UI/UX Development"</span>,</p>
                                {/* without typewriter Effect */}
                                <p className='text-gray-200'>
                                    <span>goal: </span>
                                    <span className="text-green-400">"Building Great Products"</span>
                                </p>
                                <p><span className="text-yellow-300 pt-1 block">{`}`}</span></p>
                            </div>

                        </div>
                    </div>
                </div>
            </motion.div>

            {/* About Me Content */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                className={` ${containerClass} mb-10`}>


                {/* How I build section */}
                <div className="p-2">
                    <h1 className="text-white text-[17px] flex flex-wrap font-semibold">
                        How I build
                    </h1>

                    <div className="flex flex-col gap-2 mt-5">
                        <div className="flex flex-row items-center text-gray-300 text-[14px] leading-relaxed">
                            <FontAwesomeIcon icon={faCheck} className="text-green-400 text-[11px] mr-2" />
                            <p>Clean and maintanable code</p>
                        </div>
                        <div className="flex flex-row items-center text-gray-300 text-[14px] leading-relaxed">
                            <FontAwesomeIcon icon={faCheck} className="text-green-400 text-[11px] mr-2" />
                            <p>Mobile-first development</p>
                        </div>
                        <div className="flex flex-row items-center text-gray-300 text-[14px] leading-relaxed">
                            <FontAwesomeIcon icon={faCheck} className="text-green-400 text-[11px] mr-2" />
                            <p>Performance focused interfaces</p>
                        </div>
                        <div className="flex flex-row items-center text-gray-300 text-[14px] leading-relaxed">
                            <FontAwesomeIcon icon={faCheck} className="text-green-400 text-[11px] mr-2" />
                            <p>Accessible user experiences</p>
                        </div>
                    </div>
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

        </div>
    )
}

export default AboutMe