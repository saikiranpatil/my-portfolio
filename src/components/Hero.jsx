import React from "react";
import styles from "./style";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { urlFor } from "../client";

const Hero = ({ about }) => {
  return (
    <section
      id="home"
      className={`max-w-[1100px] m-auto flex md:flex-row flex-col-reverse md:px-10 md:py-24`}
    >
      <div className={`flex-1 ${styles.flexStart} flex-col`}>
        <div className="flex flex-row items-center py-[6px]">
          <p className={`${styles.heading4}`}>Hello, I'm</p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-bold ss:text-[72px] text-[52px] text-white">
            <span className="text-dimWhite">{about.name}</span>
          </h1>
        </div>
        <p className={`${styles.paragraph}`}>{about.description}</p>
        <div className="flex flex-row mt-4">
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
        </div>
      </div>

      <div
        className={`flex-1 flex md:justify-end justify-center items-center relative mb-14 md:m-0`}
      >
        <div className="rounded-full h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] overflow-hidden ring ring-dullGray hover:ring-primary">
          <img
            src={urlFor(about.imgUrl).url()}
            alt="heroimg"
            className="max-w-[100%] min-w-[100%] max-h-[100%] min-h-[100%] aspect-square w-[100%] h-[100%] relative z-[3] rounded-[500px]"
          />
        </div>
        <div className="absolute z-[2] w-[75%] h-[75%] right-20 bottom-20 rounded-full bg-gradient-to-r from-srimary to-transparent blur-[100px]" />
      </div>
    </section>
  );
};

export default Hero;
