import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/PaymentPage.css";

const PaymentPage = () => {
  const [tokenNumber, setTokenNumber] = useState<string | null>(null);
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const handlePaymentSuccess = () => {
    const newToken = Math.floor(1000 + Math.random() * 9000).toString();
    setTokenNumber(newToken);
    localStorage.setItem("activeToken", newToken);
    clearCart(); // Clear cart after successful payment
  };

  const handleBackToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="payment-container">
      <h2>Payment Page</h2>
      <button className="pay-button" onClick={handlePaymentSuccess}>
        Pay Now
      </button>

      {tokenNumber && (
        <div className="token-display">
          <h3>Payment Successful! 🎉</h3>
          <p>Your Token Number: <strong>{tokenNumber}</strong></p>
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