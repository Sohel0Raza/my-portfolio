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
  const [activeCategoryId, setActiveCategoryId] = useState(
    "66ddbfaccba47e586372bf90"
  );
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
        const projectRespone = await useHttp(
          "http://localhost:5000/api/project"
        );
        const projects = projectRespone.data;
        setAllProject(projects);

        const categoryRespone = await useHttp(
          "http://localhost:5000/api/category"
        );
        const categories = categoryRespone.data;
        setAllCategory(categories);

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handelFilter = (categoryId) => {
    setActiveCategoryId(categoryId);

    const projectByCategory = allProject?.filter(
      (project) => project.categoryId == categoryId
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
          <div className="flex mx-auto md:w-[56%] bg-[#181A1E] space-x-10 justify-center p-3 mb-7 rounded-full shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
            {allCategory?.map((category, index) => (
              <button
                onClick={() => handelFilter(category._id)}
                className={`${
                  category._id == activeCategoryId
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
