import SectionDivider from "../components/SectionDivider";
import { ExperienceData } from "../data/ExperienceData";

const Experience = () => {
    return (
        <div className="mb-10">
            <SectionDivider section="EXPERIENCE" />
            {ExperienceData.map((experience, index) => (
            <div key={index} className="mx-5 p-4 flex flex-col gap-2 mb-5 border bg-gray-800/40 border-gray-600 rounded-2xl">
                <h1 className="text-white font-bold">{experience.company}</h1>
                <h1 className="text-blue-400  font-semibold">{experience.position}</h1>
                <div className="border-t border-gray-500 " />
                <div>
                    <p className="text-gray-400 text-sm">{experience.duration}</p>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Experience