const ProjectCard = ({ project }) => {
  const {
    name,
    title,
    image,
    liveLink,
    serverLink,
    clientink,
    technologies,
    features,
    categoryId,
  } = project;
  return (
    <div className=" project-card">
      <div className="relative">
          <div
           className="mx-auto h-[250px] rounded-lg"
            style={{
              backgroundImage: `url(${image})`,
              width: "100%",
              backgroundRepeat: "no-repeat",
              opacity: ".4"
            }}
          ></div>
        <div className="mx-auto h-[250px] p-7 absolute top-0">
          <img
            className="h-full rounded transition-all duration-300 ease-in-out  hover:scale-110 z-30 w-full"
            src={image}
            alt=""
          />
        </div>
      </div>

      <h4>{name}</h4>
      <h2>{title}</h2>
    </div>
  );
};
export default ProjectCard;
