import React from "react";
import "./Feature.css";

interface IFeature {
  featureId: number;
  featureTitle: string;
  featureDescription: string;
  featureImage: string;
}

const Feature = (props: IFeature) => {
  return (
    <div>
      <h1 className="features-header">Why use the Fuzzy Coffee Machine?</h1>
      <div className="feature-container">
        <img className="feature-image" src={props.featureImage} alt="" />
        <img
          className="feature-image"
          src={require("../Assets/Pictures/coffeemachine2.jpg")}
          alt=""
        />
        <h3 className="feature-header">{props.featureTitle}</h3>
        <p className="feature-description">{props.featureDescription}</p>
      </div>
    </div>
  );
};

export default Feature;
