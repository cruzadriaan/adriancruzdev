import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileLines, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faSquareLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HeroData } from '../data/HeroData';

const Hero = ({  hardTextGradient, mediumTextGradient }) => {

    const heroVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <div className="relative h-250 mb-35">

            {/* Background Base */}
            <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-gray-900 to-zinc-900 -z-30" />

            {/* Background Image */}
            <div
                style={{ backgroundImage: "url('/assets/gridBg.svg')" }}
                className="absolute inset-0 bg-cover opacity-1 -z-20" />

            {/* Content */}
            <div className="relative pt-27 flex flex-col sm:w-120 w-full gap-5 lg:mx-11 md:mx-8 sm:mx-8 px-5 mb-25 z-10">

                {/* Name introduction */}
                <motion.div
                    variants={heroVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }}
                    className="items-left justify-center lg:text-6xl">
                    <h1 className="text-white text-3xl font-bold mb-1">Hello, I'm</h1>
                    <h1 className={`${hardTextGradient} text-5xl md:text-7xl font-extrabold`}>Adrian Cruz</h1>
                </motion.div>

                {/* Tagline */}
                <motion.div
                    variants={heroVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }}>
                    <h1 className="mt-1 text-gray-300 lg:text-lg tracking-wide text-[13px] font-semibold">TURNING IDEAS INTO INTERACTIVE,<br /> HIGH PERFORMANCE WEBSITES.</h1>
                </motion.div>

                {/* Paragraph */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}>
                    <h1 className="mt-3 text-gray-300 text-base w-70">
                        Building fast, modern web experiences with clean UI, smooth interactions, and scalable frontend architecture.
                    </h1>
                </motion.div>

                {/* BUTTONS */}
                <div className="mt-2 flex flex-row items-center flex-wrap w-85 gap-4 text-sm">
                    <Link to='project' smooth={true} duration={800} offset={-100} className="bg-linear-to-r hover:from-blue-700 hover:to-purple-700 from-blue-600 to-purple-600 text-white text-center font-semibold lg:py-3 lg:px-5 w-43 py-2 px-3 rounded-xl cursor-pointer">
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-1" />
                        Explore My Work
                    </Link>
                    <a href="/files/CruzAdrianCV.pdf" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-white/90 text-black font-semibold lg:py-3 lg:px-5 py-2 px-5 rounded-xl cursor-pointer">
                        <FontAwesomeIcon icon={faFileLines} className="mr-1" />
                        View Resume
                    </a>
                    <Link to="contact" smooth={true} duration={800} offset={-100} className="text-blue-400 mt-4">
                        <span className="mr-1">Get in Touch</span>
                        <FontAwesomeIcon icon={faArrowRight} className="" />
                    </Link>

                </div>

                {/* Social Icons */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="mt-3 flex flex-row gap-4">
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

                {/* Code Snippet */}
                <motion.div 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2 }}
                className="relative mt-2 bg-black/50 h-40 w-90 rounded-lg shadow-lg">
                    <div className="py-5 px-7 flex flex-col gap-1 text-sm text-white">
                        <p className='text-white'><span className="text-red-400">const</span><span className="text-blue-300"> developer</span>  = {`{`}</p>
                        <div className="ml-5 flex flex-col text-gray-300 gap-1">
                            <p>name: <span className="text-green-300">"Adrian Cruz"</span></p>
                            <p>role: <span className="text-green-300">"Frontend Developer"</span></p>
                            <p>passion: <span className="text-green-300">"Building modern UI"</span></p>
                        </div>
                        <p className='text-white'>{`}`}
                            {/* <span className="animate-blink">|</span> */}
                        </p>
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
            </div>

            {/* Scroll Indicator */}
            {/* <div className="flex flex-row items-center justify-center mt-7" >
                <motion.div
                    animate={{ y: [0, 10, 0], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <Link to="aboutme" smooth={true} duration={800} offset={-100}
                      className="flex flex-col items-center justify-center gap-2 cursor-pointer">
                        <FontAwesomeIcon icon={faAnglesDown} className="text-gray-400 text-xl" />
                        <span className="text-gray-300 text-[10px]">Explore for more</span>
                    </Link>
                </motion.div>
            </div> */}

        </div>
    )
}

export default Hero