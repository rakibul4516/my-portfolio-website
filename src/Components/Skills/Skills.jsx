import { FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { SiBootstrap, SiExpress, SiJavascript, SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
const Skills = () => {
    return (
        <section className="lg:w-9/12 mx-auto text-center dark:bg-gray-800 dark:text-gray-100">
            <div className=" p-4 my-6 space-y-2 text-center">
                <h1 className="text-2xl font-semibold capitalize lg:text-3xl text-white">Skills</h1>

                <div className="mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                </div>
            </div>
            <div className="pb-5 px-3">
                <h2 className="text-[#00BF6C] text-2xl font-semibold">The skills,tools and technologies <br />I am really good at:</h2>
            </div> 
            <div className=" mx-auto grid justify-center items-center gap-4 sm:grid-cols-3 lg:grid-cols-5 grid-cols-2">
                <div className="flex flex-col items-center ">
                    <div className=''>
                        <TbBrandNextjs className=' text-4xl text-[#489bea]' />
                    </div>
                    <h3 className="my-3 text-xl text-white font-semibold">Next JS</h3>
                </div>
                <div className="flex flex-col items-center ">
                    <div className=''>
                        <SiMongodb className=' text-4xl text-[#4db33d]' />
                    </div>
                    <h3 className="my-3 text-xl text-white font-semibold">MongoDB</h3>
                </div>
                <div className="flex flex-col items-center p-4 ">
                    <div className=''>
                        <FaNodeJs className=' text-4xl text-[#68a063]' />
                    </div>
                    <h3 className="my-3 text-xl text-white font-semibold">Node</h3>
                </div>
                <div className="flex flex-col items-center p-4 ">
                    <div className=''>
                        <FaReact className=' text-4xl text-[#31d1f1]' />
                    </div>
                    <h3 className="my-3 text-xl text-white font-semibold">React</h3>
                </div>
                <div className="flex flex-col items-center p-4 ">
                    <div className=''>
                        <SiExpress className=' text-4xl text-[#68a063]' />
                    </div>
                    <h3 className="my-3 text-xl text-white font-semibold">Express</h3>
                </div>
                <div className="flex flex-col items-center p-4 ">
                    <div className=''>
                        <SiJavascript className=' text-4xl text-[#e9ce22]' />
                    </div>
                    <h3 className="my-3 text-xl text-white font-semibold">JavaScript</h3>
                </div>
                <div className="flex flex-col items-center p-4 ">
                    <div className=''>
                        <SiTypescript className=' text-4xl text-[#e9ce22]' />
                    </div>
                    <h3 className="my-3 text-xl text-white font-semibold">TypeScript</h3>
                </div>
                <div className="flex flex-col items-center p-4 ">
                    <div className=''>
                        <SiTailwindcss className=' text-4xl text-[#06b6d4]' />
                    </div>
                    <h3 className="my-3 text-xl text-white font-semibold">Tailwind</h3>
                </div>
                <div className="flex flex-col items-center p-4 ">
                    <div className=''>
                        <SiBootstrap className=' text-4xl text-[#8454cc]' />
                    </div>
                    <h3 className="my-3 text-xl text-white font-semibold">Bootstarp</h3>
                </div>
                <div className="flex flex-col items-center p-4 ">
                    <div className=''>
                        <FaPython className='text-4xl text-[#ffde57]' />
                    </div>
                    <h3 className="my-3 text-xl text-white font-semibold">Python</h3>
                </div>

            </div>
        </section>
    );
};

export default Skills;