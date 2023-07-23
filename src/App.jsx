import "./App.css";
import React, { useEffect, useState } from "react";
import { client } from "./client";
import styles from "./components/style";
import {
  Navbar,
  Hero,
  SkillsExperiences,
  Projects,
  Contact,
  Footer,
} from "./components"

function App() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setAbout(data);
    });
  }, []);

  if (about.length == 0) return;

  return (
    <div className="w-full bg-darkColor overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar resumeLink={about[0].resumeLink} />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero about={about[0]} />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <SkillsExperiences />
          <Projects />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
