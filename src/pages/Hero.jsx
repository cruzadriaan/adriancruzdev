const Hero = () => {
    return (
        <div className="flex flex-col w-95 gap-4 mt-28 mx-5">
            <div className="items-left justify-center text-white font-bold text-5xl">
                <h1>Hello, I'm</h1>
                <h1 className="text-blue-400">Adrian Cruz</h1>
            </div>
            <div>
                <h1 className="text-white text-xl font-semibold">Web Developer</h1>
            </div>
            <div>
                <h1 className="text-white text-base font-light">I'm a web developer specializing in building exceptional digital experiences. Currently, I'm focused on building responsive full-stack web applications.</h1>
            </div>
            <div className="flex flex-row gap-4 mt-2 text-sm">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer">
                    Explore My Work
                </button>
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer">
                    Get in Touch
                </button>
            </div>
        </div>
    )
}

export default Hero