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

  const toggleNavClasses = (path: string) => {
    switch (path) {
      case '/':
        return "nav-darkmode"
        break;
      case '/payment-provider':
        return "nav-hidden"
        break;
      case '/payment-success':
        return "nav-darkmode"
        break;
      case '/payment-failure':
        return "nav-darkmode"
        break;
      default:
        return "nav-lightmode"

    }
  }
  const toggleIconContrast = (path: string) => {
    switch (path) {
      case '/':
        return "nav-icon-darkmode"
        break;
      case '/payment-success':
        return "nav-icon-darkmode"
        break;
      case '/payment-failure':
        return "nav-icon-darkmode"
        break;
      default:
        return "nav-icon-lightmode"
    }
  }

  return (
      <nav className={`nav-container ${toggleNavClasses(pathname)}`}>
        <Link to="/" onClick={scrollToTop}>
          <Logo className={`nav-logo-img ${toggleIconContrast(pathname)}`}/>
        </Link>
        <div className="nav-menu">
          <Link to="/products" onClick={scrollToTop}>
            <BsGrid className={`nav-icon ${toggleIconContrast(pathname)}`}/>
          </Link>
          <Link to="/cart" onClick={scrollToTop} className={`nav-cart-icon ${toggleIconContrast(pathname)}`}>
            <BsCart3 className="nav-icon"/>
            <div
                className={toggleItemBadge()}>{totalCartItems(cartItems)}</div>
          </Link>
        </div>
      </nav>
  );
};

export default Navbar;
