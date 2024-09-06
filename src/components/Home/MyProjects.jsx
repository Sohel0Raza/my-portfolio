import { useState } from "react";
import campReunionImg from "../../assets/project Img/Screenshot (21).png";
import ZooZest from "../../assets/project Img/Screenshot (19).png";
import RacipeRiot from "../../assets/project Img/Screenshot (20).png";
import ReactCardFlip from "react-card-flip";
import { BsEyeFill, BsGithub } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import Title from "../utils/Title";

const MyProjects = () => {
  const [flip1, setFlip1] = useState(false);
  const [flip2, setFlip2] = useState(false);
  const [flip3, setFlip3] = useState(false);
  return (
    <section id="projects" className="w-full my-10 py-5">
     
      <Title heading={"Portfolio"} subHeading={"My Work"}></Title>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="card shadow-2xl shadow-[#557A08] mx-8 md:mx-0">
          <ReactCardFlip isFlipped={flip1} flipDirection="vertical">
            <div>
              <div className="relative mt-5 h-[145px]">
                <img src={campReunionImg} alt="campReunion" />
                <button
                  onClick={() => setFlip1(!flip1)}
                  className="btn-secondary absolute top-1/2 right-8"
                >
                  View Details
                </button>
              </div>
              <div className="card-body">
                <h2 className="card-title   ">CampReunion</h2>
                <div className="card-actions justify-between mt-3">
                  <a
                    className="flex items-center btn-client"
                    href="https://github.com/Sohel0Raza/camp-reunion-client"
                  >
                    <BsGithub className="mr-2" /> Client
                  </a>
                  <a
                    className="flex items-center justify-center btn-live"
                    href="https://camp-reunion.web.app/"
                  >
                    <BsEyeFill className="mr-2" />
                    Live
                  </a>
                  <a
                    className="flex items-center btn-server"
                    href="https://github.com/Sohel0Raza/camp-reunion-server"
                  >
                    <BsGithub className="mr-2" />
                    Server
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="card-body">
                <h2 className="card-title">CampReunion</h2>
                <div className="px-5">
                  <ul className="list-disc">
                    <li>
                      It is a MERN stack-based website for summer camp school.
                    </li>
                    <li>
                      {" "}
                      The platform provides class details, camp schedules, and
                      instructor descriptions, along with separate dashboards
                      for admins, instructors, and students, and a secure
                      payment system.
                    </li>
                  </ul>
                </div>
                <div className="card-actions justify-center mt-3">
                  <button
                    onClick={() => setFlip1(!flip1)}
                    className="text-2xl border-2 rounded-full p-2"
                  >
                    <RxCross2 />
                  </button>
                </div>
              </div>
            </div>
          </ReactCardFlip>
        </div>
        <div className="card shadow-2xl shadow-[#CE8E13] mx-8 md:mx-0">
          <ReactCardFlip isFlipped={flip2} flipDirection="horizontal">
            <div>
              <div className="relative mx-5 mt-5">
                <img src={ZooZest} alt="campReunion" />
                <button
                  onClick={() => setFlip2(!flip2)}
                  className="btn-secondary absolute top-1/2 right-0"
                >
                  View Details
                </button>
              </div>
              <div className="card-body">
                <h2 className="card-title   ">ZooZest</h2>
                <div className="card-actions justify-between mt-3">
                  <a
                    className="flex items-center btn-client"
                    href="https://github.com/Sohel0Raza/zoo-zest-client"
                  >
                    <BsGithub className="mr-2" /> Client
                  </a>
                  <a
                    className="flex items-center justify-center btn-live"
                    href="https://sporty-verse.web.app/"
                  >
                    <BsEyeFill className="mr-2" />
                    Live
                  </a>
                  <a
                    className="flex items-center btn-server"
                    href="https://github.com/Sohel0Raza/zoo-zest-server"
                  >
                    <BsGithub className="mr-2" />
                    Server
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="card-body">
                <h2 className="card-title">ZooZest</h2>
                <div className="px-5">
                  <ul className="list-disc">
                    <li>
                      It is a MERN stack-based website for toy marketplace.
                    </li>
                    <li>
                      User can add, update and delete different types of toys.
                    </li>
                    <li>
                      User-friendly interface with easy navigation, robust
                      search filters and detailed product descriptions for a
                      seamless shopping experience.
                    </li>
                  </ul>
                </div>
                <div className="card-actions justify-center mt-3">
                  <button
                    onClick={() => setFlip2(!flip2)}
                    className="text-2xl border-2 rounded-full p-2"
                  >
                    <RxCross2 />
                  </button>
                </div>
              </div>
            </div>
          </ReactCardFlip>
        </div>
        <div className="card shadow-2xl shadow-[#1C9CAB] mx-8 md:mx-0">
          <ReactCardFlip isFlipped={flip3} flipDirection="vertical">
            <div>
              <div className="relative mx-5 mt-5">
                <img src={RacipeRiot} alt="campReunion" />
                <button
                  onClick={() => setFlip3(!flip3)}
                  className="btn-secondary absolute top-1/2 right-0"
                >
                  View Details
                </button>
              </div>
              <div className="card-body">
                <h2 className="card-title   ">RecipeRiot</h2>
                <div className="card-actions justify-between mt-3">
                  <a
                    className="flex items-center btn-client"
                    href="https://github.com/Sohel0Raza/recipe-riot-client"
                  >
                    <BsGithub className="mr-2" /> Client
                  </a>
                  <a
                    className="flex items-center justify-center btn-live"
                    href="https://recipe-riot-auth.web.app/"
                  >
                    <BsEyeFill className="mr-2" />
                    Live
                  </a>
                  <a
                    className="flex items-center btn-server"
                    href="https://github.com/Sohel0Raza/recipe-riot-server"
                  >
                    <BsGithub className="mr-2" />
                    Server
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="card-body">
                <h2 className="card-title">RecipeRiot</h2>
                <div className="px-5">
                  <ul className="list-disc">
                    <li>This is a Firebase authentication-based website.</li>
                    <li>
                      Logged-in users with Google, GitHub, or Gmail credentials
                      can exclusively view chef recipes.
                    </li>
                    <li>
                      Here are personal profiles of the chefs and descriptions
                      of some of their famous recipes and information on cooking
                      methods, ingredients etc.
                    </li>
                  </ul>
                </div>
                <div className="card-actions justify-center">
                  <button
                    onClick={() => setFlip3(!flip3)}
                    className="text-2xl border-2 rounded-full p-2"
                  >
                    <RxCross2 />
                  </button>
                </div>
              </div>
            </div>
          </ReactCardFlip>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
