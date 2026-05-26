import SectionDivider from "../components/SectionDivider";
import { ExperienceData } from "../data/ExperienceData";

const Experience = ({ containerClass }) => {
    return (
        <div className="mb-10">
            <SectionDivider section="EXPERIENCE" />
            {ExperienceData.map((experience, index) => (
                <div key={index} className={`flex flex-col mb-4 ${containerClass}`}>
                    <div className="flex flex-col mb-2">
                        <h1 className="text-white font-bold">{experience.company}</h1>
                        <h1 className="text-blue-400  font-semibold">{experience.position}</h1>
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