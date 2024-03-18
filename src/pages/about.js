// About.jsx
import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import mountain from "../assets/mountain.svg";

function About() {
  return (
    <div className="Accueil">
      <BackgroundImage image={mountain} />
    </div>
  );
}

export default About;
