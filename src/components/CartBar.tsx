import { useCart } from "../context/CartContext";
import { useLocation, useNavigate } from "react-router-dom";

const CartBar = () => {
  const { cartItems, totalAmount } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === "/cart" || location.pathname === "/payment") return null;

  return (
    cartItems.length > 0 && (
      <div className="fixed bottom-0 left-0 w-full bg-orange-500 text-white p-4 flex justify-between items-center shadow-lg">
        <div>
          🛒 {cartItems.length} {cartItems.length === 1 ? "item" : "items"} | ₹{totalAmount}
        </div>
        <button
          className="bg-black px-4 py-2 rounded-lg"
          onClick={() => navigate("/cart")}
        >
          View Cart
        </button>
      </div>
    )
  );
};

export default CartBar;
