// import React, { useEffect, useState } from "react";
import "./About.css";
import Profile from "../../image/profile.jpg";
import { Facebook, GitHub, Mail, WhatsApp } from "@material-ui/icons";
// import axios from "axios";
// import { Link } from "react-router-dom";

function About() {
  //   const [cates, setCates] = useState([]);
  //get Category
  //   const getCategory = async () => {
  //     const res = await axios.get(
  //       "https://muthu-blog-server-api.herokuapp.com/api/categories"
  //     );
  //     // console.log(res.data.details);
  //     setCates(res.data.postCategory);
  //   };

  //   useEffect(() => {
  //     getCategory();
  //   }, []);
  return (
    <div className="sidebar">
      <div className="sidebar_item">
        <span className="sidebar_title">ABOUT ME</span>
        <img src={Profile} alt="profile" />
        <p className="about_me">
          I'm Sakthivel from Namakkal. I did my BE CSE at the Government College
          of Technology Coimbatore (2020), I'm looking for a web developer role.
          As a developer, I could give my full effort work to your reputed
          company. Thank You...!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebar_title">KEY SKILLS</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">JAVASCRIPT</li>
          <li className="sidebarListItem">REACT JS</li>
          {/* <li className="sidebarListItem">NODE JS</li> */}
          {/* <li className="sidebarListItem">EXPRESS</li> */}
          <li className="sidebarListItem">MONGO DB</li>
          <li className="sidebarListItem">HTML</li>
          <li className="sidebarListItem">CSS</li>
          {/* <li className="sidebarListItem">SASS</li> */}
          <li className="sidebarListItem">MATERIAL UI</li>
        </ul>

        {/* <span className="sidebar_title">CATEGORIES</span>
        <ul className="sidebarList">
          {cates.map((cate) => (
            <Link key={cate._id} className="link" to={`/?cat=${cate.name}`}>
              <li className="sidebarListItem">{cate.name}</li>
            </Link>
          ))}
        </ul> */}
      </div>
      <div className="sidebarItem">
        <span className="sidebar_title">Follow Me</span>
        <div className="sidebarSocial">
          <Facebook className="facebook" />

          <WhatsApp className="whatsapp" />
          <GitHub />
          <Mail className="mail" />
        </div>
      </div>
    </div>
  );
}

export default About;
