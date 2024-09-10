import { HiBadgeCheck } from "react-icons/hi";
import { FaLink } from "react-icons/fa6";
import { BsServer } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  const {
    name,
    title,
    image,
    liveLink,
    serverLink,
    clientLink,
    technologies,
    features,
  } = project;
  console.log("✌️technologies --->", technologies);
  return (
    <dialog id="project_modal" className="modal overflow-y-scroll " open>
      <div className="w-8/12 mx-auto bg-[#383d44] text-[#C4CFDE] relative p-10 my-10 ">
        <form method="dialog">
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-3 top-2"
            onClick={onClose}
          >
            ✕
          </button>
        </form>
        <div>
          <div className="">
            <img className="w-full h-full rounded" src={image} alt="" />
          </div>
          <p className="pt-5 text-xl">{title}</p>
          <div className="flex justify-between items-center pt-2 pb-4">
            <h3 className="font-bold text-4xl w-2/3 text-[#39c9ec] uppercase">{name}</h3>
            <div className="flex justify-between w-1/3 py-2">
              <button className="myLink flex justify-between items-center space-x-2" ><FaGithub/><a href={clientLink} >Client</a></button>
              <button className="myLiveLink flex justify-between items-center space-x-2" ><FaLink/><a href={liveLink} >Live</a></button>
              <button className="myLink flex justify-between items-center space-x-2" ><BsServer/><a href={serverLink} >Server</a></button>
            </div>
          </div>
          <hr />
          <h3 className="text-xl font-bold py-3">Feature</h3>
          <div className="pb-5">
            {features?.map((feature) => (
              <div className="flex" key={feature._id}>
                <div className="py-1 pr-4 ">
                  <HiBadgeCheck className="text-primary text-xl"/>
                </div>
                <p>{feature.name}</p>
              </div>
            ))}
          </div>
          <hr />
          <h3 className="text-xl font-bold pt-5">Technologies Used</h3>
          <div className="grid grid-cols-5 gap-y-5 gap-x-3 text-center pt-5">
            {technologies?.map((technology) => (
              <ul key={technology._id}>
                <li className="border-[1px] p-1 px-2 rounded-2xl text-[#39c9ec]">{technology.name}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </dialog>
  );
};
export default ProjectModal;
