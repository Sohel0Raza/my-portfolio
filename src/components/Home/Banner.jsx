import { useState } from "react";
import my_photo from "../../assets/project Img/185.png";
import { TypeAnimation } from "react-type-animation";
import {
  BsDownload,
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTelephone,
} from "react-icons/bs";
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { MdHomeRepairService } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { IoMoon } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { FiSun } from "react-icons/fi";
import resume from "../../../public/MERN Stack Web Developer CV of Sohel Raza.pdf";
import ScrollTrigger from "react-scroll-trigger";
import { IoIosArrowRoundDown } from "react-icons/io";

const Banner = () => {
  const [dark, setDark] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  const onEnterViewport = () => {
    setIsVisible(true);
  };
  const onExitViewport = () => {
    setIsVisible(false);
  };

  return (
    <div
      id="home"
      className="relative md:flex md:justify-between md:items-center w-full bg-[#212428]"
    >
      <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
        <div
          className={` fixed text-center bottom-0 right-6 hidden md:block ${
            isVisible ? "visible" : "invisible"
          }`}
        >
          <IoIosArrowRoundDown className="text-5xl ml-3 rounded-[50%] animate-bounce text-primary"></IoIosArrowRoundDown>
          <span className="text-primary uppercase text-xs tracking-[5px]">
            Scroll
          </span>
        </div>
      </ScrollTrigger>
      <div className="fixed z-40 -mt-[90px] md:-mt-0 md:-ml-24 md:bg-[#212428] bg-[#383d44] bottom-0 md:bottom-[85px] ">
        <div className="flex text-[#e7f3f0] md:flex-col items-center mx-5 md:mx-0 py-4 md:py-0 space-x-5 md:space-x-0 md:space-y-6 px-2 rounded-[2px]">
          <p className="text-2xl md:mt-6">
            <button onClick={darkModeHandler}>
              <span data-tip="Dark" className="tooltip">
                {dark && <IoMoon className="myIcon" />}
              </span>
              <span data-tip="Light" className="tooltip">
                {!dark && <FiSun className="myIcon" />}
              </span>
            </button>
          </p>
          <a data-tip="Home" className="tooltip" href="#home">
            <AiFillHome className="myIcon" />
          </a>
          <a data-tip="Services" className="tooltip" href="#services">
            <MdHomeRepairService className="myIcon" />
          </a>
          <a data-tip="Skills" className="tooltip" href="#skills">
            <GiSkills className="myIcon" />
          </a>
          <a data-tip="Projects" className="tooltip" href="#projects">
            <AiFillProject className="myIcon" />
          </a>
          <a
            data-tip="Contact"
            className="tooltip text-2xl md:pb-5"
            href="#contactSection"
          >
            <BiSolidContact className="myIcon" />
          </a>
        </div>
      </div>
      <div className="md:w-1/2 py-10 md:py-0 px-10 md:px-0 md:pb-10 md:pr-10 md:-ml-44 md:mt-0">
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
      <div className="md:w-1/3 md:mt-10 py-10 px-10 md:px-0">
        <div className=" shadow-inner shadow-black rounded-full">
          <img className="w-full h-full rounded-full" src={my_photo} alt="" />
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
