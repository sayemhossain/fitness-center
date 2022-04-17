import React from "react";
import "./About.css";
import photo1 from "../../../Images/sayem-removebg-preview.png";

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-7 about-text mt-4">
          <h4 className="text-uppercase">Shayem Hossain</h4>
          <h1>
            I'm a Creative{" "}
            <span style={{ color: "#ff7722" }}>Web Developer</span>
          </h1>
          <p>
            I am Sayem Hossain and I want to be a master of Web developing. Now
            frontend is my main target and React is my crash. After completing
            frontend part I will move on backend also.
          </p>
          <p>
            Now I am learning developing from Programming hero and after
            completing this is course I will try to get a job as a frontend web
            Developer in any IT company.
          </p>
          <div>
            <button className="about-btn px-3 text-white py-2 rounded-pill">
              Download cv
            </button>
          </div>
        </div>
        <div className="col-lg-5">
          <img className="img-fluid" src={photo1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
