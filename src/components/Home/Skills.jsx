import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Aos from "aos";
import { getSkills } from "../../hooks/useSkill";
import SkillCard from "../cards/skillCard";
import Title from "../utils/Title";
import { Fade, Zoom } from "react-awesome-reveal";

const Skills = () => {
  const [skills, setSkills] = useState();
  const frontendSkill = skills?.filter(
    (skill) => skill.techTecnology == "Frontend"
  );
  const backendSkill = skills?.filter(
    (skill) => skill.techTecnology == "Backend"
  );
  const toolSkill = skills?.filter((skill) => skill.techTecnology == "Tool");
  useEffect(() => {
    Aos.init();

    getSkills()
      .then((data) => setSkills(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <section id="skills">
      <Title heading={"Summary"} subHeading={"My Skill"}></Title>
      <div className="w-full">
        <h2 className=" font-bold text-xl text-[#268aa3] pb-2 md:px-0">
          Front-end
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-7 gap-x-7 gap-y-3  mb-10 px-10 md:px-0">
          {frontendSkill?.map((skill, index) => (
            <Fade
              triggerOnce={true}
              key={skill._id}
              cascade={false}
              direction="up"
              delay={index * 200}
            >
              <SkillCard skill={skill}></SkillCard>
            </Fade>
          ))}
        </div>
      </div>
      <div className="w-full">
        <h2 className=" font-bold text-xl text-[#268aa3] pb-2 md:px-0">
          Backend
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-7 gap-x-7 gap-y-3  mb-10 px-10 md:px-0">
          {backendSkill?.map((skill, index) => (
            <Fade
              triggerOnce={true}
              key={skill._id}
              cascade={false}
              direction="down"
              delay={index * 200}
            >
              <SkillCard skill={skill}></SkillCard>
            </Fade>
          ))}
        </div>
      </div>
      <div className="w-full">
        <h2 className="w-full font-bold text-xl pb-2 md:px-0 text-[#268aa3]">
          Tools
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-7 gap-x-7 gap-y-3  mb-10 px-10 md:px-0">
          {toolSkill?.map((skill, index) => (
            <Zoom
              triggerOnce={true}
              key={skill._id}
              cascade={false}
              direction="right"
              delay={index * 200}
            >
              <SkillCard skill={skill}></SkillCard>
            </Zoom>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
