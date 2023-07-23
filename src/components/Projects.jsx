import React, { useEffect, useState } from "react";
import styles from "./style";
import { BiLink } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { urlFor, client } from "../client";
import { motion } from "framer-motion";

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
        <motion.h2
          whileInView={{ y: [-50, 0] }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`${styles.heading2}`}
        >
          Projects
        </motion.h2>
        <div
          className={`relative ${styles.paddingY} w-full flex justify-center items-start flex-wrap gap-6`}
        >
          {projects.map((project, index) => (
            <motion.div
              whileInView={{ y: [-40, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              key={project.name}
              className={`flex flex-col  justify-center items-center max-w-[350px]`}
            >
              <div className="flex flex-col border-[1px] border-primary/10 rounded-lg overflow-hidden p-4">
                <div className="relative  border-[1px] border-primary/10 overflow-hidden project-image aspect-square rounded-md mb-6">
                  <img
                    src={urlFor(project.imgUrl).url()}
                    alt={project.name}
                    className="pr-0 transition-all duration-500  object-cover h-full"
                  />
                </div>
                <div className="flex items-center">
                  <div>
                    <h6 className="text-primary text-[14px] font-semibold">
                      {project.category}
                    </h6>
                    <h2 className="text-dimWhite text-[24px] font-bold pb-2">
                      {project.name}
                    </h2>
                    <p className="text-dullGray text-[16px] mb-4">
                      {project.description}
                    </p>
                    <span className="flex mb-4">
                      {project.techStacks.map((techStack) => (
                        <small key={"project-" + index + techStack}>
                          <i className="text-dimWhite/60 mr-2">{techStack}</i>
                        </small>
                      ))}
                    </span>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
