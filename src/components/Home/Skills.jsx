import htmlLogo from "../../assets/logo/icons8-html5-48.png";
import cssLogo from "../../assets/logo/icons8-css-48.png";
import bootstrapLogo from "../../assets/logo/icons8-bootstrap-48.png";
import tailwindLogo from "../../assets/logo/icons8-tailwindcss-48.png";
import javaScriptLogo from "../../assets/logo/icons8-javascript-48.png";
import reactLogo from "../../assets/logo/icons8-react-native-48.png";
import nodeJSLogo from "../../assets/logo/icons8-nodejs-48.png";
import expressJSLogo from "../../assets/logo/icons8-express-js-48.png";
import mongodbLogo from "../../assets/logo/icons8-mongodb-48.png";
import Logo1 from "../../assets/logo/vs-code-4ae63475.svg";
import Logo2 from "../../assets/logo/figma-157f8bf7.svg";
import Logo3 from "../../assets/logo/github-e8486f3f.svg";
import Logo4 from "../../assets/logo/ms-word-cdcdff86.svg";
import Logo5 from "../../assets/logo/netlify-81c534c4.svg";
import Logo6 from "../../assets/logo/icons8-firebase-48.png";
import Logo7 from "../../assets/logo/download.png";
import Logo8 from "../../assets/logo/chrome-88e1e4b0.svg";

import Tilt from 'react-parallax-tilt';
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import Marquee from "react-fast-marquee";

const Skills = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div id="skills">
            <h2 className="w-full font-mono font-bold text-4xl my-10 pb-2 px-10 md:px-0">My Skills</h2>
            <div className="md:w-7/12 mx-auto text-black">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-10 px-10 md:px-0">
                    <Tilt transitionSpeed={2500}>
                        <div className="tilt-scale card bg-base-100 shadow-lg shadow-orange-700 hover:bg-[#fdba74] hover:text-white">
                            <div className="header">
                                <figure className="px-5 pt-5">
                                    <img src={htmlLogo} alt="htmlLogo" className="rounded-xl" />
                                </figure>
                                <div className="card-body p-3 items-center text-center">
                                    <h2 className="text-base font-semibold">HTML</h2>
                                </div>
                            </div>
                        </div>
                    </Tilt>
                    <Tilt transitionSpeed={2500}>
                        <div className="card bg-base-100 shadow-xl shadow-[#669db8] hover:bg-[#9dc2d5] hover:text-white">
                            <figure className="px-5 pt-5">
                                <img src={cssLogo} alt="htmlLogo" className="rounded-xl" />
                            </figure>
                            <div className="card-body p-3 items-center text-center">
                                <h2 className="text-base font-semibold">CSS</h2>
                            </div>
                        </div>
                    </Tilt>
                    <Tilt transitionSpeed={2500}>
                        <div className="card bg-base-100 shadow-xl shadow-[#73599f] hover:bg-[#b0a1cb] hover:text-white">
                            <figure className="px-5 pt-5">
                                <img src={bootstrapLogo} alt="htmlLogo" className="rounded-xl" />
                            </figure>
                            <div className="card-body p-3 items-center text-center">
                                <h2 className="text-base font-semibold">Bootstrap</h2>
                            </div>
                        </div>
                    </Tilt>
                    <Tilt transitionSpeed={2500}>
                        <div className="card bg-base-100 shadow-xl shadow-[#50919a] hover:bg-[#acd6dc] hover:text-white">
                            <figure className="px-5 pt-5">
                                <img src={tailwindLogo} alt="htmlLogo" className="rounded-xl" />
                            </figure>
                            <div className="card-body p-3 items-center text-center">
                                <h2 className="text-base font-semibold">Tailwind</h2>
                            </div>
                        </div>
                    </Tilt>
                    <Tilt transitionSpeed={2500}>
                        <div className="card bg-base-100 shadow-xl shadow-[#cebc62] hover:bg-[#e9dc98] hover:text-white">
                            <figure className="px-5 pt-5">
                                <img src={javaScriptLogo} alt="htmlLogo" className="rounded-xl" />
                            </figure>
                            <div className="card-body p-3 items-center text-center">
                                <h2 className="text-base font-semibold">JavaScript</h2>
                            </div>
                        </div>
                    </Tilt>
                    <Tilt transitionSpeed={2500}>
                        <div className="card bg-base-100 shadow-xl shadow-[#87E0EA] hover:bg-[#ffb4a5] hover:shadow-[#e38b79] hover:text-white">
                            <figure className="px-5 pt-5">
                                <img src={reactLogo} alt="htmlLogo" className="rounded-xl" />
                            </figure>
                            <div className="card-body p-3 items-center text-center">
                                <h2 className="text-base font-semibold">React JS</h2>
                            </div>
                        </div>
                    </Tilt>
                    <Tilt transitionSpeed={2500}>
                        <div className="card bg-base-100 shadow-xl shadow-[#5aa35c] hover:bg-[#ace7ae] hover:text-white">
                            <figure className="px-5 pt-5">
                                <img src={nodeJSLogo} alt="htmlLogo" className="rounded-xl" />
                            </figure>
                            <div className="card-body p-3 items-center text-center">
                                <h2 className="text-base font-semibold">Node JS</h2>
                            </div>
                        </div>
                    </Tilt>
                    <Tilt transitionSpeed={2500}>
                        <div className="card bg-base-100 shadow-xl shadow-[#525252] hover:bg-[#acd7e7] hover:shadow-[#5b8899] hover:text-white">
                            <figure className="px-5 pt-5">
                                <img src={expressJSLogo} alt="htmlLogo" className="rounded-xl" />
                            </figure>
                            <div className="card-body p-3 items-center text-center">
                                <h2 className="text-base font-semibold">Express JS</h2>
                            </div>
                        </div>
                    </Tilt>
                    <Tilt transitionSpeed={2500}>
                        <div className="card bg-base-100 shadow-xl shadow-[#4CAF50] hover:bg-[#599e5b] hover:text-white">
                            <figure className="px-5 pt-5">
                                <img src={mongodbLogo} alt="htmlLogo" className="rounded-xl" />
                            </figure>
                            <div className="card-body p-3 items-center text-center">
                                <h2 className="text-base font-semibold">MongoDB</h2>
                            </div>
                        </div>
                    </Tilt>
                </div>
            </div>
            <div className="text-center md:w-full md:mx-auto mb-10">
                <h2 className="font-mono font-bold text-2xl my-10 border-b-2 border-[#1d3557] rounded-xl mx-10 md:mx-0 pb-2">Tools</h2>
                <Marquee>
                <div className="flex justify-center items-center md:grid md:grid-cols-8 md:gap-x-16 gap-x-10 px-10 md:px-0 text-center">
                    <div className="mx-auto ">
                        <img className="h-12" src={Logo1} alt="" />
                        <div>
                            <h2 className="font-bold">VS Code</h2>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <img className="h-12" src={Logo2} alt="" />
                        <div>
                            <h2 className="font-bold">Figma</h2>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <img className="h-12" src={Logo3} alt="" />
                        <div>
                            <h2 className="font-bold">GitHub</h2>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <img className="h-12" src={Logo4} alt="" />
                        <div>
                            <h2 className="font-bold">MS Word</h2>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <img className="h-12" src={Logo5} alt="" />
                        <div>
                            <h2 className="font-bold">Netlify</h2>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <img className="h-12" src={Logo6} alt="" />
                        <div>
                            <h2 className="font-bold">Firebase</h2>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <img className="h-12" src={Logo8} alt="" />
                        <div>
                            <h2 className="font-bold">Dev Tools</h2>
                        </div>
                    </div>
                    <div className="md:mr-14">
                        <img className="h-12" src={Logo7} alt="" />
                        <div>
                            <h2 className="font-bold">Vercel</h2>
                        </div>
                    </div>
                </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Skills;