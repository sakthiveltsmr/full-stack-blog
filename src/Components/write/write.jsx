// import "./write.css";

// const Write = () => {
//   return (
//     <div className="write">
//       <img
//         className="writeImg"
//         src="https://images.unsplash.com/photo-1544084944-15269ec7b5a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjBzY2VuZXJ5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
//         alt=""
//       />
//       <form action="#" className="writeForm">
//         <div className="writeFormGroup">
//           <label htmlFor="fileInput">
//             <i className="writeIcon fas fa-plus"></i>
//           </label>
//           <input type="file" id="fileInput" style={{ display: "none" }} />
//           <input
//             type="text"
//             placeholder="Title"
//             className="writeInput"
//             autoFocus={true}
//           />
//         </div>
//         <div className="writeFormGroup">
//           <textarea
//             placeholder="Tell your story..."
//             type="text"
//             className="writeInput writeText"
//           ></textarea>
//         </div>
//         <button className="writesubmit">Publish</button>
//       </form>
//     </div>
//   );
// };

// export default Write;
import { Add } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import "./Write.css";
// import postImg from "../../image/bg.jpg";
import axios from "axios";
import { Context } from "../../Context/Context";
import Loader from "react-loader-spinner";

function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [photo,setPhoto]=useState("");

  const { user } = useContext(Context);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("in post submit");
    //new post
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    //   export const upload=(token,file)=>{
    //     const formData=new FormData();
    //     formData.append('somefile',file);
    //    return axios.post(`${BASE_URL}/upload`,formData,
    //     {
    //         headers:{
    //             authorization:token
    //         }
    //     }
    //     ).then((res)=>res.data).catch((error)=>(error.response.data));
    // }
    if (file) {
      console.log(file);
      const data = new FormData();
      // const filename = Date.now() + file.name;
      // console.log(filename);
      // data.append("name", filename);
      data.append("file", file);
      newPost.photo = file.name;

      try {
        const res = await axios.post(
          "https://sakthi-blog-application.herokuapp.com/api/upload",
          data
        );
        console.log(res.data);
      } catch (error) {
        console.log("error in image:", error);
      }
    }
    try {
      setLoading(true);
      const res = await axios.post(
        "https://sakthi-blog-application.herokuapp.com/api/posts",
        newPost
      );
      console.log(res.data);
      // console.log(res.data);
      setLoading(false);
      window.location.replace(`post/${res.data.post._id}`);
    } catch (error) {
      setLoading(false);
      console.log("error in new post", error.message);
    }
  };

  return (
    <div className="write">
      {file && (
        <img src={URL.createObjectURL(file)} alt="" className="writeImg" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <Add />
          </label>
          <input
            type="file"
            className="fileDisplay"
            id="fileInput"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        {loading ? (
          <div className="d-flex justify-content-center submit m-5">
            <Loader type="Bars" color="#25283D" height={50} width={50} />
          </div>
        ) : (
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        )}
      </form>
    </div>
  );
}

export default Write;
