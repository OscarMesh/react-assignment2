import React, { useEffect, useState } from "react";
import axios from "axios";
import "./users.css";
import users from "../../assets/users.json";
import Lottie from "react-lottie";
import Navbar from "../../components/Navigation/Navbar";
import User from "../../components/user/User";
import Pagination from "../../components/Pagination/Pagination";

const Users = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [detailsPerPage] = useState(6);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: users,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const { data } = await axios.get("https://randomuser.me/api/?results=24");
      console.log(data.results);
      const details = data.results;
      setDetails(details);
      setLoading(false);
    };

    getData();
  }, []);

  // Get current posts
  const indexOfLastUser = currentPage * detailsPerPage;
  const indexOfFirstUser = indexOfLastUser - detailsPerPage;
  const currentUsers = details.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <Navbar />
      <div className="users section__padding">
        <Lottie options={defaultOptions} width={200} height={200} />
        <div className="users-list">
          <User details={currentUsers} loading={loading} />
        </div>
        <Pagination
          detailsPerPage={detailsPerPage}
          totalUsers={details.length}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default Users;
