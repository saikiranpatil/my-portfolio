import React from "react";
import styles from "./style";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { urlFor } from "../client";
import { motion } from "framer-motion";

const Hero = ({ about }) => {
  return (
    <section
      id="home"
      className={`max-w-[1100px] m-auto flex md:flex-row flex-col-reverse md:px-10 md:py-24`}
    >
      <div className={`flex-1 ${styles.flexStart} flex-col`}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.15,
            ease: "easeIn",
            delay: 1,
          }}
          className="flex flex-row items-center py-[6px]"
        >
          <p className={`${styles.heading4}`}>Hello, I'm</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.15,
            ease: "easeIn",
            delay: 1.15,
          }}
          className="flex flex-row justify-between items-center w-full"
        >
          <h1 className="flex-1 font-poppins font-bold ss:text-[72px] text-[52px] text-white">
            <span className="text-dimWhite">{about.name}</span>
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.15,
            ease: "easeIn",
            delay: 1.3,
          }}
          className={`${styles.paragraph}`}
        >
          {about.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.15,
            ease: "easeIn",
            delay: 1.45,
          }}
          className="flex flex-row mt-4"
        >
          <a href={about.githubLink} target="_blank">
            <AiFillGithub className="fill-dimWhite/70 mr-5 text-[25px] hover:fill-primary" />
          </a>
          <a href={about.linkedinLink} target="_blank">
            <FaLinkedinIn className="fill-dimWhite/70 mr-5 text-[25px] hover:fill-primary" />
          </a>
          <a href={about.mail} target="_blank">
            <GrMail className="fill-dimWhite/70 mr-5 text-[25px] hover:fill-primary" />
          </a>
          <a href={about.instagramLink} target="_blank">
            <AiFillInstagram className="fill-dimWhite/70 mr-5 text-[25px] hover:fill-primary" />
          </a>
        </motion.div>
      </div>

      <div
        className={`flex-1 flex md:justify-end justify-center items-center relative mb-14 md:m-0`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 1,
            duration: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="rounded-full h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] overflow-hidden ring ring-dullGray hover:ring-primary"
        >
          <img
            src={urlFor(about.imgUrl).url()}
            alt="heroimg"
            className="max-w-[100%] min-w-[100%] max-h-[100%] min-h-[100%] aspect-square w-[100%] h-[100%] relative z-[1] rounded-[500px]"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 1.2 }}
          viewport={{ once: true }}
          className="absolute w-[75%] h-[75%] right-20 bottom-20 rounded-full bg-gradient-to-r from-primary to-transparent blur-[100px]"
        />
      </div>
    </section>
  );
};

export default Hero;
