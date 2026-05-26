import ProjectCard from "./ProjectCard";
import SectionDivider from "../../components/SectionDivider";

const Projects = ({containerClass, textGradientClass}) => {
    return (
        <div className="mb-8">
            <SectionDivider section="PROJECTS" />
            <div className="flex flex-col gap-5 mb-10 md:grid md:grid-cols-2 lg:mx-5 md:mx-2 sm:mx-12">
                <ProjectCard containerClass={containerClass} textGradientClass={textGradientClass} />
            </div>
        </div>
    )
}

export default Projects