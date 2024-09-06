import React, { useState, useEffect } from "react";
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { MdHomeRepairService } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import "./Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let scrollPosition = window.scrollY;
      
      sections.forEach((section) => {
        const offsetTop = section.offsetTop - 100;
        const offsetHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed z-40 mt-10 bottom-0 md:bottom-auto">
      <nav className="navigation">
        <ul>
          <li className={`list ${activeSection === "home" ? "active" : ""}`}>
            <a href="#home">
              <span className="text">Home</span>
              <span className="icon">
                <AiFillHome />
              </span>
            </a>
          </li>
          <li className={`list ${activeSection === "services" ? "active" : ""}`}>
            <a href="#services">
              <span className="text">Service</span>
              <span className="icon">
                <MdHomeRepairService />
              </span>
            </a>
          </li>
          <li className={`list ${activeSection === "skills" ? "active" : ""}`}>
            <a href="#skills">
              <span className="icon">
                <GiSkills />
              </span>
              <span className="text">Skill</span>
            </a>
          </li>
          <li className={`list ${activeSection === "projects" ? "active" : ""}`}>
            <a href="#projects">
              <span className="text">Project</span>
              <span className="icon">
                <AiFillProject />
              </span>
            </a>
          </li>
          <li className={`list ${activeSection === "contactSection" ? "active" : ""}`}>
            <a href="#contactSection">
              <span className="text">Contact</span>
              <span className="icon">
                <BiSolidContact />
              </span>
            </a>
          </li>
          <div className="indicator"></div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
