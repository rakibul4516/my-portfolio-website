import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="w-10/12 mx-auto py-8 dark:bg-gray-800 dark:text-gray-400 text-white border-t-2 rounded-full border-green-500 px-5">
            <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
                <div className="flex md:flex-row flex-col pr-3 space-x-4 sm:space-x-8">
                    <a href="#" className="flex justify-center items-center p-2">
                        <code className="text-[#00BF6C] text-3xl font-bold ">&lt;R</code><p className="text-xl text-white p-1">aki</p><code className="text-[#00BF6C] text-3xl font-bold">B/&gt;</code>
                    </a>
                    <ul className="flex flex-wrap items-center md:space-x-4 sm:space-x-8">
                        <li>
                            <a className='text-sm' href="#">+8801770-140528</a>
                        </li>
                        <li>
                            <a className='text-sm' href="#">mdrakibulislam4516@gmail.com</a>
                        </li>
                    </ul>
                </div>
                <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                    <li>
                        <a href="#"><FaLinkedin className='md:text-3xl text-2xl hover:animate-pulse text-[#0077b5] animate-bounce' /></a>
                    </li>
                    <li>
                        <a href="#"><FaGithub className='md:text-3xl text-2xl hover:animate-pulse animate-bounce' /></a>
                    </li>
                    <li>
                        <a href="#"><FaFacebook className='md:text-3xl text-2xl hover:animate-pulse animate-bounce text-blue-600' /></a>
                    </li>
                    <li>
                        <a href="#"><FaTwitter className='md:text-3xl text-2xl hover:animate-pulse animate-bounce text-[#1DA1F2]' /></a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;