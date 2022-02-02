import { useLocation } from "react-router";
import Header from "../../Components/Header/Header";
import "./Homepage.css";
import Posts from "../../Components/posts/posts";
import React from "react";
export default function Homepage() {
  const [posts, setPosts] = React.useState([]);

  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
      </div>
    </>
  );
}
