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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            animi fugiat aut numquam, dolore laborum voluptatem, earum corrupti
            obcaecati aperiam nihil aliquid, accusantium quod deserunt vitae
            suscipit voluptatibus totam culpa.{" "}
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
