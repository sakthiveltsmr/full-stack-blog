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
        src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Desktop-autumn-hd-wallpaper-3D.jpg"
        alt=""
      />
    </div>
  );
}
