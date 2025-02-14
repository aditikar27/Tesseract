import { useState } from "react";

const PaymentPage = () => {
  const [tokenNumber, setTokenNumber] = useState<string | null>(null);

  const handlePaymentSuccess = () => {
    const newToken = Math.floor(1000 + Math.random() * 9000).toString(); // Generate a random token
    setTokenNumber(newToken);
    
    // Save token in localStorage (temporary until collected)
    localStorage.setItem("activeToken", newToken);
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
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
