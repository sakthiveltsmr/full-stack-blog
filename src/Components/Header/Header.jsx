import React from "react";
import "./Header.css";
import bg from "../../image/home.jpg.jpg";

function Header() {
  return (
    <div className="header">
      <div className="header_titles">
        <span className="header_title1">MERN-STACK APP</span>
        <span className="header_title2">BLOG APPLICATION</span>
      </div>
      <img src={bg} alt="backgroud" />
    </div>
  );
}

export default Header;
