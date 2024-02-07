import { Link } from "react-router-dom";
// css
import "./hero.css";
// motion
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="hero-section flex-center"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <div className="hero-conatiner text-center  flex-col gap-1">
        <h1 className="hero-heading font-extrabold">
          Welcome to the JavaScript30
        </h1>
        <p className="hero-description">
          Here I have concluded all the basic, intermediate and advanced
          projects necessary to master JavaScript.
        </p>
        <button className="hero-button font-medium">
          <Link to="/projects">Explore Projects!</Link>
        </button>
      </div>
      <div className="hero-gradient"></div>
    </motion.section>
  );
};

export default Hero;
