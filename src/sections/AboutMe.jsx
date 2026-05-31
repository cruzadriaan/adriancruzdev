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



            {/* About Me Content */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 3 }}
                viewport={{ once: true, amount: 0.2 }}
                className={` ${containerClass} mb-15`}>

                {/* About Me Image and Introduction */}
                <div className="flex  flex-row  gap-4">
                    <div className="w-95 h-35 rounded-xl relative overflow-hidden mx-auto">
                        <img src={AdrianDevAvatar} alt="Adrian Cruz" className=" w-full h-full object-center" />
                    </div>
                    <div className="mt-1">
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