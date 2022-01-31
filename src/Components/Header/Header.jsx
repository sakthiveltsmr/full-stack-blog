import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">BLOG APPLICATION</span>
      </div>
      <img
        className="headerImg"
        src="https://wallpapercave.com/wp/wp8975771.jpg"
        alt=""
      />
    </div>
  );
}
