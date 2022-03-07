import React, { useEffect, useState } from "react";
import "./About.css";
import Profile from "../../image/profile.jpg";
import { Facebook, GitHub, Mail, WhatsApp } from "@material-ui/icons";
import axios from "axios";
import { Link } from "react-router-dom";

function About() {
  const [cates, setCates] = useState([]);
  // get Category
  const getCategory = async () => {
    const res = await axios.get(
      "https://sakthi-blog-application.herokuapp.com/api/categories"
    );
    // console.log(res.data.details);
    setCates(res.data.postCategory);
  };

  useEffect(() => {
    getCategory();
  }, []);
  return (
    <div className="about">
      <div className="about_item">
        <span className="about_title">ABOUT ME</span>
        <img src={Profile} alt="profile" />
        <p className="about_me">
          I'm Sakthivel from Namakkal. I did my BE CSE at the Government College
          of Technology Coimbatore (2020), I'm looking for a web developer role.
          As a developer, I could give my full effort work to your reputed
          company. Thank You...!
        </p>
      </div>
      <div className="aboutItem">
        <span className="about_title">KEY SKILLS</span>
        <ul className="aboutList">
          <li className="aboutListItem">JAVASCRIPT</li>
          <li className="aboutListItem">REACT JS</li>
          <li className="aboutListItem">NODE JS</li>
          <li className="aboutListItem">EXPRESS</li>
          <li className="aboutListItem">MONGO DB</li>
          <li className="aboutListItem">HTML</li>
          <li className="aboutListItem">CSS</li>
          {/* <li className="sidebarListItem">SASS</li> */}
          <li className="aboutListItem">MATERIAL UI</li>
        </ul>

        <span className="about_title">CATEGORIES</span>
        {/* <ul className="sidebarList">
          {cates.map((cate) => (
            <Link key={cate._id} className="link" to={`/?cat=${cate.name}`}>
              <li className="sidebarListItem">{cate.name}</li>
            </Link>
          ))} */}
        {/* </ul> */}
      </div>
      <div className="aboutItem">
        <span className="about_title">Follow Me</span>
        <div className="aboutSocial">
          <Facebook className="facebook" />

          <WhatsApp className="whatsapp" />
          <GitHub className="github" />
          <Mail className="mail" />
        </div>
      </div>
    </div>
  );
}

export default About;
