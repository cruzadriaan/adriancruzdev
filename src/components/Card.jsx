const Card = () => {
    return (
        <div className="mx-5 p-5 flex flex-col gap-3 border border-gray-600 rounded-2xl">
            <div>
                <img src="" alt="" />
            </div>
            <div className="flex flex-row justify-between  ">
                <div>
                    <h1 className="text-white font-light">FRONT END</h1>
                    <h1 className="text-gray-400 text-sm font-light">RESTAURANT BAR</h1>
                    <h1 className="text-white font-bold">Beat Jam</h1>
                </div>
                <div>
                    <button className="text-white text-xs border border-gray-600 px-6 py-2 rounded-full">DETAILS</button>
                </div>
            </div>
            <div>
                <p className="text-gray-400 text-sm">A modern restaurant bar with a vibrant atmosphere and delicious cocktails.</p>
            </div>

        </div>
    )
}

export default Card