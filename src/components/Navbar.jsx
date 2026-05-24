import AdrianAvatar from "../assets/images/AdrianDevAvatar.jpg"


const Navbar = () => {
    return (
        <div className="flex flex-row items-center justify-left gap-5 border bg-gray-800 border-gray-600 mx-3 rounded-2xl px-5 py-6 ">
            <div className="flex flex-row items-center justify-center gap-2">
`               
                <img src={AdrianAvatar} alt="Adrian Cruz" className="w-10 h-10  rounded-md" />
            </div>
            <div>
                <h1 className="text-white font-semibold">Adrian Cruz</h1>
                <h1 className="text-gray-400 text-sm font-semibold">Front End Developer</h1>
            </div>
        </div>
    )
}

export default Navbar