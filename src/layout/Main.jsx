// import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";

const Main = () => {
    return (
        <div className=" dark:bg-black dark:text-white">
            <div className="md:min-h-[calc(100vh-190px)]">
                <Home/>
            </div>
            <Footer />
        </div>
    );
};

export default Main;