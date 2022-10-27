import React, { useEffect, useState } from "react";
import axios from "axios";
import "./users.css";
import users from "../../assets/users.json";
import Lottie from "react-lottie";
import Navbar from "../../components/Navigation/Navbar";
import User from "../../components/user/User";

const Users = () => {
  const [details, setDetails] = useState([]);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: users,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const getData = async () => {
    const { data } = await axios.get("https://randomuser.me/api/?results=6");
    console.log(data.results);

    const details = data.results;
    setDetails(details);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="users section__padding">
        <Lottie options={defaultOptions} width={200} height={200} />

        <div className="users-list">
          {details.map((items) => {
            return <User items={items} key={items.id}/>;
          })}
        </div>
      </div>
    </>
  );
};

export default Users;
