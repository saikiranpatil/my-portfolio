import React, { useState } from "react";
import { navLinks } from "../constants";
import { motion } from "framer-motion";
import { HiMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

const Navbar = ({ resumeLink }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`w-full flex justify-between items-center navbar h-[100px]`}
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.15,
          ease: "easeIn",
        }}
        viewport={{ once: true }}
        className="rounded-[3px] border-[2px] border-primary/[0.5] flex justify-center items-center"
      >
        <span className="cursor-pointer flex flex-1 title-font font-semibold font-kanit text-2xl text-white px-1 bg-primary/[0.1] hover:bg-primary/20 rounded-[3px]">
          S
          <div className="ml-[2px]" />P
        </span>
      </motion.div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.15 + 0.15,
              duration: 0.15,
              ease: "easeIn",
            }}
            key={nav.id}
            className={`font-poppins
          font-normal
          cursor-pointer
          text-[16px]
          ml-10
          text-dimWhite/90 hover:text-primary`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </motion.li>
        ))}
        <motion.li
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: navLinks.length * 0.15 + 0.15,
            duration: 0.15,
            ease: "easeIn",
          }}
        >
          <a href={resumeLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-primary/[0.1] hover:bg-primary/20 ml-10 text-dimWhite/90 font-normal py-2 px-4 border-[2px] border-primary/[0.1] rounded">
              Resume
            </button>
          </a>
        </motion.li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 0.9 }}
          viewport={{ once: true }}
          transition={{
            delay: navLinks.length * 0.15 + 0.15,
            duration: 0.15,
            ease: "easeIn",
          }}
          onClick={() => setToggle((prev) => !prev)}
        >
          {toggle ? <CgClose size={34} /> : <HiMenuAlt3 size={34} />}
        </motion.div>

        <div
          className={`${toggle ? "flex" : "hidden"} p-6 bg-solidBlue
      absolute top-20 right-0 mx-4 my-2
      min-w-[140px] rounded-xl sidebar z-[4]`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins
              font-normal
              cursor-pointer
              text-[16px]
              ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}
              font-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
