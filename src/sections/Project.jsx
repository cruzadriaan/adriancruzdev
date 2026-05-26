import ProjectCard from "./project/ProjectCard";
import SectionDivider from "../components/SectionDivider";

const Projects = ({containerClass}) => {
    return (
        <>
            <SectionDivider section="PROJECTS" />
            <div className="flex flex-col gap-5 mb-10 md:grid md:grid-cols-2 lg:mx-5 md:mx-2 sm:mx-12">
                <ProjectCard containerClass={containerClass} />
            </div>
        </>
    )
}

export default Projects