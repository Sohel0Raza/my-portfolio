import { useState } from "react";
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { MdHomeRepairService } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import "./Navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="fixed z-40 mt-10">
      <div className="navigation">
        <ul>
          <li className={`list ${activeLink === "#home" ? "active" : ""}`}>
            <a href="#home" onClick={() => handleLinkClick("#home")}>
              <span className="text">Home</span>
              <span className="icon">
                <AiFillHome />
              </span>
            </a>
          </li>
          <li className={`list ${activeLink === "#services" ? "active" : ""}`}>
            <a href="#services" onClick={() => handleLinkClick("#services")}>
              <span className="text">Service</span>
              <span className="icon">
                <MdHomeRepairService />
              </span>
            </a>
          </li>
          <li className={`list ${activeLink === "#skills" ? "active" : ""}`}>
            <a href="#skills" onClick={() => handleLinkClick("#skills")}>
              <span className="icon">
                <GiSkills />
              </span>
              <span className="text">Skill</span>
            </a>
          </li>
          <li className={`list ${activeLink === "#projects" ? "active" : ""}`}>
            <a href="#projects" onClick={() => handleLinkClick("#projects")}>
              <span className="text">Project</span>
              <span className="icon">
                <AiFillProject />
              </span>
            </a>
          </li>
          <li
            className={`list ${
              activeLink === "#contactSection" ? "active" : ""
            }`}
          >
            <a
              href="#contactSection"
              onClick={() => handleLinkClick("#contactSection")}
            >
              <span className="text">Contact</span>
              <span className="icon">
                <BiSolidContact />
              </span>
            </a>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

// import { IoMoon } from "react-icons/io5";
// import { FiSun } from "react-icons/fi";
// const [dark, setDark] = useState(false);
// const darkModeHandler = () => {
//   setDark(!dark);
//   document.body.classList.toggle("dark");
// };
// <p className="text-2xl md:mt-6">
//       <button onClick={darkModeHandler}>
//         <span data-tip="Dark" className="tooltip">
//           {dark && <IoMoon className="myIcon" />}
//         </span>
//         <span data-tip="Light" className="tooltip">
//           {!dark && <FiSun className="myIcon" />}
//         </span>
//       </button>
//     </p>
