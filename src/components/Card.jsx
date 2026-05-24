import { ProjectsData } from '../data/ProjectsData';

const Card = () => {
    return (
        <>
            {ProjectsData.map((project, index) => (
                <div className="mx-5 p-5 flex flex-col gap-3 border border-gray-600 rounded-2xl">


                    <div key={index} className="w-full h-35 overflow-hidden rounded-lg">
                        <img src={project.image} alt="Beat Jam Preview" />
                    </div>
                    <div className="flex flex-row justify-between  ">
                        <div>
                            <h1 className="text-white text-sm font-light">{project.stack}</h1>
                            <h1 className="text-gray-400 text-sm font-light">{project.type}</h1>
                            <h1 className="text-white font-bold">{project.title}</h1>
                        </div>
                        <div>
                            <button className="text-white text-xs border border-gray-600 px-6 py-2 rounded-full">DETAILS</button>
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-400 text-sm">{project.description}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Card