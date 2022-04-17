import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
import banner1 from "../../../../Images/banner/banner1.jpg";
import banner2 from "../../../../Images/banner/banner2.jpg";
import banner4 from "../../../../Images/banner/banner4.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>-Henry David Thoreau</h3>
            <p>
              Success usually comes to those who are too busy to be looking for
              it.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>–Erin Gray</h3>
            <p>
              Once you are exercising regularly, the hardest thing is to stop
              it.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src={banner4}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>-Babe Ruth</h3>
            <p>You just can’t beat the person who never gives up.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
