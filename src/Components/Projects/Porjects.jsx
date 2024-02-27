import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa';

const Porjects = () => {
    return (
        <section style={{ backgroundImage: "url('https://i.ibb.co/m8SW2ht/image-removebg-preview-9.png')" }} className="w-full px-16 py-10 mx-auto bg-cover bg-center">
            <div className='p-4 my-6 space-y-2 text-center'>
                <h1 className="text-2xl font-semibold capitalize lg:text-3xl text-white">Projects</h1>

                <div className="mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                </div>
            </div>
            <div className="pb-10 px-3">
                <h2 className="text-[#00BF6C] text-2xl font-semibold text-center">Things I have built so far:</h2>
            </div>
            <div className='grid lg:grid-cols-8 justify-between items-center'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 col-span-7 justify-center items-center gap-10 text-white'>
                    <div className='w-full h-[400px] bg-transparent cursor-pointer group perspective'>
                        <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
                            <div className='absolute border-2 backface-hidden w-full h-full'>
                                <img src='https://i.ibb.co/gTnqQtD/image.png' alt='' className='h-full w-full'></img>
                            </div>
                            <div className='absolute backface-hidden my-rotate-y-180 w-full h-full bg-gray-100 overflow-hidden'>
                                <div className='text-center flex flex-col items-center justify-center h-full text-gray-900 px-2 pb-20'>
                                    <h1>Hello world</h1>
                                    <p>
                                        This is my first projects
                                    </p>
                                    <div className='bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125'>
                                        Visit Now
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[400px] bg-transparent cursor-pointer group perspective'>
                        <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
                            <div className='absolute border-2 backface-hidden w-full h-full'>
                                <img src='https://i.ibb.co/gTnqQtD/image.png' alt='' className='h-full w-full'></img>
                            </div>
                            <div className='absolute backface-hidden my-rotate-y-180 w-full h-full bg-gray-100 overflow-hidden'>
                                <div className='text-center flex flex-col items-center justify-center h-full text-gray-900 px-2 pb-20'>
                                    <h1>Hello world</h1>
                                    <p>
                                        This is my first projects
                                    </p>
                                    <div className='bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125'>
                                        Visit Now
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[400px] bg-transparent cursor-pointer group perspective'>
                        <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
                            <div className='absolute border-2 backface-hidden w-full h-full'>
                                <img src='https://i.ibb.co/gTnqQtD/image.png' alt='' className='h-full w-full'></img>
                            </div>
                            <div className='absolute backface-hidden my-rotate-y-180 w-full h-full bg-gray-100 overflow-hidden'>
                                <div className='text-center flex flex-col items-center justify-center h-full text-gray-900 px-2 pb-20'>
                                    <h1>Hello world</h1>
                                    <p>
                                        This is my first projects
                                    </p>
                                    <div className='bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125'>
                                        Visit Now
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <h1><FaArrowRight className='text-green-500 text-center font-bold text-6xl w-full'/></h1>
                </div>
            </div>
        </section>
    );
};

export default Porjects;