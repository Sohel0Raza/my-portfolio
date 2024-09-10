import { FiArrowUpRight } from "react-icons/fi";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ project, onOpenModal }) => {
  const { title, image } = project;

  return (
    <div>
      <div className="project-card">
        <div>
          <div className="mx-auto h-[230px] py-2 px-1">
            <img
              loading="lazy"
              className="h-full rounded transition-all duration-300 ease-in-out hover:scale-105 w-full"
              src={image}
              alt={title}
            />
          </div>
        </div>
        <div className="pt-7 group hover:text-primary transition-all duration-500 ease-linear ">
          <button 
            className="text-[22px] leading-8 text-start inline-block font-semibold"
            onClick={() => onOpenModal(project)}
          >
            {title}
            <FiArrowUpRight className="text-2xl hidden group-hover:inline-block ml-2" />
          </button>
        </div>
      </div>
      <ProjectModal openModal></ProjectModal>
    </div>
  );
};

export default ProjectCard;
