import React from "react";
import "./NavBar.css";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

const navData = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    cName: "link",
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    cName: "link",
  },
  {
    id: 3,
    title: "Users",
    path: "/users",
    cName: "link",
  },
];

const Navbar = () => {
  return (
    <div className="navContainer">
    <div className="nav section__margin">
      <span>
        <Icon icon="logos:google-developers" width={45} />
        <h2>OscarMesh</h2>
      </span>
      <div className="nav-links">
        <ul>
          <li>
            {navData.map((item) => {
              return (
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? " #00fff6" : " ",
                  })}
                  key={item.id}
                  className={item.cName}
                  to={item.path}
                >
                  <span> {item.title} </span>
                </NavLink>
              );
            })}
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
