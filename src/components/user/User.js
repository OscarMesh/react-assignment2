import React from "react";
import "./user.css";
const User = ({ details, loading }) => {
  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <>
        {details.map((item) => {
          return (
            <div className="user" key={item.id}>
              <div className="user-img">
                <img src={item.picture?.large} alt="ProfileImage" />
              </div>

              <div className="info">
                <p>
                  {item.name?.title}. {item.name?.first}
                </p>
                <p>{item.email}</p>
                <p>{item.location?.city}</p>
                <p>{item.phone}</p>
              </div>
            </div>
          );
        })}
      </>
    </>
  );
};

export default User;
