import Banner from "./homeBanner/Banner";
import Contact from "./Contact";
import MyProjects from "./MyProjects";
import MyService from "./MyService";
import Skills from "./Skills";
import Navbar from "../shared/Navbar";

const Home = () => {
  return (
    <div className="md:w-10/12 bg-[#212428] mx-auto">
      <Navbar/>
      <Banner />
      <MyService />
      <Skills />
      <MyProjects />
      <Contact />
    </div>
  );
};

export default Home;
