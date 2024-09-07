import { useEffect, useState } from "react";
import { getSkills } from "../../hooks/useSkill";
import SkillCard from "../cards/skillCard";
import Title from "../utils/Title";
import { Fade } from "react-awesome-reveal";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await getSkills();
        setSkills(data);
        setFilteredSkills(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchSkills();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredSkills(skills);
    } else {
      const filtered = skills.filter(
        (skill) => skill.techTecnology === category
      );
      setFilteredSkills(filtered);
    }
  };

  return (
    <section id="skills">
      <Title heading={"Summary"} subHeading={"My Skill"}></Title>
      <div className="w-full">
        <nav>
          <ul className="flex md:w-1/4 bg-[#181A1E] space-x-4 justify-center p-3 mx-auto mb-7 rounded-full shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
            <li
              onClick={() => handleCategoryChange("All")}
              className={`cursor-pointer ${
                selectedCategory === "All" ? "font-bold text-[#268aa3]" : ""
              }`}
            >
              All
            </li>
            <li
              onClick={() => handleCategoryChange("Frontend")}
              className={`cursor-pointer ${
                selectedCategory === "Frontend"
                  ? "font-bold text-[#268aa3]"
                  : ""
              }`}
            >
              Frontend
            </li>
            <li
              onClick={() => handleCategoryChange("Backend")}
              className={`cursor-pointer ${
                selectedCategory === "Backend" ? "font-bold text-[#268aa3]" : ""
              }`}
            >
              Backend
            </li>
            <li
              onClick={() => handleCategoryChange("Tool")}
              className={`cursor-pointer ${
                selectedCategory === "Tool" ? "font-bold text-[#268aa3]" : ""
              }`}
            >
              Tools
            </li>
          </ul>
        </nav>

        <div className="grid grid-cols-3 md:grid-cols-7 gap-x-7 gap-y-3 mb-5 px-10 md:px-0">
          {filteredSkills?.map((skill, index) => (
            <Fade
              key={`${selectedCategory}-${skill._id}`}
              triggerOnce={true}
              cascade={false}
              direction="up"
              delay={index * 100}
            >
              <SkillCard skill={skill}></SkillCard>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
