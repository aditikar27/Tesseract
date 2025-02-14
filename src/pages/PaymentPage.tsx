const PaymentPage = () => {
    return (
        <div>
            <h1>Payment</h1>
            <p>Simulating UPI Payment...</p>
            <button onClick={() => alert("Payment Successful! Your token is 1234.")}>
                Pay ₹XXX
            </button>
        </div>
    );
};

export default PaymentPage;
