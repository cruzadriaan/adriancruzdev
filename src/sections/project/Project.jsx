import ProjectCard from "./ProjectCard";
import SectionDivider from "../../components/SectionDivider";
import { motion } from 'framer-motion';
import { cardVariants } from "../../utils/cardVariants";

const Projects = ({ containerClass, mediumTextGradient, softTextGradient }) => {
    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
        >
            <SectionDivider section="PROJECTS" />

            <div className="flex flex-col gap-5 mb-12 md:grid md:grid-cols-2 lg:mx-5 md:mx-2 sm:mx-12">
                <ProjectCard containerClass={containerClass} mediumTextGradient={mediumTextGradient} softTextGradient={softTextGradient} />
            </div>
        </motion.div>
    )
}

export default Projects