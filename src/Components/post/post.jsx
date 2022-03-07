import "./post.css";
// import cat from "../../image/cat.jpg";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  // const PF = "https://muthu-blog-server-api.herokuapp.com/images/";

  console.log(post); //returns post details
  return (
    <div className="post" key={post._id}>
      {post.photo && <img src={post.photo} alt="post pic" />}
      <div className="post_info">
        <div className="post_categories">
          {post.categories.map((cate, index) => {
            return (
              <span key={index} className="post_cate">
                {cate}
              </span>
            );
          })}
        </div>
        <Link key={post._id} to={`/post/${post._id}`} className="link">
          <span className="post_title">{post.title}</span>
        </Link>
        <span className="time">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="post_desc">{post.desc}</p>
    </div>
  );
}
