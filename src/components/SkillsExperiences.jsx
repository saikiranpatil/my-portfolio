import React, { useEffect, useState } from "react";
import styles from "./style";
import { skills } from "../constants";
import { BiLink } from "react-icons/bi";
import { urlFor, client } from "../client";
import { motion } from "framer-motion";

const SkillsExperiences = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    client.fetch(query).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <section
      id="skillsexperience"
      className={`${styles.flexCenter} ${styles.paddingY} max-w-[1100px] m-auto`}
    >
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        <motion.h2
          whileInView={{ y: [-50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className={`${styles.heading2}`}
        >
          Skills & Experiences
        </motion.h2>
        <div className="flex md:flex-row flex-col justify-between w-full">
          <div className={`flex flex-col justify-between ${styles.paddingY}`}>
            <div className="grid grid-cols-3 gap-8 w-full">
              {skills.map((item) => (
                <motion.div
                  whileInView={{ y: [-40, 0],opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  key={item.id}
                  className={`flex flex-col ${styles.flexCenter}`}
                >
                  <span className="bg-primary/[0.1] p-4 rounded-full border-[2px] border-primary/[0.05]">
                    <item.icon className="fill-dimWhite hover:fill-primary text-[30px]" />
                  </span>
                  <p className="font-poppins text-[12px] text-normal text-dullGray mt-2">
                    {item.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className={`flex flex-col ${styles.paddingY} max-w-[500px]`}>
            {experiences.map((experience) => (
              <motion.div
                whileInView={{ y: [-40, 0],opacity: [0, 1] }}
                transition={{ duration: 1.5 }}
                key={experience.organisation}
                className="flex flex-row gap-4 items-start"
              >
                <div className="flex flex-row items-center">
                  <div className="rounded-full w-[70px] bg-primary/[0.1] border-[2px] border-primary/[0.05]">
                    <img
                      src={urlFor(experience.logo).url()}
                      alt={experience.organisation}
                      className="max-w-[70px] max-h-[70px] p-3"
                    />
                  </div>
                </div>
                <ol className="relative">
                  <h4 className={`${styles.heading4} my-5`}>
                    {experience.organisation}
                  </h4>
                  {experience.roles.map((role, index) => (
                    <li className="mb-6" key={role.role}>
                      <h3 className="text-[18px] font-semibold text-dimWhite">
                        {role.role}
                      </h3>
                      <span className="text-white/60 text-[12px]">
                        {role.duration}
                      </span>
                      <p className="mt-2 text-dullGray">{role.desc}</p>
                      {role.link && (
                        <a
                          href={role.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BiLink className="fill-dullGray hover:fill-primary mt-1" />
                        </a>
                      )}
                    </li>
                  ))}
                </ol>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsExperiences;
