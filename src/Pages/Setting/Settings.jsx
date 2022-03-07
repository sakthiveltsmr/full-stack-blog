// import "./settings.css";

// export default function Settings() {
//   return (
//     <div className="settings">
//       <div className="settingsWrapper">
//         <div className="settingsTitle">
//           <span className="settingsTitleUpdate">Update Your Account</span>
//         </div>
//         <form className="settingsForm">
//           <label>Profile Picture</label>
//           <div className="settingsPP">
//             <img
//               src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//               alt=""
//             />
//             <label htmlFor="fileInput">
//               <i className="settingsPPIcon far fa-user-circle"></i>{" "}
//             </label>
//             <input
//               id="fileInput"
//               type="file"
//               style={{ display: "none" }}
//               className="settingsPPInput"
//             />
//           </div>
//           <label>Username</label>
//           <input type="text" placeholder="Sakthi" name="name" />
//           <label>Email</label>
//           <input type="email" placeholder="sakthi@gmail.com" name="email" />
//           <label>Password</label>
//           <input type="password" placeholder="Password" name="password" />
//           <button className="settingsSubmitButton" type="submit">
//             Update
//           </button>
//           {""}
//           <div className="settingsTitle">
//             <span className="settingsTitleDelete">Delete Account</span>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
import React, { useContext, useState } from "react";
import About from "../../Components/About/About";
import "./settings.css";
import profile from "../../image/profilePic.png";
import { AccountCircle } from "@material-ui/icons";
import axios from "axios";
import { Context } from "../../Context/Context";

function Settings() {
  const { user, dispatch } = useContext(Context);

  const profPic = "https://sakthi-blog-application.herokuapp.com/images/";
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  //submit updated data
  const handleSubmit = async (e) => {
    e.preventDefault();
    //update start action
    dispatch({ type: "UPDATE_START" });

    const updatedUser = {
      userId: user._id,
      email,
      password,
    };
    if (file) {
      //initially empty object
      const data = new FormData();
      //name combined with timing strings
      const filename = Date.now() + file.name;
      //add key values to data object
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename; //add new user photo

      try {
        //image uploaded with new image,filename
        await axios.post(
          `https://sakthi-blog-application.herokuapp.com/api/upload/`,
          data
        );
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const res = await axios.put(
        `https://sakthi-blog-application.herokuapp.com/api/users/${user._id}`,
        updatedUser
      );
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data.updateUser });
      console.log(res.data);
    } catch (error) {
      dispatch({ type: "UPDATE_FAILURE" });
      console.log(error);
    }
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdate">Update Your Account</span>
          <span className="settingsDelete">Delete Your Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={
                file
                  ? file
                    ? URL.createObjectURL(file)
                    : profPic + user.profilePic
                  : profile
              }
              alt="profile"
              className="SettingsProfile"
            />
            <label htmlFor="fileInput">
              <AccountCircle className="settingsPPIcon" />
            </label>
            <input
              type="file"
              id="fileInput"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
          </div>
          <label>User Name</label>
          <input
            type="text"
            placeholder={user.username}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {success && (
            <h3 className="success">Profile updated successfully...</h3>
          )}
        </form>
      </div>
      <About />
    </div>
  );
}

export default Settings;
