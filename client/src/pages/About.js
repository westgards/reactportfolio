import "./About.css";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div className="about-container">
      <div className="hero-section">
        <h1>Nicole Westgard</h1>
        <img src="./images/nw-avatar.png" alt="It's a me!"></img>
      </div>
      <div className="brand-statement">
        <h2>Welcome to my Portfolio! I am a Junior Web Developer + Cloud Engineer with a Bachelor’s in
        Computer Science.</h2>
        <p>I have been creating</p>
      </div>
      <div className="buttons-container">
        <NavLink className="button" to="projects">
          My projects
        </NavLink>
        <NavLink className="button" to="contact">
          Contact me
        </NavLink>
      </div>
    </div>
  );
}

export default About;