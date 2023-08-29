import my_photo from "../../assets/project Img/185.png";
import { TypeAnimation } from 'react-type-animation';
import { BsDownload, BsFacebook, BsGithub, BsLinkedin, BsTelephone } from "react-icons/bs";
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { MdHomeRepairService } from "react-icons/md";
import { BsBookHalf } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";
import resume from "../../../public/Web Developer Resume of Sohel Raza.pdf";
const Banner = () => {
    return (
        <div id="home" className="relative md:flex md:justify-between md:items-center md:w-10/12 mx-auto">
            <div className="fixed z-40 -mt-24 md:-mt-0 md:-ml-20">
                <div className="flex md:flex-col items-center justify-between my-6 md:my-0 mx-10 md:mx-0 px-7 md:px-3 py-3 md:py-0 space-x-9 md:space-x-0 md:space-y-8 rounded-lg bg-gradient-to-t from-[#8F7EA8] to-[#E0C6F5]">
                    <a data-tip="Home" className="tooltip text-2xl md:mt-5" href="#home"><AiFillHome /></a>
                    <a data-tip="Services" className="tooltip text-3xl" href="#services"><MdHomeRepairService /></a>
                    <a data-tip="Skills" className="tooltip text-2xl" href="#skills"><BsBookHalf /></a>
                    <a data-tip="Projects" className="tooltip text-2xl" href="#projects"><AiFillProject /></a>
                    <a data-tip="Contact" className="tooltip text-2xl md:pb-5" href="#contact"><BiSolidContact /></a>
                </div>
            </div>
            <div className="md:w-1/2 pb-10 px-10 md:px-0 md:pb-10 md:pr-10 mt-24 md:mt-0">
                <h2 className="text-2xl md:text-2xl font-semibold pb-2 md:mt-10">Hello, I am </h2>
                <TypeAnimation
                    className="text-3xl md:text-4xl font-bold font-mono text-[#8F7EA8]"
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
                <p className="pt-3">I am passionate about creating professional web applications using my skills and technologies. Additionally, I enjoy designing creative and visually front-end websites. Feel free to ask me any questions or discuss your requirements.</p>
                <div className="md:flex items-center md:space-x-3 mt-5">
                    <button>
                        <a href={resume} className="btn-outlined flex items-center">Resume<BsDownload className="ml-2" /></a>
                    </button>
                    <button className="btn-primary flex items-center">Let's Talk<BsTelephone className="ml-2" /></button>
                </div>
            </div>
            <div className="md:w-1/3 md:mt-10 py-10 px-10 md:px-0">
                <img className="w-full h-full border-8 border-[#E0C6F5] rounded-full" src={my_photo} alt="" />
                <div className="flex justify-center items-center space-x-4 mt-5">
                    <a href="https://github.com/Sohel0Raza"><BsGithub className="shadow-2xl rounded-full text-4xl border-2 p-1" /></a>
                    <a href="https://www.linkedin.com/in/sohel-raza-361640282/"><BsLinkedin className="shadow-2xl rounded-full text-4xl border-2 p-1" /></a>
                    <a href="https://www.facebook.com/Mou.Himu12/"><BsFacebook className="shadow-2xl rounded-full text-4xl border-2 p-1" /></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;