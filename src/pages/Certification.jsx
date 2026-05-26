import SectionDivider from '../components/SectionDivider';
import AWSCCP from "../assets/icons/AWS_CCP.png";
import MTA from "../assets/icons/MTA.png";

const Certification = () => {
    return (
        <div className="mb-10">
            <SectionDivider section="CERTIFICATION" />
            <div className="m-5 p-3 flex flex-col gap-2 border bg-gray-800/40 border-gray-600 rounded-2xl">
                <div className=" mx-5 p-5 flex flex-row items-center justify-center gap-3 mb-3 border bg-gray-800/40 border-gray-600 rounded-2xl">

                    <img src={AWSCCP} alt="AWS Certified Cloud Practitioner" className="w-25 h-25 mx-auto" />
                    <div className="">
                        <h1 className="text-sm font-bold text-blue-400">AWS Certified Cloud Practitioner</h1>
                        <p className="text-gray-400 text-xs">Issued: January 2026</p>
                    </div>
                </div>
                <div className="mx-5 p-5 flex flex-row items-center justify-center gap-3 mb-3 border bg-gray-800/40 border-gray-600 rounded-2xl">
                    <img src={MTA} alt="Microsoft Technology Associate" className="w-26 h-26 mx-auto" />
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