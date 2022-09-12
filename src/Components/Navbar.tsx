import { BsCart3, BsGrid } from "react-icons/bs";
import "./Navbar.css";
import { ReactComponent as Logo } from "../Assets/Pictures/Logo.svg";
import { Link } from "react-router-dom";
import scrollToTop from "../Utility/ScrollToTop";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <Link to="/" onClick={scrollToTop}>
        <Logo className="nav-logo-img" />
      </Link>
      <div className="nav-menu">
        <Link to="/productsData" onClick={scrollToTop}>
          <BsGrid className="nav-icon" />
        </Link>
        <BsCart3 className="nav-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
