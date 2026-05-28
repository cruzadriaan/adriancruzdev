import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import ContactInfo from "./ContactInfo";
import { ContactData } from '../../data/ContactData';
// import SectionDivider from "../../components/SectionDivider";

const ContactForm = ({ containerClass }) => {
    return (
        <div className="mb-12">
            {/* <SectionDivider section="CONTACT ME" /> */}

            {/* Header Greetings */}
            <div className='flex flex-col items-center justify-center text-center w-90 mx-auto p-5'>
                <h1 className='text-[13px] font-semibold bg-clip-text text-transparent bg-linear-to-r from-blue-100 to-purple-100'>LET'S WORK TOGETHER</h1>
                <h1 className='text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-purple-800'>Let's Connect!</h1>
                <p className='mt-1 text-[12px] text-white/80 leading-relaxed'>Have a project you’d like to discuss? 
                I welcome your message and look forward to hearing from you.
                </p>
            </div>

            {/* Personal Details */}
            <div className={`flex flex-col gap-2 mb-5 ${containerClass}`}>
                <h1 className="text-[11px] text-gray-500 ml-1">PERSONAL</h1>
                {ContactData.personal.map((personal, index) => (
                    <div key={index} className="text-gray-300 hover:scale-105 w-75 px-1 py-2 rounded-lg cursor-pointer">
                        <a href={personal.link} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-1">
                            <FontAwesomeIcon icon={personal.icon} className="mr-2 text-lg bg-linear-to-r from-blue-800 to-purple-800 p-3 rounded-lg" />
                            <div className='text-sm'>
                                <h1 className='font-bold'>{personal.type}</h1>
                                <a>{personal.title}</a>
                            </div>
                        </a>
                    </div>
                ))}

                {/* Social Links */}
                <>
                    <h1 className="text-[11px] text-gray-500 mt-3 ml-1">SOCIAL</h1>
                    <div className='flex flex-row gap-4'>
                        {ContactData.social.map((social, index) => (
                            <div key={index} className="text-gray-300 hover:scale-105 px-1 py-2 rounded-lg cursor-pointer">
                                <a href={social.link} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-1">
                                <FontAwesomeIcon icon={social.icon} className="mr-2 text-lg bg-linear-to-r from-blue-800 to-purple-800 p-3 rounded-lg" />
                                <div className="text-sm">
                                    <h1 className='font-bold'>{social.type}</h1>
                                    <a>
                                        {social.title}
                                    </a>
                                </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </>
            </div>

            <ContactInfo containerClass={containerClass} />

            <div className="fixed bottom-0 right-0">
                <a href="tel:+09163629046">
                    <FontAwesomeIcon icon={faPhone} className="text-gray-200 bg-green-700 text-sm rounded-full p-3 m-2 hover:scale-110 cursor-pointer" />
                </a>
            </div>
        </div>
    )
}

export default ContactForm