import { faPhone, faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export const ContactDetails =
{
        personal: [
                {
                        title: "09163629046",
                        link: "tel:+09163629046",
                        icon: faPhone
                },
                {
                        title: "Quezon City, Philippines",
                        icon: faLocationDot
                }
        ],
        social:[
                        {
                                title: "adriancruzemail@gmail.com",
                                link: "mailto:adriancruzemail@gmail.com",
                                icon: faEnvelope,
                        },
                        {
                                title: "LinkedIn",
                                link: "https://www.linkedin.com/in/adrian-cruzdev/",
                                icon: faLinkedin
                        },
                        {
                                title: "GitHub",
                                link: "https://github.com/cruzadriaan",
                                icon: faGithub
                        }
                ]
}