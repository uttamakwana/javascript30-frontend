/* eslint-disable react/prop-types */
import "./project-card.css";
import { GithubIcon, LinkIcon } from "../../constants/icons.js";

const ProjectCard = ({ project }) => {
  const handleMouseEnter = () => {
    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card) => card.classList.add("opaque"));
  };

  const handleMouseLeave = () => {
    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card) => card.classList.remove("opaque"));
  };

  return (
    <div
      className="project-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={project.image} alt="project-image" loading="lazy" />
      <div className="project-card-content flex-col gap-4">
        <p className="font-medium fs-18">{project.name}</p>
        <p className="font-regular fs-1">{project.tech}</p>
      </div>
      <div className="project-card-buttons">
        <a
          href={project.link}
          target="_blank"
          className="flex-center"
          rel="noreferrer"
        >
          Github Link <GithubIcon />
        </a>
        <a
          href={project.link}
          target="_blank"
          className="flex-center"
          rel="noreferrer"
        >
          Visit <LinkIcon />
        </a>
      </div>
      <p className="project-number">{project.projectNumber}</p>
    </div>
  );
};

export default ProjectCard;
