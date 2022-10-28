import React from "react";
import "./Home.css";
import Anime from "../../assets/lottie.json";
import Lottie from "react-lottie";
import Navbar from "../../components/Navigation/Navbar";

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Anime,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Navbar />
      <div className="home section__margin">
        <div className="info-home">
          <Lottie options={defaultOptions} />

          <h3>Altschool-FrontEnd Engineering Assignment-2</h3>
          <p>
            “Any fool can write code that a computer can understand. Good
            programmers write code that humans can understand.” – Martin Fowler
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
