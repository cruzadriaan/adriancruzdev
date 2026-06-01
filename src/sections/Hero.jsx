import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileLines, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faAnglesDown, faCircle, faCopy } from '@fortawesome/free-solid-svg-icons'
import { faSquareLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { HeroData } from "../data/HeroData";
import { Link } from 'react-scroll';
import { useRef, useEffect, useState } from 'react';
import FloatingButtons from '../components/FloatingButtons';
import AdrianDevAvatar from "../assets/images/AdrianDevAvatar.jpg";



const Hero = ({ hardTextGradient }) => {

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
            className="relative mb-30 overflow-hidden">

            <FloatingButtons showArrowTop={showArrowTop} />

            {/* Background Base */}
            <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-gray-900 to-zinc-900 -z-30" />

            {/* Background Image */}
            <div
                style={{ backgroundImage: "url('/assets/gridBg.svg')" }}
                className="absolute inset-0 bg-cover opacity-1 -z-20" />

            {/* My Avatar */}
            <div className="absolute top-43 right-5 z-10 ">
                <img src={AdrianDevAvatar} alt="Adrian Cruz" className="w-45 h-45 bg-cover rounded-md" />
            </div>

            {/* Content */}
            <div className="relative pt-18 flex flex-col sm:w-120 w-full gap-3 lg:mx-11 md:mx-8 sm:mx-8 px-5 z-10">

                <motion.div
                    variants={heroVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }}>

                    {/* Availability Status */}
                    <div className="flex items-center text-green-400 text-xs font-normal mb-5 border border-gray-600 w-fit px-3 py-1.5 rounded-full">
                        <FontAwesomeIcon icon={faCircle} className="text-green-500 text-[5px] mr-2" />
                        <span>Open to Frontend Opportunities</span>
                    </div>

                    {/* Name introduction */}
                    <h1 className="w-80 text-gray-300 lg:text-lg tracking-tight text-3xl font-bold">Hi, I'm
                        <span className={`${hardTextGradient} text-4xl`}> Adrian Cruz</span></h1>
                    <h1 className={`text-white text-xl mt-2 font-semibold`}>Frontend Developer</h1>
                </motion.div>


                <div>
                    {/* Tech Stack Icons */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="flex flex-row gap-2 my-3 flex-wrap"
                    >
                        {HeroData.map((hero, index) => (
                            <div key={index} className="flex flex-row text-[12px] items-center">
                                <i className={`${hero.logo} text-base mr-2`}></i>
                                <span className="text-gray-300">{hero.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 2 }}
                    transition={{ duration: 1 }}>

                    {/* Paragraph */}
                    <h1 className="text-zinc-300 text-[14px] w-60">
                        I turn ideas into fast, interactive web experiences using React, Tailwind, and modern frontend architecture.
                    </h1>
                </motion.div>


                <div className={`relative w-90 mx-auto flex items-center justify-center mt-30`}>

                    {/* Code Snippet */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.5 }}
                        className="absolute -bottom-2 -left-10 bg-gray-800 backdrop-blur-lg w-55 h-28 rounded-2xl flex flex-col mx-auto border border-gray-700 cursor-pointer
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
                        <div className="py-1.5 px-2 flex flex-col text-[9px] text-white font-mono">
                            {/* <p className="text-gray-500">//About Me</p> */}
                            <p className='text-white'><span className="text-red-400">const</span><span className="text-blue-300"> developer </span>
                                = <span className="text-yellow-300">{`{`}</span></p>


                            <div className="ml-5 flex flex-col text-gray-300 text-[9px]">

                                {/* Typewriter Effect */}
                                <div className="flex w-40">
                                    <p className="animate-typewriter overflow-hidden whitespace-nowrap">
                                        <span>focus: </span>
                                        <span className=" text-green-400">"Frontend Engineering"</span>,
                                    </p>
                                    <span className="animate-blink border-l"></span>
                                </div>


                                <p>experience: <span className="text-green-400  ">"2+ Years"</span>,</p>
                                {/* No typewriter Effect */}
                                <p className='text-gray-200'>
                                    <span>specialization: </span>
                                    <span className="text-green-400">"React Ecosystem"</span>
                                </p>
                                <p><span className="text-yellow-300 pt-1 block">{`}`}</span></p>
                            </div>

                        </div>

                    </motion.div>
                </div>

                {/* BUTTONS */}
                <div className="mt-5 mb-10 flex flex-col justify-center items-center flex-wrap w-full gap-4 text-sm mx-auto">
                    <Link to='project' smooth={true} duration={800} offset={-100} className="bg-linear-to-r hover:shadow-[0_0_7px_1px_rgba(96,165,250,0.5)] from-blue-600 to-purple-600 text-white text-center font-semibold lg:py-3 lg:px-5 w-full py-3 px-3 rounded-xl cursor-pointer">
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-1" />
                        View Projects
                    </Link>
                    <a href="/files/CruzAdrianCV.pdf" target="_blank" rel="noopener noreferrer" className="hover:bg-zinc-800/50 border border-gray-100  shadow-md backdrop-blur-md text-gray-100 text-center font-semibold lg:py-3 lg:px-5 py-3 px-3 w-full rounded-xl cursor-pointer">
                        <FontAwesomeIcon icon={faFileLines} className="mr-1" />
                        Resume PDF
                    </a>
                    <div className="flex flex-row items-center gap-8 mt-1">


                        {/* Social Icons */}
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 2 }}
                            className=" flex flex-row gap-4">
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
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-60 z-20" >
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