const Title = ({ heading, subHeading }) => {
  return (
    <div className="text-center relative py-16">
      <h2 className="uppercase font-bold text-4xl md:text-9xl opacity-5 text-neutral">{heading}</h2>
      <p className="absolute top-[42%] left-[35%] md:top-[40%] md:left-[40%] font-bold text-xl md:text-5xl text-[#268aa3]">
        {subHeading}
      </p>
    </div>
  );
};

export default Title;
