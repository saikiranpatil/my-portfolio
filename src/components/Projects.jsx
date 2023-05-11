import React, { useEffect, useState } from "react";
import styles from "./style";
import { BiLink } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { urlFor, client } from "../client";
import "react-tooltip/dist/react-tooltip.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"]';
    client.fetch(query).then((data) => {
      setProjects(data);
    });
  }, []);

  return (
    <section
      id="projects"
      className={`${styles.flexCenter} ${styles.paddingY}  max-w-[1100px] m-auto`}
    >
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        <h2 className={`${styles.heading2}`}>Projects</h2>
        <div
          className={`flex flex-col gap-16 ${styles.paddingY} w-full justify-center`}
        >
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`flex ${
                index % 2 == 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              } flex-col items-center`}
            >
              <div className="h-min overflow-hidden rounded-lg">
                <img
                  src={urlFor(project.imgUrl).url()}
                  alt={project.name}
                  className="pr-0 hover:scale-125 transition-all duration-500 max-h-[none] sm:max-h-[350px] object-cover"
                  width="1343"
                  height="895"
                />
              </div>
              <div className="p-4 bg-[#111827] rounded-lg flex items-center">
                <div>
                  <h6 className="text-primary text-[14px] font-semibold">
                    {project.category}
                  </h6>
                  <h2 className="text-dimWhite text-[28px] font-bold pb-2">
                    {project.name}
                  </h2>
                  <span className="flex mb-4">
                    {project.techStacks.map((techStack) => (
                      <small key={"project-" + index + techStack}>
                        <i className="text-dimWhite/60 mr-2">{techStack}</i>
                      </small>
                    ))}
                  </span>
                  <p className="text-dullGray text-[16px] pb-4">
                    {project.description}
                  </p>
                  <span className="flex">
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BiLink
                        size={22}
                        className="mr-4 fill-dullGray hover:fill-primary"
                      />
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsGithub
                        size={22}
                        className="mr-4 fill-dullGray hover:fill-primary"
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="flex flex-wrap justify-center -mx-3 mb-2">
            <button className="bg-primary hover:bg-primary/80 ml-10 text-darkGreen font-normal py-2 px-4 border-[2px] border-primary rounded">
              Show More
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
