import { MdOutlineDesignServices } from "react-icons/md";
import { BiBug } from "react-icons/bi";
import { FaCode } from "react-icons/fa";

import Title from "../utils/Title";
import { JackInTheBox, Slide } from "react-awesome-reveal";

const MyService = () => {
  return (
    <section id="services" className="w-full py-5 md:-mt-10">
      <Title heading={"Services"} subHeading={"What I Do?"}></Title>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <Slide direction="right">
          <div className="service-card">
            <FaCode className="mx-auto text-6xl p-2 text-primary  rounded-full " />
            <h4 className="text-2xl font-semibold p-2 mb-3">Web Development</h4>
            <p>
              I am a dedicated web developer passionate about creating
              outstanding websites and web applications. With a solid
              understanding of programming languages and frameworks, I build
              dynamic and reliable solutions tailored to meet specific project
              requirements.
            </p>
          </div>
        </Slide>
        <JackInTheBox duration={2000}>
          <div className="service-card md:h-[352px]">
            <MdOutlineDesignServices className="mx-auto text-6xl p-2 text-primary  rounded-full " />
            <h4 className="text-2xl font-semibold p-2 mb-3">
              Responsive Design
            </h4>
            <p>
              I am a responsive designer who creates beautiful and easy-to-use
              websites that work well on any device. I focus on making sure
              every user has a great experience, no matter what screen size they
              use.
            </p>
          </div>
        </JackInTheBox>
        <Slide direction="left">
          <div className="service-card">
            <BiBug className="mx-auto text-6xl p-2 text-primary  rounded-full " />
            <h4 className="text-2xl font-semibold p-2 mb-3">Bug Fixing</h4>
            <p>
              I am a meticulous website bug fixer specializing in identifying
              and resolving issues to ensure smooth and error-free website
              functionality. With a keen eye for detail and strong
              troubleshooting skills, I detect and fix bugs that disrupt user
              experience and hinder performance.
            </p>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default MyService;
