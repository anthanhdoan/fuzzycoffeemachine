import "./Features.css";
import React from "react";
import {Link} from "react-router-dom";
import Button, {EIntent} from "./UI/Button";
import scrollToTop from "../Utility/ScrollToTop";

const Features = () => {
  return (
      <div className="features-wrapper">
        <div className="features-container" id="features">
          <h1 className="features-header">Why use the Fuzzy Coffee Machine?</h1>
          <div className="feature-container">
            <div className="feature-content-container">
              <h3 className="feature-header">Easy to use</h3>
              <p className="feature-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt. Lorem ipsum dolor sit amet!
              </p>
            </div>
            <div className="feature-image-container image-right">
              <img
                  className="feature-image"
                  src={require("../Assets/Pictures/coffeemachine2edit.jpg")}
                  alt=""
              />
            </div>
          </div>
          <div className="feature-container text-right">
            <div className="feature-content-container feature-content-right">
              <h3 className="feature-header">Easy to maintain</h3>
              <p className="feature-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt. Lorem ipsum dolor sit amet!
              </p>
            </div>
            <div className="feature-image-container image-left">
              <img
                  className="feature-image"
                  src={require("../Assets/Pictures/baristagirl2.jpg")}
                  alt=""
              />
            </div>
          </div>
          <div className="feature-container">
            <div className="feature-content-container">
              <h3 className="feature-header">Patented design</h3>
              <p className="feature-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt. Lorem ipsum dolor sit amet!
              </p>
            </div>
            <div className="feature-image-container image-right">
              <img
                  className="feature-image"
                  src={require("../Assets/Pictures/design.jpg")}
                  alt=""
              />
            </div>
          </div>
          <Link to="/products" onClick={scrollToTop}>
            <Button
                className="features-button"
                text="SEE OUR COLLECTION"
                intent={EIntent.Solid}
            />
          </Link>
        </div>
      </div>
  );
};

export default Features;
