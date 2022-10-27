import React from "react";
import './landing.css'
import { Link } from "react-router-dom";
import welcome from "../../assets/welcome.json";
import Lottie from "react-lottie";

const Landing = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: welcome,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="landing section__padding">
      <Lottie options={defaultOptions} width={500} />
      <Link to="/home">
        <button>Proceed To home</button>
      </Link>
    </div>
  );
};

export default Landing;
