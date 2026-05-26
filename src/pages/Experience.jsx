import SectionDivider from "../components/SectionDivider";
import { ExperienceData } from "../data/ExperienceData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Experience = ({ containerClass }) => {
    return (
        <div className="mb-10">
            <SectionDivider section="EXPERIENCE" />
            {ExperienceData.map((experience, index) => (
                <div key={index} className={`relative flex flex-col mb-4 ${containerClass}`}>
                    <div className="flex justify-between">
                        <div className="flex flex-col mb-2">
                            <h1 className="text-white font-bold">{experience.company}</h1>
                            <h1 className="text-blue-400  font-semibold">{experience.position}</h1>
                        </div>
                        <div>
                            <button className="flex items-center justify-center w-7 h-7 border hover:bg-gray-800 border-gray-600 shadow-2xs shadow-blue-700 cursor-pointer rounded-full">
                                <FontAwesomeIcon icon={faAngleDown} className="text-sm text-white/80"></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 " />
                    <div>
                        <p className="text-gray-400 text-[12px]">{experience.duration}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Experience