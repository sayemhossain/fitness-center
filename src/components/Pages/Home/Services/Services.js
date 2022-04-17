import React, { useState } from "react";
import { useEffect } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container my-5">
      <div>
        <h2 className="text-center fw-bold text-uppercase ">
          Our <span style={{ color: "#ff7722" }}>Services</span>
        </h2>
        <hr className="w-50 mx-auto " />
      </div>
      <div className="service-container container my-4">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
