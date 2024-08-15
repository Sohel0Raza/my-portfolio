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

const Banner = () => {
  const [dark, setDark] = useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div
      id="home"
      className="relative md:flex md:justify-between md:items-center w-full"
    >
      <div className="fixed z-40 -mt-24 md:-mt-0 md:-ml-20">
        <div className="flex text-[#e7f3f0] md:flex-col items-center justify-between my-6 md:my-0 mx-10 md:mx-0 px-7 md:px-3 py-3 md:py-0 space-x-8 md:space-x-0 md:space-y-8 rounded-lg bg-gradient-to-t from-[#df5c67] to-[#1d3557]">
          <p className="text-2xl md:mt-6">
            <button onClick={darkModeHandler}>
              <span data-tip="Dark" className="tooltip">
                {dark && <IoMoon />}
              </span>
              <span data-tip="Light" className="tooltip">
                {!dark && <FiSun />}
              </span>
            </button>
          </p>
          <a data-tip="Home" className="tooltip text-2xl md:mt-2" href="#home">
            <AiFillHome />
          </a>
          <a data-tip="Services" className="tooltip text-3xl" href="#services">
            <MdHomeRepairService />
          </a>
          <a data-tip="Skills" className="tooltip text-2xl" href="#skills">
            <GiSkills />
          </a>
          <a data-tip="Projects" className="tooltip text-2xl" href="#projects">
            <AiFillProject />
          </a>
          <a
            data-tip="Contact"
            className="tooltip text-2xl md:pb-5"
            href="#contactSection"
          >
            <BiSolidContact />
          </a>
        </div>
      </div>
      <div className="md:w-1/2 pb-10 px-10 md:px-0 md:pb-10 md:pr-10 mt-24 md:mt-0">
        <h2 className="text-2xl md:text-2xl font-semibold pb-2 md:mt-10">
          Hello, I am{" "}
        </h2>
        <div className="w-full">
          <TypeAnimation
            className="text-3xl md:text-4xl font-bold font-mono text-[#457b9d]"
            sequence={[
              "Sohel Raza",
              1000,
              "a MERN Stack Developer",
              1000,
              "a Front-end Developer",
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
        <img
          className="w-full h-full rounded-full border-4 border-[#1d3557]"
          src={my_photo}
          alt=""
        />
        <div className="flex justify-center items-center space-x-4 mt-5">
          <a href="https://github.com/Sohel0Raza">
            <BsGithub className="shadow-2xl rounded-full text-4xl border-2 border-[#1d3557] p-1" />
          </a>
          <a href="https://www.linkedin.com/in/sohel-raza-361640282/">
            <BsLinkedin className="shadow-2xl rounded-full text-4xl border-2 border-[#1d3557]  p-1" />
          </a>
          <a href="https://www.facebook.com/Mou.Himu12/">
            <BsFacebook className="shadow-2xl rounded-full text-4xl border-2 border-[#1d3557]  p-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
