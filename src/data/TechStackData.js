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
                percentage: 90,
                logo: "devicon-html5-plain colored",
            },
            {
                name: "CSS3",
                percentage: 85,
                logo: "devicon-css3-plain colored",
            },
            {
                name: "Javascript",
                percentage: 80,
                logo: "devicon-javascript-plain colored",
            },
            {
                name: "React",
                percentage: 80,
                logo: "devicon-react-original colored",
            },
            {
                name: "Tailwind",
                percentage: 85,
                logo: "devicon-tailwindcss-plain colored",
            },
            {
                name: "Bootstrap", 
                percentage: 75,
                logo: "devicon-bootstrap-plain colored",
            }
        ]
    },
    {
        category: "Back End",
        borderColor: "border-t border-green-500",
        categoryColor: "text-blue-400",
        logo: faServer,
        technologies: [
            {
                name: "Python",
                percentage: 70,
                logo: "devicon-python-plain colored",
            },
        ]
    },
    {
        category: "Database",
        borderColor: "border-purple-500",
        categoryColor: "text-blue-400",
        logo: faDatabase,
        technologies: [
            {
                name: "MySQL",
                percentage: 70,
                logo: "devicon-mysql-plain colored",
            },
            {
                name: "PostgreSQL",
                percentage: 60,
                logo: "devicon-postgresql-plain colored",
            }
        ]
    },
    {
        category: "Version Control",
        borderColor: "border-yellow-500",
        categoryColor: "text-blue-400",
        logo: faCodeBranch,
        technologies: [
            {
                name: "Git",
                percentage: 80,
                logo: "devicon-git-plain colored",
            },
            {
                name: "GitHub",
                percentage: 80,
                logo: "devicon-github-original text-white",
            },
        ]
    },
    {
        category: "DevOps",
        borderColor: "border-red-500",
        categoryColor: "text-blue-400",
        logo: faCloudArrowDown,
        technologies: [
            {
                name: "AWS",
                percentage: 75,
                logo: "devicon-amazonwebservices-plain-wordmark colored",
            },
            {
                name: "Netlify",
                percentage: 80,
                logo: "devicon-netlify-plain text-blue-300",
            },
            {
                name: "Vercel",
                percentage: 80,
                logo: "devicon-vercel-original text-white/80",
            },
        ]
    },
    {
        category: "Tools",
        borderColor: "border-yellow-500",
        categoryColor: "text-blue-400",
        logo: faTools,
        technologies: [
            {
                name: "VS Code",
                percentage: 90,
                logo: "devicon-vscode-plain colored",
            },
            {
                name: "Photoshop",
                percentage: 85,
                logo: "devicon-photoshop-plain text-blue-600",
            }
        ]
    }
]