import {faCode, faDatabase, faServer, faCloudArrowDown, faTools, faCodeBranch} from "@fortawesome/free-solid-svg-icons";

export const TechStackData = [
    {
        category: "Front End",
        borderColor: "border-gray-300",
        categoryColor: "text-blue-500",
        logo: faCode,
        technologies: [
            {
                name: "HTML5",
                logo: "devicon-html5-plain",
            },
            {
                name: "CSS3",
                logo: "devicon-css3-plain",
            },
            {
                name: "Javascript",
                logo: "devicon-javascript-plain",
            },
            {
                name: "React",
                logo: "devicon-react-original",
            },
            {
                name: "Tailwind",
                logo: "devicon-tailwindcss-plain",
            },
            {
                name: "Bootstrap",
                logo: "devicon-bootstrap-plain",
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
                logo: "devicon-python-plain",
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
                logo: "devicon-mysql-plain",
            },
            {
                name: "PostgreSQL",
                logo: "devicon-postgresql-plain",
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
                logo: "devicon-git-plain",
            },
            {
                name: "GitHub",
                logo: "devicon-github-original",
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
                logo: "devicon-aws-plain",
            },
            {
                name: "Netlify",
                logo: "devicon-netlify-plain",
            },
            {
                name: "Vercel",
                logo: "devicon-vercel-plain",
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
                logo: "devicon-vscode-plain",
            },
            {
                name: "Photoshop",
                logo: "devicon-photoshop-plain",
            }
        ]
    }
]