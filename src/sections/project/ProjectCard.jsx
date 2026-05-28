import { ProjectsData } from '../../data/ProjectsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cardVariants } from "../../utils/cardVariants";

const ProjectCard = ({ containerClass, mediumTextGradient }) => {

    const [openCardDetailsIndex, setOpenCardDetailsIndex] = useState(null);

    return (
        <>
            {ProjectsData.map((project, index) => (
                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8 }}
                    key={index} className={`flex flex-col ${containerClass} gap-2 mb-3 cursor-pointer`}>

                    <div className="w-full lg:h-50 md:h-40 sm:h-65 h-50 rounded-lg cursor-pointer overflow-hidden">
                        <img src={project.image} alt="Beat Jam Preview" className="h-full w-full object-fit" />
                    </div>
                    <div className="flex flex-row justify-between ">
                        <div>
                            <h1 className="text-white text-sm font-light">{project.stack}</h1>
                            <h1 className="text-gray-400 text-sm font-light">{project.type}</h1>
                            <h1 className="text-white font-bold">{project.title}</h1>
                        </div>

                        {/* Button Details */}
                        <div className="flex flex-col items-center m-2">
                            <button className="text-white text-xs border hover:bg-gray-800 border-gray-600 px-2.5 py-1 rounded-full shadow-md cursor-pointer"
                                onClick={() => setOpenCardDetailsIndex(openCardDetailsIndex === index ? null : index)}>
                                <span className="mr-1">DETAILS</span>
                                <FontAwesomeIcon icon={faAngleDown} className={`${openCardDetailsIndex === index ? 'rotate-180' : ''} transition-transform duration-300`} />
                            </button>
                        </div>
                    </div>

                    {/* SHORT DESCRIPTION */}
                    <div>
                        <p className="text-gray-400 text-xs">{project.description}</p>
                    </div>

                    {/* FULL DESCRIPTION */}
                    {openCardDetailsIndex === index && (
                        <div>
                            <p className="text-gray-400 text-xs">{project.fullDescription}</p>
                        </div>
                    )}

                    {/* STACK USED */}
                    <div className="flex flex-wrap gap-3 mt-3">
                        {project.stackUsed.map((stack, index) => (
                            <span key={index} className="text-gray-400 text-xs text-center border bg-gray-900 border-gray-500 shadow-md px-2 py-1 rounded">
                                {stack}
                            </span>
                        ))}
                    </div>

                    {/* WEBSITE HYPERLINK */}
                    <div className={`${openCardDetailsIndex === index ? 'mt-7' : 'mt-5'} flex flex-col`}>
                        <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className={`${mediumTextGradient} font-semibold text-[12px] hover:text-blue-400`}>
                            Visit Website<FontAwesomeIcon icon={faExternalLinkAlt} className={`text-blue-400 ml-1 text-[11px] font-extralight`} />
                        </a>
                    </div>
                </motion.div>
            ))}
        </>
    )
}

export default ProjectCard