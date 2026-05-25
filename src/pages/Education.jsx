import SectionDivider from "../components/SectionDivider";
import { EducationData } from "../data/EducationData";

const Education = () => {
    return (
        <div className="mb-15">
            <SectionDivider section="EDUCATION" />
            <div className="relative flex flex-col bg-gray-800 border border-gray-600 rounded-lg py-5 px-4 mx-5 my-1">
                {EducationData.map((education, index) => (
                    <div key={index} className="relative">
                        <div className="absolute left-2 top-1 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_1px_rgba(59,130,246,0.7)]" />
                        <div className="absolute left-4 top-5 border-l bottom-0 border-gray-600 " />
                        <div className="flex flex-col gap-1 mb-5 ml-10">
                            <h1 className="text-white text-sm font-semibold">{education.school}</h1>
                            <p className="text-gray-400 text-sm">{education.course}</p>
                            <p className="text-gray-400 text-xs">{education.graduationYear}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Education