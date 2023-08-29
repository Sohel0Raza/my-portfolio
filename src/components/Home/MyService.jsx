import { MdDesignServices } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";
import { BsPhoneFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MyService = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div id="services" className="w-full md:mt-10 md:mb-20">
            <h2 className="font-mono font-bold text-4xl my-10 pb-2 px-10 md:px-0">My Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div data-aos="zoom-in-right"  data-aos-duration="3000" className="text-center shadow-2xl p-7 rounded-md mx-8 md:mx-0 border-2 border-[#88A6A3]">
                    <MdDesignServices className="mx-auto text-5xl p-2 shadow-2xl bg-[#88A6A3] rounded-full text-white" />
                    <h4 className="text-2xl font-semibold p-2">Web Design</h4>
                    <p>Web design is the process of creating visually appealing and user-friendly websites and interfaces by arranging content, selecting colors, typography, and layouts.</p>
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="1500" className="text-center shadow-2xl p-7 rounded-md mx-8 md:mx-0 border-2 border-[#88A6A3]">
                    <BiCodeAlt className="mx-auto text-5xl p-2 shadow-2xl bg-[#88A6A3] rounded-full text-white" />
                    <h4 className="text-2xl font-semibold p-2">Web Development</h4>
                    <p>Web development creating websites and web applications using programming. It are front-end design, back-end functionality, and database management to deliver user-friendly online experiences.</p>
                </div>
                <div data-aos="zoom-in-left" data-aos-duration="3000" className="text-center shadow-2xl p-7 rounded-md mx-8 md:mx-0 border-2 border-[#88A6A3]">
                    <BsPhoneFill className="mx-auto text-5xl p-2 shadow-2xl bg-[#88A6A3] rounded-full text-white" />
                    <h4 className="text-2xl font-semibold p-2">Web Responsive Design</h4>
                    <p>Responsive Web Design is an approach to web design that aims to make web pages render well On a variety of devices and window Or screen sizes from minimum To maximum display size to ensure usability And satisfaction.</p>
                </div>

            </div>
        </div>
    );
};

export default MyService;