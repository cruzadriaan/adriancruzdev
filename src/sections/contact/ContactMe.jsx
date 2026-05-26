import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import ContactCard from "./ContactCard";
import { ContactDetails } from '../../data/ContactData';
import SectionDivider from "../../components/SectionDivider";

const ContactMe = ({ containerClass }) => {
    return (
        <div className="mb-10">
            <SectionDivider section="CONTACT ME" />
            <h1 className="text-white text-xl text-center font-bold mb-3 mt-3">Let's Connect!</h1>

            {/* Personal Details */}
            <div className={`flex flex-col gap-2 mb-5 ${containerClass}`}>
                <h1 className="text-[11px] text-gray-500 ml-1">PERSONAL</h1>
                {ContactDetails.personal.map((personal, index) => (
                    <div key={index} className="flex flex-row items-center gap-1 text-gray-300 hover:scale-105 w-75 px-1 py-2 rounded-lg cursor-pointer">
                        <FontAwesomeIcon icon={personal.icon} className="mr-2 text-lg bg-linear-to-r from-blue-800 to-purple-800 p-3 rounded-lg" />
                        <div className='text-sm'>
                            <h1 className='font-bold'>{personal.type}</h1>
                            <a href={personal.link} target="_blank" rel="noopener noreferrer" className=''>
                                {personal.title}
                            </a>
                        </div>
                    </div>
                ))}

                {/* Social Links */}
                <>
                    <h1 className="text-[11px] text-gray-500 mt-3 ml-1">SOCIAL</h1>
                    <div className='flex flex-row gap-4'>
                        {ContactDetails.social.map((social, index) => (
                            <div key={index} className="flex flex-row items-center gap-1 text-gray-300 hover:scale-105 px-1 py-2 rounded-lg cursor-pointer">
                                <FontAwesomeIcon icon={social.icon} className="mr-2 text-lg bg-linear-to-r from-blue-800 to-purple-800 p-3 rounded-lg" />
                                <div className="text-sm">
                                    <h1 className='font-bold'>{social.type}</h1>
                                    <a href={social.link} target="_blank" rel="noopener noreferrer">
                                        {social.title}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            </div>

            <ContactCard />

            <div className="fixed bottom-0 right-0">
                <a href="tel:+09163629046">
                    <FontAwesomeIcon icon={faPhone} className="text-gray-200 bg-green-700 text-sm rounded-full p-3 m-2 hover:scale-110 cursor-pointer" />
                </a>
            </div>
        </div>
    )
}

export default ContactMe