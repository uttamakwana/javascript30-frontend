// css
import "./projects.css";
// containers
import { ProjectCard, SkeletonCard } from "../../containers";
import { useEffect, useState } from "react";
// projects data
import { projectsData } from "../../data/projects";
import { FilterIcon, CloseIcon } from "../../constants/icons";

const Projects = () => {
  const [btn, setBtn] = useState("all");
  const [headerHeight, setHeaderHeight] = useState("81");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(false);

  // calculating the header height to adjust the project-header top position
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    if (btn === "all") {
      setProjects(projectsData);
    } else {
      const filteredProjects = projectsData.filter(
        (project) => project.level === btn
      );
      setProjects(filteredProjects);
    }
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
  }, [btn]); // Empty dependency array ensures the effect runs only once after the initial render

  const handleSearch = (e) => {
    if (!e.target.value) {
      if (btn === "all") {
        setProjects(projectsData);
      } else {
        const filteredProjects = projectsData.filter(
          (project) => project.level === btn
        );
        setProjects(filteredProjects);
      }
    } else {
      const copyProjects = projects;
      const filteredProjects = copyProjects.filter(
        (project) =>
          project.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          project.tech.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setProjects(filteredProjects);
    }
  };
  return (
    <section className="projects-section">
      <div className="projects-header" style={{ top: `${headerHeight - 1}px` }}>
        <div className="projects-header-inside">
          <h1 className="projects-heading font-semibold flex-between">
            <span>Projects</span>
            <FilterIcon
              className="filter-icon"
              onClick={() => setFilter(!filter)}
            />
          </h1>
          <div className="projects-search mb-1">
            <input
              type="search"
              name="project-search"
              id="project-search"
              placeholder="Search for projects"
              onChange={handleSearch}
            />
          </div>
          <div
            className={`projects-categories-buttons mb-1 flex-wrap gap-1 ${
              filter ? "active" : ""
            }`}
          >
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
            <CloseIcon
              className="filter-close-icon"
              onClick={() => setFilter(false)}
            />
          </div>
        </div>
      </div>
      <div className="projects-grid grid">
        {projects &&
          projects.map((project) => {
            if (loading) {
              return <SkeletonCard key={project._id} />;
            } else {
              return (
                <ProjectCard
                  key={project._id}
                  project={project}
                  loading={loading}
                />
              );
            }
          })}
      </div>
    </section>
  );
};

export default Projects;
