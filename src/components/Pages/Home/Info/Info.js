import React from "react";
import infoImg from "../../../../Images/info/infoImg.jpg";
import "./Info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const Info = () => {
  return (
    <div className="container">
      <div className="pb-5">
        <h2 className="text-center fw-bold text-uppercase ">
          Our <span style={{ color: "#ff7722" }}>Story</span>
        </h2>
        <hr className="w-50 mx-auto" />
      </div>
      <div className="row px-3">
        <div className="col-lg-7 info-text">
          <div>
            <h4 className="common-color">Welcome To</h4>
            <h1 className=" mb-3">FITNESS PROGRAMME</h1>
          </div>
          <div>
            <p>
              A gym is a building or room that's meant for playing indoor sports
              or exercising. You might go to the gym to pump iron, or you might
              go to the gym to see who else is pumping iron.
            </p>
            <p>
              The word gym is a shortened form of gymnasium, originally a Latin
              word meaning "school for gymnastics," from the Greek gymnasion,
              "public place where exercises are practiced." The preferred way to
              dress at a gym these days is in shorts or sweatpants, but back in
              Ancient Greece, men commonly exercised naked — hence the root
              gymnazein, "to train naked."
            </p>
            <button className="info-btn px-5 py-2 rounded-pill  text-white fw-bold text-uppercase mt-2 mb-4">
              join up <FontAwesomeIcon icon={faCircleArrowRight} />
            </button>
          </div>
        </div>
        <div className="col-lg-5">
          <img className="img-fluid" src={infoImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Info;
