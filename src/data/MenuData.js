import { faHouse, faUser, faCertificate, faUserGraduate, faBriefcase, faHistory, faCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const MenuData = [
    {
        name: "Home",
        link: "hero",
        icon: faHouse,
        offset: -90
    },
    {
        name: "About",
        link: "aboutme",
        icon: faUser,
        offset: -110
    },
    {
        name: "Projects",
        link: "project",
        icon: faBriefcase,
        offset: -110
    },
        {
        name: "Tech Stack",
        link: "techstack",
        icon: faCode,
        offset: -110
    },
    {
        name: "Experience",
        link: "experience",
        icon: faHistory,
        offset: -110
    },
    {
        name: "Certification",
        link: "certification",
        icon: faCertificate,
        offset: -110
    },
    {
        name: "Education",
        link: "education",
        icon: faUserGraduate,
        offset: -110
    },
    {
        name: "Contact",
        link: "contact",
        icon: faEnvelope,
        offset: -60
    },
]