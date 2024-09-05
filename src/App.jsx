import ScrollTrigger from "react-scroll-trigger";
import { IoIosArrowRoundDown } from "react-icons/io";
import { useState } from "react";

const [isVisible, setIsVisible] = useState(false);
const onEnterViewport = () => {
    setIsVisible(true);
  };
  const onExitViewport = () => {
    setIsVisible(false);
  };

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








//nav
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { MdHomeRepairService } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { IoMoon } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { FiSun } from "react-icons/fi";
const [dark, setDark] = useState(false);
const darkModeHandler = () => {
  setDark(!dark);
  document.body.classList.toggle("dark");
};
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