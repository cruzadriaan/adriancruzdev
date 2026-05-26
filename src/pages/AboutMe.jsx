import SectionDivider from "../components/SectionDivider";
import AdrianDevAvatar from "../assets/images/AdrianDevAvatarEnhanced.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {AboutMeData} from "../data/AboutMeData";

const AboutMe = ({containerClass}) => {
    return (
        <div className="mt-8">
            <SectionDivider section="ABOUT ME" />
            <div className={` ${containerClass} mb-10`}>
                <div className="flex flex-row justify-center gap-4">
                    <div className="w-75 h-40 rounded-xl relative overflow-hidden mx-auto">
                        <img src={AdrianDevAvatar} alt="Adrian Cruz" className=" w-full h-full object-cover " />
                    </div>
                    <div className="mt-1 w-90">
                        <h1 className="text-white text-lg font-normal">
                            I'm <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-purple-500 font-bold">Adrian Cruz</span>, a <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400 font-semibold">Front End Developer</span> based in Quezon City, Philippines.
                        </h1>
                    </div>
                </div>

                <div className="mt-5 text-gray-200 text-sm leading-relaxed">
                    <p>
                        I’m a passionate Front-End Developer dedicated to crafting engaging, intuitive, and visually striking web experiences. With a solid foundation in HTML, CSS, and JavaScript, I specialize in building responsive interfaces that balance functionality and design. I love transforming complex ideas into seamless user journeys that feel effortless and natural.
                    </p>
                </div>
                <div className="flex flex-row items-center gap-3 justify-between mt-5">
                    {AboutMeData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-0.5 my-auto border border-gray-600 rounded-lg bg-gray-900 p-2 h-31 w-30 cursor-pointer text-center">
                        <FontAwesomeIcon icon={item.icon} className="text-green-600 shadow-2xl bg-blue-900/50 rounded-full p-2 text-2xl " />
                        <h1 className="text-white text-sm font-semibold w-20">{item.title}</h1>
                    </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default AboutMe