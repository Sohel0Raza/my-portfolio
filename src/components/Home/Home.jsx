import Banner from "./Banner";
import Contact from "./Contact";
import MyProjects from "./MyProjects";
import MyService from "./MyService";
import Skills from "./Skills";

const Home = () => {
    return (
        <div>
            <Banner />
            <MyService/>
            <Skills/>
            <MyProjects/>
            <Contact/>
        </div>
    );
};

export default Home;