import { Link } from "react-router-dom";
// css
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero-section flex-center">
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
    </section>
  );
};

export default Hero;
