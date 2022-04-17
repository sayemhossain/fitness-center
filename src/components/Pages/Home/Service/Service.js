import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Service.css";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { name, price, img, description } = props.service;

  return (
    <div className="mx-auto my-3">
      <div className="card rounded p-2 text-center" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <h3 className="text-center mb-0 mt-2 card-price ">{price}</h3>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text mb-4">
            {description.length > 150
              ? description.slice(0, 150) + "..."
              : description}
          </p>
          <Link
            to="/"
            className="card-btn rounded-pill px-4 py-2 text-white text-uppercase"
          >
            <FontAwesomeIcon className="me-1" icon={faCartShopping} /> purchase
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
