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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`${styles.heading2}`}
        >
          Projects
        </motion.h2>
        <div
          className={`relative ${styles.paddingY} w-full flex flex-col`}
        >
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              key={project.name}
              className={`relative flex ${index % 2 == 0 ? "flex-row-reverse" : "flex-row"} items-center justify-between rounded-lg gap-6 max-w-[450px] sm:max-w-none p-2 mb-8 bg-primary/[0.05] border border-primary/[0.1]`}
            >
              <div className="overflow-hidden rounded-lg project-image relative">
                <img
                  src={urlFor(project.imgUrl).url()}
                  alt={project.name}
                  className="hover:scale-125 transition-all duration-500 object-cover w-full cursor-pointer aspect-[4/3]"
                />
              </div>
              <div className="relative p-4 rounded-lg w-[100vw]">
                <h6 className="text-primary text-[14px] font-semibold">
                  {project.category}
                </h6>
                <h2 className="text-dimWhite text-[28px] font-bold pb-2">
                  {project.name}
                </h2>
                <p className="text-slate text-[16px] pb-4">
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
                  {
                    project.projectLink &&
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BiLink
                        size={22}
                        className="mr-4 fill-slate hover:fill-primary"
                      />
                    </a>
                  }
                  {
                    project.codeLink &&
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsGithub
                        size={22}
                        className="mr-4 fill-slate hover:fill-primary"
                      />
                    </a>
                  }
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
