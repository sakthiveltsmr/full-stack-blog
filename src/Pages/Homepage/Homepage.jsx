import { useLocation } from "react-router";
import axios from "axios";
import Header from "../../Components/Header/Header";
import "./Homepage.css";
import Posts from "../../Components/posts/posts";
import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
export default function Homepage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { search } = useLocation();
  const fetchPost = async () => {
    setLoading(true);
    const res = await axios.get(
      "https://sakthi-blog-application.herokuapp.com/api/post"
    );
    console.log(res.data.posts);
    setPosts(res.data.posts);
    setLoading(false);
  };
  // useEffect(() => {
  //   console.log("post mounted in home");
  //   fetchPost();
  // }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
      </div>
    </>
  );
}
