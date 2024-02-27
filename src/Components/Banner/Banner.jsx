
const Banner = () => {
    return (
        <div>
            <div className="w-full grid md:grid-cols-2 grid-cols-1 items-center justify-center py-10">
                <div className="p-10">
                    <div>
                        <h2 className="text-4xl font-bold text-white ">Hi, I'm <br />Rakibul Islam</h2>
                        <p className="text-white py-5 text-xl">A passionate <code className="text-[#00BF6C] text-xl font-bold">&lt;Full Stack Web Development/&gt;</code> with 2 years of experience creating user frinedly websites</p>
                    </div>
                    <div className="py-8 px-2">
                    <button className="bg-transparent hover:bg-green-500 text-green-500 font-semibold  hover:text-white py-1 px-4 border-t-2 border-l border-r border-t-green-500 border-l-green-500 border-r-green-500  hover:border-transparent rounded">
                        Download CV
                    </button> 
                    </div>
                </div>
                <div className="animate-pulse">
                    <img src="https://i.ibb.co/zQQf0CN/Screenshot-2024-02-26-114153-removebg-preview.png" alt="banner image" />
                </div>
            </div>
        </div>
    );
};

export default Banner;