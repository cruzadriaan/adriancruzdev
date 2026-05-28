import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileLines, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { faSquareLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = ({ hardTextGradient, mediumTextGradient }) => {

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <div
            className="relative flex flex-col sm:w-120 w-90 gap-5 mt-35 lg:mx-11 md:mx-8 sm:mx-8 mx-5 mb-25
        ">
            {/* Name introduction */}
            <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }}
                className="items-left justify-center lg:text-6xl">
                <h1 className="text-white text-3xl font-bold mb-1">Hello, I'm</h1>
                <h1 className={`${hardTextGradient} text-5xl md:text-7xl font-extrabold`}>Adrian Cruz</h1>
            </motion.div>

            {/* Tagline */}
            <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }}>
                <h1 className="mt-1 text-gray-300 lg:text-lg text-[14px] font-semibold">TURNING IDEAS INTO INTERACTIVE,<br /> HIGH PERFORMANCE WEBSITES.</h1>
            </motion.div>

            {/* Paragraph */}
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}>
                <h1 className="mt-4 text-gray-300 text-base w-70"><span className={mediumTextGradient}>I build modern, responsive web interfaces</span> that deliver exceptional digital experiences — blending design expertise with <span className={mediumTextGradient}>Frontend development</span>, and growing toward <span className={mediumTextGradient}>Full‑stack</span>.</h1>
            </motion.div>

            {/* Social Icons */}
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="mt-1 flex flex-row gap-4">
                <a href="https://www.linkedin.com/in/adrian-cruzdev/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSquareLinkedin} className="text-gray-200 text-3xl rounded-full hover:scale-110 cursor-pointer" />
                </a>
                <a href="https://github.com/cruzadriaan" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSquareGithub} className="text-gray-200 text-3xl rounded-full hover:scale-110 cursor-pointer" />
                </a>
                <a href="mailto:adriancruzemail@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-200 text-3xl rounded-full hover:scale-110 cursor-pointer" />
                </a>
            </motion.div>

            {/* BUTTONS */}
            <div className="mt-1 flex flex-row items-center flex-wrap w-85 gap-4 text-sm">
                <Link to='project' smooth={true} duration={800} offset={-100} className="bg-linear-to-r hover:from-blue-700 hover:to-purple-700 from-blue-600 to-purple-600 text-white text-center font-semibold lg:py-3 lg:px-5 w-43 py-2 px-3 rounded-xl cursor-pointer">
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-1" />
                    Explore My Work
                </Link>
                <Link to="contact" smooth={true} duration={800} offset={-100} className="bg-white hover:bg-white/90 text-black font-semibold lg:py-3 lg:px-5 py-2 px-5 rounded-xl cursor-pointer">
                    <FontAwesomeIcon icon={faCommentDots} className="mr-1 font-semibold" />
                    Get in Touch
                </Link>
                <a href="/files/CruzAdrianCV.pdf" target="_blank" rel="noopener noreferrer" className="border border-gray-400 hover:bg-white/5 text-white text-center font-semibold lg:py-3 lg:px-5 w-82 py-3 mt-1 px-3 rounded-xl cursor-pointer">
                    <FontAwesomeIcon icon={faFileLines} className="mr-1" />
                    View my Resume
                </a>
            </div>

            {/* Scroll Indicator */}
            <div className="relative mt-20" >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-5">
                    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-1">
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero