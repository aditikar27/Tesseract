import { useCart } from "../context/CartContext";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/CartBar.css"; // Import the CSS file

const CartBar = () => {
  const { cartItems, totalAmount } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  // Hide the CartBar on the cart and payment pages
  if (location.pathname === "/cart" || location.pathname === "/payment") return null;

  return (
    cartItems.length > 0 && (
      <div className="cart-bar">
        <div className="cart-info">
          🛒 {cartItems.length} {cartItems.length === 1 ? "item" : "items"} | ₹{totalAmount}
        </div>
        <button
          className="view-cart-button"
          onClick={() => navigate("/cart")}
        >
          View Cart
        </button>
      </div>
    )
  );
};

export default CartBar;