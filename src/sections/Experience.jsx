import SectionDivider from "../components/SectionDivider";
import { ExperienceData } from "../data/ExperienceData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

const Experience = ({ containerClass, mediumTextGradient }) => {

    const [isDetailsOpen, setIsDetailsOpen] = useState(null);

    return (
        <div className="mb-10">
            <SectionDivider section="EXPERIENCE" />
            {ExperienceData.map((experience, index) => (
                <div key={index} className={`relative flex flex-col mb-4 ${containerClass}`}>
                    <div className="flex justify-between">
                        <div className="flex flex-col mb-2"> 
                            <h1 className="text-white font-bold">{experience.company}</h1>
                            <h1 className={`${mediumTextGradient} font-semibold`}>{experience.position}</h1>
                            <p className="text-gray-400 text-[12px] mt-1">{experience.duration}</p>
                        </div>
                        <div>
                            <button className="flex items-center justify-center w-7 h-7 border hover:bg-gray-800 border-gray-600 shadow-xs shadow-blue-700 cursor-pointer rounded-full"
                            onClick={() => setIsDetailsOpen(isDetailsOpen === index ? null : index)}>
                                <FontAwesomeIcon icon={faAngleDown} className={`${isDetailsOpen === index ? 'rotate-180' : ''} transition-transform duration-500 text-sm text-white/80`}></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>

                    <div className="border-t border-gray-700" />

                    {isDetailsOpen === index &&
                    <div className="text-white text-sm pl-5 pt-3">
                        <ul className="list-disc text-[13px] text-gray-300 flex flex-col gap-1">
                            {experience.achieve.map((exp, i) => (
                                <li key={i}>{exp}</li>
                            ))
                            }
                        </ul>
                    </div>
                    }
                </div>
            ))}
        </div>
    )
}

export default Experience