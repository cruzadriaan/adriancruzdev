// import AdrianAvatar from "../assets/images/AdrianDevAvatar.jpg";
import AdrianAvatarEnhanced from "../assets/images/AdrianDevAvatarEnhanced.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { MenuData } from "../data/MenuData";
import { ContactData } from "../data/ContactData";
import { useState } from "react";
import { Link } from "react-scroll";
import AdrianDevLogo from "../assets/images/AdrianDevLogo.png";

const Navbar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            {/* Top backdrop of navbar */}
            {/* <div className="fixed top-0 left-0 w-full h-5 bg-gray-900/80 backdrop-blur-md z-30" /> */}

            {/* Navbar */}
            <div className="fixed top-2 left-1/2 -translate-x-1/2 xl:w-290 lg:w-220 md:w-170 sm:w-140 w-95 flex flex-row items-center justify-between px-3 py-1 gap-2 rounded-xl bg-gray-800/20 backdrop-blur-2xl border border-gray-700/40 shadow-lg z-40">

                <div className="flex flex-row items-center gap-2 ">
                    {/* <img src={AdrianDevLogo} alt="Adrian Dev Logo" className="w-8 h-5 " /> */}
                    <h1 className="text-white text-xl font-semibold">AC.</h1>
                </div>

                <div className="flex flex-row items-center justify-center gap-5">
                    <button onClick={() => setIsSidebarOpen(true)}>
                        <FontAwesomeIcon icon={faBars} className="text-gray-200 text-sm border bg-gray-800 hover:scale-105 shadow-md border-gray-700 rounded-md p-2 cursor-pointer" />
                    </button>

                    {/* <Link to="hero" smooth={true} duration={800} offset={-90} className="cursor-pointer">
                        <img src={AdrianAvatarEnhanced} alt="Adrian Cruz" className="w-8 h-8 border border-blue-800 rounded-md" />
                    </Link> */}
                </div>

            </div>


            {/* Sidebar */}
            <div className={`fixed right-0 top-0 h-full w-60 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-700 bg-linear-to-r from-slate-900 via-gray-900 to-zinc-900 shadow-lg py-4 z-60`}>
                <div className="flex flex-row ml-3 gap-4">
                    <img src={AdrianAvatarEnhanced} alt="Adrian Cruz" className="w-13 h-13 border border-blue-900 mb-5 rounded-full" />
                    <div className="flex flex-col mt-1">
                        <h1 className="text-white text-sm font-semibold">Adrian Cruz</h1>
                        <h2 className="text-gray-400 text-[11px]">Front End Developer</h2>
                    </div>
                    <div className="ml-auto mr-2">
                        <button className="text-gray-200 hover:text-white/80 cursor-pointer"
                            onClick={() => setIsSidebarOpen(false)}>
                            <FontAwesomeIcon icon={faXmark} className="text-base" />
                        </button>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="ml-3 mt-1">
                    <h1 className="text-gray-500 text-[10px]">NAVIGATION</h1>
                    <ul className="">
                        {MenuData.map((item, index) => (
                            <li key={index} className="flex flex-col gap-4 mt-3">
                                <Link to={item.link} smooth={true} duration={800} offset={item.offset} spy={true} activeClass="active-nav"
                                    className="text-gray-300 active:bg-gray-800/80 text-[14px] font-semibold  cursor-pointer hover:bg-gray-800 p-2 rounded-md mr-3" onClick={() => setIsSidebarOpen(false)}>
                                    <FontAwesomeIcon icon={item.icon} className="mr-2" />
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Links */}
                <div className="ml-3 mt-7">
                    <h1 className="text-gray-500 text-[10px]">SOCIAL</h1>
                    <ul className="flex flex-col gap-4 mt-3">
                        {ContactData.social.map((item, index) => (
                            <li key={index} className="text-gray-300 active:bg-gray-800/80 hover:text-blue-400 text-[14px] font-semibold cursor-pointer hover:bg-gray-800 p-2 rounded-md mr-3">
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={item.icon} className="mr-2" />
                                    <span>{item.type}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Other Links */}
                <div className="ml-3 mt-7">
                    <h1 className="text-gray-500 text-[10px]">OTHERS</h1>
                    <ul className="flex flex-col gap-4 mt-3">
                        {ContactData.others.map((item, index) => (
                            <li key={index} className="text-gray-300 active:bg-gray-800/80 hover:text-blue-400 text-[14px] font-semibold  cursor-pointer hover:bg-gray-800 p-2 rounded-md mr-3">
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={item.icon} className="mr-2" />
                                    <span>{item.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div >

            {/* Backdrop */}
            < div className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100 z-50' : 'opacity-0'}`}
                onClick={() => setIsSidebarOpen(false)}>
            </div >
        </>
    )
}

export default Navbar