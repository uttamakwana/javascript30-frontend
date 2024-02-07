// css
import "./projects.css";
// containers
import { ProjectCard } from "../../containers";
import { useEffect, useState } from "react";
// framer motion
import { motion } from "framer-motion";

const Projects = () => {
  const [btn, setBtn] = useState("all");
  const [headerHeight, setHeaderHeight] = useState("81");

  // calculating the header height to adjust the project-header top position
  useEffect(() => {
    const handleResize = () => {
      const header = document.querySelector(".main-header");
      if (header) {
        setHeaderHeight(header.clientHeight);
      }
    };

    // Call handleResize initially
    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <motion.section className="projects-section">
      <motion.div
        className="projects-header"
        style={{ top: `${headerHeight - 1}px` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h1 className="projects-heading font-semibold">Projects</h1>
        <div className="projects-categories-buttons mb-1 flex-wrap gap-1">
          <button
            className={btn === "all" ? "active" : ""}
            onClick={() => setBtn("all")}
          >
            All
          </button>
          <button
            className={btn === "basic" ? "active" : ""}
            onClick={() => setBtn("basic")}
          >
            Basic
          </button>
          <button
            className={btn === "intermediate" ? "active" : ""}
            onClick={() => setBtn("intermediate")}
          >
            Intermediate
          </button>
          <button
            className={btn === "advanced" ? "active" : ""}
            onClick={() => setBtn("advanced")}
          >
            Advanced
          </button>
        </div>
      </motion.div>
      <motion.div
        className="projects-grid grid"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </motion.div>
    </motion.section>
  );
};

export default Projects;
