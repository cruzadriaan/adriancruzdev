import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileLines, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight, faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { faSquareLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { HeroStack } from '../data/HeroData';
import { Link } from 'react-scroll';

const Hero = () => {

    const heroVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <div className="relative h-180 mb-35">

            {/* Background Base */}
            <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-gray-900 to-zinc-900 -z-30" />

            {/* Background Image */}
            <div
                style={{ backgroundImage: "url('/assets/gridBg.svg')" }}
                className="absolute inset-0 bg-cover opacity-[0.7%] -z-20" />

            {/* Content */}
            <div className="relative pt-29 flex flex-col sm:w-120 w-full gap-5 lg:mx-11 md:mx-8 sm:mx-8 px-5 z-10">

                {/* Name introduction */}
                {/* <motion.div
                    variants={heroVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }}
                    className="items-left justify-center lg:text-6xl">
                    <h1 className="text-white text-3xl font-bold mb-1">Hello, I'm</h1>
                    <h1 className={`bg-clip-text text-transparent bg-linear-to-r from-blue-500 via-blue-400 to-violet-500 text-5xl md:text-7xl font-extrabold`}>Adrian Cruz</h1>
                </motion.div> */}

                {/* Tagline */}
                <motion.div
                    variants={heroVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }}>
                    <h1 className=" text-gray-300 lg:text-lg tracking-wide text-4xl font-bold">TURNING <span className="text-blue-400">IDEAS</span> INTO <span className="text-purple-400">INTERACTIVE</span> AND <span className="text-violet-400">HIGH PERFORMANCE</span> WEBSITES.</h1>
                </motion.div>


                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 2 }}
                    transition={{ duration: 1 }}>

                    {/* Paragraph */}
                    <h1 className="mt-2 text-zinc-400 text-[14px] w-80">
                        Building fast, modern web experiences with clean UI, smooth interactions, and scalable frontend architecture.
                    </h1>

                    {/* Technologies */}
                    <div className="mt-4 flex flex-row items-center gap-4">
                        {HeroStack.map((tech, index) => (
                            <div key={index} className="text-zinc-400 text-[12px]">
                                <span className="border border-zinc-600 py-1 px-3 rounded-md ">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="mt-2 flex flex-row gap-4">
                    <a href="https://www.linkedin.com/in/adrian-cruzdev/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faSquareLinkedin} className="text-gray-100 text-2xl hover:shadow-[0_0_7px_2px_rgba(96,165,250,0.5)] bg-gray-800/80 backdrop-blur-lg shadow-md p-2 rounded-lg hover:scale-110 cursor-pointer" />
                    </a>
                    <a href="https://github.com/cruzadriaan" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faSquareGithub} className="text-gray-100 text-2xl hover:shadow-[0_0_7px_2px_rgba(96,165,250,0.5)] bg-gray-800/80 backdrop-blur-lg shadow-md p-2 rounded-lg hover:scale-110 cursor-pointer" />
                    </a>
                    <a href="mailto:adriancruzemail@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} className="text-gray-100 text-2xl hover:shadow-[0_0_7px_2px_rgba(96,165,250,0.5)] bg-gray-800/80 backdrop-blur-lg shadow-md p-2 rounded-lg hover:scale-110 cursor-pointer" />
                    </a>
                </motion.div>

                {/* BUTTONS */}
                <div className="mt-2 flex flex-col justify-center items-center flex-wrap w-full gap-4 text-sm mx-auto">
                    <Link to='project' smooth={true} duration={800} offset={-100} className="bg-linear-to-r hover:shadow-[0_0_7px_1px_rgba(96,165,250,0.5)] from-blue-600 to-purple-600 text-white text-center font-semibold lg:py-3 lg:px-5 w-full py-2 px-3 rounded-xl cursor-pointer">
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-1" />
                        Explore My Work
                    </Link>
                    <a href="/files/CruzAdrianCV.pdf" target="_blank" rel="noopener noreferrer" className="hover:bg-zinc-700/90 bg-zinc-700/70 shadow-md backdrop-blur-md text-gray-100 text-center font-semibold lg:py-3 lg:px-5 py-2 px-3 w-full rounded-xl cursor-pointer">
                        <FontAwesomeIcon icon={faFileLines} className="mr-1" />
                        View Resume
                    </a>
                    <Link to="contact" smooth={true} duration={800} offset={-100} className="hover:text-blue-300 text-blue-400 mt-3 cursor-pointer">
                        <span className="mr-1">Get in Touch</span>
                        <FontAwesomeIcon icon={faArrowRight} className="" />
                    </Link>

                </div>

            </div>

            {/* Scroll Indicator */}
            <div className="flex flex-row items-center justify-center mt-7 opacity-60" >
                <motion.div
                    animate={{ y: [0, 10, 0], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <Link to="aboutme" smooth={true} duration={800} offset={-100}
                        className="flex flex-col items-center justify-center gap-2 cursor-pointer">
                        <FontAwesomeIcon icon={faAnglesDown} className="text-gray-400 text-lg" />
                        {/* <span className="text-gray-300 text-[9px]">Explore for more</span> */}
                    </Link>
                </motion.div>
            </div>

        </div>
    )
}

export default Hero