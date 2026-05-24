import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSquareArrowUpRight, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faSquareLinkedin, faSquareGithub} from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
    return (
        <div className="flex flex-col sm:w-120 w-85 gap-5 mt-28 mb-5 lg:mx-11 md:mx-8 sm:mx-8 mx-5">
            <div className="items-left justify-center lg:text-6xl text-5xl">
                <h1 className="text-white text-3xl font-bold">Hello, I'm</h1>
                <h1 className="text-blue-400 font-bold">Adrian Cruz</h1>
            </div>
            <div>
                <h1 className="text-gray-300 lg:text-lg text-[14px] font-semibold">TURNING IDEAS INTO INTERACTIVE,<br/> HIGH PERFORMANCE WEBSITES.</h1>
            </div>
            <div>
                <h1 className="text-white lg:text-base text-[14px] font-light">I build responsive, Full‑stack web applications that deliver exceptional digital experiences. My focus is on blending modern design with robust functionality, turning ideas into seamless, high‑performance solutions.</h1>
            </div>
            <div className="flex flex-row gap-4">
                <a href="https://www.linkedin.com/in/adrian-cruzdev/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSquareLinkedin} className="text-gray-200 text-2xl rounded-full hover:scale-110 cursor-pointer" />
                </a>
                <a href="https://github.com/cruzadriaan" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSquareGithub} className="text-gray-200 text-2xl rounded-full hover:scale-110 cursor-pointer" />
                </a>
                <a href="mailto:adriancruzemail@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-200 text-2xl rounded-full hover:scale-110 cursor-pointer" />
                </a>
            </div>
            <div className="flex flex-row gap-4 mt-2 text-sm">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold lg:py-3 lg:px-5 py-2 px-4 rounded-full cursor-pointer">
                    <FontAwesomeIcon icon={faSquareArrowUpRight} className="mr-1" />
                    Explore My Work
                </button>
                <button className="bg-white hover:bg-gray-700 text-black font-semibold lg:py-3 lg:px-5 py-2 px-5 rounded-full cursor-pointer">
                    <FontAwesomeIcon icon={faSquareArrowUpRight} className="mr-1" />
                    Get in Touch
                </button>
            </div>
        </div>
    )
}

export default Hero