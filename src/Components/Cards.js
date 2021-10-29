import React from "react";
import "../styles.css";

const Users = ({ loading, users }) => {
  return loading ? (
    <div id="main">
      <img
        src="https://cdn.dribbble.com/users/2208826/screenshots/6286951/guanxian.gif"
        alt="Loading"
        className="LOADING"
      />
    </div>
  ) : (
    <div id="main">
      {users.map((user) => (
        <div className="project column3">
          {console.log(user)}
          <div className="profile">
            <img src={user.avatar} alt={user.avatar} className="avatar"></img>
            <h1 className="name">
              {user.first_name} {user.last_name}
            </h1>
            <p className="email">{user.email}</p>
            <p className="id">USER ID: {user.id}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
