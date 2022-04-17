import React from "react";

const Service = (props) => {
  const { name, price, img, description } = props.service;

  return (
    <div className="mx-auto my-3">
      <div className="card rounded p-2" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <p className="text-center mb-0 mt-2 text-danger fw-bold">{price}</p>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {description.length > 150
              ? description.slice(0, 150) + "..."
              : description}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Service;
