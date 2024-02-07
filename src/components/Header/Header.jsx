// icons
import { Link } from "react-router-dom";
import {
  LinkedinIcon,
  FrontendMentorIcon,
  GithubIcon,
} from "../../constants/icons.js";
// css
import "./header.css";
// motion
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="main-header flex-between pb-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="main-header-logo clr-text font-bold fs-2">
        <Link to="/">JavaScript30</Link>
      </h1>
      <ul className="main-header-list flex">
        <li className="main-header-list-item">
          <a
            href="https://linkedin.com/in/uttamakwana"
            target="_blank"
            rel="noreferrer"
            className="main-header-list-item-link"
          >
            <LinkedinIcon />
          </a>
        </li>
        <li className="main-header-list-item">
          <a
            href="https://www.frontendmentor.io/profile/uttamakwana"
            target="_blank"
            rel="noreferrer"
            className="main-header-list-item-link"
          >
            <FrontendMentorIcon />
          </a>
        </li>
        <li className="main-header-list-item">
          <a
            href="https://github.com/uttamakwana"
            target="_blank"
            rel="noreferrer"
            className="main-header-list-item-link"
          >
            <GithubIcon />
          </a>
        </li>
      </ul>
    </motion.header>
  );
};

export default Header;
