import SectionDivider from "../components/SectionDivider";
import AdrianDevAvatar from "../assets/images/AdrianDevAvatarEnhanced.png";

const AboutMe = () => {
    return (
        <div className="mt-8">
            <SectionDivider section="ABOUT ME" />
            <div className="border border-gray-600 rounded-lg bg-gray-800/40 p-5 mx-5 mb-10 ">
                <div className="flex flex-row justify-center gap-4">
                    <div className="w-75 h-40 rounded-xl relative overflow-hidden">
                        <img src={AdrianDevAvatar} alt="Adrian Cruz" className="absolute inset-0 w-full h-full object-cover " />
                    </div>
                    <div className="mt-1 w-90">
                        <h1 className="text-white text-xl font-normal">
                            I'm <span className="text-blue-500 font-semibold">Adrian Cruz</span>, a Front End Developer based in Quezon City, Philippines.
                        </h1>
                    </div>
                </div>

                <div className="mt-5 text-gray-200 text-xs leading-relaxed">
                    <p>
                        I'm passionate about crafting engaging and user-friendly web experiences. With a strong foundation in HTML, CSS, and JavaScript, I specialize in creating responsive and visually appealing websites. I thrive on turning complex ideas into intuitive interfaces, ensuring seamless user interactions. When I'm not coding, you can find me exploring the latest design trends or experimenting with new technologies to stay at the forefront of the ever-evolving web development landscape.
                    </p>
                </div>
                <div className="flex flex-row items-center justify-between mt-5">
                    <div className="border border-gray-600 rounded-lg bg-gray-800/40 p-3 h-25 w-25 text-center">
                        <h1 className="text-white text-sm font-semibold">1+ year experience</h1>
                    </div>
                    <div className="border border-gray-600 rounded-lg bg-gray-800/40 p-3 h-25 w-25 text-center">
                        <h1 className="text-white text-sm font-semibold">2+ Projects ongoing</h1>
                    </div>
                    <div className="border border-gray-600 rounded-lg bg-gray-800/40 p-3 h-25 w-25 text-center">
                        <h1 className="text-white text-sm font-semibold">React, Tailwind, Javascript</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutMe