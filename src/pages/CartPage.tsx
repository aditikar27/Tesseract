import { useCart } from "../context/CartContext";
import "../styles/CartPage.css"; // Import the CSS file

const CartPage = () => {
  const { cartItems, totalAmount, storeId, removeFromCart, clearCart } = useCart();

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
               

                {/* Details */}
                <div className="cart-details">
                  <span className="cart-name">{item.name}</span>
                  <span className="cart-price">₹{item.price}</span>
                </div>

                {/* Quantity */}
                <span className="cart-quantity">x {item.quantity}</span>

                {/* Item Total */}
                <span className="cart-item-total">
                  ₹{item.price * item.quantity}
                </span>

                {/* Remove Button */}
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Total Amount */}
          <h3 className="cart-total-amount">Total: ₹{totalAmount}</h3>

          {/* Buttons */}
          <div className="cart-buttons">
            <button className="clear-cart-button" onClick={clearCart}>
              Clear Cart
            </button>
            {totalAmount > 0 && (
              <button
                className="proceed-to-payment-button"
                onClick={() => (window.location.href = "/payment")}
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