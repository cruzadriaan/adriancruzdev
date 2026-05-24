import ProjectCard from "../components/Card/ProjectCard";

const Projects = () => {
  return (
    <>
    <div className="text-white text-sm font-normal mx-5 my-2 border border-gray-600 w-fit px-8 py-1 rounded-full">PROJECTS</div>
    <div className="flex flex-col gap-5 mb-10 md:grid md:grid-cols-2 lg:mx-5 md:mx-2 sm:mx-12">
        <ProjectCard />
    </div>
    </>
  )
}

export default Projects