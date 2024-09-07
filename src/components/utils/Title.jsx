import { Fade } from "react-awesome-reveal";

const Title = ({ heading, subHeading }) => {
  return (
    <div className="text-center relative py-5 md:py-16">
      <h2 className="uppercase font-bold text-4xl md:text-9xl opacity-5 text-neutral">
        {heading}
      </h2>
        <p className="absolute top-[38%] left-[35%] md:top-[43%] md:left-[40%] font-bold text-xl md:text-5xl text-[#268aa3]">
      <Fade direction="up" triggerOnce={true}>
          {subHeading}
      </Fade>
        </p>
    </div>
  );
};

export default Title;
