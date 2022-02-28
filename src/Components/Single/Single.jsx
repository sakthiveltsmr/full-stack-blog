import React from "react";
import About from "../About/About";

import SinglePost from "../SinglePost/SinglePost";
import "./Single.css";

function Single() {
  return (
    <div className="single">
      <SinglePost />
      <About />
    </div>
  );
}

export default Single;
