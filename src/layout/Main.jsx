// import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";

const Main = () => {
    return (
        <div>
            <div className="md:min-h-[calc(100vh-190px)]">
                <Home/>
            </div>
            <Footer />
        </div>
    );
};

export default Main;