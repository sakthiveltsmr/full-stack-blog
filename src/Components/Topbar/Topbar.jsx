import { Link } from "react-router-dom";
import React, { useContext } from "react";
import "./Topbar.css";
import Profile from "../../image/profilePic.png";

export default function Topbar() {
  // const { user, dispatch } = useContext();
  // console.log(user);
  const handleLogout = () => {
    // dispatch({ type: "LOGOUT" }); //it will return user,isfetching,error states
    window.location.reload("/login");
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              WRITE
            </Link>
          </li>
          <li className="topListItem"></li>
          <li className="topListItem" onClick={handleLogout}>
            {/* {user && "LOGOUT"} */} LOGOUT
          </li>
        </ul>
      </div>
      <div className="topRight">
        {/* {user ? (
          user.ProfilePic ? (
            <Link className="link" to="/settings">
              <img className="topImg" src={user.ProfilePic} alt="profile" />
            </Link>
          ) : ( */}
        <Link className="link" to="/settings">
          <img className="topImg" src={Profile} alt="profile" />
        </Link>
        {/* )
        ) : ( */}
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/login">
              LOGIN
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/register">
              REGISTER
            </Link>
          </li>
        </ul>
        {/* )} */}
      </div>
    </div>
  );
}
