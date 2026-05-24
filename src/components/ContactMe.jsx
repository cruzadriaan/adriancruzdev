import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactMe = () => {
  return (
    <div className="fixed bottom-0 right-0">
        <a href="tel:+09163629046">
            <FontAwesomeIcon icon={faPhone} className="text-gray-200 bg-green-700 text-sm shadow-green-800 shadow-xl rounded-full p-3 m-4  hover:scale-110 cursor-pointer" />
        </a>
    </div>
  )
}

export default ContactMe