import { faPhone, faLocationDot, faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export const ContactDetails =
{
        personal: [
                {
                        type: "Phone",
                        title: "09163629046",
                        link: "tel:+09163629046",
                        icon: faPhone
                },
                {
                        type: "Location",
                        title: "Quezon City, Philippines",
                        icon: faLocationDot
                },
                {
                        title: "adriancruzemail@gmail.com",
                        type: "Email",
                        link: "mailto:adriancruzemail@gmail.com",
                        icon: faEnvelope,
                },
        ],
        social: [
                {
                        type: "LinkedIn",
                        link: "https://www.linkedin.com/in/adrian-cruzdev/",
                        icon: faLinkedin
                },
                {
                        type: "GitHub",
                        link: "https://github.com/cruzadriaan",
                        icon: faGithub
                }
        ],
        others: [
                {
                        title: "Resume",
                        name: "Resume",
                        link: "/files/CruzAdrianCV.pdf",
                        icon: faFile
                }
        ]
}