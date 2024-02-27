
const Contact = () => {
    return (
        <div  className="grid grid-cols-1 items-center justify-center gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100" >
            <div className="flex flex-col justify-between">
                <div className="">
                    <h2 className="text-white text-3xl font-semibold">Let's discuss on something <span className="text-[#00BF6C]">cool</span> together</h2>
                </div>
                <img src="https://i.ibb.co/ZzJTP4Q/image-removebg-preview-8.png" alt="" className="p-10 h-full " />
            </div>
            <form className="space-y-6 text-white">
                <div>
                    <label className="text-sm">Full name</label>
                    <input id="name" type="text" placeholder="" className="w-full p-1 border-2 border-green-400 text-black rounded dark:bg-gray-800" />
                </div>
                <div>
                    <label className="text-sm">Email</label>
                    <input id="email" type="email" className="w-full p-1 border-2 border-green-400 text-black rounded dark:bg-gray-800" />
                </div>
                <div>
                    <label className="text-sm">Message</label>
                    <textarea id="message" rows="3" className="w-full border-2 border-green-400 p-2 text-black rounded dark:bg-gray-800"></textarea>
                </div>
                <button type="submit" className="w-full bg-transparent hover:bg-green-500 text-green-500 font-semibold  hover:text-white py-1 px-4 border-t-2 border-l border-r border-t-green-500 border-l-green-500 border-r-green-500  hover:border-transparent rounded">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;