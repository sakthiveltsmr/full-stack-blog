import { useLocation } from "react-router";
import axios from "axios";
import Header from "../../Components/Header/Header";
import "./Homepage.css";
import Posts from "../../Components/posts/posts";
import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
export default function Homepage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { search } = useLocation();
  const fetchPost = async () => {
    setLoading(true);
    const res = await axios.get(
      "https://sakthi-blog-application.herokuapp.com/api/posts"
    );
    console.log(res.data.posts);
    setPosts(res.data.posts);
    setLoading(false);
  };
  useEffect(() => {
    console.log("post mounted in home");
    fetchPost();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        {loading ? (
          <div className="d-flex justify-content-center m-5">
            <TailSpin
              type="TailSpin"
              color="#25283D"
              height={100}
              width={100}
            />
          </div>
        ) : (
          <Posts posts={posts} />
        )}

        {/* <Posts posts={posts} /> */}
      </div>
    </>
  );
}
