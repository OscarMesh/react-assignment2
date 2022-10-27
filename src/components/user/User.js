import React from "react";
import "./user.css";
const User = ({ items }) => {
  return (
    <div className="user" key={items.id}>
      <div className="user-img">
        <img src={items.picture?.large} alt="ProfileImage" />
      </div>

      <div className="info">
        <p>
          {items.name?.title}. {items.name?.first}
        </p>
        <p>{items.email}</p>
        <p>{items.location?.city}</p>
        <p>{items.phone}</p>
      </div>
    </div>
  );
};

export default User;
