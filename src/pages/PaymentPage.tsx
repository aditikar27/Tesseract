import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/PaymentPage.css";

const PaymentPage = () => {
  const [tokenNumber, setTokenNumber] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [showQR, setShowQR] = useState(false);
  const [pendingToken, setPendingToken] = useState<string | null>(null); // Store token temporarily
  const navigate = useNavigate();
  const { cartItems, totalAmount, clearCart, addOrder } = useCart();

  const handlePaymentSuccess = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    setIsVisible(false);
    setShowQR(true);

    // Generate token number but don't display it yet
    const newToken = Math.floor(1000 + Math.random() * 9000).toString();
    setPendingToken(newToken);

    // Create order
    const order = {
      storeId: cartItems[0].storeId,
      tokenNumber: newToken,
      items: cartItems,
      totalAmount,
      timestamp: new Date().toLocaleString(),
    };

    addOrder(order);
    localStorage.setItem("activeToken", newToken);
  };

  const handleCloseQR = () => {
    setShowQR(false);
    setTokenNumber(pendingToken); // Now show the success message
    setTimeout(() => {
      clearCart();
    }, 1000); // Delay clearing the cart so the user sees the token
  };

  const handleBackToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="payment-container">
      <h2>Payment Page</h2>
      {isVisible && (
        <button className="pay-button" onClick={handlePaymentSuccess}>
          Pay Now
        </button>
      )}

      {/* QR Code Popup */}
      {showQR && (
        <div className="qr-overlay">
          <div className="qr-box">
            <h3>Scan to Pay</h3>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3DROa2YXiAudJqCsOpo4ZtXNQDwJfS0ZKgA&s"
              alt="QR Code"
              className="qr-image"
            />
            <button className="done-button" onClick={handleCloseQR}>
              Done
            </button>
          </div>
        </div>
      )}

      {tokenNumber && (
        <div className="token-display">
          <h3>Payment Successful! 🎉</h3>
          <p>
            Your Token Number: <strong>{tokenNumber}</strong>
          </p>
          <p>Show this token at the counter to collect your order.</p>
          <button className="back-button" onClick={handleBackToCart}>
            Back to Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
