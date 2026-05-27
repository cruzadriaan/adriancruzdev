import SectionDivider from "../components/SectionDivider"
import { TechStackData } from "../data/TechStackData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TechStack = ({ containerClass }) => {
  return (
    <div className="relative mb-16">

      <SectionDivider section="TECH STACK" />

      {TechStackData.map((tech, index) => (
        <div key={index} className={`${containerClass} shadow-3xl mb-4`}>

          {/* Tech Category */}
          <div>
            <div className={`flex items-center gap-1 mb-1 ${tech.categoryColor}`}>
              <FontAwesomeIcon icon={tech.logo} className="text-xl" />
              <h1 className="text-lg font-semibold">{tech.category}</h1>
            </div>
            <div className="border-t border-gray-700" />

            {/* Tech Stack Each */}
            <div className="flex items-center p-2 flex-wrap gap-7 mt-3">
              {tech.technologies.map((technology, index) => (
                <div key={index} className="flex flex-col items-center gap-1 hover:scale-110 transition-transform cursor-pointer">
                  <i className={`${technology.logo} text-3xl`} ></i>
                  <h1 className="text-gray-200 text-[11px] font-semibold">{technology.name}</h1>
                </div>
              ))}
            </div>

          </div>
        </div>
      ))}

      <p className="text-white/40 text-[11px] text-center absolute -bottom-5 left-1/2 -translate-x-1/2 w-full">Note: Continuously improving and expanding skill set</p>
    
    </div>
  )
}

export default TechStack