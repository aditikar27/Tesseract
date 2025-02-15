import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();
  
  const cartCount = cartItems.reduce((acc: number, item: { quantity: number }) => acc + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="logo">
        <img className="nav-logo" src="public/api/logo.png" alt="CR"></img>
      </div>
      <div className="nav-buttons">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/cart" className="nav-button">Cart 🛒 ({cartCount})</Link>
        <Link to="/profile" className="nav-button">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
