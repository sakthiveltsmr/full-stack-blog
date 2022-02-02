import React from "react";
import Post from "../post/post";
import PostHome from "../postHome/postHome";
import "./posts.css";

function Posts({ posts }) {
  console.log(posts);
  return (
    <div className="posts">
      <PostHome />
      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
    </div>
  );
}

export default Posts;
