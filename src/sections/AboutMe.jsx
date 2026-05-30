// import SectionDivider from "../components/SectionDivider";
import AdrianDevAvatar from "../assets/images/AdrianDevAvatarEnhanced.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
// import { cardVariants } from "../utils/cardVariants";
import { AboutMeStats } from "../data/AboutMeData";

const AboutMe = ({ containerClass, mediumTextGradient }) => {
    return (
        <>
            {/* <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 2 }}
                className="flex flex-col"
            >

                <SectionDivider section="ABOUT ME" />

            </motion.div> */}

            {/* Code Snippet */}
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2.5 }}
                className=" bg-gray-800/40 backdrop-blur-lg w-90 h-45 rounded-2xl flex flex-col mx-auto border border-gray-700 cursor-pointer
                    hover:shadow-[0_0_10px_rgba(107,0,255,0.98)] transition-shadow duration-300 mb-5"
            >

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


                        <div className="ml-5 flex flex-col text-gray-300 text-sm">

                            {/* Typewriter Effect */}
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
                            <p><span className="text-yellow-300 pt-1 block">{`}`}</span></p>
                        </div>

                    </div>

            </motion.div>

            {/* About Me Content */}
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: true, amount: 0.2 }}
                className={` ${containerClass} mb-15`}>

                {/* About Me Image and Introduction */}
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

                {/* About Me Description */}
                <div className="mt-5 text-gray-200 text-sm leading-relaxed">
                    <p>
                        I’m a passionate Front-End Developer dedicated to crafting engaging, intuitive, and visually striking web experiences. With a solid foundation in HTML, CSS, and JavaScript, I specialize in building responsive interfaces that balance functionality and design. I love transforming complex ideas into seamless user journeys that feel effortless and natural.
                    </p>
                </div>
            </motion.div>

            {/* Hero Stats */}
            <div className="mx-auto mb-15 w-90 grid grid-cols-2 md:grid-cols-4 gap-4">
                {AboutMeStats.map((stat, index) => (
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

        </>
    )
}

export default AboutMe