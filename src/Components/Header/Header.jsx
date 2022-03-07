import React from "react";
import "./Header.css";
import bg from "../../image/home.jpg";

function Header() {
  return (
    <div className="header">
      <div className="header_titles">
        <span className="header_title1">MERN-STACK APP</span>
        <span className="header_title2">BLOG APPLICATION</span>
      </div>
      <img src={bg} alt="backgroud" />
      {/* <img
        src="https://miro.medium.com/max/1838/0*KB3fdpGT_T4oTd7b"
        alt="backgroud"
      /> */}
    </div>
  );
}

export default Header;
