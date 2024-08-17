import Tilt from "react-parallax-tilt";
import { useEffect } from "react";
import Aos from "aos";
const SkillCard = ({ skill }) => {
  const { name, image, skillLevel } = skill;
  console.log("✌️skillLevel --->", skillLevel);

  const getValueFromSkillLevele = (level) => {
    if (level == "Expert") {
      const value = 100;
      const color = "progress-success";
      return { value, color };
    } else if (level == "Intermediate") {
      const value = 60;
      const color = "progress-warning";
      return { value, color };
    } else {
      const value = 20;
      const color = "progress-error";
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
      <Tilt transitionSpeed={2500}>
        <div
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          className="tilt-scale card bg-base-100 shadow-inner shadow-black dark:shadow-white hover:opacity-60"
        >
          <div className="header">
            <div className="p-2 h-10 w-10 md:h-16 md:w-16 mx-auto my-auto">
              <img src={image} alt="logo" className="rounded-xl w-full" />
            </div>
            <div className="items-center text-center">
              <h2 className="text-xs font-normal md:text-base md:font-semibold ">
                {name}
              </h2>
              {/* <div className="flex items-center justify-between px-3 pb-3">
                <span className="mr-2 font-semibold ">{value}%</span>
                <progress
                  className={`progress ${color}`}
                  value={value}
                  max="100"
                ></progress>
              </div> */}
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default SkillCard;
