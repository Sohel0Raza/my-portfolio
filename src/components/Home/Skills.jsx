import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Aos from "aos";
import { getSkills } from "../../hooks/useSkill";
import SkillCard from "../cards/skillCard";

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
    <div id="skills">
      <h1 className="w-full font-bold text-4xl my-5 pb-2 px-10 md:px-0">
        My Skills
      </h1>
      <div className="w-full">
        <h2 className=" font-bold text-xl text-center text-primary mb-3 pb-2 md:px-0">
          Front-end Technonogies
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-7 gap-x-7 gap-y-3  mb-10 px-10 md:px-0">
          {frontendSkill?.map((skill) => (
            <SkillCard key={skill._id} skill={skill}></SkillCard>
          ))}
        </div>
      </div>
      <div className="w-full">
        <h2 className=" font-bold text-xl text-center text-primary mb-3 pb-2 md:px-0">
          Backend Technonogies
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-7 gap-x-7 gap-y-3  mb-10 px-10 md:px-0">
          {backendSkill?.map((skill) => (
            <SkillCard key={skill._id} skill={skill}></SkillCard>
          ))}
        </div>
      </div>
      <div className="w-full">
        <h2 className="w-full font-bold text-center text-xl mb-3 pb-2 md:px-0 text-primary">
          Tools
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-7 gap-x-7 gap-y-3  mb-10 px-10 md:px-0">
          {toolSkill?.map((skill) => (
            <SkillCard key={skill._id} skill={skill}></SkillCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
