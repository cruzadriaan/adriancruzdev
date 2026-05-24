const ContactCard = () => {
    return (
        <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 mx-5 my-1">

            <form>
                <input type="text" placeholder="Name" className="w-full p-2 mt-4 bg-gray-700 text-white border border-gray-600 rounded" />
                <input type="email" placeholder="Email" className="w-full p-2 mt-4 bg-gray-700 text-white border border-gray-600 rounded" />
                <textarea placeholder="Let's talk" className="w-full p-2 mt-4 bg-gray-700 text-white border border-gray-600 rounded h-32 resize-none"></textarea>
                <div className="flex justify-center">
                    <button type="submit" className="mt-4 px-3 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-400">Send Message</button>
                </div>
            </form>
        </div>
    )
}

export default ContactCard