// import AdrianAvatar from "../assets/images/AdrianDevAvatar.jpg";
import AdrianAvatarEnhanced from "../assets/images/AdrianDevAvatarEnhanced.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <div className="fixed left-1/2 -translate-x-1/2 w-95 flex flex-row items-center justify-left gap-3 border bg-gray-800 border-blue-600  rounded-3xl px-5 py-6 ">
            <div className="flex flex-row items-center justify-center gap-5">
                <FontAwesomeIcon icon={faBars} className="text-gray-200 text-xl border border-gray-600 rounded-md p-2 cursor-pointer" />
                <img src={AdrianAvatarEnhanced} alt="Adrian Cruz" className="w-10 h-10  rounded-md" />
            </div>
            <div>
                <h1 className="text-white font-semibold cursor-pointer">Adrian Cruz</h1>
                <h1 className="text-gray-400 text-sm font-semibold">Front End Developer</h1>
            </div>
        </div>
    )
}

export default Navbar