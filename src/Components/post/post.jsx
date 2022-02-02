// import { Link } from "react-router-dom";
// import "./post.css";

// export default function Post({ img }) {
//   return (
//     <div className="post">
//       <img className="postImg" src={img} alt="" />
//       <div className="postInfo">
//         <div className="postCats">
//           <span className="postCat">
//             <Link className="link" to="/posts?cat=Music">
//               Music
//             </Link>
//           </span>
//           <span className="postCat">
//             <Link className="link" to="/posts?cat=Music">
//               Life
//             </Link>
//           </span>
//         </div>
//         <span className="postTitle">
//           <Link to="/post/abc" className="link">
//             Brihadeshwara Temple
//           </Link>
//         </span>
//         <hr />
//         <span className="postDate">1 hour ago</span>
//       </div>
//       <p className="postDesc">
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
//         officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
//         fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
//         atque, exercitationem quibusdam, reiciendis odio laboriosam?
//       </p>
//     </div>
//   );
// }
// import react from "react";
import "./post.css";
// import cat from "../../image/cat.jpg";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  // const PF = "https://muthu-blog-server-api.herokuapp.com/images/";

  console.log(post); //returns post details
  return (
    <div className="post" key={post._id}>
      {/* <img src={post.photo} alt="post pic" />
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
      <p className="post_desc">{post.desc}</p> */}
    </div>
  );
}
