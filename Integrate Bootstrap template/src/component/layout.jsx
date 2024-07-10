import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const layout = () => {
  return (
    <div>
      <div className="row m-0">
        <div className="col-lg-6 pt-5 ">
          <h2 className="pt-5">Hi,Hi,i'am Mary</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sed
            mollitia, vitae dolores saepe vero corporis fuga enim necessitatibus
            placeat ad earum numquam quisquam in dolor? Vitae officia sapiente
            unde?{" "}
          </p>
          <p>I make Youtube video and write blog</p>
          <button className="btn1">I'm available</button>
          <p className="iocns">
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaInstagram />
            </span>
            <span>
              <FaGithub />{" "}
            </span>
          </p>
        </div>
        <div className="col-lg-6 text-center">
          <img src="https://img.freepik.com/premium-photo/smiling-business-woman-team-website-view-waist-white-background_935410-1376.jpg?w=360" />
        </div>
      </div>
    </div>
  );
};

export default layout;
