// import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";

const Main = () => {
    return (
        <div className=" bg-[#212428] text-[#C4CFDE]">
            <div className="md:min-h-[calc(100vh-190px)]">
                <Home/>
            </div>
            <Footer />
        </div>
    );
};

export default Main;