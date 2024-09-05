import { useEffect } from "react";
import Aos from "aos";

const SkillCard = ({ skill }) => {
  const { name, image, skillLevel } = skill;

  const getValueFromSkillLevele = (level) => {
    if (level == "Expert") {
      const value = 95;
      const color = "text-[#C4CFDE]";
      return { value, color };
    } else if (level == "Intermediate") {
      const value = 70;
      const color = "text-warning";
      return { value, color };
    } else {
      const value = 30;
      const color = "text-error";
      return { value, color };
    }
  };

  const result = getValueFromSkillLevele(skillLevel);
  const { value, color } = result;
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div
        data-aos="zoom-in-down"
        data-aos-duration="1000"
        className=" py-3 card rounded-none hover:opacity-60"
      >
        <div
          className="text-center cursor-pointer hover:border-[1px] border-secondary shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e] rounded-xl p-4 hover:bg-[#181A1E]  hover:scale-105 transition-all duration-500"
        >
          <div className="h-10 w-10 md:h-16 md:w-16 mx-auto my-auto ">
            <img src={image} alt="logo" className="rounded-xl w-full" />
          </div>
            <p className="pt-3 font-bold text-xl">{value}%</p>
        </div>
          <h2 className={`text-xs font-normal text-center pt-3 md:text-base md:font-semibold ${color}`}>
            {name}
          </h2>
      </div>
    </div>
  );
};

export default SkillCard;
