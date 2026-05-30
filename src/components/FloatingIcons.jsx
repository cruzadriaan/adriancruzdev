import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faViber } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import { useRef, useEffect } from 'react';


const FloatingIcons = () => {

    return (
        <>
            {/* Floating Arrow Up */}
            <div className="fixed bottom-15 right-0 z-20" >
                <Link to="hero" smooth={true} duration={500}>
                    <FontAwesomeIcon icon={faArrowUp} className="text-gray-200 bg-gray-800 text-base border border-gray-600 rounded-full p-2.5 m-2 hover:scale-110 cursor-pointer animate-bounce" />
                </Link>
            </div>

            {/* Floating Viber */}
            <div className="fixed bottom-0 right-0 z-20" >
                <a href="viber://chat?number=+639163629046" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faViber} className="text-gray-200 bg-purple-600 text-xl rounded-full p-2.5 m-2 hover:scale-110 cursor-pointer" />
                </a>
            </div >
        </>
    )
}

export default FloatingIcons