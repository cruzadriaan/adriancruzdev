import { ProjectsData } from '../../data/ProjectsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Card = () => {

    const [openCardDetailsIndex, setOpenCardDetailsIndex] = useState(null);

    return (
        <>
            {ProjectsData.map((project, index) => (
                <div className="mx-5 p-5 flex flex-col gap-3 border bg-gray-800/40 border-gray-600 rounded-2xl">

                    <div key={index} className="w-full lg:h-50 md:h-40 sm:h-65 h-50 rounded-lg cursor-pointer overflow-hidden">
                        <img src={project.image} alt="Beat Jam Preview" className="h-full w-full object-fit" />
                    </div>
                    <div className="flex flex-row justify-between  ">
                        <div>
                            <h1 className="text-white text-sm font-light">{project.stack}</h1>
                            <h1 className="text-gray-400 text-sm font-light">{project.type}</h1>
                            <h1 className="text-white font-bold">{project.title}</h1>
                        </div>

                        {/* Button Details */}
                        <div className="flex flex-col items-center justify-center">
                            <button className="text-white text-xs border border-gray-600 px-3 py-2 rounded-full cursor-pointer" 
                            onClick={() => setOpenCardDetailsIndex(openCardDetailsIndex === index ? null : index)}>
                                <span className="mr-1">DETAILS</span>
                                <FontAwesomeIcon icon={faAngleDown} className="" />
                            </button>
                        </div>

                    </div>
                    <div>
                        <p className="text-gray-400 text-xs">{project.description}</p>
                    </div>

                    {openCardDetailsIndex === index && (
                        <>
                            <div>
                                <p className="text-gray-400 text-xs">{project.fullDescription}</p>
                            </div>


                            <div className="flex flex-wrap gap-3 mt-2">
                                {project.stackUsed.map((stack, index) => (
                                    <span key={index} className="text-gray-400 text-xs text-center border border-gray-600 px-2 py-1 rounded">
                                        {stack}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-2">
                                <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm hover:text-blue-400">
                                    Visit Website<FontAwesomeIcon icon={faSquareArrowUpRight} className="ml-1" />
                                </a>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </>
    )
}

export default Card