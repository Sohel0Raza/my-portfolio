import my_photo from "../../../assets/project Img/185.png";
import { TypeAnimation } from "react-type-animation";
import {
  BsDownload,
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTelephone,
} from "react-icons/bs";

import resume from "../../../../public/MERN Stack Web Developer CV of Sohel Raza.pdf";

import "./banner.css";
import { Scroll } from "../../utils/scroll";
const Banner = () => {
  return (
    <div
      id="home"
      className="md:h-screen mx-auto md:flex md:justify-between md:items-center bg-[#212428]"
    >
      <Scroll></Scroll>
      <div className="md:w-1/2 py-10 px-10 md:px-0 md:pb-10 md:-ml-[100px]">
        <h2 className="text-3xl md:text-5xl font-semibold pb-2 md:mt-10">
          <span className="text-neutral">Hi, I'm</span>{" "}
          <span className="text-primary">Sohel Raza</span>
        </h2>
        <div className="w-full">
          <TypeAnimation
            className="text-3xl md:text-4xl font-bold     text-neutral"
            sequence={[
              "a MERN Stack Developer.",
              1000,
              "a Front-end Developer.",
              1000,
              "a Developer.",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <p className="pt-3">
          I am passionate about creating professional web applications using my
          skills and technologies. Additionally, I enjoy designing creative and
          visually front-end websites. Feel free to ask me any questions or
          discuss your requirements.
        </p>
        <div className="md:flex items-center md:space-x-3 mt-5">
          <button>
            <a href={resume} className="btn-outlined flex items-center">
              Resume
              <BsDownload className="ml-2" />
            </a>
          </button>
          <button className="btn-primary">
            <a className="flex items-center" href="#contactSection">
              Let's Talk
              <BsTelephone className="ml-2" />
            </a>
          </button>
        </div>
      </div>

      <div className="md:w-2/5 md:pl-5">
        <div className="imgbox md:ml-7">
          <div className="content">
            <img
              src={my_photo}
              alt=""
              className="hover:scale-90 transition-all duration-300 ease-linear"
            />
          </div>
        </div>
        <div className="flex justify-center items-center space-x-4 pt-5">
          <a href="https://github.com/Sohel0Raza" title="GitHub">
            <BsGithub className="myIcon" />
          </a>
          <a
            href="https://www.linkedin.com/in/sohel-raza-361640282/"
            title="Linkedin"
          >
            <BsLinkedin className="myIcon" />
          </a>
          <a href="https://www.facebook.com/Mou.Himu12/" title="Facebook">
            <BsFacebook className="myIcon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;