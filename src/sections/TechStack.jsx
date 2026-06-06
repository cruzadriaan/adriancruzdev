import SectionDivider from "../components/SectionDivider"
import { TechStackData } from "../data/TechStackData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from 'framer-motion';
import { cardVariants } from "../utils/cardVariants";

const TechStack = ({ containerClass }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="relative mb-20">

      <SectionDivider section="TECH STACK" />

      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-2 sm:mx-12 md:mx-2 lg:mx-5">
        {TechStackData.map((tech, index) => (
          <div key={index} className={`${containerClass} shadow-3xl mb-4`}>

            {/* Tech Category */}
            <div>
              <div className={`flex items-center gap-1 mb-1 ${tech.categoryColor}`}>
                <FontAwesomeIcon icon={tech.logo} className="text-xs" />
                <h1 className="text-sm">{tech.category}</h1>
              </div>
              <div className="border-t border-gray-800" />

              {/* Tech Stack Each */}
              <div className="flex flex-col p-2 flex-wrap gap-7 mt-3">
                {tech.technologies.map((technology, index) => (

                  <div key={index} className="flex flex-row items-center gap-3 cursor-pointer">
                    <div className="flex flex-col text-right w-20">
                      <h1 className="text-gray-200 text-[10px] ">{technology.name}</h1>
                    </div>
                    <div className="flex flex-col w-full rounded-full bg-gray-700">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${technology.percentage}%` }}
                        viewport={{ once: true, amount: 0.7 }}
                        transition={{ duration: 2.5 }}
                        className="bg-linear-to-r from-blue-500 to-purple-500 h-2 rounded-full" />
                    </div>
                    <div>
                      <h1 className="text-gray-400 text-[10px]">{technology.percentage}%</h1>
                    </div>
                  </div>


                ))}
              </div>

            </div>
          </div>
        ))}
      </div>

      <p className="text-white/40 text-[11px] text-center absolute -bottom-5 left-1/2 -translate-x-1/2 w-full">Note: Continuously improving and expanding skill set</p>

    </motion.div>
  )
}

export default TechStack