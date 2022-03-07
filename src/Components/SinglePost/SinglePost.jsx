import React, { useContext, useEffect, useState } from "react";
import "./SinglePost.css";
// import PostImg from "../../image/cat.jpg";
import { Delete, Edit } from "@material-ui/icons";
import { useLocation } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
import { TailSpin } from "react-loader-spinner";

function SinglePost() {
  const [post, setPost] = useState({});
  const location = useLocation();
  const { user } = useContext(Context);

  //update states
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [desc, setDesc] = useState("");
  const [updatePost, setUpdatePost] = useState(false);

  const PF = "https://sakthi-blog-application.herokuapp.com/images/";

  // console.log(location.pathname.split("/")[2]);
  const postId = location.pathname.split("/")[2];

  //postId useEffect
  useEffect(() => {
    //getpost
    const getSinglePost = async () => {
      const res = await axios.get(
        `https://sakthi-blog-application.herokuapp.com/api/posts/${postId}`
      );
      console.log(res.data);
      setPost(res.data.post);
      setTitle(res.data.post.title);
      setDesc(res.data.post.desc);
      setLoading(false);
    };
    getSinglePost();
  }, [postId]);

  console.log(post.photo);
  // console.log(user);
  // console.log(post.username === user.username);

  //delete post
  const handleDelete = async () => {
    try {
      console.log("delete in process");
      console.log("post Id", postId);
      const res = await axios.delete(
        `https://sakthi-blog-application.herokuapp.com/api/posts/${post._id}`,
        { data: { username: user.username } }
      );
      console.log(res.data);

      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  //update post
  const handleUpdate = async () => {
    try {
      await axios.put(
        `https://sakthi-blog-application.herokuapp.com/api/posts/${post._id}`,
        {
          username: user.username,
          title,
          desc,
        }
      );
      setUpdatePost(false);
    } catch (error) {}
  };

  return (
    <div className="singlePost">
      {loading ? (
        <div className="d-flex justify-content-center m-5">
          <TailSpin type="TailSpin" color="#25283D" height={100} width={100} />
        </div>
      ) : (
        <div className="singlePostWrapper">
          {
            post.photo && (
              <img src={PF + post.photo} alt="" className="singlePostImg" />
            )
            // : (<img src={PostImg} alt="" className="singlePostImg" />)
          }

          {updatePost ? (
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
              className="singlePostTitle border"
            />
          ) : (
            <h1 className="singlePostTitle">
              {title}
              {user && user.username === post.username && (
                <div className="singlePostEdit">
                  <Edit color="primary" onClick={() => setUpdatePost(true)} />
                  <Delete style={{ color: "tomato" }} onClick={handleDelete} />
                </div>
              )}
            </h1>
          )}

          <div className="singlePostInfo">
            <span className="author">
              Author:
              <Link className="link" to={`/?user=${post.username}`}>
                <b>{post.username}</b>
              </Link>
            </span>
            <span className="date">
              {new Date(post.createdAt).toDateString()}
            </span>
          </div>
          {updatePost ? (
            <input
              type="text"
              className="singlePostDesc border"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          ) : (
            <p className="singlePostDesc">{post.desc}</p>
          )}
          {updatePost && (
            <button className="update" type="submit" onClick={handleUpdate}>
              Update
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default SinglePost;

// import { Link } from "react-router-dom";
// import "./SinglePost.css";

// export default function SinglePost() {
//   return (
//     <div className="singlePost">
//       <div className="singlePostWrapper">
//         <img
//           className="singlePostImg"
//           src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//           alt=""
//         />
//         <h1 className="singlePostTitle">
//           Lorem ipsum dolor
//           <div className="singlePostEdit">
//             <i className="singlePostIcon far fa-edit"></i>
//             <i className="singlePostIcon far fa-trash-alt"></i>
//           </div>
//         </h1>
//         <div className="singlePostInfo">
//           <span>
//             Author:
//             <b className="singlePostAuthor">
//               <Link className="link" to="/posts?username=Sakthi">
//                 Sakthivel
//               </Link>
//             </b>
//           </span>
//           <span>1 day ago</span>
//         </div>
//         <p className="singlePostDesc">
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
//           quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
//           Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
//           eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
//           error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
//           impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
//           odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
//           elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
//           iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
//           a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
//           elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
//           iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
//           a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
//           elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
//           iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
//           a odit modi eos!
//           <br />
//           <br />
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
//           quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
//           Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
//           eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
//           error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
//           impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
//           odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
//           elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
//           iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
//           a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
//         </p>
//       </div>
//     </div>
//   );
// }
