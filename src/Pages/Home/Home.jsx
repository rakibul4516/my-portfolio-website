import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Porjects from "../../Components/Projects/Porjects";
import Skills from "../../Components/Skills/Skills";

const Home = () => {
    return (
        <div className="max-w-[1240px] mx-auto bg-[#272727]">
            <Navbar/>
            <Banner/>
            <About/>
            <Skills/>
            <Porjects/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;