import SectionDivider from '../components/SectionDivider';
import { CertificationData } from '../data/CertificationData';

const Certification = ({ containerClass, mediumTextGradient }) => {
    return (
        <div className="mb-16">
            <SectionDivider section="CERTIFICATION" />
            <div className={`${containerClass} py-5 flex flex-col gap-2`}>
                {CertificationData.map((certification, index) => (
                    <div key={index}>
                        <div className="px-5 py-4 flex flex-row items-center  gap-4 mb-2 border bg-gray-800/40 border-gray-600 rounded-2xl">
                            <img src={certification.image} alt={certification.title} className={certification.imageSize} />
                            <div className="">
                                <h1 className={`${mediumTextGradient} text-sm font-bold flex flex-wrap`}>{certification.title}</h1>
                                <p className="text-gray-400 text-xs">Issued: {certification.issued}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Certification