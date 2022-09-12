import React from "react";
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import Footer from "../Components/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
