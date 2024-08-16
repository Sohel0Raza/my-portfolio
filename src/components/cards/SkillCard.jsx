import Tilt from "react-parallax-tilt";

const SkillCard = ({ skill }) => {
  const { name, image, skillLevel } = skill;

  const getValueFromSkillLevele = (level) => {
    if (level == "Expert") {
      return 100;
    } else if (level == "Intermediate") {
      return 50;
    } else {
      return 20;
    }
  };

  const value = getValueFromSkillLevele(skillLevel);

  return (
    <div>
      <Tilt transitionSpeed={2500}>
        <div className="tilt-scale card bg-base-100 shadow-lg shadow-black hover:bg-[#1d3557] hover:text-white">
          <div className="header">
            <div className="p-2 h-20 w-20 mx-auto my-auto">
              <img src={image} alt="logo" className="rounded-xl w-full" />
            </div>
            <div className="items-center text-center pb-4">
              <h2 className="text-base font-semibold">{name}</h2>
              <div
                className="radial-progress"
                style={{ "--value": value }}
                role="progressbar"
              >
                {value}
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default SkillCard;
