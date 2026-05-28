import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileLines, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { faSquareLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import {Link} from 'react-scroll';

const Hero = ({ hardTextGradient, mediumTextGradient }) => {

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <div
            className="relative flex flex-col sm:w-120 w-85 gap-5 mt-35 lg:mx-11 md:mx-8 sm:mx-8 mx-5 mb-25
        ">
            <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }}
                className="items-left justify-center lg:text-6xl">
                <h1 className="text-white text-3xl font-bold mb-1">Hello, I'm</h1>
                <h1 className={`${hardTextGradient} text-5xl md:text-7xl font-extrabold`}>Adrian Cruz</h1>
            </motion.div>
            <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }}>
                <h1 className="text-gray-300 lg:text-lg text-[14px] font-semibold">TURNING IDEAS INTO INTERACTIVE,<br /> HIGH PERFORMANCE WEBSITES.</h1>
            </motion.div>
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}>
                <h1 className="mt-2 text-gray-300 text-base w-90 leading-relaxed">I <span className={mediumTextGradient}>build modern, responsive web interfaces</span> that deliver exceptional digital experiences — blending design expertise with <span className={mediumTextGradient}>Frontend development</span>, and growing toward <span className={mediumTextGradient}>Full‑stack</span>.</h1>
            </motion.div>
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            className="flex flex-row gap-4">
                <a href="https://www.linkedin.com/in/adrian-cruzdev/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSquareLinkedin} className="text-gray-200 text-2xl rounded-full hover:scale-110 cursor-pointer" />
                </a>
                <a href="https://github.com/cruzadriaan" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSquareGithub} className="text-gray-200 text-2xl rounded-full hover:scale-110 cursor-pointer" />
                </a>
                <a href="mailto:adriancruzemail@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-200 text-2xl rounded-full hover:scale-110 cursor-pointer" />
                </a>
            </motion.div>

            {/* BUTTONS */}
            <div className="flex flex-row items-center flex-wrap w-95 gap-4 mt-2 text-sm">
                <Link to='project' smooth={true} duration={800} offset={-100} className="bg-linear-to-r hover:from-blue-600 hover:to-purple-600 from-blue-500 to-purple-500 text-white text-center font-semibold lg:py-3 lg:px-5 w-43 py-2 px-3 rounded-full cursor-pointer">
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-1" />
                    Explore My Work
                </Link>
                <Link to="contact" smooth={true} duration={800} offset={-100} className="bg-white hover:bg-white/90 text-black font-semibold lg:py-3 lg:px-5 py-2 px-5 rounded-full cursor-pointer">
                    <FontAwesomeIcon icon={faCommentDots} className="mr-1 font-semibold" />
                    Get in Touch
                </Link>
                <a href="/files/CruzAdrianCV.pdf" target="_blank" rel="noopener noreferrer" className="border border-white hover:bg-white/5 text-white text-center font-semibold lg:py-3 lg:px-5 w-43 py-2 px-3 rounded-full cursor-pointer">
                    <FontAwesomeIcon icon={faFileLines} className="mr-1" />
                    View my Resume
                </a>
            </div>
        </div>
    )
}

export default Hero