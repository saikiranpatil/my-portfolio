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
          className={`relative ${styles.paddingY} w-full flex justify-center items-start flex-wrap gap-6`}
        >
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              key={project.name}
              className={`flex ${index % 2 == 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                } ${styles.card} flex-col items-center rounded-lg gap-6 max-w-[450px] sm:max-w-none p-1`}
            >
              <div className="h-min overflow-hidden rounded-lg project-image relative">
                <img
                  src={urlFor(project.imgUrl).url()}
                  alt={project.name}
                  className="hover:scale-125 transition-all duration-500 max-h-[none] sm:max-h-[350px] object-cover"
                  width="1343"
                  height="895"
                />
              </div>
              <div className="p-4 rounded-lg flex items-center">
                <div>
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
                  </span>
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
