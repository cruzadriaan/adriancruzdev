import SectionDivider from "../components/SectionDivider";
import AdrianDevAvatar from "../assets/images/AdrianDevAvatarEnhanced.png";
import { HeroData } from '../data/HeroData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { cardVariants } from "../utils/cardVariants";

const AboutMe = ({ containerClass, mediumTextGradient }) => {
    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1 }}
        >

            <SectionDivider section="ABOUT ME" />

                            {/* Code Snippet */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2.5 }}
                    className=" mt-25 bg-gray-800/40 backdrop-blur-lg h-39 w-90 rounded-2xl">

                    <div className="">

                        {/* Console IDE */}
                        <div>
                            <div className="flex flex-row items-center gap-2.5  bg-gray-800 border-b border-gray-900/70 rounded-t-2xl p-3 cursor-pointer">
                                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                                <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCopy} className="absolute top-2 right-3 text-gray-400  cursor-pointer hover:text-gray-300" />
                            </div>
                        </div>
                        {/* Syntax */}
                        <div className="py-1.5 px-7 flex flex-col text-sm text-white font-mono">
                            <p className="text-gray-500">//About Me</p>
                            <p className='text-white'><span className="text-red-400">const</span><span className="text-blue-300"> developer </span>
                                = <span className="text-yellow-300">{`{`}</span></p>

                            {/* Typewriter Effect */}
                            <div className="ml-5 flex flex-col text-gray-300 text-sm">
                                <div className="flex w-40">
                                    <p className="animate-typewriter overflow-hidden whitespace-nowrap">
                                        <span>name: </span>
                                        <span className=" text-green-400">"Adrian Cruz"</span>
                                    </p>
                                    <span className="animate-blink border-l"></span>
                                </div>

                                {/* No typewriter Effect */}
                                <p>role: <span className="text-green-400">"Frontend Developer"</span>
                                </p>
                                <p>passion: <span className="text-green-400  ">"Building modern UI"</span></p>
                            </div>

                        </div>
                    </div>

                </motion.div>

                {/* Hero Stats */}
                <div className="mt-8 w-90 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {HeroData.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            className="bg-gray-800/40 backdrop-blur-md py-4 px-4 rounded-xl border border-gray-700 cursor-pointer
                            hover:shadow-[0_0_10px_rgba(107,0,255,0.98)] transition-shadow duration-300"
                        >
                            <FontAwesomeIcon icon={stat.icon} className="text-gray-400 text-base mb-2" />
                            <h2 className={`${mediumTextGradient} text-2xl font-bold`}>{stat.count}</h2>
                            <p className="text-gray-400 text-[13px]">{stat.title}</p>
                        </motion.div>
                    ))}
                </div>

            <div
                className={` ${containerClass} mb-18`}>

                <div className="flex flex-row justify-center gap-4">
                    <div className="w-75 h-40 rounded-xl relative overflow-hidden mx-auto">
                        <img src={AdrianDevAvatar} alt="Adrian Cruz" className=" w-full h-full object-cover " />
                    </div>
                    <div className="mt-1 w-90">
                        <h1 className="text-white text-lg font-normal">
                            I'm <span className={`${mediumTextGradient} font-bold`}>Adrian Cruz</span>, a <span className={`${mediumTextGradient} font-semibold`}>Front End Developer</span> based in Quezon City, Philippines.
                        </h1>
                    </div>
                </div>

                <div className="mt-5 text-gray-200 text-sm leading-relaxed">
                    <p>
                        I’m a passionate Front-End Developer dedicated to crafting engaging, intuitive, and visually striking web experiences. With a solid foundation in HTML, CSS, and JavaScript, I specialize in building responsive interfaces that balance functionality and design. I love transforming complex ideas into seamless user journeys that feel effortless and natural.
                    </p>
                </div>

                {/* Personal Stats */}
                {/* <div className="flex flex-row items-center gap-3 justify-between mt-5">
                    {AboutMeData.map((item, index) => (
                        <div key={index} className="flex flex-col items-center gap-0.5 my-auto border border-gray-600 rounded-lg bg-gray-900 p-2.5 h-32 w-30 cursor-pointer text-center">
                            <FontAwesomeIcon icon={item.icon} className="text-green-600 shadow-2xl bg-blue-900/50 rounded-full p-2 text-2xl " />
                            <h1 className="text-white text-[13px] font-semibold w-20">{item.title}</h1>
                        </div>
                    ))}
                </div> */}

            </div>
        </motion.div>
    )
}

export default AboutMe