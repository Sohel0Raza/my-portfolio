import { MdDesignServices } from "react-icons/md";
import { BsPhoneFill } from "react-icons/bs";
import { FaBugSlash } from "react-icons/fa6";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MyService = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="services" className="w-full md:mt-10 md:mb-20">
      <h2 className="font-mono font-bold text-4xl my-10 pb-2 px-10 md:px-0">
        My Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div
          data-aos="zoom-in-right"
          data-aos-duration="3000"
          className="text-center shadow-2xl p-7 rounded-md mx-8 md:mx-0 border-2 border-[#1d3557]"
        >
          <MdDesignServices className="mx-auto text-5xl p-2 shadow-2xl bg-[#1d3557] rounded-full text-white" />
          <h4 className="text-2xl font-semibold p-2 mb-3">Web Development</h4>
          <p>
            I am a dedicated web developer passionate about creating outstanding
            websites and web applications. With a solid understanding of
            programming languages and frameworks, I build dynamic and reliable
            solutions tailored to meet specific project requirements.
          </p>
        </div>
        <div
          data-aos="zoom-in-left"
          data-aos-duration="3000"
          className="text-center shadow-2xl p-7 rounded-md mx-8 md:mx-0 border-2 border-[#1d3557]"
        >
          <BsPhoneFill className="mx-auto text-5xl p-2 shadow-2xl bg-[#1d3557] rounded-full text-white" />
          <h4 className="text-2xl font-semibold p-2 mb-3">Responsive Design</h4>
          <p>
            I am a responsive designer who creates beautiful and easy-to-use
            websites that work well on any device. I focus on making sure every
            user has a great experience, no matter what screen size they use.
          </p>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          className="text-center shadow-2xl p-7 rounded-md mx-8 md:mx-0 border-2 border-[#1d3557]"
        >
          <FaBugSlash className="mx-auto text-5xl p-2 shadow-2xl bg-[#1d3557] rounded-full text-white" />
          <h4 className="text-2xl font-semibold p-2 mb-3">Bug Fixing</h4>
          <p>
            I am a meticulous website bug fixer specializing in identifying and
            resolving issues to ensure smooth and error-free website
            functionality. With a keen eye for detail and strong troubleshooting
            skills, I detect and fix bugs that disrupt user experience and
            hinder performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyService;
