import "./Hero.css";
import Button, {EIntent} from "./UI/Button";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import scrollToTop from "../Utility/ScrollToTop";

const Hero = () => {
  const scrollWithOffset = (el: HTMLElement, offset: number) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
      <div className="hero-container">
        <div className="hero-content-container">
          <h1 className="hero-h1">Your coffee... Our passion!</h1>
          <p className="hero-p">
            Local start-up of a small team of coffee enthusiasts deserunt ullamco
            est sit aliqua dolor do amet sint. Velit officia consequat duis enim.
          </p>
          <div className="hero-button-container">
            <HashLink to="/#features" scroll={(el) => scrollWithOffset(el, 120)}>
              <Button text="LEARN MORE" intent={EIntent.Transparent}/>
            </HashLink>
            <Link to="/products" onClick={scrollToTop}>
              <Button text="BUY NOW" intent={EIntent.Solid}/>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Hero;
