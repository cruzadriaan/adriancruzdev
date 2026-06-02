import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileLines, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faAnglesDown, faCircle } from '@fortawesome/free-solid-svg-icons'
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
            setShowArrowTop(entry.intersectionRatio < 0.5);
            setShowArrowDown(entry.intersectionRatio > 0.9);
        }, { threshold: [ 0.5, 0.9] });

        if (heroElement) {
            observer.observe(heroElement);
        }
        return () => observer.unobserve(heroElement);
    }, []);


    return (

        <div
            ref={heroRef}
            className="relative mb-16 min-h-screen overflow-hidden">

            <FloatingButtons showArrowTop={showArrowTop} />

            {/* Background Base */}
            <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-gray-900 to-zinc-900 -z-30" />

            {/* Background Image */}
            <div
                style={{ backgroundImage: "url('/assets/gridBg.svg')" }}
                className="absolute inset-0 bg-cover opacity-1 -z-20" />

            {/* Content */}
            <div className="relative pt-13 pb-14 flex flex-col items-center sm:w-120 w-full lg:mx-11 md:mx-8 sm:mx-8 px-5 z-10">

                <motion.div
                    variants={heroVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center justify-center">

                    {/* Availability Status */}
                    <div className=" text-green-400 text-[11px] font-normal mb-4 border border-gray-600 w-fit px-3 py-1.5 rounded-full">
                        <FontAwesomeIcon icon={faCircle} className="text-green-500 text-[5px] mr-2" />
                        <span>Open to Frontend Opportunities</span>
                    </div>

                    {/* My Avatar */}
                    <div className="flex items-center justify-center mb-4 bg-linear-to-r from-blue-300 to-purple-400 p-px rounded-full">
                        <img src={AdrianDevAvatar} alt="Adrian Cruz" className="w-45 h-45 bg-cover rounded-full shadow-[0px_10px_62px_1px_rgba(147,19,187,0.75)]" />
                    </div>

                    {/* Name introduction */}
                    <div className="flex flex-col justify-start">
                        <h1 className="flex flex-col items-center w-80 text-center text-gray-300 lg:text-lg tracking-tight text-2xl font-bold">Hello, I'm
                            <h1 className={`${hardTextGradient} block text-[38px]`}> Adrian Cruz</h1>
                        </h1>
                    </div>
                    {/* Role */}
                    <h1 className={`text-gray-400 text-lg mt-2 font-semibold`}>Frontend Developer</h1>
                    {/* Tagline */}
                    {/* <p className="text-gray-400 text-[12px] mt-2 text-center">Specialized in React & Modern UI Development</p> */}
                </motion.div>


                <div>
                    {/* Tech Stack Chips */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="flex flex-row gap-4 mt-3 mb-3 borde flex-wrap"
                    >
                        {HeroData.map((hero, index) => (
                            <div key={index} className="flex flex-row text-[11px] items-center border border-gray-700/50 bg-gray-800/80 backdrop-blur-lg shadow-md px-2 py-1 rounded-lg gap-2 cursor-pointer hover:shadow-[0_0_10px_rgba(107,0,255,0.98)] transition-shadow duration-300">
                                <i className={`${hero.logo} text-base`}></i>
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
                    <h1 className="text-zinc-300 text-center text-[14px] max-w-70 leading-relaxed">
                        TUrning ideas into responsive and accessible web applications
                    </h1>
                </motion.div>


                {/* BUTTONS */}
                <div className="mt-5 mb-5 flex flex-row justify-center items-center flex-wrap w-full gap-5 text-sm mx-auto">
                    <Link to='project' smooth={true} duration={800} offset={-100} className="bg-linear-to-r hover:shadow-[0_0_7px_1px_rgba(96,165,250,0.5)] from-blue-500 to-purple-500 text-white text-center font-semibold lg:py-3 lg:px-5  py-3 px-5 rounded-xl cursor-pointer">
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-1" />
                        View Projects
                    </Link>
                    <a href="/files/CruzAdrianCV.pdf" target="_blank" rel="noopener noreferrer" className="hover:bg-zinc-800/50 border border-gray-400  shadow-md backdrop-blur-md text-gray-300 text-center font-semibold lg:py-3 lg:px-5 py-3 px-3.5  rounded-xl cursor-pointer">
                        <FontAwesomeIcon icon={faFileLines} className="mr-1" />
                        Resume PDF
                    </a>

                </div>

                <div>
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



            {/* Scroll Indicator */}
            {showArrowDown && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-60 z-20" >
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: [0, 10, 0], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <Link to="aboutme" smooth={true} duration={800} offset={-40}
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