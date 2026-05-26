import {faCode, faDatabase, faServer, faCloudArrowDown, faTools, faCodeBranch} from "@fortawesome/free-solid-svg-icons";

export const TechStackData = [
    {
        category: "Front End",
        borderColor: "border-gray-300",
        categoryColor: "text-blue-400",
        logo: faCode,
        technologies: [
            {
                name: "HTML5",
                logo: "devicon-html5-plain colored",
            },
            {
                name: "CSS3",
                logo: "devicon-css3-plain colored",
            },
            {
                name: "Javascript",
                logo: "devicon-javascript-plain colored",
            },
            {
                name: "React",
                logo: "devicon-react-original colored",
            },
            {
                name: "Tailwind",
                logo: "devicon-tailwindcss-plain colored",
            },
            {
                name: "Bootstrap",
                logo: "devicon-bootstrap-plain colored",
            }
        ]
    },
    {
        category: "Back End",
        borderColor: "border-t border-green-500",
        categoryColor: "text-green-500",
        logo: faServer,
        technologies: [
            {
                name: "Python",
                logo: "devicon-python-plain colored",
            },
        ]
    },
    {
        category: "Database",
        borderColor: "border-purple-500",
        categoryColor: "text-purple-500",
        logo: faDatabase,
        technologies: [
            {
                name: "MySQL",
                logo: "devicon-mysql-plain colored",
            },
            {
                name: "PostgreSQL",
                logo: "devicon-postgresql-plain colored",
            }
        ]
    },
    {
        category: "Version Control",
        borderColor: "border-yellow-500",
        categoryColor: "text-yellow-500",
        logo: faCodeBranch,
        technologies: [
            {
                name: "Git",
                logo: "devicon-git-plain colored",
            },
            {
                name: "GitHub",
                logo: "devicon-github-original text-white",
            },
        ]
    },
    {
        category: "DevOps",
        borderColor: "border-red-500",
        categoryColor: "text-red-500",
        logo: faCloudArrowDown,
        technologies: [
            {
                name: "AWS",
                logo: "devicon-amazonwebservices-plain-wordmark colored",
            },
            {
                name: "Netlify",
                logo: "devicon-netlify-plain text-blue-300",
            },
            {
                name: "Vercel",
                logo: "devicon-vercel-original text-white/80",
            },
        ]
    },
    {
        category: "Tools",
        borderColor: "border-yellow-500",
        categoryColor: "text-yellow-500",
        logo: faTools,
        technologies: [
            {
                name: "VS Code",
                logo: "devicon-vscode-plain colored",
            },
            {
                name: "Photoshop",
                logo: "devicon-photoshop-plain text-blue-600",
            }
        ]
    }
]