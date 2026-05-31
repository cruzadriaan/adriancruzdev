import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileLines, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faAnglesDown, faCircle, faCopy } from '@fortawesome/free-solid-svg-icons'
import { faSquareLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { HeroStack } from '../data/HeroData';
import { Link } from 'react-scroll';
import { useRef, useEffect, useState } from 'react';
import FloatingButtons from '../components/FloatingButtons';
import AdrianDevAvatarEnhanced from "../assets/images/AdrianDevAvatarEnhanced.png";



const Hero = () => {

    const heroVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    const heroRef = useRef(null);
    const [showArrowTop, setShowArrowTop] = useState(false);
    const [showArrowDown, setShowArrowDown] = useState(true);


    useEffect(() => {
        const heroElement = heroRef.current;

        const observer = new IntersectionObserver(([entry]) => {
            setShowArrowTop(!entry.isIntersecting);
            setShowArrowDown(entry.isIntersecting);
        }, { threshold: 0.5 });

        if (heroElement) {
            observer.observe(heroElement);
        }
    }, []);


    return (

        <div
            ref={heroRef}
            className="relative mb-23">

            <FloatingButtons showArrowTop={showArrowTop} />

            {/* Background Base */}
            <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-gray-900 to-zinc-900 -z-30" />

            {/* Background Image */}
            <div
                style={{ backgroundImage: "url('/assets/gridBg.svg')" }}
                className="absolute inset-0 bg-cover opacity-[0.7%] -z-20" />

            {/* Content */}
            <div className="relative pt-15 flex flex-col sm:w-120 w-full gap-5 lg:mx-11 md:mx-8 sm:mx-8 px-5 z-10">

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

                <motion.div
                    variants={heroVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }}>

                    {/* Availability Status */}
                    <div className="flex items-center text-green-300 text-xs font-normal my-3 border border-gray-600 w-fit px-3 py-1.5 rounded-full">
                        <FontAwesomeIcon icon={faCircle} className="text-green-500 text-[5px] mr-2" />
                        <span>Available to new opportunities</span>
                    </div>

                    {/* Name introduction */}
                    <h1 className="w-75 text-gray-300 lg:text-lg tracking-tight text-3xl font-bold">Hi, I'm <span className="block text-blue-400 text-5xl">Adrian Cruz</span></h1>
                </motion.div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 2 }}
                    transition={{ duration: 1 }}>

                    {/* Paragraph */}
                    <h1 className="mt-2 text-zinc-400 text-[14px] w-full">
                        Building fast, modern web experiences with clean UI, smooth interactions, and scalable frontend architecture.
                    </h1>

                </motion.div>

                <div className={`relative w-90 mx-auto flex items-center justify-center`}>
                    <img src={AdrianDevAvatarEnhanced} alt="Adrian Cruz" className="w-79 h-80 bg-cover rounded-md" />

                    {/* Code Snippet */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.5 }}
                        className="absolute -bottom-3 -left-2 bg-gray-800 backdrop-blur-lg w-55 h-28 rounded-2xl flex flex-col mx-auto border border-gray-700 cursor-pointer
                                    hover:shadow-[0_0_10px_rgba(107,0,255,0.98)] transition-shadow duration-300"
                    >

                        <div>
                            <div className="flex flex-row items-center gap-2.5  bg-gray-800 border-b border-gray-900/70 rounded-t-2xl p-2 cursor-pointer">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCopy} className="absolute top-2 right-3 text-xs text-gray-400  cursor-pointer hover:text-gray-300" />
                            </div>
                        </div>

                        {/* Syntax */}
                        <div className="py-1.5 px-4 flex flex-col text-[9px] text-white font-mono">
                            {/* <p className="text-gray-500">//About Me</p> */}
                            <p className='text-white'><span className="text-red-400">const</span><span className="text-blue-300"> developer </span>
                                = <span className="text-yellow-300">{`{`}</span></p>


                            <div className="ml-5 flex flex-col text-gray-300 text-[9px]">

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

                </div>




                {/* BUTTONS */}
                <div className="mt-6 mb-12 flex flex-col justify-center items-center flex-wrap w-full gap-4 text-sm mx-auto">
                    <Link to='project' smooth={true} duration={800} offset={-100} className="bg-linear-to-r hover:shadow-[0_0_7px_1px_rgba(96,165,250,0.5)] from-blue-600 to-purple-600 text-white text-center font-semibold lg:py-3 lg:px-5 w-full py-3 px-3 rounded-xl cursor-pointer">
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-1" />
                        Explore My Work
                    </Link>
                    <a href="/files/CruzAdrianCV.pdf" target="_blank" rel="noopener noreferrer" className="hover:bg-zinc-700/90 border border-gray-400  shadow-md backdrop-blur-md text-gray-400 text-center font-semibold lg:py-3 lg:px-5 py-3 px-3 w-full rounded-xl cursor-pointer">
                        <FontAwesomeIcon icon={faFileLines} className="mr-1" />
                        View Resume
                    </a>
                    <div className="flex flex-row items-center gap-8 mt-2">


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
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            {showArrowDown && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="flex flex-col items-center  ml-5 opacity-60" >
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: [0, 10, 0], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <Link to="aboutme" smooth={true} duration={800} offset={-100}
                            className="flex flex-row items-center justify-center gap-2 cursor-pointer">
                            <FontAwesomeIcon icon={faAnglesDown} className="text-gray-400 text-xl" />
                            <span className="text-gray-300 text-[10px]">Explore for more</span>
                        </Link>
                    </motion.div>
                </motion.div>
            )}

        </div>
    )
}

export default Hero