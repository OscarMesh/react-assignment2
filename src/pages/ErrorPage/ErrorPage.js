import React from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";
import error from "../../assets/404.json";
import Lottie from "react-lottie";

const ErrorPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: error,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="error-page section__padding">
      <Lottie options={defaultOptions} />
      <Link to="/">
        <button>Home Page</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
