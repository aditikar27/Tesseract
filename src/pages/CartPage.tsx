import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/CartPage.css";

const CartPage = () => {
  const { cartItems, totalAmount, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate(); // Use navigate instead of window.location.href

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-details">
                  <span className="cart-name">{item.name}</span>
                  <span className="cart-price">₹{item.price}</span>
                </div>
                <span className="cart-quantity">x {item.quantity}</span>
                <span className="cart-item-total">
                  ₹{item.price * item.quantity}
                </span>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id, item.storeId)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3 className="cart-total-amount">Total: ₹{totalAmount}</h3>

          <div className="cart-buttons">
            <button className="clear-cart-button" onClick={clearCart}>
              Clear Cart
            </button>
            {totalAmount > 0 && (
              <button
                className="proceed-to-payment-button"
                onClick={() => navigate("/payment")}
              >
                Proceed to Payment
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
