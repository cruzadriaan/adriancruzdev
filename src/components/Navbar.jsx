// import AdrianAvatar from "../assets/images/AdrianDevAvatar.jpg";
import AdrianAvatarEnhanced from "../assets/images/AdrianDevAvatarEnhanced.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { MenuData } from "../data/MenuData";
import { ContactDetails } from "../data/ContactDetails";
import { useState } from "react";

const Navbar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            <div className="fixed left-1/2 -translate-x-1/2 xl:w-290 lg:w-220 md:w-170 sm:w-140 w-95 flex flex-row items-center justify-left gap-3 p-6 rounded-xl bg-gray-800/20 backdrop-blur-2xl border border-gray-700/40 shadow-lg px-5 py-6 z-5">
                <div className="flex flex-row items-center justify-center gap-5">
                    <button onClick={() => setIsSidebarOpen(true)}>
                        <FontAwesomeIcon icon={faBars} className="text-gray-200 text-xl border bg-gray-800 hover:scale-105 shadow-md border-gray-700 rounded-md p-2 cursor-pointer" />
                    </button>
                    <img src={AdrianAvatarEnhanced} alt="Adrian Cruz" className="w-10 h-10 border border-blue-800 rounded-md" />
                </div>
                <div>
                    <h1 className="text-white font-semibold cursor-pointer">Adrian Cruz</h1>
                    <h1 className="text-gray-400 text-sm font-semibold">Front End Developer</h1>
                </div>
            </div>


            {/* Sidebar */}
            <div className={`fixed left-0 top-0 h-full w-60 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-700 bg-linear-to-r from-slate-900 via-gray-900 to-zinc-900 shadow-lg py-4 z-50`}>
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
                <div className="ml-3 mt-2">
                    <h1 className="text-gray-500 text-[10px]">NAVIGATION</h1>
                    <ul className="flex flex-col gap-3 mt-2">
                        {MenuData.map((item, index) => (
                            <li key={index} className="text-gray-300 hover:text-blue-400 text-[17px] font-semibold  cursor-pointer hover:bg-gray-800 p-2 rounded-md mr-3">
                                <FontAwesomeIcon icon={item.icon} className="mr-2" />
                                <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Links */}
                <div className="ml-3 mt-9">
                    <h1 className="text-gray-500 text-[10px]">SOCIAL</h1>
                    <ul className="flex flex-col gap-3 mt-2">
                        {ContactDetails.social.map((item, index) => (
                            <li key={index} className="text-gray-300 hover:text-blue-400 text-[17px] font-semibold  cursor-pointer hover:bg-gray-800 p-2 rounded-md mr-3">
                                <FontAwesomeIcon icon={item.icon} className="mr-2" />
                                <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Other Links */}
                <div className="ml-3 mt-9">
                    <h1 className="text-gray-500 text-[10px]">OTHERS</h1>
                    <ul className="flex flex-col gap-3 mt-2">
                        {ContactDetails.others.map((item, index) => (
                            <li key={index} className="text-gray-300 hover:text-blue-400 text-[17px] font-semibold  cursor-pointer hover:bg-gray-800 p-2 rounded-md mr-3">
                                <FontAwesomeIcon icon={item.icon} className="mr-2" />
                                <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Backdrop */}
            <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsSidebarOpen(false)}>
            </div>
        </>
    )
}

export default Navbar