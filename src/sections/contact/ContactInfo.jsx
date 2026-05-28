const ContactInfo = ({containerClass}) => {
    return (
        <div className={`flex flex-col mb-5 ${containerClass}`}>
            <h1 className="text-white">Send me a message</h1>

            <form action="https://formspree.io/f/xredrbgq" method="POST">
                <input name="name" type="text" placeholder="Name" className="w-full p-2 mt-4 bg-gray-800 text-white text-sm border border-gray-600 rounded" />
                <input name="email" type="email" placeholder="Email" className="w-full p-2 mt-4 bg-gray-800 text-white border text-sm border-gray-600 rounded" />
                <textarea name="message" placeholder="Let's talk" className="w-full p-2 mt-4 bg-gray-800 text-white border text-sm border-gray-600 rounded h-32 resize-none"></textarea>
                <div className="flex justify-center">
                    <button type="submit" className="mt-4 px-3 py-2 w-full  bg-linear-to-r hover:from-blue-700 from-blue-800 hover:to-purple-700 to-purple-800 text-white text-sm rounded cursor-pointer">Send Message</button>
                </div>
            </form>
        </div>
    )
}

export default ContactInfo