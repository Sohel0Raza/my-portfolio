import { useEffect, useState } from "react";
import { getSkills } from "../../hooks/useSkill";
import SkillCard from "../cards/skillCard";
import Title from "../utils/Title";
import { Fade, Zoom } from "react-awesome-reveal";
import { RingLoader } from "react-spinners";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
 const color = "#268aa3"
  const frontendSkill = skills?.filter(
    (skill) => skill.techTecnology == "Frontend"
  );
  const backendSkill = skills?.filter(
    (skill) => skill.techTecnology == "Backend"
  );
  const toolSkill = skills?.filter((skill) => skill.techTecnology == "Tool");

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setLoading(true);
        const data = await getSkills();
        setSkills(data);
        setLoading(false);
      } catch (e) {
        console.error(e);
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) {
    return <RingLoader className="h-11 w-11 mx-auto my-48 " color={color} />
  }

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
