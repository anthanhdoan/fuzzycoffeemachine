import {BsCart3, BsGrid} from "react-icons/bs";
import "./Navbar.css";
import {ReactComponent as Logo} from "../Assets/Pictures/Logo.svg";
import {Link, useLocation} from "react-router-dom";
import scrollToTop from "../Utility/ScrollToTop";

const Navbar = () => {
  let {pathname} = useLocation()

  const toggleContrast = () => {
    if (pathname !== "/") {
      return "nav-lightmode"
    } else {
      return "nav-darkmode"
    }
  }


  return (
      <nav className={`nav-container ${toggleContrast()}`}>
        <Link to="/" onClick={scrollToTop}>
          <Logo className="nav-logo-img"/>
        </Link>
        <div className="nav-menu">
          <Link to="/products" onClick={scrollToTop}>
            <BsGrid className="nav-icon"/>
          </Link>
          <Link to="/checkout" onClick={scrollToTop}>
            <BsCart3 className="nav-icon"/>
          </Link>
        </div>
      </nav>
  );
};

export default Navbar;
