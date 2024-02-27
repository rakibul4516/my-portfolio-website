import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Navbar = () => {
    return (
        <header className="w-full mx-auto dark:bg-gray-800 dark:text-gray-100">
            <div className="px-14 flex flex-wrap justify-between h-16 mx-auto">
                <a href="#" className="flex items-center p-2">
                    <code className="text-[#00BF6C] text-3xl font-bold">&lt;R</code><p className="text-xl text-white p-1">aki</p><code className="text-[#00BF6C] text-3xl font-bold">B/&gt;</code>
                </a>
                <ul className="items-stretch space-x-2 flex gap-3">
                    <li className="flex">
                        <a href="#" className="flex items-center "><FaLinkedin className='md:text-3xl text-2xl hover:animate-pulse animate-bounce text-[#0077b5]' /></a>
                    </li>
                    <li className="flex">
                        <a href="#" className="flex items-center "><FaGithub className='md:text-3xl text-2xl hover:animate-pulse animate-bounce text-white' /></a>
                    </li>
                    <li className="flex">
                        <a href="#" className="flex items-center"><FaFacebook className='md:text-3xl text-2xl hover:animate-pulse animate-bounce text-blue-600' /></a>
                    </li>
                    <li className="flex">
                        <a href="#" className="flex items-center"><FaTwitter className='md:text-3xl text-2xl hover:animate-pulse animate-bounce text-[#1DA1F2]' /></a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;