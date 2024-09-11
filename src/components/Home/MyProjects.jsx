import { useEffect, useState } from "react";
import Title from "../utils/Title";
import { useHttp } from "../../hooks/useHttp";
import ProjectCard from "../cards/projectCard";
import ProjectModal from "../cards/ProjectModal";
import { Fade } from "react-awesome-reveal";
import { HashLoader } from "react-spinners";

const MyProjects = () => {
  const [allProject, setAllProject] = useState([]);
  const [filteredProject, setFilteredProject] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        
        const projectResponse = await useHttp("  https://my-portfolio-server-beta-sandy.vercel.app/api/project");
        const projects = projectResponse.data;
        setAllProject(projects);

        const categoryResponse = await useHttp("  https://my-portfolio-server-beta-sandy.vercel.app/api/category");
        const categories = categoryResponse.data;
        setAllCategory(categories);

        const favouriteProjects = projects.filter((project) => project.categoryId == "66ddbfaccba47e586372bf90");
        setFilteredProject(favouriteProjects);

        const favouriteCategory = categories.find((cat) => cat.name === "Favourites");
        if (favouriteCategory) {
          setActiveCategoryId(favouriteCategory._id);
        }

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleFilter = (categoryId) => {
    setActiveCategoryId(categoryId);

    const projectByCategory = allProject?.filter(
      (project) => project.categoryId === categoryId
    );
    setFilteredProject(projectByCategory);
  };

  return (
    <section id="projects" className="w-full md:my-10 py-5">
      <Title heading={"Portfolio"} subHeading={"My Work"}></Title>
      {isLoading ? (
        <>
          <HashLoader className="mx-auto my-32" size="70px" color="#268aa3" />
        </>
      ) : (
        <>
          <div className="grid grid-cols-3 md:grid-cols-5 md:w-[70%] mx-4 md:mx-auto bg-[#181A1E] gap-y-3 md:gap-y-0 md:space-x-5 p-3 mb-7 rounded-sm  md:rounded-full shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
            {allCategory?.map((category, index) => (
              <button
                onClick={() => handleFilter(category._id)}
                className={`${
                  category._id === activeCategoryId
                    ? "text-[#268aa3] font-bold"
                    : ""
                }`}
                key={index}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-5">
              {filteredProject?.map((project, index) => (
                <Fade
                  key={`${filteredProject}-${project._id}`}
                  cascade={false}
                  triggerOnce={false}
                  duration="up"
                  delay={index * 200}
                >
                  <ProjectCard
                    project={project}
                    onOpenModal={openModal}
                  ></ProjectCard>
                </Fade>
              ))}
            </div>
            <ProjectModal project={selectedProject} onClose={closeModal} />
          </div>
        </>
      )}
    </section>
  );
};

export default MyProjects;
