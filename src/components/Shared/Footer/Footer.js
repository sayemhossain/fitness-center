import React from "react";
import "./Footer.css";
import logo from "../../../Images/logo/logo.png";

const Footer = () => {
  return (
    <div className="pt-5 px-3 footer-color text-white">
      <section id="footer" className="pt-5 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 footer-img">
              <img className="mb-4" src={logo} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                obcaecati quisquam id sit omnis explicabo voluptate aut placeat,
                soluta, nisi ea magni facere, itaque incidunt modi? Magni, et
                voluptatum dolorem.
              </p>
            </div>
            <div className="col-lg-4 my-3 mt-md-0">
              <h3 className="mb-3 all-header">Open Hours</h3>
              <div className="row">
                <div className="col-6">Monday</div>
                <div className="col-6">9:00 - 24:00</div>
              </div>
              <div className="row">
                <div className="col-6">Tuesday</div>
                <div className="col-6">9:00 - 24:00</div>
              </div>
              <div className="row">
                <div className="col-6">Wednesday</div>
                <div className="col-6">9:00 - 24:00</div>
              </div>
              <div className="row">
                <div className="col-6">Thursday</div>
                <div className="col-6">9:00 - 24:00</div>
              </div>
              <div className="row">
                <div className="col-6">Friday</div>
                <div className="col-6">9:00 - 2:00</div>
              </div>
              <div className="row">
                <div className="col-6">Saturday</div>
                <div className="col-6">9:00 - 24:00</div>
              </div>
              <div className="row">
                <div className="col-6">Sunday</div>
                <div className="col-6 mb-4">9:00 - 24:00</div>
              </div>
            </div>
            <div className="col-lg-4">
              <h3 className=" mb-2 all-header">Newsletter</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <input
                className="form-control"
                type="text"
                placeholder="Enter Email"
              />
              <button className="footer-btn py-2 w-100 text-white rounded-pill mt-3 fw-bold">
                Submit
              </button>
            </div>
          </div>
          <hr />
          <p className="text-center text-secondary">
            copyright 2022. all right reserved. Design by
            <span className="text-danger">
              {" "}
              <span className="text-success">|</span> Shayem Hossain
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
