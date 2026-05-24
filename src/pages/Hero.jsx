import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
    return (
        <div className="flex flex-col w-90 gap-5 mt-28 mb-10 mx-5">
            <div className="items-left justify-center text-white font-bold text-5xl">
                <h1>Hello, I'm</h1>
                <h1 className="text-blue-400">Adrian Cruz</h1>
            </div>
            <div>
                <h1 className="text-gray-300 text-[14px] font-semibold">TURNING IDEAS INTO INTERACTIVE,<br/> HIGH PERFORMANCE WEBSITES.</h1>
            </div>
            <div>
                <h1 className="text-white text-[14px] font-light">I build responsive, Full‑stack web applications that deliver exceptional digital experiences. My focus is on blending modern design with robust functionality, turning ideas into seamless, high‑performance solutions.</h1>
            </div>
            <div className="flex flex-row gap-4 mt-2 text-sm">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full cursor-pointer">
                    <FontAwesomeIcon icon={faSquareArrowUpRight} className="mr-1" />
                    Explore My Work
                </button>
                <button className="bg-white hover:bg-gray-700 text-black font-semibold py-2 px-5 rounded-full cursor-pointer">
                    <FontAwesomeIcon icon={faSquareArrowUpRight} className="mr-1" />
                    Get in Touch
                </button>
            </div>
        </div>
    )
}

export default Hero