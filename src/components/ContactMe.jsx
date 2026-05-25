import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import ContactCard from "./Card/ContactCard";
import { ContactDetails } from '../data/ContactDetails';
import SectionDivider from "../components/SectionDivider";

const ContactMe = () => {
    return (
        <div className="mb-10">
            <SectionDivider section="CONTACT ME" />
            <h1 className="text-white text-xl text-center font-bold mb-3 mt-3">Let's Connect!</h1>

            {/* Personal Details */}
            <div className="flex flex-col items-center justify-center text-center w-full gap-5 mb-5">
                {ContactDetails.personal.map((personal, index) => (
                    <div key={index} className="text-gray-300 hover:text-blue-600 hover:font-bold bg-gray-800 w-75 px-4 py-2 rounded-lg cursor-pointer">
                        <FontAwesomeIcon icon={personal.icon} className="mr-2" />
                        <a href={personal.link} target="_blank" rel="noopener noreferrer">
                            {personal.title}
                        </a>
                    </div>
                ))}
                
                {/* Social Links */}
                {ContactDetails.social.map((social, index) => (
                    <div key={index} className="text-gray-300 hover:text-blue-600 hover:font-bold bg-gray-800 w-75 px-4 py-2 rounded-lg cursor-pointer">
                        <FontAwesomeIcon icon={social.icon} className="mr-2" />
                        <a href={social.link} target="_blank" rel="noopener noreferrer">
                            {social.title}
                        </a>
                    </div>
                ))}

            </div>

            <ContactCard />
            <div className="fixed bottom-0 right-0">
                <a href="tel:+09163629046">
                    <FontAwesomeIcon icon={faPhone} className="text-gray-200 bg-green-700 text-sm shadow-green-800 shadow-xl rounded-full p-3 m-4  hover:scale-110 cursor-pointer" />
                </a>
            </div>
        </div>
    )
}

export default ContactMe