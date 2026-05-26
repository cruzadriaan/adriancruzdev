import SectionDivider from "../components/SectionDivider"
import { TechStackData } from "../data/TechStackData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TechStack = ({ containerClass }) => {
  return (
    <div className="mb-10">

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
            <div className="flex items-center justify-start flex-wrap gap-7 mt-3">
              {tech.technologies.map((technology, index) => (
                <div key={index} className="flex flex-col items-center gap-1 hover:scale-110 transition-transform cursor-pointer">
                  <i className={`${technology.logo} colored text-3xl`} ></i>
                  <h1 className="text-gray-200 text-[11px] font-semibold">{technology.name}</h1>
                </div>
              ))}
            </div>

          </div>
        </div>

      ))}
    </div>
  )
}

export default TechStack