import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


const Navbar = () => {
  const { cart } = useCart();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/cart">
        🛒 Cart ({cartCount})
      </Link>
    </nav>
  );
};

export default Navbar;
