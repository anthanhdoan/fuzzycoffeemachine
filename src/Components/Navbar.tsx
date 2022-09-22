import {BsCart3, BsGrid} from "react-icons/bs";
import "./Navbar.css";
import {ReactComponent as Logo} from "../Assets/Pictures/Logo.svg";
import {Link, useLocation} from "react-router-dom";
import scrollToTop from "../Utility/ScrollToTop";
import {useContext} from "react";
import {CartContext, ICartItems} from "../Contexts/CartContext";

const Navbar = () => {
  const [cartItems] = useContext(CartContext);
  let {pathname} = useLocation()

  const totalCartItems = (items: Array<ICartItems>) => {
    let totalProducts = 0
    items.forEach(prod => {
      totalProducts = totalProducts + prod.amount
    })
    return totalProducts
  }

  const toggleItemBadge = () => {
    return totalCartItems(cartItems) < 1 ? 'hide' : 'nav-cart-items'
  }

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
            <BsGrid className={`nav-icon`}/>
          </Link>
          <Link to="/cart" onClick={scrollToTop} className="nav-cart-icon">
            <BsCart3 className="nav-icon"/>
            <div
                className={toggleItemBadge()}>{totalCartItems(cartItems)}</div>
          </Link>
        </div>
      </nav>
  );
};

export default Navbar;
