import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./pagination.css";

const Pagination = ({ detailsPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];
  const [isActive, setIsActive] = useState(true);

  for (let i = 1; i <= Math.ceil(totalUsers / detailsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => {
              setIsActive(isActive);
            }}
            className={!isActive ? "active" : "page-item"}
          >
            <a
              onClick={() => {
                paginate(number);
                setIsActive(isActive);
              }}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
