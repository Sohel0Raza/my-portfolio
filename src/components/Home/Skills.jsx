import { useEffect, useState } from "react";
import { useHttp } from "../../hooks/useHttp";
import SkillCard from "../cards/skillCard";
import Title from "../utils/Title";
import { Slide, Zoom } from "react-awesome-reveal";
import { HashLoader } from "react-spinners";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setIsLoading(true);
        const respone = await useHttp("  https://my-portfolio-server-beta-sandy.vercel.app/api/skill");
        const data = respone?.data
        setIsLoading(false);
        setSkills(data);
        setFilteredSkills(data);
      } catch (e) {
        console.error(e);
        setIsLoading(false);
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
          <ul className="flex mx-auto md:w-1/4 bg-[#181A1E] space-x-4 justify-center p-3 mb-7 rounded-full shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
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
        {isLoading ? (
          <>
            <HashLoader className="mx-auto my-32" size="70px" color="#268aa3" />
          </>
        ) : (
          <>
            <div className="grid grid-cols-3 md:grid-cols-7 gap-x-7 gap-y-3 mb-5 px-10 md:px-0">
              {filteredSkills?.map((skill) => (
                <Slide
                  key={`${selectedCategory}-${skill._id}`}
                  triggerOnce={true}
                  direction="up"
                >
                  <SkillCard skill={skill} isLodaing={isLoading}></SkillCard>
                </Slide>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Skills;
