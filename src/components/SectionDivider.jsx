import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const SectionDivider = (props) => {
    return (
        <>
            <div className="flex items-center text-white text-xs font-normal mx-5 my-2 border border-gray-600 w-fit px-4 py-1 rounded-full">
                <FontAwesomeIcon icon={faCircle} className="text-green-500 text-[5px] mr-2" />
                <span>{props.section}</span>
            </div>
        </>
    )
}

export default SectionDivider