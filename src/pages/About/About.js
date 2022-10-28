import React from "react";
import Navbar from "../../components/Navigation/Navbar";

import Lottie from "react-lottie";
import about from "../../assets/about.json";
import "./About.css";

const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: about,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Navbar />
      <div className="about section__padding">
        <Lottie options={defaultOptions}/>
        <div className="about-info">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quia
            debitis at delectus assumenda accusantium dicta tempore tempora
            nesciunt aliquid, alias dignissimos! Corrupti sequi natus, tempora
            esse sint numquam provident.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
