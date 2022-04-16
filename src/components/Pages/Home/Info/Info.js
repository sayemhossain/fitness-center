import React from "react";
import infoImg from "../../../../Images/info/infoImg.jpg";
import "./Info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const Info = () => {
  return (
    <div className="container mt-5">
      <div className="row  ">
        <div className="col-lg-7 info-text">
          <div>
            <h4 className="common-color">Welcome To</h4>
            <h1 className="fw-bold mb-3">FITNESS PROGRAMME</h1>
          </div>
          <div>
            <p className="fw-bold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              molestias possimus nisi ex in et doloremque delectus sed ut
              soluta!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
              erat a diam rutrum laoreet. Cras vitae fringilla turpis. In
              laoreet nunc vel lacinia luctus. Nullam suscipit volutpat magna,
              vel tempus mauris auctor non. Duis nec orci egestas, hendrerit
              purus non, egestas diam. Donec viverra arcu quam, vel aliquam
              libero sagittis ut. Aenean non mauris vel nisl pulvinar malesuada
              ut non dui. Praesent ante nisi, varius vitae tincidunt rutrum,
              suscipit id mauris. Nunc et porta quam, et porttitor lorem. In
              sagittis nisl non quam varius, iaculis scelerisque urna bibendum.
            </p>
            <button className="btn common-bg-color px-5 py-2 rounded-pill  text-white fw-bold text-uppercase mt-2">
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
