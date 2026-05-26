import SectionDivider from '../components/SectionDivider';
import AWSCCP from "../assets/icons/AWS_CCP.png";
import MTA from "../assets/icons/MTA.png";

const Certification = () => {
    return (
        <div className="mb-10">
            <SectionDivider section="CERTIFICATION" />
            <div className="m-5 py-5 flex flex-col gap-2 border bg-gray-800/40 border-gray-600 rounded-2xl">
                <div className=" mx-3 px-5 py-4 flex flex-row items-center  gap-4 mb-2 border bg-gray-800/40 border-gray-600 rounded-2xl">
                    <img src={AWSCCP} alt="AWS Certified Cloud Practitioner" className="w-18 h-20" />
                    <div className="">
                        <h1 className="text-sm font-bold text-blue-400">AWS Certified Cloud Practitioner</h1>
                        <p className="text-gray-400 text-xs">Issued: January 2026</p>
                    </div>
                </div>
                <div className="mx-3 px-5 py-4 flex flex-row items-center gap-4 border bg-gray-800/40 border-gray-600 rounded-2xl">
                    <img src={MTA} alt="Microsoft Technology Associate" className="w-18 h-18" />
                    <div className="">
                        <h1 className="text-sm font-bold text-blue-400">Microsoft Technology Associate in HTML and CSS</h1>
                        <p className="text-gray-400 text-xs">Issued: November 2019</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certification